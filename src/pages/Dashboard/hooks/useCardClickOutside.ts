import { RefObject, useEffect } from 'react'

interface UseCardClickOutsideProps {
  tagPickerRef: RefObject<HTMLDivElement>
  colorPickerRef: RefObject<HTMLDivElement>
  templatePickerRef: RefObject<HTMLDivElement>
  closeTagPicker: () => void
  closeColorPicker: () => void
  closeTemplatePicker: () => void
}

export function useCardClickOutside({
  tagPickerRef,
  colorPickerRef,
  templatePickerRef,
  closeTagPicker,
  closeColorPicker,
  closeTemplatePicker,
}: UseCardClickOutsideProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      if (tagPickerRef.current && !tagPickerRef.current.contains(target)) {
        closeTagPicker()
      }

      if (colorPickerRef.current && !colorPickerRef.current.contains(target)) {
        closeColorPicker()
      }

      if (templatePickerRef.current && !templatePickerRef.current.contains(target)) {
        closeTemplatePicker()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [
    tagPickerRef,
    colorPickerRef,
    templatePickerRef,
    closeTagPicker,
    closeColorPicker,
    closeTemplatePicker,
  ])
}
