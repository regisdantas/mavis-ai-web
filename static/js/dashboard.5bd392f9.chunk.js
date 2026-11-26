"use strict";(Array.isArray(globalThis.webpackChunkmavis_ai_web)?globalThis.webpackChunkmavis_ai_web:globalThis.webpackChunkmavis_ai_web=[]).push([[945],{3641(e,t,n){n.r(t),n.d(t,{default:()=>An});var o=n(5043),i=n(2816),r=n(1009),a=n(4960),s=n(7149),l=n(7950),d=n(579);const c=({instruction:e,setInstruction:t,apiKeyInput:n,setApiKeyInput:o,requiresApiKey:i,error:a,loading:s,onClear:c,onSend:v,onClose:k,dropdownRef:j})=>(0,l.createPortal)((0,d.jsxs)(p,{ref:j,role:"dialog","aria-label":"AI assistant",onMouseDown:e=>e.stopPropagation(),children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(x,{children:"AI assistant"}),(0,d.jsx)(g,{type:"button","data-keepeditor":"true","aria-label":"Close AI assistant",onClick:k,children:(0,d.jsx)(r.yGN,{})})]}),i&&(0,d.jsx)(h,{type:"password","data-keepeditor":"true",autoComplete:"off",placeholder:"OpenAI API key","aria-label":"OpenAI API key",value:n,onChange:e=>o(e.target.value)}),(0,d.jsx)(m,{"data-keepeditor":"true",autoFocus:!0,rows:5,placeholder:"What should I change? For example: fix grammar, summarize, or rewrite professionally.","aria-label":"AI instruction",value:e,onChange:e=>t(e.target.value),onKeyDown:e=>{if("Escape"===e.key)return void k();const t="function"===typeof window.matchMedia?window.matchMedia("(max-width: 768px)").matches:window.innerWidth<=768;"Enter"!==e.key||t||e.ctrlKey||(e.preventDefault(),v())}}),a&&(0,d.jsx)(f,{role:"alert",children:a}),(0,d.jsxs)(b,{children:[(0,d.jsx)(y,{type:"button","data-keepeditor":"true",onClick:c,disabled:s,children:"Clear"}),(0,d.jsxs)(w,{type:"button","data-keepeditor":"true",onClick:v,disabled:s||!e.trim(),children:[(0,d.jsx)(r.kGk,{}),s?"Sending...":"Send"]})]})]}),document.body),p=i.Ay.div`
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
`,u=i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,x=i.Ay.h2`
  margin: 0;
  color: #231f20;
  font-size: 16px;
  font-weight: 600;
`,g=i.Ay.button`
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
`,h=i.Ay.input`
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
`,m=i.Ay.textarea`
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
`,f=i.Ay.p`
  margin: 0;
  color: #b91c1c;
  font-size: 13px;
`,b=i.Ay.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`,y=i.Ay.button`
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
`,w=i.Ay.button`
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
`,v=({selectedTag:e,selectedDate:t,searchContent:n,onSearchChange:i,onDateChange:l,onAddNote:p,onCopyAllNotes:u,onSelectAll:x,onClearAll:g,onArchiveSelected:h,onDeleteSelected:m,onUndo:f,onRedo:b,canUndo:y,canRedo:w,noteAssistant:v,selectedCount:M,explorerExpanded:I,setExplorerExpanded:L,panelWidth:F,toolbarOffset:K,minimized:B,setMinimized:U,mobileActive:H,notesLocked:J,onToggleNotesLock:W})=>{const[G,_]=o.useState(!1),q=o.useRef(null),Y=o.useRef(null),V=o.useRef(null),X=o.useRef(null);o.useEffect(()=>{if(!G)return;const e=e=>{var t;const n=e.target;n instanceof Node&&null!==(t=q.current)&&void 0!==t&&t.contains(n)||_(!1)};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[G]),o.useEffect(()=>{var e;G&&(null===(e=Y.current)||void 0===e||e.focus())},[G]),o.useEffect(()=>{H||_(!1)},[H]),o.useEffect(()=>{if(!v.assistantOpen)return;const e=e=>{var t,n;const o=e.target;o instanceof Node&&(null!==(t=V.current)&&void 0!==t&&t.contains(o)||null!==(n=X.current)&&void 0!==n&&n.contains(o))||v.closeAssistant()};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[v]);const Z=M>0?g:x,Q=""===n.trim()?e.charAt(0).toUpperCase()+e.slice(1):"Search";return(0,d.jsxs)(k,{role:"toolbar","aria-label":`${Q} notes tools`,title:`${Q} notes`,toolbarOffset:K,barWidth:F,minimized:B,mobileActive:H,children:[(0,d.jsxs)(A,{$searchExpanded:G,children:[!B&&(0,d.jsx)(R,{type:"button",title:"Minimize notes panel","aria-label":"Minimize notes panel",onClick:()=>U(!0),children:(0,d.jsx)(r.prK,{})}),!B&&(0,d.jsx)($,{children:Q})]}),(0,d.jsx)(E,{children:(0,d.jsxs)(T,{$minimized:B,"data-search-expanded":G,children:[(0,d.jsx)(P,{type:"button",title:I?"Collapse notes menu":"Expand notes menu","aria-label":I?"Collapse notes menu":"Expand notes menu","data-sidebar-toggle":"notes",onClick:()=>L(!I),children:(0,d.jsx)(r.ND1,{})}),(0,d.jsxs)(j,{ref:q,$searchExpanded:G,children:[(0,d.jsx)(C,{$searchExpanded:G,type:"button","aria-label":"Open search","aria-expanded":G,tabIndex:G?-1:0,onClick:()=>_(!0),children:(0,d.jsx)(r.CKj,{})}),(0,d.jsx)("input",{ref:Y,"aria-hidden":!G,tabIndex:G?0:-1,placeholder:"Search",value:n,onChange:e=>i(e.target.value),onKeyDown:e=>{"Enter"!==e.key&&"Escape"!==e.key||(e.preventDefault(),e.currentTarget.blur(),_(!1))}}),(0,d.jsx)(S,{$searchExpanded:G,type:"button","aria-label":"Clear search",title:"Clear search",tabIndex:G?0:-1,disabled:!n,onClick:()=>i(""),children:(0,d.jsx)(s.rOP,{})})]}),(0,d.jsx)(D,{type:"button",$active:J,title:J?"Unlock note editing":"Lock note editing","aria-label":J?"Unlock note editing":"Lock note editing","aria-pressed":J,onClick:W,children:J?(0,d.jsx)(r.F5$,{}):(0,d.jsx)(r.K4k,{})}),(0,d.jsx)(N,{type:"button",$selected:M>0,$tone:"select",title:M>0?"Deselect all notes":"Select all visible notes","aria-label":M>0?"Deselect all notes":"Select all visible notes","aria-pressed":M>0,onClick:Z,children:M>0?(0,d.jsx)(r.TG1,{}):(0,d.jsx)(r.NLe,{})}),(0,d.jsx)(N,{type:"button",$tone:"copy",title:"Copy selected or visible notes","aria-label":"Copy selected or visible notes",onClick:u,children:(0,d.jsx)(r.nxz,{})}),"journal"===e&&(0,d.jsx)(O,{children:(0,d.jsx)("input",{title:"Select date","aria-label":"Select date",type:"date",value:t,onChange:l})}),(0,d.jsx)(N,{type:"button",$tone:"add",title:"Add note","aria-label":"Add note",onClick:p,children:(0,d.jsx)(a.n4h,{})}),(0,d.jsx)(N,{ref:V,type:"button",$tone:"ai",title:"AI assistant","aria-label":"AI assistant","aria-expanded":v.assistantOpen,disabled:J,onMouseDown:e=>e.preventDefault(),onClick:()=>{v.assistantOpen?v.closeAssistant():v.openAssistant()},children:(0,d.jsx)(r.Ojn,{})}),(0,d.jsx)(N,{type:"button",$tone:"redo",title:"Redo last note change","aria-label":"Redo last note change",disabled:J||!w,onClick:b,children:(0,d.jsx)(r.VI6,{})}),(0,d.jsx)(N,{type:"button",$tone:"undo",title:"Undo last note change","aria-label":"Undo last note change",disabled:J||!y,onClick:f,children:(0,d.jsx)(r.cO3,{})}),(0,d.jsx)(z,{"aria-hidden":"true"}),(0,d.jsx)(N,{type:"button",$tone:"archive",title:"Archive selected notes","aria-label":"Archive selected notes",disabled:J||0===M,onClick:h,children:(0,d.jsx)(r.OZ2,{})}),(0,d.jsx)(N,{type:"button",$tone:"trash",$rightSpace:!0,title:"Delete selected notes","aria-label":"Delete selected notes",disabled:J||0===M,onClick:m,children:(0,d.jsx)(r.IXo,{})})]})}),v.assistantOpen&&(0,d.jsx)(c,{instruction:v.instruction,setInstruction:v.setInstruction,apiKeyInput:v.apiKeyInput,setApiKeyInput:v.setApiKeyInput,requiresApiKey:v.requiresApiKey,error:v.error,loading:v.aiLoading,onClear:v.clearInstruction,onSend:()=>{v.submitInstruction()},onClose:v.closeAssistant,dropdownRef:X})]})},k=i.Ay.div`
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
`,j=i.Ay.div`
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
`,C=i.Ay.button`
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
`,S=i.Ay.button`
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
`,A=i.Ay.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  height: 30px;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: ${({$searchExpanded:e})=>e?"none":"flex"};
  }
`,$=i.Ay.div`
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
`,E=i.Ay.div`
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
`,T=i.Ay.div`
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
`,M=(e,t,n=!1)=>"undo"===e?n?"#f87171":"#dc2626":"redo"===e||"archive"===e?n?"#4ade80":"#16a34a":"trash"===e?n?"#f87171":"#dc2626":"ai"===e?n?"#a78bfa":"#7c3aed":"add"===e?n?"#86efac":"#4ade80":"search"===e?n?"#60a5fa":"#2563eb":"copy"===e?n?"#cbd5e1":"#64748b":"select"===e?t?n?"#a78bfa":"#4f46e5":n?"#60a5fa":"#2563eb":n?"#fff":"#2e2e2e",N=i.Ay.button`
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
`,z=i.Ay.span`
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
`,D=i.Ay.button`
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
`,O=i.Ay.div`
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
`,R=i.Ay.button`
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
`,P=i.Ay.button`
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
`;var I=n(2815),L=n(4966),F=n(2127);const K=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},B=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},U=e=>{if(!K(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))};var H=n(8222),J=n.n(H),W=n(8046),G=n(1286);const _=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),q=e=>{const t=(0,W.H9)(G.OO,"users",e);return(0,W.rJ)(t,"entries")};function Y(e){const[t,n]=o.useState([]),i=o.useRef(t),r=o.useRef([]),a=o.useRef([]),[,s]=o.useState(0),l=o.useRef(Promise.resolve()),d=o.useRef(e);o.useEffect(()=>{d.current!==e&&(d.current=e,i.current=[],n([]),r.current=[],a.current=[],s(e=>e+1))},[e]);const c=o.useCallback((t,n)=>{if(!e)return Promise.resolve();const o=l.current.then(async()=>{const o=new Map(n.map(e=>[e.id,e]));await Promise.all(t.map(async t=>{const n=o.get(t),i=await(async(e,t)=>{const n=q(e);return(await(0,W.GG)((0,W.P)(n,(0,W._M)("id","==",t)))).docs})(e,t);n?i.length?await Promise.all(i.map(t=>(0,W.BN)((0,W.H9)(G.OO,`users/${e}/entries/${t.id}`),n))):await(0,W.gS)(q(e),n):await Promise.all(i.map(t=>(0,W.kd)((0,W.H9)(G.OO,`users/${e}/entries/${t.id}`))))}))});return l.current=o.catch(()=>{}),o},[e]),p=o.useCallback(async(t,o=[],l=!0)=>{if(!e)return;const d=Array.from(new Set([...t.map(e=>e.id),...o]));if(!d.length)return;const p=new Set(d),u=i.current.filter(e=>p.has(e.id)),x=new Map(t.filter(e=>p.has(e.id)).map(e=>[e.id,e])),g=Array.from(x.values());if(u.length===g.length&&u.every(e=>{const t=x.get(e.id);return void 0!==t&&e.uid===t.uid&&e.content===t.content&&e.date===t.date&&e.createdAt===t.createdAt}))return;const h=_([...i.current.filter(e=>!p.has(e.id)),...g]);i.current=h,n(h),l&&(r.current.push({ids:d,before:u,after:g}),a.current=[],s(e=>e+1)),await c(d,g)},[c,e]),u=o.useCallback(async()=>{if(!e)return;const t=q(e),o=(await(0,W.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}}),r=_(o);i.current=r,n(r)},[e]),x=o.useCallback(async({content:t,date:n})=>{if(!e)return null;const o={uid:e,id:J()(),content:t,date:n,createdAt:(new Date).toISOString()};return await p([o]),o},[p,e]),g=o.useCallback(async(t,n)=>{if(!e)return;const o=i.current.find(e=>e.id===t);o&&await p([{...o,content:n}])},[p,e]),h=o.useCallback(async t=>{e&&i.current.some(e=>e.id===t.id)&&await p([t])},[p,e]),m=o.useCallback(async(e,t)=>{const n=i.current.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}}).map(n=>{const o=JSON.parse(n.content);return{...n,content:JSON.stringify({...o,tags:(o.tags||[]).map(n=>n===e?t:n)})}});await p(n)},[p]),f=o.useCallback(async e=>{const t=i.current.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}}).map(t=>{const n=JSON.parse(t.content);return{...t,content:JSON.stringify({...n,tags:(n.tags||[]).filter(t=>t!==e)})}});await p(t)},[p]),b=o.useCallback(async(e,t)=>{const n=i.current.filter(t=>e.includes(t.id)).map(e=>{const n=JSON.parse(e.content);return{...e,content:JSON.stringify({...n,tags:Array.from(new Set([...n.tags||[],t]))})}});await p(n)},[p]),y=o.useCallback(async(e,t)=>{const n=i.current.filter(t=>e.includes(t.id)).map(e=>{const n=JSON.parse(e.content);return{...e,content:JSON.stringify({...n,tags:(n.tags||[]).filter(e=>e!==t)})}});await p(n)},[p]),w=o.useCallback(async(t,n)=>{if(!e)return;const o=i.current.find(e=>e.id===t);o&&await p([{...o,date:n}])},[p,e]),v=o.useCallback(async t=>{e&&await p([],[t])},[p,e]),k=o.useCallback(async()=>{const e=r.current.pop();if(!e)return;a.current.push(e),s(e=>e+1);const t=e.ids.filter(t=>!e.before.some(e=>e.id===t));await p(e.before,t,!1)},[p]),j=o.useCallback(async()=>{const e=a.current.pop();if(!e)return;r.current.push(e),s(e=>e+1);const t=e.ids.filter(t=>!e.after.some(e=>e.id===t));await p(e.after,t,!1)},[p]),C=r.current.length>0,S=a.current.length>0;return{entries:t,fetchEntries:u,addEntry:x,updateEntry:g,replaceEntry:h,deleteEntry:v,updateEntryDate:w,renameTag:m,deleteTag:f,addTagToEntries:b,removeTagFromEntries:y,applyEntries:p,undoLastChange:k,redoLastChange:j,canUndo:C,canRedo:S}}var V=n(6625);const X=({children:e})=>{const t=document.getElementById("header-portal");return t?(0,l.createPortal)(e,t):null},Z={title:"",type:"record",tags:[],text:"",color:"#fff",pinned:!1,collapsed:!1},Q=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],ee=(e,t)=>{const n=t(e)?JSON.parse(e):{...Z,text:e};return n&&"object"===typeof n&&delete n.locked,{...Z,...n,tags:Array.from(new Set([...n.tags||[]]))}},te=e=>e.replace(/\b\w/g,e=>e.toUpperCase());async function ne(e,t){await(0,W.BN)((0,W.H9)(G.OO,"users",e,"settings","tagPins"),{unpinnedTags:Array.from(new Set(t))})}var oe=n(5561),ie=n(7246),re=n(5263);function ae(e,t){(0,o.useEffect)(()=>{function n(n){e.current&&n.target instanceof Node&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[e,t])}const se=({systemTags:e,customTags:t,unpinnedTags:n,onToggleTagPin:i,selectedTag:a,setSelectedTag:s,explorerExpanded:l,setExplorerExpanded:c,minimized:p,setMinimized:u,selectedNoteIds:x,onRenameTag:g,onDeleteTag:h,onAddTagToSelected:m,onRemoveTagFromSelected:f,trashCount:b,selectedTrashCount:y,onDeleteSelectedNotes:w,onRestoreSelectedTrash:v,onRestoreAllTrash:k,onEmptyTrash:j,actionsLocked:C=!1,tagPreferencesLoading:S=!1})=>{const A=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),[$,E]=o.useState(null),[T,M]=o.useState(null),[N,z]=o.useState(""),D=o.useRef(null),O=o.useRef(null),R=o.useCallback(()=>{E(null),M(null)},[]);ae(O,R),o.useEffect(()=>{C&&R()},[C,R]);const P=()=>{window.innerWidth<=768&&c(!1)},I=e=>{s(e),P()};o.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!l)return;const n=e.target;n instanceof Node&&(null===(t=D.current)||void 0===t||!t.contains(n))&&(n instanceof Element&&n.closest('[data-sidebar-toggle="notes"]')||c(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[l,c]);const L=async e=>{try{await e(),E(null),P()}catch(t){console.error("Failed to complete tag menu action.",t)}},F=e=>{const t=e.icon,n="all"!==e.name&&"other"!==e.name,o="trash"===e.name;return(0,d.jsxs)(ce,{ref:$===e.name?O:null,$active:$===e.name,children:[(0,d.jsxs)(ie.K,{expanded:l,selected:a===e.name,title:e.name,onClick:()=>I(e.name),children:[(0,d.jsx)(t,{}),l&&(0,d.jsx)("span",{children:A(e.name)})]}),l&&n&&(0,d.jsxs)(pe,{children:[(0,d.jsx)(xe,{type:"button",disabled:C,"aria-label":`Manage ${e.name} tag`,title:`Manage ${A(e.name)} tag`,onClick:t=>{t.stopPropagation(),E($===e.name?null:e.name)},children:(0,d.jsx)(r.ZZB,{})}),$===e.name&&(0,d.jsx)(ge,{children:o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(he,{type:"button",disabled:!x.length,onClick:()=>{L(w)},children:"Delete Selected"}),(0,d.jsx)(he,{type:"button",disabled:0===y,onClick:()=>{L(v)},children:"Restore Selected"}),(0,d.jsx)(he,{type:"button",disabled:0===b,onClick:()=>{L(k)},children:"Restore All"}),(0,d.jsx)(he,{type:"button",disabled:0===b,onClick:()=>{L(j)},children:"Empty Bin"})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(he,{type:"button",disabled:!x.length,onClick:()=>{L(()=>m(e.name))},children:"Add Selected"}),(0,d.jsx)(he,{type:"button",disabled:!x.length,onClick:()=>{L(()=>f(e.name))},children:"Remove Selected"})]})})]})]},e.name)},K=e=>{const t=!n.includes(e);return(0,d.jsxs)(ce,{ref:$===e?O:null,$active:$===e,children:[(0,d.jsxs)(ie.K,{expanded:l,selected:a===e,title:A(e),onClick:()=>I(e),children:[(0,d.jsx)(r.cnX,{}),T===e?(0,d.jsx)(me,{autoFocus:!0,value:N,onClick:e=>e.stopPropagation(),onChange:e=>{e.currentTarget.setCustomValidity(""),z(e.target.value)},onKeyDown:t=>{if("Enter"===t.key){const n=N.trim();if(!n)return t.currentTarget.setCustomValidity("A tag name is required."),void t.currentTarget.reportValidity();L(async()=>{await g(e,n),M(null)})}"Escape"===t.key&&R()}}):l&&(0,d.jsx)("span",{children:A(e)})]}),l&&(0,d.jsxs)(pe,{children:[(0,d.jsx)(xe,{type:"button",disabled:C,"aria-label":`Manage ${e} tag`,title:`Manage ${A(e)} tag`,onClick:t=>{t.stopPropagation(),E($===e?null:e)},children:(0,d.jsx)(r.ZZB,{})}),$===e&&(0,d.jsxs)(ge,{children:[(0,d.jsx)(he,{type:"button",disabled:C||S,onClick:()=>{L(()=>i(e))},children:t?"Unpin":"Pin"}),(0,d.jsx)(he,{type:"button",onClick:()=>{M(e),z(e)},children:"Rename"}),(0,d.jsx)(he,{type:"button",onClick:()=>{L(()=>h(e))},children:"Delete"}),(0,d.jsx)(he,{type:"button",disabled:!x.length,onClick:()=>{L(()=>m(e))},children:"Add Selected"}),(0,d.jsx)(he,{type:"button",disabled:!x.length,onClick:()=>{L(()=>f(e))},children:"Remove Selected"})]})]})]},e)},B=t.filter(e=>!n.includes(e)),U=t.filter(e=>n.includes(e));return(0,d.jsxs)(le,{ref:D,expanded:l,children:[(0,d.jsxs)(ie.K,{expanded:l,title:"Menu",onClick:()=>c(!l),children:[(0,d.jsx)(r.ND1,{}),l&&(0,d.jsx)("span",{children:"Menu"})]}),p&&(0,d.jsxs)(ue,{expanded:l,title:"Expand Notes Explorer",onClick:()=>u(!p),children:[(0,d.jsx)(re.$ZN,{}),l&&(0,d.jsx)("span",{children:"Expand Notes Explorer"})]}),e.filter(e=>"top"===e.position).map(F),B.map(K),e.filter(e=>"bottom"===e.position).map(F),U.length>0&&(0,d.jsx)(de,{role:"separator"}),U.map(K)]})},le=i.Ay.div`
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
`,de=i.Ay.div`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  background: #d0d0d0;
`,ce=i.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${({$active:e})=>e?9999:1};
`,pe=i.Ay.div`
  position: relative;
`,ue=(0,i.Ay)(ie.K)`
  && svg {
    color: #4b5563 !important;
  }
`,xe=i.Ay.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`,ge=i.Ay.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
`,he=i.Ay.button`
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
`,me=i.Ay.input`
  width: 100px;
  margin-left: 8px;
`;var fe=n(5369);const be=({colors:e,onColorClicked:t,dropdownRef:n})=>(0,d.jsx)(ye,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map(e=>(0,d.jsxs)(we,{type:"button",onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:[(0,d.jsx)(ve,{color:e}),(0,d.jsx)(ke,{children:e})]},e))}),ye=i.Ay.div`
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
`,we=i.Ay.button`
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
`,ve=i.Ay.div`
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
`,ke=i.Ay.span`
  font-size: 12px;
  font-weight: 600;

  color: #444;
`,je=({options:e,onPicked:t,dropdownRef:n})=>(0,d.jsx)(Ce,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map((e,n)=>(0,d.jsx)(Se,{type:"button",onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:(0,d.jsx)(Ae,{children:(0,d.jsx)($e,{children:e.title})})},n))}),Ce=i.Ay.div`
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
`,Se=i.Ay.button`
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
`,Ae=i.Ay.div`
  && {
    width: 100%;
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  gap: 2px;

  min-width: 0;
`,$e=i.Ay.span`
  color: #444;

  font-size: 12px;
  font-weight: 600;

  line-height: 1.3;
`,Ee=({title:e,titleRef:t,readOnly:n,collapsed:o,isFavorite:i,selected:l,onToggleSelection:c,toolboxOpen:p,setToolboxOpen:u,showColorPicker:x,showTemplatePicker:g,setShowColorPicker:h,setShowTemplatePicker:m,toolboxRef:f,colorPickerRef:b,templatePickerRef:y,colorDropdownRef:w,templateDropdownRef:v,noteColors:k,templateOptions:j,onColorSelected:C,onTemplateSelected:S,copyFormattedContent:A,onToggleFavorite:$,onToggleCollapse:E,onTitleChange:T})=>(0,d.jsxs)(Me,{children:[(0,d.jsxs)(Ne,{children:[(0,d.jsx)(Te,{title:l?"Unselect note":"Select note",onClick:c,children:l?"\u2713":""}),i?(0,d.jsx)(ie.K,{disabled:n,title:"Remove favorite",onClick:$,children:(0,d.jsx)(fe.gt3,{})}):(0,d.jsx)(ie.K,{disabled:n,title:"Add favorite",onClick:$,children:(0,d.jsx)(r.usP,{})}),(0,d.jsx)(ze,{ref:t,title:"Note name",role:"textbox",contentEditable:!n,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>T(e.currentTarget.innerText),children:e})]}),(0,d.jsxs)(De,{children:[(0,d.jsxs)(Oe,{ref:f,children:[(0,d.jsx)(Re,{type:"button",disabled:n,title:"Open note toolbox","aria-label":"Open note toolbox","aria-haspopup":"menu","aria-expanded":p,onClick:()=>u(e=>!e),children:(0,d.jsx)(r.ou6,{})}),p&&(0,d.jsxs)(Pe,{role:"menu","aria-label":"Note toolbox",children:[(0,d.jsxs)(Ie,{type:"button",role:"menuitem",title:"Change note background color",disabled:n,onClick:()=>{h(!0),m(!1),u(!1)},children:[(0,d.jsx)(s.$di,{}),(0,d.jsx)("span",{children:"Color"})]}),(0,d.jsxs)(Ie,{type:"button",role:"menuitem",title:"Apply template",disabled:n||0===j.length,onClick:()=>{h(!1),m(!0),u(!1)},children:[(0,d.jsx)(r.MRc,{}),(0,d.jsx)("span",{children:"Template"})]})]}),x&&(0,d.jsx)(Le,{ref:b,children:(0,d.jsx)(be,{colors:k,onColorClicked:C,dropdownRef:w})}),g&&(0,d.jsx)(Le,{ref:y,children:(0,d.jsx)(je,{options:j,onPicked:S,dropdownRef:v})})]}),(0,d.jsx)(ie.K,{title:"Copy note",onClick:A,children:(0,d.jsx)(r.nxz,{})}),o?(0,d.jsx)(ie.K,{title:"Expand note",onClick:E,children:(0,d.jsx)(a.BSQ,{})}):(0,d.jsx)(ie.K,{title:"Collapse note",onClick:E,children:(0,d.jsx)(a.q2p,{})})]})]}),Te=i.Ay.span`
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
`,Me=i.Ay.header`
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
`,Ne=i.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;

  color: black;
`,ze=i.Ay.span`
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
`,De=i.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`,Oe=i.Ay.div`
  && {
    width: auto;
    margin: 0;
  }

  position: relative;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`,Re=i.Ay.button`
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
`,Pe=i.Ay.div`
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
`,Ie=i.Ay.button`
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
`,Le=i.Ay.div`
  && {
    width: max-content;
    margin: 0;
  }

  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 21;
  width: max-content;
`;var Fe=n(8849),Ke=n(5709),Be=n(8420),Ue=n(6801),He=n(8452),Je=n(285),We=n(4853),Ge=n(8550),_e=n(3596),qe=n(5312),Ye=n.n(qe);const Ve=e=>{const t=e=>{for(let i=0;i<e.children.length;i+=1){const r=e.children[i];if("text"===r.type){var n,o;const t=null===(n=r.position)||void 0===n||null===(o=n.start)||void 0===o?void 0:o.offset;void 0!==t&&(e.children[i]={type:"element",tagName:"span",properties:{"data-note-source-start":t},children:[r]})}else"element"===r.type&&t(r)}};t(e)},Xe=()=>Ve,Ze=({label:e,expression:t,onExecute:n,disabled:o})=>(0,d.jsx)("button",{className:"markdownButton",disabled:o,onClick:()=>n(t),children:e}),Qe=({value:e,readOnly:t,editing:n,onEditorFocus:o,onEditorBlur:i,textareaRef:r,markdownRef:a,setValue:s,setEditing:l,onSave:c,onMarkdownClick:p,processMarkdown:u,onExecuteExpression:x})=>{if(n)return(0,d.jsx)(ot,{ref:r,readOnly:t,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:e||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`,o(t)},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,s(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)?(i(e.currentTarget),c(),l(!1)):c()}});const g=u(e||"* \u2753 What do you have for today?");return(0,d.jsx)(et,{ref:a,onClick:n=>{if(t)return;const o=n.target;if(o.closest("button"))return;const i=g===e?((e,t,n)=>{var o,i,r;const a=document,s=null===(o=a.caretPositionFromPoint)||void 0===o?void 0:o.call(a,t,n),l=(null===s||void 0===s?void 0:s.offsetNode.nodeType)===Node.TEXT_NODE,d=l?null:null===(i=a.caretRangeFromPoint)||void 0===i?void 0:i.call(a,t,n),c=l?null===s||void 0===s?void 0:s.offsetNode:null===d||void 0===d?void 0:d.startContainer,p=l?null===s||void 0===s?void 0:s.offset:null===d||void 0===d?void 0:d.startOffset;if(!c||void 0===p||c.nodeType!==Node.TEXT_NODE||!e.contains(c))return null;const u=null===(r=c.parentElement)||void 0===r?void 0:r.closest("[data-note-source-start]"),x=null===u||void 0===u?void 0:u.getAttribute("data-note-source-start");if(null===x||void 0===x)return null;const g=Number(x)+p;return Number.isFinite(g)?g:null})(n.currentTarget,n.clientX,n.clientY):null;p(o.innerText||o.textContent||"",i)},children:(0,d.jsx)(Fe.oz,{rehypePlugins:[Ke.A,Xe],components:{button(e){var n,o,i;const r=decodeURIComponent(String(null!==(n=null===(o=e.node)||void 0===o||null===(i=o.properties)||void 0===i?void 0:i.dataExpression)&&void 0!==n?n:""));return(0,d.jsx)(Ze,{label:String(e.children),expression:r,onExecute:x,disabled:t})},table:({node:e,children:t,...n})=>(0,d.jsx)(tt,{children:(0,d.jsx)("table",{...n,children:t})}),pre:({node:e,children:t,...n})=>(0,d.jsx)(tt,{children:(0,d.jsx)("pre",{...n,children:t})}),img:({node:e,...t})=>(0,d.jsx)(nt,{children:(0,d.jsx)("img",{...t,alt:t.alt||""})})},remarkPlugins:[[He.A,{padSpaceAfter:!1,emoticon:!0}],[Ge.A,{tight:!0,ordered:!0}],[Be.A,{stringLength:Ye()}],Je.A,We.A,_e.A,Ue.A],children:g})})},et=i.Ay.div`
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
    width: max-content;
    max-width: none;
    white-space: pre;
    word-break: normal;
    overflow-wrap: normal;
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
    width: max-content;
    min-width: 100%;
    max-width: none;

    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-spacing: 0;

    margin: 0;
    margin-bottom: 20px;
    margin-right: 10px;
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

    @media (max-width: 1260px) {
      white-space: pre-wrap;
      overflow-wrap: break-word;
    }
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
`,tt=i.Ay.div`
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
`,nt=i.Ay.span`
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  vertical-align: bottom;

  img {
    display: block;
    max-width: none;
  }
`,ot=i.Ay.textarea`
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
`,it=({date:e,tags:t,availableTags:n,readOnly:i,tagPickerRef:s,tagDropdownRef:c,showTagPicker:p,creatingTag:u,newTagName:x,setShowTagPicker:g,setCreatingTag:h,setNewTagName:m,onDateChange:f,hasTag:b,toggleTag:y,createTag:w,formatTag:v,formatDate:k})=>{const j=o.useRef(null);return(0,d.jsxs)(rt,{children:[(0,d.jsx)(at,{$disabled:i,"aria-disabled":i,onClick:()=>{var e,t,n;i||(null===(e=j.current)||void 0===e||null===(t=e.showPicker)||void 0===t||t.call(e),null===(n=j.current)||void 0===n||n.click())},children:k(e)}),(0,d.jsx)("input",{ref:j,type:"date",value:e,style:{display:"none"},onChange:e=>f(e.target.value)}),t.map(e=>(0,d.jsx)(st,{type:"button",disabled:i,onClick:()=>y(e),children:v(e)},e)),(0,d.jsxs)(lt,{ref:s,children:[!i&&(0,d.jsx)(dt,{type:"button",title:"Add tag","aria-label":"Add tag",onClick:()=>g(!p),children:(0,d.jsx)(a.n4h,{})}),p&&(0,l.createPortal)((0,d.jsxs)(ct,{ref:c,children:[n.map(e=>(0,d.jsxs)(pt,{className:b(e)?"selected":"",onClick:()=>{i||y(e)},children:[(0,d.jsx)(r.cnX,{}),(0,d.jsx)("span",{children:v(e)})]},e)),u?(0,d.jsx)(xt,{autoFocus:!0,placeholder:"Tag name...",value:x,onChange:e=>!i&&m(e.target.value),onKeyDown:e=>{i||"Enter"!==e.key||w(x),"Escape"===e.key&&(h(!1),m(""))},onBlur:()=>{if(i)return h(!1),void m("");x.trim()?w(x):h(!1)}}):(0,d.jsxs)(ut,{onClick:()=>!i&&h(!0),children:[(0,d.jsx)(r.cnX,{}),"New Tag"]})]}),document.body)]})]})},rt=i.Ay.div`
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
`,at=i.Ay.span`
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
`,st=i.Ay.button`
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
`,lt=i.Ay.div`
  && {
    width: fit-content;
    margin-left: 0;
  }

  position: relative;
  flex: 0 0 auto;
  width: fit-content;
  margin: 0;
`,dt=i.Ay.button`
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
`,ct=i.Ay.div`
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
`,pt=i.Ay.span`
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
`,ut=i.Ay.span`
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
`,xt=i.Ay.input`
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
`,gt=(e={})=>{const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},ht=(e,t={},n=!1,o=0)=>{const i=new Date;return(e=e.replace(/@date\b/g,()=>i.toLocaleDateString()).replace(/@time\b/g,()=>i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>i.toLocaleString()).replace(/@dayofweek\b/g,()=>i.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(i.getMonth()+1)).replace(/@monthname\b/g,()=>i.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(i.getFullYear())).replace(/@today\b/g,()=>i.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const o=Number(t),i=Number(n);return o&&i?(o/(i*i)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-i.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const o=Math.max(-1,Math.min(1,Number(n))),i=t.isMobile?5:10,r=Math.abs(o),a=`${Math.round(100*o)}%`,s=Math.round(r*i);let l=o>=0?"\u2588".repeat(s)+"\u2591".repeat(i-s):"\u2591".repeat(i-s)+"\u2588".repeat(s);const d=Math.max(0,Math.floor((i-a.length)/2));return l.slice(0,d)+a+l.slice(d+a.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&o<5?ht(e,t,n,o+1):e},mt=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,ft=(e,t)=>{const n={};e.replace(mt,(e,t,o)=>(n[t]=o.trim(),""));let o=!0;for(;o;){o=!1;for(const[e,i]of Object.entries(n)){if(!i.includes("@"))continue;const r=ht(bt(i,n),gt({...t,...n}));r!==i&&(n[e]=r,o=!0)}}return n},bt=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var o;return null!==(o=t[n])&&void 0!==o?o:""}),yt=(e,t,n)=>{const o=ft(e),i=gt({...t,...Object.fromEntries(Object.entries(o).map(([e,t])=>{if(""===t)return[e,""];const n=Number(t);return[e,Number.isNaN(n)?t:n]}))});return ht(bt((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),o),i,n)};function wt(){const[e,t]=(0,o.useState)(""),[n,i]=(0,o.useState)(""),[r,a]=(0,o.useState)({city:"",country:""});return(0,o.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async({coords:n})=>{try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${n.latitude}&longitude=${n.longitude}&current=temperature_2m,weather_code`),l=await t.json();let d="",c="";try{var o,i,r,a;const e=await fetch(`https://geocode.maps.co/reverse?lat=${n.latitude}&lon=${n.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();d=(null===(o=t.address)||void 0===o?void 0:o.city)||(null===(i=t.address)||void 0===i?void 0:i.town)||(null===(r=t.address)||void 0===r?void 0:r.village)||"",c=(null===(a=t.address)||void 0===a?void 0:a.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(l.current.temperature_2m)}\xb0C`,weather:(s=l.current.weather_code,0===s?"\u2600\ufe0f Sunny":[1,2].includes(s)?"\ud83c\udf24\ufe0f Partly Cloudy":3===s?"\u2601\ufe0f Cloudy":[45,48].includes(s)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(s)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(s)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(s)?"\u2744\ufe0f Snowing":[80,81,82].includes(s)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(s)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:d,country:c})}catch(l){t(l)}var s}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),i(e.weather),a({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:r}}const vt=({id:e,date:t,content:n,notesLocked:i,onChangeContent:r,onChangeDate:a,tags:s,selected:l,onToggleSelection:c,templateOptions:p,onEditorFocus:u,onEditorBlur:x})=>{const[g,h]=o.useState(!1),[m,f]=o.useState(!1),[b,y]=o.useState(!1),[w,v]=o.useState(!1),k=o.useRef(null),j=o.useRef(null),C=o.useRef(null),S=o.useRef(null),A=o.useRef(null),$=o.useRef(null),E=o.useRef(null),T=o.useRef(null),M=o.useRef(null),N=o.useRef(null),[z,D]=o.useState(window.innerWidth<1260),{temperature:O,weather:R,location:P}=wt(),{setCursorPosition:I,findBestCursorPosition:L}=function({editing:e,textareaRef:t}){const[n,i]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!e||!t.current||null===n)return;const o=t.current;o.focus(),o.setSelectionRange(n,n);const i=requestAnimationFrame(()=>{if(!o.isConnected)return;const e=document.createElement("div"),t=window.getComputedStyle(o);e.style.position="absolute",e.style.visibility="hidden",e.style.whiteSpace="pre-wrap",e.style.wordWrap="break-word",e.style.boxSizing=t.boxSizing,e.style.font=t.font,e.style.lineHeight=t.lineHeight,e.style.letterSpacing=t.letterSpacing,e.style.wordSpacing=t.wordSpacing,e.style.textIndent=t.textIndent,e.style.tabSize=t.tabSize,e.style.padding=t.padding,e.style.border=t.border,e.style.width=t.width,e.textContent=`${o.value.substring(0,n)}\u200b`,document.body.appendChild(e);const i=e.offsetHeight;document.body.removeChild(e);const r=o.getBoundingClientRect().top;let a=o.parentElement;for(;a;){const e=window.getComputedStyle(a).overflowY;if("auto"===e||"scroll"===e||"overlay"===e){const e=a.getBoundingClientRect().top,t=a.scrollTop+r+i-e-a.clientHeight/2;return void a.scrollTo({top:Math.max(0,t),behavior:"smooth"})}a=a.parentElement}window.scrollTo({top:Math.max(0,window.scrollY+r+i-window.innerHeight/2),behavior:"smooth"})});return()=>cancelAnimationFrame(i)},[e,n,t]),{cursorPosition:n,setCursorPosition:i,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const o=n.split(" ");for(let i=Math.min(o.length,8);i>=2;i--)for(let e=0;e<=o.length-i;e++){const n=o.slice(e,e+i).join(" "),r=t.indexOf(n);if(r>=0)return r}for(const i of o){if(i.length<4)continue;const e=t.indexOf(i);if(e>=0)return e}return t.length}}}({editing:g,textareaRef:k});!function({tagPickerRef:e,tagDropdownRef:t,colorPickerRef:n,colorDropdownRef:i,templatePickerRef:r,templateDropdownRef:a,toolboxRef:s,closeTagPicker:l,closeColorPicker:d,closeTemplatePicker:c,closeToolbox:p}){(0,o.useEffect)(()=>{const o=o=>{var u,x,g,h,m,f,b,y,w,v,k,j,C,S;const A=o.target,$=null!==(u=null===(x=e.current)||void 0===x?void 0:x.contains(A))&&void 0!==u&&u,E=null!==(g=null===(h=t.current)||void 0===h?void 0:h.contains(A))&&void 0!==g&&g;$||E||l();const T=null!==(m=null===(f=n.current)||void 0===f?void 0:f.contains(A))&&void 0!==m&&m,M=null!==(b=null===(y=i.current)||void 0===y?void 0:y.contains(A))&&void 0!==b&&b;T||M||d();const N=null!==(w=null===(v=r.current)||void 0===v?void 0:v.contains(A))&&void 0!==w&&w,z=null!==(k=null===(j=a.current)||void 0===j?void 0:j.contains(A))&&void 0!==k&&k;N||z||c(),null!==(C=null===(S=s.current)||void 0===S?void 0:S.contains(A))&&void 0!==C&&C||p()};return document.addEventListener("pointerdown",o),()=>{document.removeEventListener("pointerdown",o)}},[e,t,n,i,r,a,s,l,d,c,p])}({tagPickerRef:S,tagDropdownRef:T,colorPickerRef:A,colorDropdownRef:M,templatePickerRef:$,templateDropdownRef:N,toolboxRef:E,closeTagPicker:()=>{G(!1),_(!1)},closeColorPicker:()=>{y(!1)},closeTemplatePicker:()=>{v(!1)},closeToolbox:()=>{f(!1)}}),o.useEffect(()=>{const e=()=>{D(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const F=o.useMemo(()=>ee(n,K),[n]),U=i,{showTagPicker:H,creatingTag:J,newTagName:W,setShowTagPicker:G,setCreatingTag:_,setNewTagName:q,hasTag:Y,toggleTag:V,createTag:X}=function({tags:e,onTagsChange:t}){const[n,i]=(0,o.useState)(!1),[r,a]=(0,o.useState)(!1),[s,l]=(0,o.useState)(""),d=t=>e.includes(t),c=n=>{console.log("current tags",e);const o=Array.from(new Set(d(n)?e.filter(e=>e!==n):[...e,n]));console.log("updated tags",o),t(o)};return{showTagPicker:n,creatingTag:r,newTagName:s,setShowTagPicker:i,setCreatingTag:a,setNewTagName:l,hasTag:d,toggleTag:c,createTag:e=>{const t=e.trim().toLowerCase();t&&(c(t),l(""),a(!1))}}}({tags:F.tags,onTagsChange:t=>{U||r(e,JSON.stringify({...F,tags:t}))}}),Z=o.useCallback(e=>Y("templates")?e:((e,t={})=>{const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/quarter\b/g,()=>String(Math.floor(n.getMonth()/3)+1)).replace(/\/week\b/g,()=>{const e=new Date(n);e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const t=new Date(e.getFullYear(),0,4);return String(1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7))}).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const o=Number(t),i=Number(n);return String(Math.floor(Math.random()*(i-o+1))+o)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",o=Number(t);return Array.from({length:o},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const o=new Date(t);let i=n.getFullYear()-o.getFullYear();const r=n.getMonth()-o.getMonth();return(r<0||0===r&&n.getDate()<o.getDate())&&i--,String(i)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const o=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(o/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})})(e,{weather:R,temperature:O,city:P.city,country:P.country}),[Y,P.city,P.country,O,R]),[ne,oe]=o.useState(F.text||""),ie=o.useRef(F.text||""),re=o.useRef({text:F.text||"",title:F.title||""});o.useEffect(()=>{re.current={text:F.text||"",title:F.title||""}},[F.text,F.title]),o.useEffect(()=>{const e=F.text||"";ie.current!==e&&(ie.current=e,oe(e))},[F.text]);const ae=o.useCallback((t,n)=>{var o,i,a,s,l;const d=null!==t&&void 0!==t?t:g&&null!==(o=null===(i=k.current)||void 0===i?void 0:i.value)&&void 0!==o?o:ne,c=null!==(a=null!==(s=null!==n&&void 0!==n?n:null===(l=C.current)||void 0===l?void 0:l.innerText)&&void 0!==s?s:F.title)&&void 0!==a?a:"",p=Z(d),u=Z(c),x=re.current;x.text===p&&x.title===u||(re.current={text:p,title:u},oe(p),r(e,JSON.stringify({...F,text:p,title:u})).catch(e=>{console.error("Failed to autosave note.",e),re.current.text===p&&re.current.title===u&&(re.current=x)}))},[g,e,Z,F,r,ne]);o.useEffect(()=>{if(!g||U)return;const e=window.setTimeout(()=>ae(),500);return()=>window.clearTimeout(e)},[g,U,ae,ne]),o.useEffect(()=>{const e=()=>ae(),t=()=>{"hidden"===document.visibilityState&&ae()};return document.addEventListener("visibilitychange",t),window.addEventListener("pagehide",e),window.addEventListener("beforeunload",e),()=>{document.removeEventListener("visibilitychange",t),window.removeEventListener("pagehide",e),window.removeEventListener("beforeunload",e)}},[ae]),o.useEffect(()=>{var e;U&&(y(!1),v(!1),G(!1),_(!1),f(!1),g&&(null===(e=k.current)||void 0===e||e.blur()))},[g,U,_,G,y,v,f]);return(0,d.jsx)(kt,{selected:l,children:(0,d.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:F.color||"#eee"},children:[(0,d.jsx)(Ee,{title:F.title,titleRef:C,readOnly:i,collapsed:F.collapsed,selected:l,onToggleSelection:()=>c(e),toolboxOpen:m,setToolboxOpen:f,showColorPicker:b,showTemplatePicker:w,setShowColorPicker:y,setShowTemplatePicker:v,toolboxRef:E,colorPickerRef:A,templatePickerRef:$,colorDropdownRef:M,templateDropdownRef:N,noteColors:Q,templateOptions:p,onColorSelected:t=>{U||(r(e,JSON.stringify({...F,color:t})),y(!1),f(!1))},onTemplateSelected:t=>{if(U)return;let n=t.text.replace(/\\\$\{/g,"${");n=Z(n);const o=Array.from(new Set([...F.tags||[],...t.tags||[]]));r(e,JSON.stringify({...F,collapsed:!1,color:t.color,text:n,title:Z(t.title),tags:o})),oe(n),v(!1),f(!1)},isFavorite:Y("favorite"),copyFormattedContent:async()=>{if(!j.current)return;const e=j.current.innerHTML,t=j.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>{U||V("favorite")},onToggleCollapse:()=>{r(e,JSON.stringify({...F,collapsed:!F.collapsed}))},onTitleChange:e=>ae(void 0,e)}),!F.collapsed&&(0,d.jsx)(Qe,{value:ne,readOnly:U,editing:g,onEditorFocus:t=>u(e,t),onEditorBlur:t=>x(e,t),textareaRef:k,markdownRef:j,setValue:oe,setEditing:h,processMarkdown:e=>yt(e,{temperature:O,weather:R,city:P.city,country:P.country},z),onExecuteExpression:t=>{if(U)return;const n=((e,t,n)=>{const o=t.match(/^\$\{(\w+)\}=(.*)$/);if(!o)return e;const i=o[1];let r=o[2];const a=ft(e);r=ht(r,gt({...n,...a})),r=r.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=a[t])&&void 0!==n?n:"")});const s="${"+i+"}="+Function(`return (${r})`)(),l=new RegExp(`^\\$\\{${i}\\}\\s*=([^\\r\\n]*)`,"m");return l.test(e)?e.replace(l,s):e.trimEnd()+"\n"+s})(ne,t,{temperature:O,weather:R,city:P.city,country:P.country});oe(n),r(e,JSON.stringify({...F,text:n}))},onSave:()=>{var e,t;return ae(null!==(e=null===(t=k.current)||void 0===t?void 0:t.value)&&void 0!==e?e:ne)},onMarkdownClick:(e,t)=>{if(U)return;const n=null!==t&&void 0!==t?t:L(e,ne);I(n),h(!0)}}),(0,d.jsx)("footer",{className:"footer",children:(0,d.jsx)("span",{className:"footbox",children:(0,d.jsx)(it,{tagDropdownRef:T,date:t,tags:F.tags,availableTags:s,readOnly:U,tagPickerRef:S,showTagPicker:H,creatingTag:J,newTagName:W,setShowTagPicker:G,setCreatingTag:_,setNewTagName:q,onDateChange:t=>{U||a(e,t)},hasTag:Y,toggleTag:V,createTag:X,formatTag:te,formatDate:B})})})]})},e)},kt=i.Ay.div`
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

`,jt=({entries:e,pickerTags:t,onHoverCard:n,onChangeEntry:o,updateEntryDate:i,selectedNoteIds:r,onToggleSelection:a,templateOptions:s,notesLocked:l,onEditorFocus:c,onEditorBlur:p})=>(0,d.jsx)(Ct,{children:e.map((e,u)=>(0,d.jsx)("div",{onMouseEnter:()=>n(e.id),onMouseLeave:()=>n(null),children:(0,d.jsx)(vt,{id:e.id,date:e.date,number:u+1,content:e.content,onChangeContent:o,onChangeDate:i,tags:t,selected:r.includes(e.id),onToggleSelection:a,templateOptions:s,notesLocked:l,onEditorFocus:c,onEditorBlur:p})},e.id))}),Ct=i.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`;var St=n(9894);const At=new TextEncoder,$t=new TextDecoder;function Et(e){const t=new Uint8Array(e);let n="";for(let o=0;o<t.length;o++)n+=String.fromCharCode(t[o]);return btoa(n)}function Tt(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function Mt(e,t){const n=await crypto.subtle.importKey("raw",At.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function Nt(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),o=crypto.getRandomValues(new Uint8Array(16)),i=await Mt(t,o);return{encrypted:Et(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},i,At.encode(e))),iv:Et(n),salt:Et(o)}}(t,e);await(0,W.BN)((0,W.H9)(G.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function zt(e){const t=await(0,W.x7)((0,W.H9)(G.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,o){const i=await Mt(o,Tt(n)),r=await crypto.subtle.decrypt({name:"AES-GCM",iv:Tt(t)},i,Tt(e));return $t.decode(r)}(n.encryptedApiKey,n.iv,n.salt,e)}async function Dt(e,t,n,o,i,r){console.log(i);const a=r||await zt(e);if(!a)throw new Error("OpenAI API Key not configured.");const s=new St.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),l=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${o}\n`;return await s.responses.create({model:i||"gpt-6-luna",input:l})}const Ot=e=>{const t=(0,W.H9)(G.OO,"users",e);return(0,W.rJ)(t,"chatSessions")},Rt=async(e,t)=>{const n=Ot(e);return(await(0,W.GG)((0,W.P)(n,(0,W._M)("id","==",t)))).docs};const Pt=(0,o.createContext)(void 0),It="You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.",Lt=({uid:e,selectedNotesText:t,noteTitles:n,clearSelectedNotes:i,entries:r})=>{const[a,s]=(0,o.useState)(""),[l,d]=(0,o.useState)([]),[c,p]=(0,o.useState)([]),{sessions:u,fetchSessions:x,createSession:g,updateSession:h,deleteSession:m}=function(e){const[t,n]=o.useState([]),i=o.useCallback(async()=>{if(!e)return;const t=(await(0,W.GG)(Ot(e))).docs.map(e=>e.data());n((e=>[...e].sort((e,t)=>e.updatedAt>t.updatedAt?-1:e.updatedAt<t.updatedAt?1:0))(t))},[e]),r=o.useCallback(async t=>{if(!e)return null;const o={id:J()(),title:"New Chat",createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString(),model:t,selectedPromptIds:[],messages:[]};return n(e=>[o,...e]),await(0,W.gS)(Ot(e),o),o},[e]),a=o.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const o=await Rt(e,t.id);await Promise.all(o.map(n=>(0,W.BN)((0,W.H9)(G.OO,`users/${e}/chatSessions/${n.id}`),t)))},[e]),s=o.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const o=await Rt(e,t);await Promise.all(o.map(t=>(0,W.kd)((0,W.H9)(G.OO,`users/${e}/chatSessions/${t.id}`))))},[e]);return{sessions:t,setSessions:n,fetchSessions:i,createSession:r,updateSession:a,deleteSession:s}}(e),[f,b]=(0,o.useState)(!1),[y,w]=(0,o.useState)(null),[v,k]=(0,o.useState)(!1),[j,C]=(0,o.useState)("gpt-6-luna"),[S,A]=(0,o.useState)(!0),$=(0,o.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),E=(0,o.useCallback)(async()=>{const e=await g(j);e&&(d([]),w(e.id),p([]))},[g,j]);(0,o.useEffect)(()=>{f&&(u.length>0||E())},[f,u,E]),(0,o.useEffect)(()=>{(async()=>{await x(),b(!0)})()},[x]);const T=(0,o.useCallback)(async e=>{if(!y)return;const t=u.find(e=>e.id===y);if(!t)return;const n=l.includes(e)?l.filter(t=>t!==e):[...l,e];d(n),await h({...t,selectedPromptIds:n,updatedAt:(new Date).toISOString()})},[y,l,u,h]),M=(0,o.useMemo)(()=>r.filter(e=>l.includes(e.id)).map(e=>{try{return JSON.parse(e.content).text||""}catch{return""}}).join("\n\n"),[r,l]),N=(0,o.useCallback)(e=>{const t=u.find(t=>t.id===e);t&&(d(t.selectedPromptIds||[]),w(e),p(t.messages),C(t.model))},[u]);(0,o.useEffect)(()=>{0!==u.length&&(y||N(u[0].id))},[u,y,N]);const z=(0,o.useMemo)(()=>r.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[r]),D=(0,o.useCallback)(async()=>{const o=a.trim();if(!o||v)return;if(!e)return void p(e=>[...e,{id:J()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const r=n.length>0?`Notes:\n${n.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",l=$(c),d={id:J()(),role:"user",content:`${r}${o}`};p(e=>{const t=[...e,d],n=u.find(e=>e.id===y);return n&&h({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?o.substring(0,30):n.title}),t}),s(""),k(!0);const x=[];S&&l&&x.push(`History:\n${l}`),t.trim()&&x.push(`Context:\n${t}`);const g=x.join("\n\n");try{var m,f;const t=[It,M].filter(Boolean),n=await Dt(e,t.join("\n\n"),o,g,j),r={id:J()(),role:"assistant",content:n.output_text.trim()||"No response was returned.",tokens:{input:(null===(m=n.usage)||void 0===m?void 0:m.input_tokens)||0,output:(null===(f=n.usage)||void 0===f?void 0:f.output_tokens)||0}};p(e=>{const t=[...e,r],n=u.find(e=>e.id===y);return n&&h({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?o.substring(0,30):n.title}),t}),i()}catch(b){console.error("Mavis error:",b);const e=b instanceof Error?b.message:"An unexpected error occurred.";p(t=>[...t,{id:J()(),role:"assistant",content:e}])}finally{k(!1)}},[a,v,e,n,t,j,c,S,$,i,u,y,h,M]),O=(0,o.useCallback)(async()=>{if(v||0===c.length)return;if(!e)return void p(e=>[...e,{id:J()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const t=$(c);k(!0);try{var n,o;const i=await Dt(e,`${It}\n\n${M}`,"Summarize the entire conversation history into one comprehensive, self-contained message.\n\nInclude all important information from the conversation, especially:\n\n- Every requirement and specification\n- Every decision that was made\n- Every implementation detail\n- Every instruction and constraint\n- Important facts, dates, names, titles, values, and references\n- Code-related decisions, expected behavior, and affected files or components\n- Problems, errors, solutions, and changes that were discussed\n- Rejected alternatives and the reasons they were rejected\n- Open questions, unresolved issues, assumptions, and pending tasks\n- The current state of the work\n- Clear next steps, if any\n\nPreserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.\n\nWrite the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.",`Conversation history:\n${t}`,j),r={id:J()(),role:"assistant",content:i.output_text.trim()||"No summary was returned.",tokens:{input:(null===(n=i.usage)||void 0===n?void 0:n.input_tokens)||0,output:(null===(o=i.usage)||void 0===o?void 0:o.output_tokens)||0}};p([r]);const a=u.find(e=>e.id===y);a&&await h({...a,messages:[r],updatedAt:(new Date).toISOString()})}catch(i){console.error("Mavis summary error:",i);const e=i instanceof Error?i.message:"An unexpected error occurred.";p(t=>[...t,{id:J()(),role:"assistant",content:e}])}finally{k(!1)}},[v,c,e,$,j,y,u,h,M]),R=(0,o.useCallback)(async e=>{if(!y)return;const t=u.find(e=>e.id===y);if(!t)return;const n="all"===e?[]:t.messages.filter(t=>t.id!==e);p(n),await h({...t,messages:n,updatedAt:(new Date).toISOString()})},[y,u,h]),P=(0,o.useCallback)(async()=>{if(!y)return;const e=u.find(e=>e.id===y);e&&(p([]),await h({...e,messages:[],updatedAt:(new Date).toISOString()}))},[y,u,h]),I=(0,o.useCallback)(async e=>{if(await m(e),y===e){const t=u.filter(t=>t.id!==e);t.length>0?N(t[0].id):await E()}},[m,y,u,N,E]);return{prompt:a,setPrompt:s,selectedPromptIds:l,togglePrompt:T,availablePromptNotes:z,messages:c,isLoading:v,sessions:u,currentSessionId:y,createNewSession:E,loadSession:N,deleteSession:m,removeSession:I,sendPrompt:D,deleteMessage:R,clearMessages:P,summarizeHistory:O,selectedModel:j,setSelectedModel:C,includeHistory:S,setIncludeHistory:A}};function Ft({children:e,uid:t,selectedNotesText:n,noteTitles:o,clearSelectedNotes:i,entries:r}){const a=Lt({uid:t,selectedNotesText:n,noteTitles:o,clearSelectedNotes:i,entries:r});return(0,d.jsx)(Pt.Provider,{value:a,children:e})}function Kt(){const e=(0,o.useContext)(Pt);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}const Bt=["gpt-5-mini","gpt-6-luna","gpt-5.6-terra","gpt-5.6-sol"],Ut=({uid:e,selectedNotesText:t,noteTitles:n,notesCount:i,clearSelectedNotes:a})=>{const[l,c]=o.useState(!1),{prompt:p,setPrompt:u,messages:x,isLoading:g,sendPrompt:h,deleteMessage:m,selectedModel:f,setSelectedModel:b,selectedPromptIds:y,availablePromptNotes:w,togglePrompt:v,includeHistory:k,setIncludeHistory:j,summarizeHistory:C}=Kt(),[S,A]=o.useState(!1),[$,E]=o.useState(!1),T=o.useRef(null),M=o.useRef(null),N=o.useRef(null),z=o.useRef({}),[D,O]=o.useState(0),R=o.useCallback(e=>{const t=e.scrollHeight-e.clientHeight,n=t>0?e.scrollTop/t:0;O(Math.min(1,Math.max(0,n)))},[]),P=o.useCallback(e=>{R(e.currentTarget)},[R]);o.useLayoutEffect(()=>{const e=N.current;e&&(e.scrollTop=Math.max(0,e.scrollHeight-e.clientHeight),R(e))},[g,x,R]);const I=o.useCallback(()=>A(!1),[]),F=o.useCallback(()=>E(!1),[]);ae(T,I),ae(M,F);const K=o.useCallback(e=>{const t=N.current,n=z.current[e];if(!t||!n)return;const o=t.getBoundingClientRect().top,i=n.getBoundingClientRect().top;t.scrollTo({top:Math.max(0,t.scrollTop+i-o-12),behavior:"smooth"})},[]);return(0,d.jsxs)(Xt,{children:[(0,d.jsxs)(Zt,{children:[(0,d.jsxs)(Qt,{ref:N,role:"log","aria-label":"Chat messages",onScroll:P,children:[x.map(e=>(0,d.jsxs)(Jt,{ref:t=>{z.current[e.id]=t},role:e.role,children:[(0,d.jsx)(Gt,{role:e.role,children:e.tokens&&(0,d.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,d.jsx)(nn,{role:e.role,children:(0,d.jsx)(Fe.oz,{remarkPlugins:[Be.A],children:e.content})}),(0,d.jsxs)(Wt,{role:e.role,children:[(0,d.jsx)(ie.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,d.jsx)(r.nxz,{})}),(0,d.jsx)(ie.K,{title:"Delete message",onClick:()=>m(e.id),children:(0,d.jsx)(r.IXo,{})})]})]},e.id)),g&&(0,d.jsx)(nn,{role:"assistant",children:"Thinking..."})]}),(0,d.jsx)(Ht,{messages:x,scrollProgress:D,onScrollToMessage:K})]}),(0,d.jsx)(on,{expanded:l,children:(0,d.jsxs)(rn,{children:[(0,d.jsxs)(qt,{children:[(0,d.jsxs)(un,{ref:M,children:[(0,d.jsxs)(ln,{title:"Prompt presets",onClick:()=>{A(!1),E(e=>!e)},children:[(0,d.jsx)(L.vTI,{}),(0,d.jsxs)(dn,{children:["Prompts (",y.length,")"]})]}),$&&(0,d.jsx)(cn,{children:w.map(e=>(0,d.jsxs)(pn,{className:y.includes(e.id)?"selected":"",onClick:()=>{v(e.id)},children:[(0,d.jsx)(L.vTI,{}),(0,d.jsx)("span",{children:e.title})]},e.id))})]}),(0,d.jsxs)(sn,{ref:T,children:[(0,d.jsxs)(ln,{style:{margin:"0px !important"},title:"Selecionar modelo de IA",onClick:()=>{E(!1),A(e=>!e)},children:[(0,d.jsx)(r.Ojn,{}),(0,d.jsx)(dn,{children:f})]}),S&&(0,d.jsx)(cn,{children:Bt.map(e=>(0,d.jsxs)(pn,{className:f===e?"selected":"",onClick:()=>{b(e),A(!1)},title:e,children:[(0,d.jsx)(r.Ojn,{}),(0,d.jsx)("span",{children:e})]},e))})]}),(0,d.jsxs)(Yt,{children:["Notes: ",i]})]}),(0,d.jsxs)(_t,{children:[(0,d.jsx)(an,{expanded:l,value:p,placeholder:"Ask Mavis...",disabled:g,onChange:e=>u(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),h())}}),(0,d.jsxs)(Vt,{children:[(0,d.jsx)(ie.K,{title:"Summarize History",onClick:()=>{C()},children:(0,d.jsx)(s.Z1M,{})}),(0,d.jsx)(ie.K,{title:"Include chat history in prompts",children:(0,d.jsx)(s.bfP,{color:k?"#2563eb":"#555",onClick:()=>j(!k)})}),(0,d.jsx)(ie.K,{title:"Clear chat history",onClick:()=>{m("all")},children:(0,d.jsx)(L.U3h,{})}),(0,d.jsx)(ie.K,{title:l?"Collapse":"Expand",onClick:()=>c(e=>!e),children:l?(0,d.jsx)(r.eDi,{}):(0,d.jsx)(r.mkN,{})}),(0,d.jsx)(ie.K,{title:"Copy input",onClick:()=>{(async()=>{p.trim()&&await navigator.clipboard.writeText(p)})()},disabled:!p.trim(),children:(0,d.jsx)(r.nxz,{})}),(0,d.jsx)(ie.K,{title:"Send prompt",onClick:()=>{h()},disabled:g||!p.trim(),children:(0,d.jsx)(r.kGk,{})}),(0,d.jsx)(ie.K,{title:"Clear input",onClick:()=>{u("")},disabled:!p.trim(),children:(0,d.jsx)(r.yGN,{})}),(0,d.jsx)(ie.K,{title:"Clear selected notes",onClick:a,disabled:0===i,children:(0,d.jsx)(s.DnH,{})})]})]})]})})]})},Ht=({messages:e,scrollProgress:t,onScrollToMessage:n})=>{const i=o.useRef(null);return o.useLayoutEffect(()=>{const e=i.current;if(!e)return;const n=e.scrollHeight-e.clientHeight;e.scrollTop=Math.max(0,n*t)},[e,t]),(0,d.jsx)(en,{ref:i,role:"group","aria-label":"Chat message minimap",children:e.map((e,t)=>(0,d.jsx)(tn,{type:"button","aria-label":`Go to ${e.role} message ${t+1}`,title:`${"user"===e.role?"You":"Mavis"} message ${t+1}`,$role:e.role,style:{height:`${Math.min(Math.max(8*Math.ceil(e.content.length/80),8),60)}px`},onClick:()=>n(e.id)},e.id))})},Jt=i.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
`,Wt=i.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,Gt=i.Ay.div`
  font-size: 10px;
  color: #555;
  margin-bottom: 2px;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  white-space: nowrap;
`,_t=i.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,qt=i.Ay.span`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,Yt=i.Ay.span`
  font-size: 12px;
  color: #555;
`,Vt=i.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,Xt=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Zt=i.Ay.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,Qt=i.Ay.div`
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
`,en=i.Ay.div`
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
`,tn=i.Ay.button`
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
`,nn=i.Ay.div`
  max-width: 100%;
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
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: break-word;
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
    display: inline-table;
    width: auto;
    border-top: 1px solid #919699;
    border-left: 1px solid #919699;
    border-spacing: 0;
    margin: 0;
    margin-bottom: 20px;
    margin-right: 10px;

    @media (max-width: 1260px) {
      width: 100%;
    }
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

    @media (max-width: 1260px) {
      white-space: pre-wrap;
      overflow-wrap: break-word;
    }
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
`,on=i.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;
  margin: 0;
  background: #e0e0e5;
  ${({expanded:e})=>e&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}
`,rn=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #e0e0e5;
`,an=i.Ay.textarea`
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
`,sn=i.Ay.div`
  padding: 0px;
  position: relative;
  width: auto;
`,ln=i.Ay.div`
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
`,dn=i.Ay.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,cn=i.Ay.div`
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
`,pn=i.Ay.span`
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
`,un=i.Ay.div`
  position: relative;
`,xn=({panelWidth:e,toolbarOffset:t,minimized:n,setMinimized:o,menuExpanded:i,setMenuExpanded:a,mobileActive:s})=>(0,d.jsxs)(gn,{toolbarOffset:t,barWidth:e,minimized:n,mobileActive:s,children:[(0,d.jsx)(bn,{type:"button",title:i?"Collapse sessions menu":"Expand sessions menu","aria-label":i?"Collapse sessions menu":"Expand sessions menu","data-sidebar-toggle":"sessions",onClick:()=>a(!i),children:(0,d.jsx)(r.ND1,{})}),(0,d.jsxs)(hn,{children:[(0,d.jsx)(r.Ojn,{}),"Chat"]}),(0,d.jsx)(mn,{children:(0,d.jsx)(fn,{title:n?"Restore chat panel":"Minimize chat panel",onClick:()=>o(!n),children:n?(0,d.jsx)(r.mkN,{}):(0,d.jsx)(r.prK,{})})})]}),gn=i.Ay.div`
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

    && ${ie.K} svg {
      color: #fff !important;
    }

    && ${ie.K}:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`,hn=i.Ay.div`
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
`,mn=i.Ay.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 35px;
`,fn=(0,i.Ay)(ie.K)`
  @media (max-width: 768px) {
    display: none !important;
  }
`,bn=i.Ay.button`
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
`,yn=({minimized:e,setMinimized:t,menuExpanded:n,setMenuExpanded:i})=>{const{sessions:a,currentSessionId:s,createNewSession:l,loadSession:c,deleteSession:p,removeSession:u}=Kt(),x=o.useRef(null),g=()=>{window.innerWidth<=768&&i(!1)};return o.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!n)return;const o=e.target;o instanceof Node&&(null===(t=x.current)||void 0===t||!t.contains(o))&&(o instanceof Element&&o.closest('[data-sidebar-toggle="sessions"]')||i(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n,i]),(0,d.jsxs)(wn,{ref:x,expanded:n,children:[(0,d.jsxs)(ie.K,{expanded:n,title:"Menu",onClick:()=>i(!n),children:[(0,d.jsx)(r.ND1,{}),n&&(0,d.jsx)("span",{children:"Sessions"})]}),e&&(0,d.jsxs)(ie.K,{expanded:n,title:"Expand Chat",onClick:()=>{t(!e),g()},children:[(0,d.jsx)(r.Ojn,{}),n&&(0,d.jsx)("span",{children:"Expand Chat"})]}),(0,d.jsxs)(ie.K,{expanded:n,onClick:()=>{l(),g()},children:[(0,d.jsx)(r.GGD,{}),n&&(0,d.jsx)("span",{children:"New Chat"})]}),(0,d.jsx)(vn,{disabled:!n,children:a.map(e=>(0,d.jsxs)(jn,{children:[(0,d.jsx)(kn,{active:s===e.id,onClick:()=>{c(e.id),g()},children:e.title}),(0,d.jsx)(Cn,{onClick:t=>{t.stopPropagation(),p(e.id),g()},children:(0,d.jsx)(r.IXo,{size:12})})]},e.id))})]})},wn=i.Ay.div`
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
`,vn=i.Ay.div`
  display: ${e=>e.disabled?"none":"flex"};
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,kn=i.Ay.div`
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
`,jn=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Cn=i.Ay.button`
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
`,Sn="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const An=({explorerExpanded:e,setExplorerExpanded:t})=>{var n;const{selectedDate:i,setSelectedDate:a}=(0,oe.M)(),{user:s}=(0,V.o)(),l=null!==(n=null===s||void 0===s?void 0:s.uid)&&void 0!==n?n:"",{entries:c,fetchEntries:p,addEntry:u,updateEntry:x,updateEntryDate:g,renameTag:h,deleteTag:m,addTagToEntries:f,removeTagFromEntries:b,applyEntries:y,undoLastChange:w,redoLastChange:k,canUndo:j,canRedo:C}=Y((null===s||void 0===s?void 0:s.uid)||""),{searchContent:S,setSearchContent:A,selectedTag:$,setSelectedTag:E,systemTags:T,availableTags:M,pickerTags:N,visibleEntries:z}=function(e){const[t,n]=o.useState(""),[i,a]=o.useState("favorite"),s=o.useMemo(()=>[{name:"all",icon:r.Vap,system:!0,position:"top"},{name:"favorite",icon:r.usP,system:!0,position:"top"},{name:"journal",icon:F.Fsq,system:!0,position:"top"},{name:"templates",icon:r.MRc,system:!0,position:"top"},{name:"prompts",icon:L.vTI,system:!0,position:"top"},{name:"other",icon:I.uoj,system:!0,position:"top"},{name:"archive",icon:r.OZ2,system:!0,position:"bottom"},{name:"trash",icon:r.IXo,system:!0,position:"bottom"}],[]),l=o.useMemo(()=>s.map(e=>e.name),[s]),d=o.useMemo(()=>Array.from(new Set(e.flatMap(e=>U(e.content)))).filter(e=>!l.includes(e)).sort(),[e,l]),c=o.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...d])).sort(),[d]),p=o.useCallback(e=>{const n=U(e.content),o=n.includes("trash"),r=n.includes("archive"),a=n.includes("templates"),s=n.includes("prompts");return""!==t.trim()?e.content.toLowerCase().includes(t.toLowerCase()):"all"===i?!o&&!r:"favorite"===i?n.includes("favorite")&&!o&&!r:"journal"===i?n.includes("journal")&&!a&&!o&&!r:"templates"===i?a&&!o&&!r:"prompts"===i?s&&!o&&!r:"other"===i?!o&&!r&&!a&&!s&&!n.includes("journal"):"archive"===i?r&&!o:"trash"===i?o:n.includes(i)&&!o&&!r&&!a&&!s},[t,i]),u=o.useMemo(()=>e.filter(p),[e,p]);return{searchContent:t,setSearchContent:n,selectedTag:i,setSelectedTag:a,systemTags:s,availableTags:d,pickerTags:c,visibleEntries:u,isEntryVisible:p}}(c),D=o.useMemo(()=>(e=>{if(!e)return[];try{const t=localStorage.getItem(`mavis-ai-web:unpinned-tags:${e}`);if(null===t)return[];const n=JSON.parse(t);return Array.isArray(n)&&n.every(e=>"string"===typeof e)?Array.from(new Set(n)):(console.error("Stored tag pin preferences must be an array of strings."),[])}catch(t){return console.error("Failed to load tag pin preferences.",t),[]}})(l),[l]),[O,R]=o.useState(()=>({userId:l,tags:D,loaded:!1})),P=O.userId===l?O.tags:D,B=O.userId===l&&O.loaded;o.useEffect(()=>{let e=!0;return(async()=>{if(l)try{const t=await async function(e){const t=await(0,W.x7)((0,W.H9)(G.OO,"users",e,"settings","tagPins"));if(!t.exists())return null;const n=t.data().unpinnedTags;if(!Array.isArray(n)||!n.every(e=>"string"===typeof e))throw new Error("Stored unpinned tag preferences must be an array of strings.");return Array.from(new Set(n))}(l),n=null!==t&&void 0!==t?t:D;null===t&&n.length>0&&await ne(l,n),e&&R({userId:l,tags:n,loaded:!0})}catch(t){console.error("Failed to load tag pin preferences from Firebase.",t),e&&R({userId:l,tags:D,loaded:!0})}else R({userId:l,tags:[],loaded:!0})})(),()=>{e=!1}},[l,D]);const H=async e=>{const t=Array.from(new Set(e));if(!l)throw new Error("Cannot save tag pin preferences without an authenticated user.");await ne(l,t),R({userId:l,tags:t,loaded:!0})},[J,_]=o.useState(null),[q,Q]=o.useState([]),te=o.useRef(null),ie=o.useRef(null),[re,ae]=o.useState(0),[le,de]=o.useState(0),ce=o.useRef(null),[pe,ue]=o.useState(0),[xe,ge]=o.useState(0),[he,me]=o.useState(!1),[fe,be]=o.useState(!1),[ye,we]=o.useState(!1),[ve,ke]=o.useState("notes"),[je,Ce]=o.useState(!0),Se=o.useCallback(e=>{const{clientWidth:t,scrollLeft:n}=e.currentTarget;if(0===t)return;const o=n>=t/2?"chat":"notes";ke(e=>e===o?e:o)},[]),Ae=o.useMemo(()=>c.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[c]),$e=o.useMemo(()=>c.filter(e=>U(e.content).includes("trash")).map(e=>e.id),[c]),Ee=o.useMemo(()=>q.filter(e=>$e.includes(e)),[q,$e]);o.useLayoutEffect(()=>{const e=()=>{var e;const t=ce.current,n=document.getElementById("header-portal");ue(null!==(e=null===t||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0),ge(t&&n?t.getBoundingClientRect().left-n.getBoundingClientRect().left:0)};e();const t=new ResizeObserver(e);return ce.current&&t.observe(ce.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[e,he,fe,ye]),o.useLayoutEffect(()=>{const e=()=>{var e;const t=ie.current,n=document.getElementById("header-portal");ae(null!==(e=null===t||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0),de(t&&n?t.getBoundingClientRect().left-n.getBoundingClientRect().left:0)};e();const t=new ResizeObserver(e);return ie.current&&t.observe(ie.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[e,he,fe,ye]);const Te=o.useCallback(e=>{Q(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),Me=o.useCallback(()=>{Q(z.map(e=>e.id))},[z]),Ne=o.useCallback(()=>{Q([])},[]);o.useEffect(()=>{Q(e=>e.filter(e=>c.some(t=>t.id===e)))},[c]);const ze=o.useMemo(()=>c.filter(e=>q.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[c,q]),De=o.useMemo(()=>c.filter(e=>q.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[c,q]),Oe=o.useCallback((e,t)=>{te.current={id:e,textarea:t}},[]),Re=o.useCallback((e,t)=>{const n=te.current;(null===n||void 0===n?void 0:n.id)===e&&n.textarea===t&&(te.current=null)},[]),Pe=o.useCallback(()=>{const e=te.current;if(null!==e&&void 0!==e&&e.textarea.isConnected)return{entryId:e.id,value:e.textarea.value,textarea:e.textarea};const t=c.find(e=>e.id===q[0]);if(!t)return null;const n=ee(t.content,K);return{entryId:t.id,value:n.text||"",textarea:null}},[c,q]),Ie=o.useCallback(async(e,t)=>{if(je)throw new Error("Unlock note editing before using the AI assistant.");const n=c.find(t=>t.id===e);if(!n)throw new Error("The note selected for AI editing could not be found.");const o=K(n.content)?JSON.parse(n.content):{...Z,text:n.content},i=o&&"object"===typeof o?o:{...Z,text:n.content};await x(e,JSON.stringify({...i,text:t}))},[c,je,x]),Le=function({userId:e,getNoteContext:t,onContentChange:n}){const[i,r]=(0,o.useState)(!1),[a,s]=(0,o.useState)(!1),[l,d]=(0,o.useState)(""),[c,p]=(0,o.useState)(""),[u,x]=(0,o.useState)(!1),[g,h]=(0,o.useState)(""),m=(0,o.useRef)({entryId:null,value:"",selectionStart:null,selectionEnd:null}),f=()=>{s(!1),d(""),p(""),h("")};return{aiLoading:i,assistantOpen:a,instruction:l,setInstruction:d,apiKeyInput:c,setApiKeyInput:p,requiresApiKey:u,error:g,openAssistant:async()=>{var n,o,i,r,a;const l=t(),c=null===l||void 0===l?void 0:l.textarea,u=null!==(n=null!==(o=null===c||void 0===c?void 0:c.value)&&void 0!==o?o:null===l||void 0===l?void 0:l.value)&&void 0!==n?n:"",g=null!==(i=null===c||void 0===c?void 0:c.selectionStart)&&void 0!==i?i:null,f=null!==(r=null===c||void 0===c?void 0:c.selectionEnd)&&void 0!==r?r:null;if(m.current={entryId:null!==(a=null===l||void 0===l?void 0:l.entryId)&&void 0!==a?a:null,value:u,selectionStart:g,selectionEnd:f},s(!0),d(""),p(""),h(""),!l)return x(!1),void h("Select a note or start editing a note to use the AI assistant.");if(!e)return x(!1),void h("Sign in to use the AI assistant.");try{const t=await zt(e);x(!t)}catch(b){console.error("Failed to load the OpenAI API key.",b),x(!0),h("Could not load the saved API key. Enter it again to continue.")}},closeAssistant:f,clearInstruction:()=>{d(""),h("")},submitInstruction:async()=>{if(i)return;const t=l.trim();if(!t)return void h("Enter an instruction for the note.");if(!e)return void h("Sign in to use the AI assistant.");const{entryId:o,value:a,selectionStart:s,selectionEnd:d}=m.current;if(o){r(!0),h("");try{let i;if(u){if(i=c.trim(),!i)return void h("Enter your OpenAI API key.");await Nt(e,i),x(!1),p("")}else i=await zt(e);if(null!==s&&null!==d&&s!==d){const r=a.substring(s,d),l=await Dt(e,Sn,t,r,"gpt-6-luna",i),c=a.substring(0,s)+l.output_text.trim()+a.substring(d);await n(o,c)}else{const r=await Dt(e,Sn,t,a,"gpt-6-luna",i);await n(o,`${a}\n\n${r.output_text.trim()}`)}f()}catch(g){console.error("AI note request failed.",g),h(g instanceof Error?g.message:"AI request failed.")}finally{r(!1)}}else h("Select a note or start editing a note to use the AI assistant.")}}}({userId:null===s||void 0===s?void 0:s.uid,getNoteContext:Pe,onContentChange:Ie});o.useEffect(()=>{p()},[p]);const Fe=()=>{window.scrollTo({top:0,behavior:"smooth"})},Ke=async()=>{if(je||!q.length)return;const e=new Set(Ee),t=q.filter(t=>!e.has(t));if(Ee.length){const e=`${Ee.length} selected ${1===Ee.length?"note":"notes"}`,n=`${t.length} selected ${1===t.length?"note":"notes"}`,o=t.length?`Move ${n} to Trash and permanently delete ${e} from Trash?`:`Permanently delete ${e} from Trash?`;if(!window.confirm(o))return}const n=c.filter(e=>t.includes(e.id)).map(e=>{const t=ee(e.content,K),n=Array.from(new Set([...t.tags.filter(e=>"archive"!==e),"trash"]));return{...e,content:JSON.stringify({...t,tags:n})}});await y(n,Ee)},Be=(o.useMemo(()=>c.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[c]),x);return(0,d.jsx)($n,{children:(0,d.jsxs)(Ft,{uid:s?s.uid:"",selectedNotesText:ze,noteTitles:De,clearSelectedNotes:Ne,entries:c,children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(v,{selectedTag:$,selectedDate:i,searchContent:S,onSearchChange:A,onDateChange:e=>{a(e.target.value)},onAddNote:async function(){const e="all"!==$?[$]:[];await u({date:i,content:JSON.stringify({...Z,tags:e})}),Fe()},onCopyAllNotes:async()=>{const e=ze.length>0?ze:z.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:Me,onClearAll:Ne,onArchiveSelected:async()=>{try{await(async()=>{if(je||!q.length)return;const e=c.filter(e=>q.includes(e.id)).map(e=>{const t=ee(e.content,K);return{...e,content:JSON.stringify({...t,tags:(n=t.tags,n.includes("archive")?n.filter(e=>"archive"!==e):[...n.filter(e=>"trash"!==e),"archive"])})};var n});await y(e)})()}catch(e){console.error("Failed to archive selected notes.",e)}},onDeleteSelected:async()=>{try{await Ke()}catch(e){console.error("Failed to delete selected notes.",e)}},onUndo:async()=>{try{await w()}catch(e){console.error("Failed to undo the last note change.",e)}},onRedo:async()=>{try{await k()}catch(e){console.error("Failed to redo the last note change.",e)}},canUndo:j,canRedo:C,noteAssistant:Le,selectedCount:q.length,explorerExpanded:e,setExplorerExpanded:t,panelWidth:re,toolbarOffset:le,minimized:he,setMinimized:me,mobileActive:"notes"===ve,notesLocked:je,onToggleNotesLock:()=>{if(!je){const e=document.activeElement;e instanceof HTMLElement&&(e.isContentEditable||e instanceof HTMLTextAreaElement)&&e.blur()}Ce(e=>!e)}}),(0,d.jsx)(xn,{onClearAll:Ne,panelWidth:pe,toolbarOffset:xe,minimized:fe,setMinimized:be,menuExpanded:ye,setMenuExpanded:we,mobileActive:"chat"===ve})]}),(0,d.jsxs)(En,{onScroll:Se,children:[(0,d.jsxs)(Tn,{role:"region","aria-label":"Notes",children:[(0,d.jsx)(se,{systemTags:T,customTags:M,unpinnedTags:P,onToggleTagPin:async e=>{!je&&B&&await H(P.includes(e)?P.filter(t=>t!==e):[...P,e])},selectedTag:$,setSelectedTag:E,explorerExpanded:e,setExplorerExpanded:t,minimized:he,setMinimized:me,selectedNoteIds:q,onRenameTag:async(e,t)=>{if(!je){if(await h(e,t),P.includes(e)){const n=P.filter(t=>t!==e);n.includes(t)||n.push(t),await H(n)}$===e&&E(t)}},onDeleteTag:async e=>{je||(await m(e),P.includes(e)&&await H(P.filter(t=>t!==e)),$===e&&E("all"))},onAddTagToSelected:async e=>{je||await f(q,e)},onRemoveTagFromSelected:async e=>{je||await b(q,e)},trashCount:$e.length,selectedTrashCount:Ee.length,onDeleteSelectedNotes:Ke,onRestoreSelectedTrash:async()=>{je||await b(Ee,"trash")},onRestoreAllTrash:async()=>{je||await b($e,"trash")},onEmptyTrash:async()=>{if(je||!$e.length)return;window.confirm(`Permanently delete all ${$e.length} note${1===$e.length?"":"s"} from Trash? You can undo this while the notes view is open.`)&&await y([],$e)},actionsLocked:je,tagPreferencesLoading:!B}),(0,d.jsx)(zn,{ref:ie,minimized:he,otherMinimized:fe,children:!he&&(0,d.jsx)(jt,{entries:z,pickerTags:N,updateEntryDate:async(e,t)=>{je||await g(e,t)},onHoverCard:_,onChangeEntry:Be,selectedNoteIds:q,onToggleSelection:Te,templateOptions:Ae,notesLocked:je,onEditorFocus:Oe,onEditorBlur:Re})})]}),(0,d.jsxs)(Mn,{role:"region","aria-label":"AI sessions",children:[(0,d.jsx)(Nn,{ref:ce,minimized:fe,otherMinimized:he,children:(0,d.jsx)(Ut,{uid:(null===s||void 0===s?void 0:s.uid)||"",selectedNotesText:ze,noteTitles:De,notesCount:q.length,clearSelectedNotes:Ne})}),(0,d.jsx)(yn,{minimized:fe,setMinimized:be,menuExpanded:ye,setMenuExpanded:we})]})]})]})})},$n=i.Ay.div`
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
`,En=i.Ay.div`
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
`,Tn=i.Ay.div`
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
`,Mn=i.Ay.div`
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
`,Nn=i.Ay.div`
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
`,zn=i.Ay.div`
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
//# sourceMappingURL=dashboard.5bd392f9.chunk.js.map