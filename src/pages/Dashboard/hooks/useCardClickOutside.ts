import { RefObject, useEffect } from 'react'

interface UseCardClickOutsideProps {
  tagPickerRef: RefObject<HTMLDivElement>
  tagDropdownRef: RefObject<HTMLDivElement>
  otherTagsDropdownRef: RefObject<HTMLDetailsElement>
  colorPickerRef: RefObject<HTMLDivElement>
  colorDropdownRef: RefObject<HTMLDivElement>
  templatePickerRef: RefObject<HTMLDivElement>
  templateDropdownRef: RefObject<HTMLDivElement>
  closeTagPicker: () => void
  closeColorPicker: () => void
  closeTemplatePicker: () => void
}

export function useCardClickOutside({
  tagPickerRef,
  tagDropdownRef,
  otherTagsDropdownRef,
  colorPickerRef,
  colorDropdownRef,
  templatePickerRef,
  templateDropdownRef,
  closeTagPicker,
  closeColorPicker,
  closeTemplatePicker,
}: UseCardClickOutsideProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      const insideTagTrigger = tagPickerRef.current?.contains(target) ?? false
      const insideTagDropdown = tagDropdownRef.current?.contains(target) ?? false

      if (!insideTagTrigger && !insideTagDropdown) {
        closeTagPicker()
      }

      const insideOtherTagsDropdown = otherTagsDropdownRef.current?.contains(target) ?? false

      if (!insideOtherTagsDropdown && otherTagsDropdownRef.current) {
        otherTagsDropdownRef.current.open = false
      }

      const insideColorTrigger = colorPickerRef.current?.contains(target) ?? false
      const insideColorDropdown = colorDropdownRef.current?.contains(target) ?? false

      if (!insideColorTrigger && !insideColorDropdown) {
        closeColorPicker()
      }

      const insideTemplateTrigger = templatePickerRef.current?.contains(target) ?? false
      const insideTemplateDropdown = templateDropdownRef.current?.contains(target) ?? false

      if (!insideTemplateTrigger && !insideTemplateDropdown) {
        closeTemplatePicker()
      }
    }

    document.addEventListener('pointerdown', handleClickOutside)

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
    }
  }, [
    tagPickerRef,
    tagDropdownRef,
    otherTagsDropdownRef,
    colorPickerRef,
    colorDropdownRef,
    templatePickerRef,
    templateDropdownRef,
    closeTagPicker,
    closeColorPicker,
    closeTemplatePicker,
  ])
}
