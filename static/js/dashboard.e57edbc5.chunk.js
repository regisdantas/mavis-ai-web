"use strict";(Array.isArray(globalThis.webpackChunkmavis_ai_web)?globalThis.webpackChunkmavis_ai_web:globalThis.webpackChunkmavis_ai_web=[]).push([[945],{1304(e,t,n){n.r(t),n.d(t,{default:()=>Fn});var o=n(5043),r=n(2816),i=n(1009),a=n(4960),s=n(7149),l=n(7950),d=n(579);const c=({instruction:e,setInstruction:t,apiKeyInput:n,setApiKeyInput:o,requiresApiKey:r,error:a,loading:s,onClear:c,onSend:v,onClose:k,dropdownRef:C})=>(0,l.createPortal)((0,d.jsxs)(p,{ref:C,role:"dialog","aria-label":"AI assistant",onMouseDown:e=>e.stopPropagation(),children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(x,{children:"AI assistant"}),(0,d.jsx)(h,{type:"button","data-keepeditor":"true","aria-label":"Close AI assistant",onClick:k,children:(0,d.jsx)(i.yGN,{})})]}),r&&(0,d.jsx)(g,{type:"password","data-keepeditor":"true",autoComplete:"off",placeholder:"OpenAI API key","aria-label":"OpenAI API key",value:n,onChange:e=>o(e.target.value)}),(0,d.jsx)(m,{"data-keepeditor":"true",autoFocus:!0,rows:5,placeholder:"What should I change? For example: fix grammar, summarize, or rewrite professionally.","aria-label":"AI instruction",value:e,onChange:e=>t(e.target.value),onKeyDown:e=>{if("Escape"===e.key)return void k();const t="function"===typeof window.matchMedia?window.matchMedia("(max-width: 768px)").matches:window.innerWidth<=768;"Enter"!==e.key||t||e.ctrlKey||(e.preventDefault(),v())}}),a&&(0,d.jsx)(f,{role:"alert",children:a}),(0,d.jsxs)(b,{children:[(0,d.jsx)(y,{type:"button","data-keepeditor":"true",onClick:c,disabled:s,children:"Clear"}),(0,d.jsxs)(w,{type:"button","data-keepeditor":"true",onClick:v,disabled:s||!e.trim(),children:[(0,d.jsx)(i.kGk,{}),s?"Sending...":"Send"]})]})]}),document.body),p=r.Ay.div`
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
`,h=r.Ay.button`
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
`,g=r.Ay.input`
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
`,y=r.Ay.button`
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
`,w=r.Ay.button`
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
`,v=({selectedTag:e,selectedDate:t,searchContent:n,fuzzySearchEnabled:r,onSearchChange:l,onToggleFuzzySearch:p,onDateChange:u,onAddNote:x,onCopyAllNotes:h,onSelectAll:g,onClearAll:m,onArchiveSelected:f,onDeleteSelected:b,onUndo:y,onRedo:w,canUndo:v,canRedo:M,noteAssistant:L,selectedCount:F,explorerExpanded:K,setExplorerExpanded:B,panelWidth:U,toolbarOffset:H,minimized:J,setMinimized:q,mobileActive:W,notesLocked:G,onToggleNotesLock:_})=>{const[Y,V]=o.useState(!1),X=o.useRef(null),Z=o.useRef(null),Q=o.useRef(null),ee=o.useRef(null);o.useEffect(()=>{if(!Y)return;const e=e=>{var t;const n=e.target;n instanceof Node&&null!==(t=X.current)&&void 0!==t&&t.contains(n)||V(!1)};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[Y]),o.useEffect(()=>{var e;Y&&(null===(e=Z.current)||void 0===e||e.focus())},[Y]),o.useEffect(()=>{W||V(!1)},[W]),o.useEffect(()=>{if(!L.assistantOpen)return;const e=e=>{var t,n;const o=e.target;o instanceof Node&&(null!==(t=Q.current)&&void 0!==t&&t.contains(o)||null!==(n=ee.current)&&void 0!==n&&n.contains(o))||L.closeAssistant()};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[L]);const te=F>0?m:g,ne=""===n.trim()?e.charAt(0).toUpperCase()+e.slice(1):"Search";return(0,d.jsxs)(k,{role:"toolbar","aria-label":`${ne} notes tools`,title:`${ne} notes`,toolbarOffset:H,barWidth:U,minimized:J,mobileActive:W,children:[(0,d.jsxs)($,{$searchExpanded:Y,children:[!J&&(0,d.jsx)(P,{type:"button",title:"Minimize notes panel","aria-label":"Minimize notes panel",onClick:()=>q(!0),children:(0,d.jsx)(i.prK,{})}),!J&&(0,d.jsx)(E,{children:ne})]}),(0,d.jsx)(T,{children:(0,d.jsxs)(z,{$minimized:J,"data-search-expanded":Y,children:[(0,d.jsx)(I,{type:"button",title:K?"Collapse notes menu":"Expand notes menu","aria-label":K?"Collapse notes menu":"Expand notes menu","data-sidebar-toggle":"notes",onClick:()=>B(!K),children:(0,d.jsx)(i.ND1,{})}),(0,d.jsxs)(C,{ref:X,$searchExpanded:Y,children:[(0,d.jsx)(j,{$searchExpanded:Y,type:"button","aria-label":"Open search","aria-expanded":Y,tabIndex:Y?-1:0,onClick:()=>V(!0),children:(0,d.jsx)(i.CKj,{})}),(0,d.jsx)("input",{ref:Z,"aria-hidden":!Y,tabIndex:Y?0:-1,placeholder:"Search",value:n,onChange:e=>l(e.target.value),onKeyDown:e=>{"Enter"!==e.key&&"Escape"!==e.key||(e.preventDefault(),e.currentTarget.blur(),V(!1))}}),(0,d.jsx)(A,{$searchExpanded:Y,$active:r,type:"button","aria-label":r?"Disable fuzzy search":"Enable fuzzy search","aria-pressed":r,title:r?"Disable fuzzy search":"Enable fuzzy search",tabIndex:Y?0:-1,onClick:p,children:(0,d.jsx)(i.FrA,{})}),(0,d.jsx)(S,{$searchExpanded:Y,type:"button","aria-label":"Clear search",title:"Clear search",tabIndex:Y?0:-1,disabled:!n,onClick:()=>l(""),children:(0,d.jsx)(s.rOP,{})})]}),(0,d.jsx)(O,{type:"button",$active:G,title:G?"Unlock note editing":"Lock note editing","aria-label":G?"Unlock note editing":"Lock note editing","aria-pressed":G,onClick:_,children:G?(0,d.jsx)(i.F5$,{}):(0,d.jsx)(i.K4k,{})}),(0,d.jsx)(N,{type:"button",$selected:F>0,$tone:"select",title:F>0?"Deselect all notes":"Select all visible notes","aria-label":F>0?"Deselect all notes":"Select all visible notes","aria-pressed":F>0,onClick:te,children:F>0?(0,d.jsx)(i.TG1,{}):(0,d.jsx)(i.NLe,{})}),(0,d.jsx)(N,{type:"button",$tone:"copy",title:"Copy selected or visible notes","aria-label":"Copy selected or visible notes",onClick:h,children:(0,d.jsx)(i.nxz,{})}),"journal"===e&&(0,d.jsx)(R,{children:(0,d.jsx)("input",{title:"Select date","aria-label":"Select date",type:"date",value:t,onChange:u})}),(0,d.jsx)(N,{type:"button",$tone:"add",title:"Add note","aria-label":"Add note",onClick:x,children:(0,d.jsx)(a.n4h,{})}),(0,d.jsx)(N,{ref:Q,type:"button",$tone:"ai",title:"AI assistant","aria-label":"AI assistant","aria-expanded":L.assistantOpen,disabled:G,onMouseDown:e=>e.preventDefault(),onClick:()=>{L.assistantOpen?L.closeAssistant():L.openAssistant()},children:(0,d.jsx)(i.Ojn,{})}),(0,d.jsx)(N,{type:"button",$tone:"redo",title:"Redo last note change","aria-label":"Redo last note change",disabled:G||!M,onClick:w,children:(0,d.jsx)(i.VI6,{})}),(0,d.jsx)(N,{type:"button",$tone:"undo",title:"Undo last note change","aria-label":"Undo last note change",disabled:G||!v,onClick:y,children:(0,d.jsx)(i.cO3,{})}),(0,d.jsx)(D,{"aria-hidden":"true"}),(0,d.jsx)(N,{type:"button",$tone:"archive",title:"Archive selected notes","aria-label":"Archive selected notes",disabled:G||0===F,onClick:f,children:(0,d.jsx)(i.OZ2,{})}),(0,d.jsx)(N,{type:"button",$tone:"trash",$rightSpace:!0,title:"Delete selected notes","aria-label":"Delete selected notes",disabled:G||0===F,onClick:b,children:(0,d.jsx)(i.IXo,{})})]})}),L.assistantOpen&&(0,d.jsx)(c,{instruction:L.instruction,setInstruction:L.setInstruction,apiKeyInput:L.apiKeyInput,setApiKeyInput:L.setApiKeyInput,requiresApiKey:L.requiresApiKey,error:L.error,loading:L.aiLoading,onClear:L.clearInstruction,onSend:()=>{L.submitInstruction()},onClose:L.closeAssistant,dropdownRef:ee})]})},k=r.Ay.div`
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
`,C=r.Ay.div`
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
`,j=r.Ay.button`
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
`,A=r.Ay.button`
  order: 2;
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
  background: ${({$active:e})=>e?"rgba(251, 191, 36, 0.18)":"transparent"};
  color: ${({$active:e})=>e?"#fbbf24":"#2563eb"};
  opacity: ${({$searchExpanded:e})=>e?1:0};
  pointer-events: ${({$searchExpanded:e})=>e?"auto":"none"};
  transition: flex-basis 220ms ease, opacity 160ms ease, margin 220ms ease;

  @media (max-width: 768px) {
    color: ${({$active:e})=>e?"#d97706":"#60a5fa"};
  }
`,$=r.Ay.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  height: 30px;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: ${({$searchExpanded:e})=>e?"none":"flex"};
  }
`,E=r.Ay.div`
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
`,T=r.Ay.div`
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
`,z=r.Ay.div`
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
`,D=r.Ay.span`
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
`,O=r.Ay.button`
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
`,R=r.Ay.div`
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
`,P=r.Ay.button`
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
`,I=r.Ay.button`
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
`;var L=n(2815),F=n(4966),K=n(2127);const B=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},U=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},H=e=>{if(!B(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))},J=/[\p{L}\p{N}]+/gu,q=e=>Array.from(e.matchAll(J),e=>{var t;return{value:e[0],index:null!==(t=e.index)&&void 0!==t?t:0}}),W=e=>{if(!B(e))return e;const t=JSON.parse(e);if("object"!==typeof(n=t)||null===n||Array.isArray(n))return e;var n;return["string"===typeof t.title?t.title:"","string"===typeof t.text?t.text:"",Array.isArray(t.tags)?t.tags.filter(e=>"string"===typeof e).join(" "):""].filter(Boolean).join("\n")},G=(e,t)=>{if(t.includes(e))return!0;if(e.length<3)return!1;if(((e,t)=>{let n=0;for(const o of t)if(o===e[n]&&(n+=1,n===e.length))return!0;return 0===e.length})(e,t))return!0;return((e,t,n)=>{if(Math.abs(e.length-t.length)>n)return!1;let o=Array.from({length:t.length+1},(e,t)=>t);for(let r=1;r<=e.length;r+=1){const n=[r];for(let i=1;i<=t.length;i+=1){const a=e[r-1]===t[i-1]?0:1;n[i]=Math.min(n[i-1]+1,o[i]+1,o[i-1]+a)}o=n}return o[t.length]<=n})(e,t,e.length>=8?2:1)},_=(e,t,n=!1)=>{const o=t.trim();if(!o)return[];const r=((e,t)=>{const n=e.toLowerCase(),o=t.toLowerCase(),r=[];let i=0;for(;i<n.length;){const e=n.indexOf(o,i);if(e<0)break;r.push({start:e,end:e+o.length}),i=e+o.length}return r})(e,o);if(r.length>0||!n)return r;const i=q(o).map(e=>e.value.toLowerCase()),a=q(e),s=[];return i.forEach(e=>{a.forEach(t=>{const n=t.value.toLowerCase();if(!G(e,n))return;const o=n.indexOf(e);o>=0?s.push({start:t.index+o,end:t.index+o+e.length}):s.push({start:t.index,end:t.index+t.value.length})})}),(e=>[...e].sort((e,t)=>e.start-t.start||e.end-t.end).reduce((e,t)=>{const n=e[e.length-1];return n&&t.start<=n.end?n.end=Math.max(n.end,t.end):e.push({...t}),e},[]))(s)};function Y(e){const[t,n]=o.useState(""),[r,a]=o.useState(!1),[s,l]=o.useState("favorite"),d=o.useMemo(()=>[{name:"all",icon:i.Vap,system:!0,position:"top"},{name:"favorite",icon:i.usP,system:!0,position:"top"},{name:"journal",icon:K.Fsq,system:!0,position:"top"},{name:"templates",icon:i.MRc,system:!0,position:"top"},{name:"prompts",icon:F.vTI,system:!0,position:"top"},{name:"other",icon:L.uoj,system:!0,position:"top"},{name:"archive",icon:i.OZ2,system:!0,position:"bottom"},{name:"trash",icon:i.IXo,system:!0,position:"bottom"}],[]),c=o.useMemo(()=>d.map(e=>e.name),[d]),p=o.useMemo(()=>Array.from(new Set(e.flatMap(e=>H(e.content)))).filter(e=>!c.includes(e)).sort(),[e,c]),u=o.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...p])).sort(),[p]),x=o.useCallback(e=>{const n=H(e.content),o=n.includes("trash"),i=n.includes("archive"),a=n.includes("templates"),l=n.includes("prompts");return""!==t.trim()?((e,t,n=!1)=>{const o=t.trim().toLowerCase();if(!o)return!0;if(e.toLowerCase().includes(o))return!0;if(!n)return!1;const r=q(o).map(e=>e.value),i=q(e).map(e=>e.value.toLowerCase());return r.length>0&&r.every(e=>i.some(t=>G(e,t)))})(W(e.content),t,r):"all"===s?!o&&!i:"favorite"===s?n.includes("favorite")&&!o&&!i:"journal"===s?n.includes("journal")&&!a&&!o&&!i:"templates"===s?a&&!o&&!i:"prompts"===s?l&&!o&&!i:"other"===s?!o&&!i&&!a&&!l&&!n.includes("journal"):"archive"===s?i&&!o:"trash"===s?o:n.includes(s)&&!o&&!i&&!a&&!l},[r,t,s]),h=o.useMemo(()=>e.filter(x),[e,x]);return{searchContent:t,setSearchContent:n,fuzzySearchEnabled:r,setFuzzySearchEnabled:a,selectedTag:s,setSelectedTag:l,systemTags:d,availableTags:p,pickerTags:u,visibleEntries:h,isEntryVisible:x}}var V=n(8222),X=n.n(V),Z=n(8046),Q=n(1286);const ee=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),te=e=>{const t=(0,Z.H9)(Q.OO,"users",e);return(0,Z.rJ)(t,"entries")};function ne(e){const[t,n]=o.useState([]),r=o.useRef(t),i=o.useRef([]),a=o.useRef([]),[,s]=o.useState(0),l=o.useRef(Promise.resolve()),d=o.useRef(e);o.useEffect(()=>{d.current!==e&&(d.current=e,r.current=[],n([]),i.current=[],a.current=[],s(e=>e+1))},[e]);const c=o.useCallback((t,n)=>{if(!e)return Promise.resolve();const o=l.current.then(async()=>{const o=new Map(n.map(e=>[e.id,e]));await Promise.all(t.map(async t=>{const n=o.get(t),r=await(async(e,t)=>{const n=te(e);return(await(0,Z.GG)((0,Z.P)(n,(0,Z._M)("id","==",t)))).docs})(e,t);n?r.length?await Promise.all(r.map(t=>(0,Z.BN)((0,Z.H9)(Q.OO,`users/${e}/entries/${t.id}`),n))):await(0,Z.gS)(te(e),n):await Promise.all(r.map(t=>(0,Z.kd)((0,Z.H9)(Q.OO,`users/${e}/entries/${t.id}`))))}))});return l.current=o.catch(()=>{}),o},[e]),p=o.useCallback(async(t,o=[],l=!0)=>{if(!e)return;const d=Array.from(new Set([...t.map(e=>e.id),...o]));if(!d.length)return;const p=new Set(d),u=r.current.filter(e=>p.has(e.id)),x=new Map(t.filter(e=>p.has(e.id)).map(e=>[e.id,e])),h=Array.from(x.values());if(u.length===h.length&&u.every(e=>{const t=x.get(e.id);return void 0!==t&&e.uid===t.uid&&e.content===t.content&&e.date===t.date&&e.createdAt===t.createdAt}))return;const g=ee([...r.current.filter(e=>!p.has(e.id)),...h]);r.current=g,n(g),l&&(i.current.push({ids:d,before:u,after:h}),a.current=[],s(e=>e+1)),await c(d,h)},[c,e]),u=o.useCallback(async()=>{if(!e)return;const t=te(e),o=(await(0,Z.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}}),i=ee(o);r.current=i,n(i)},[e]),x=o.useCallback(async({content:t,date:n})=>{if(!e)return null;const o={uid:e,id:X()(),content:t,date:n,createdAt:(new Date).toISOString()};return await p([o]),o},[p,e]),h=o.useCallback(async(t,n)=>{if(!e)return;const o=r.current.find(e=>e.id===t);o&&await p([{...o,content:n}])},[p,e]),g=o.useCallback(async t=>{e&&r.current.some(e=>e.id===t.id)&&await p([t])},[p,e]),m=o.useCallback(async(e,t)=>{const n=r.current.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}}).map(n=>{const o=JSON.parse(n.content);return{...n,content:JSON.stringify({...o,tags:(o.tags||[]).map(n=>n===e?t:n)})}});await p(n)},[p]),f=o.useCallback(async e=>{const t=r.current.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}}).map(t=>{const n=JSON.parse(t.content);return{...t,content:JSON.stringify({...n,tags:(n.tags||[]).filter(t=>t!==e)})}});await p(t)},[p]),b=o.useCallback(async(e,t)=>{const n=r.current.filter(t=>e.includes(t.id)).map(e=>{const n=JSON.parse(e.content);return{...e,content:JSON.stringify({...n,tags:Array.from(new Set([...n.tags||[],t]))})}});await p(n)},[p]),y=o.useCallback(async(e,t)=>{const n=r.current.filter(t=>e.includes(t.id)).map(e=>{const n=JSON.parse(e.content);return{...e,content:JSON.stringify({...n,tags:(n.tags||[]).filter(e=>e!==t)})}});await p(n)},[p]),w=o.useCallback(async(t,n)=>{if(!e)return;const o=r.current.find(e=>e.id===t);o&&await p([{...o,date:n}])},[p,e]),v=o.useCallback(async t=>{e&&await p([],[t])},[p,e]),k=o.useCallback(async()=>{const e=i.current.pop();if(!e)return;a.current.push(e),s(e=>e+1);const t=e.ids.filter(t=>!e.before.some(e=>e.id===t));await p(e.before,t,!1)},[p]),C=o.useCallback(async()=>{const e=a.current.pop();if(!e)return;i.current.push(e),s(e=>e+1);const t=e.ids.filter(t=>!e.after.some(e=>e.id===t));await p(e.after,t,!1)},[p]),j=i.current.length>0,S=a.current.length>0;return{entries:t,fetchEntries:u,addEntry:x,updateEntry:h,replaceEntry:g,deleteEntry:v,updateEntryDate:w,renameTag:m,deleteTag:f,addTagToEntries:b,removeTagFromEntries:y,applyEntries:p,undoLastChange:k,redoLastChange:C,canUndo:j,canRedo:S}}var oe=n(6625);const re=({children:e})=>{const t=document.getElementById("header-portal");return t?(0,l.createPortal)(e,t):null},ie={title:"",type:"record",tags:[],text:"",color:"#fff",pinned:!1,collapsed:!1},ae=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],se=(e,t)=>{const n=t(e)?JSON.parse(e):{...ie,text:e};return n&&"object"===typeof n&&delete n.locked,{...ie,...n,tags:Array.from(new Set([...n.tags||[]]))}},le=e=>e.replace(/\b\w/g,e=>e.toUpperCase());async function de(e,t){await(0,Z.BN)((0,Z.H9)(Q.OO,"users",e,"settings","tagPins"),{unpinnedTags:Array.from(new Set(t))})}var ce=n(5561),pe=n(7246),ue=n(5263);function xe(e,t){(0,o.useEffect)(()=>{function n(n){e.current&&n.target instanceof Node&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[e,t])}const he=({systemTags:e,customTags:t,unpinnedTags:n,onToggleTagPin:r,selectedTag:a,setSelectedTag:s,explorerExpanded:l,setExplorerExpanded:c,minimized:p,setMinimized:u,selectedNoteIds:x,onRenameTag:h,onDeleteTag:g,onAddTagToSelected:m,onRemoveTagFromSelected:f,trashCount:b,selectedTrashCount:y,onDeleteSelectedNotes:w,onRestoreSelectedTrash:v,onRestoreAllTrash:k,onEmptyTrash:C,actionsLocked:j=!1,tagPreferencesLoading:S=!1})=>{const A=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),[$,E]=o.useState(null),[T,z]=o.useState(null),[M,N]=o.useState(""),D=o.useRef(null),O=o.useRef(null),R=o.useCallback(()=>{E(null),z(null)},[]);xe(O,R),o.useEffect(()=>{j&&R()},[j,R]);const P=()=>{window.innerWidth<=768&&c(!1)},I=e=>{s(e),P()};o.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!l)return;const n=e.target;n instanceof Node&&(null===(t=D.current)||void 0===t||!t.contains(n))&&(n instanceof Element&&n.closest('[data-sidebar-toggle="notes"]')||c(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[l,c]);const L=async e=>{try{await e(),E(null),P()}catch(t){console.error("Failed to complete tag menu action.",t)}},F=e=>{const t=e.icon,n="all"!==e.name&&"other"!==e.name,o="trash"===e.name;return(0,d.jsxs)(fe,{ref:$===e.name?O:null,$active:$===e.name,children:[(0,d.jsxs)(pe.K,{expanded:l,selected:a===e.name,title:e.name,onClick:()=>I(e.name),children:[(0,d.jsx)(t,{}),l&&(0,d.jsx)("span",{children:A(e.name)})]}),l&&n&&(0,d.jsxs)(be,{children:[(0,d.jsx)(we,{type:"button",disabled:j,"aria-label":`Manage ${e.name} tag`,title:`Manage ${A(e.name)} tag`,onClick:t=>{t.stopPropagation(),E($===e.name?null:e.name)},children:(0,d.jsx)(i.ZZB,{})}),$===e.name&&(0,d.jsx)(ve,{children:o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ke,{type:"button",disabled:!x.length,onClick:()=>{L(w)},children:"Delete Selected"}),(0,d.jsx)(ke,{type:"button",disabled:0===y,onClick:()=>{L(v)},children:"Restore Selected"}),(0,d.jsx)(ke,{type:"button",disabled:0===b,onClick:()=>{L(k)},children:"Restore All"}),(0,d.jsx)(ke,{type:"button",disabled:0===b,onClick:()=>{L(C)},children:"Empty Bin"})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ke,{type:"button",disabled:!x.length,onClick:()=>{L(()=>m(e.name))},children:"Add Selected"}),(0,d.jsx)(ke,{type:"button",disabled:!x.length,onClick:()=>{L(()=>f(e.name))},children:"Remove Selected"})]})})]})]},e.name)},K=e=>{const t=!n.includes(e);return(0,d.jsxs)(fe,{ref:$===e?O:null,$active:$===e,children:[(0,d.jsxs)(pe.K,{expanded:l,selected:a===e,title:A(e),onClick:()=>I(e),children:[(0,d.jsx)(i.cnX,{}),T===e?(0,d.jsx)(Ce,{autoFocus:!0,value:M,onClick:e=>e.stopPropagation(),onChange:e=>{e.currentTarget.setCustomValidity(""),N(e.target.value)},onKeyDown:t=>{if("Enter"===t.key){const n=M.trim();if(!n)return t.currentTarget.setCustomValidity("A tag name is required."),void t.currentTarget.reportValidity();L(async()=>{await h(e,n),z(null)})}"Escape"===t.key&&R()}}):l&&(0,d.jsx)("span",{children:A(e)})]}),l&&(0,d.jsxs)(be,{children:[(0,d.jsx)(we,{type:"button",disabled:j,"aria-label":`Manage ${e} tag`,title:`Manage ${A(e)} tag`,onClick:t=>{t.stopPropagation(),E($===e?null:e)},children:(0,d.jsx)(i.ZZB,{})}),$===e&&(0,d.jsxs)(ve,{children:[(0,d.jsx)(ke,{type:"button",disabled:j||S,onClick:()=>{L(()=>r(e))},children:t?"Unpin":"Pin"}),(0,d.jsx)(ke,{type:"button",onClick:()=>{z(e),N(e)},children:"Rename"}),(0,d.jsx)(ke,{type:"button",onClick:()=>{L(()=>g(e))},children:"Delete"}),(0,d.jsx)(ke,{type:"button",disabled:!x.length,onClick:()=>{L(()=>m(e))},children:"Add Selected"}),(0,d.jsx)(ke,{type:"button",disabled:!x.length,onClick:()=>{L(()=>f(e))},children:"Remove Selected"})]})]})]},e)},B=t.filter(e=>!n.includes(e)),U=t.filter(e=>n.includes(e));return(0,d.jsxs)(ge,{ref:D,expanded:l,children:[(0,d.jsxs)(pe.K,{expanded:l,title:"Menu",onClick:()=>c(!l),children:[(0,d.jsx)(i.ND1,{}),l&&(0,d.jsx)("span",{children:"Menu"})]}),p&&(0,d.jsxs)(ye,{expanded:l,title:"Expand Notes Explorer",onClick:()=>u(!p),children:[(0,d.jsx)(ue.$ZN,{}),l&&(0,d.jsx)("span",{children:"Expand Notes Explorer"})]}),e.filter(e=>"top"===e.position).map(F),B.map(K),e.filter(e=>"bottom"===e.position).map(F),U.length>0&&(0,d.jsx)(me,{role:"separator"}),U.map(K)]})},ge=r.Ay.div`
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
`,me=r.Ay.div`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  background: #d0d0d0;
`,fe=r.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${({$active:e})=>e?9999:1};
`,be=r.Ay.div`
  position: relative;
`,ye=(0,r.Ay)(pe.K)`
  && svg {
    color: #4b5563 !important;
  }
`,we=r.Ay.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`,ve=r.Ay.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
`,ke=r.Ay.button`
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
`,Ce=r.Ay.input`
  width: 100px;
  margin-left: 8px;
`;var je=n(5369);const Se=({colors:e,onColorClicked:t,dropdownRef:n})=>(0,d.jsx)(Ae,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map(e=>(0,d.jsxs)($e,{type:"button",onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:[(0,d.jsx)(Ee,{color:e}),(0,d.jsx)(Te,{children:e})]},e))}),Ae=r.Ay.div`
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
`,$e=r.Ay.button`
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
`,Ee=r.Ay.div`
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
`,Te=r.Ay.span`
  font-size: 12px;
  font-weight: 600;

  color: #444;
`,ze=({options:e,onPicked:t,dropdownRef:n})=>(0,d.jsx)(Me,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map((e,n)=>(0,d.jsx)(Ne,{type:"button",onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:(0,d.jsx)(De,{children:(0,d.jsx)(Oe,{children:e.title})})},n))}),Me=r.Ay.div`
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
`,Ne=r.Ay.button`
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
`,De=r.Ay.div`
  && {
    width: 100%;
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  gap: 2px;

  min-width: 0;
`,Oe=r.Ay.span`
  color: #444;

  font-size: 12px;
  font-weight: 600;

  line-height: 1.3;
`,Re=r.Ay.mark`
  border-radius: 2px;
  padding: 0 1px;
  background: #fde047;
  color: #713f12;
`,Pe=({text:e,query:t,fuzzySearchEnabled:n})=>{const o=_(e,t,n);if(!o.length)return(0,d.jsx)(d.Fragment,{children:e});const r=[];let i=0;return o.forEach(t=>{t.start>i&&r.push(e.slice(i,t.start)),r.push((0,d.jsx)(Re,{children:e.slice(t.start,t.end)},`${t.start}-${t.end}`)),i=t.end}),i<e.length&&r.push(e.slice(i)),(0,d.jsx)(d.Fragment,{children:r})},Ie=({title:e,titleRef:t,searchContent:n,fuzzySearchEnabled:o,readOnly:r,collapsed:l,isFavorite:c,selected:p,onToggleSelection:u,toolboxOpen:x,setToolboxOpen:h,showColorPicker:g,showTemplatePicker:m,setShowColorPicker:f,setShowTemplatePicker:b,toolboxRef:y,colorPickerRef:w,templatePickerRef:v,colorDropdownRef:k,templateDropdownRef:C,noteColors:j,templateOptions:S,onColorSelected:A,onTemplateSelected:$,copyFormattedContent:E,onToggleFavorite:T,onToggleCollapse:z,onTitleChange:M})=>(0,d.jsxs)(Fe,{children:[(0,d.jsxs)(Ke,{children:[(0,d.jsx)(Le,{title:p?"Unselect note":"Select note",onClick:u,children:p?"\u2713":""}),c?(0,d.jsx)(pe.K,{disabled:r,title:"Remove favorite",onClick:T,children:(0,d.jsx)(je.gt3,{})}):(0,d.jsx)(pe.K,{disabled:r,title:"Add favorite",onClick:T,children:(0,d.jsx)(i.usP,{})}),(0,d.jsx)(Be,{ref:t,title:"Note name",role:"textbox",contentEditable:!r,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>M(e.currentTarget.innerText),children:(0,d.jsx)(Pe,{text:e,query:n,fuzzySearchEnabled:o})})]}),(0,d.jsxs)(Ue,{children:[(0,d.jsxs)(He,{ref:y,children:[(0,d.jsx)(Je,{type:"button",disabled:r,title:"Open note toolbox","aria-label":"Open note toolbox","aria-haspopup":"menu","aria-expanded":x,onClick:()=>h(e=>!e),children:(0,d.jsx)(i.ou6,{})}),x&&(0,d.jsxs)(qe,{role:"menu","aria-label":"Note toolbox",children:[(0,d.jsxs)(We,{type:"button",role:"menuitem",title:"Change note background color",disabled:r,onClick:()=>{f(!0),b(!1),h(!1)},children:[(0,d.jsx)(s.$di,{}),(0,d.jsx)("span",{children:"Color"})]}),(0,d.jsxs)(We,{type:"button",role:"menuitem",title:"Apply template",disabled:r||0===S.length,onClick:()=>{f(!1),b(!0),h(!1)},children:[(0,d.jsx)(i.MRc,{}),(0,d.jsx)("span",{children:"Template"})]})]}),g&&(0,d.jsx)(Ge,{ref:w,children:(0,d.jsx)(Se,{colors:j,onColorClicked:A,dropdownRef:k})}),m&&(0,d.jsx)(Ge,{ref:v,children:(0,d.jsx)(ze,{options:S,onPicked:$,dropdownRef:C})})]}),(0,d.jsx)(pe.K,{title:"Copy note",onClick:E,children:(0,d.jsx)(i.nxz,{})}),l?(0,d.jsx)(pe.K,{title:"Expand note",onClick:z,children:(0,d.jsx)(a.BSQ,{})}):(0,d.jsx)(pe.K,{title:"Collapse note",onClick:z,children:(0,d.jsx)(a.q2p,{})})]})]}),Le=r.Ay.span`
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
`,Fe=r.Ay.header`
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
`,Ke=r.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;

  color: black;
`,Be=r.Ay.span`
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
`,Ue=r.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`,He=r.Ay.div`
  && {
    width: auto;
    margin: 0;
  }

  position: relative;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`,Je=r.Ay.button`
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
`,qe=r.Ay.div`
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
`,We=r.Ay.button`
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
`,Ge=r.Ay.div`
  && {
    width: max-content;
    margin: 0;
  }

  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 21;
  width: max-content;
`;var _e=n(8849),Ye=n(5709),Ve=n(8420),Xe=n(6801),Ze=n(8452),Qe=n(285),et=n(4853),tt=n(8550),nt=n(3596),ot=n(5312),rt=n.n(ot);const it=e=>{const t=e=>{for(let r=0;r<e.children.length;r+=1){const i=e.children[r];if("text"===i.type){var n,o;const t=null===(n=i.position)||void 0===n||null===(o=n.start)||void 0===o?void 0:o.offset;void 0!==t&&(e.children[r]={type:"element",tagName:"span",properties:{"data-note-source-start":t},children:[i]})}else"element"===i.type&&t(i)}};t(e)},at=()=>it,st=(e,t,n)=>{if(null===e||void 0===e||!e.start||!e.end)return;const o=e.start.offset;return{...e,start:{...e.start,offset:void 0===o?e.start.offset:o+t},end:{...e.end,offset:void 0===o?e.end.offset:o+n}}},lt=(e,t)=>n=>((e,t,n)=>{if(!t.trim())return e;const o=e=>{for(let r=0;r<e.children.length;r+=1){const i=e.children[r];if("text"===i.type){const o=_(i.value,t,n);if(!o.length)continue;const a=[];let s=0;o.forEach(e=>{e.start>s&&a.push({type:"text",value:i.value.slice(s,e.start),position:st(i.position,s,e.start)});const t={type:"text",value:i.value.slice(e.start,e.end),position:st(i.position,e.start,e.end)};a.push({type:"element",tagName:"mark",properties:{},children:[t],position:st(i.position,e.start,e.end)}),s=e.end}),s<i.value.length&&a.push({type:"text",value:i.value.slice(s),position:st(i.position,s,i.value.length)}),e.children[r]={type:"element",tagName:"span",properties:{},children:a,position:i.position}}else"element"===i.type&&o(i)}};return o(e),e})(n,e,t),dt=({label:e,expression:t,onExecute:n,disabled:o})=>(0,d.jsx)("button",{className:"markdownButton",disabled:o,onClick:()=>n(t),children:e}),ct=({value:e,searchContent:t,fuzzySearchEnabled:n,readOnly:o,editing:r,onEditorFocus:i,onEditorBlur:a,textareaRef:s,markdownRef:l,setValue:c,setEditing:p,onSave:u,onMarkdownClick:x,processMarkdown:h,onExecuteExpression:g})=>{if(r)return(0,d.jsx)(ht,{ref:s,readOnly:o,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:e||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`,i(t)},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,c(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)?(a(e.currentTarget),u(),p(!1)):u()}});const m=h(e||"* \u2753 What do you have for today?");return(0,d.jsx)(pt,{ref:l,onClick:t=>{if(o)return;const n=t.target;if(n.closest("button"))return;const r=m===e?((e,t,n)=>{var o,r,i;const a=document,s=null===(o=a.caretPositionFromPoint)||void 0===o?void 0:o.call(a,t,n),l=(null===s||void 0===s?void 0:s.offsetNode.nodeType)===Node.TEXT_NODE,d=l?null:null===(r=a.caretRangeFromPoint)||void 0===r?void 0:r.call(a,t,n),c=l?null===s||void 0===s?void 0:s.offsetNode:null===d||void 0===d?void 0:d.startContainer,p=l?null===s||void 0===s?void 0:s.offset:null===d||void 0===d?void 0:d.startOffset;if(!c||void 0===p||c.nodeType!==Node.TEXT_NODE||!e.contains(c))return null;const u=null===(i=c.parentElement)||void 0===i?void 0:i.closest("[data-note-source-start]"),x=null===u||void 0===u?void 0:u.getAttribute("data-note-source-start");if(null===x||void 0===x)return null;const h=Number(x)+p;return Number.isFinite(h)?h:null})(t.currentTarget,t.clientX,t.clientY):null;x(n.innerText||n.textContent||"",r)},children:(0,d.jsx)(_e.oz,{rehypePlugins:[Ye.A,[lt,t,n],at],components:{mark:({node:e,children:t})=>(0,d.jsx)(Re,{children:t}),button(e){var t,n,r;const i=decodeURIComponent(String(null!==(t=null===(n=e.node)||void 0===n||null===(r=n.properties)||void 0===r?void 0:r.dataExpression)&&void 0!==t?t:""));return(0,d.jsx)(dt,{label:String(e.children),expression:i,onExecute:g,disabled:o})},table:({node:e,children:t,...n})=>(0,d.jsx)(ut,{children:(0,d.jsx)("table",{...n,children:t})}),img:({node:e,...t})=>(0,d.jsx)(xt,{children:(0,d.jsx)("img",{...t,alt:t.alt||""})})},remarkPlugins:[[Ze.A,{padSpaceAfter:!1,emoticon:!0}],[tt.A,{tight:!0,ordered:!0}],[Ve.A,{stringLength:rt()}],Qe.A,et.A,nt.A,Xe.A],children:m})})},pt=r.Ay.div`
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
`,ut=r.Ay.div`
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
`,xt=r.Ay.span`
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  vertical-align: bottom;

  img {
    display: block;
    max-width: none;
  }
`,ht=r.Ay.textarea`
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
`,gt=({date:e,tags:t,searchContent:n,fuzzySearchEnabled:r,availableTags:s,readOnly:c,tagPickerRef:p,tagDropdownRef:u,showTagPicker:x,creatingTag:h,newTagName:g,setShowTagPicker:m,setCreatingTag:f,setNewTagName:b,onDateChange:y,hasTag:w,toggleTag:v,createTag:k,formatTag:C,formatDate:j})=>{const S=o.useRef(null);return(0,d.jsxs)(mt,{children:[(0,d.jsx)(ft,{$disabled:c,"aria-disabled":c,onClick:()=>{var e,t,n;c||(null===(e=S.current)||void 0===e||null===(t=e.showPicker)||void 0===t||t.call(e),null===(n=S.current)||void 0===n||n.click())},children:j(e)}),(0,d.jsx)("input",{ref:S,type:"date",value:e,style:{display:"none"},onChange:e=>y(e.target.value)}),t.map(e=>(0,d.jsx)(bt,{type:"button",disabled:c,onClick:()=>v(e),children:(0,d.jsx)(Pe,{text:C(e),query:n,fuzzySearchEnabled:r})},e)),(0,d.jsxs)(yt,{ref:p,children:[!c&&(0,d.jsx)(wt,{type:"button",title:"Add tag","aria-label":"Add tag",onClick:()=>m(!x),children:(0,d.jsx)(a.n4h,{})}),x&&(0,l.createPortal)((0,d.jsxs)(vt,{ref:u,children:[s.map(e=>(0,d.jsxs)(kt,{className:w(e)?"selected":"",onClick:()=>{c||v(e)},children:[(0,d.jsx)(i.cnX,{}),(0,d.jsx)("span",{children:C(e)})]},e)),h?(0,d.jsx)(jt,{autoFocus:!0,placeholder:"Tag name...",value:g,onChange:e=>!c&&b(e.target.value),onKeyDown:e=>{c||"Enter"!==e.key||k(g),"Escape"===e.key&&(f(!1),b(""))},onBlur:()=>{if(c)return f(!1),void b("");g.trim()?k(g):f(!1)}}):(0,d.jsxs)(Ct,{onClick:()=>!c&&f(!0),children:[(0,d.jsx)(i.cnX,{}),"New Tag"]})]}),document.body)]})]})},mt=r.Ay.div`
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
`,ft=r.Ay.span`
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
`,bt=r.Ay.button`
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
`,yt=r.Ay.div`
  && {
    width: fit-content;
    margin-left: 0;
  }

  position: relative;
  flex: 0 0 auto;
  width: fit-content;
  margin: 0;
`,wt=r.Ay.button`
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
`,vt=r.Ay.div`
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
`,kt=r.Ay.span`
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
`,Ct=r.Ay.span`
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
`,jt=r.Ay.input`
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
`,St=(e={})=>{const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},At=(e,t={},n=!1,o=0)=>{const r=new Date;return(e=e.replace(/@date\b/g,()=>r.toLocaleDateString()).replace(/@time\b/g,()=>r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>r.toLocaleString()).replace(/@dayofweek\b/g,()=>r.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(r.getMonth()+1)).replace(/@monthname\b/g,()=>r.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(r.getFullYear())).replace(/@today\b/g,()=>r.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const o=Number(t),r=Number(n);return o&&r?(o/(r*r)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-r.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const o=Math.max(-1,Math.min(1,Number(n))),r=t.isMobile?5:10,i=Math.abs(o),a=`${Math.round(100*o)}%`,s=Math.round(i*r);let l=o>=0?"\u2588".repeat(s)+"\u2591".repeat(r-s):"\u2591".repeat(r-s)+"\u2588".repeat(s);const d=Math.max(0,Math.floor((r-a.length)/2));return l.slice(0,d)+a+l.slice(d+a.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&o<5?At(e,t,n,o+1):e},$t=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,Et=(e,t)=>{const n={};e.replace($t,(e,t,o)=>(n[t]=o.trim(),""));let o=!0;for(;o;){o=!1;for(const[e,r]of Object.entries(n)){if(!r.includes("@"))continue;const i=At(Tt(r,n),St({...t,...n}));i!==r&&(n[e]=i,o=!0)}}return n},Tt=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var o;return null!==(o=t[n])&&void 0!==o?o:""}),zt=(e,t,n)=>{const o=Et(e),r=St({...t,...Object.fromEntries(Object.entries(o).map(([e,t])=>{if(""===t)return[e,""];const n=Number(t);return[e,Number.isNaN(n)?t:n]}))});return At(Tt((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),o),r,n)};function Mt(){const[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(""),[i,a]=(0,o.useState)({city:"",country:""});return(0,o.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async({coords:n})=>{try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${n.latitude}&longitude=${n.longitude}&current=temperature_2m,weather_code`),l=await t.json();let d="",c="";try{var o,r,i,a;const e=await fetch(`https://geocode.maps.co/reverse?lat=${n.latitude}&lon=${n.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();d=(null===(o=t.address)||void 0===o?void 0:o.city)||(null===(r=t.address)||void 0===r?void 0:r.town)||(null===(i=t.address)||void 0===i?void 0:i.village)||"",c=(null===(a=t.address)||void 0===a?void 0:a.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(l.current.temperature_2m)}\xb0C`,weather:(s=l.current.weather_code,0===s?"\u2600\ufe0f Sunny":[1,2].includes(s)?"\ud83c\udf24\ufe0f Partly Cloudy":3===s?"\u2601\ufe0f Cloudy":[45,48].includes(s)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(s)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(s)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(s)?"\u2744\ufe0f Snowing":[80,81,82].includes(s)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(s)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:d,country:c})}catch(l){t(l)}var s}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),r(e.weather),a({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:i}}const Nt=(e,t,n)=>{let o=0;for(;o<e.length&&o<t.length&&e[o]===t[o];)o+=1;let r=0;for(;r<e.length-o&&r<t.length-o&&e[e.length-1-r]===t[t.length-1-r];)r+=1;if(n<=o)return n;return n>=e.length-r?n+t.length-e.length:t.length-r},Dt=({id:e,date:t,content:n,searchContent:r,fuzzySearchEnabled:i,notesLocked:a,onChangeContent:s,onChangeDate:l,tags:c,selected:p,onToggleSelection:u,templateOptions:x,onEditorFocus:h,onEditorBlur:g})=>{const[m,f]=o.useState(!1),[b,y]=o.useState(!1),[w,v]=o.useState(!1),[k,C]=o.useState(!1),j=o.useRef(null),S=o.useRef(null),A=o.useRef(null),$=o.useRef(null),E=o.useRef(null),T=o.useRef(null),z=o.useRef(null),M=o.useRef(null),N=o.useRef(null),D=o.useRef(null),[O,R]=o.useState(window.innerWidth<1260),{temperature:P,weather:I,location:L}=Mt(),{setCursorPosition:F,findBestCursorPosition:K}=function({editing:e,textareaRef:t}){const[n,r]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!e||!t.current||null===n)return;const o=t.current;o.focus(),o.setSelectionRange(n,n);const r=requestAnimationFrame(()=>{if(!o.isConnected)return;const e=document.createElement("div"),t=window.getComputedStyle(o);e.style.position="absolute",e.style.visibility="hidden",e.style.whiteSpace="pre-wrap",e.style.wordWrap="break-word",e.style.boxSizing=t.boxSizing,e.style.font=t.font,e.style.lineHeight=t.lineHeight,e.style.letterSpacing=t.letterSpacing,e.style.wordSpacing=t.wordSpacing,e.style.textIndent=t.textIndent,e.style.tabSize=t.tabSize,e.style.padding=t.padding,e.style.border=t.border,e.style.width=t.width,e.textContent=`${o.value.substring(0,n)}\u200b`,document.body.appendChild(e);const r=e.offsetHeight;document.body.removeChild(e);const i=o.getBoundingClientRect().top;let a=o.parentElement;for(;a;){const e=window.getComputedStyle(a).overflowY;if("auto"===e||"scroll"===e||"overlay"===e){const e=a.getBoundingClientRect().top,t=a.scrollTop+i+r-e-a.clientHeight/2;return void a.scrollTo({top:Math.max(0,t),behavior:"smooth"})}a=a.parentElement}window.scrollTo({top:Math.max(0,window.scrollY+i+r-window.innerHeight/2),behavior:"smooth"})});return()=>cancelAnimationFrame(r)},[e,n,t]),{cursorPosition:n,setCursorPosition:r,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const o=n.split(" ");for(let r=Math.min(o.length,8);r>=2;r--)for(let e=0;e<=o.length-r;e++){const n=o.slice(e,e+r).join(" "),i=t.indexOf(n);if(i>=0)return i}for(const r of o){if(r.length<4)continue;const e=t.indexOf(r);if(e>=0)return e}return t.length}}}({editing:m,textareaRef:j});!function({tagPickerRef:e,tagDropdownRef:t,colorPickerRef:n,colorDropdownRef:r,templatePickerRef:i,templateDropdownRef:a,toolboxRef:s,closeTagPicker:l,closeColorPicker:d,closeTemplatePicker:c,closeToolbox:p}){(0,o.useEffect)(()=>{const o=o=>{var u,x,h,g,m,f,b,y,w,v,k,C,j,S;const A=o.target,$=null!==(u=null===(x=e.current)||void 0===x?void 0:x.contains(A))&&void 0!==u&&u,E=null!==(h=null===(g=t.current)||void 0===g?void 0:g.contains(A))&&void 0!==h&&h;$||E||l();const T=null!==(m=null===(f=n.current)||void 0===f?void 0:f.contains(A))&&void 0!==m&&m,z=null!==(b=null===(y=r.current)||void 0===y?void 0:y.contains(A))&&void 0!==b&&b;T||z||d();const M=null!==(w=null===(v=i.current)||void 0===v?void 0:v.contains(A))&&void 0!==w&&w,N=null!==(k=null===(C=a.current)||void 0===C?void 0:C.contains(A))&&void 0!==k&&k;M||N||c(),null!==(j=null===(S=s.current)||void 0===S?void 0:S.contains(A))&&void 0!==j&&j||p()};return document.addEventListener("pointerdown",o),()=>{document.removeEventListener("pointerdown",o)}},[e,t,n,r,i,a,s,l,d,c,p])}({tagPickerRef:$,tagDropdownRef:M,colorPickerRef:E,colorDropdownRef:N,templatePickerRef:T,templateDropdownRef:D,toolboxRef:z,closeTagPicker:()=>{_(!1),Y(!1)},closeColorPicker:()=>{v(!1)},closeTemplatePicker:()=>{C(!1)},closeToolbox:()=>{y(!1)}}),o.useEffect(()=>{const e=()=>{R(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const H=o.useMemo(()=>se(n,B),[n]),J=a,{showTagPicker:q,creatingTag:W,newTagName:G,setShowTagPicker:_,setCreatingTag:Y,setNewTagName:V,hasTag:X,toggleTag:Z,createTag:Q}=function({tags:e,onTagsChange:t}){const[n,r]=(0,o.useState)(!1),[i,a]=(0,o.useState)(!1),[s,l]=(0,o.useState)(""),d=t=>e.includes(t),c=n=>{console.log("current tags",e);const o=Array.from(new Set(d(n)?e.filter(e=>e!==n):[...e,n]));console.log("updated tags",o),t(o)};return{showTagPicker:n,creatingTag:i,newTagName:s,setShowTagPicker:r,setCreatingTag:a,setNewTagName:l,hasTag:d,toggleTag:c,createTag:e=>{const t=e.trim().toLowerCase();t&&(c(t),l(""),a(!1))}}}({tags:H.tags,onTagsChange:t=>{J||s(e,JSON.stringify({...H,tags:t}))}}),ee=o.useCallback(e=>X("templates")?e:((e,t={})=>{const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/quarter\b/g,()=>String(Math.floor(n.getMonth()/3)+1)).replace(/\/week\b/g,()=>{const e=new Date(n);e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const t=new Date(e.getFullYear(),0,4);return String(1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7))}).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const o=Number(t),r=Number(n);return String(Math.floor(Math.random()*(r-o+1))+o)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",o=Number(t);return Array.from({length:o},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const o=new Date(t);let r=n.getFullYear()-o.getFullYear();const i=n.getMonth()-o.getMonth();return(i<0||0===i&&n.getDate()<o.getDate())&&r--,String(r)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const o=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(o/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})})(e,{weather:I,temperature:P,city:L.city,country:L.country}),[X,L.city,L.country,P,I]),[te,ne]=o.useState(H.text||""),oe=o.useRef(null),re=o.useRef(H.text||""),ie=o.useRef({text:H.text||"",title:H.title||""}),de=o.useCallback(e=>{const t=j.current;if(m&&t&&document.activeElement===t&&t.value!==e){const n=t.value;oe.current={start:Nt(n,e,t.selectionStart),end:Nt(n,e,t.selectionEnd),direction:t.selectionDirection,scrollTop:t.scrollTop}}ne(t=>t===e?t:e)},[m]);o.useLayoutEffect(()=>{const e=oe.current;if(!e)return;const t=j.current;if(!m||!t)return void(oe.current=null);oe.current=null;const n=t.value.length;t.setSelectionRange(Math.min(e.start,n),Math.min(e.end,n),e.direction),t.scrollTop=e.scrollTop},[m,te]),o.useEffect(()=>{ie.current={text:H.text||"",title:H.title||""}},[H.text,H.title]),o.useEffect(()=>{const e=H.text||"",t=re.current;t!==e&&(re.current=e,m&&te!==t||de(e))},[m,H.text,de,te]);const ce=o.useCallback((t,n)=>{var o,r,i,a,l;const d=null!==t&&void 0!==t?t:m&&null!==(o=null===(r=j.current)||void 0===r?void 0:r.value)&&void 0!==o?o:te,c=null!==(i=null!==(a=null!==n&&void 0!==n?n:null===(l=A.current)||void 0===l?void 0:l.innerText)&&void 0!==a?a:H.title)&&void 0!==i?i:"",p=ee(d),u=ee(c),x=ie.current;x.text===p&&x.title===u||(ie.current={text:p,title:u},de(p),s(e,JSON.stringify({...H,text:p,title:u})).catch(e=>{console.error("Failed to autosave note.",e),ie.current.text===p&&ie.current.title===u&&(ie.current=x)}))},[m,e,ee,H,s,de,te]);o.useEffect(()=>{if(!m||J)return;const e=window.setTimeout(()=>ce(),500);return()=>window.clearTimeout(e)},[m,J,ce,te]),o.useEffect(()=>{const e=()=>ce(),t=()=>{"hidden"===document.visibilityState&&ce()};return document.addEventListener("visibilitychange",t),window.addEventListener("pagehide",e),window.addEventListener("beforeunload",e),()=>{document.removeEventListener("visibilitychange",t),window.removeEventListener("pagehide",e),window.removeEventListener("beforeunload",e)}},[ce]),o.useEffect(()=>{var e;J&&(v(!1),C(!1),_(!1),Y(!1),y(!1),m&&(null===(e=j.current)||void 0===e||e.blur()))},[m,J,Y,_,v,C,y]);return(0,d.jsx)(Ot,{selected:p,$overlayOpen:b||w||k,children:(0,d.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:H.color||"#eee"},children:[(0,d.jsx)(Ie,{title:H.title,titleRef:A,searchContent:r,fuzzySearchEnabled:i,readOnly:a,collapsed:H.collapsed,selected:p,onToggleSelection:()=>u(e),toolboxOpen:b,setToolboxOpen:y,showColorPicker:w,showTemplatePicker:k,setShowColorPicker:v,setShowTemplatePicker:C,toolboxRef:z,colorPickerRef:E,templatePickerRef:T,colorDropdownRef:N,templateDropdownRef:D,noteColors:ae,templateOptions:x,onColorSelected:t=>{J||(s(e,JSON.stringify({...H,color:t})),v(!1),y(!1))},onTemplateSelected:t=>{if(J)return;let n=t.text.replace(/\\\$\{/g,"${");n=ee(n);const o=Array.from(new Set([...H.tags||[],...t.tags||[]]));s(e,JSON.stringify({...H,collapsed:!1,color:t.color,text:n,title:ee(t.title),tags:o})),ne(n),C(!1),y(!1)},isFavorite:X("favorite"),copyFormattedContent:async()=>{if(!S.current)return;const e=S.current.innerHTML,t=S.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>{J||Z("favorite")},onToggleCollapse:()=>{s(e,JSON.stringify({...H,collapsed:!H.collapsed}))},onTitleChange:e=>ce(void 0,e)}),!H.collapsed&&(0,d.jsx)(ct,{value:te,searchContent:r,fuzzySearchEnabled:i,readOnly:J,editing:m,onEditorFocus:t=>h(e,t),onEditorBlur:t=>g(e,t),textareaRef:j,markdownRef:S,setValue:ne,setEditing:f,processMarkdown:e=>zt(e,{temperature:P,weather:I,city:L.city,country:L.country},O),onExecuteExpression:t=>{if(J)return;const n=((e,t,n)=>{const o=t.match(/^\$\{(\w+)\}=(.*)$/);if(!o)return e;const r=o[1];let i=o[2];const a=Et(e);i=At(i,St({...n,...a})),i=i.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=a[t])&&void 0!==n?n:"")});const s="${"+r+"}="+Function(`return (${i})`)(),l=new RegExp(`^\\$\\{${r}\\}\\s*=([^\\r\\n]*)`,"m");return l.test(e)?e.replace(l,s):e.trimEnd()+"\n"+s})(te,t,{temperature:P,weather:I,city:L.city,country:L.country});ne(n),s(e,JSON.stringify({...H,text:n}))},onSave:()=>{var e,t;return ce(null!==(e=null===(t=j.current)||void 0===t?void 0:t.value)&&void 0!==e?e:te)},onMarkdownClick:(e,t)=>{if(J)return;const n=null!==t&&void 0!==t?t:K(e,te);F(n),f(!0)}}),(0,d.jsx)("footer",{className:"footer",children:(0,d.jsx)("span",{className:"footbox",children:(0,d.jsx)(gt,{tagDropdownRef:M,date:t,tags:H.tags,searchContent:r,fuzzySearchEnabled:i,availableTags:c,readOnly:J,tagPickerRef:$,showTagPicker:q,creatingTag:W,newTagName:G,setShowTagPicker:_,setCreatingTag:Y,setNewTagName:V,onDateChange:t=>{J||l(e,t)},hasTag:X,toggleTag:Z,createTag:Q,formatTag:le,formatDate:U})})})]})},e)},Ot=r.Ay.div`
position: relative;
z-index: ${({$overlayOpen:e})=>e?10:"auto"};
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

`,Rt=({entries:e,searchContent:t,fuzzySearchEnabled:n,pickerTags:o,onHoverCard:r,onChangeEntry:i,updateEntryDate:a,selectedNoteIds:s,onToggleSelection:l,templateOptions:c,notesLocked:p,onEditorFocus:u,onEditorBlur:x})=>(0,d.jsx)(Pt,{children:e.map((e,h)=>(0,d.jsx)("div",{onMouseEnter:()=>r(e.id),onMouseLeave:()=>r(null),children:(0,d.jsx)(Dt,{id:e.id,date:e.date,number:h+1,content:e.content,searchContent:t,fuzzySearchEnabled:n,onChangeContent:i,onChangeDate:a,tags:o,selected:s.includes(e.id),onToggleSelection:l,templateOptions:c,notesLocked:p,onEditorFocus:u,onEditorBlur:x})},e.id))}),Pt=r.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`;var It=n(9894);const Lt=new TextEncoder,Ft=new TextDecoder;function Kt(e){const t=new Uint8Array(e);let n="";for(let o=0;o<t.length;o++)n+=String.fromCharCode(t[o]);return btoa(n)}function Bt(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function Ut(e,t){const n=await crypto.subtle.importKey("raw",Lt.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function Ht(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),o=crypto.getRandomValues(new Uint8Array(16)),r=await Ut(t,o);return{encrypted:Kt(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},r,Lt.encode(e))),iv:Kt(n),salt:Kt(o)}}(t,e);await(0,Z.BN)((0,Z.H9)(Q.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function Jt(e){const t=await(0,Z.x7)((0,Z.H9)(Q.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,o){const r=await Ut(o,Bt(n)),i=await crypto.subtle.decrypt({name:"AES-GCM",iv:Bt(t)},r,Bt(e));return Ft.decode(i)}(n.encryptedApiKey,n.iv,n.salt,e)}async function qt(e,t,n,o,r,i){console.log(r);const a=i||await Jt(e);if(!a)throw new Error("OpenAI API Key not configured.");const s=new It.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),l=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${o}\n`;return await s.responses.create({model:r||"gpt-6-luna",input:l})}const Wt=e=>{const t=(0,Z.H9)(Q.OO,"users",e);return(0,Z.rJ)(t,"chatSessions")},Gt=async(e,t)=>{const n=Wt(e);return(await(0,Z.GG)((0,Z.P)(n,(0,Z._M)("id","==",t)))).docs};const _t=(0,o.createContext)(void 0),Yt="You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.",Vt=({uid:e,selectedNotesText:t,noteTitles:n,clearSelectedNotes:r,entries:i})=>{const[a,s]=(0,o.useState)(""),[l,d]=(0,o.useState)([]),[c,p]=(0,o.useState)([]),{sessions:u,fetchSessions:x,createSession:h,updateSession:g,deleteSession:m}=function(e){const[t,n]=o.useState([]),r=o.useCallback(async()=>{if(!e)return;const t=(await(0,Z.GG)(Wt(e))).docs.map(e=>e.data());n((e=>[...e].sort((e,t)=>e.updatedAt>t.updatedAt?-1:e.updatedAt<t.updatedAt?1:0))(t))},[e]),i=o.useCallback(async t=>{if(!e)return null;const o={id:X()(),title:"New Chat",createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString(),model:t,selectedPromptIds:[],messages:[]};return n(e=>[o,...e]),await(0,Z.gS)(Wt(e),o),o},[e]),a=o.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const o=await Gt(e,t.id);await Promise.all(o.map(n=>(0,Z.BN)((0,Z.H9)(Q.OO,`users/${e}/chatSessions/${n.id}`),t)))},[e]),s=o.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const o=await Gt(e,t);await Promise.all(o.map(t=>(0,Z.kd)((0,Z.H9)(Q.OO,`users/${e}/chatSessions/${t.id}`))))},[e]);return{sessions:t,setSessions:n,fetchSessions:r,createSession:i,updateSession:a,deleteSession:s}}(e),[f,b]=(0,o.useState)(!1),[y,w]=(0,o.useState)(null),[v,k]=(0,o.useState)(!1),[C,j]=(0,o.useState)("gpt-6-luna"),[S,A]=(0,o.useState)(!0),$=(0,o.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),E=(0,o.useCallback)(async()=>{const e=await h(C);e&&(d([]),w(e.id),p([]))},[h,C]);(0,o.useEffect)(()=>{f&&(u.length>0||E())},[f,u,E]),(0,o.useEffect)(()=>{(async()=>{await x(),b(!0)})()},[x]);const T=(0,o.useCallback)(async e=>{if(!y)return;const t=u.find(e=>e.id===y);if(!t)return;const n=l.includes(e)?l.filter(t=>t!==e):[...l,e];d(n),await g({...t,selectedPromptIds:n,updatedAt:(new Date).toISOString()})},[y,l,u,g]),z=(0,o.useMemo)(()=>i.filter(e=>l.includes(e.id)).map(e=>{try{return JSON.parse(e.content).text||""}catch{return""}}).join("\n\n"),[i,l]),M=(0,o.useCallback)(e=>{const t=u.find(t=>t.id===e);t&&(d(t.selectedPromptIds||[]),w(e),p(t.messages),j(t.model))},[u]);(0,o.useEffect)(()=>{0!==u.length&&(y||M(u[0].id))},[u,y,M]);const N=(0,o.useMemo)(()=>i.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[i]),D=(0,o.useCallback)(async()=>{const o=a.trim();if(!o||v)return;if(!e)return void p(e=>[...e,{id:X()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const i=n.length>0?`Notes:\n${n.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",l=$(c),d={id:X()(),role:"user",content:`${i}${o}`};p(e=>{const t=[...e,d],n=u.find(e=>e.id===y);return n&&g({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?o.substring(0,30):n.title}),t}),s(""),k(!0);const x=[];S&&l&&x.push(`History:\n${l}`),t.trim()&&x.push(`Context:\n${t}`);const h=x.join("\n\n");try{var m,f;const t=[Yt,z].filter(Boolean),n=await qt(e,t.join("\n\n"),o,h,C),i={id:X()(),role:"assistant",content:n.output_text.trim()||"No response was returned.",tokens:{input:(null===(m=n.usage)||void 0===m?void 0:m.input_tokens)||0,output:(null===(f=n.usage)||void 0===f?void 0:f.output_tokens)||0}};p(e=>{const t=[...e,i],n=u.find(e=>e.id===y);return n&&g({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?o.substring(0,30):n.title}),t}),r()}catch(b){console.error("Mavis error:",b);const e=b instanceof Error?b.message:"An unexpected error occurred.";p(t=>[...t,{id:X()(),role:"assistant",content:e}])}finally{k(!1)}},[a,v,e,n,t,C,c,S,$,r,u,y,g,z]),O=(0,o.useCallback)(async()=>{if(v||0===c.length)return;if(!e)return void p(e=>[...e,{id:X()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const t=$(c);k(!0);try{var n,o;const r=await qt(e,`${Yt}\n\n${z}`,"Summarize the entire conversation history into one comprehensive, self-contained message.\n\nInclude all important information from the conversation, especially:\n\n- Every requirement and specification\n- Every decision that was made\n- Every implementation detail\n- Every instruction and constraint\n- Important facts, dates, names, titles, values, and references\n- Code-related decisions, expected behavior, and affected files or components\n- Problems, errors, solutions, and changes that were discussed\n- Rejected alternatives and the reasons they were rejected\n- Open questions, unresolved issues, assumptions, and pending tasks\n- The current state of the work\n- Clear next steps, if any\n\nPreserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.\n\nWrite the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.",`Conversation history:\n${t}`,C),i={id:X()(),role:"assistant",content:r.output_text.trim()||"No summary was returned.",tokens:{input:(null===(n=r.usage)||void 0===n?void 0:n.input_tokens)||0,output:(null===(o=r.usage)||void 0===o?void 0:o.output_tokens)||0}};p([i]);const a=u.find(e=>e.id===y);a&&await g({...a,messages:[i],updatedAt:(new Date).toISOString()})}catch(r){console.error("Mavis summary error:",r);const e=r instanceof Error?r.message:"An unexpected error occurred.";p(t=>[...t,{id:X()(),role:"assistant",content:e}])}finally{k(!1)}},[v,c,e,$,C,y,u,g,z]),R=(0,o.useCallback)(async e=>{if(!y)return;const t=u.find(e=>e.id===y);if(!t)return;const n="all"===e?[]:t.messages.filter(t=>t.id!==e);p(n),await g({...t,messages:n,updatedAt:(new Date).toISOString()})},[y,u,g]),P=(0,o.useCallback)(async()=>{if(!y)return;const e=u.find(e=>e.id===y);e&&(p([]),await g({...e,messages:[],updatedAt:(new Date).toISOString()}))},[y,u,g]),I=(0,o.useCallback)(async e=>{if(await m(e),y===e){const t=u.filter(t=>t.id!==e);t.length>0?M(t[0].id):await E()}},[m,y,u,M,E]);return{prompt:a,setPrompt:s,selectedPromptIds:l,togglePrompt:T,availablePromptNotes:N,messages:c,isLoading:v,sessions:u,currentSessionId:y,createNewSession:E,loadSession:M,deleteSession:m,removeSession:I,sendPrompt:D,deleteMessage:R,clearMessages:P,summarizeHistory:O,selectedModel:C,setSelectedModel:j,includeHistory:S,setIncludeHistory:A}};function Xt({children:e,uid:t,selectedNotesText:n,noteTitles:o,clearSelectedNotes:r,entries:i}){const a=Vt({uid:t,selectedNotesText:n,noteTitles:o,clearSelectedNotes:r,entries:i});return(0,d.jsx)(_t.Provider,{value:a,children:e})}function Zt(){const e=(0,o.useContext)(_t);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}const Qt=["gpt-5-mini","gpt-6-luna","gpt-5.6-terra","gpt-5.6-sol"],en=({uid:e,selectedNotesText:t,noteTitles:n,notesCount:r,clearSelectedNotes:a})=>{const[l,c]=o.useState(!1),{prompt:p,setPrompt:u,messages:x,isLoading:h,sendPrompt:g,deleteMessage:m,selectedModel:f,setSelectedModel:b,selectedPromptIds:y,availablePromptNotes:w,togglePrompt:v,includeHistory:k,setIncludeHistory:C,summarizeHistory:j}=Zt(),[S,A]=o.useState(!1),[$,E]=o.useState(!1),T=o.useRef(null),z=o.useRef(null),M=o.useRef(null),N=o.useRef({}),[D,O]=o.useState(0),R=o.useCallback(e=>{const t=e.scrollHeight-e.clientHeight,n=t>0?e.scrollTop/t:0;O(Math.min(1,Math.max(0,n)))},[]),P=o.useCallback(e=>{R(e.currentTarget)},[R]);o.useLayoutEffect(()=>{const e=M.current;e&&(e.scrollTop=Math.max(0,e.scrollHeight-e.clientHeight),R(e))},[h,x,R]);const I=o.useCallback(()=>A(!1),[]),L=o.useCallback(()=>E(!1),[]);xe(T,I),xe(z,L);const K=o.useCallback(e=>{const t=M.current,n=N.current[e];if(!t||!n)return;const o=t.getBoundingClientRect().top,r=n.getBoundingClientRect().top;t.scrollTo({top:Math.max(0,t.scrollTop+r-o-12),behavior:"smooth"})},[]);return(0,d.jsxs)(cn,{children:[(0,d.jsxs)(pn,{children:[(0,d.jsxs)(un,{ref:M,role:"log","aria-label":"Chat messages",onScroll:P,children:[x.map(e=>(0,d.jsxs)(nn,{ref:t=>{N.current[e.id]=t},role:e.role,children:[(0,d.jsx)(rn,{role:e.role,children:e.tokens&&(0,d.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,d.jsx)(mn,{role:e.role,children:(0,d.jsx)(_e.oz,{remarkPlugins:[Ve.A],components:{table:({node:e,children:t,...n})=>(0,d.jsx)(gn,{children:(0,d.jsx)("table",{...n,children:t})})},children:e.content})}),(0,d.jsxs)(on,{role:e.role,children:[(0,d.jsx)(pe.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,d.jsx)(i.nxz,{})}),(0,d.jsx)(pe.K,{title:"Delete message",onClick:()=>m(e.id),children:(0,d.jsx)(i.IXo,{})})]})]},e.id)),h&&(0,d.jsx)(mn,{role:"assistant",children:"Thinking..."})]}),(0,d.jsx)(tn,{messages:x,scrollProgress:D,onScrollToMessage:K})]}),(0,d.jsx)(fn,{expanded:l,children:(0,d.jsxs)(bn,{children:[(0,d.jsxs)(sn,{children:[(0,d.jsxs)(Sn,{ref:z,children:[(0,d.jsxs)(vn,{title:"Prompt presets",onClick:()=>{A(!1),E(e=>!e)},children:[(0,d.jsx)(F.vTI,{}),(0,d.jsxs)(kn,{children:["Prompts (",y.length,")"]})]}),$&&(0,d.jsx)(Cn,{children:w.map(e=>(0,d.jsxs)(jn,{className:y.includes(e.id)?"selected":"",onClick:()=>{v(e.id)},children:[(0,d.jsx)(F.vTI,{}),(0,d.jsx)("span",{children:e.title})]},e.id))})]}),(0,d.jsxs)(wn,{ref:T,children:[(0,d.jsxs)(vn,{style:{margin:"0px !important"},title:"Selecionar modelo de IA",onClick:()=>{E(!1),A(e=>!e)},children:[(0,d.jsx)(i.Ojn,{}),(0,d.jsx)(kn,{children:f})]}),S&&(0,d.jsx)(Cn,{children:Qt.map(e=>(0,d.jsxs)(jn,{className:f===e?"selected":"",onClick:()=>{b(e),A(!1)},title:e,children:[(0,d.jsx)(i.Ojn,{}),(0,d.jsx)("span",{children:e})]},e))})]}),(0,d.jsxs)(ln,{children:["Notes: ",r]})]}),(0,d.jsxs)(an,{children:[(0,d.jsx)(yn,{expanded:l,value:p,placeholder:"Ask Mavis...",disabled:h,onChange:e=>u(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),g())}}),(0,d.jsxs)(dn,{children:[(0,d.jsx)(pe.K,{title:"Summarize History",onClick:()=>{j()},children:(0,d.jsx)(s.Z1M,{})}),(0,d.jsx)(pe.K,{title:"Include chat history in prompts",children:(0,d.jsx)(s.bfP,{color:k?"#2563eb":"#555",onClick:()=>C(!k)})}),(0,d.jsx)(pe.K,{title:"Clear chat history",onClick:()=>{m("all")},children:(0,d.jsx)(F.U3h,{})}),(0,d.jsx)(pe.K,{title:l?"Collapse":"Expand",onClick:()=>c(e=>!e),children:l?(0,d.jsx)(i.eDi,{}):(0,d.jsx)(i.mkN,{})}),(0,d.jsx)(pe.K,{title:"Copy input",onClick:()=>{(async()=>{p.trim()&&await navigator.clipboard.writeText(p)})()},disabled:!p.trim(),children:(0,d.jsx)(i.nxz,{})}),(0,d.jsx)(pe.K,{title:"Send prompt",onClick:()=>{g()},disabled:h||!p.trim(),children:(0,d.jsx)(i.kGk,{})}),(0,d.jsx)(pe.K,{title:"Clear input",onClick:()=>{u("")},disabled:!p.trim(),children:(0,d.jsx)(i.yGN,{})}),(0,d.jsx)(pe.K,{title:"Clear selected notes",onClick:a,disabled:0===r,children:(0,d.jsx)(s.DnH,{})})]})]})]})})]})},tn=({messages:e,scrollProgress:t,onScrollToMessage:n})=>{const r=o.useRef(null);return o.useLayoutEffect(()=>{const e=r.current;if(!e)return;const n=e.scrollHeight-e.clientHeight;e.scrollTop=Math.max(0,n*t)},[e,t]),(0,d.jsx)(xn,{ref:r,role:"group","aria-label":"Chat message minimap",children:e.map((e,t)=>(0,d.jsx)(hn,{type:"button","aria-label":`Go to ${e.role} message ${t+1}`,title:`${"user"===e.role?"You":"Mavis"} message ${t+1}`,$role:e.role,style:{height:`${Math.min(Math.max(8*Math.ceil(e.content.length/80),8),60)}px`},onClick:()=>n(e.id)},e.id))})},nn=r.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
`,on=r.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,rn=r.Ay.div`
  font-size: 10px;
  color: #555;
  margin-bottom: 2px;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  white-space: nowrap;
`,an=r.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,sn=r.Ay.span`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,ln=r.Ay.span`
  font-size: 12px;
  color: #555;
`,dn=r.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,cn=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,pn=r.Ay.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,un=r.Ay.div`
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
`,xn=r.Ay.div`
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
`,hn=r.Ay.button`
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
`,gn=r.Ay.div`
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
`,mn=r.Ay.div`
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
`,fn=r.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;
  margin: 0;
  background: #e0e0e5;
  ${({expanded:e})=>e&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}
`,bn=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #e0e0e5;
`,yn=r.Ay.textarea`
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
`,wn=r.Ay.div`
  padding: 0px;
  position: relative;
  width: auto;
`,vn=r.Ay.div`
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
`,kn=r.Ay.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Cn=r.Ay.div`
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
`,jn=r.Ay.span`
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
`,Sn=r.Ay.div`
  position: relative;
`,An=({panelWidth:e,toolbarOffset:t,minimized:n,setMinimized:o,menuExpanded:r,setMenuExpanded:a,mobileActive:s})=>(0,d.jsxs)($n,{toolbarOffset:t,barWidth:e,minimized:n,mobileActive:s,children:[(0,d.jsx)(Mn,{type:"button",title:r?"Collapse sessions menu":"Expand sessions menu","aria-label":r?"Collapse sessions menu":"Expand sessions menu","data-sidebar-toggle":"sessions",onClick:()=>a(!r),children:(0,d.jsx)(i.ND1,{})}),(0,d.jsxs)(En,{children:[(0,d.jsx)(i.Ojn,{}),"Chat"]}),(0,d.jsx)(Tn,{children:(0,d.jsx)(zn,{title:n?"Restore chat panel":"Minimize chat panel",onClick:()=>o(!n),children:n?(0,d.jsx)(i.mkN,{}):(0,d.jsx)(i.prK,{})})})]}),$n=r.Ay.div`
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

    && ${pe.K} svg {
      color: #fff !important;
    }

    && ${pe.K}:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`,En=r.Ay.div`
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
`,Tn=r.Ay.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 35px;
`,zn=(0,r.Ay)(pe.K)`
  @media (max-width: 768px) {
    display: none !important;
  }
`,Mn=r.Ay.button`
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
`,Nn=({minimized:e,setMinimized:t,menuExpanded:n,setMenuExpanded:r})=>{const{sessions:a,currentSessionId:s,createNewSession:l,loadSession:c,deleteSession:p,removeSession:u}=Zt(),x=o.useRef(null),h=()=>{window.innerWidth<=768&&r(!1)};return o.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!n)return;const o=e.target;o instanceof Node&&(null===(t=x.current)||void 0===t||!t.contains(o))&&(o instanceof Element&&o.closest('[data-sidebar-toggle="sessions"]')||r(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n,r]),(0,d.jsxs)(Dn,{ref:x,expanded:n,children:[(0,d.jsxs)(pe.K,{expanded:n,title:"Menu",onClick:()=>r(!n),children:[(0,d.jsx)(i.ND1,{}),n&&(0,d.jsx)("span",{children:"Sessions"})]}),e&&(0,d.jsxs)(pe.K,{expanded:n,title:"Expand Chat",onClick:()=>{t(!e),h()},children:[(0,d.jsx)(i.Ojn,{}),n&&(0,d.jsx)("span",{children:"Expand Chat"})]}),(0,d.jsxs)(pe.K,{expanded:n,onClick:()=>{l(),h()},children:[(0,d.jsx)(i.GGD,{}),n&&(0,d.jsx)("span",{children:"New Chat"})]}),(0,d.jsx)(On,{disabled:!n,children:a.map(e=>(0,d.jsxs)(Pn,{children:[(0,d.jsx)(Rn,{active:s===e.id,onClick:()=>{c(e.id),h()},children:e.title}),(0,d.jsx)(In,{onClick:t=>{t.stopPropagation(),p(e.id),h()},children:(0,d.jsx)(i.IXo,{size:12})})]},e.id))})]})},Dn=r.Ay.div`
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
`,On=r.Ay.div`
  display: ${e=>e.disabled?"none":"flex"};
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,Rn=r.Ay.div`
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
`,Pn=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,In=r.Ay.button`
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
`,Ln="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const Fn=({explorerExpanded:e,setExplorerExpanded:t})=>{var n;const{selectedDate:r,setSelectedDate:i}=(0,ce.M)(),{user:a}=(0,oe.o)(),s=null!==(n=null===a||void 0===a?void 0:a.uid)&&void 0!==n?n:"",{entries:l,fetchEntries:c,addEntry:p,updateEntry:u,updateEntryDate:x,renameTag:h,deleteTag:g,addTagToEntries:m,removeTagFromEntries:f,applyEntries:b,undoLastChange:y,redoLastChange:w,canUndo:k,canRedo:C}=ne((null===a||void 0===a?void 0:a.uid)||""),{searchContent:j,setSearchContent:S,fuzzySearchEnabled:A,setFuzzySearchEnabled:$,selectedTag:E,setSelectedTag:T,systemTags:z,availableTags:M,pickerTags:N,visibleEntries:D}=Y(l),O=o.useMemo(()=>(e=>{if(!e)return[];try{const t=localStorage.getItem(`mavis-ai-web:unpinned-tags:${e}`);if(null===t)return[];const n=JSON.parse(t);return Array.isArray(n)&&n.every(e=>"string"===typeof e)?Array.from(new Set(n)):(console.error("Stored tag pin preferences must be an array of strings."),[])}catch(t){return console.error("Failed to load tag pin preferences.",t),[]}})(s),[s]),[R,P]=o.useState(()=>({userId:s,tags:O,loaded:!1})),I=R.userId===s?R.tags:O,L=R.userId===s&&R.loaded;o.useEffect(()=>{let e=!0;return(async()=>{if(s)try{const t=await async function(e){const t=await(0,Z.x7)((0,Z.H9)(Q.OO,"users",e,"settings","tagPins"));if(!t.exists())return null;const n=t.data().unpinnedTags;if(!Array.isArray(n)||!n.every(e=>"string"===typeof e))throw new Error("Stored unpinned tag preferences must be an array of strings.");return Array.from(new Set(n))}(s),n=null!==t&&void 0!==t?t:O;null===t&&n.length>0&&await de(s,n),e&&P({userId:s,tags:n,loaded:!0})}catch(t){console.error("Failed to load tag pin preferences from Firebase.",t),e&&P({userId:s,tags:O,loaded:!0})}else P({userId:s,tags:[],loaded:!0})})(),()=>{e=!1}},[s,O]);const F=async e=>{const t=Array.from(new Set(e));if(!s)throw new Error("Cannot save tag pin preferences without an authenticated user.");await de(s,t),P({userId:s,tags:t,loaded:!0})},[K,U]=o.useState(null),[J,q]=o.useState([]),W=o.useRef(null),G=o.useRef(null),[_,V]=o.useState(0),[X,ee]=o.useState(0),te=o.useRef(null),[ae,le]=o.useState(0),[pe,ue]=o.useState(0),[xe,ge]=o.useState(!1),[me,fe]=o.useState(!1),[be,ye]=o.useState(!1),[we,ve]=o.useState("notes"),[ke,Ce]=o.useState(!0),je=o.useCallback(e=>{const{clientWidth:t,scrollLeft:n}=e.currentTarget;if(0===t)return;const o=n>=t/2?"chat":"notes";ve(e=>e===o?e:o)},[]),Se=o.useMemo(()=>l.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[l]),Ae=o.useMemo(()=>l.filter(e=>H(e.content).includes("trash")).map(e=>e.id),[l]),$e=o.useMemo(()=>J.filter(e=>Ae.includes(e)),[J,Ae]);o.useLayoutEffect(()=>{const e=()=>{var e;const t=te.current,n=document.getElementById("header-portal");le(null!==(e=null===t||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0),ue(t&&n?t.getBoundingClientRect().left-n.getBoundingClientRect().left:0)};e();const t=new ResizeObserver(e);return te.current&&t.observe(te.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[e,xe,me,be]),o.useLayoutEffect(()=>{const e=()=>{var e;const t=G.current,n=document.getElementById("header-portal");V(null!==(e=null===t||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0),ee(t&&n?t.getBoundingClientRect().left-n.getBoundingClientRect().left:0)};e();const t=new ResizeObserver(e);return G.current&&t.observe(G.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[e,xe,me,be]);const Ee=o.useCallback(e=>{q(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),Te=o.useCallback(()=>{q(D.map(e=>e.id))},[D]),ze=o.useCallback(()=>{q([])},[]);o.useEffect(()=>{q(e=>e.filter(e=>l.some(t=>t.id===e)))},[l]);const Me=o.useMemo(()=>l.filter(e=>J.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[l,J]),Ne=o.useMemo(()=>l.filter(e=>J.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[l,J]),De=o.useCallback((e,t)=>{W.current={id:e,textarea:t}},[]),Oe=o.useCallback((e,t)=>{const n=W.current;(null===n||void 0===n?void 0:n.id)===e&&n.textarea===t&&(W.current=null)},[]),Re=o.useCallback(()=>{const e=W.current;if(null!==e&&void 0!==e&&e.textarea.isConnected)return{entryId:e.id,value:e.textarea.value,textarea:e.textarea};const t=l.find(e=>e.id===J[0]);if(!t)return null;const n=se(t.content,B);return{entryId:t.id,value:n.text||"",textarea:null}},[l,J]),Pe=o.useCallback(async(e,t)=>{if(ke)throw new Error("Unlock note editing before using the AI assistant.");const n=l.find(t=>t.id===e);if(!n)throw new Error("The note selected for AI editing could not be found.");const o=B(n.content)?JSON.parse(n.content):{...ie,text:n.content},r=o&&"object"===typeof o?o:{...ie,text:n.content};await u(e,JSON.stringify({...r,text:t}))},[l,ke,u]),Ie=function({userId:e,getNoteContext:t,onContentChange:n}){const[r,i]=(0,o.useState)(!1),[a,s]=(0,o.useState)(!1),[l,d]=(0,o.useState)(""),[c,p]=(0,o.useState)(""),[u,x]=(0,o.useState)(!1),[h,g]=(0,o.useState)(""),m=(0,o.useRef)({entryId:null,value:"",selectionStart:null,selectionEnd:null}),f=()=>{s(!1),d(""),p(""),g("")};return{aiLoading:r,assistantOpen:a,instruction:l,setInstruction:d,apiKeyInput:c,setApiKeyInput:p,requiresApiKey:u,error:h,openAssistant:async()=>{var n,o,r,i,a;const l=t(),c=null===l||void 0===l?void 0:l.textarea,u=null!==(n=null!==(o=null===c||void 0===c?void 0:c.value)&&void 0!==o?o:null===l||void 0===l?void 0:l.value)&&void 0!==n?n:"",h=null!==(r=null===c||void 0===c?void 0:c.selectionStart)&&void 0!==r?r:null,f=null!==(i=null===c||void 0===c?void 0:c.selectionEnd)&&void 0!==i?i:null;if(m.current={entryId:null!==(a=null===l||void 0===l?void 0:l.entryId)&&void 0!==a?a:null,value:u,selectionStart:h,selectionEnd:f},s(!0),d(""),p(""),g(""),!l)return x(!1),void g("Select a note or start editing a note to use the AI assistant.");if(!e)return x(!1),void g("Sign in to use the AI assistant.");try{const t=await Jt(e);x(!t)}catch(b){console.error("Failed to load the OpenAI API key.",b),x(!0),g("Could not load the saved API key. Enter it again to continue.")}},closeAssistant:f,clearInstruction:()=>{d(""),g("")},submitInstruction:async()=>{if(r)return;const t=l.trim();if(!t)return void g("Enter an instruction for the note.");if(!e)return void g("Sign in to use the AI assistant.");const{entryId:o,value:a,selectionStart:s,selectionEnd:d}=m.current;if(o){i(!0),g("");try{let r;if(u){if(r=c.trim(),!r)return void g("Enter your OpenAI API key.");await Ht(e,r),x(!1),p("")}else r=await Jt(e);if(null!==s&&null!==d&&s!==d){const i=a.substring(s,d),l=await qt(e,Ln,t,i,"gpt-6-luna",r),c=a.substring(0,s)+l.output_text.trim()+a.substring(d);await n(o,c)}else{const i=await qt(e,Ln,t,a,"gpt-6-luna",r);await n(o,`${a}\n\n${i.output_text.trim()}`)}f()}catch(h){console.error("AI note request failed.",h),g(h instanceof Error?h.message:"AI request failed.")}finally{i(!1)}}else g("Select a note or start editing a note to use the AI assistant.")}}}({userId:null===a||void 0===a?void 0:a.uid,getNoteContext:Re,onContentChange:Pe});o.useEffect(()=>{c()},[c]);const Le=()=>{window.scrollTo({top:0,behavior:"smooth"})},Fe=async()=>{if(ke||!J.length)return;const e=new Set($e),t=J.filter(t=>!e.has(t));if($e.length){const e=`${$e.length} selected ${1===$e.length?"note":"notes"}`,n=`${t.length} selected ${1===t.length?"note":"notes"}`,o=t.length?`Move ${n} to Trash and permanently delete ${e} from Trash?`:`Permanently delete ${e} from Trash?`;if(!window.confirm(o))return}const n=l.filter(e=>t.includes(e.id)).map(e=>{const t=se(e.content,B),n=Array.from(new Set([...t.tags.filter(e=>"archive"!==e),"trash"]));return{...e,content:JSON.stringify({...t,tags:n})}});await b(n,$e)},Ke=(o.useMemo(()=>l.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[l]),u);return(0,d.jsx)(Kn,{children:(0,d.jsxs)(Xt,{uid:a?a.uid:"",selectedNotesText:Me,noteTitles:Ne,clearSelectedNotes:ze,entries:l,children:[(0,d.jsxs)(re,{children:[(0,d.jsx)(v,{selectedTag:E,selectedDate:r,searchContent:j,fuzzySearchEnabled:A,onSearchChange:S,onToggleFuzzySearch:()=>$(e=>!e),onDateChange:e=>{i(e.target.value)},onAddNote:async function(){const e="all"!==E?[E]:[];await p({date:r,content:JSON.stringify({...ie,tags:e})}),Le()},onCopyAllNotes:async()=>{const e=Me.length>0?Me:D.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:Te,onClearAll:ze,onArchiveSelected:async()=>{try{await(async()=>{if(ke||!J.length)return;const e=l.filter(e=>J.includes(e.id)).map(e=>{const t=se(e.content,B);return{...e,content:JSON.stringify({...t,tags:(n=t.tags,n.includes("archive")?n.filter(e=>"archive"!==e):[...n.filter(e=>"trash"!==e),"archive"])})};var n});await b(e)})()}catch(e){console.error("Failed to archive selected notes.",e)}},onDeleteSelected:async()=>{try{await Fe()}catch(e){console.error("Failed to delete selected notes.",e)}},onUndo:async()=>{try{await y()}catch(e){console.error("Failed to undo the last note change.",e)}},onRedo:async()=>{try{await w()}catch(e){console.error("Failed to redo the last note change.",e)}},canUndo:k,canRedo:C,noteAssistant:Ie,selectedCount:J.length,explorerExpanded:e,setExplorerExpanded:t,panelWidth:_,toolbarOffset:X,minimized:xe,setMinimized:ge,mobileActive:"notes"===we,notesLocked:ke,onToggleNotesLock:()=>{if(!ke){const e=document.activeElement;e instanceof HTMLElement&&(e.isContentEditable||e instanceof HTMLTextAreaElement)&&e.blur()}Ce(e=>!e)}}),(0,d.jsx)(An,{onClearAll:ze,panelWidth:ae,toolbarOffset:pe,minimized:me,setMinimized:fe,menuExpanded:be,setMenuExpanded:ye,mobileActive:"chat"===we})]}),(0,d.jsxs)(Bn,{onScroll:je,children:[(0,d.jsxs)(Un,{role:"region","aria-label":"Notes",children:[(0,d.jsx)(he,{systemTags:z,customTags:M,unpinnedTags:I,onToggleTagPin:async e=>{!ke&&L&&await F(I.includes(e)?I.filter(t=>t!==e):[...I,e])},selectedTag:E,setSelectedTag:T,explorerExpanded:e,setExplorerExpanded:t,minimized:xe,setMinimized:ge,selectedNoteIds:J,onRenameTag:async(e,t)=>{if(!ke){if(await h(e,t),I.includes(e)){const n=I.filter(t=>t!==e);n.includes(t)||n.push(t),await F(n)}E===e&&T(t)}},onDeleteTag:async e=>{ke||(await g(e),I.includes(e)&&await F(I.filter(t=>t!==e)),E===e&&T("all"))},onAddTagToSelected:async e=>{ke||await m(J,e)},onRemoveTagFromSelected:async e=>{ke||await f(J,e)},trashCount:Ae.length,selectedTrashCount:$e.length,onDeleteSelectedNotes:Fe,onRestoreSelectedTrash:async()=>{ke||await f($e,"trash")},onRestoreAllTrash:async()=>{ke||await f(Ae,"trash")},onEmptyTrash:async()=>{if(ke||!Ae.length)return;window.confirm(`Permanently delete all ${Ae.length} note${1===Ae.length?"":"s"} from Trash? You can undo this while the notes view is open.`)&&await b([],Ae)},actionsLocked:ke,tagPreferencesLoading:!L}),(0,d.jsx)(qn,{ref:G,minimized:xe,otherMinimized:me,children:!xe&&(0,d.jsx)(Rt,{entries:D,searchContent:j,fuzzySearchEnabled:A,pickerTags:N,updateEntryDate:async(e,t)=>{ke||await x(e,t)},onHoverCard:U,onChangeEntry:Ke,selectedNoteIds:J,onToggleSelection:Ee,templateOptions:Se,notesLocked:ke,onEditorFocus:De,onEditorBlur:Oe})})]}),(0,d.jsxs)(Hn,{role:"region","aria-label":"AI sessions",children:[(0,d.jsx)(Jn,{ref:te,minimized:me,otherMinimized:xe,children:(0,d.jsx)(en,{uid:(null===a||void 0===a?void 0:a.uid)||"",selectedNotesText:Me,noteTitles:Ne,notesCount:J.length,clearSelectedNotes:ze})}),(0,d.jsx)(Nn,{minimized:me,setMinimized:fe,menuExpanded:be,setMenuExpanded:ye})]})]})]})})},Kn=r.Ay.div`
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
`,Bn=r.Ay.div`
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
`,Un=r.Ay.div`
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
`,Hn=r.Ay.div`
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
`,Jn=r.Ay.div`
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
`,qn=r.Ay.div`
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
//# sourceMappingURL=dashboard.e57edbc5.chunk.js.map