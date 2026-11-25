import { processMacros } from './templateMacros'

describe('processMacros calendar macros', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('resolves the current quarter', () => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date(2021, 9, 1, 12))

    expect(processMacros('/quarter')).toBe('4')
  })

  it('uses ISO week numbers across year boundaries', () => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date(2021, 0, 1, 12))

    expect(processMacros('/week')).toBe('53')
  })
})
