import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CardTags from './CardTags'

describe('CardTags', () => {
  it('shows all assigned tags inline while leaving the date visible', () => {
    const toggleTag = jest.fn()
    const createRef = () => React.createRef<HTMLDivElement>()
    const { container } = render(
      <CardTags
        date="2026-11-25"
        tags={['work', 'personal']}
        searchContent=""
        fuzzySearchEnabled={false}
        availableTags={['work', 'personal']}
        readOnly={false}
        tagPickerRef={createRef()}
        tagDropdownRef={createRef()}
        showTagPicker={false}
        creatingTag={false}
        newTagName=""
        setShowTagPicker={jest.fn()}
        setCreatingTag={jest.fn()}
        setNewTagName={jest.fn()}
        onDateChange={jest.fn()}
        hasTag={() => false}
        toggleTag={toggleTag}
        createTag={jest.fn()}
        formatTag={(tag) => tag[0].toUpperCase() + tag.slice(1)}
        formatDate={() => 'Nov 25'}
      />
    )

    expect(screen.getByText('Nov 25')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Work' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Personal' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Add tag' })).toBeTruthy()
    expect(container.querySelector('details')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Work' }))
    expect(toggleTag).toHaveBeenCalledWith('work')
  })
})
