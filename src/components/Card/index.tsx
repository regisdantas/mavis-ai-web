import React from "react";
import { CardContainer } from "./styles";
import {
  FiTrash2,
  FiLock,
  FiUnlock,
  FiStar,
  FiType,
  FiMic,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { MdOutlineColorLens } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropleft } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa6";

import { isJsonString } from "../../utils";
import { TbPinned, TbPinnedOff } from "react-icons/tb";
import { formatDate, limitInputLength } from "../../utils";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkEmoji from "remark-emoji";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";
import stringWidth from "string-width";

import { useSpeechRecognition } from "../../hooks/useSpeechRecognition";
import { useTextToSpeech } from "../../hooks/useTextToSpeech";
import { useClickOutside } from "../../hooks/useClickOutside";

interface ICardProps {
  id: string;
  number: number;
  date: string;
  content: string;
  onDeleteCard: any;
  onChangeContent: any;
}

const defaultContent = {
  title: "",
  type: "record",
  text: "",
  color: "#fff",
  locked: false,
  favorite: false,
  pinned: false,
  collapsed: false,
};

const noteColors = [
  "#F8F9FA",
  "#CED4DA",
  "#FFF4B5",
  "#FFDCC8",
  "#FFCDD2",
  "#FADCE6",
  "#DCCCFB",
  "#BBDEFB",
  "#C8E6C9",
  "#B2DFDB",
  "#F3E5C8",
  "#D7CCC8",
];

interface IColorPickerProps {
  color: string[];
  onColorClicked: any;
}

const ColorPicker: React.FC<IColorPickerProps> = ({
  color,
  onColorClicked,
}) => {
  return (
    <div className="colorPicker">
      {color.map((c) => (
        <button
          key={c}
          style={{
            backgroundColor: c,
            width: 50,
            height: 20,
            border: "none",
            borderRadius: 3,
            cursor: "pointer",
            margin: 0,
            padding: 0,
          }}
          onClick={() => onColorClicked(c)}
        />
      ))}
    </div>
  );
};

const Card: React.FC<ICardProps> = ({
  id,
  number,
  date,
  content,
  onDeleteCard,
  onChangeContent,
}: ICardProps) => {
  const { listening, transcript, startListening, stopListening } =
    useSpeechRecognition();
  const { speak, speaking, stopSpeaking } = useTextToSpeech();
  const [editingContent, setEditingContent] = React.useState(false);
  const [showToolBox, setShowToolBox] = React.useState(false);
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const toolboxRef = React.useRef(null);
  const footboxRef = React.useRef(null);

  const closeToolBox = () => {
    setShowToolBox(false);
    setShowColorPicker(false);
  };

  useClickOutside(toolboxRef, () => closeToolBox());

  React.useEffect(() => {
    if (listening) {
      onChangeContent(id, JSON.stringify({ ...objContent, text: transcript }));
    }
  }, [listening]);

  const objContent = isJsonString(content)
    ? JSON.parse(content)
    : { ...defaultContent, text: content };
  const [value, setValue] = React.useState(objContent.text || "");
  return (
    <CardContainer key={id}>
      <div
        className="ContentContainer"
        style={{ backgroundColor: objContent.color || "#eee" }}
      >
        <header className="header">
          <strong className="titleBox">
            {objContent.pinned ? (
              <TbPinnedOff
                title="Unpin note"
                size={18}
                onClick={() =>
                  onChangeContent(
                    id,
                    JSON.stringify({ ...objContent, pinned: false })
                  )
                }
              />
            ) : (
              <TbPinned
                title="Pin note"
                size={18}
                onClick={() =>
                  onChangeContent(
                    id,
                    JSON.stringify({ ...objContent, pinned: true })
                  )
                }
              />
            )}
            {!showToolBox ? (
              <span
                className="title"
                title="Note name"
                role="textbox"
                contentEditable
                data-placeholder="🙋 Give me a name"
                onInput={(e) => limitInputLength(e, 40)}
                onBlur={(e) =>
                  onChangeContent(
                    id,
                    JSON.stringify({ ...objContent, title: e.target.innerText })
                  )
                }
              >
                {objContent.title}
              </span>
            ) : (
              <span className="title"></span>
            )}
          </strong>
          <span ref={toolboxRef} className="toolbox">
            {showToolBox ? (
              <>
                {listening ? (
                  <FiSend
                    size={18}
                    title="Stop listening"
                    onClick={stopListening}
                  />
                ) : (
                  <FiMic
                    size={18}
                    title="Listen note"
                    onClick={startListening}
                  />
                )}
                <RxDividerVertical size={18} />
                <FiTrash2
                  size={18}
                  title="Delete note"
                  onClick={(e) => onDeleteCard(id)}
                />
                <RxDividerVertical size={18} />
                {objContent.favorite ? (
                  <FaStar
                    size={18}
                    title="Unfavorite note"
                    onClick={(e) =>
                      onChangeContent(
                        id,
                        JSON.stringify({ ...objContent, favorite: false })
                      )
                    }
                  />
                ) : (
                  <FiStar
                    size={18}
                    title="Favorite note"
                    onClick={(e) =>
                      onChangeContent(
                        id,
                        JSON.stringify({ ...objContent, favorite: true })
                      )
                    }
                  />
                )}
                {objContent.locked ? (
                  <FiUnlock
                    size={18}
                    title="Unlock note"
                    onClick={(e) =>
                      onChangeContent(
                        id,
                        JSON.stringify({ ...objContent, locked: false })
                      )
                    }
                  />
                ) : (
                  <FiLock
                    size={18}
                    title="Lock note"
                    onClick={(e) =>
                      onChangeContent(
                        id,
                        JSON.stringify({ ...objContent, locked: true })
                      )
                    }
                  />
                )}
                <MdOutlineColorLens
                  size={18}
                  title="Change note background color"
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  onBlur={() => setShowColorPicker(false)}
                />
                <FiType size={18} title="Load template" />
              </>
            ) : (
              <></>
            )}
            {showColorPicker && (
              <ColorPicker
                color={noteColors}
                onColorClicked={(selectedColor: string) => {
                  onChangeContent(
                    id,
                    JSON.stringify({
                      ...objContent,
                      color: selectedColor,
                    })
                  );
                  setShowColorPicker(false);
                }}
              />
            )}
            <BsThreeDotsVertical
              size={18}
              title="Tool Box"
              onClick={() => setShowToolBox(!showToolBox)}
              onBlur={() => closeToolBox()}
            />
            {objContent.collapsed ? (
              <IoMdArrowDropleft
                size={18}
                title="Expand note"
                onClick={() =>
                  onChangeContent(
                    id,
                    JSON.stringify({ ...objContent, collapsed: false })
                  )
                }
              />
            ) : (
              <IoMdArrowDropdown
                size={18}
                title="Collapse note"
                onClick={() =>
                  onChangeContent(
                    id,
                    JSON.stringify({ ...objContent, collapsed: true })
                  )
                }
              />
            )}
          </span>
        </header>
        {!objContent.collapsed ? (
          <>
            {editingContent ? (
              <textarea
                className="reactMarkDown"
                placeholder={`* ❓ What do you have for today?


<markdown editor>`}
                onFocus={(e) => {
                  const el = e.currentTarget;
                  el.style.height = "auto";
                  el.style.height = `${el.scrollHeight}px`;
                }}
                onChange={(e) => {
                  const el = e.currentTarget;
                  el.style.height = "auto";
                  el.style.height = `${el.scrollHeight}px`;
                  setValue(e.target.value);
                }}
                autoFocus
                value={value || ""}
                onBlur={(e) => {
                  onChangeContent(
                    id,
                    JSON.stringify({ ...objContent, text: value })
                  );
                  setEditingContent(false);
                }}
              />
            ) : (
              <div
                className={"reactMarkDown"}
                onClick={() => setEditingContent(true)}
              >
                <ReactMarkdown
                  children={value || "* ❓ What do you have for today?"}
                  remarkPlugins={[
                    [
                      remarkEmoji,
                      {
                        padSpaceAfter: false,
                        emoticon: true,
                      },
                    ],
                    [remarkToc, { tight: true, ordered: true }],
                    [remarkGfm, { stringLength: stringWidth }],
                    remarkMath,
                    rehypeKatex,
                    remarkBreaks,
                    remarkFrontmatter,
                  ]}
                />
              </div>
            )}
          </>
        ) : (
          <></>
        )}
        <footer className="footer">
          <span ref={footboxRef} className="footbox">
            <span className="date">{formatDate(date)}</span>
            <span className="toolbox">
              {speaking ? (
                <FiVolumeX
                  size={18}
                  title="Stop hearing note"
                  onClick={stopSpeaking}
                />
              ) : (
                <FiVolume2
                  size={18}
                  title="Hear note"
                  onClick={(e) => speak(value)}
                />
              )}
              <FaRegCopy
                size={18}
                title="Copy note"
                onClick={() => navigator.clipboard.writeText(value)}
              />
            </span>
          </span>
        </footer>
      </div>
    </CardContainer>
  );
};

export default Card;
