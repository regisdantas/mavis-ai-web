import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CardTags from './CardTags'

describe('CardTags', () => {
  it('keeps assigned tags in a disclosure while leaving the date visible', () => {
    const toggleTag = jest.fn()
    const createRef = () => React.createRef<HTMLDivElement>()
    const { container } = render(
      <CardTags
        date="2026-11-25"
        tags={['work', 'personal']}
        availableTags={['work', 'personal']}
        readOnly={false}
        tagPickerRef={createRef()}
        tagDropdownRef={createRef()}
        otherTagsDropdownRef={React.createRef<HTMLDetailsElement>()}
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

    const disclosure = container.querySelector('details')

    expect(screen.getByText('Nov 25')).toBeTruthy()
    expect(screen.getByText('2')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Add tag' })).toBeTruthy()
    expect(disclosure?.open).toBe(false)
    expect(disclosure?.querySelector('button')?.textContent).toBe('Work')

    fireEvent.click(screen.getByLabelText('Show 2 note tags'))

    expect(disclosure?.open).toBe(true)
    fireEvent.click(screen.getByRole('button', { name: 'Work' }))
    expect(toggleTag).toHaveBeenCalledWith('work')
  })
})
