const mockDoc = jest.fn()
const mockGetDoc = jest.fn()
const mockSetDoc = jest.fn()

jest.mock('./firebase', () => ({ database: 'test-database' }))
jest.mock('firebase/firestore', () => ({
  doc: (...args: unknown[]) => mockDoc(...args),
  getDoc: (...args: unknown[]) => mockGetDoc(...args),
  setDoc: (...args: unknown[]) => mockSetDoc(...args),
}))

import { getTagPinPreferences, saveTagPinPreferences } from './tagPinPreferences'

describe('tag pin preferences', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockDoc.mockReturnValue('tag-pin-document')
  })

  it('loads unique unpinned tags from the signed-in user settings document', async () => {
    mockGetDoc.mockResolvedValue({
      exists: () => true,
      data: () => ({ unpinnedTags: ['work', 'work', 'personal'] }),
    })

    await expect(getTagPinPreferences('user-1')).resolves.toEqual(['work', 'personal'])
    expect(mockDoc).toHaveBeenCalledWith('test-database', 'users', 'user-1', 'settings', 'tagPins')
  })

  it('returns null when the user has not saved pin preferences', async () => {
    mockGetDoc.mockResolvedValue({ exists: () => false })

    await expect(getTagPinPreferences('user-1')).resolves.toBeNull()
  })

  it('writes deduplicated tag preferences to Firebase', async () => {
    mockSetDoc.mockResolvedValue(undefined)

    await saveTagPinPreferences('user-1', ['work', 'work', 'personal'])

    expect(mockSetDoc).toHaveBeenCalledWith('tag-pin-document', {
      unpinnedTags: ['work', 'personal'],
    })
  })
})
