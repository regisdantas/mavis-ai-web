import React from 'react'
import styled from 'styled-components'

import { FiTrash2, FiType, FiMic, FiArchive, FiCpu, FiRotateCcw, FiSend } from 'react-icons/fi'
import { MdOutlineColorLens } from 'react-icons/md'
import { RxDividerVertical } from 'react-icons/rx'

import FloatingColorPicker from '../FloatingColorPicker'
import FloatingTemplatePicker from '../FloatingTemplatePicker'

import { IconButton } from '../../../../styles/global'
import { TemplateOption } from '../../../../utils'

interface CardActionsProps {
  isLocked: boolean
  listening: boolean
  aiLoading: boolean

  isArchived: boolean
  isTrash: boolean

  showColorPicker: boolean
  showTemplatePicker: boolean

  colorPickerRef: React.RefObject<HTMLDivElement>
  templatePickerRef: React.RefObject<HTMLDivElement>

  noteColors: string[]
  templateOptions: TemplateOption[]

  startListening: () => void
  stopListening: () => void

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
  isLocked,
  listening,
  aiLoading,
  isArchived,
  isTrash,
  showColorPicker,
  showTemplatePicker,
  colorPickerRef,
  templatePickerRef,
  noteColors,
  templateOptions,
  startListening,
  stopListening,
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
    <>
      <ActionsContainer>
        <IconButton
          disabled={isLocked}
          title="Change note background color"
          onClick={() => setShowColorPicker((v) => !v)}
        >
          <MdOutlineColorLens />
        </IconButton>

        <IconButton
          disabled={isLocked}
          title="Load template"
          onClick={() => setShowTemplatePicker((v) => !v)}
        >
          <FiType />
        </IconButton>

        <IconButton
          disabled={isLocked}
          data-keepeditor="true"
          title="AI assistant"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleAI}
        >
          <FiCpu color={aiLoading ? '#2563eb' : undefined} />
        </IconButton>

        <IconButton
          disabled={isLocked}
          data-keepeditor="true"
          title="Revert last change"
          onMouseDown={(e) => e.preventDefault()}
          onClick={undoLastChange}
        >
          <FiRotateCcw />
        </IconButton>

        {listening ? (
          <IconButton disabled={isLocked} title="Stop listening" onClick={stopListening}>
            <FiSend color="#2563eb" />
          </IconButton>
        ) : (
          <IconButton disabled={isLocked} title="Listen note" onClick={startListening}>
            <FiMic />
          </IconButton>
        )}

        <RxDividerVertical />

        <IconButton
          disabled={isLocked}
          title={isArchived ? 'Unarchive note' : 'Archive note'}
          onClick={archiveNote}
        >
          <FiArchive color={isArchived ? '#2563eb' : undefined} />
        </IconButton>

        <IconButton
          disabled={isLocked}
          title={isTrash ? 'Delete permanently' : 'Move to trash'}
          onClick={trashNote}
        >
          <FiTrash2 color={isTrash ? '#dc2626' : undefined} />
        </IconButton>
      </ActionsContainer>

      {showColorPicker && (
        <ColorPickerWrapper ref={colorPickerRef}>
          <FloatingColorPicker colors={noteColors} onColorClicked={onColorSelected} />
        </ColorPickerWrapper>
      )}

      {showTemplatePicker && (
        <TemplatePickerWrapper ref={templatePickerRef}>
          <FloatingTemplatePicker options={templateOptions} onPicked={onTemplateSelected} />
        </TemplatePickerWrapper>
      )}
    </>
  )
}

export default CardActions

const ActionsContainer = styled.span`
  position: relative;

  width: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

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
