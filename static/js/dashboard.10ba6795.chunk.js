"use strict";(Array.isArray(globalThis.webpackChunkmavis_ai_web)?globalThis.webpackChunkmavis_ai_web:globalThis.webpackChunkmavis_ai_web=[]).push([[945],{3641(e,t,n){n.r(t),n.d(t,{default:()=>$n});var o=n(5043),r=n(2816),i=n(1009),a=n(4960),s=n(7149),l=n(7950),d=n(579);const c=({instruction:e,setInstruction:t,apiKeyInput:n,setApiKeyInput:o,requiresApiKey:r,error:a,loading:s,onClear:c,onSend:v,onClose:k,dropdownRef:j})=>(0,l.createPortal)((0,d.jsxs)(p,{ref:j,role:"dialog","aria-label":"AI assistant",onMouseDown:e=>e.stopPropagation(),children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(x,{children:"AI assistant"}),(0,d.jsx)(g,{type:"button","data-keepeditor":"true","aria-label":"Close AI assistant",onClick:k,children:(0,d.jsx)(i.yGN,{})})]}),r&&(0,d.jsx)(h,{type:"password","data-keepeditor":"true",autoComplete:"off",placeholder:"OpenAI API key","aria-label":"OpenAI API key",value:n,onChange:e=>o(e.target.value)}),(0,d.jsx)(m,{"data-keepeditor":"true",autoFocus:!0,rows:5,placeholder:"What should I change? For example: fix grammar, summarize, or rewrite professionally.","aria-label":"AI instruction",value:e,onChange:e=>t(e.target.value),onKeyDown:e=>{if("Escape"===e.key)return void k();const t="function"===typeof window.matchMedia?window.matchMedia("(max-width: 768px)").matches:window.innerWidth<=768;"Enter"!==e.key||t||e.ctrlKey||(e.preventDefault(),v())}}),a&&(0,d.jsx)(f,{role:"alert",children:a}),(0,d.jsxs)(b,{children:[(0,d.jsx)(w,{type:"button","data-keepeditor":"true",onClick:c,disabled:s,children:"Clear"}),(0,d.jsxs)(y,{type:"button","data-keepeditor":"true",onClick:v,disabled:s||!e.trim(),children:[(0,d.jsx)(i.kGk,{}),s?"Sending...":"Send"]})]})]}),document.body),p=r.Ay.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: min(440px, calc(100vw - 32px));
  max-height: min(80vh, 620px);
  padding: 16px;
  overflow-y: auto;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    top: auto;
    right: 12px;
    bottom: 12px;
    left: 12px;
    width: auto;
    max-height: 75vh;
    transform: none;
    padding: 14px;
  }
`,u=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,x=r.Ay.h2`
  margin: 0;
  color: #231f20;
  font-size: 16px;
  font-weight: 600;
`,g=r.Ay.button`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #555;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
`,h=r.Ay.input`
  width: 100%;
  min-height: 40px;
  padding: 10px 12px;
  border: 1px solid #d5d7dc;
  border-radius: 8px;
  background: #fff;
  color: #231f20;
  font: inherit;

  &:focus {
    outline: 2px solid rgba(79, 70, 229, 0.3);
    border-color: #4f46e5;
  }
`,m=r.Ay.textarea`
  width: 100%;
  min-height: 120px;
  max-height: 40vh;
  padding: 12px;
  resize: vertical;
  border: 1px solid #d5d7dc;
  border-radius: 8px;
  background: #fff;
  color: #231f20;
  font: inherit;
  line-height: 1.4;

  &:focus {
    outline: 2px solid rgba(79, 70, 229, 0.3);
    border-color: #4f46e5;
  }
`,f=r.Ay.p`
  margin: 0;
  color: #b91c1c;
  font-size: 13px;
`,b=r.Ay.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`,w=r.Ay.button`
  min-width: 64px;
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid #d5d7dc;
  border-radius: 8px;
  background: #f5f6f8;
  color: #333;
  font: inherit;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: #eceff3;
  }

  &:disabled {
    background: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 1;
  }
`,y=r.Ay.button`
  display: flex;
  min-width: 84px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 14px;
  border: 0;
  border-radius: 8px;
  background: #4f46e5;
  color: #fff;
  font: inherit;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: #4338ca;
  }

  &:disabled {
    background: #9ca3af;
    color: #fff;
    cursor: not-allowed;
    opacity: 1;
  }
`,v=({selectedTag:e,selectedDate:t,searchContent:n,onSearchChange:r,onDateChange:l,onAddNote:p,onCopyAllNotes:u,onSelectAll:x,onClearAll:g,onArchiveSelected:h,onDeleteSelected:m,onUndo:f,onRedo:b,canUndo:w,canRedo:y,noteAssistant:v,selectedCount:M,explorerExpanded:I,setExplorerExpanded:L,panelWidth:F,toolbarOffset:K,minimized:B,setMinimized:U,mobileActive:H,notesLocked:J,onToggleNotesLock:W})=>{const[G,q]=o.useState(!1),_=o.useRef(null),Y=o.useRef(null),V=o.useRef(null),X=o.useRef(null);o.useEffect(()=>{if(!G)return;const e=e=>{var t;const n=e.target;n instanceof Node&&null!==(t=_.current)&&void 0!==t&&t.contains(n)||q(!1)};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[G]),o.useEffect(()=>{var e;G&&(null===(e=Y.current)||void 0===e||e.focus())},[G]),o.useEffect(()=>{H||q(!1)},[H]),o.useEffect(()=>{if(!v.assistantOpen)return;const e=e=>{var t,n;const o=e.target;o instanceof Node&&(null!==(t=V.current)&&void 0!==t&&t.contains(o)||null!==(n=X.current)&&void 0!==n&&n.contains(o))||v.closeAssistant()};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[v]);const Z=M>0?g:x,Q=""===n.trim()?e.charAt(0).toUpperCase()+e.slice(1):"Search";return(0,d.jsxs)(k,{role:"toolbar","aria-label":`${Q} notes tools`,title:`${Q} notes`,toolbarOffset:K,barWidth:F,minimized:B,mobileActive:H,children:[(0,d.jsxs)(A,{$searchExpanded:G,children:[!B&&(0,d.jsx)(R,{type:"button",title:"Minimize notes panel","aria-label":"Minimize notes panel",onClick:()=>U(!0),children:(0,d.jsx)(i.prK,{})}),!B&&(0,d.jsx)($,{children:Q})]}),(0,d.jsx)(E,{children:(0,d.jsxs)(T,{$minimized:B,"data-search-expanded":G,children:[(0,d.jsx)(P,{type:"button",title:I?"Collapse notes menu":"Expand notes menu","aria-label":I?"Collapse notes menu":"Expand notes menu","data-sidebar-toggle":"notes",onClick:()=>L(!I),children:(0,d.jsx)(i.ND1,{})}),(0,d.jsxs)(j,{ref:_,$searchExpanded:G,children:[(0,d.jsx)(C,{$searchExpanded:G,type:"button","aria-label":"Open search","aria-expanded":G,tabIndex:G?-1:0,onClick:()=>q(!0),children:(0,d.jsx)(i.CKj,{})}),(0,d.jsx)("input",{ref:Y,"aria-hidden":!G,tabIndex:G?0:-1,placeholder:"Search",value:n,onChange:e=>r(e.target.value),onKeyDown:e=>{"Enter"!==e.key&&"Escape"!==e.key||(e.preventDefault(),e.currentTarget.blur(),q(!1))}}),(0,d.jsx)(S,{$searchExpanded:G,type:"button","aria-label":"Clear search",title:"Clear search",tabIndex:G?0:-1,disabled:!n,onClick:()=>r(""),children:(0,d.jsx)(s.rOP,{})})]}),(0,d.jsx)(D,{type:"button",$active:J,title:J?"Unlock note editing":"Lock note editing","aria-label":J?"Unlock note editing":"Lock note editing","aria-pressed":J,onClick:W,children:J?(0,d.jsx)(i.F5$,{}):(0,d.jsx)(i.K4k,{})}),(0,d.jsx)(N,{type:"button",$selected:M>0,$tone:"select",title:M>0?"Deselect all notes":"Select all visible notes","aria-label":M>0?"Deselect all notes":"Select all visible notes","aria-pressed":M>0,onClick:Z,children:M>0?(0,d.jsx)(i.TG1,{}):(0,d.jsx)(i.NLe,{})}),(0,d.jsx)(N,{type:"button",$tone:"copy",title:"Copy selected or visible notes","aria-label":"Copy selected or visible notes",onClick:u,children:(0,d.jsx)(i.nxz,{})}),"journal"===e&&(0,d.jsx)(O,{children:(0,d.jsx)("input",{title:"Select date","aria-label":"Select date",type:"date",value:t,onChange:l})}),(0,d.jsx)(N,{type:"button",$tone:"add",title:"Add note","aria-label":"Add note",onClick:p,children:(0,d.jsx)(a.n4h,{})}),(0,d.jsx)(N,{ref:V,type:"button",$tone:"ai",title:"AI assistant","aria-label":"AI assistant","aria-expanded":v.assistantOpen,disabled:J,onMouseDown:e=>e.preventDefault(),onClick:()=>{v.assistantOpen?v.closeAssistant():v.openAssistant()},children:(0,d.jsx)(i.Ojn,{})}),(0,d.jsx)(N,{type:"button",$tone:"redo",title:"Redo last note change","aria-label":"Redo last note change",disabled:J||!y,onClick:b,children:(0,d.jsx)(i.VI6,{})}),(0,d.jsx)(N,{type:"button",$tone:"undo",title:"Undo last note change","aria-label":"Undo last note change",disabled:J||!w,onClick:f,children:(0,d.jsx)(i.cO3,{})}),(0,d.jsx)(z,{"aria-hidden":"true"}),(0,d.jsx)(N,{type:"button",$tone:"archive",title:"Archive selected notes","aria-label":"Archive selected notes",disabled:J||0===M,onClick:h,children:(0,d.jsx)(i.OZ2,{})}),(0,d.jsx)(N,{type:"button",$tone:"trash",$rightSpace:!0,title:"Delete selected notes","aria-label":"Delete selected notes",disabled:J||0===M,onClick:m,children:(0,d.jsx)(i.IXo,{})})]})}),v.assistantOpen&&(0,d.jsx)(c,{instruction:v.instruction,setInstruction:v.setInstruction,apiKeyInput:v.apiKeyInput,setApiKeyInput:v.setApiKeyInput,requiresApiKey:v.requiresApiKey,error:v.error,loading:v.aiLoading,onClear:v.clearInstruction,onSend:()=>{v.submitInstruction()},onClose:v.closeAssistant,dropdownRef:X})]})},k=r.Ay.div`
  display: ${({minimized:e})=>e?"none":"flex"};
  position: absolute;
  left: ${({toolbarOffset:e})=>`${e}px`};
  top: 10px;
  width: ${({barWidth:e,minimized:t})=>t?"42px":`${e}px`};
  min-width: ${({minimized:e})=>e?"42px":"0"};
  height: 32px;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  border-bottom: 1px solid #d0d0d0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: ${({mobileActive:e})=>e?"flex":"none"};
    position: relative;
    top: auto;
    left: auto;
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    height: 40px;
    margin: 0;
    overflow-x: auto;
    overflow-y: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
  }
`,j=r.Ay.div`
  display: flex;
  flex: ${({$searchExpanded:e})=>e?"0 0 250px":"0 0 30px"};
  width: ${({$searchExpanded:e})=>e?"250px":"30px"};
  height: 30px;
  align-items: center;
  margin: 0 4px;
  overflow: hidden;
  border-radius: ${({$searchExpanded:e})=>e?"0 0 10px 10px":"10px"};
  background: ${({$searchExpanded:e})=>e?"#231f20":"transparent"};
  transition: width 240ms cubic-bezier(0.2, 0.8, 0.2, 1), background-color 180ms ease,
    border-radius 200ms ease;

  input {
    order: 1;
    display: block;
    flex: ${({$searchExpanded:e})=>e?"1 1 0%":"0 0 0px"};
    width: 0;
    min-width: 0;
    height: 100%;
    padding: ${({$searchExpanded:e})=>e?"0 10px":"0"};
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    opacity: ${({$searchExpanded:e})=>e?1:0};
    pointer-events: ${({$searchExpanded:e})=>e?"auto":"none"};
    transition: flex-grow 220ms ease, opacity 160ms ease, padding 220ms ease;
  }

  @media (max-width: 1260px) {
    flex-basis: ${({$searchExpanded:e})=>e?"160px":"30px"};
    width: ${({$searchExpanded:e})=>e?"160px":"30px"};
  }

  @media (max-width: 768px) {
    position: ${({$searchExpanded:e})=>e?"absolute":"relative"};
    top: ${({$searchExpanded:e})=>e?"2px":"auto"};
    left: ${({$searchExpanded:e})=>e?"20px":"auto"};
    z-index: ${({$searchExpanded:e})=>e?20:"auto"};
    flex-basis: ${({$searchExpanded:e})=>e?"calc(100% - 40px)":"17px"};
    width: ${({$searchExpanded:e})=>e?"calc(100% - 40px)":"17px"};
    min-width: ${({$searchExpanded:e})=>e?"0":"17px"};
    height: ${({$searchExpanded:e})=>e?"36px":"30px"};
    margin: ${({$searchExpanded:e})=>e?"0":"2px 0"};
    background: ${({$searchExpanded:e})=>e?"#fff":"transparent"};
    box-shadow: ${({$searchExpanded:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

    input {
      padding: ${({$searchExpanded:e})=>e?"0 10px":"0"};
      color: #231f20;
    }

    input::placeholder {
      color: rgba(35, 31, 32, 0.6);
    }
  }

  @media (max-width: 350px) {
    flex-basis: ${({$searchExpanded:e})=>e?"calc(100% - 40px)":"16px"};
    width: ${({$searchExpanded:e})=>e?"calc(100% - 40px)":"16px"};
    min-width: ${({$searchExpanded:e})=>e?"0":"16px"};
  }
`,C=r.Ay.button`
  order: 2;
  display: flex;
  width: ${({$searchExpanded:e})=>e?"0":"30px"};
  height: 30px;
  flex: ${({$searchExpanded:e})=>e?"0 0 0":"0 0 30px"};
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #2563eb;
  opacity: ${({$searchExpanded:e})=>e?0:1};
  pointer-events: ${({$searchExpanded:e})=>e?"none":"auto"};
  cursor: pointer;

  @media (max-width: 768px) {
    width: ${({$searchExpanded:e})=>e?"0":"17px"};
    flex-basis: ${({$searchExpanded:e})=>e?"0":"17px"};
    color: #60a5fa;
  }

  @media (max-width: 350px) {
    width: ${({$searchExpanded:e})=>e?"0":"16px"};
    flex-basis: ${({$searchExpanded:e})=>e?"0":"16px"};
  }
`,S=r.Ay.button`
  order: 3;
  display: flex;
  width: ${({$searchExpanded:e})=>e?"30px":"0"};
  min-width: ${({$searchExpanded:e})=>e?"30px":"0"};
  height: 30px;
  flex: ${({$searchExpanded:e})=>e?"0 0 30px":"0 0 0"};
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #2563eb;
  opacity: ${({$searchExpanded:e})=>e?1:0};
  pointer-events: ${({$searchExpanded:e})=>e?"auto":"none"};
  transition: flex-basis 220ms ease, opacity 160ms ease, margin 220ms ease;

  &:disabled {
    color: #9ca3af;
    cursor: default;
  }

  @media (max-width: 768px) {
    color: #60a5fa;
  }
`,A=r.Ay.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  height: 30px;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: ${({$searchExpanded:e})=>e?"none":"flex"};
  }
`,$=r.Ay.div`
  display: flex;
  min-width: 0;
  max-width: 160px;
  flex: 0 1 auto;
  align-items: center;
  margin: 0 8px;
  overflow: hidden;
  color: #4b4b50;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1260px) {
    display: none;
  }
`,E=r.Ay.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  height: 30px;
  margin-left: auto;
  white-space: nowrap;

  @media (max-width: 768px) {
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    height: 30px;
    margin-left: 0;
  }
`,T=r.Ay.div`
  display: ${({$minimized:e})=>e?"none":"flex"};
  flex: 0 0 auto;
  align-items: center;
  height: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    justify-content: space-between;
    padding-left: 20px;

    &[data-search-expanded='true'] > :not(:nth-child(2)) {
      display: none;
    }
  }
`,M=(e,t,n=!1)=>"undo"===e?n?"#f87171":"#dc2626":"redo"===e||"archive"===e?n?"#4ade80":"#16a34a":"trash"===e?n?"#f87171":"#dc2626":"ai"===e?n?"#a78bfa":"#7c3aed":"add"===e?n?"#86efac":"#4ade80":"search"===e?n?"#60a5fa":"#2563eb":"copy"===e?n?"#cbd5e1":"#64748b":"select"===e?t?n?"#a78bfa":"#4f46e5":n?"#60a5fa":"#2563eb":n?"#fff":"#2e2e2e",N=r.Ay.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: ${({$tone:e,$selected:t})=>M(e,t)};
  cursor: pointer;

  &:hover:not(:disabled) {
    background: rgba(128, 128, 128, 0.15);
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 1;
  }

  svg {
    flex-shrink: 0;
    color: inherit;
  }

  @media (max-width: 768px) {
    width: 16px;
    height: 30px;
    flex-basis: 16px;
    margin: 0;
    margin-right: ${({$rightSpace:e})=>e?"20px":"0"};
    border-radius: 7px;
    color: ${({$tone:e,$selected:t})=>M(e,t,!0)};

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.15);
    }

    &:disabled {
      color: #9ca3af;
      opacity: 1;
    }
  }

  @media (max-width: 350px) {
    width: 17px;
    flex-basis: 17px;
  }
`,z=r.Ay.span`
  display: block;
  width: 1px;
  height: 20px;
  flex: 0 0 1px;
  margin: 0 5px;
  background: rgba(80, 80, 80, 0.3);

  @media (max-width: 768px) {
    width: 1px;
    height: 18px;
    flex-basis: 1px;
    margin: 0;
    background: rgba(255, 255, 255, 0.45);
  }
`,D=r.Ay.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: ${({$active:e})=>e?"#4f46e5":"#2e2e2e"};
  cursor: pointer;

  svg {
    color: inherit;
  }

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 768px) {
    width: 16px;
    flex-basis: 16px;
    margin: 0;
    border-radius: 7px;
    color: ${({$active:e})=>e?"#4f46e5":"#fff"};

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  @media (max-width: 350px) {
    width: 17px;
    flex-basis: 17px;
  }
`,O=r.Ay.div`
  display: flex;
  align-items: center;

  height: 30px;

  input[type='date'] {
    width: 40px;
    min-width: 40px;
    height: 24px;
    border: none;
    background: transparent;
    color: transparent;
    overflow: hidden;
  }

  input[type='date']::-webkit-datetime-edit {
    display: none;
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    display: block;
    opacity: 1;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,R=r.Ay.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #9ca3af;
  cursor: pointer;

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 768px) {
    display: none;
  }
`,P=r.Ay.button`
  display: none;
  width: 20px;
  height: 30px;
  flex: 0 0 20px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;var I=n(2815),L=n(4966),F=n(2127);const K=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},B=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},U=e=>{if(!K(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))};var H=n(8222),J=n.n(H),W=n(8046),G=n(1286);const q=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),_=e=>{const t=(0,W.H9)(G.OO,"users",e);return(0,W.rJ)(t,"entries")};function Y(e){const[t,n]=o.useState([]),r=o.useRef(t),i=o.useRef([]),a=o.useRef([]),[,s]=o.useState(0),l=o.useRef(Promise.resolve()),d=o.useRef(e);o.useEffect(()=>{d.current!==e&&(d.current=e,r.current=[],n([]),i.current=[],a.current=[],s(e=>e+1))},[e]);const c=o.useCallback((t,n)=>{if(!e)return Promise.resolve();const o=l.current.then(async()=>{const o=new Map(n.map(e=>[e.id,e]));await Promise.all(t.map(async t=>{const n=o.get(t),r=await(async(e,t)=>{const n=_(e);return(await(0,W.GG)((0,W.P)(n,(0,W._M)("id","==",t)))).docs})(e,t);n?r.length?await Promise.all(r.map(t=>(0,W.BN)((0,W.H9)(G.OO,`users/${e}/entries/${t.id}`),n))):await(0,W.gS)(_(e),n):await Promise.all(r.map(t=>(0,W.kd)((0,W.H9)(G.OO,`users/${e}/entries/${t.id}`))))}))});return l.current=o.catch(()=>{}),o},[e]),p=o.useCallback(async(t,o=[],l=!0)=>{if(!e)return;const d=Array.from(new Set([...t.map(e=>e.id),...o]));if(!d.length)return;const p=new Set(d),u=r.current.filter(e=>p.has(e.id)),x=new Map(t.filter(e=>p.has(e.id)).map(e=>[e.id,e])),g=Array.from(x.values());if(u.length===g.length&&u.every(e=>{const t=x.get(e.id);return void 0!==t&&e.uid===t.uid&&e.content===t.content&&e.date===t.date&&e.createdAt===t.createdAt}))return;const h=q([...r.current.filter(e=>!p.has(e.id)),...g]);r.current=h,n(h),l&&(i.current.push({ids:d,before:u,after:g}),a.current=[],s(e=>e+1)),await c(d,g)},[c,e]),u=o.useCallback(async()=>{if(!e)return;const t=_(e),o=(await(0,W.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}}),i=q(o);r.current=i,n(i)},[e]),x=o.useCallback(async({content:t,date:n})=>{if(!e)return null;const o={uid:e,id:J()(),content:t,date:n,createdAt:(new Date).toISOString()};return await p([o]),o},[p,e]),g=o.useCallback(async(t,n)=>{if(!e)return;const o=r.current.find(e=>e.id===t);o&&await p([{...o,content:n}])},[p,e]),h=o.useCallback(async t=>{e&&r.current.some(e=>e.id===t.id)&&await p([t])},[p,e]),m=o.useCallback(async(e,t)=>{const n=r.current.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}}).map(n=>{const o=JSON.parse(n.content);return{...n,content:JSON.stringify({...o,tags:(o.tags||[]).map(n=>n===e?t:n)})}});await p(n)},[p]),f=o.useCallback(async e=>{const t=r.current.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}}).map(t=>{const n=JSON.parse(t.content);return{...t,content:JSON.stringify({...n,tags:(n.tags||[]).filter(t=>t!==e)})}});await p(t)},[p]),b=o.useCallback(async(e,t)=>{const n=r.current.filter(t=>e.includes(t.id)).map(e=>{const n=JSON.parse(e.content);return{...e,content:JSON.stringify({...n,tags:Array.from(new Set([...n.tags||[],t]))})}});await p(n)},[p]),w=o.useCallback(async(e,t)=>{const n=r.current.filter(t=>e.includes(t.id)).map(e=>{const n=JSON.parse(e.content);return{...e,content:JSON.stringify({...n,tags:(n.tags||[]).filter(e=>e!==t)})}});await p(n)},[p]),y=o.useCallback(async(t,n)=>{if(!e)return;const o=r.current.find(e=>e.id===t);o&&await p([{...o,date:n}])},[p,e]),v=o.useCallback(async t=>{e&&await p([],[t])},[p,e]),k=o.useCallback(async()=>{const e=i.current.pop();if(!e)return;a.current.push(e),s(e=>e+1);const t=e.ids.filter(t=>!e.before.some(e=>e.id===t));await p(e.before,t,!1)},[p]),j=o.useCallback(async()=>{const e=a.current.pop();if(!e)return;i.current.push(e),s(e=>e+1);const t=e.ids.filter(t=>!e.after.some(e=>e.id===t));await p(e.after,t,!1)},[p]),C=i.current.length>0,S=a.current.length>0;return{entries:t,fetchEntries:u,addEntry:x,updateEntry:g,replaceEntry:h,deleteEntry:v,updateEntryDate:y,renameTag:m,deleteTag:f,addTagToEntries:b,removeTagFromEntries:w,applyEntries:p,undoLastChange:k,redoLastChange:j,canUndo:C,canRedo:S}}var V=n(6625);const X=({children:e})=>{const t=document.getElementById("header-portal");return t?(0,l.createPortal)(e,t):null},Z={title:"",type:"record",tags:[],text:"",color:"#fff",pinned:!1,collapsed:!1},Q=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],ee=(e,t)=>{const n=t(e)?JSON.parse(e):{...Z,text:e};return n&&"object"===typeof n&&delete n.locked,{...Z,...n,tags:Array.from(new Set([...n.tags||[]]))}},te=e=>e.replace(/\b\w/g,e=>e.toUpperCase());async function ne(e,t){await(0,W.BN)((0,W.H9)(G.OO,"users",e,"settings","tagPins"),{unpinnedTags:Array.from(new Set(t))})}var oe=n(5561),re=n(7246),ie=n(5263);function ae(e,t){(0,o.useEffect)(()=>{function n(n){e.current&&n.target instanceof Node&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[e,t])}const se=({systemTags:e,customTags:t,unpinnedTags:n,onToggleTagPin:r,selectedTag:a,setSelectedTag:s,explorerExpanded:l,setExplorerExpanded:c,minimized:p,setMinimized:u,selectedNoteIds:x,onRenameTag:g,onDeleteTag:h,onAddTagToSelected:m,onRemoveTagFromSelected:f,trashCount:b,selectedTrashCount:w,onDeleteSelectedNotes:y,onRestoreSelectedTrash:v,onRestoreAllTrash:k,onEmptyTrash:j,actionsLocked:C=!1,tagPreferencesLoading:S=!1})=>{const A=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),[$,E]=o.useState(null),[T,M]=o.useState(null),[N,z]=o.useState(""),D=o.useRef(null),O=o.useRef(null),R=o.useCallback(()=>{E(null),M(null)},[]);ae(O,R),o.useEffect(()=>{C&&R()},[C,R]);const P=()=>{window.innerWidth<=768&&c(!1)},I=e=>{s(e),P()};o.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!l)return;const n=e.target;n instanceof Node&&(null===(t=D.current)||void 0===t||!t.contains(n))&&(n instanceof Element&&n.closest('[data-sidebar-toggle="notes"]')||c(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[l,c]);const L=async e=>{try{await e(),E(null),P()}catch(t){console.error("Failed to complete tag menu action.",t)}},F=e=>{const t=e.icon,n="all"!==e.name&&"other"!==e.name,o="trash"===e.name;return(0,d.jsxs)(ce,{ref:$===e.name?O:null,$active:$===e.name,children:[(0,d.jsxs)(re.K,{expanded:l,selected:a===e.name,title:e.name,onClick:()=>I(e.name),children:[(0,d.jsx)(t,{}),l&&(0,d.jsx)("span",{children:A(e.name)})]}),l&&n&&(0,d.jsxs)(pe,{children:[(0,d.jsx)(xe,{type:"button",disabled:C,"aria-label":`Manage ${e.name} tag`,title:`Manage ${A(e.name)} tag`,onClick:t=>{t.stopPropagation(),E($===e.name?null:e.name)},children:(0,d.jsx)(i.ZZB,{})}),$===e.name&&(0,d.jsx)(ge,{children:o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(he,{type:"button",disabled:!x.length,onClick:()=>{L(y)},children:"Delete Selected"}),(0,d.jsx)(he,{type:"button",disabled:0===w,onClick:()=>{L(v)},children:"Restore Selected"}),(0,d.jsx)(he,{type:"button",disabled:0===b,onClick:()=>{L(k)},children:"Restore All"}),(0,d.jsx)(he,{type:"button",disabled:0===b,onClick:()=>{L(j)},children:"Empty Bin"})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(he,{type:"button",disabled:!x.length,onClick:()=>{L(()=>m(e.name))},children:"Add Selected"}),(0,d.jsx)(he,{type:"button",disabled:!x.length,onClick:()=>{L(()=>f(e.name))},children:"Remove Selected"})]})})]})]},e.name)},K=e=>{const t=!n.includes(e);return(0,d.jsxs)(ce,{ref:$===e?O:null,$active:$===e,children:[(0,d.jsxs)(re.K,{expanded:l,selected:a===e,title:A(e),onClick:()=>I(e),children:[(0,d.jsx)(i.cnX,{}),T===e?(0,d.jsx)(me,{autoFocus:!0,value:N,onClick:e=>e.stopPropagation(),onChange:e=>{e.currentTarget.setCustomValidity(""),z(e.target.value)},onKeyDown:t=>{if("Enter"===t.key){const n=N.trim();if(!n)return t.currentTarget.setCustomValidity("A tag name is required."),void t.currentTarget.reportValidity();L(async()=>{await g(e,n),M(null)})}"Escape"===t.key&&R()}}):l&&(0,d.jsx)("span",{children:A(e)})]}),l&&(0,d.jsxs)(pe,{children:[(0,d.jsx)(xe,{type:"button",disabled:C,"aria-label":`Manage ${e} tag`,title:`Manage ${A(e)} tag`,onClick:t=>{t.stopPropagation(),E($===e?null:e)},children:(0,d.jsx)(i.ZZB,{})}),$===e&&(0,d.jsxs)(ge,{children:[(0,d.jsx)(he,{type:"button",disabled:C||S,onClick:()=>{L(()=>r(e))},children:t?"Unpin":"Pin"}),(0,d.jsx)(he,{type:"button",onClick:()=>{M(e),z(e)},children:"Rename"}),(0,d.jsx)(he,{type:"button",onClick:()=>{L(()=>h(e))},children:"Delete"}),(0,d.jsx)(he,{type:"button",disabled:!x.length,onClick:()=>{L(()=>m(e))},children:"Add Selected"}),(0,d.jsx)(he,{type:"button",disabled:!x.length,onClick:()=>{L(()=>f(e))},children:"Remove Selected"})]})]})]},e)},B=t.filter(e=>!n.includes(e)),U=t.filter(e=>n.includes(e));return(0,d.jsxs)(le,{ref:D,expanded:l,children:[(0,d.jsxs)(re.K,{expanded:l,title:"Menu",onClick:()=>c(!l),children:[(0,d.jsx)(i.ND1,{}),l&&(0,d.jsx)("span",{children:"Menu"})]}),p&&(0,d.jsxs)(ue,{expanded:l,title:"Expand Notes Explorer",onClick:()=>u(!p),children:[(0,d.jsx)(ie.$ZN,{}),l&&(0,d.jsx)("span",{children:"Expand Notes Explorer"})]}),e.filter(e=>"top"===e.position).map(F),B.map(K),e.filter(e=>"bottom"===e.position).map(F),U.length>0&&(0,d.jsx)(de,{role:"separator"}),U.map(K)]})},le=r.Ay.div`
  width: ${e=>e.expanded?"200px":"44px"};

  border-left: 1px solid #d0d0d0;
  background: #f5f5f5;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  margin-right: 20px;
  transform: scaleX(-1);

  > * {
    transform: scaleX(-1);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    width: ${({expanded:e})=>e?"min(82vw, 240px)":"0"};
    margin: 0;
    padding: ${({expanded:e})=>e?"4px":"0"};
    border-left: 0;
    overflow-x: hidden;
    box-shadow: ${({expanded:e})=>e?"4px 0 12px rgba(0, 0, 0, 0.15)":"none"};
  }
`,de=r.Ay.div`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  background: #d0d0d0;
`,ce=r.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${({$active:e})=>e?9999:1};
`,pe=r.Ay.div`
  position: relative;
`,ue=(0,r.Ay)(re.K)`
  && svg {
    color: #4b5563 !important;
  }
`,xe=r.Ay.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`,ge=r.Ay.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
`,he=r.Ay.button`
  display: block;
  width: 100%;
  padding: 10px;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.5:1};

  &:hover:not(:disabled) {
    background: #f1f1f1;
  }
`,me=r.Ay.input`
  width: 100px;
  margin-left: 8px;
`;var fe=n(5369);const be=({colors:e,onColorClicked:t,dropdownRef:n})=>(0,d.jsx)(we,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map(e=>(0,d.jsxs)(ye,{type:"button",onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:[(0,d.jsx)(ve,{color:e}),(0,d.jsx)(ke,{children:e})]},e))}),we=r.Ay.div`
  && {
    width: max-content;
    margin: 0;
  }

  position: relative;
  min-width: 160px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: white;

  border-radius: 14px;

  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 999999;
`,ye=r.Ay.button`
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: none;
  border-radius: 10px;

  background: #f5f6f8;

  padding: 8px 10px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #eceff3;
  }
`,ve=r.Ay.div`
  && {
    width: 14px;
    margin: 0;
  }

  width: 14px;
  height: 14px;

  border-radius: 999px;

  background: ${({color:e})=>e};

  border: 1px solid rgba(0, 0, 0, 0.15);

  flex-shrink: 0;
`,ke=r.Ay.span`
  font-size: 12px;
  font-weight: 600;

  color: #444;
`,je=({options:e,onPicked:t,dropdownRef:n})=>(0,d.jsx)(Ce,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map((e,n)=>(0,d.jsx)(Se,{type:"button",onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:(0,d.jsx)(Ae,{children:(0,d.jsx)($e,{children:e.title})})},n))}),Ce=r.Ay.div`
  && {
    width: max-content;
    margin: 0;
  }

  position: relative;
  min-width: 220px;
  max-width: 320px;
  max-height: 320px;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: white;

  border-radius: 14px;

  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 999999;
`,Se=r.Ay.button`
  width: 100%;

  display: flex;
  align-items: flex-start;
  gap: 10px;

  border: none;
  border-radius: 10px;

  background: #f5f6f8;

  padding: 8px 10px;

  cursor: pointer;

  transition: 0.2s;

  text-align: left;

  &:hover {
    background: #eceff3;
  }
`,Ae=r.Ay.div`
  && {
    width: 100%;
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  gap: 2px;

  min-width: 0;
`,$e=r.Ay.span`
  color: #444;

  font-size: 12px;
  font-weight: 600;

  line-height: 1.3;
`,Ee=({title:e,titleRef:t,readOnly:n,collapsed:o,isFavorite:r,selected:l,onToggleSelection:c,toolboxOpen:p,setToolboxOpen:u,showColorPicker:x,showTemplatePicker:g,setShowColorPicker:h,setShowTemplatePicker:m,toolboxRef:f,colorPickerRef:b,templatePickerRef:w,colorDropdownRef:y,templateDropdownRef:v,noteColors:k,templateOptions:j,onColorSelected:C,onTemplateSelected:S,copyFormattedContent:A,onToggleFavorite:$,onToggleCollapse:E,onTitleChange:T})=>(0,d.jsxs)(Me,{children:[(0,d.jsxs)(Ne,{children:[(0,d.jsx)(Te,{title:l?"Unselect note":"Select note",onClick:c,children:l?"\u2713":""}),r?(0,d.jsx)(re.K,{disabled:n,title:"Remove favorite",onClick:$,children:(0,d.jsx)(fe.gt3,{})}):(0,d.jsx)(re.K,{disabled:n,title:"Add favorite",onClick:$,children:(0,d.jsx)(i.usP,{})}),(0,d.jsx)(ze,{ref:t,title:"Note name",role:"textbox",contentEditable:!n,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>T(e.currentTarget.innerText),children:e})]}),(0,d.jsxs)(De,{children:[(0,d.jsxs)(Oe,{ref:f,children:[(0,d.jsx)(Re,{type:"button",disabled:n,title:"Open note toolbox","aria-label":"Open note toolbox","aria-haspopup":"menu","aria-expanded":p,onClick:()=>u(e=>!e),children:(0,d.jsx)(i.ou6,{})}),p&&(0,d.jsxs)(Pe,{role:"menu","aria-label":"Note toolbox",children:[(0,d.jsxs)(Ie,{type:"button",role:"menuitem",title:"Change note background color",disabled:n,onClick:()=>{h(!0),m(!1),u(!1)},children:[(0,d.jsx)(s.$di,{}),(0,d.jsx)("span",{children:"Color"})]}),(0,d.jsxs)(Ie,{type:"button",role:"menuitem",title:"Apply template",disabled:n||0===j.length,onClick:()=>{h(!1),m(!0),u(!1)},children:[(0,d.jsx)(i.MRc,{}),(0,d.jsx)("span",{children:"Template"})]})]}),x&&(0,d.jsx)(Le,{ref:b,children:(0,d.jsx)(be,{colors:k,onColorClicked:C,dropdownRef:y})}),g&&(0,d.jsx)(Le,{ref:w,children:(0,d.jsx)(je,{options:j,onPicked:S,dropdownRef:v})})]}),(0,d.jsx)(re.K,{title:"Copy note",onClick:A,children:(0,d.jsx)(i.nxz,{})}),o?(0,d.jsx)(re.K,{title:"Expand note",onClick:E,children:(0,d.jsx)(a.BSQ,{})}):(0,d.jsx)(re.K,{title:"Collapse note",onClick:E,children:(0,d.jsx)(a.q2p,{})})]})]}),Te=r.Ay.span`
  width: 18px;
  height: 18px;

  min-width: 18px;

  border: 1px solid #888;
  border-radius: 4px;

  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 12px;
  font-weight: bold;

  color: #2563eb;

  &:hover {
    border-color: #2563eb;
  }
`,Me=r.Ay.header`
  position: sticky;
  top: 0;
  z-index: 4;
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background: inherit;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  svg {
    cursor: pointer;
    height: 18px;
  }

  @media (max-width: 1260px) {
    height: auto;
    min-height: 44px;
  }
`,Ne=r.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;

  color: black;
`,ze=r.Ay.span`
  flex: 1;
  min-width: 0;

  border: 0;
  text-align: left;

  &:empty::before {
    content: attr(data-placeholder);
    color: #494949;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 560px) {
    font-size: 13px;
  }
`,De=r.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`,Oe=r.Ay.div`
  && {
    width: auto;
    margin: 0;
  }

  position: relative;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`,Re=r.Ay.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 2px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #2e2e2e;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: rgba(128, 128, 128, 0.15);
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 1;
  }
`,Pe=r.Ay.div`
  && {
    width: 210px;
    margin: 0;
  }

  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 20;
  min-width: 210px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
`,Ie=r.Ay.button`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  padding: 6px 9px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: #2e2e2e;
  text-align: left;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: #f1f1f4;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 1;
  }

  svg {
    flex-shrink: 0;
  }
`,Le=r.Ay.div`
  && {
    width: max-content;
    margin: 0;
  }

  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 21;
  width: max-content;
`;var Fe=n(8849),Ke=n(5709),Be=n(8420),Ue=n(6801),He=n(8452),Je=n(285),We=n(4853),Ge=n(8550),qe=n(3596),_e=n(5312),Ye=n.n(_e);const Ve=e=>{const t=e=>{for(let r=0;r<e.children.length;r+=1){const i=e.children[r];if("text"===i.type){var n,o;const t=null===(n=i.position)||void 0===n||null===(o=n.start)||void 0===o?void 0:o.offset;void 0!==t&&(e.children[r]={type:"element",tagName:"span",properties:{"data-note-source-start":t},children:[i]})}else"element"===i.type&&t(i)}};t(e)},Xe=()=>Ve,Ze=({label:e,expression:t,onExecute:n,disabled:o})=>(0,d.jsx)("button",{className:"markdownButton",disabled:o,onClick:()=>n(t),children:e}),Qe=({value:e,readOnly:t,editing:n,onEditorFocus:o,onEditorBlur:r,textareaRef:i,markdownRef:a,setValue:s,setEditing:l,onSave:c,onMarkdownClick:p,processMarkdown:u,onExecuteExpression:x})=>{if(n)return(0,d.jsx)(ot,{ref:i,readOnly:t,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:e||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`,o(t)},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,s(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)?(r(e.currentTarget),c(),l(!1)):c()}});const g=u(e||"* \u2753 What do you have for today?");return(0,d.jsx)(et,{ref:a,onClick:n=>{if(t)return;const o=n.target;if(o.closest("button"))return;const r=g===e?((e,t,n)=>{var o,r,i;const a=document,s=null===(o=a.caretPositionFromPoint)||void 0===o?void 0:o.call(a,t,n),l=(null===s||void 0===s?void 0:s.offsetNode.nodeType)===Node.TEXT_NODE,d=l?null:null===(r=a.caretRangeFromPoint)||void 0===r?void 0:r.call(a,t,n),c=l?null===s||void 0===s?void 0:s.offsetNode:null===d||void 0===d?void 0:d.startContainer,p=l?null===s||void 0===s?void 0:s.offset:null===d||void 0===d?void 0:d.startOffset;if(!c||void 0===p||c.nodeType!==Node.TEXT_NODE||!e.contains(c))return null;const u=null===(i=c.parentElement)||void 0===i?void 0:i.closest("[data-note-source-start]"),x=null===u||void 0===u?void 0:u.getAttribute("data-note-source-start");if(null===x||void 0===x)return null;const g=Number(x)+p;return Number.isFinite(g)?g:null})(n.currentTarget,n.clientX,n.clientY):null;p(o.innerText||o.textContent||"",r)},children:(0,d.jsx)(Fe.oz,{rehypePlugins:[Ke.A,Xe],components:{button(e){var n,o,r;const i=decodeURIComponent(String(null!==(n=null===(o=e.node)||void 0===o||null===(r=o.properties)||void 0===r?void 0:r.dataExpression)&&void 0!==n?n:""));return(0,d.jsx)(Ze,{label:String(e.children),expression:i,onExecute:x,disabled:t})},table:({node:e,children:t,...n})=>(0,d.jsx)(tt,{children:(0,d.jsx)("table",{...n,children:t})}),img:({node:e,...t})=>(0,d.jsx)(nt,{children:(0,d.jsx)("img",{...t,alt:t.alt||""})})},remarkPlugins:[[He.A,{padSpaceAfter:!1,emoticon:!0}],[Ge.A,{tight:!0,ordered:!0}],[Be.A,{stringLength:Ye()}],Je.A,We.A,qe.A,Ue.A],children:g})})},et=r.Ay.div`
  && {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    margin-left: 0;
    overflow-x: hidden;
  }

  padding: 20px;
  margin: 0;
  color: #000;
  font: 13px 'Myriad Pro', 'Lucida Grande', Lucida, Verdana, sans-serif;

  a:link {
    color: #00f;
    text-decoration: none;
  }

  a:visited {
    color: #00a;
    text-decoration: none;
  }

  a:hover {
    color: #f60;
    text-decoration: underline;
  }

  a:active {
    color: #f60;
    text-decoration: underline;
  }

  blockquote {
    max-width: 100%;
    overflow-x: hidden;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  * html code {
    font-size: 100%;
  }

  * html pre {
    font-size: 101%;
  }

  pre,
  code {
    font-size: 14px;
    font-family: monaco, courier, consolas, monospace;
    color: green;
    font-style: italic;
  }

  pre {
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #c7cfd5;
    background: #f1f5f9;
    margin: 20px 0;
    padding: 8px;
    text-align: left;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  hr {
    width: 100%;
    border: 0;
    border-top: 1px dashed rgba(0, 0, 0, 0.2);
    margin-top: 6px;
    margin-bottom: 10px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Myriad Pro', 'Lucida Grande', Lucida, Verdana, sans-serif;
    font-weight: bold;
  }

  h1 {
    margin-top: 1em;
    margin-bottom: 1em;
    color: #000;
    font-size: 22px;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 18px;
    color: #000;
    padding-bottom: 2px;
  }

  h3 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 13px;
    color: #000;
  }

  h4 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 11px;
    color: #000;
  }

  h5 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: #000;
  }

  h6 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: #000;
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  ul {
    list-style: square outside;
    margin: 0 0 0 30px;
    padding: 0 0 12px 6px;
  }

  li {
    margin-top: 7px;
  }

  ol {
    list-style-type: decimal;
    list-style-position: outside;
    margin: 0 0 0 30px;
    padding: 0 0 12px 6px;
  }

  ol ol {
    list-style-type: lower-alpha;
    list-style-position: outside;
    margin: 7px 0 0 30px;
    padding: 0 0 0 10px;
  }

  ul ul {
    margin-left: 40px;
    padding: 0 0 0 6px;
  }

  li > p {
    display: inline;
  }

  li > p + p {
    display: block;
  }

  li > a + p {
    display: block;
  }

  table {
    width: 100%;
    min-width: 100%;
    table-layout: auto;

    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-spacing: 0;

    margin: 0;
    margin-bottom: 20px;
  }

  table th,
  table td {
    width: fit-content;
    min-width: 8rem;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  table th {
    padding: 4px 8px;
    background: #e2e2e2;
    font-size: 12px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);

    @media (max-width: 1260px) {
      font-size: 10px;
    }
  }

  table th p {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  table td {
    padding: 2px;
    margin: 0;

    font-size: 12px;
    vertical-align: top;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  table td p {
    margin-bottom: 0;
  }

  table td p + p {
    margin-top: 5px;
  }

  table td p + p + p {
    margin-top: 5px;
  }

  table tr {
    height: 22px;
  }

  form {
    margin: 0;
  }

  button {
    margin: 0;
    height: 20px;
    min-width: 40px;
    width: fit-content;

    border: 1px solid #919699;
    border-radius: 3px;

    background: #e2e2e2;
    color: #000;

    font-size: 12px;
    cursor: pointer;

    padding: 0 6px;
    white-space: nowrap;
  }

  input[type='checkbox'] {
    appearance: none;
    width: 14px;
    height: 14px;
    border: 1px solid #919699;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    background-color: #22c55e;
    border: 1px solid #919699;
  }

  input[type='checkbox']:checked::after {
    content: '✓';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 10px;
    font-weight: bold;
    line-height: 1;
  }

  select {
    vertical-align: middle;
    padding: 0;
    margin: 0 0 3px 0;

    appearance: none;
    background: transparent;
    border: none;

    width: fit-content;
    height: 30px;

    color: gray !important;
  }

  textarea {
    width: 100%;
  }

  .katex-display {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    overflow-x: auto;
    overflow-y: hidden;
  }
`,tt=r.Ay.div`
  && {
    width: 100%;
    min-width: 0;
    margin: 0;
  }

  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: #b0b0b5 transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b0b0b5;
    border-radius: 6px;
  }
`,nt=r.Ay.span`
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  vertical-align: bottom;

  img {
    display: block;
    max-width: none;
  }
`,ot=r.Ay.textarea`
  touch-action: manipulation;
  -webkit-text-size-adjust: 100%;

  width: 100%;
  min-height: 100px;

  resize: none;
  overflow: hidden;
  scrollbar-width: none;

  margin: 10px;
  padding: 20px;

  border: none;
  background: transparent;

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`,rt=({date:e,tags:t,availableTags:n,readOnly:r,tagPickerRef:s,tagDropdownRef:c,showTagPicker:p,creatingTag:u,newTagName:x,setShowTagPicker:g,setCreatingTag:h,setNewTagName:m,onDateChange:f,hasTag:b,toggleTag:w,createTag:y,formatTag:v,formatDate:k})=>{const j=o.useRef(null);return(0,d.jsxs)(it,{children:[(0,d.jsx)(at,{$disabled:r,"aria-disabled":r,onClick:()=>{var e,t,n;r||(null===(e=j.current)||void 0===e||null===(t=e.showPicker)||void 0===t||t.call(e),null===(n=j.current)||void 0===n||n.click())},children:k(e)}),(0,d.jsx)("input",{ref:j,type:"date",value:e,style:{display:"none"},onChange:e=>f(e.target.value)}),t.map(e=>(0,d.jsx)(st,{type:"button",disabled:r,onClick:()=>w(e),children:v(e)},e)),(0,d.jsxs)(lt,{ref:s,children:[!r&&(0,d.jsx)(dt,{type:"button",title:"Add tag","aria-label":"Add tag",onClick:()=>g(!p),children:(0,d.jsx)(a.n4h,{})}),p&&(0,l.createPortal)((0,d.jsxs)(ct,{ref:c,children:[n.map(e=>(0,d.jsxs)(pt,{className:b(e)?"selected":"",onClick:()=>{r||w(e)},children:[(0,d.jsx)(i.cnX,{}),(0,d.jsx)("span",{children:v(e)})]},e)),u?(0,d.jsx)(xt,{autoFocus:!0,placeholder:"Tag name...",value:x,onChange:e=>!r&&m(e.target.value),onKeyDown:e=>{r||"Enter"!==e.key||y(x),"Escape"===e.key&&(h(!1),m(""))},onBlur:()=>{if(r)return h(!1),void m("");x.trim()?y(x):h(!1)}}):(0,d.jsxs)(ut,{onClick:()=>!r&&h(!0),children:[(0,d.jsx)(i.cnX,{}),"New Tag"]})]}),document.body)]})]})},it=r.Ay.div`
  && {
    width: 100%;
    min-width: 0;
    margin-left: 0;
  }

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 6px;
`,at=r.Ay.span`
  display: flex;
  align-items: center;

  padding: 4px 10px;

  border-radius: 999px;

  background: rgba(79, 70, 229, 0.12);
  color: #4338ca;

  font-size: 11px;
  font-weight: 600;

  cursor: ${({$disabled:e})=>e?"default":"pointer"};

  transition: 0.2s;
`,st=r.Ay.button`
  display: flex;
  align-items: center;

  padding: 4px 10px;
  border: 0;

  border-radius: 999px;

  background: rgba(79, 70, 229, 0.12);
  color: #4338ca;

  font: inherit;
  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    background: rgba(79, 70, 229, 0.2);
  }

  &:disabled {
    background: rgba(156, 163, 175, 0.12);
    color: #9ca3af;
    cursor: default;
  }
`,lt=r.Ay.div`
  && {
    width: fit-content;
    margin-left: 0;
  }

  position: relative;
  flex: 0 0 auto;
  width: fit-content;
  margin: 0;
`,dt=r.Ay.button`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border: 0;

  border-radius: 999px;

  background: rgba(79, 70, 229, 0.12);
  color: #4338ca;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(79, 70, 229, 0.2);
  }
`,ct=r.Ay.div`
  position: absolute;

  bottom: 40%;
  left: 30%;

  min-width: 160px;
  max-width: 280px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: white;

  border-radius: 14px;

  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 100;
`,pt=r.Ay.span`
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  text-align: left;

  border: none;
  border-radius: 10px;

  background: #f5f6f8;
  color: #444;

  padding: 8px 10px;

  cursor: pointer;

  transition: 0.2s;

  margin: 0 !important;

  &:hover {
    background: #eceff3;
  }

  &.selected {
    background: #4f46e5;
    color: white;
  }
`,ut=r.Ay.span`
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: 1px dashed #4f46e5;
  border-radius: 10px;

  background: transparent;
  color: #4f46e5;

  padding: 8px 10px;

  cursor: pointer;

  font-weight: 600;
`,xt=r.Ay.input`
  width: 100%;

  border: 1px solid #d8dce5;
  border-radius: 10px;

  padding: 4px;

  font-size: 13px;

  background: white;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
  }
`,gt=(e={})=>{const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},ht=(e,t={},n=!1,o=0)=>{const r=new Date;return(e=e.replace(/@date\b/g,()=>r.toLocaleDateString()).replace(/@time\b/g,()=>r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>r.toLocaleString()).replace(/@dayofweek\b/g,()=>r.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(r.getMonth()+1)).replace(/@monthname\b/g,()=>r.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(r.getFullYear())).replace(/@today\b/g,()=>r.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const o=Number(t),r=Number(n);return o&&r?(o/(r*r)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-r.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const o=Math.max(-1,Math.min(1,Number(n))),r=t.isMobile?5:10,i=Math.abs(o),a=`${Math.round(100*o)}%`,s=Math.round(i*r);let l=o>=0?"\u2588".repeat(s)+"\u2591".repeat(r-s):"\u2591".repeat(r-s)+"\u2588".repeat(s);const d=Math.max(0,Math.floor((r-a.length)/2));return l.slice(0,d)+a+l.slice(d+a.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&o<5?ht(e,t,n,o+1):e},mt=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,ft=(e,t)=>{const n={};e.replace(mt,(e,t,o)=>(n[t]=o.trim(),""));let o=!0;for(;o;){o=!1;for(const[e,r]of Object.entries(n)){if(!r.includes("@"))continue;const i=ht(bt(r,n),gt({...t,...n}));i!==r&&(n[e]=i,o=!0)}}return n},bt=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var o;return null!==(o=t[n])&&void 0!==o?o:""}),wt=(e,t,n)=>{const o=ft(e),r=gt({...t,...Object.fromEntries(Object.entries(o).map(([e,t])=>{if(""===t)return[e,""];const n=Number(t);return[e,Number.isNaN(n)?t:n]}))});return ht(bt((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),o),r,n)};function yt(){const[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(""),[i,a]=(0,o.useState)({city:"",country:""});return(0,o.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async({coords:n})=>{try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${n.latitude}&longitude=${n.longitude}&current=temperature_2m,weather_code`),l=await t.json();let d="",c="";try{var o,r,i,a;const e=await fetch(`https://geocode.maps.co/reverse?lat=${n.latitude}&lon=${n.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();d=(null===(o=t.address)||void 0===o?void 0:o.city)||(null===(r=t.address)||void 0===r?void 0:r.town)||(null===(i=t.address)||void 0===i?void 0:i.village)||"",c=(null===(a=t.address)||void 0===a?void 0:a.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(l.current.temperature_2m)}\xb0C`,weather:(s=l.current.weather_code,0===s?"\u2600\ufe0f Sunny":[1,2].includes(s)?"\ud83c\udf24\ufe0f Partly Cloudy":3===s?"\u2601\ufe0f Cloudy":[45,48].includes(s)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(s)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(s)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(s)?"\u2744\ufe0f Snowing":[80,81,82].includes(s)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(s)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:d,country:c})}catch(l){t(l)}var s}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),r(e.weather),a({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:i}}const vt=({id:e,date:t,content:n,notesLocked:r,onChangeContent:i,onChangeDate:a,tags:s,selected:l,onToggleSelection:c,templateOptions:p,onEditorFocus:u,onEditorBlur:x})=>{const[g,h]=o.useState(!1),[m,f]=o.useState(!1),[b,w]=o.useState(!1),[y,v]=o.useState(!1),k=o.useRef(null),j=o.useRef(null),C=o.useRef(null),S=o.useRef(null),A=o.useRef(null),$=o.useRef(null),E=o.useRef(null),T=o.useRef(null),M=o.useRef(null),N=o.useRef(null),[z,D]=o.useState(window.innerWidth<1260),{temperature:O,weather:R,location:P}=yt(),{setCursorPosition:I,findBestCursorPosition:L}=function({editing:e,textareaRef:t}){const[n,r]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!e||!t.current||null===n)return;const o=t.current;o.focus(),o.setSelectionRange(n,n);const r=requestAnimationFrame(()=>{if(!o.isConnected)return;const e=document.createElement("div"),t=window.getComputedStyle(o);e.style.position="absolute",e.style.visibility="hidden",e.style.whiteSpace="pre-wrap",e.style.wordWrap="break-word",e.style.boxSizing=t.boxSizing,e.style.font=t.font,e.style.lineHeight=t.lineHeight,e.style.letterSpacing=t.letterSpacing,e.style.wordSpacing=t.wordSpacing,e.style.textIndent=t.textIndent,e.style.tabSize=t.tabSize,e.style.padding=t.padding,e.style.border=t.border,e.style.width=t.width,e.textContent=`${o.value.substring(0,n)}\u200b`,document.body.appendChild(e);const r=e.offsetHeight;document.body.removeChild(e);const i=o.getBoundingClientRect().top;let a=o.parentElement;for(;a;){const e=window.getComputedStyle(a).overflowY;if("auto"===e||"scroll"===e||"overlay"===e){const e=a.getBoundingClientRect().top,t=a.scrollTop+i+r-e-a.clientHeight/2;return void a.scrollTo({top:Math.max(0,t),behavior:"smooth"})}a=a.parentElement}window.scrollTo({top:Math.max(0,window.scrollY+i+r-window.innerHeight/2),behavior:"smooth"})});return()=>cancelAnimationFrame(r)},[e,n,t]),{cursorPosition:n,setCursorPosition:r,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const o=n.split(" ");for(let r=Math.min(o.length,8);r>=2;r--)for(let e=0;e<=o.length-r;e++){const n=o.slice(e,e+r).join(" "),i=t.indexOf(n);if(i>=0)return i}for(const r of o){if(r.length<4)continue;const e=t.indexOf(r);if(e>=0)return e}return t.length}}}({editing:g,textareaRef:k});!function({tagPickerRef:e,tagDropdownRef:t,colorPickerRef:n,colorDropdownRef:r,templatePickerRef:i,templateDropdownRef:a,toolboxRef:s,closeTagPicker:l,closeColorPicker:d,closeTemplatePicker:c,closeToolbox:p}){(0,o.useEffect)(()=>{const o=o=>{var u,x,g,h,m,f,b,w,y,v,k,j,C,S;const A=o.target,$=null!==(u=null===(x=e.current)||void 0===x?void 0:x.contains(A))&&void 0!==u&&u,E=null!==(g=null===(h=t.current)||void 0===h?void 0:h.contains(A))&&void 0!==g&&g;$||E||l();const T=null!==(m=null===(f=n.current)||void 0===f?void 0:f.contains(A))&&void 0!==m&&m,M=null!==(b=null===(w=r.current)||void 0===w?void 0:w.contains(A))&&void 0!==b&&b;T||M||d();const N=null!==(y=null===(v=i.current)||void 0===v?void 0:v.contains(A))&&void 0!==y&&y,z=null!==(k=null===(j=a.current)||void 0===j?void 0:j.contains(A))&&void 0!==k&&k;N||z||c(),null!==(C=null===(S=s.current)||void 0===S?void 0:S.contains(A))&&void 0!==C&&C||p()};return document.addEventListener("pointerdown",o),()=>{document.removeEventListener("pointerdown",o)}},[e,t,n,r,i,a,s,l,d,c,p])}({tagPickerRef:S,tagDropdownRef:T,colorPickerRef:A,colorDropdownRef:M,templatePickerRef:$,templateDropdownRef:N,toolboxRef:E,closeTagPicker:()=>{G(!1),q(!1)},closeColorPicker:()=>{w(!1)},closeTemplatePicker:()=>{v(!1)},closeToolbox:()=>{f(!1)}}),o.useEffect(()=>{const e=()=>{D(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const F=o.useMemo(()=>ee(n,K),[n]),U=r,{showTagPicker:H,creatingTag:J,newTagName:W,setShowTagPicker:G,setCreatingTag:q,setNewTagName:_,hasTag:Y,toggleTag:V,createTag:X}=function({tags:e,onTagsChange:t}){const[n,r]=(0,o.useState)(!1),[i,a]=(0,o.useState)(!1),[s,l]=(0,o.useState)(""),d=t=>e.includes(t),c=n=>{console.log("current tags",e);const o=Array.from(new Set(d(n)?e.filter(e=>e!==n):[...e,n]));console.log("updated tags",o),t(o)};return{showTagPicker:n,creatingTag:i,newTagName:s,setShowTagPicker:r,setCreatingTag:a,setNewTagName:l,hasTag:d,toggleTag:c,createTag:e=>{const t=e.trim().toLowerCase();t&&(c(t),l(""),a(!1))}}}({tags:F.tags,onTagsChange:t=>{U||i(e,JSON.stringify({...F,tags:t}))}}),Z=o.useCallback(e=>Y("templates")?e:((e,t={})=>{const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/quarter\b/g,()=>String(Math.floor(n.getMonth()/3)+1)).replace(/\/week\b/g,()=>{const e=new Date(n);e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const t=new Date(e.getFullYear(),0,4);return String(1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7))}).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const o=Number(t),r=Number(n);return String(Math.floor(Math.random()*(r-o+1))+o)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",o=Number(t);return Array.from({length:o},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const o=new Date(t);let r=n.getFullYear()-o.getFullYear();const i=n.getMonth()-o.getMonth();return(i<0||0===i&&n.getDate()<o.getDate())&&r--,String(r)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const o=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(o/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})})(e,{weather:R,temperature:O,city:P.city,country:P.country}),[Y,P.city,P.country,O,R]),[ne,oe]=o.useState(F.text||""),re=o.useRef(F.text||""),ie=o.useRef({text:F.text||"",title:F.title||""});o.useEffect(()=>{ie.current={text:F.text||"",title:F.title||""}},[F.text,F.title]),o.useEffect(()=>{const e=F.text||"";re.current!==e&&(re.current=e,oe(e))},[F.text]);const ae=o.useCallback((t,n)=>{var o,r,a,s,l;const d=null!==t&&void 0!==t?t:g&&null!==(o=null===(r=k.current)||void 0===r?void 0:r.value)&&void 0!==o?o:ne,c=null!==(a=null!==(s=null!==n&&void 0!==n?n:null===(l=C.current)||void 0===l?void 0:l.innerText)&&void 0!==s?s:F.title)&&void 0!==a?a:"",p=Z(d),u=Z(c),x=ie.current;x.text===p&&x.title===u||(ie.current={text:p,title:u},oe(p),i(e,JSON.stringify({...F,text:p,title:u})).catch(e=>{console.error("Failed to autosave note.",e),ie.current.text===p&&ie.current.title===u&&(ie.current=x)}))},[g,e,Z,F,i,ne]);o.useEffect(()=>{if(!g||U)return;const e=window.setTimeout(()=>ae(),500);return()=>window.clearTimeout(e)},[g,U,ae,ne]),o.useEffect(()=>{const e=()=>ae(),t=()=>{"hidden"===document.visibilityState&&ae()};return document.addEventListener("visibilitychange",t),window.addEventListener("pagehide",e),window.addEventListener("beforeunload",e),()=>{document.removeEventListener("visibilitychange",t),window.removeEventListener("pagehide",e),window.removeEventListener("beforeunload",e)}},[ae]),o.useEffect(()=>{var e;U&&(w(!1),v(!1),G(!1),q(!1),f(!1),g&&(null===(e=k.current)||void 0===e||e.blur()))},[g,U,q,G,w,v,f]);return(0,d.jsx)(kt,{selected:l,children:(0,d.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:F.color||"#eee"},children:[(0,d.jsx)(Ee,{title:F.title,titleRef:C,readOnly:r,collapsed:F.collapsed,selected:l,onToggleSelection:()=>c(e),toolboxOpen:m,setToolboxOpen:f,showColorPicker:b,showTemplatePicker:y,setShowColorPicker:w,setShowTemplatePicker:v,toolboxRef:E,colorPickerRef:A,templatePickerRef:$,colorDropdownRef:M,templateDropdownRef:N,noteColors:Q,templateOptions:p,onColorSelected:t=>{U||(i(e,JSON.stringify({...F,color:t})),w(!1),f(!1))},onTemplateSelected:t=>{if(U)return;let n=t.text.replace(/\\\$\{/g,"${");n=Z(n);const o=Array.from(new Set([...F.tags||[],...t.tags||[]]));i(e,JSON.stringify({...F,collapsed:!1,color:t.color,text:n,title:Z(t.title),tags:o})),oe(n),v(!1),f(!1)},isFavorite:Y("favorite"),copyFormattedContent:async()=>{if(!j.current)return;const e=j.current.innerHTML,t=j.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>{U||V("favorite")},onToggleCollapse:()=>{i(e,JSON.stringify({...F,collapsed:!F.collapsed}))},onTitleChange:e=>ae(void 0,e)}),!F.collapsed&&(0,d.jsx)(Qe,{value:ne,readOnly:U,editing:g,onEditorFocus:t=>u(e,t),onEditorBlur:t=>x(e,t),textareaRef:k,markdownRef:j,setValue:oe,setEditing:h,processMarkdown:e=>wt(e,{temperature:O,weather:R,city:P.city,country:P.country},z),onExecuteExpression:t=>{if(U)return;const n=((e,t,n)=>{const o=t.match(/^\$\{(\w+)\}=(.*)$/);if(!o)return e;const r=o[1];let i=o[2];const a=ft(e);i=ht(i,gt({...n,...a})),i=i.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=a[t])&&void 0!==n?n:"")});const s="${"+r+"}="+Function(`return (${i})`)(),l=new RegExp(`^\\$\\{${r}\\}\\s*=([^\\r\\n]*)`,"m");return l.test(e)?e.replace(l,s):e.trimEnd()+"\n"+s})(ne,t,{temperature:O,weather:R,city:P.city,country:P.country});oe(n),i(e,JSON.stringify({...F,text:n}))},onSave:()=>{var e,t;return ae(null!==(e=null===(t=k.current)||void 0===t?void 0:t.value)&&void 0!==e?e:ne)},onMarkdownClick:(e,t)=>{if(U)return;const n=null!==t&&void 0!==t?t:L(e,ne);I(n),h(!0)}}),(0,d.jsx)("footer",{className:"footer",children:(0,d.jsx)("span",{className:"footbox",children:(0,d.jsx)(rt,{tagDropdownRef:T,date:t,tags:F.tags,availableTags:s,readOnly:U,tagPickerRef:S,showTagPicker:H,creatingTag:J,newTagName:W,setShowTagPicker:G,setCreatingTag:q,setNewTagName:_,onDateChange:t=>{U||a(e,t)},hasTag:Y,toggleTag:V,createTag:X,formatTag:te,formatDate:B})})})]})},e)},kt=r.Ay.div`
box-shadow: ${({selected:e})=>e?"0 0 0 3px #2563eb":"none"};  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  margin: 10px 0px 0px 0px;

  background-color: #757575;

  div {
    margin-left: 10px;
    width: 100%;
  }

  .ContentContainer {
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.2);

    width: 100%;
    border-radius: 0px;
    margin: 0;

    .footer {
      width: 100%;
      min-height: 44px;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      padding: 10px;

      svg {
        margin: 0;
        cursor: pointer;
        height: 18px;
      }
    }

    .footbox {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
    }

    .ActionContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 4px;
      p {
        cursor: pointer;
        display: flex;
        align-items: center;
        * {
          margin-right: 5px;
        }
      }
    }

    .ContentContainer .date {
    display: flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(79, 70, 229, 0.12);
    color: #4338ca;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }

`,jt=({entries:e,pickerTags:t,onHoverCard:n,onChangeEntry:o,updateEntryDate:r,selectedNoteIds:i,onToggleSelection:a,templateOptions:s,notesLocked:l,onEditorFocus:c,onEditorBlur:p})=>(0,d.jsx)(Ct,{children:e.map((e,u)=>(0,d.jsx)("div",{onMouseEnter:()=>n(e.id),onMouseLeave:()=>n(null),children:(0,d.jsx)(vt,{id:e.id,date:e.date,number:u+1,content:e.content,onChangeContent:o,onChangeDate:r,tags:t,selected:i.includes(e.id),onToggleSelection:a,templateOptions:s,notesLocked:l,onEditorFocus:c,onEditorBlur:p})},e.id))}),Ct=r.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`;var St=n(9894);const At=new TextEncoder,$t=new TextDecoder;function Et(e){const t=new Uint8Array(e);let n="";for(let o=0;o<t.length;o++)n+=String.fromCharCode(t[o]);return btoa(n)}function Tt(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function Mt(e,t){const n=await crypto.subtle.importKey("raw",At.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function Nt(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),o=crypto.getRandomValues(new Uint8Array(16)),r=await Mt(t,o);return{encrypted:Et(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},r,At.encode(e))),iv:Et(n),salt:Et(o)}}(t,e);await(0,W.BN)((0,W.H9)(G.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function zt(e){const t=await(0,W.x7)((0,W.H9)(G.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,o){const r=await Mt(o,Tt(n)),i=await crypto.subtle.decrypt({name:"AES-GCM",iv:Tt(t)},r,Tt(e));return $t.decode(i)}(n.encryptedApiKey,n.iv,n.salt,e)}async function Dt(e,t,n,o,r,i){console.log(r);const a=i||await zt(e);if(!a)throw new Error("OpenAI API Key not configured.");const s=new St.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),l=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${o}\n`;return await s.responses.create({model:r||"gpt-6-luna",input:l})}const Ot=e=>{const t=(0,W.H9)(G.OO,"users",e);return(0,W.rJ)(t,"chatSessions")},Rt=async(e,t)=>{const n=Ot(e);return(await(0,W.GG)((0,W.P)(n,(0,W._M)("id","==",t)))).docs};const Pt=(0,o.createContext)(void 0),It="You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.",Lt=({uid:e,selectedNotesText:t,noteTitles:n,clearSelectedNotes:r,entries:i})=>{const[a,s]=(0,o.useState)(""),[l,d]=(0,o.useState)([]),[c,p]=(0,o.useState)([]),{sessions:u,fetchSessions:x,createSession:g,updateSession:h,deleteSession:m}=function(e){const[t,n]=o.useState([]),r=o.useCallback(async()=>{if(!e)return;const t=(await(0,W.GG)(Ot(e))).docs.map(e=>e.data());n((e=>[...e].sort((e,t)=>e.updatedAt>t.updatedAt?-1:e.updatedAt<t.updatedAt?1:0))(t))},[e]),i=o.useCallback(async t=>{if(!e)return null;const o={id:J()(),title:"New Chat",createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString(),model:t,selectedPromptIds:[],messages:[]};return n(e=>[o,...e]),await(0,W.gS)(Ot(e),o),o},[e]),a=o.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const o=await Rt(e,t.id);await Promise.all(o.map(n=>(0,W.BN)((0,W.H9)(G.OO,`users/${e}/chatSessions/${n.id}`),t)))},[e]),s=o.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const o=await Rt(e,t);await Promise.all(o.map(t=>(0,W.kd)((0,W.H9)(G.OO,`users/${e}/chatSessions/${t.id}`))))},[e]);return{sessions:t,setSessions:n,fetchSessions:r,createSession:i,updateSession:a,deleteSession:s}}(e),[f,b]=(0,o.useState)(!1),[w,y]=(0,o.useState)(null),[v,k]=(0,o.useState)(!1),[j,C]=(0,o.useState)("gpt-6-luna"),[S,A]=(0,o.useState)(!0),$=(0,o.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),E=(0,o.useCallback)(async()=>{const e=await g(j);e&&(d([]),y(e.id),p([]))},[g,j]);(0,o.useEffect)(()=>{f&&(u.length>0||E())},[f,u,E]),(0,o.useEffect)(()=>{(async()=>{await x(),b(!0)})()},[x]);const T=(0,o.useCallback)(async e=>{if(!w)return;const t=u.find(e=>e.id===w);if(!t)return;const n=l.includes(e)?l.filter(t=>t!==e):[...l,e];d(n),await h({...t,selectedPromptIds:n,updatedAt:(new Date).toISOString()})},[w,l,u,h]),M=(0,o.useMemo)(()=>i.filter(e=>l.includes(e.id)).map(e=>{try{return JSON.parse(e.content).text||""}catch{return""}}).join("\n\n"),[i,l]),N=(0,o.useCallback)(e=>{const t=u.find(t=>t.id===e);t&&(d(t.selectedPromptIds||[]),y(e),p(t.messages),C(t.model))},[u]);(0,o.useEffect)(()=>{0!==u.length&&(w||N(u[0].id))},[u,w,N]);const z=(0,o.useMemo)(()=>i.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[i]),D=(0,o.useCallback)(async()=>{const o=a.trim();if(!o||v)return;if(!e)return void p(e=>[...e,{id:J()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const i=n.length>0?`Notes:\n${n.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",l=$(c),d={id:J()(),role:"user",content:`${i}${o}`};p(e=>{const t=[...e,d],n=u.find(e=>e.id===w);return n&&h({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?o.substring(0,30):n.title}),t}),s(""),k(!0);const x=[];S&&l&&x.push(`History:\n${l}`),t.trim()&&x.push(`Context:\n${t}`);const g=x.join("\n\n");try{var m,f;const t=[It,M].filter(Boolean),n=await Dt(e,t.join("\n\n"),o,g,j),i={id:J()(),role:"assistant",content:n.output_text.trim()||"No response was returned.",tokens:{input:(null===(m=n.usage)||void 0===m?void 0:m.input_tokens)||0,output:(null===(f=n.usage)||void 0===f?void 0:f.output_tokens)||0}};p(e=>{const t=[...e,i],n=u.find(e=>e.id===w);return n&&h({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?o.substring(0,30):n.title}),t}),r()}catch(b){console.error("Mavis error:",b);const e=b instanceof Error?b.message:"An unexpected error occurred.";p(t=>[...t,{id:J()(),role:"assistant",content:e}])}finally{k(!1)}},[a,v,e,n,t,j,c,S,$,r,u,w,h,M]),O=(0,o.useCallback)(async()=>{if(v||0===c.length)return;if(!e)return void p(e=>[...e,{id:J()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const t=$(c);k(!0);try{var n,o;const r=await Dt(e,`${It}\n\n${M}`,"Summarize the entire conversation history into one comprehensive, self-contained message.\n\nInclude all important information from the conversation, especially:\n\n- Every requirement and specification\n- Every decision that was made\n- Every implementation detail\n- Every instruction and constraint\n- Important facts, dates, names, titles, values, and references\n- Code-related decisions, expected behavior, and affected files or components\n- Problems, errors, solutions, and changes that were discussed\n- Rejected alternatives and the reasons they were rejected\n- Open questions, unresolved issues, assumptions, and pending tasks\n- The current state of the work\n- Clear next steps, if any\n\nPreserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.\n\nWrite the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.",`Conversation history:\n${t}`,j),i={id:J()(),role:"assistant",content:r.output_text.trim()||"No summary was returned.",tokens:{input:(null===(n=r.usage)||void 0===n?void 0:n.input_tokens)||0,output:(null===(o=r.usage)||void 0===o?void 0:o.output_tokens)||0}};p([i]);const a=u.find(e=>e.id===w);a&&await h({...a,messages:[i],updatedAt:(new Date).toISOString()})}catch(r){console.error("Mavis summary error:",r);const e=r instanceof Error?r.message:"An unexpected error occurred.";p(t=>[...t,{id:J()(),role:"assistant",content:e}])}finally{k(!1)}},[v,c,e,$,j,w,u,h,M]),R=(0,o.useCallback)(async e=>{if(!w)return;const t=u.find(e=>e.id===w);if(!t)return;const n="all"===e?[]:t.messages.filter(t=>t.id!==e);p(n),await h({...t,messages:n,updatedAt:(new Date).toISOString()})},[w,u,h]),P=(0,o.useCallback)(async()=>{if(!w)return;const e=u.find(e=>e.id===w);e&&(p([]),await h({...e,messages:[],updatedAt:(new Date).toISOString()}))},[w,u,h]),I=(0,o.useCallback)(async e=>{if(await m(e),w===e){const t=u.filter(t=>t.id!==e);t.length>0?N(t[0].id):await E()}},[m,w,u,N,E]);return{prompt:a,setPrompt:s,selectedPromptIds:l,togglePrompt:T,availablePromptNotes:z,messages:c,isLoading:v,sessions:u,currentSessionId:w,createNewSession:E,loadSession:N,deleteSession:m,removeSession:I,sendPrompt:D,deleteMessage:R,clearMessages:P,summarizeHistory:O,selectedModel:j,setSelectedModel:C,includeHistory:S,setIncludeHistory:A}};function Ft({children:e,uid:t,selectedNotesText:n,noteTitles:o,clearSelectedNotes:r,entries:i}){const a=Lt({uid:t,selectedNotesText:n,noteTitles:o,clearSelectedNotes:r,entries:i});return(0,d.jsx)(Pt.Provider,{value:a,children:e})}function Kt(){const e=(0,o.useContext)(Pt);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}const Bt=["gpt-5-mini","gpt-6-luna","gpt-5.6-terra","gpt-5.6-sol"],Ut=({uid:e,selectedNotesText:t,noteTitles:n,notesCount:r,clearSelectedNotes:a})=>{const[l,c]=o.useState(!1),{prompt:p,setPrompt:u,messages:x,isLoading:g,sendPrompt:h,deleteMessage:m,selectedModel:f,setSelectedModel:b,selectedPromptIds:w,availablePromptNotes:y,togglePrompt:v,includeHistory:k,setIncludeHistory:j,summarizeHistory:C}=Kt(),[S,A]=o.useState(!1),[$,E]=o.useState(!1),T=o.useRef(null),M=o.useRef(null),N=o.useRef(null),z=o.useRef({}),[D,O]=o.useState(0),R=o.useCallback(e=>{const t=e.scrollHeight-e.clientHeight,n=t>0?e.scrollTop/t:0;O(Math.min(1,Math.max(0,n)))},[]),P=o.useCallback(e=>{R(e.currentTarget)},[R]);o.useLayoutEffect(()=>{const e=N.current;e&&(e.scrollTop=Math.max(0,e.scrollHeight-e.clientHeight),R(e))},[g,x,R]);const I=o.useCallback(()=>A(!1),[]),F=o.useCallback(()=>E(!1),[]);ae(T,I),ae(M,F);const K=o.useCallback(e=>{const t=N.current,n=z.current[e];if(!t||!n)return;const o=t.getBoundingClientRect().top,r=n.getBoundingClientRect().top;t.scrollTo({top:Math.max(0,t.scrollTop+r-o-12),behavior:"smooth"})},[]);return(0,d.jsxs)(Xt,{children:[(0,d.jsxs)(Zt,{children:[(0,d.jsxs)(Qt,{ref:N,role:"log","aria-label":"Chat messages",onScroll:P,children:[x.map(e=>(0,d.jsxs)(Jt,{ref:t=>{z.current[e.id]=t},role:e.role,children:[(0,d.jsx)(Gt,{role:e.role,children:e.tokens&&(0,d.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,d.jsx)(on,{role:e.role,children:(0,d.jsx)(Fe.oz,{remarkPlugins:[Be.A],components:{table:({node:e,children:t,...n})=>(0,d.jsx)(nn,{children:(0,d.jsx)("table",{...n,children:t})})},children:e.content})}),(0,d.jsxs)(Wt,{role:e.role,children:[(0,d.jsx)(re.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,d.jsx)(i.nxz,{})}),(0,d.jsx)(re.K,{title:"Delete message",onClick:()=>m(e.id),children:(0,d.jsx)(i.IXo,{})})]})]},e.id)),g&&(0,d.jsx)(on,{role:"assistant",children:"Thinking..."})]}),(0,d.jsx)(Ht,{messages:x,scrollProgress:D,onScrollToMessage:K})]}),(0,d.jsx)(rn,{expanded:l,children:(0,d.jsxs)(an,{children:[(0,d.jsxs)(_t,{children:[(0,d.jsxs)(xn,{ref:M,children:[(0,d.jsxs)(dn,{title:"Prompt presets",onClick:()=>{A(!1),E(e=>!e)},children:[(0,d.jsx)(L.vTI,{}),(0,d.jsxs)(cn,{children:["Prompts (",w.length,")"]})]}),$&&(0,d.jsx)(pn,{children:y.map(e=>(0,d.jsxs)(un,{className:w.includes(e.id)?"selected":"",onClick:()=>{v(e.id)},children:[(0,d.jsx)(L.vTI,{}),(0,d.jsx)("span",{children:e.title})]},e.id))})]}),(0,d.jsxs)(ln,{ref:T,children:[(0,d.jsxs)(dn,{style:{margin:"0px !important"},title:"Selecionar modelo de IA",onClick:()=>{E(!1),A(e=>!e)},children:[(0,d.jsx)(i.Ojn,{}),(0,d.jsx)(cn,{children:f})]}),S&&(0,d.jsx)(pn,{children:Bt.map(e=>(0,d.jsxs)(un,{className:f===e?"selected":"",onClick:()=>{b(e),A(!1)},title:e,children:[(0,d.jsx)(i.Ojn,{}),(0,d.jsx)("span",{children:e})]},e))})]}),(0,d.jsxs)(Yt,{children:["Notes: ",r]})]}),(0,d.jsxs)(qt,{children:[(0,d.jsx)(sn,{expanded:l,value:p,placeholder:"Ask Mavis...",disabled:g,onChange:e=>u(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),h())}}),(0,d.jsxs)(Vt,{children:[(0,d.jsx)(re.K,{title:"Summarize History",onClick:()=>{C()},children:(0,d.jsx)(s.Z1M,{})}),(0,d.jsx)(re.K,{title:"Include chat history in prompts",children:(0,d.jsx)(s.bfP,{color:k?"#2563eb":"#555",onClick:()=>j(!k)})}),(0,d.jsx)(re.K,{title:"Clear chat history",onClick:()=>{m("all")},children:(0,d.jsx)(L.U3h,{})}),(0,d.jsx)(re.K,{title:l?"Collapse":"Expand",onClick:()=>c(e=>!e),children:l?(0,d.jsx)(i.eDi,{}):(0,d.jsx)(i.mkN,{})}),(0,d.jsx)(re.K,{title:"Copy input",onClick:()=>{(async()=>{p.trim()&&await navigator.clipboard.writeText(p)})()},disabled:!p.trim(),children:(0,d.jsx)(i.nxz,{})}),(0,d.jsx)(re.K,{title:"Send prompt",onClick:()=>{h()},disabled:g||!p.trim(),children:(0,d.jsx)(i.kGk,{})}),(0,d.jsx)(re.K,{title:"Clear input",onClick:()=>{u("")},disabled:!p.trim(),children:(0,d.jsx)(i.yGN,{})}),(0,d.jsx)(re.K,{title:"Clear selected notes",onClick:a,disabled:0===r,children:(0,d.jsx)(s.DnH,{})})]})]})]})})]})},Ht=({messages:e,scrollProgress:t,onScrollToMessage:n})=>{const r=o.useRef(null);return o.useLayoutEffect(()=>{const e=r.current;if(!e)return;const n=e.scrollHeight-e.clientHeight;e.scrollTop=Math.max(0,n*t)},[e,t]),(0,d.jsx)(en,{ref:r,role:"group","aria-label":"Chat message minimap",children:e.map((e,t)=>(0,d.jsx)(tn,{type:"button","aria-label":`Go to ${e.role} message ${t+1}`,title:`${"user"===e.role?"You":"Mavis"} message ${t+1}`,$role:e.role,style:{height:`${Math.min(Math.max(8*Math.ceil(e.content.length/80),8),60)}px`},onClick:()=>n(e.id)},e.id))})},Jt=r.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
`,Wt=r.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,Gt=r.Ay.div`
  font-size: 10px;
  color: #555;
  margin-bottom: 2px;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  white-space: nowrap;
`,qt=r.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,_t=r.Ay.span`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,Yt=r.Ay.span`
  font-size: 12px;
  color: #555;
`,Vt=r.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,Xt=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Zt=r.Ay.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,Qt=r.Ay.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #b0b0b5 #e0e0e5;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e5;
  }

  &::-webkit-scrollbar-thumb {
    background: #b0b0b5;
    border-radius: 6px;
    border: 2px solid #e0e0e5;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #909095;
  }

  &,
  p,
  li,
  span,
  strong,
  em,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
  }
`,en=r.Ay.div`
  flex: 0 0 20px;
  width: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 12px 3px;
  overflow-y: auto;
  border-left: 1px solid #d0d0d0;
  background: #d0d0d0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,tn=r.Ay.button`
  width: 100%;
  min-height: 5px;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  border-radius: 3px;
  background: ${({$role:e})=>"user"===e?"#7c3aed":"#c4b5fd"};
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`,nn=r.Ay.div`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: #b0b0b5 transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b0b0b5;
    border-radius: 6px;
  }
`,on=r.Ay.div`
  max-width: 100%;
  min-width: 0;
  padding: 10px 14px;
  border-radius: 12px;
  white-space: pre-wrap;
  word-break: break-word;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  background: ${({role:e})=>"user"===e?"#2563eb":"#f5f5f5"};
  color: ${({role:e})=>"user"===e?"#fff":"#222"};
  padding: 20px;
  margin: 0;
  font: 13px 'Myriad Pro', 'Lucida Grande', Lucida, Verdana, sans-serif;

  a:link {
    color: #00f;
    text-decoration: none;
  }

  a:visited {
    color: #00a;
    text-decoration: none;
  }

  a:hover {
    color: #f60;
    text-decoration: underline;
  }

  a:active {
    color: #f60;
    text-decoration: underline;
  }

  blockquote {
    max-width: 100%;
    overflow-x: hidden;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  * html code {
    font-size: 100%;
  }

  * html pre {
    font-size: 101%;
  }

  pre,
  code {
    font-size: 14px;
    font-family: monaco, courier, consolas, monospace;
    color: green;
    font-style: italic;
  }

  pre {
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #c7cfd5;
    background: #f1f5f9;
    margin: 20px 0;
    padding: 8px;
    text-align: left;
    max-width: 100%;
    overflow-x: hidden;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  hr {
    color: #919699;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Myriad Pro', 'Lucida Grande', Lucida, Verdana, sans-serif;
    font-weight: bold;
  }

  h1 {
    margin-bottom: 1em;
    color: #000;
    font-size: 22px;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 18px;
    color: #000;
    padding-bottom: 2px;
  }

  h3 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 13px;
    color: #000;
  }

  h4 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 11px;
    color: #000;
  }

  h5 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: #000;
  }

  h6 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: #000;
  }

  p {
    margin-top: 0;
  }

  ul {
    list-style: square outside;
    margin: 0 0 0 30px;
    padding: 0 0 12px 6px;
  }

  li {
    margin-top: 0px;
  }

  ol {
    list-style-type: decimal;
    list-style-position: outside;
    margin: 0 0 0 30px;
    padding: 0 0 12px 6px;
  }

  ol ol {
    list-style-type: lower-alpha;
    list-style-position: outside;
    margin: 7px 0 0 30px;
    padding: 0 0 0 10px;
  }

  ul ul {
    margin-left: 40px;
    padding: 0 0 0 6px;
  }

  li > p {
    display: inline;
  }

  li > p + p {
    display: block;
  }

  li > a + p {
    display: block;
  }

  table {
    width: 100%;
    min-width: 100%;
    table-layout: auto;
    border-top: 1px solid #919699;
    border-left: 1px solid #919699;
    border-spacing: 0;
    margin: 0;
    margin-bottom: 20px;
  }

  table th,
  table td {
    width: fit-content;
    min-width: 8rem;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  table th {
    padding: 4px 8px;
    background: #e2e2e2;
    font-size: 12px;
    border-bottom: 1px solid #919699;
    border-right: 1px solid #919699;

    @media (max-width: 1260px) {
      font-size: 10px;
    }
  }

  table th p {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  table td {
    padding: 2px;
    margin: 0;
    font-size: 12px;
    vertical-align: top;
    border-bottom: 1px solid #919699;
    border-right: 1px solid #919699;
  }

  table td p {
    margin-bottom: 0;
  }

  table td p + p {
    margin-top: 5px;
  }

  table td p + p + p {
    margin-top: 5px;
  }

  table tr {
    height: 22px;
  }

  form {
    margin: 0;
  }

  button {
    margin: 0;
    height: 20px;
    min-width: 40px;
    width: fit-content;
    border: 1px solid #919699;
    border-radius: 3px;
    background: #e2e2e2;
    color: #000;
    font-size: 12px;
    cursor: pointer;
    padding: 0 6px;
    white-space: nowrap;
  }

  input[type='checkbox'] {
    display: inline-block;
    vertical-align: start;
    margin: 0 6px 0 0;
    width: 14px;
    height: 14px;
  }

  select {
    vertical-align: middle;
    padding: 0;
    margin: 0 0 3px 0;
    appearance: none;
    background: transparent;
    border: none;
    width: fit-content;
    height: 30px;
    color: gray !important;
  }

  textarea {
    width: 100%;
  }

  img {
    max-width: 45vw;
  }
`,rn=r.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;
  margin: 0;
  background: #e0e0e5;
  ${({expanded:e})=>e&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}
`,an=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #e0e0e5;
`,sn=r.Ay.textarea`
  resize: none;
  min-height: ${({expanded:e})=>e?"calc(100vh - 80px)":"80px"};
  max-height: ${({expanded:e})=>e?"calc(100vh - 80px)":"300px"};
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 30px !important;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`,ln=r.Ay.div`
  padding: 0px;
  position: relative;
  width: auto;
`,dn=r.Ay.div`
  width: 100% !important;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 10px;
  padding: 0 10px;
  margin: 0px !important;

  border-radius: 10px;
  transition: all 0.2s;

  svg {
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
    overflow: hidden;
  }

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #2e2e2e;
  }
`,cn=r.Ay.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,pn=r.Ay.div`
  position: absolute;

  bottom: 42px;
  left: 0;

  min-width: 160px;
  max-width: 280px;
  max-height: 280px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  overflow-y: auto;

  background: white;
  border-radius: 14px;
  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 100;
`,un=r.Ay.span`
  width: 100%;
  min-height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  text-align: left;

  border: none;
  border-radius: 10px;

  background: #f5f6f8;
  color: #444;

  padding: 8px 10px;

  cursor: pointer;
  transition: 0.2s;

  margin: 0 !important;

  overflow: hidden;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background: #eceff3;
  }

  &.selected {
    background: #4f46e5;
    color: white;
  }
`,xn=r.Ay.div`
  position: relative;
`,gn=({panelWidth:e,toolbarOffset:t,minimized:n,setMinimized:o,menuExpanded:r,setMenuExpanded:a,mobileActive:s})=>(0,d.jsxs)(hn,{toolbarOffset:t,barWidth:e,minimized:n,mobileActive:s,children:[(0,d.jsx)(wn,{type:"button",title:r?"Collapse sessions menu":"Expand sessions menu","aria-label":r?"Collapse sessions menu":"Expand sessions menu","data-sidebar-toggle":"sessions",onClick:()=>a(!r),children:(0,d.jsx)(i.ND1,{})}),(0,d.jsxs)(mn,{children:[(0,d.jsx)(i.Ojn,{}),"Chat"]}),(0,d.jsx)(fn,{children:(0,d.jsx)(bn,{title:n?"Restore chat panel":"Minimize chat panel",onClick:()=>o(!n),children:n?(0,d.jsx)(i.mkN,{}):(0,d.jsx)(i.prK,{})})})]}),hn=r.Ay.div`
  display: ${({minimized:e})=>e?"none":"flex"};
  position: absolute;
  left: ${({toolbarOffset:e})=>`${e}px`};
  top: 10px;
  width: ${({barWidth:e})=>`${e}px`};
  flex-direction: row;
  align-items: center;
  height: 32px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #d0d0d0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;

  @media (max-width: 768px) {
    display: ${({mobileActive:e})=>e?"flex":"none"};
    position: relative;
    top: auto;
    left: auto;
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    height: 40px;
    margin: 0;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
    justify-content: flex-start;

    && ${re.K} svg {
      color: #fff !important;
    }

    && ${re.K}:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`,mn=r.Ay.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;

  @media (max-width: 768px) {
    display: none;
    color: #fff;
  }
`,fn=r.Ay.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 35px;
`,bn=(0,r.Ay)(re.K)`
  @media (max-width: 768px) {
    display: none !important;
  }
`,wn=r.Ay.button`
  display: none;
  width: 20px;
  height: 30px;
  flex: 0 0 20px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    display: flex;
    margin-left: 20px;
  }
`,yn=({minimized:e,setMinimized:t,menuExpanded:n,setMenuExpanded:r})=>{const{sessions:a,currentSessionId:s,createNewSession:l,loadSession:c,deleteSession:p,removeSession:u}=Kt(),x=o.useRef(null),g=()=>{window.innerWidth<=768&&r(!1)};return o.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!n)return;const o=e.target;o instanceof Node&&(null===(t=x.current)||void 0===t||!t.contains(o))&&(o instanceof Element&&o.closest('[data-sidebar-toggle="sessions"]')||r(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n,r]),(0,d.jsxs)(vn,{ref:x,expanded:n,children:[(0,d.jsxs)(re.K,{expanded:n,title:"Menu",onClick:()=>r(!n),children:[(0,d.jsx)(i.ND1,{}),n&&(0,d.jsx)("span",{children:"Sessions"})]}),e&&(0,d.jsxs)(re.K,{expanded:n,title:"Expand Chat",onClick:()=>{t(!e),g()},children:[(0,d.jsx)(i.Ojn,{}),n&&(0,d.jsx)("span",{children:"Expand Chat"})]}),(0,d.jsxs)(re.K,{expanded:n,onClick:()=>{l(),g()},children:[(0,d.jsx)(i.GGD,{}),n&&(0,d.jsx)("span",{children:"New Chat"})]}),(0,d.jsx)(kn,{disabled:!n,children:a.map(e=>(0,d.jsxs)(Cn,{children:[(0,d.jsx)(jn,{active:s===e.id,onClick:()=>{c(e.id),g()},children:e.title}),(0,d.jsx)(Sn,{onClick:t=>{t.stopPropagation(),p(e.id),g()},children:(0,d.jsx)(i.IXo,{size:12})})]},e.id))})]})},vn=r.Ay.div`
  width: ${e=>e.expanded?"180px":"40px"};
  position: static;
  right: 0;
  top: 40px;
  height: 100%;
  border-left: 1px solid #d0d0d0;
  padding: 4px;
  overflow-y: auto;
  overflow-x: visible;
  background: #f8f8f8;
  margin-left: 6px;
  transition: width 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 20;
    width: ${({expanded:e})=>e?"min(82vw, 240px)":"0"};
    height: 100%;
    margin: 0;
    padding: ${({expanded:e})=>e?"4px":"0"};
    overflow-x: hidden;
    border-left: ${({expanded:e})=>e?"1px solid #d0d0d0":"0"};
    box-shadow: ${({expanded:e})=>e?"-4px 0 12px rgba(0, 0, 0, 0.15)":"none"};
  }
`,kn=r.Ay.div`
  display: ${e=>e.disabled?"none":"flex"};
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,jn=r.Ay.div`
  flex: 1;

  display: flex;
  align-items: center;

  min-height: 28px;

  padding: 4px 10px;

  border-radius: 999px;

  background: ${({active:e})=>e?"#4f46e5":"rgba(79, 70, 229, 0.12)"};

  color: ${({active:e})=>e?"#fff":"#4338ca"};

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: ${({active:e})=>e?"#4f46e5":"rgba(79, 70, 229, 0.2)"};
  }
`,Cn=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Sn=r.Ay.button`
  width: 26px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 999px;

  background: rgba(79, 70, 229, 0.12);

  color: #4338ca;

  cursor: pointer;

  transition: 0.2s;

  flex-shrink: 0;

  &:hover {
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
  }
`,An="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const $n=({explorerExpanded:e,setExplorerExpanded:t})=>{var n;const{selectedDate:r,setSelectedDate:a}=(0,oe.M)(),{user:s}=(0,V.o)(),l=null!==(n=null===s||void 0===s?void 0:s.uid)&&void 0!==n?n:"",{entries:c,fetchEntries:p,addEntry:u,updateEntry:x,updateEntryDate:g,renameTag:h,deleteTag:m,addTagToEntries:f,removeTagFromEntries:b,applyEntries:w,undoLastChange:y,redoLastChange:k,canUndo:j,canRedo:C}=Y((null===s||void 0===s?void 0:s.uid)||""),{searchContent:S,setSearchContent:A,selectedTag:$,setSelectedTag:E,systemTags:T,availableTags:M,pickerTags:N,visibleEntries:z}=function(e){const[t,n]=o.useState(""),[r,a]=o.useState("favorite"),s=o.useMemo(()=>[{name:"all",icon:i.Vap,system:!0,position:"top"},{name:"favorite",icon:i.usP,system:!0,position:"top"},{name:"journal",icon:F.Fsq,system:!0,position:"top"},{name:"templates",icon:i.MRc,system:!0,position:"top"},{name:"prompts",icon:L.vTI,system:!0,position:"top"},{name:"other",icon:I.uoj,system:!0,position:"top"},{name:"archive",icon:i.OZ2,system:!0,position:"bottom"},{name:"trash",icon:i.IXo,system:!0,position:"bottom"}],[]),l=o.useMemo(()=>s.map(e=>e.name),[s]),d=o.useMemo(()=>Array.from(new Set(e.flatMap(e=>U(e.content)))).filter(e=>!l.includes(e)).sort(),[e,l]),c=o.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...d])).sort(),[d]),p=o.useCallback(e=>{const n=U(e.content),o=n.includes("trash"),i=n.includes("archive"),a=n.includes("templates"),s=n.includes("prompts");return""!==t.trim()?e.content.toLowerCase().includes(t.toLowerCase()):"all"===r?!o&&!i:"favorite"===r?n.includes("favorite")&&!o&&!i:"journal"===r?n.includes("journal")&&!a&&!o&&!i:"templates"===r?a&&!o&&!i:"prompts"===r?s&&!o&&!i:"other"===r?!o&&!i&&!a&&!s&&!n.includes("journal"):"archive"===r?i&&!o:"trash"===r?o:n.includes(r)&&!o&&!i&&!a&&!s},[t,r]),u=o.useMemo(()=>e.filter(p),[e,p]);return{searchContent:t,setSearchContent:n,selectedTag:r,setSelectedTag:a,systemTags:s,availableTags:d,pickerTags:c,visibleEntries:u,isEntryVisible:p}}(c),D=o.useMemo(()=>(e=>{if(!e)return[];try{const t=localStorage.getItem(`mavis-ai-web:unpinned-tags:${e}`);if(null===t)return[];const n=JSON.parse(t);return Array.isArray(n)&&n.every(e=>"string"===typeof e)?Array.from(new Set(n)):(console.error("Stored tag pin preferences must be an array of strings."),[])}catch(t){return console.error("Failed to load tag pin preferences.",t),[]}})(l),[l]),[O,R]=o.useState(()=>({userId:l,tags:D,loaded:!1})),P=O.userId===l?O.tags:D,B=O.userId===l&&O.loaded;o.useEffect(()=>{let e=!0;return(async()=>{if(l)try{const t=await async function(e){const t=await(0,W.x7)((0,W.H9)(G.OO,"users",e,"settings","tagPins"));if(!t.exists())return null;const n=t.data().unpinnedTags;if(!Array.isArray(n)||!n.every(e=>"string"===typeof e))throw new Error("Stored unpinned tag preferences must be an array of strings.");return Array.from(new Set(n))}(l),n=null!==t&&void 0!==t?t:D;null===t&&n.length>0&&await ne(l,n),e&&R({userId:l,tags:n,loaded:!0})}catch(t){console.error("Failed to load tag pin preferences from Firebase.",t),e&&R({userId:l,tags:D,loaded:!0})}else R({userId:l,tags:[],loaded:!0})})(),()=>{e=!1}},[l,D]);const H=async e=>{const t=Array.from(new Set(e));if(!l)throw new Error("Cannot save tag pin preferences without an authenticated user.");await ne(l,t),R({userId:l,tags:t,loaded:!0})},[J,q]=o.useState(null),[_,Q]=o.useState([]),te=o.useRef(null),re=o.useRef(null),[ie,ae]=o.useState(0),[le,de]=o.useState(0),ce=o.useRef(null),[pe,ue]=o.useState(0),[xe,ge]=o.useState(0),[he,me]=o.useState(!1),[fe,be]=o.useState(!1),[we,ye]=o.useState(!1),[ve,ke]=o.useState("notes"),[je,Ce]=o.useState(!0),Se=o.useCallback(e=>{const{clientWidth:t,scrollLeft:n}=e.currentTarget;if(0===t)return;const o=n>=t/2?"chat":"notes";ke(e=>e===o?e:o)},[]),Ae=o.useMemo(()=>c.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[c]),$e=o.useMemo(()=>c.filter(e=>U(e.content).includes("trash")).map(e=>e.id),[c]),Ee=o.useMemo(()=>_.filter(e=>$e.includes(e)),[_,$e]);o.useLayoutEffect(()=>{const e=()=>{var e;const t=ce.current,n=document.getElementById("header-portal");ue(null!==(e=null===t||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0),ge(t&&n?t.getBoundingClientRect().left-n.getBoundingClientRect().left:0)};e();const t=new ResizeObserver(e);return ce.current&&t.observe(ce.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[e,he,fe,we]),o.useLayoutEffect(()=>{const e=()=>{var e;const t=re.current,n=document.getElementById("header-portal");ae(null!==(e=null===t||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0),de(t&&n?t.getBoundingClientRect().left-n.getBoundingClientRect().left:0)};e();const t=new ResizeObserver(e);return re.current&&t.observe(re.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[e,he,fe,we]);const Te=o.useCallback(e=>{Q(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),Me=o.useCallback(()=>{Q(z.map(e=>e.id))},[z]),Ne=o.useCallback(()=>{Q([])},[]);o.useEffect(()=>{Q(e=>e.filter(e=>c.some(t=>t.id===e)))},[c]);const ze=o.useMemo(()=>c.filter(e=>_.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[c,_]),De=o.useMemo(()=>c.filter(e=>_.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[c,_]),Oe=o.useCallback((e,t)=>{te.current={id:e,textarea:t}},[]),Re=o.useCallback((e,t)=>{const n=te.current;(null===n||void 0===n?void 0:n.id)===e&&n.textarea===t&&(te.current=null)},[]),Pe=o.useCallback(()=>{const e=te.current;if(null!==e&&void 0!==e&&e.textarea.isConnected)return{entryId:e.id,value:e.textarea.value,textarea:e.textarea};const t=c.find(e=>e.id===_[0]);if(!t)return null;const n=ee(t.content,K);return{entryId:t.id,value:n.text||"",textarea:null}},[c,_]),Ie=o.useCallback(async(e,t)=>{if(je)throw new Error("Unlock note editing before using the AI assistant.");const n=c.find(t=>t.id===e);if(!n)throw new Error("The note selected for AI editing could not be found.");const o=K(n.content)?JSON.parse(n.content):{...Z,text:n.content},r=o&&"object"===typeof o?o:{...Z,text:n.content};await x(e,JSON.stringify({...r,text:t}))},[c,je,x]),Le=function({userId:e,getNoteContext:t,onContentChange:n}){const[r,i]=(0,o.useState)(!1),[a,s]=(0,o.useState)(!1),[l,d]=(0,o.useState)(""),[c,p]=(0,o.useState)(""),[u,x]=(0,o.useState)(!1),[g,h]=(0,o.useState)(""),m=(0,o.useRef)({entryId:null,value:"",selectionStart:null,selectionEnd:null}),f=()=>{s(!1),d(""),p(""),h("")};return{aiLoading:r,assistantOpen:a,instruction:l,setInstruction:d,apiKeyInput:c,setApiKeyInput:p,requiresApiKey:u,error:g,openAssistant:async()=>{var n,o,r,i,a;const l=t(),c=null===l||void 0===l?void 0:l.textarea,u=null!==(n=null!==(o=null===c||void 0===c?void 0:c.value)&&void 0!==o?o:null===l||void 0===l?void 0:l.value)&&void 0!==n?n:"",g=null!==(r=null===c||void 0===c?void 0:c.selectionStart)&&void 0!==r?r:null,f=null!==(i=null===c||void 0===c?void 0:c.selectionEnd)&&void 0!==i?i:null;if(m.current={entryId:null!==(a=null===l||void 0===l?void 0:l.entryId)&&void 0!==a?a:null,value:u,selectionStart:g,selectionEnd:f},s(!0),d(""),p(""),h(""),!l)return x(!1),void h("Select a note or start editing a note to use the AI assistant.");if(!e)return x(!1),void h("Sign in to use the AI assistant.");try{const t=await zt(e);x(!t)}catch(b){console.error("Failed to load the OpenAI API key.",b),x(!0),h("Could not load the saved API key. Enter it again to continue.")}},closeAssistant:f,clearInstruction:()=>{d(""),h("")},submitInstruction:async()=>{if(r)return;const t=l.trim();if(!t)return void h("Enter an instruction for the note.");if(!e)return void h("Sign in to use the AI assistant.");const{entryId:o,value:a,selectionStart:s,selectionEnd:d}=m.current;if(o){i(!0),h("");try{let r;if(u){if(r=c.trim(),!r)return void h("Enter your OpenAI API key.");await Nt(e,r),x(!1),p("")}else r=await zt(e);if(null!==s&&null!==d&&s!==d){const i=a.substring(s,d),l=await Dt(e,An,t,i,"gpt-6-luna",r),c=a.substring(0,s)+l.output_text.trim()+a.substring(d);await n(o,c)}else{const i=await Dt(e,An,t,a,"gpt-6-luna",r);await n(o,`${a}\n\n${i.output_text.trim()}`)}f()}catch(g){console.error("AI note request failed.",g),h(g instanceof Error?g.message:"AI request failed.")}finally{i(!1)}}else h("Select a note or start editing a note to use the AI assistant.")}}}({userId:null===s||void 0===s?void 0:s.uid,getNoteContext:Pe,onContentChange:Ie});o.useEffect(()=>{p()},[p]);const Fe=()=>{window.scrollTo({top:0,behavior:"smooth"})},Ke=async()=>{if(je||!_.length)return;const e=new Set(Ee),t=_.filter(t=>!e.has(t));if(Ee.length){const e=`${Ee.length} selected ${1===Ee.length?"note":"notes"}`,n=`${t.length} selected ${1===t.length?"note":"notes"}`,o=t.length?`Move ${n} to Trash and permanently delete ${e} from Trash?`:`Permanently delete ${e} from Trash?`;if(!window.confirm(o))return}const n=c.filter(e=>t.includes(e.id)).map(e=>{const t=ee(e.content,K),n=Array.from(new Set([...t.tags.filter(e=>"archive"!==e),"trash"]));return{...e,content:JSON.stringify({...t,tags:n})}});await w(n,Ee)},Be=(o.useMemo(()=>c.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[c]),x);return(0,d.jsx)(En,{children:(0,d.jsxs)(Ft,{uid:s?s.uid:"",selectedNotesText:ze,noteTitles:De,clearSelectedNotes:Ne,entries:c,children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(v,{selectedTag:$,selectedDate:r,searchContent:S,onSearchChange:A,onDateChange:e=>{a(e.target.value)},onAddNote:async function(){const e="all"!==$?[$]:[];await u({date:r,content:JSON.stringify({...Z,tags:e})}),Fe()},onCopyAllNotes:async()=>{const e=ze.length>0?ze:z.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:Me,onClearAll:Ne,onArchiveSelected:async()=>{try{await(async()=>{if(je||!_.length)return;const e=c.filter(e=>_.includes(e.id)).map(e=>{const t=ee(e.content,K);return{...e,content:JSON.stringify({...t,tags:(n=t.tags,n.includes("archive")?n.filter(e=>"archive"!==e):[...n.filter(e=>"trash"!==e),"archive"])})};var n});await w(e)})()}catch(e){console.error("Failed to archive selected notes.",e)}},onDeleteSelected:async()=>{try{await Ke()}catch(e){console.error("Failed to delete selected notes.",e)}},onUndo:async()=>{try{await y()}catch(e){console.error("Failed to undo the last note change.",e)}},onRedo:async()=>{try{await k()}catch(e){console.error("Failed to redo the last note change.",e)}},canUndo:j,canRedo:C,noteAssistant:Le,selectedCount:_.length,explorerExpanded:e,setExplorerExpanded:t,panelWidth:ie,toolbarOffset:le,minimized:he,setMinimized:me,mobileActive:"notes"===ve,notesLocked:je,onToggleNotesLock:()=>{if(!je){const e=document.activeElement;e instanceof HTMLElement&&(e.isContentEditable||e instanceof HTMLTextAreaElement)&&e.blur()}Ce(e=>!e)}}),(0,d.jsx)(gn,{onClearAll:Ne,panelWidth:pe,toolbarOffset:xe,minimized:fe,setMinimized:be,menuExpanded:we,setMenuExpanded:ye,mobileActive:"chat"===ve})]}),(0,d.jsxs)(Tn,{onScroll:Se,children:[(0,d.jsxs)(Mn,{role:"region","aria-label":"Notes",children:[(0,d.jsx)(se,{systemTags:T,customTags:M,unpinnedTags:P,onToggleTagPin:async e=>{!je&&B&&await H(P.includes(e)?P.filter(t=>t!==e):[...P,e])},selectedTag:$,setSelectedTag:E,explorerExpanded:e,setExplorerExpanded:t,minimized:he,setMinimized:me,selectedNoteIds:_,onRenameTag:async(e,t)=>{if(!je){if(await h(e,t),P.includes(e)){const n=P.filter(t=>t!==e);n.includes(t)||n.push(t),await H(n)}$===e&&E(t)}},onDeleteTag:async e=>{je||(await m(e),P.includes(e)&&await H(P.filter(t=>t!==e)),$===e&&E("all"))},onAddTagToSelected:async e=>{je||await f(_,e)},onRemoveTagFromSelected:async e=>{je||await b(_,e)},trashCount:$e.length,selectedTrashCount:Ee.length,onDeleteSelectedNotes:Ke,onRestoreSelectedTrash:async()=>{je||await b(Ee,"trash")},onRestoreAllTrash:async()=>{je||await b($e,"trash")},onEmptyTrash:async()=>{if(je||!$e.length)return;window.confirm(`Permanently delete all ${$e.length} note${1===$e.length?"":"s"} from Trash? You can undo this while the notes view is open.`)&&await w([],$e)},actionsLocked:je,tagPreferencesLoading:!B}),(0,d.jsx)(Dn,{ref:re,minimized:he,otherMinimized:fe,children:!he&&(0,d.jsx)(jt,{entries:z,pickerTags:N,updateEntryDate:async(e,t)=>{je||await g(e,t)},onHoverCard:q,onChangeEntry:Be,selectedNoteIds:_,onToggleSelection:Te,templateOptions:Ae,notesLocked:je,onEditorFocus:Oe,onEditorBlur:Re})})]}),(0,d.jsxs)(Nn,{role:"region","aria-label":"AI sessions",children:[(0,d.jsx)(zn,{ref:ce,minimized:fe,otherMinimized:he,children:(0,d.jsx)(Ut,{uid:(null===s||void 0===s?void 0:s.uid)||"",selectedNotesText:ze,noteTitles:De,notesCount:_.length,clearSelectedNotes:Ne})}),(0,d.jsx)(yn,{minimized:fe,setMinimized:be,menuExpanded:we,setMenuExpanded:ye})]})]})]})})},En=r.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`,Tn=r.Ay.div`
  display: contents;

  @media (max-width: 768px) {
    display: flex;
    flex: 1 1 0;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,Mn=r.Ay.div`
  display: contents;

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    height: 100%;
    overflow: hidden;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`,Nn=r.Ay.div`
  display: contents;

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    height: 100%;
    overflow: hidden;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`,zn=r.Ay.div`
  flex: ${({minimized:e})=>e?"0":"1"};
  width: ${({minimized:e})=>e?"0":"auto"};
  min-width: 0;
  max-width: 1024px;
  margin-left: ${({minimized:e,otherMinimized:t})=>!e&&t?"auto":"0"};
  margin-right: ${({minimized:e,otherMinimized:t})=>!e&&t?"auto":"0"};
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;

  @media (max-width: 768px) {
    flex: ${({minimized:e})=>e?"0":"1 1 0"};
    max-width: none;
    margin: 0;
  }
`,Dn=r.Ay.div`
  flex: ${({minimized:e})=>e?"0 0 0":"1.5"};
  width: ${({minimized:e})=>e?"0":"auto"};
  min-width: 0;
  max-width: 1024px;
  margin-left: ${({minimized:e,otherMinimized:t})=>!e&&t?"auto":"0"};
  margin-right: ${({minimized:e,otherMinimized:t})=>!e&&t?"auto":"10px"};
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #b0b0b5 #e0e0e5;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e5;
  }

  &::-webkit-scrollbar-thumb {
    background: #b0b0b5;
    border-radius: 6px;
    border: 2px solid #e0e0e5;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #909095;
  }

  @media (max-width: 768px) {
    flex: ${({minimized:e})=>e?"0 0 0":"1 1 0"};
    max-width: none;
    margin: 0;
  }
`}}]);
//# sourceMappingURL=dashboard.10ba6795.chunk.js.map