import React from 'react'
import styled from 'styled-components'

import { FiTrash2, FiType, FiArchive, FiCpu, FiRotateCcw } from 'react-icons/fi'
import { MdOutlineColorLens } from 'react-icons/md'

import FloatingColorPicker from '../FloatingColorPicker'
import FloatingTemplatePicker from '../FloatingTemplatePicker'

import { IconButton } from '../../../../styles/global'
import { TemplateOption } from '../../utils/cardUtils'

interface CardActionsProps {
  readOnly: boolean
  aiLoading: boolean

  isArchived: boolean
  isTrash: boolean

  showColorPicker: boolean
  showTemplatePicker: boolean

  colorPickerRef: React.RefObject<HTMLDivElement>
  templatePickerRef: React.RefObject<HTMLDivElement>
  colorDropdownRef: React.RefObject<HTMLDivElement>
  templateDropdownRef: React.RefObject<HTMLDivElement>

  noteColors: string[]
  templateOptions: TemplateOption[]

  undoLastChange: () => void
  handleAI: () => void

  archiveNote: () => void
  trashNote: () => void

  setShowColorPicker: React.Dispatch<React.SetStateAction<boolean>>
  setShowTemplatePicker: React.Dispatch<React.SetStateAction<boolean>>

  onColorSelected: (color: string) => void
  onTemplateSelected: (option: TemplateOption) => void
}

const CardActions: React.FC<CardActionsProps> = ({
  readOnly,
  aiLoading,
  isArchived,
  isTrash,
  showColorPicker,
  showTemplatePicker,
  colorPickerRef,
  templatePickerRef,
  colorDropdownRef,
  templateDropdownRef,
  noteColors,
  templateOptions,
  undoLastChange,
  handleAI,
  archiveNote,
  trashNote,
  setShowColorPicker,
  setShowTemplatePicker,
  onColorSelected,
  onTemplateSelected,
}) => {
  return (
    <GeneralContainer>
      <ActionsContainer>
        <IconButton
          disabled={readOnly}
          title="Change note background color"
          onClick={() => setShowColorPicker((v) => !v)}
        >
          <MdOutlineColorLens />
        </IconButton>

        <IconButton
          disabled={readOnly}
          title="Load template"
          onClick={() => setShowTemplatePicker((v) => !v)}
        >
          <FiType />
        </IconButton>

        <IconButton
          disabled={readOnly}
          data-keepeditor="true"
          title="AI assistant"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleAI}
        >
          <FiCpu color={aiLoading ? '#2563eb' : undefined} />
        </IconButton>

        <IconButton
          disabled={readOnly}
          data-keepeditor="true"
          title="Revert last change"
          onMouseDown={(e) => e.preventDefault()}
          onClick={undoLastChange}
        >
          <FiRotateCcw />
        </IconButton>

        <IconButton
          disabled={readOnly}
          title={isArchived ? 'Unarchive note' : 'Archive note'}
          onClick={archiveNote}
        >
          <FiArchive color={isArchived ? '#2563eb' : undefined} />
        </IconButton>

        <IconButton
          disabled={readOnly}
          title={isTrash ? 'Delete permanently' : 'Move to trash'}
          onClick={trashNote}
        >
          <FiTrash2 color={isTrash ? '#dc2626' : undefined} />
        </IconButton>
      </ActionsContainer>

      {showColorPicker && (
        <ColorPickerWrapper ref={colorPickerRef}>
          <FloatingColorPicker
            colors={noteColors}
            onColorClicked={onColorSelected}
            dropdownRef={colorDropdownRef}
          />
        </ColorPickerWrapper>
      )}

      {showTemplatePicker && (
        <TemplatePickerWrapper ref={templatePickerRef}>
          <FloatingTemplatePicker
            options={templateOptions}
            onPicked={onTemplateSelected}
            dropdownRef={templateDropdownRef}
          />
        </TemplatePickerWrapper>
      )}
    </GeneralContainer>
  )
}

export default CardActions

const GeneralContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 0 0;
`

const ActionsContainer = styled.span`
  flex: 0 0 auto;
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  display: inline-flex;
  width: fit-content;

  margin: 0;
  padding: 0;

  z-index: 8;
`

const ColorPickerWrapper = styled.div`
  position: relative;
  width: 100%;
`

const TemplatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
`
