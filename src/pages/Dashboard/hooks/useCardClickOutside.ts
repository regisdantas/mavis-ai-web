import { RefObject, useEffect } from 'react'

interface UseCardClickOutsideProps {
  tagPickerRef: RefObject<HTMLDivElement>
  tagDropdownRef: RefObject<HTMLDivElement>
  colorPickerRef: RefObject<HTMLDivElement>
  colorDropdownRef: RefObject<HTMLDivElement>
  templatePickerRef: RefObject<HTMLDivElement>
  templateDropdownRef: RefObject<HTMLDivElement>
  toolboxRef: RefObject<HTMLDivElement>
  closeTagPicker: () => void
  closeColorPicker: () => void
  closeTemplatePicker: () => void
  closeToolbox: () => void
}

export function useCardClickOutside({
  tagPickerRef,
  tagDropdownRef,
  colorPickerRef,
  colorDropdownRef,
  templatePickerRef,
  templateDropdownRef,
  toolboxRef,
  closeTagPicker,
  closeColorPicker,
  closeTemplatePicker,
  closeToolbox,
}: UseCardClickOutsideProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      const insideTagTrigger = tagPickerRef.current?.contains(target) ?? false
      const insideTagDropdown = tagDropdownRef.current?.contains(target) ?? false

      if (!insideTagTrigger && !insideTagDropdown) {
        closeTagPicker()
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

      const insideToolbox = toolboxRef.current?.contains(target) ?? false

      if (!insideToolbox) {
        closeToolbox()
      }
    }

    document.addEventListener('pointerdown', handleClickOutside)

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
    }
  }, [
    tagPickerRef,
    tagDropdownRef,
    colorPickerRef,
    colorDropdownRef,
    templatePickerRef,
    templateDropdownRef,
    toolboxRef,
    closeTagPicker,
    closeColorPicker,
    closeTemplatePicker,
    closeToolbox,
  ])
}
