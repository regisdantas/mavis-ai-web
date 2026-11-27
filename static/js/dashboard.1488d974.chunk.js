"use strict";(Array.isArray(globalThis.webpackChunkmavis_ai_web)?globalThis.webpackChunkmavis_ai_web:globalThis.webpackChunkmavis_ai_web=[]).push([[945],{5881(e,t,n){n.r(t),n.d(t,{default:()=>vr});var r=n(5043),a=n(2816),i=n(1009),o=n(4960),s=n(7149),d=n(7950),l=n(579);const c=({instruction:e,setInstruction:t,apiKeyInput:n,setApiKeyInput:r,requiresApiKey:a,error:o,loading:s,onClear:c,onSend:w,onClose:k,dropdownRef:j})=>(0,d.createPortal)((0,l.jsxs)(p,{ref:j,role:"dialog","aria-label":"AI assistant",onMouseDown:e=>e.stopPropagation(),children:[(0,l.jsxs)(u,{children:[(0,l.jsx)(h,{children:"AI assistant"}),(0,l.jsx)(x,{type:"button","data-keepeditor":"true","aria-label":"Close AI assistant",onClick:k,children:(0,l.jsx)(i.yGN,{})})]}),a&&(0,l.jsx)(m,{type:"password","data-keepeditor":"true",autoComplete:"off",placeholder:"OpenAI API key","aria-label":"OpenAI API key",value:n,onChange:e=>r(e.target.value)}),(0,l.jsx)(g,{"data-keepeditor":"true",autoFocus:!0,rows:5,placeholder:"What should I change? For example: fix grammar, summarize, or rewrite professionally.","aria-label":"AI instruction",value:e,onChange:e=>t(e.target.value),onKeyDown:e=>{if("Escape"===e.key)return void k();const t="function"===typeof window.matchMedia?window.matchMedia("(max-width: 768px)").matches:window.innerWidth<=768;"Enter"!==e.key||t||e.ctrlKey||(e.preventDefault(),w())}}),o&&(0,l.jsx)(f,{role:"alert",children:o}),(0,l.jsxs)(b,{children:[(0,l.jsx)(v,{type:"button","data-keepeditor":"true",onClick:c,disabled:s,children:"Clear"}),(0,l.jsxs)(y,{type:"button","data-keepeditor":"true",onClick:w,disabled:s||!e.trim(),children:[(0,l.jsx)(i.kGk,{}),s?"Sending...":"Send"]})]})]}),document.body),p=a.Ay.div`
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
  border: 1px solid var(--mavis-brand-border);
  border-radius: 14px;
  background: var(--mavis-surface);
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
`,u=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,h=a.Ay.h2`
  margin: 0;
  color: var(--mavis-text);
  font-size: 16px;
  font-weight: 600;
`,x=a.Ay.button`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--mavis-muted);
  cursor: pointer;

  &:hover {
    background: var(--mavis-surface-hover);
  }
`,m=a.Ay.input`
  width: 100%;
  min-height: 40px;
  padding: 10px 12px;
  border: 1px solid var(--mavis-border);
  border-radius: 8px;
  background: var(--mavis-input);
  color: var(--mavis-text);
  font: inherit;

  &:focus {
    outline: 2px solid rgba(91, 75, 216, 0.3);
    border-color: var(--mavis-brand);
  }
`,g=a.Ay.textarea`
  width: 100%;
  min-height: 120px;
  max-height: 40vh;
  padding: 12px;
  resize: vertical;
  border: 1px solid var(--mavis-border);
  border-radius: 8px;
  background: var(--mavis-input);
  color: var(--mavis-text);
  font: inherit;
  line-height: 1.4;

  &:focus {
    outline: 2px solid rgba(91, 75, 216, 0.3);
    border-color: var(--mavis-brand);
  }
`,f=a.Ay.p`
  margin: 0;
  color: var(--mavis-danger-text);
  font-size: 13px;
`,b=a.Ay.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`,v=a.Ay.button`
  min-width: 64px;
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid var(--mavis-border);
  border-radius: 8px;
  background: var(--mavis-surface-subtle);
  color: var(--mavis-text-secondary);
  font: inherit;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--mavis-surface-hover);
  }

  &:disabled {
    background: var(--mavis-surface-hover);
    color: var(--mavis-disabled);
    cursor: not-allowed;
    opacity: 1;
  }
`,y=a.Ay.button`
  display: flex;
  min-width: 84px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 14px;
  border: 0;
  border-radius: 8px;
  background: var(--mavis-brand);
  color: #fff;
  font: inherit;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--mavis-brand-strong);
  }

  &:disabled {
    background: var(--mavis-disabled);
    color: #fff;
    cursor: not-allowed;
    opacity: 1;
  }
`,w=({selectedTag:e,selectedDate:t,searchContent:n,fuzzySearchEnabled:a,onSearchChange:d,onToggleFuzzySearch:p,onDateChange:u,onAddNote:h,onCopyAllNotes:x,onSelectAll:m,onClearAll:g,onArchiveSelected:f,onDeleteSelected:b,onUndo:v,onRedo:y,canUndo:w,canRedo:M,noteAssistant:I,selectedCount:L,explorerExpanded:F,setExplorerExpanded:K,panelWidth:B,toolbarOffset:U,minimized:H,setMinimized:J,mobileActive:W,notesLocked:G,onToggleNotesLock:q})=>{const[_,Y]=r.useState(!1),V=r.useRef(null),Z=r.useRef(null),X=r.useRef(null),Q=r.useRef(null);r.useEffect(()=>{if(!_)return;const e=e=>{var t;const n=e.target;n instanceof Node&&null!==(t=V.current)&&void 0!==t&&t.contains(n)||Y(!1)};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[_]),r.useEffect(()=>{var e;_&&(null===(e=Z.current)||void 0===e||e.focus())},[_]),r.useEffect(()=>{W||Y(!1)},[W]),r.useEffect(()=>{if(!I.assistantOpen)return;const e=e=>{var t,n;const r=e.target;r instanceof Node&&(null!==(t=X.current)&&void 0!==t&&t.contains(r)||null!==(n=Q.current)&&void 0!==n&&n.contains(r))||I.closeAssistant()};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[I]);const ee=L>0?g:m,te=""===n.trim()?e.charAt(0).toUpperCase()+e.slice(1):"Search";return(0,l.jsxs)(k,{role:"toolbar","aria-label":`${te} notes tools`,title:`${te} notes`,toolbarOffset:U,barWidth:B,minimized:H,mobileActive:W,children:[(0,l.jsxs)(A,{$searchExpanded:_,children:[!H&&(0,l.jsx)(R,{type:"button",title:"Minimize notes panel","aria-label":"Minimize notes panel",onClick:()=>J(!0),children:(0,l.jsx)(i.prK,{})}),!H&&(0,l.jsx)(E,{children:te})]}),(0,l.jsx)(T,{children:(0,l.jsxs)(z,{$minimized:H,"data-search-expanded":_,children:[(0,l.jsx)(O,{type:"button",title:F?"Collapse notes menu":"Expand notes menu","aria-label":F?"Collapse notes menu":"Expand notes menu","data-sidebar-toggle":"notes",onClick:()=>K(!F),children:(0,l.jsx)(i.ND1,{})}),(0,l.jsxs)(j,{ref:V,$searchExpanded:_,children:[(0,l.jsx)(C,{$searchExpanded:_,type:"button","aria-label":"Open search","aria-expanded":_,tabIndex:_?-1:0,onClick:()=>Y(!0),children:(0,l.jsx)(i.CKj,{})}),(0,l.jsx)("input",{ref:Z,"aria-hidden":!_,tabIndex:_?0:-1,placeholder:"Search",value:n,onChange:e=>d(e.target.value),onKeyDown:e=>{"Enter"!==e.key&&"Escape"!==e.key||(e.preventDefault(),e.currentTarget.blur(),Y(!1))}}),(0,l.jsx)(S,{$searchExpanded:_,$active:a,type:"button","aria-label":a?"Disable fuzzy search":"Enable fuzzy search","aria-pressed":a,title:a?"Disable fuzzy search":"Enable fuzzy search",tabIndex:_?0:-1,onClick:p,children:(0,l.jsx)(i.FrA,{})}),(0,l.jsx)($,{$searchExpanded:_,type:"button","aria-label":"Clear search",title:"Clear search",tabIndex:_?0:-1,disabled:!n,onClick:()=>d(""),children:(0,l.jsx)(s.rOP,{})})]}),(0,l.jsx)(P,{type:"button",$active:G,title:G?"Unlock note editing":"Lock note editing","aria-label":G?"Unlock note editing":"Lock note editing","aria-pressed":G,onClick:q,children:G?(0,l.jsx)(i.F5$,{}):(0,l.jsx)(i.K4k,{})}),(0,l.jsx)(N,{type:"button",$tone:"add",title:"Add note","aria-label":"Add note",onClick:h,children:(0,l.jsx)(o.n4h,{})}),(0,l.jsx)(N,{ref:X,type:"button",$tone:"ai",title:"AI assistant","aria-label":"AI assistant","aria-expanded":I.assistantOpen,disabled:G,onMouseDown:e=>e.preventDefault(),onClick:()=>{I.assistantOpen?I.closeAssistant():I.openAssistant()},children:(0,l.jsx)(i.Ojn,{})}),(0,l.jsx)(N,{type:"button",$tone:"copy",title:"Copy selected or visible notes","aria-label":"Copy selected or visible notes",onClick:x,children:(0,l.jsx)(i.nxz,{})}),(0,l.jsx)(N,{type:"button",$tone:"redo",title:"Redo last note change","aria-label":"Redo last note change",disabled:G||!M,onClick:y,children:(0,l.jsx)(i.VI6,{})}),(0,l.jsx)(N,{type:"button",$tone:"undo",title:"Undo last note change","aria-label":"Undo last note change",disabled:G||!w,onClick:v,children:(0,l.jsx)(i.cO3,{})}),(0,l.jsx)(D,{"aria-hidden":"true"}),(0,l.jsx)(N,{type:"button",$selected:L>0,$tone:"select",title:L>0?"Deselect all notes":"Select all visible notes","aria-label":L>0?"Deselect all notes":"Select all visible notes","aria-pressed":L>0,onClick:ee,children:L>0?(0,l.jsx)(i.TG1,{}):(0,l.jsx)(i.NLe,{})}),(0,l.jsx)(N,{type:"button",$tone:"archive",title:"Archive selected notes","aria-label":"Archive selected notes",disabled:G||0===L,onClick:f,children:(0,l.jsx)(i.OZ2,{})}),(0,l.jsx)(N,{type:"button",$tone:"trash",$rightSpace:!0,title:"Delete selected notes","aria-label":"Delete selected notes",disabled:G||0===L,onClick:b,children:(0,l.jsx)(i.IXo,{})})]})}),I.assistantOpen&&(0,l.jsx)(c,{instruction:I.instruction,setInstruction:I.setInstruction,apiKeyInput:I.apiKeyInput,setApiKeyInput:I.setApiKeyInput,requiresApiKey:I.requiresApiKey,error:I.error,loading:I.aiLoading,onClear:I.clearInstruction,onSend:()=>{I.submitInstruction()},onClose:I.closeAssistant,dropdownRef:Q})]})},k=a.Ay.div`
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
  border-bottom: 1px solid var(--mavis-brand-border);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: var(--mavis-panel);

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
`,j=a.Ay.div`
  display: flex;
  flex: ${({$searchExpanded:e})=>e?"0 0 250px":"0 0 30px"};
  width: ${({$searchExpanded:e})=>e?"250px":"30px"};
  height: 30px;
  align-items: center;
  margin: 0 4px;
  overflow: hidden;
  border-radius: ${({$searchExpanded:e})=>e?"0 0 10px 10px":"10px"};
  background: ${({$searchExpanded:e})=>e?"var(--mavis-brand)":"transparent"};
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
    color: var(--mavis-text-inverse);
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
    background: ${({$searchExpanded:e})=>e?"var(--mavis-surface)":"transparent"};
    box-shadow: ${({$searchExpanded:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

    input {
      padding: ${({$searchExpanded:e})=>e?"0 10px":"0"};
      color: var(--mavis-text);
    }

    input::placeholder {
      color: var(--mavis-muted);
    }
  }

  @media (max-width: 350px) {
    flex-basis: ${({$searchExpanded:e})=>e?"calc(100% - 40px)":"16px"};
    width: ${({$searchExpanded:e})=>e?"calc(100% - 40px)":"16px"};
    min-width: ${({$searchExpanded:e})=>e?"0":"16px"};
  }
`,C=a.Ay.button`
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
  color: ${({theme:e})=>e.brand||"#5b4bd8"};
  opacity: ${({$searchExpanded:e})=>e?0:1};
  pointer-events: ${({$searchExpanded:e})=>e?"none":"auto"};
  cursor: pointer;

  @media (max-width: 768px) {
    width: ${({$searchExpanded:e})=>e?"0":"17px"};
    flex-basis: ${({$searchExpanded:e})=>e?"0":"17px"};
    color: #bfdbfe;
  }

  @media (max-width: 350px) {
    width: ${({$searchExpanded:e})=>e?"0":"16px"};
    flex-basis: ${({$searchExpanded:e})=>e?"0":"16px"};
  }
`,$=a.Ay.button`
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
  color: ${({theme:e})=>e.brand||"#5b4bd8"};
  opacity: ${({$searchExpanded:e})=>e?1:0};
  pointer-events: ${({$searchExpanded:e})=>e?"auto":"none"};
  transition: flex-basis 220ms ease, opacity 160ms ease, margin 220ms ease;

  &:disabled {
    color: ${({theme:e})=>e.disabled||"#9ca3af"};
    cursor: default;
  }

  @media (max-width: 768px) {
    color: #bfdbfe;
  }
`,S=a.Ay.button`
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
  background: ${({$active:e})=>e?"var(--mavis-brand-soft)":"transparent"};
  color: ${({theme:e,$active:t})=>t?e.brandBlue||"#7185e8":e.brand||"#5b4bd8"};
  opacity: ${({$searchExpanded:e})=>e?1:0};
  pointer-events: ${({$searchExpanded:e})=>e?"auto":"none"};
  transition: flex-basis 220ms ease, opacity 160ms ease, margin 220ms ease;

  @media (max-width: 768px) {
    background: ${({$active:e})=>e?"rgba(196, 181, 253, 0.22)":"transparent"};
    color: ${({$active:e})=>e?"#c4b5fd":"#bfdbfe"};
  }
`,A=a.Ay.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  height: 30px;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: ${({$searchExpanded:e})=>e?"none":"flex"};
  }
`,E=a.Ay.div`
  display: flex;
  min-width: 0;
  max-width: 160px;
  flex: 0 1 auto;
  align-items: center;
  margin: 0 8px;
  overflow: hidden;
  color: ${({theme:e})=>e.textSecondary||"#514d68"};
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1260px) {
    display: none;
  }
`,T=a.Ay.div`
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
`,z=a.Ay.div`
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
`,M=(e,t,n=!1,r)=>{const a=(null===r||void 0===r?void 0:r.brand)||"#5b4bd8",i=(null===r||void 0===r?void 0:r.brandStrong)||"#4c3bc8",o=(null===r||void 0===r?void 0:r.brandBlue)||"#7185e8",s=(null===r||void 0===r?void 0:r.danger)||"#dc2626",d=(null===r||void 0===r?void 0:r.textMuted)||"#716d86",l=(null===r||void 0===r?void 0:r.textSecondary)||"#4b4960";return"undo"===e?n?"#fecaca":s:"redo"===e?n?"#bfdbfe":o:"archive"===e?n?"#c4b5fd":a:"trash"===e?n?"#fecaca":s:"ai"===e||"add"===e?n?"#c4b5fd":a:"search"===e?n?"#bfdbfe":a:"copy"===e?n?"#e2ddf5":d:"select"===e?t?n?"#c4b5fd":i:n?"#bfdbfe":a:n?"#fff":l},N=a.Ay.button`
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
  color: ${({theme:e,$tone:t,$selected:n})=>M(t,n,!1,e)};
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--mavis-brand-soft);
  }

  &:disabled {
    color: ${({theme:e})=>e.disabled||"#9ca3af"};
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
    color: ${({theme:e,$tone:t,$selected:n})=>M(t,n,!0,e)};

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.15);
    }

    &:disabled {
      color: ${({theme:e})=>e.disabled||"#9ca3af"};
      opacity: 1;
    }
  }

  @media (max-width: 350px) {
    width: 17px;
    flex-basis: 17px;
  }
`,D=a.Ay.span`
  display: block;
  width: 1px;
  height: 20px;
  flex: 0 0 1px;
  margin: 0 5px;
  background: var(--mavis-brand-border);

  @media (max-width: 768px) {
    width: 1px;
    height: 18px;
    flex-basis: 1px;
    margin: 0;
    background: rgba(255, 255, 255, 0.45);
  }
`,P=a.Ay.button`
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
  color: ${({theme:e,$active:t})=>t?e.brand||"#5b4bd8":e.textSecondary||"#4b4960"};
  cursor: pointer;

  svg {
    color: inherit;
  }

  &:hover {
    background: var(--mavis-brand-soft);
  }

  @media (max-width: 768px) {
    width: 16px;
    flex-basis: 16px;
    margin: 0;
    border-radius: 7px;
    color: ${({$active:e})=>e?"#c4b5fd":"#fff"};

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  @media (max-width: 350px) {
    width: 17px;
    flex-basis: 17px;
  }
`,R=(a.Ay.div`
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
`,a.Ay.button`
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
  color: ${({theme:e})=>e.disabled||"#9ca3af"};
  cursor: pointer;

  &:hover {
    background: var(--mavis-surface-hover);
  }

  @media (max-width: 768px) {
    display: none;
  }
`),O=a.Ay.button`
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
`;var I=n(2815),L=n(4966),F=n(2127);const K=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},B=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},U=e=>{if(!K(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))},H=/[\p{L}\p{N}]+/gu,J=e=>Array.from(e.matchAll(H),e=>{var t;return{value:e[0],index:null!==(t=e.index)&&void 0!==t?t:0}}),W=e=>{if(!K(e))return e;const t=JSON.parse(e);if("object"!==typeof(n=t)||null===n||Array.isArray(n))return e;var n;return["string"===typeof t.title?t.title:"","string"===typeof t.text?t.text:"",Array.isArray(t.tags)?t.tags.filter(e=>"string"===typeof e).join(" "):""].filter(Boolean).join("\n")},G=(e,t)=>{if(t.includes(e))return!0;if(e.length<3)return!1;if(((e,t)=>{let n=0;for(const r of t)if(r===e[n]&&(n+=1,n===e.length))return!0;return 0===e.length})(e,t))return!0;return((e,t,n)=>{if(Math.abs(e.length-t.length)>n)return!1;let r=Array.from({length:t.length+1},(e,t)=>t);for(let a=1;a<=e.length;a+=1){const n=[a];for(let i=1;i<=t.length;i+=1){const o=e[a-1]===t[i-1]?0:1;n[i]=Math.min(n[i-1]+1,r[i]+1,r[i-1]+o)}r=n}return r[t.length]<=n})(e,t,e.length>=8?2:1)},q=(e,t,n=!1)=>{const r=t.trim();if(!r)return[];const a=((e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase(),a=[];let i=0;for(;i<n.length;){const e=n.indexOf(r,i);if(e<0)break;a.push({start:e,end:e+r.length}),i=e+r.length}return a})(e,r);if(a.length>0||!n)return a;const i=J(r).map(e=>e.value.toLowerCase()),o=J(e),s=[];return i.forEach(e=>{o.forEach(t=>{const n=t.value.toLowerCase();if(!G(e,n))return;const r=n.indexOf(e);r>=0?s.push({start:t.index+r,end:t.index+r+e.length}):s.push({start:t.index,end:t.index+t.value.length})})}),(e=>[...e].sort((e,t)=>e.start-t.start||e.end-t.end).reduce((e,t)=>{const n=e[e.length-1];return n&&t.start<=n.end?n.end=Math.max(n.end,t.end):e.push({...t}),e},[]))(s)};function _(e){const[t,n]=r.useState(""),[a,o]=r.useState(!1),[s,d]=r.useState("favorite"),l=r.useMemo(()=>[{name:"all",icon:i.Vap,system:!0,position:"top"},{name:"favorite",icon:i.usP,system:!0,position:"top"},{name:"journal",icon:F.Fsq,system:!0,position:"top"},{name:"templates",icon:i.MRc,system:!0,position:"top"},{name:"prompts",icon:L.vTI,system:!0,position:"top"},{name:"other",icon:I.uoj,system:!0,position:"top"},{name:"archive",icon:i.OZ2,system:!0,position:"bottom"},{name:"trash",icon:i.IXo,system:!0,position:"bottom"}],[]),c=r.useMemo(()=>l.map(e=>e.name),[l]),p=r.useMemo(()=>Array.from(new Set(e.flatMap(e=>U(e.content)))).filter(e=>!c.includes(e)).sort(),[e,c]),u=r.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...p])).sort(),[p]),h=r.useCallback(e=>{const n=U(e.content),r=n.includes("trash"),i=n.includes("archive"),o=n.includes("templates"),d=n.includes("prompts");return""!==t.trim()?((e,t,n=!1)=>{const r=t.trim().toLowerCase();if(!r)return!0;if(e.toLowerCase().includes(r))return!0;if(!n)return!1;const a=J(r).map(e=>e.value),i=J(e).map(e=>e.value.toLowerCase());return a.length>0&&a.every(e=>i.some(t=>G(e,t)))})(W(e.content),t,a):"all"===s?!r&&!i:"favorite"===s?n.includes("favorite")&&!r&&!i:"journal"===s?n.includes("journal")&&!o&&!r&&!i:"templates"===s?o&&!r&&!i:"prompts"===s?d&&!r&&!i:"other"===s?!r&&!i&&!o&&!d&&!n.includes("journal"):"archive"===s?i&&!r:"trash"===s?r:n.includes(s)&&!r&&!i&&!o&&!d},[a,t,s]),x=r.useMemo(()=>e.filter(h),[e,h]);return{searchContent:t,setSearchContent:n,fuzzySearchEnabled:a,setFuzzySearchEnabled:o,selectedTag:s,setSelectedTag:d,systemTags:l,availableTags:p,pickerTags:u,visibleEntries:x,isEntryVisible:h}}var Y=n(8222),V=n.n(Y),Z=n(8046),X=n(1286);const Q=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),ee=e=>{const t=(0,Z.H9)(X.OO,"users",e);return(0,Z.rJ)(t,"entries")};function te(e){const[t,n]=r.useState([]),a=r.useRef(t),i=r.useRef([]),o=r.useRef([]),[,s]=r.useState(0),d=r.useRef(Promise.resolve()),l=r.useRef(e);r.useEffect(()=>{l.current!==e&&(l.current=e,a.current=[],n([]),i.current=[],o.current=[],s(e=>e+1))},[e]);const c=r.useCallback((t,n)=>{if(!e)return Promise.resolve();const r=d.current.then(async()=>{const r=new Map(n.map(e=>[e.id,e]));await Promise.all(t.map(async t=>{const n=r.get(t),a=await(async(e,t)=>{const n=ee(e);return(await(0,Z.GG)((0,Z.P)(n,(0,Z._M)("id","==",t)))).docs})(e,t);n?a.length?await Promise.all(a.map(t=>(0,Z.BN)((0,Z.H9)(X.OO,`users/${e}/entries/${t.id}`),n))):await(0,Z.gS)(ee(e),n):await Promise.all(a.map(t=>(0,Z.kd)((0,Z.H9)(X.OO,`users/${e}/entries/${t.id}`))))}))});return d.current=r.catch(()=>{}),r},[e]),p=r.useCallback(async(t,r=[],d=!0)=>{if(!e)return;const l=Array.from(new Set([...t.map(e=>e.id),...r]));if(!l.length)return;const p=new Set(l),u=a.current.filter(e=>p.has(e.id)),h=new Map(t.filter(e=>p.has(e.id)).map(e=>[e.id,e])),x=Array.from(h.values());if(u.length===x.length&&u.every(e=>{const t=h.get(e.id);return void 0!==t&&e.uid===t.uid&&e.content===t.content&&e.emoji===t.emoji&&e.date===t.date&&e.createdAt===t.createdAt}))return;const m=Q([...a.current.filter(e=>!p.has(e.id)),...x]);a.current=m,n(m),d&&(i.current.push({ids:l,before:u,after:x}),o.current=[],s(e=>e+1)),await c(l,x)},[c,e]),u=r.useCallback(async()=>{if(!e)return;const t=ee(e),r=(await(0,Z.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}}),i=Q(r);a.current=i,n(i)},[e]),h=r.useCallback(async({content:t,date:n,emoji:r})=>{if(!e)return null;const a={uid:e,id:V()(),content:t,date:n,...void 0===r?{}:{emoji:r},createdAt:(new Date).toISOString()};return await p([a]),a},[p,e]),x=r.useCallback(async(t,n)=>{if(!e)return;const r=a.current.find(e=>e.id===t);r&&await p([{...r,content:n}])},[p,e]),m=r.useCallback(async(t,n)=>{if(!e)return;const r=a.current.find(e=>e.id===t);r&&await p([{...r,emoji:n}])},[p,e]),g=r.useCallback(async t=>{e&&a.current.some(e=>e.id===t.id)&&await p([t])},[p,e]),f=r.useCallback(async(e,t)=>{const n=a.current.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}}).map(n=>{const r=JSON.parse(n.content);return{...n,content:JSON.stringify({...r,tags:(r.tags||[]).map(n=>n===e?t:n)})}});await p(n)},[p]),b=r.useCallback(async e=>{const t=a.current.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}}).map(t=>{const n=JSON.parse(t.content);return{...t,content:JSON.stringify({...n,tags:(n.tags||[]).filter(t=>t!==e)})}});await p(t)},[p]),v=r.useCallback(async(e,t)=>{const n=a.current.filter(t=>e.includes(t.id)).map(e=>{const n=JSON.parse(e.content);return{...e,content:JSON.stringify({...n,tags:Array.from(new Set([...n.tags||[],t]))})}});await p(n)},[p]),y=r.useCallback(async(e,t)=>{const n=a.current.filter(t=>e.includes(t.id)).map(e=>{const n=JSON.parse(e.content);return{...e,content:JSON.stringify({...n,tags:(n.tags||[]).filter(e=>e!==t)})}});await p(n)},[p]),w=r.useCallback(async(t,n)=>{if(!e)return;const r=a.current.find(e=>e.id===t);r&&await p([{...r,date:n}])},[p,e]),k=r.useCallback(async t=>{e&&await p([],[t])},[p,e]),j=r.useCallback(async()=>{const e=i.current.pop();if(!e)return;o.current.push(e),s(e=>e+1);const t=e.ids.filter(t=>!e.before.some(e=>e.id===t));await p(e.before,t,!1)},[p]),C=r.useCallback(async()=>{const e=o.current.pop();if(!e)return;i.current.push(e),s(e=>e+1);const t=e.ids.filter(t=>!e.after.some(e=>e.id===t));await p(e.after,t,!1)},[p]),$=i.current.length>0,S=o.current.length>0;return{entries:t,fetchEntries:u,addEntry:h,updateEntry:x,updateEntryEmoji:m,replaceEntry:g,deleteEntry:k,updateEntryDate:w,renameTag:f,deleteTag:b,addTagToEntries:v,removeTagFromEntries:y,applyEntries:p,undoLastChange:j,redoLastChange:C,canUndo:$,canRedo:S}}var ne=n(6625);const re=({children:e})=>{const t=document.getElementById("header-portal");return t?(0,d.createPortal)(e,t):null},ae={title:"",type:"record",tags:[],text:"",color:"#fff",pinned:!1,collapsed:!1},ie=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],oe={"#fff":"#242338","#ffffff":"#242338","#f8f9fa":"#2b2d3b","#ced4da":"#343b4b","#fff4b5":"#4a3e1a","#ffdcc8":"#4b3027","#ffcdd2":"#4b2831","#fadce6":"#472b38","#dcccfb":"#362c4c","#bbdefb":"#243849","#c8e6c9":"#273c2c","#b2dfdb":"#243c3b","#f3e5c8":"#463b2b","#d7ccc8":"#3c302d"},se=(e,t)=>{if(!t)return e;const n=e.trim().toLowerCase();return oe[n]||(e=>{const t=/^#([a-f\d]{3}|[a-f\d]{6})$/i.exec(e);if(!t)return"#292739";const n=t[1];return`#${(3===n.length?Array.from(n,e=>parseInt(`${e}${e}`,16)):(n.match(/.{2}/g)||[]).map(e=>parseInt(e,16))).map(e=>Math.round(.3*e).toString(16).padStart(2,"0")).join("")}`})(n)},de=(e,t)=>{const n=t(e)?JSON.parse(e):{...ae,text:e};return n&&"object"===typeof n&&delete n.locked,{...ae,...n,tags:Array.from(new Set([...n.tags||[]]))}},le=e=>e.replace(/\b\w/g,e=>e.toUpperCase());async function ce(e,t){await(0,Z.BN)((0,Z.H9)(X.OO,"users",e,"settings","tagPins"),{unpinnedTags:Array.from(new Set(t))})}var pe=n(5561),ue=n(7246),he=n(5263);function xe(e,t){(0,r.useEffect)(()=>{function n(n){e.current&&n.target instanceof Node&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[e,t])}const me=({systemTags:e,customTags:t,unpinnedTags:n,onToggleTagPin:a,selectedTag:o,setSelectedTag:s,explorerExpanded:d,setExplorerExpanded:c,minimized:p,setMinimized:u,selectedNoteIds:h,onRenameTag:x,onDeleteTag:m,onAddTagToSelected:g,onRemoveTagFromSelected:f,trashCount:b,selectedTrashCount:v,onDeleteSelectedNotes:y,onRestoreSelectedTrash:w,onRestoreAllTrash:k,onEmptyTrash:j,actionsLocked:C=!1,tagPreferencesLoading:$=!1})=>{const S=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),[A,E]=r.useState(null),[T,z]=r.useState(null),[M,N]=r.useState(""),D=r.useRef(null),P=r.useRef(null),R=r.useCallback(()=>{E(null),z(null)},[]);xe(P,R),r.useEffect(()=>{C&&R()},[C,R]);const O=()=>{window.innerWidth<=768&&c(!1)},I=e=>{s(e),O()};r.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!d)return;const n=e.target;n instanceof Node&&(null===(t=D.current)||void 0===t||!t.contains(n))&&(n instanceof Element&&n.closest('[data-sidebar-toggle="notes"]')||c(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[d,c]);const L=async e=>{try{await e(),E(null),O()}catch(t){console.error("Failed to complete tag menu action.",t)}},F=e=>{const t=e.icon,n="all"!==e.name&&"other"!==e.name,r="trash"===e.name,a=o===e.name;return(0,l.jsxs)(be,{ref:A===e.name?P:null,$active:A===e.name,children:[(0,l.jsxs)(ke,{expanded:d,selected:a,$selected:a,title:e.name,onClick:()=>I(e.name),children:[(0,l.jsx)(t,{}),d&&(0,l.jsx)("span",{children:S(e.name)})]}),d&&n&&(0,l.jsxs)(je,{children:[(0,l.jsx)($e,{type:"button",disabled:C,"aria-label":`Manage ${e.name} tag`,title:`Manage ${S(e.name)} tag`,onClick:t=>{t.stopPropagation(),E(A===e.name?null:e.name)},children:(0,l.jsx)(i.ZZB,{})}),A===e.name&&(0,l.jsx)(Se,{children:r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Ae,{type:"button",disabled:!h.length,onClick:()=>{L(y)},children:"Delete Selected"}),(0,l.jsx)(Ae,{type:"button",disabled:0===v,onClick:()=>{L(w)},children:"Restore Selected"}),(0,l.jsx)(Ae,{type:"button",disabled:0===b,onClick:()=>{L(k)},children:"Restore All"}),(0,l.jsx)(Ae,{type:"button",disabled:0===b,onClick:()=>{L(j)},children:"Empty Bin"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Ae,{type:"button",disabled:!h.length,onClick:()=>{L(()=>g(e.name))},children:"Add Selected"}),(0,l.jsx)(Ae,{type:"button",disabled:!h.length,onClick:()=>{L(()=>f(e.name))},children:"Remove Selected"})]})})]})]},e.name)},K=e=>{const t=!n.includes(e),r=o===e;return(0,l.jsxs)(be,{ref:A===e?P:null,$active:A===e,children:[(0,l.jsxs)(ke,{expanded:d,selected:r,$selected:r,title:S(e),onClick:()=>I(e),children:[(0,l.jsx)(i.UDU,{}),T===e?(0,l.jsx)(Ee,{autoFocus:!0,value:M,onClick:e=>e.stopPropagation(),onChange:e=>{e.currentTarget.setCustomValidity(""),N(e.target.value)},onKeyDown:t=>{if("Enter"===t.key){const n=M.trim();if(!n)return t.currentTarget.setCustomValidity("A tag name is required."),void t.currentTarget.reportValidity();L(async()=>{await x(e,n),z(null)})}"Escape"===t.key&&R()}}):d&&(0,l.jsx)("span",{children:S(e)})]}),d&&(0,l.jsxs)(je,{children:[(0,l.jsx)($e,{type:"button",disabled:C,"aria-label":`Manage ${e} tag`,title:`Manage ${S(e)} tag`,onClick:t=>{t.stopPropagation(),E(A===e?null:e)},children:(0,l.jsx)(i.ZZB,{})}),A===e&&(0,l.jsxs)(Se,{children:[(0,l.jsx)(Ae,{type:"button",disabled:C||$,onClick:()=>{L(()=>a(e))},children:t?"Unpin":"Pin"}),(0,l.jsx)(Ae,{type:"button",onClick:()=>{z(e),N(e)},children:"Rename"}),(0,l.jsx)(Ae,{type:"button",onClick:()=>{L(()=>m(e))},children:"Delete"}),(0,l.jsx)(Ae,{type:"button",disabled:!h.length,onClick:()=>{L(()=>g(e))},children:"Add Selected"}),(0,l.jsx)(Ae,{type:"button",disabled:!h.length,onClick:()=>{L(()=>f(e))},children:"Remove Selected"})]})]})]},e)},B=t.filter(e=>!n.includes(e)),U=t.filter(e=>n.includes(e));return(0,l.jsxs)(ge,{ref:D,expanded:d,children:[(0,l.jsxs)(ve,{expanded:d,title:d?"Collapse notes explorer":"Menu",onClick:()=>c(!d),children:[(0,l.jsx)(i.ND1,{}),d&&(0,l.jsx)("span",{children:"Explorer"})]}),p&&(0,l.jsxs)(Ce,{expanded:d,title:"Expand Notes Explorer",onClick:()=>u(!p),children:[(0,l.jsx)(he.$ZN,{}),d&&(0,l.jsx)("span",{children:"Expand Notes Explorer"})]}),d&&(0,l.jsx)(ye,{children:"Locations"}),e.filter(e=>"top"===e.position).map(F),B.length>0&&d&&(0,l.jsx)(ye,{children:"Pinned Tags"}),B.length>0&&(0,l.jsx)(we,{$expanded:d,children:B.map(K)}),e.filter(e=>"bottom"===e.position).map(F),U.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(fe,{role:"separator"}),d&&(0,l.jsx)(ye,{children:"Tags"}),(0,l.jsx)(we,{$expanded:d,children:U.map(K)})]})]})},ge=a.Ay.div`
  width: ${e=>e.expanded?"200px":"44px"};

  border-left: 1px solid var(--mavis-brand-border);
  background: var(--mavis-surface-subtle);
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
`,fe=a.Ay.div`
  width: 100%;
  height: 1px;
  margin: 8px 0 4px;
  background: var(--mavis-brand-border);
`,be=a.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: 4px;
  margin: 1px 0;
  z-index: ${({$active:e})=>e?9999:1};
`,ve=(0,a.Ay)(ue.K)`
  && {
    min-height: 32px;
    height: 32px;
    margin: 0 0 4px !important;
    padding: ${({expanded:e})=>e?"0 8px":"0"} !important;
    border-radius: 6px;
    color: var(--mavis-brand-deep);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`,ye=a.Ay.div`
  padding: 8px 8px 4px;
  color: var(--mavis-muted);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`,we=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: ${({$expanded:e})=>e?"10px":"0"};
  padding-left: ${({$expanded:e})=>e?"6px":"0"};
  border-left: ${({$expanded:e})=>e?"1px solid var(--mavis-brand-border)":"0"};
`,ke=(0,a.Ay)(ue.K)`
  && {
    width: ${({expanded:e})=>e?"auto":"30px"} !important;
    min-width: 0;
    min-height: 28px;
    height: 28px;
    flex: ${({expanded:e})=>e?"1 1 auto":"0 0 30px"};
    margin: 0 !important;
    padding: ${({expanded:e})=>e?"0 8px":"0"} !important;
    border: 0;
    border-left: 2px solid ${({$selected:e})=>e?"var(--mavis-brand)":"transparent"};
    border-radius: 4px;
    background: ${({$selected:e})=>e?"var(--mavis-brand-soft)":"transparent"};
    color: ${({$selected:e})=>e?"var(--mavis-brand-deep)":"var(--mavis-muted)"};
  }

  &:hover {
    background: ${({$selected:e})=>e?"var(--mavis-brand-soft)":"var(--mavis-surface-hover)"};
  }

  svg {
    width: 15px;
    height: 15px;
  }

  span {
    font-size: 12px;
    font-weight: ${({$selected:e})=>e?600:500};
  }
`,je=a.Ay.div`
  position: relative;
  flex: 0 0 22px;
`,Ce=(0,a.Ay)(ue.K)`
  && svg {
    color: var(--mavis-brand) !important;
  }
`,$e=a.Ay.button`
  display: flex;
  width: 22px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: 4px;
  color: var(--mavis-muted);
  cursor: pointer;
  padding: 0;

  &:hover:not(:disabled) {
    background: var(--mavis-brand-soft);
    color: var(--mavis-brand);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`,Se=a.Ay.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background: var(--mavis-surface);
  color: var(--mavis-text);
  border: 1px solid var(--mavis-brand-border);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
`,Ae=a.Ay.button`
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
    background: var(--mavis-surface-hover);
  }
`,Ee=a.Ay.input`
  width: 100px;
  margin-left: 8px;
  border: 1px solid var(--mavis-border);
  border-radius: 6px;
  background: var(--mavis-input);
  color: var(--mavis-text);
`;var Te=n(5369);const ze=({colors:e,onColorClicked:t,dropdownRef:n})=>(0,l.jsx)(Me,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map(e=>(0,l.jsxs)(Ne,{type:"button",onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:[(0,l.jsx)(De,{color:e}),(0,l.jsx)(Pe,{children:e})]},e))}),Me=a.Ay.div`
  && {
    width: max-content;
    margin: 0;
  }

  position: relative;
  min-width: 160px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: var(--mavis-surface);
  border: 1px solid var(--mavis-brand-border);

  border-radius: 14px;

  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 999999;
`,Ne=a.Ay.button`
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: none;
  border-radius: 10px;

  background: var(--mavis-surface-subtle);

  padding: 8px 10px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: var(--mavis-surface-hover);
  }
`,De=a.Ay.div`
  && {
    width: 14px;
    margin: 0;
  }

  width: 14px;
  height: 14px;

  border-radius: 999px;

  background: ${({color:e})=>e};

  border: 1px solid var(--mavis-border);

  flex-shrink: 0;
`,Pe=a.Ay.span`
  font-size: 12px;
  font-weight: 600;

  color: var(--mavis-text-secondary);
`;var Re=n(8214),Oe=n(8756);const Ie=new Map;Object.values(Oe.g).forEach(e=>{e.forEach(({n:e,u:t})=>{const n=String.fromCodePoint(...t.split("-").map(e=>parseInt(e,16)));Ie.set(t,{unified:t,emoji:n,name:e[e.length-1]||e[0],names:e})})});const Le=e=>e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim(),Fe=(e,t)=>{if(t===e)return 0;if(t.includes(e))return.5;const n=Math.max(1,Math.floor(Math.max(e.length,t.length)/4));if(Math.abs(e.length-t.length)>n)return null;const r=((e,t)=>{const n=Array.from({length:e.length+1},()=>Array(t.length+1).fill(0));for(let r=0;r<=e.length;r+=1)n[r][0]=r;for(let r=0;r<=t.length;r+=1)n[0][r]=r;for(let r=1;r<=e.length;r+=1)for(let a=1;a<=t.length;a+=1){const i=e[r-1]===t[a-1]?0:1;n[r][a]=Math.min(n[r-1][a]+1,n[r][a-1]+1,n[r-1][a-1]+i),r>1&&a>1&&e[r-1]===t[a-2]&&e[r-2]===t[a-1]&&(n[r][a]=Math.min(n[r][a],n[r-2][a-2]+1))}return n[e.length][t.length]})(e,t);return r<=n?r+1:e.length>=3&&((e,t)=>{let n=0;for(const r of t)if(r===e[n]&&(n+=1),n===e.length)return!0;return!1})(e,t)?n+1:null},Ke=(e,t,n)=>{let r=Number.POSITIVE_INFINITY;return e.forEach(e=>{const a=Le(e);if(a===t)return void(r=Math.min(r,0));if(a.startsWith(t))return void(r=Math.min(r,1));if(a.includes(t))return void(r=Math.min(r,2));const i=a.split(" ");let o=3;for(const t of n){const e=i.reduce((e,n)=>{var r;return Math.min(e,null!==(r=Fe(t,n))&&void 0!==r?r:1/0)},Number.POSITIVE_INFINITY);if(!Number.isFinite(e)){o=Number.POSITIVE_INFINITY;break}o+=e}r=Math.min(r,o)}),r};const Be=({emoji:e,onEmojiSelected:t,triggerRef:n,dropdownRef:a})=>{const[o,s]=r.useState(""),[c,p]=r.useState(null),u=r.useMemo(()=>function(e){const t=e.trim();if(!t)return[];const n=Le(t);if(!n)return Array.from(Ie.values()).filter(e=>e.emoji.includes(t)).slice(0,60);const r=n.split(" ");return Array.from(Ie.values()).map(e=>({emoji:e,score:Ke(e.names,n,r)})).filter(({score:e})=>Number.isFinite(e)).sort((e,t)=>e.score-t.score||e.emoji.name.localeCompare(t.emoji.name)).slice(0,60).map(({emoji:e})=>e)}(o),[o]);return r.useLayoutEffect(()=>{const e=()=>{const e=n.current;if(!e)return;const t=e.getBoundingClientRect(),r=Math.min(332,window.innerWidth-24),a=Math.min(410,window.innerHeight-24),i=t.bottom+8,o=i+a<=window.innerHeight-12?i:t.top-a-8>=12?t.top-a-8:Math.max(12,window.innerHeight-a-12),s=Math.max(12,Math.min(t.left,window.innerWidth-r-12));p({top:o,left:s,width:r})};return e(),window.addEventListener("resize",e),window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e,!0)}},[n]),c&&"undefined"!==typeof document?(0,d.createPortal)((0,l.jsxs)(Ue,{ref:a,role:"dialog","aria-label":"Emoji picker",style:{top:c.top,left:c.left,width:c.width},onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)(He,{children:[(0,l.jsx)(i.CKj,{"aria-hidden":"true"}),(0,l.jsx)(Je,{type:"text","aria-label":"Search emojis",placeholder:"Search emojis",autoComplete:"off",autoFocus:!0,value:o,onChange:e=>s(e.currentTarget.value)}),o&&(0,l.jsx)(We,{type:"button","aria-label":"Clear emoji search",onClick:()=>s(""),children:(0,l.jsx)(i.yGN,{"aria-hidden":"true"})})]}),o.trim()?(0,l.jsx)(Ge,{"aria-label":"Emoji search results",children:u.length?(0,l.jsx)(qe,{children:u.map(e=>(0,l.jsx)(_e,{type:"button",title:e.name,"aria-label":e.name,onClick:()=>t(e.emoji),children:e.emoji},e.unified))}):(0,l.jsx)(Ye,{role:"status",children:"No emojis found. Try another search."})}):(0,l.jsx)(Re.Ay,{searchDisabled:!0,width:"100%",height:300,previewConfig:{showPreview:!1},style:{width:"100%",height:300,border:0,boxShadow:"none"},onEmojiClick:e=>t(e.emoji)}),e&&(0,l.jsx)(Ve,{type:"button",onClick:()=>t(""),children:"Remove emoji"})]}),document.body):null},Ue=a.Ay.div`
  position: fixed;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: calc(100vh - 24px);
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid var(--mavis-brand-border);
  border-radius: 14px;
  background: var(--mavis-surface);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.2);
`,He=a.Ay.div`
  display: flex;
  min-height: 38px;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  border: 1px solid var(--mavis-border);
  border-radius: 9px;
  background: var(--mavis-input);
  color: var(--mavis-muted);

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,Je=a.Ay.input`
  width: 100%;
  min-width: 0;
  padding: 8px 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--mavis-text);
  font: inherit;
  font-size: 13px;

  &::placeholder {
    color: var(--mavis-muted);
  }
`,We=a.Ay.button`
  display: flex;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--mavis-muted);
  cursor: pointer;

  &:hover {
    background: var(--mavis-surface-hover);
  }
`,Ge=a.Ay.div`
  min-height: 220px;
  max-height: 300px;
  overflow-y: auto;
  padding: 4px;
`,qe=a.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 4px;
`,_e=a.Ay.button`
  display: flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font-size: 22px;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background: var(--mavis-surface-hover);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(91, 75, 216, 0.45);
  }
`,Ye=a.Ay.p`
  margin: 0;
  padding: 24px 12px;
  color: var(--mavis-muted);
  font-size: 13px;
  text-align: center;
`,Ve=a.Ay.button`
  min-height: 32px;
  padding: 6px 10px;
  border: 0;
  border-radius: 7px;
  background: var(--mavis-surface-subtle);
  color: var(--mavis-text);
  text-align: left;
  cursor: pointer;

  &:hover {
    background: var(--mavis-surface-hover);
  }
`,Ze=({options:e,onPicked:t,dropdownRef:n})=>(0,l.jsx)(Xe,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map((e,n)=>(0,l.jsx)(Qe,{type:"button",onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:(0,l.jsx)(et,{children:(0,l.jsx)(tt,{children:e.title})})},n))}),Xe=a.Ay.div`
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

  background: var(--mavis-surface);
  border: 1px solid var(--mavis-brand-border);

  border-radius: 14px;

  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 999999;
`,Qe=a.Ay.button`
  width: 100%;

  display: flex;
  align-items: flex-start;
  gap: 10px;

  border: none;
  border-radius: 10px;

  background: var(--mavis-surface-subtle);

  padding: 8px 10px;

  cursor: pointer;

  transition: 0.2s;

  text-align: left;

  &:hover {
    background: var(--mavis-surface-hover);
  }
`,et=a.Ay.div`
  && {
    width: 100%;
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  gap: 2px;

  min-width: 0;
`,tt=a.Ay.span`
  color: var(--mavis-text-secondary);

  font-size: 12px;
  font-weight: 600;

  line-height: 1.3;
`,nt=a.Ay.mark`
  border-radius: 2px;
  padding: 0 1px;
  background: #fde047;
  color: #713f12;
`,rt=({text:e,query:t,fuzzySearchEnabled:n})=>{const r=q(e,t,n);if(!r.length)return(0,l.jsx)(l.Fragment,{children:e});const a=[];let i=0;return r.forEach(t=>{t.start>i&&a.push(e.slice(i,t.start)),a.push((0,l.jsx)(nt,{children:e.slice(t.start,t.end)},`${t.start}-${t.end}`)),i=t.end}),i<e.length&&a.push(e.slice(i)),(0,l.jsx)(l.Fragment,{children:a})},at=({title:e,emoji:t,titleRef:n,searchContent:r,fuzzySearchEnabled:a,readOnly:d,collapsed:c,isFavorite:p,isArchived:u,isTrashed:h,selected:x,onToggleSelection:m,toolboxOpen:g,setToolboxOpen:f,showColorPicker:b,showTemplatePicker:v,showEmojiPicker:y,setShowColorPicker:w,setShowTemplatePicker:k,setShowEmojiPicker:j,toolboxRef:C,emojiPickerRef:$,emojiDropdownRef:S,colorPickerRef:A,templatePickerRef:E,colorDropdownRef:T,templateDropdownRef:z,noteColors:M,templateOptions:N,onColorSelected:D,onTemplateSelected:P,onEmojiSelected:R,copyFormattedContent:O,onToggleFavorite:I,onDuplicateNote:L,onArchiveNote:F,onDeleteNote:K,onToggleCollapse:B,onTitleChange:U})=>(0,l.jsxs)(ot,{children:[(0,l.jsxs)(st,{children:[(0,l.jsx)(it,{title:x?"Unselect note":"Select note",onClick:m,children:x?"\u2713":""}),(0,l.jsxs)(dt,{ref:$,children:[(0,l.jsx)(lt,{type:"button",disabled:d,title:t||"Choose note emoji","aria-label":"Choose note emoji","aria-haspopup":"dialog","aria-expanded":y,onClick:()=>j(e=>!e),children:t||(0,l.jsx)(i.WAO,{})}),y&&(0,l.jsx)(Be,{emoji:t,onEmojiSelected:R,triggerRef:$,dropdownRef:S})]}),(0,l.jsx)(ct,{ref:n,title:"Note name",role:"textbox",contentEditable:!d,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>U(e.currentTarget.innerText),children:(0,l.jsx)(rt,{text:e,query:r,fuzzySearchEnabled:a})})]}),(0,l.jsxs)(pt,{children:[p?(0,l.jsx)(ue.K,{disabled:d,title:"Remove favorite",onClick:I,children:(0,l.jsx)(Te.gt3,{})}):(0,l.jsx)(ue.K,{disabled:d,title:"Add favorite",onClick:I,children:(0,l.jsx)(i.usP,{})}),(0,l.jsxs)(ut,{ref:C,children:[(0,l.jsx)(ht,{type:"button",disabled:d,title:"Options","aria-label":"Options","aria-haspopup":"menu","aria-expanded":g,onClick:()=>f(e=>!e),children:(0,l.jsx)(i.ZZB,{})}),g&&(0,l.jsxs)(xt,{role:"menu","aria-label":"Options",children:[(0,l.jsxs)(gt,{type:"button",role:"menuitem",title:"Change note background color",disabled:d,onClick:()=>{w(!0),k(!1),f(!1)},children:[(0,l.jsx)(s.$di,{}),(0,l.jsx)("span",{children:"Color"})]}),(0,l.jsxs)(gt,{type:"button",role:"menuitem",title:"Apply template",disabled:d||0===N.length,onClick:()=>{w(!1),k(!0),f(!1)},children:[(0,l.jsx)(i.MRc,{}),(0,l.jsx)("span",{children:"Template"})]}),(0,l.jsx)(mt,{role:"separator"}),(0,l.jsxs)(gt,{type:"button",role:"menuitem",title:"Duplicate note",disabled:d,onClick:()=>{f(!1),L()},children:[(0,l.jsx)(i.nxz,{}),(0,l.jsx)("span",{children:"Duplicate"})]}),(0,l.jsxs)(gt,{type:"button",role:"menuitem",title:u?"Unarchive note":"Archive note",disabled:d,onClick:()=>{f(!1),F()},children:[(0,l.jsx)(i.OZ2,{}),(0,l.jsx)("span",{children:u?"Unarchive":"Archive"})]}),(0,l.jsxs)(gt,{type:"button",role:"menuitem",title:h?"Permanently delete note":"Move to trash",disabled:d,$danger:!0,onClick:()=>{f(!1),K()},children:[(0,l.jsx)(i.IXo,{}),(0,l.jsx)("span",{children:h?"Delete permanently":"Delete"})]})]}),b&&(0,l.jsx)(ft,{ref:A,children:(0,l.jsx)(ze,{colors:M,onColorClicked:D,dropdownRef:T})}),v&&(0,l.jsx)(ft,{ref:E,children:(0,l.jsx)(Ze,{options:N,onPicked:P,dropdownRef:z})})]}),(0,l.jsx)(ue.K,{title:"Copy note",onClick:O,children:(0,l.jsx)(i.nxz,{})}),c?(0,l.jsx)(ue.K,{title:"Expand note",onClick:B,children:(0,l.jsx)(o.BSQ,{})}):(0,l.jsx)(ue.K,{title:"Collapse note",onClick:B,children:(0,l.jsx)(o.q2p,{})})]})]}),it=a.Ay.span`
  width: 18px;
  height: 18px;

  min-width: 18px;

  border: 1px solid var(--mavis-border-strong);
  border-radius: 4px;

  background: var(--mavis-input);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 12px;
  font-weight: bold;

  color: var(--mavis-brand);

  &:hover {
    border-color: var(--mavis-brand);
  }
`,ot=a.Ay.header`
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

  border-bottom: 1px solid var(--mavis-brand-border);

  svg {
    cursor: pointer;
    height: 18px;
  }

  @media (max-width: 1260px) {
    height: auto;
    min-height: 44px;
  }
`,st=a.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;

  color: var(--mavis-text);
`,dt=a.Ay.div`
  && {
    width: auto;
    margin: 0;
  }

  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin: 0;
`,lt=a.Ay.button`
  display: flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--mavis-text);
  font-size: 19px;
  line-height: 1;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--mavis-brand-soft);
  }

  &:disabled {
    color: ${({theme:e})=>e.disabled||"#9ca3af"};
    cursor: not-allowed;
  }

  svg {
    height: 18px;
  }
`,ct=a.Ay.span`
  flex: 1;
  min-width: 0;

  border: 0;
  text-align: left;

  &:empty::before {
    content: attr(data-placeholder);
    color: var(--mavis-muted);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 560px) {
    font-size: 13px;
  }
`,pt=a.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`,ut=a.Ay.div`
  && {
    width: auto;
    margin: 0;
  }

  position: relative;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`,ht=a.Ay.button`
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
  color: var(--mavis-text);
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--mavis-brand-soft);
  }

  &:disabled {
    color: ${({theme:e})=>e.disabled||"#9ca3af"};
    cursor: not-allowed;
    opacity: 1;
  }
`,xt=a.Ay.div`
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
  border: 1px solid var(--mavis-brand-border);
  border-radius: 10px;
  background: var(--mavis-surface);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
`,mt=a.Ay.div`
  height: 1px;
  flex: 0 0 1px;
  margin: 4px 6px;
  background: var(--mavis-brand-border);
`,gt=a.Ay.button`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  padding: 6px 9px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: ${({$danger:e})=>e?"var(--mavis-danger)":"var(--mavis-text)"};
  text-align: left;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({$danger:e})=>e?"var(--mavis-danger-background)":"var(--mavis-surface-hover)"};
  }

  &:disabled {
    color: ${({theme:e})=>e.disabled||"#9ca3af"};
    cursor: not-allowed;
    opacity: 1;
  }

  svg {
    flex-shrink: 0;
  }
`,ft=a.Ay.div`
  && {
    width: max-content;
    margin: 0;
  }

  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 21;
  width: max-content;
`;var bt=n(8849),vt=n(5709),yt=n(8420),wt=n(6801),kt=n(8452),jt=n(285),Ct=n(4853),$t=n(8550),St=n(3596),At=n(5312),Et=n.n(At);const Tt=e=>{const t=e=>{for(let a=0;a<e.children.length;a+=1){const i=e.children[a];if("text"===i.type){var n,r;const t=null===(n=i.position)||void 0===n||null===(r=n.start)||void 0===r?void 0:r.offset;void 0!==t&&(e.children[a]={type:"element",tagName:"span",properties:{"data-note-source-start":t},children:[i]})}else"element"===i.type&&t(i)}};t(e)},zt=()=>Tt,Mt=(e,t,n)=>{if(null===e||void 0===e||!e.start||!e.end)return;const r=e.start.offset;return{...e,start:{...e.start,offset:void 0===r?e.start.offset:r+t},end:{...e.end,offset:void 0===r?e.end.offset:r+n}}},Nt=(e,t)=>n=>((e,t,n)=>{if(!t.trim())return e;const r=e=>{for(let a=0;a<e.children.length;a+=1){const i=e.children[a];if("text"===i.type){const r=q(i.value,t,n);if(!r.length)continue;const o=[];let s=0;r.forEach(e=>{e.start>s&&o.push({type:"text",value:i.value.slice(s,e.start),position:Mt(i.position,s,e.start)});const t={type:"text",value:i.value.slice(e.start,e.end),position:Mt(i.position,e.start,e.end)};o.push({type:"element",tagName:"mark",properties:{},children:[t],position:Mt(i.position,e.start,e.end)}),s=e.end}),s<i.value.length&&o.push({type:"text",value:i.value.slice(s),position:Mt(i.position,s,i.value.length)}),e.children[a]={type:"element",tagName:"span",properties:{},children:o,position:i.position}}else"element"===i.type&&r(i)}};return r(e),e})(n,e,t),Dt=({label:e,expression:t,onExecute:n,disabled:r})=>(0,l.jsx)("button",{className:"markdownButton",disabled:r,onClick:()=>n(t),children:e}),Pt=({darkMode:e,value:t,searchContent:n,fuzzySearchEnabled:r,readOnly:a,editing:i,onEditorFocus:o,onEditorBlur:s,textareaRef:d,markdownRef:c,setValue:p,setEditing:u,onSave:h,onMarkdownClick:x,processMarkdown:m,onExecuteExpression:g})=>{if(i)return(0,l.jsx)(Lt,{$darkMode:e,ref:d,readOnly:a,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:t||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`,o(t)},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,p(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)?(s(e.currentTarget),h(),u(!1)):h()}});const f=m(t||"* \u2753 What do you have for today?");return(0,l.jsx)(Rt,{$darkMode:e,ref:c,onClick:e=>{if(a)return;const n=e.target;if(n.closest("button"))return;const r=f===t?((e,t,n)=>{var r,a,i;const o=document,s=null===(r=o.caretPositionFromPoint)||void 0===r?void 0:r.call(o,t,n),d=(null===s||void 0===s?void 0:s.offsetNode.nodeType)===Node.TEXT_NODE,l=d?null:null===(a=o.caretRangeFromPoint)||void 0===a?void 0:a.call(o,t,n),c=d?null===s||void 0===s?void 0:s.offsetNode:null===l||void 0===l?void 0:l.startContainer,p=d?null===s||void 0===s?void 0:s.offset:null===l||void 0===l?void 0:l.startOffset;if(!c||void 0===p||c.nodeType!==Node.TEXT_NODE||!e.contains(c))return null;const u=null===(i=c.parentElement)||void 0===i?void 0:i.closest("[data-note-source-start]"),h=null===u||void 0===u?void 0:u.getAttribute("data-note-source-start");if(null===h||void 0===h)return null;const x=Number(h)+p;return Number.isFinite(x)?x:null})(e.currentTarget,e.clientX,e.clientY):null;x(n.innerText||n.textContent||"",r)},children:(0,l.jsx)(bt.oz,{rehypePlugins:[vt.A,[Nt,n,r],zt],components:{mark:({node:e,children:t})=>(0,l.jsx)(nt,{children:t}),button(e){var t,n,r;const i=decodeURIComponent(String(null!==(t=null===(n=e.node)||void 0===n||null===(r=n.properties)||void 0===r?void 0:r.dataExpression)&&void 0!==t?t:""));return(0,l.jsx)(Dt,{label:String(e.children),expression:i,onExecute:g,disabled:a})},table:({node:e,children:t,...n})=>(0,l.jsx)(Ot,{children:(0,l.jsx)("table",{...n,children:t})}),img:({node:e,...t})=>(0,l.jsx)(It,{children:(0,l.jsx)("img",{...t,alt:t.alt||""})})},remarkPlugins:[[kt.A,{padSpaceAfter:!1,emoticon:!0}],[$t.A,{tight:!0,ordered:!0}],[yt.A,{stringLength:Et()}],jt.A,Ct.A,St.A,wt.A],children:f})})},Rt=a.Ay.div`
  && {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    margin-left: 0;
    overflow-x: hidden;
  }

  padding: 20px;
  margin: 0;
  color: ${({$darkMode:e})=>e?"#fff":"#000"};
  font: 13px 'Myriad Pro', 'Lucida Grande', Lucida, Verdana, sans-serif;

  a:link {
    color: var(--mavis-markdown-link);
    text-decoration: none;
  }

  a:visited {
    color: var(--mavis-markdown-visited);
    text-decoration: none;
  }

  a:hover {
    color: var(--mavis-markdown-hover);
    text-decoration: underline;
  }

  a:active {
    color: var(--mavis-markdown-hover);
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
    color: var(--mavis-code-text);
    font-style: italic;
  }

  pre {
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid var(--mavis-border);
    background: var(--mavis-code-block);
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
    border-top: 1px dashed var(--mavis-border-strong);
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
    color: inherit;
    font-size: 22px;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 18px;
    color: inherit;
    padding-bottom: 2px;
  }

  h3 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 13px;
    color: inherit;
  }

  h4 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 11px;
    color: inherit;
  }

  h5 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: inherit;
  }

  h6 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: inherit;
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

    border-top: 1px solid var(--mavis-border-strong);
    border-left: 1px solid var(--mavis-border-strong);
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
    background: var(--mavis-table-header);
    color: var(--mavis-text);
    font-size: 12px;

    border-bottom: 1px solid var(--mavis-border-strong);
    border-right: 1px solid var(--mavis-border-strong);

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

    border-bottom: 1px solid var(--mavis-border-strong);
    border-right: 1px solid var(--mavis-border-strong);
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

    border: 1px solid var(--mavis-border-strong);
    border-radius: 3px;

    background: var(--mavis-surface-hover);
    color: var(--mavis-text);

    font-size: 12px;
    cursor: pointer;

    padding: 0 6px;
    white-space: nowrap;
  }

  input[type='checkbox'] {
    appearance: none;
    width: 14px;
    height: 14px;
    border: 1px solid var(--mavis-border-strong);
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    background-color: var(--mavis-success);
    border: 1px solid var(--mavis-border-strong);
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

    color: var(--mavis-muted) !important;
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
`,Ot=a.Ay.div`
  && {
    width: 100%;
    min-width: 0;
    margin: 0;
  }

  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: var(--mavis-scrollbar) transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--mavis-scrollbar);
    border-radius: 6px;
  }
`,It=a.Ay.span`
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  vertical-align: bottom;

  img {
    display: block;
    max-width: none;
  }
`,Lt=a.Ay.textarea`
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
  color: ${({$darkMode:e})=>e?"#fff":"#000"};

  &::placeholder {
    color: var(--mavis-muted);
  }

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`,Ft=({date:e,tags:t,searchContent:n,fuzzySearchEnabled:a,availableTags:s,readOnly:c,tagPickerRef:p,tagDropdownRef:u,showTagPicker:h,creatingTag:x,newTagName:m,setShowTagPicker:g,setCreatingTag:f,setNewTagName:b,onDateChange:v,hasTag:y,toggleTag:w,createTag:k,formatTag:j,formatDate:C})=>{const $=r.useRef(null);return(0,l.jsxs)(Kt,{children:[(0,l.jsx)(Bt,{$disabled:c,"aria-disabled":c,onClick:()=>{var e,t,n;c||(null===(e=$.current)||void 0===e||null===(t=e.showPicker)||void 0===t||t.call(e),null===(n=$.current)||void 0===n||n.click())},children:C(e)}),(0,l.jsx)("input",{ref:$,type:"date",value:e,style:{display:"none"},onChange:e=>v(e.target.value)}),t.map(e=>(0,l.jsx)(Ut,{type:"button",disabled:c,onClick:()=>w(e),children:(0,l.jsx)(rt,{text:j(e),query:n,fuzzySearchEnabled:a})},e)),(0,l.jsxs)(Ht,{ref:p,children:[!c&&(0,l.jsx)(Jt,{type:"button",title:"Add tag","aria-label":"Add tag",onClick:()=>g(!h),children:(0,l.jsx)(o.n4h,{})}),h&&(0,d.createPortal)((0,l.jsxs)(Wt,{ref:u,children:[s.map(e=>(0,l.jsxs)(Gt,{className:y(e)?"selected":"",onClick:()=>{c||w(e)},children:[(0,l.jsx)(i.cnX,{}),(0,l.jsx)("span",{children:j(e)})]},e)),x?(0,l.jsx)(_t,{autoFocus:!0,placeholder:"Tag name...",value:m,onChange:e=>!c&&b(e.target.value),onKeyDown:e=>{c||"Enter"!==e.key||k(m),"Escape"===e.key&&(f(!1),b(""))},onBlur:()=>{if(c)return f(!1),void b("");m.trim()?k(m):f(!1)}}):(0,l.jsxs)(qt,{onClick:()=>!c&&f(!0),children:[(0,l.jsx)(i.cnX,{}),"New Tag"]})]}),document.body)]})]})},Kt=a.Ay.div`
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
`,Bt=a.Ay.span`
  display: flex;
  align-items: center;

  padding: 4px 10px;

  border-radius: 999px;

  background: var(--mavis-brand-soft);
  color: var(--mavis-text);

  font-size: 11px;
  font-weight: 600;

  cursor: ${({$disabled:e})=>e?"default":"pointer"};

  transition: 0.2s;
`,Ut=a.Ay.button`
  display: flex;
  align-items: center;

  padding: 4px 10px;
  border: 0;

  border-radius: 999px;

  background: var(--mavis-brand-soft);
  color: var(--mavis-text);

  font: inherit;
  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    background: var(--mavis-secondary-bg-hover);
  }

  &:disabled {
    background: var(--mavis-surface-hover);
    color: var(--mavis-disabled);
    cursor: default;
  }
`,Ht=a.Ay.div`
  && {
    width: fit-content;
    margin-left: 0;
  }

  position: relative;
  flex: 0 0 auto;
  width: fit-content;
  margin: 0;
`,Jt=a.Ay.button`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border: 0;

  border-radius: 999px;

  background: var(--mavis-brand-soft);
  color: var(--mavis-text);

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: var(--mavis-secondary-bg-hover);
  }
`,Wt=a.Ay.div`
  position: absolute;

  bottom: 40%;
  left: 30%;

  min-width: 160px;
  max-width: 280px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: var(--mavis-surface);
  border: 1px solid var(--mavis-brand-border);

  border-radius: 14px;

  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 100;
`,Gt=a.Ay.span`
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  text-align: left;

  border: none;
  border-radius: 10px;

  background: var(--mavis-surface-subtle);
  color: var(--mavis-text-secondary);

  padding: 8px 10px;

  cursor: pointer;

  transition: 0.2s;

  margin: 0 !important;

  &:hover {
    background: var(--mavis-surface-hover);
  }

  &.selected {
    background: #5b4bd8;
    color: white;
  }
`,qt=a.Ay.span`
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: 1px dashed var(--mavis-brand);
  border-radius: 10px;

  background: transparent;
  color: var(--mavis-text);

  padding: 8px 10px;

  cursor: pointer;

  font-weight: 600;
`,_t=a.Ay.input`
  width: 100%;

  border: 1px solid var(--mavis-border);
  border-radius: 10px;

  padding: 4px;

  font-size: 13px;

  background: var(--mavis-input);
  color: var(--mavis-text);

  &:focus {
    outline: none;
    border-color: var(--mavis-brand);
    box-shadow: 0 0 0 3px rgba(91, 75, 216, 0.12);
  }
`,Yt=(e={})=>{const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},Vt=(e,t={},n=!1,r=0)=>{const a=new Date;return(e=e.replace(/@date\b/g,()=>a.toLocaleDateString()).replace(/@time\b/g,()=>a.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>a.toLocaleString()).replace(/@dayofweek\b/g,()=>a.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(a.getMonth()+1)).replace(/@monthname\b/g,()=>a.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(a.getFullYear())).replace(/@today\b/g,()=>a.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const r=Number(t),a=Number(n);return r&&a?(r/(a*a)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-a.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const r=Math.max(-1,Math.min(1,Number(n))),a=t.isMobile?5:10,i=Math.abs(r),o=`${Math.round(100*r)}%`,s=Math.round(i*a);let d=r>=0?"\u2588".repeat(s)+"\u2591".repeat(a-s):"\u2591".repeat(a-s)+"\u2588".repeat(s);const l=Math.max(0,Math.floor((a-o.length)/2));return d.slice(0,l)+o+d.slice(l+o.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&r<5?Vt(e,t,n,r+1):e},Zt=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,Xt=(e,t)=>{const n={};e.replace(Zt,(e,t,r)=>(n[t]=r.trim(),""));let r=!0;for(;r;){r=!1;for(const[e,a]of Object.entries(n)){if(!a.includes("@"))continue;const i=Vt(Qt(a,n),Yt({...t,...n}));i!==a&&(n[e]=i,r=!0)}}return n},Qt=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var r;return null!==(r=t[n])&&void 0!==r?r:""}),en=(e,t,n)=>{const r=Xt(e),a=Yt({...t,...Object.fromEntries(Object.entries(r).map(([e,t])=>{if(""===t)return[e,""];const n=Number(t);return[e,Number.isNaN(n)?t:n]}))});return Vt(Qt((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),r),a,n)};function tn(){const[e,t]=(0,r.useState)(""),[n,a]=(0,r.useState)(""),[i,o]=(0,r.useState)({city:"",country:""});return(0,r.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async({coords:n})=>{try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${n.latitude}&longitude=${n.longitude}&current=temperature_2m,weather_code`),d=await t.json();let l="",c="";try{var r,a,i,o;const e=await fetch(`https://geocode.maps.co/reverse?lat=${n.latitude}&lon=${n.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();l=(null===(r=t.address)||void 0===r?void 0:r.city)||(null===(a=t.address)||void 0===a?void 0:a.town)||(null===(i=t.address)||void 0===i?void 0:i.village)||"",c=(null===(o=t.address)||void 0===o?void 0:o.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(d.current.temperature_2m)}\xb0C`,weather:(s=d.current.weather_code,0===s?"\u2600\ufe0f Sunny":[1,2].includes(s)?"\ud83c\udf24\ufe0f Partly Cloudy":3===s?"\u2601\ufe0f Cloudy":[45,48].includes(s)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(s)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(s)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(s)?"\u2744\ufe0f Snowing":[80,81,82].includes(s)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(s)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:l,country:c})}catch(d){t(d)}var s}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),a(e.weather),o({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:i}}var nn=n(6178);const rn=(e,t,n)=>{let r=0;for(;r<e.length&&r<t.length&&e[r]===t[r];)r+=1;let a=0;for(;a<e.length-r&&a<t.length-r&&e[e.length-1-a]===t[t.length-1-a];)a+=1;if(n<=r)return n;return n>=e.length-a?n+t.length-e.length:t.length-a},an=({id:e,date:t,content:n,emoji:a,searchContent:i,fuzzySearchEnabled:o,notesLocked:s,onChangeContent:d,onChangeEmoji:c,onChangeDate:p,onDuplicateNote:u,onArchiveNote:h,onDeleteNote:x,tags:m,selected:g,onToggleSelection:f,templateOptions:b,onEditorFocus:v,onEditorBlur:y})=>{const[w,k]=r.useState(!1),[j,C]=r.useState(!1),[$,S]=r.useState(!1),[A,E]=r.useState(!1),[T,z]=r.useState(!1),M=r.useRef(null),N=r.useRef(null),D=r.useRef(null),P=r.useRef(null),R=r.useRef(null),O=r.useRef(null),I=r.useRef(null),L=r.useRef(null),F=r.useRef(null),U=r.useRef(null),H=r.useRef(null),J=r.useRef(null),[W,G]=r.useState(window.innerWidth<1260),{darkMode:q}=(0,nn.D)(),{temperature:_,weather:Y,location:V}=tn(),{setCursorPosition:Z,findBestCursorPosition:X}=function({editing:e,textareaRef:t}){const[n,a]=(0,r.useState)(null);return(0,r.useEffect)(()=>{if(!e||!t.current||null===n)return;const r=t.current;r.focus(),r.setSelectionRange(n,n);const a=requestAnimationFrame(()=>{if(!r.isConnected)return;const e=document.createElement("div"),t=window.getComputedStyle(r);e.style.position="absolute",e.style.visibility="hidden",e.style.whiteSpace="pre-wrap",e.style.wordWrap="break-word",e.style.boxSizing=t.boxSizing,e.style.font=t.font,e.style.lineHeight=t.lineHeight,e.style.letterSpacing=t.letterSpacing,e.style.wordSpacing=t.wordSpacing,e.style.textIndent=t.textIndent,e.style.tabSize=t.tabSize,e.style.padding=t.padding,e.style.border=t.border,e.style.width=t.width,e.textContent=`${r.value.substring(0,n)}\u200b`,document.body.appendChild(e);const a=e.offsetHeight;document.body.removeChild(e);const i=r.getBoundingClientRect().top;let o=r.parentElement;for(;o;){const e=window.getComputedStyle(o).overflowY;if("auto"===e||"scroll"===e||"overlay"===e){const e=o.getBoundingClientRect().top,t=o.scrollTop+i+a-e-o.clientHeight/2;return void o.scrollTo({top:Math.max(0,t),behavior:"smooth"})}o=o.parentElement}window.scrollTo({top:Math.max(0,window.scrollY+i+a-window.innerHeight/2),behavior:"smooth"})});return()=>cancelAnimationFrame(a)},[e,n,t]),{cursorPosition:n,setCursorPosition:a,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const r=n.split(" ");for(let a=Math.min(r.length,8);a>=2;a--)for(let e=0;e<=r.length-a;e++){const n=r.slice(e,e+a).join(" "),i=t.indexOf(n);if(i>=0)return i}for(const a of r){if(a.length<4)continue;const e=t.indexOf(a);if(e>=0)return e}return t.length}}}({editing:w,textareaRef:M});!function({tagPickerRef:e,tagDropdownRef:t,colorPickerRef:n,colorDropdownRef:a,templatePickerRef:i,templateDropdownRef:o,toolboxRef:s,emojiPickerRef:d,emojiDropdownRef:l,closeTagPicker:c,closeColorPicker:p,closeTemplatePicker:u,closeEmojiPicker:h,closeToolbox:x}){(0,r.useEffect)(()=>{const r=r=>{var m,g,f,b,v,y,w,k,j,C,$,S,A,E,T,z,M,N;const D=r.target,P=null!==(m=null===(g=e.current)||void 0===g?void 0:g.contains(D))&&void 0!==m&&m,R=null!==(f=null===(b=t.current)||void 0===b?void 0:b.contains(D))&&void 0!==f&&f;P||R||c();const O=null!==(v=null===(y=n.current)||void 0===y?void 0:y.contains(D))&&void 0!==v&&v,I=null!==(w=null===(k=a.current)||void 0===k?void 0:k.contains(D))&&void 0!==w&&w;O||I||p();const L=null!==(j=null===(C=i.current)||void 0===C?void 0:C.contains(D))&&void 0!==j&&j,F=null!==($=null===(S=o.current)||void 0===S?void 0:S.contains(D))&&void 0!==$&&$;L||F||u();const K=null!==(A=null===(E=d.current)||void 0===E?void 0:E.contains(D))&&void 0!==A&&A,B=null!==(T=null===(z=l.current)||void 0===z?void 0:z.contains(D))&&void 0!==T&&T;K||B||h(),null!==(M=null===(N=s.current)||void 0===N?void 0:N.contains(D))&&void 0!==M&&M||x()};return document.addEventListener("pointerdown",r),()=>{document.removeEventListener("pointerdown",r)}},[e,t,n,a,i,o,s,d,l,c,p,u,h,x])}({tagPickerRef:P,tagDropdownRef:U,colorPickerRef:R,colorDropdownRef:H,templatePickerRef:O,templateDropdownRef:J,toolboxRef:I,emojiPickerRef:L,emojiDropdownRef:F,closeTagPicker:()=>{oe(!1),ce(!1)},closeColorPicker:()=>{S(!1)},closeTemplatePicker:()=>{E(!1)},closeEmojiPicker:()=>{z(!1)},closeToolbox:()=>{C(!1)}}),r.useEffect(()=>{const e=()=>{G(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const Q=r.useMemo(()=>de(n,K),[n]),ee="string"===typeof Q.color&&Q.color||"#eee",te=s,{showTagPicker:ne,creatingTag:re,newTagName:ae,setShowTagPicker:oe,setCreatingTag:ce,setNewTagName:pe,hasTag:ue,toggleTag:he,createTag:xe}=function({tags:e,onTagsChange:t}){const[n,a]=(0,r.useState)(!1),[i,o]=(0,r.useState)(!1),[s,d]=(0,r.useState)(""),l=t=>e.includes(t),c=n=>{console.log("current tags",e);const r=Array.from(new Set(l(n)?e.filter(e=>e!==n):[...e,n]));console.log("updated tags",r),t(r)};return{showTagPicker:n,creatingTag:i,newTagName:s,setShowTagPicker:a,setCreatingTag:o,setNewTagName:d,hasTag:l,toggleTag:c,createTag:e=>{const t=e.trim().toLowerCase();t&&(c(t),d(""),o(!1))}}}({tags:Q.tags,onTagsChange:t=>{te||d(e,JSON.stringify({...Q,tags:t}))}}),me=r.useCallback(e=>ue("templates")?e:((e,t={})=>{const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/quarter\b/g,()=>String(Math.floor(n.getMonth()/3)+1)).replace(/\/week\b/g,()=>{const e=new Date(n);e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const t=new Date(e.getFullYear(),0,4);return String(1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7))}).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const r=Number(t),a=Number(n);return String(Math.floor(Math.random()*(a-r+1))+r)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",r=Number(t);return Array.from({length:r},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const r=new Date(t);let a=n.getFullYear()-r.getFullYear();const i=n.getMonth()-r.getMonth();return(i<0||0===i&&n.getDate()<r.getDate())&&a--,String(a)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const r=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(r/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})})(e,{weather:Y,temperature:_,city:V.city,country:V.country}),[ue,V.city,V.country,_,Y]),[ge,fe]=r.useState(Q.text||""),be=r.useRef(null),ve=r.useRef(Q.text||""),ye=r.useRef({text:Q.text||"",title:Q.title||""}),we=r.useCallback(e=>{const t=M.current;if(w&&t&&document.activeElement===t&&t.value!==e){const n=t.value;be.current={start:rn(n,e,t.selectionStart),end:rn(n,e,t.selectionEnd),direction:t.selectionDirection,scrollTop:t.scrollTop}}fe(t=>t===e?t:e)},[w]);r.useLayoutEffect(()=>{const e=be.current;if(!e)return;const t=M.current;if(!w||!t)return void(be.current=null);be.current=null;const n=t.value.length;t.setSelectionRange(Math.min(e.start,n),Math.min(e.end,n),e.direction),t.scrollTop=e.scrollTop},[w,ge]),r.useEffect(()=>{ye.current={text:Q.text||"",title:Q.title||""}},[Q.text,Q.title]),r.useEffect(()=>{const e=Q.text||"",t=ve.current;t!==e&&(ve.current=e,w&&ge!==t||we(e))},[w,Q.text,we,ge]);const ke=r.useCallback((t,n)=>{var r,a,i,o,s;const l=null!==t&&void 0!==t?t:w&&null!==(r=null===(a=M.current)||void 0===a?void 0:a.value)&&void 0!==r?r:ge,c=null!==(i=null!==(o=null!==n&&void 0!==n?n:null===(s=D.current)||void 0===s?void 0:s.innerText)&&void 0!==o?o:Q.title)&&void 0!==i?i:"",p=me(l),u=me(c),h=ye.current;h.text===p&&h.title===u||(ye.current={text:p,title:u},we(p),d(e,JSON.stringify({...Q,text:p,title:u})).catch(e=>{console.error("Failed to autosave note.",e),ye.current.text===p&&ye.current.title===u&&(ye.current=h)}))},[w,e,me,Q,d,we,ge]);r.useEffect(()=>{if(!w||te)return;const e=window.setTimeout(()=>ke(),500);return()=>window.clearTimeout(e)},[w,te,ke,ge]),r.useEffect(()=>{const e=()=>ke(),t=()=>{"hidden"===document.visibilityState&&ke()};return document.addEventListener("visibilitychange",t),window.addEventListener("pagehide",e),window.addEventListener("beforeunload",e),()=>{document.removeEventListener("visibilitychange",t),window.removeEventListener("pagehide",e),window.removeEventListener("beforeunload",e)}},[ke]),r.useEffect(()=>{var e;te&&(S(!1),E(!1),z(!1),oe(!1),ce(!1),C(!1),w&&(null===(e=M.current)||void 0===e||e.blur()))},[w,te,ce,oe,S,E,z,C]);return(0,l.jsx)(on,{selected:g,$overlayOpen:j||$||A||T,children:(0,l.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:se(ee,q)},children:[(0,l.jsx)(at,{title:Q.title,emoji:a||"",titleRef:D,searchContent:i,fuzzySearchEnabled:o,readOnly:s,collapsed:Q.collapsed,isArchived:ue("archive"),isTrashed:ue("trash"),selected:g,onToggleSelection:()=>f(e),toolboxOpen:j,setToolboxOpen:C,showColorPicker:$,showTemplatePicker:A,showEmojiPicker:T,setShowColorPicker:S,setShowTemplatePicker:E,setShowEmojiPicker:z,toolboxRef:I,emojiPickerRef:L,emojiDropdownRef:F,colorPickerRef:R,templatePickerRef:O,colorDropdownRef:H,templateDropdownRef:J,noteColors:ie,templateOptions:b,onColorSelected:t=>{te||(d(e,JSON.stringify({...Q,color:t})),S(!1),C(!1))},onTemplateSelected:t=>{if(te)return;let n=t.text.replace(/\\\$\{/g,"${");n=me(n);const r=Array.from(new Set([...Q.tags||[],...t.tags||[]]));d(e,JSON.stringify({...Q,collapsed:!1,color:t.color,text:n,title:me(t.title),tags:r})),fe(n),E(!1),C(!1)},onEmojiSelected:t=>{te||(z(!1),c(e,t).catch(e=>{console.error("Failed to save note emoji.",e)}))},isFavorite:ue("favorite"),copyFormattedContent:async()=>{if(!N.current)return;const e=N.current.innerHTML,t=N.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onDuplicateNote:()=>{u(e)},onArchiveNote:()=>{h(e)},onDeleteNote:()=>{x(e)},onToggleFavorite:()=>{te||he("favorite")},onToggleCollapse:()=>{d(e,JSON.stringify({...Q,collapsed:!Q.collapsed}))},onTitleChange:e=>ke(void 0,e)}),!Q.collapsed&&(0,l.jsx)(Pt,{darkMode:q,value:ge,searchContent:i,fuzzySearchEnabled:o,readOnly:te,editing:w,onEditorFocus:t=>v(e,t),onEditorBlur:t=>y(e,t),textareaRef:M,markdownRef:N,setValue:fe,setEditing:k,processMarkdown:e=>en(e,{temperature:_,weather:Y,city:V.city,country:V.country},W),onExecuteExpression:t=>{if(te)return;const n=((e,t,n)=>{const r=t.match(/^\$\{(\w+)\}=(.*)$/);if(!r)return e;const a=r[1];let i=r[2];const o=Xt(e);i=Vt(i,Yt({...n,...o})),i=i.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=o[t])&&void 0!==n?n:"")});const s="${"+a+"}="+Function(`return (${i})`)(),d=new RegExp(`^\\$\\{${a}\\}\\s*=([^\\r\\n]*)`,"m");return d.test(e)?e.replace(d,s):e.trimEnd()+"\n"+s})(ge,t,{temperature:_,weather:Y,city:V.city,country:V.country});fe(n),d(e,JSON.stringify({...Q,text:n}))},onSave:()=>{var e,t;return ke(null!==(e=null===(t=M.current)||void 0===t?void 0:t.value)&&void 0!==e?e:ge)},onMarkdownClick:(e,t)=>{if(te)return;const n=null!==t&&void 0!==t?t:X(e,ge);Z(n),k(!0)}}),(0,l.jsx)("footer",{className:"footer",children:(0,l.jsx)("span",{className:"footbox",children:(0,l.jsx)(Ft,{tagDropdownRef:U,date:t,tags:Q.tags,searchContent:i,fuzzySearchEnabled:o,availableTags:m,readOnly:te,tagPickerRef:P,showTagPicker:ne,creatingTag:re,newTagName:ae,setShowTagPicker:oe,setCreatingTag:ce,setNewTagName:pe,onDateChange:t=>{te||p(e,t)},hasTag:ue,toggleTag:he,createTag:xe,formatTag:le,formatDate:B})})})]})},e)},on=a.Ay.div`
position: relative;
z-index: ${({$overlayOpen:e})=>e?10:"auto"};
box-shadow: ${({selected:e})=>e?"0 0 0 3px var(--mavis-brand)":"none"};  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  margin: 10px 0px 0px 0px;

  background-color: var(--mavis-card-background);

  div {
    margin-left: 10px;
    width: 100%;
  }

  .ContentContainer {
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid var(--mavis-brand-border);

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
      border-bottom: 2px solid var(--mavis-brand-border);
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
    background: var(--mavis-brand-soft);
    color: var(--mavis-text);
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }

`,sn=({entries:e,searchContent:t,fuzzySearchEnabled:n,pickerTags:r,onHoverCard:a,onChangeEntry:i,onChangeEmoji:o,onDuplicateNote:s,onArchiveNote:d,onDeleteNote:c,updateEntryDate:p,selectedNoteIds:u,onToggleSelection:h,templateOptions:x,notesLocked:m,onEditorFocus:g,onEditorBlur:f})=>(0,l.jsx)(dn,{children:e.map((e,b)=>(0,l.jsx)("div",{onMouseEnter:()=>a(e.id),onMouseLeave:()=>a(null),children:(0,l.jsx)(an,{id:e.id,date:e.date,number:b+1,content:e.content,emoji:e.emoji,searchContent:t,fuzzySearchEnabled:n,onChangeContent:i,onChangeDate:p,onDuplicateNote:s,onArchiveNote:d,onDeleteNote:c,tags:r,selected:u.includes(e.id),onToggleSelection:h,templateOptions:x,notesLocked:m,onEditorFocus:g,onEditorBlur:f,onChangeEmoji:o})},e.id))}),dn=a.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`;var ln=n(9894);const cn=new TextEncoder,pn=new TextDecoder;function un(e){const t=new Uint8Array(e);let n="";for(let r=0;r<t.length;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function hn(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function xn(e,t){const n=await crypto.subtle.importKey("raw",cn.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function mn(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),r=crypto.getRandomValues(new Uint8Array(16)),a=await xn(t,r);return{encrypted:un(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},a,cn.encode(e))),iv:un(n),salt:un(r)}}(t,e);await(0,Z.BN)((0,Z.H9)(X.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function gn(e){const t=await(0,Z.x7)((0,Z.H9)(X.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,r){const a=await xn(r,hn(n)),i=await crypto.subtle.decrypt({name:"AES-GCM",iv:hn(t)},a,hn(e));return pn.decode(i)}(n.encryptedApiKey,n.iv,n.salt,e)}async function fn(e,t,n,r,a,i){console.log(a);const o=i||await gn(e);if(!o)throw new Error("OpenAI API Key not configured.");const s=new ln.Ay({apiKey:o,dangerouslyAllowBrowser:!0}),d=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${r}\n`;return await s.responses.create({model:a||"gpt-6-luna",input:d})}const bn=e=>{const t=(0,Z.H9)(X.OO,"users",e);return(0,Z.rJ)(t,"chatSessions")},vn=async(e,t)=>{const n=bn(e);return(await(0,Z.GG)((0,Z.P)(n,(0,Z._M)("id","==",t)))).docs},yn=e=>[...e].sort((e,t)=>Boolean(e.pinned)!==Boolean(t.pinned)?e.pinned?-1:1:e.updatedAt>t.updatedAt?-1:e.updatedAt<t.updatedAt?1:0);const wn=(0,r.createContext)(void 0),kn="You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.",jn=({uid:e,selectedNotesText:t,noteTitles:n,clearSelectedNotes:a,entries:i})=>{const[o,s]=(0,r.useState)(""),[d,l]=(0,r.useState)([]),[c,p]=(0,r.useState)([]),{sessions:u,fetchSessions:h,createSession:x,updateSession:m,deleteSession:g}=function(e){const[t,n]=r.useState([]),a=r.useCallback(async()=>{if(!e)return;const t=(await(0,Z.GG)(bn(e))).docs.map(e=>e.data());n(yn(t))},[e]),i=r.useCallback(async t=>{if(!e)return null;const r={id:V()(),title:"New Chat",createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString(),model:t,selectedPromptIds:[],messages:[],pinned:!1};return n(e=>yn([r,...e])),await(0,Z.gS)(bn(e),r),r},[e]),o=r.useCallback(async t=>{if(!e)return;n(e=>yn(e.map(e=>e.id===t.id?t:e)));const r=await vn(e,t.id);await Promise.all(r.map(n=>(0,Z.BN)((0,Z.H9)(X.OO,`users/${e}/chatSessions/${n.id}`),t)))},[e]),s=r.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const r=await vn(e,t);await Promise.all(r.map(t=>(0,Z.kd)((0,Z.H9)(X.OO,`users/${e}/chatSessions/${t.id}`))))},[e]);return{sessions:t,setSessions:n,fetchSessions:a,createSession:i,updateSession:o,deleteSession:s}}(e),[f,b]=(0,r.useState)(!1),[v,y]=(0,r.useState)(null),[w,k]=(0,r.useState)(!1),[j,C]=(0,r.useState)("gpt-6-luna"),[$,S]=(0,r.useState)(!0),A=(0,r.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),E=(0,r.useCallback)(async()=>{const e=await x(j);e&&(l([]),y(e.id),p([]))},[x,j]);(0,r.useEffect)(()=>{f&&(u.length>0||E())},[f,u,E]),(0,r.useEffect)(()=>{(async()=>{await h(),b(!0)})()},[h]);const T=(0,r.useCallback)(async e=>{if(!v)return;const t=u.find(e=>e.id===v);if(!t)return;const n=d.includes(e)?d.filter(t=>t!==e):[...d,e];l(n),await m({...t,selectedPromptIds:n,updatedAt:(new Date).toISOString()})},[v,d,u,m]),z=(0,r.useMemo)(()=>i.filter(e=>d.includes(e.id)).map(e=>{try{return JSON.parse(e.content).text||""}catch{return""}}).join("\n\n"),[i,d]),M=(0,r.useCallback)(e=>{const t=u.find(t=>t.id===e);t&&(l(t.selectedPromptIds||[]),y(e),p(t.messages),C(t.model))},[u]);(0,r.useEffect)(()=>{0!==u.length&&(v||M(u[0].id))},[u,v,M]);const N=(0,r.useMemo)(()=>i.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[i]),D=(0,r.useCallback)(async()=>{const r=o.trim();if(!r||w)return;if(!e)return void p(e=>[...e,{id:V()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const i=n.length>0?`Notes:\n${n.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",d=A(c),l={id:V()(),role:"user",content:`${i}${r}`};p(e=>{const t=[...e,l],n=u.find(e=>e.id===v);return n&&m({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?r.substring(0,30):n.title}),t}),s(""),k(!0);const h=[];$&&d&&h.push(`History:\n${d}`),t.trim()&&h.push(`Context:\n${t}`);const x=h.join("\n\n");try{var g,f;const t=[kn,z].filter(Boolean),n=await fn(e,t.join("\n\n"),r,x,j),i={id:V()(),role:"assistant",content:n.output_text.trim()||"No response was returned.",tokens:{input:(null===(g=n.usage)||void 0===g?void 0:g.input_tokens)||0,output:(null===(f=n.usage)||void 0===f?void 0:f.output_tokens)||0}};p(e=>{const t=[...e,i],n=u.find(e=>e.id===v);return n&&m({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?r.substring(0,30):n.title}),t}),a()}catch(b){console.error("Mavis error:",b);const e=b instanceof Error?b.message:"An unexpected error occurred.";p(t=>[...t,{id:V()(),role:"assistant",content:e}])}finally{k(!1)}},[o,w,e,n,t,j,c,$,A,a,u,v,m,z]),P=(0,r.useCallback)(async()=>{if(w||0===c.length)return;if(!e)return void p(e=>[...e,{id:V()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const t=A(c);k(!0);try{var n,r;const a=await fn(e,`${kn}\n\n${z}`,"Summarize the entire conversation history into one comprehensive, self-contained message.\n\nInclude all important information from the conversation, especially:\n\n- Every requirement and specification\n- Every decision that was made\n- Every implementation detail\n- Every instruction and constraint\n- Important facts, dates, names, titles, values, and references\n- Code-related decisions, expected behavior, and affected files or components\n- Problems, errors, solutions, and changes that were discussed\n- Rejected alternatives and the reasons they were rejected\n- Open questions, unresolved issues, assumptions, and pending tasks\n- The current state of the work\n- Clear next steps, if any\n\nPreserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.\n\nWrite the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.",`Conversation history:\n${t}`,j),i={id:V()(),role:"assistant",content:a.output_text.trim()||"No summary was returned.",tokens:{input:(null===(n=a.usage)||void 0===n?void 0:n.input_tokens)||0,output:(null===(r=a.usage)||void 0===r?void 0:r.output_tokens)||0}};p([i]);const o=u.find(e=>e.id===v);o&&await m({...o,messages:[i],updatedAt:(new Date).toISOString()})}catch(a){console.error("Mavis summary error:",a);const e=a instanceof Error?a.message:"An unexpected error occurred.";p(t=>[...t,{id:V()(),role:"assistant",content:e}])}finally{k(!1)}},[w,c,e,A,j,v,u,m,z]),R=(0,r.useCallback)(async e=>{if(!v)return;const t=u.find(e=>e.id===v);if(!t)return;const n="all"===e?[]:t.messages.filter(t=>t.id!==e);p(n),await m({...t,messages:n,updatedAt:(new Date).toISOString()})},[v,u,m]),O=(0,r.useCallback)(async()=>{if(!v)return;const e=u.find(e=>e.id===v);e&&(p([]),await m({...e,messages:[],updatedAt:(new Date).toISOString()}))},[v,u,m]),I=(0,r.useCallback)(async e=>{if(await g(e),v===e){const t=u.filter(t=>t.id!==e);t.length>0?M(t[0].id):await E()}},[g,v,u,M,E]),L=(0,r.useCallback)(async e=>{const t=u.find(t=>t.id===e);t&&await m({...t,pinned:!t.pinned})},[u,m]);return{prompt:o,setPrompt:s,selectedPromptIds:d,togglePrompt:T,availablePromptNotes:N,messages:c,isLoading:w,sessions:u,currentSessionId:v,createNewSession:E,loadSession:M,deleteSession:g,removeSession:I,toggleSessionPin:L,sendPrompt:D,deleteMessage:R,clearMessages:O,summarizeHistory:P,selectedModel:j,setSelectedModel:C,includeHistory:$,setIncludeHistory:S}};function Cn({children:e,uid:t,selectedNotesText:n,noteTitles:r,clearSelectedNotes:a,entries:i}){const o=jn({uid:t,selectedNotesText:n,noteTitles:r,clearSelectedNotes:a,entries:i});return(0,l.jsx)(wn.Provider,{value:o,children:e})}function $n(){const e=(0,r.useContext)(wn);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}var Sn=n(6510);const An=["gpt-5-mini","gpt-6-luna","gpt-5.6-terra","gpt-5.6-sol"],En=({uid:e,selectedNotesText:t,noteTitles:n,notesCount:a,clearSelectedNotes:o})=>{const[d,c]=r.useState(!1),{prompt:p,setPrompt:u,messages:h,isLoading:x,sendPrompt:m,deleteMessage:g,selectedModel:f,setSelectedModel:b,selectedPromptIds:v,availablePromptNotes:y,togglePrompt:w,includeHistory:k,setIncludeHistory:j,summarizeHistory:C}=$n(),[$,S]=r.useState(!1),[A,E]=r.useState(!1),T=r.useRef(null),z=r.useRef(null),M=r.useRef(null),N=r.useRef({}),[D,P]=r.useState(0),R=r.useCallback(e=>{const t=e.scrollHeight-e.clientHeight,n=t>0?e.scrollTop/t:0;P(Math.min(1,Math.max(0,n)))},[]),O=r.useCallback(e=>{R(e.currentTarget)},[R]);r.useLayoutEffect(()=>{const e=M.current;e&&(e.scrollTop=Math.max(0,e.scrollHeight-e.clientHeight),R(e))},[x,h,R]);const I=r.useCallback(()=>S(!1),[]),F=r.useCallback(()=>E(!1),[]);xe(T,I),xe(z,F);const K=r.useCallback(e=>{const t=M.current,n=N.current[e];if(!t||!n)return;const r=t.getBoundingClientRect().top,a=n.getBoundingClientRect().top;t.scrollTo({top:Math.max(0,t.scrollTop+a-r-12),behavior:"smooth"})},[]);return(0,l.jsxs)(Un,{children:[(0,l.jsxs)(Hn,{children:[(0,l.jsxs)(Jn,{ref:M,role:"log","aria-label":"Chat messages",onScroll:O,children:[0===h.length&&!x&&(0,l.jsxs)(Mn,{children:[(0,l.jsx)(Nn,{children:(0,l.jsx)(Dn,{src:Sn,alt:""})}),(0,l.jsx)(Pn,{children:"Hi, I'm Mavis."}),(0,l.jsx)(Rn,{children:"Your files, ideas, and memories are ready when you need them. Ask me to help you find a thread, make a plan, or think something through."})]}),h.map(e=>(0,l.jsxs)(zn,{ref:t=>{N.current[e.id]=t},role:e.role,children:[(0,l.jsx)(In,{role:e.role,children:e.tokens&&(0,l.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,l.jsx)(_n,{role:e.role,children:(0,l.jsx)(bt.oz,{remarkPlugins:[yt.A],components:{table:({node:e,children:t,...n})=>(0,l.jsx)(qn,{children:(0,l.jsx)("table",{...n,children:t})})},children:e.content})}),(0,l.jsxs)(On,{role:e.role,children:[(0,l.jsx)(ue.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,l.jsx)(i.nxz,{})}),(0,l.jsx)(ue.K,{title:"Delete message",onClick:()=>g(e.id),children:(0,l.jsx)(i.IXo,{})})]})]},e.id)),x&&(0,l.jsx)(_n,{role:"assistant",children:"Thinking..."})]}),(0,l.jsx)(Tn,{messages:h,scrollProgress:D,onScrollToMessage:K})]}),(0,l.jsx)(Yn,{expanded:d,children:(0,l.jsxs)(Vn,{children:[(0,l.jsxs)(Fn,{children:[(0,l.jsxs)(rr,{ref:z,children:[(0,l.jsxs)(Qn,{title:"Prompt presets",onClick:()=>{S(!1),E(e=>!e)},children:[(0,l.jsx)(L.vTI,{}),(0,l.jsxs)(er,{children:["Prompts (",v.length,")"]})]}),A&&(0,l.jsx)(tr,{children:y.map(e=>(0,l.jsxs)(nr,{className:v.includes(e.id)?"selected":"",onClick:()=>{w(e.id)},children:[(0,l.jsx)(L.vTI,{}),(0,l.jsx)("span",{children:e.title})]},e.id))})]}),(0,l.jsxs)(Xn,{ref:T,children:[(0,l.jsxs)(Qn,{style:{margin:"0px !important"},title:"Selecionar modelo de IA",onClick:()=>{E(!1),S(e=>!e)},children:[(0,l.jsx)(i.Ojn,{}),(0,l.jsx)(er,{children:f})]}),$&&(0,l.jsx)(tr,{children:An.map(e=>(0,l.jsxs)(nr,{className:f===e?"selected":"",onClick:()=>{b(e),S(!1)},title:e,children:[(0,l.jsx)(i.Ojn,{}),(0,l.jsx)("span",{children:e})]},e))})]}),(0,l.jsxs)(Kn,{children:["Notes: ",a]})]}),(0,l.jsxs)(Ln,{children:[(0,l.jsx)(Zn,{expanded:d,value:p,placeholder:"Ask Mavis...",disabled:x,onChange:e=>u(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),m())}}),(0,l.jsxs)(Bn,{children:[(0,l.jsx)(ue.K,{title:"Summarize History",onClick:()=>{C()},children:(0,l.jsx)(s.Z1M,{})}),(0,l.jsx)(ue.K,{title:"Include chat history in prompts",children:(0,l.jsx)(s.bfP,{color:k?"var(--mavis-brand)":"var(--mavis-muted)",onClick:()=>j(!k)})}),(0,l.jsx)(ue.K,{title:"Clear chat history",onClick:()=>{g("all")},children:(0,l.jsx)(L.U3h,{})}),(0,l.jsx)(ue.K,{title:d?"Collapse":"Expand",onClick:()=>c(e=>!e),children:d?(0,l.jsx)(i.eDi,{}):(0,l.jsx)(i.mkN,{})}),(0,l.jsx)(ue.K,{title:"Copy input",onClick:()=>{(async()=>{p.trim()&&await navigator.clipboard.writeText(p)})()},disabled:!p.trim(),children:(0,l.jsx)(i.nxz,{})}),(0,l.jsx)(ue.K,{title:"Send prompt",onClick:()=>{m()},disabled:x||!p.trim(),children:(0,l.jsx)(i.kGk,{})}),(0,l.jsx)(ue.K,{title:"Clear input",onClick:()=>{u("")},disabled:!p.trim(),children:(0,l.jsx)(i.yGN,{})}),(0,l.jsx)(ue.K,{title:"Clear selected notes",onClick:o,disabled:0===a,children:(0,l.jsx)(s.DnH,{})})]})]})]})})]})},Tn=({messages:e,scrollProgress:t,onScrollToMessage:n})=>{const a=r.useRef(null);return r.useLayoutEffect(()=>{const e=a.current;if(!e)return;const n=e.scrollHeight-e.clientHeight;e.scrollTop=Math.max(0,n*t)},[e,t]),(0,l.jsx)(Wn,{ref:a,role:"group","aria-label":"Chat message minimap",children:e.map((e,t)=>(0,l.jsx)(Gn,{type:"button","aria-label":`Go to ${e.role} message ${t+1}`,title:`${"user"===e.role?"You":"Mavis"} message ${t+1}`,$role:e.role,style:{height:`${Math.min(Math.max(8*Math.ceil(e.content.length/80),8),60)}px`},onClick:()=>n(e.id)},e.id))})},zn=a.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
`,Mn=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 380px;
  margin: auto;
  padding: 24px;
  text-align: center;
`,Nn=a.Ay.div`
  width: 92px;
  height: 92px;
  margin-bottom: 16px;
  overflow: hidden;
  border: 1px solid var(--mavis-brand-border);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 25%, var(--mavis-surface), var(--mavis-brand-soft));
  box-shadow: 0 8px 24px rgba(36, 32, 68, 0.12);
`,Dn=a.Ay.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 8%;
`,Pn=a.Ay.h2`
  margin: 0 0 8px;
  color: var(--mavis-brand-deep);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.04em;
`,Rn=a.Ay.p`
  max-width: 340px;
  margin: 0;
  color: var(--mavis-muted);
  font-size: 13px;
  line-height: 1.6;
`,On=a.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,In=a.Ay.div`
  font-size: 10px;
  color: var(--mavis-muted);
  margin-bottom: 2px;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  white-space: nowrap;
`,Ln=a.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,Fn=a.Ay.span`
  font-size: 12px;
  color: var(--mavis-muted);
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,Kn=a.Ay.span`
  font-size: 12px;
  color: var(--mavis-muted);
`,Bn=a.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,Un=a.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--mavis-page);
`,Hn=a.Ay.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
  background: var(--mavis-surface-subtle);
`,Jn=a.Ay.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  scrollbar-width: thin;
  background: var(--mavis-surface-subtle);
  scrollbar-color: var(--mavis-scrollbar) var(--mavis-surface-subtle);
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--mavis-surface-subtle);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--mavis-scrollbar);
    border-radius: 6px;
    border: 2px solid var(--mavis-surface-subtle);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--mavis-border-strong);
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
`,Wn=a.Ay.div`
  flex: 0 0 20px;
  width: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 12px 3px;
  overflow-y: auto;
  border-left: 1px solid var(--mavis-brand-border);
  background: var(--mavis-panel);
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Gn=a.Ay.button`
  width: 100%;
  min-height: 5px;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  border-radius: 3px;
  background: ${({$role:e})=>"user"===e?"#5b4bd8":"#c4b5fd"};
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`,qn=a.Ay.div`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: #c6c0e8 transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c6c0e8;
    border-radius: 6px;
  }
`,_n=a.Ay.div`
  max-width: 100%;
  min-width: 0;
  padding: 10px 14px;
  border-radius: 12px;
  white-space: pre-wrap;
  word-break: break-word;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  background: ${({role:e})=>"user"===e?"var(--mavis-brand)":"var(--mavis-surface)"};
  color: ${({role:e})=>"user"===e?"#fff":"var(--mavis-text)"};
  padding: 20px;
  margin: 0;
  font: 13px 'Myriad Pro', 'Lucida Grande', Lucida, Verdana, sans-serif;

  a:link {
    color: var(--mavis-markdown-link);
    text-decoration: none;
  }

  a:visited {
    color: var(--mavis-markdown-visited);
    text-decoration: none;
  }

  a:hover {
    color: var(--mavis-markdown-hover);
    text-decoration: underline;
  }

  a:active {
    color: var(--mavis-markdown-hover);
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
    color: var(--mavis-code-text);
    font-style: italic;
  }

  pre {
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid var(--mavis-border);
    background: var(--mavis-code-block);
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
    color: var(--mavis-divider);
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
    color: inherit;
    font-size: 22px;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 18px;
    color: inherit;
    padding-bottom: 2px;
  }

  h3 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 13px;
    color: inherit;
  }

  h4 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 11px;
    color: inherit;
  }

  h5 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: inherit;
  }

  h6 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: inherit;
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
    border-top: 1px solid var(--mavis-border-strong);
    border-left: 1px solid var(--mavis-border-strong);
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
    background: var(--mavis-table-header);
    color: var(--mavis-text);
    font-size: 12px;
    border-bottom: 1px solid var(--mavis-border-strong);
    border-right: 1px solid var(--mavis-border-strong);

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
    border-bottom: 1px solid var(--mavis-border-strong);
    border-right: 1px solid var(--mavis-border-strong);
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
    border: 1px solid var(--mavis-border-strong);
    border-radius: 3px;
    background: var(--mavis-surface-hover);
    color: var(--mavis-text);
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
    color: var(--mavis-muted) !important;
  }

  textarea {
    width: 100%;
  }

  img {
    max-width: 45vw;
  }
`,Yn=a.Ay.div`
  border-top: 1px solid var(--mavis-brand-border);
  padding: 10px;
  margin: 0;
  background: var(--mavis-panel);
  ${({expanded:e})=>e&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}
`,Vn=a.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--mavis-panel);
`,Zn=a.Ay.textarea`
  resize: none;
  min-height: ${({expanded:e})=>e?"calc(100vh - 80px)":"80px"};
  max-height: ${({expanded:e})=>e?"calc(100vh - 80px)":"300px"};
  width: 100%;
  border: 1px solid var(--mavis-border);
  border-radius: 8px;
  background: var(--mavis-input);
  color: var(--mavis-text);
  padding: 10px;
  margin-bottom: 30px !important;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: var(--mavis-brand);
  }
`,Xn=a.Ay.div`
  padding: 0px;
  position: relative;
  width: auto;
`,Qn=a.Ay.div`
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
    background: var(--mavis-brand-soft);
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    color: var(--mavis-text);
  }
`,er=a.Ay.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,tr=a.Ay.div`
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

  background: var(--mavis-surface);
  border: 1px solid var(--mavis-brand-border);
  border-radius: 14px;
  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 100;
`,nr=a.Ay.span`
  width: 100%;
  min-height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  text-align: left;

  border: none;
  border-radius: 10px;

  background: var(--mavis-surface-subtle);
  color: var(--mavis-text-secondary);

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
    background: var(--mavis-surface-hover);
  }

  &.selected {
    background: #5b4bd8;
    color: white;
  }
`,rr=a.Ay.div`
  position: relative;
`,ar=({panelWidth:e,toolbarOffset:t,minimized:n,setMinimized:r,menuExpanded:a,setMenuExpanded:o,mobileActive:s})=>(0,l.jsxs)(ir,{toolbarOffset:t,barWidth:e,minimized:n,mobileActive:s,children:[(0,l.jsx)(dr,{type:"button",title:a?"Collapse sessions menu":"Expand sessions menu","aria-label":a?"Collapse sessions menu":"Expand sessions menu","data-sidebar-toggle":"sessions",onClick:()=>o(!a),children:(0,l.jsx)(i.ND1,{})}),(0,l.jsx)(sr,{title:n?"Restore chat panel":"Minimize chat panel",onClick:()=>r(!n),children:n?(0,l.jsx)(i.mkN,{}):(0,l.jsx)(i.prK,{})}),(0,l.jsx)(or,{children:"Chat"})]}),ir=a.Ay.div`
  display: ${({minimized:e})=>e?"none":"flex"};
  position: absolute;
  z-index: 30;
  left: ${({toolbarOffset:e})=>`${e}px`};
  top: 10px;
  width: ${({barWidth:e})=>`${e}px`};
  flex-direction: row;
  align-items: center;
  height: 32px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid var(--mavis-brand-border);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: var(--mavis-panel);

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

    && ${ue.K} svg {
      color: #fff !important;
    }

    && ${ue.K}:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`,or=a.Ay.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
  color: var(--mavis-text);
  font-size: 1rem;

  @media (max-width: 768px) {
    display: none;
    color: #fff;
  }
`,sr=(0,a.Ay)(ue.K)`
  @media (max-width: 768px) {
    display: none !important;
  }
`,dr=a.Ay.button`
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
`,lr=({minimized:e,setMinimized:t,menuExpanded:n,setMenuExpanded:a})=>{const{sessions:o,currentSessionId:s,createNewSession:d,loadSession:c,deleteSession:p,removeSession:u,toggleSessionPin:h}=$n(),x=r.useRef(null),m=()=>a(!1);return r.useEffect(()=>{const e=e=>{var t;if(!n)return;const r=e.target;r instanceof Node&&(null===(t=x.current)||void 0===t||!t.contains(r))&&(r instanceof Element&&r.closest('[data-sidebar-toggle="sessions"]')||a(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n,a]),(0,l.jsxs)(cr,{ref:x,"data-testid":"sessions-rail",children:[!n&&(0,l.jsxs)(pr,{children:[(0,l.jsx)(ue.K,{title:"Menu","data-sidebar-toggle":"sessions",onClick:()=>a(!0),children:(0,l.jsx)(i.ND1,{})}),e&&(0,l.jsx)(ue.K,{title:"Expand Chat",onClick:()=>{t(!1),m()},children:(0,l.jsx)(i.Ojn,{})}),(0,l.jsx)(ue.K,{title:"New Chat",onClick:()=>{d(),m()},children:(0,l.jsx)(i.GGD,{})})]}),(0,l.jsx)(ur,{expanded:n,minimized:e,role:"complementary","aria-label":"Chat sessions","aria-hidden":!n,children:n&&(0,l.jsxs)(l.Fragment,{children:[e&&(0,l.jsxs)(ue.K,{expanded:!0,title:"Expand Chat",onClick:()=>{t(!1),m()},children:[(0,l.jsx)(i.Ojn,{}),(0,l.jsx)("span",{children:"Expand Chat"})]}),(0,l.jsxs)(ue.K,{expanded:!0,title:"New Chat",onClick:()=>{d(),m()},children:[(0,l.jsx)(i.GGD,{}),(0,l.jsx)("span",{children:"New Chat"})]}),(0,l.jsx)(hr,{children:o.map(e=>(0,l.jsxs)(mr,{children:[(0,l.jsx)(xr,{active:s===e.id,onClick:()=>{c(e.id),m()},children:e.title}),(0,l.jsx)(gr,{type:"button",$pinned:Boolean(e.pinned),"aria-label":e.pinned?"Unpin session":"Pin session","aria-pressed":Boolean(e.pinned),title:e.pinned?"Unpin session":"Pin session",onClick:()=>{h(e.id).catch(e=>{console.error("Failed to update session pin.",e)})},children:(0,l.jsx)(i.HzC,{})}),(0,l.jsx)(fr,{"aria-label":"Delete session",onClick:t=>{t.stopPropagation(),p(e.id)},children:(0,l.jsx)(i.IXo,{size:12})})]},e.id))})]})})]})},cr=a.Ay.div`
  width: 60px;
  height: 100%;
  flex: 0 0 60px;
  overflow: visible;
  padding: 4px;
  border-left: 1px solid var(--mavis-brand-border);
  background: ${({theme:e})=>e.surfaceSubtle||"#f7f6fc"};

  @media (max-width: 768px) {
    width: 0;
    min-width: 0;
    height: 100%;
    flex: 0 0 0;
    padding: 0;
    overflow: visible;
    border: 0;
    background: transparent;
  }
`,pr=a.Ay.div`
  position: relative;
  z-index: 21;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`,ur=a.Ay.aside`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;
  pointer-events: ${({expanded:e})=>e?"auto":"none"};
  pointer-events: ${({expanded:e})=>e?"auto":"none"};
  height: 100%;
  width: ${({expanded:e,minimized:t})=>e?t?"400px":"100%":"0"};
  padding: ${({expanded:e})=>e?"4px":"0"};
  overflow-x: hidden;
  overflow-y: ${({expanded:e})=>e?"auto":"hidden"};
  border-left: 1px solid var(--mavis-brand-border);
  background: ${({theme:e})=>e.surfaceSubtle||"#f7f6fc"};
  box-shadow: ${({expanded:e})=>e?"-4px 0 12px rgba(36, 32, 68, 0.16)":"none"};
  transition: width 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${Sn});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: auto 86%;
    opacity: 0.12;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    right: auto;
    left: 0;
    width: ${({expanded:e})=>e?"50%":"0"};
    padding: ${({expanded:e})=>e?"4px":"0"};
    border-left: 0;
    border-right: ${({expanded:e})=>e?"1px solid var(--mavis-brand-border)":"0"};
    box-shadow: ${({expanded:e})=>e?"4px 0 12px rgba(36, 32, 68, 0.16)":"none"};
  }
`,hr=a.Ay.div`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,xr=a.Ay.div`
  flex: 1;
  min-width: 0;

  display: flex;
  align-items: center;

  min-height: 28px;

  padding: 4px 10px;

  border-radius: 999px;

  background: ${({active:e})=>e?"var(--mavis-brand)":"var(--mavis-brand-soft)"};

  color: ${({active:e})=>e?"var(--mavis-text-inverse)":"var(--mavis-brand)"};

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: ${({active:e})=>e?"var(--mavis-brand-strong)":"var(--mavis-secondary-bg-hover)"};
  }
`,mr=a.Ay.div`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: 4px;
`,gr=a.Ay.button`
  display: flex;
  width: 26px;
  height: 26px;
  flex: 0 0 26px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: ${({$pinned:e})=>e?"var(--mavis-brand-soft)":"transparent"};
  color: ${({$pinned:e})=>e?"var(--mavis-brand)":"var(--mavis-muted)"};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--mavis-brand-soft);
    color: var(--mavis-brand);
  }

  svg {
    width: 14px;
    height: 14px;
    fill: ${({$pinned:e})=>e?"currentColor":"none"};
  }
`,fr=a.Ay.button`
  width: 26px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 999px;

  background: var(--mavis-brand-soft);

  color: var(--mavis-brand);

  cursor: pointer;

  transition: 0.2s;

  flex-shrink: 0;

  &:hover {
    background: rgba(239, 68, 68, 0.15);
    color: var(--mavis-danger);
  }
`,br="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const vr=({explorerExpanded:e,setExplorerExpanded:t})=>{var n;const{selectedDate:a,setSelectedDate:i}=(0,pe.M)(),{user:o}=(0,ne.o)(),s=null!==(n=null===o||void 0===o?void 0:o.uid)&&void 0!==n?n:"",{entries:d,fetchEntries:c,addEntry:p,updateEntry:u,updateEntryEmoji:h,updateEntryDate:x,renameTag:m,deleteTag:g,addTagToEntries:f,removeTagFromEntries:b,applyEntries:v,undoLastChange:y,redoLastChange:k,canUndo:j,canRedo:C}=te((null===o||void 0===o?void 0:o.uid)||""),{searchContent:$,setSearchContent:S,fuzzySearchEnabled:A,setFuzzySearchEnabled:E,selectedTag:T,setSelectedTag:z,systemTags:M,availableTags:N,pickerTags:D,visibleEntries:P}=_(d),R=r.useMemo(()=>(e=>{if(!e)return[];try{const t=localStorage.getItem(`mavis-ai-web:unpinned-tags:${e}`);if(null===t)return[];const n=JSON.parse(t);return Array.isArray(n)&&n.every(e=>"string"===typeof e)?Array.from(new Set(n)):(console.error("Stored tag pin preferences must be an array of strings."),[])}catch(t){return console.error("Failed to load tag pin preferences.",t),[]}})(s),[s]),[O,I]=r.useState(()=>({userId:s,tags:R,loaded:!1})),L=O.userId===s?O.tags:R,F=O.userId===s&&O.loaded;r.useEffect(()=>{let e=!0;return(async()=>{if(s)try{const t=await async function(e){const t=await(0,Z.x7)((0,Z.H9)(X.OO,"users",e,"settings","tagPins"));if(!t.exists())return null;const n=t.data().unpinnedTags;if(!Array.isArray(n)||!n.every(e=>"string"===typeof e))throw new Error("Stored unpinned tag preferences must be an array of strings.");return Array.from(new Set(n))}(s),n=null!==t&&void 0!==t?t:R;null===t&&n.length>0&&await ce(s,n),e&&I({userId:s,tags:n,loaded:!0})}catch(t){console.error("Failed to load tag pin preferences from Firebase.",t),e&&I({userId:s,tags:R,loaded:!0})}else I({userId:s,tags:[],loaded:!0})})(),()=>{e=!1}},[s,R]);const B=async e=>{const t=Array.from(new Set(e));if(!s)throw new Error("Cannot save tag pin preferences without an authenticated user.");await ce(s,t),I({userId:s,tags:t,loaded:!0})},[H,J]=r.useState(null),[W,G]=r.useState([]),q=r.useRef(null),Y=r.useRef(null),[V,Q]=r.useState(0),[ee,ie]=r.useState(0),oe=r.useRef(null),[se,le]=r.useState(0),[ue,he]=r.useState(0),[xe,ge]=r.useState(!1),[fe,be]=r.useState(!1),[ve,ye]=r.useState(!1),[we,ke]=r.useState("notes"),[je,Ce]=r.useState(!0),$e=r.useCallback(e=>{const{clientWidth:t,scrollLeft:n}=e.currentTarget;if(0===t)return;const r=n>=t/2?"chat":"notes";ke(e=>e===r?e:r)},[]),Se=r.useMemo(()=>d.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[d]),Ae=r.useMemo(()=>d.filter(e=>U(e.content).includes("trash")).map(e=>e.id),[d]),Ee=r.useMemo(()=>W.filter(e=>Ae.includes(e)),[W,Ae]);r.useLayoutEffect(()=>{const e=()=>{var e;const t=oe.current,n=document.getElementById("header-portal");le(null!==(e=null===t||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0),he(t&&n?t.getBoundingClientRect().left-n.getBoundingClientRect().left:0)};e();const t=new ResizeObserver(e);return oe.current&&t.observe(oe.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[e,xe,fe,ve]),r.useLayoutEffect(()=>{const e=()=>{var e;const t=Y.current,n=document.getElementById("header-portal");Q(null!==(e=null===t||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0),ie(t&&n?t.getBoundingClientRect().left-n.getBoundingClientRect().left:0)};e();const t=new ResizeObserver(e);return Y.current&&t.observe(Y.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[e,xe,fe,ve]);const Te=r.useCallback(e=>{G(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),ze=r.useCallback(()=>{G(P.map(e=>e.id))},[P]),Me=r.useCallback(()=>{G([])},[]);r.useEffect(()=>{G(e=>e.filter(e=>d.some(t=>t.id===e)))},[d]);const Ne=r.useMemo(()=>d.filter(e=>W.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[d,W]),De=r.useMemo(()=>d.filter(e=>W.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[d,W]),Pe=r.useCallback((e,t)=>{q.current={id:e,textarea:t}},[]),Re=r.useCallback((e,t)=>{const n=q.current;(null===n||void 0===n?void 0:n.id)===e&&n.textarea===t&&(q.current=null)},[]),Oe=r.useCallback(()=>{const e=q.current;if(null!==e&&void 0!==e&&e.textarea.isConnected)return{entryId:e.id,value:e.textarea.value,textarea:e.textarea};const t=d.find(e=>e.id===W[0]);if(!t)return null;const n=de(t.content,K);return{entryId:t.id,value:n.text||"",textarea:null}},[d,W]),Ie=r.useCallback(async(e,t)=>{if(je)throw new Error("Unlock note editing before using the AI assistant.");const n=d.find(t=>t.id===e);if(!n)throw new Error("The note selected for AI editing could not be found.");const r=K(n.content)?JSON.parse(n.content):{...ae,text:n.content},a=r&&"object"===typeof r?r:{...ae,text:n.content};await u(e,JSON.stringify({...a,text:t}))},[d,je,u]),Le=function({userId:e,getNoteContext:t,onContentChange:n}){const[a,i]=(0,r.useState)(!1),[o,s]=(0,r.useState)(!1),[d,l]=(0,r.useState)(""),[c,p]=(0,r.useState)(""),[u,h]=(0,r.useState)(!1),[x,m]=(0,r.useState)(""),g=(0,r.useRef)({entryId:null,value:"",selectionStart:null,selectionEnd:null}),f=()=>{s(!1),l(""),p(""),m("")};return{aiLoading:a,assistantOpen:o,instruction:d,setInstruction:l,apiKeyInput:c,setApiKeyInput:p,requiresApiKey:u,error:x,openAssistant:async()=>{var n,r,a,i,o;const d=t(),c=null===d||void 0===d?void 0:d.textarea,u=null!==(n=null!==(r=null===c||void 0===c?void 0:c.value)&&void 0!==r?r:null===d||void 0===d?void 0:d.value)&&void 0!==n?n:"",x=null!==(a=null===c||void 0===c?void 0:c.selectionStart)&&void 0!==a?a:null,f=null!==(i=null===c||void 0===c?void 0:c.selectionEnd)&&void 0!==i?i:null;if(g.current={entryId:null!==(o=null===d||void 0===d?void 0:d.entryId)&&void 0!==o?o:null,value:u,selectionStart:x,selectionEnd:f},s(!0),l(""),p(""),m(""),!d)return h(!1),void m("Select a note or start editing a note to use the AI assistant.");if(!e)return h(!1),void m("Sign in to use the AI assistant.");try{const t=await gn(e);h(!t)}catch(b){console.error("Failed to load the OpenAI API key.",b),h(!0),m("Could not load the saved API key. Enter it again to continue.")}},closeAssistant:f,clearInstruction:()=>{l(""),m("")},submitInstruction:async()=>{if(a)return;const t=d.trim();if(!t)return void m("Enter an instruction for the note.");if(!e)return void m("Sign in to use the AI assistant.");const{entryId:r,value:o,selectionStart:s,selectionEnd:l}=g.current;if(r){i(!0),m("");try{let a;if(u){if(a=c.trim(),!a)return void m("Enter your OpenAI API key.");await mn(e,a),h(!1),p("")}else a=await gn(e);if(null!==s&&null!==l&&s!==l){const i=o.substring(s,l),d=await fn(e,br,t,i,"gpt-6-luna",a),c=o.substring(0,s)+d.output_text.trim()+o.substring(l);await n(r,c)}else{const i=await fn(e,br,t,o,"gpt-6-luna",a);await n(r,`${o}\n\n${i.output_text.trim()}`)}f()}catch(x){console.error("AI note request failed.",x),m(x instanceof Error?x.message:"AI request failed.")}finally{i(!1)}}else m("Select a note or start editing a note to use the AI assistant.")}}}({userId:null===o||void 0===o?void 0:o.uid,getNoteContext:Oe,onContentChange:Ie});r.useEffect(()=>{c()},[c]);const Fe=()=>{window.scrollTo({top:0,behavior:"smooth"})},Ke=async(e=W)=>{if(je||!e.length)return;const t=new Set(d.filter(t=>e.includes(t.id)&&U(t.content).includes("trash")).map(e=>e.id)),n=e.filter(e=>!t.has(e));if(Ee.length){const e=`${Ee.length} selected ${1===Ee.length?"note":"notes"}`,t=`${n.length} selected ${1===n.length?"note":"notes"}`,r=n.length?`Move ${t} to Trash and permanently delete ${e} from Trash?`:`Permanently delete ${e} from Trash?`;if(!window.confirm(r))return}const r=d.filter(e=>n.includes(e.id)).map(e=>{const t=de(e.content,K);return{...e,content:JSON.stringify({...t,tags:(n=t.tags,Array.from(new Set([...n.filter(e=>"archive"!==e),"trash"])))})};var n});await v(r,Ee)},Be=async(e=W)=>{if(je||!e.length)return;const t=d.filter(t=>e.includes(t.id)).map(e=>{const t=de(e.content,K);return{...e,content:JSON.stringify({...t,tags:(n=t.tags,n.includes("archive")?n.filter(e=>"archive"!==e):[...n.filter(e=>"trash"!==e),"archive"])})};var n});await v(t)},Ue=(r.useMemo(()=>d.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[d]),u);return(0,l.jsx)(yr,{children:(0,l.jsxs)(Cn,{uid:o?o.uid:"",selectedNotesText:Ne,noteTitles:De,clearSelectedNotes:Me,entries:d,children:[(0,l.jsxs)(re,{children:[(0,l.jsx)(w,{selectedTag:T,selectedDate:a,searchContent:$,fuzzySearchEnabled:A,onSearchChange:S,onToggleFuzzySearch:()=>E(e=>!e),onDateChange:e=>{i(e.target.value)},onAddNote:async function(){const e="all"!==T?[T]:[];await p({date:a,content:JSON.stringify({...ae,tags:e})}),Fe()},onCopyAllNotes:async()=>{const e=Ne.length>0?Ne:P.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:ze,onClearAll:Me,onArchiveSelected:async()=>{try{await Be()}catch(e){console.error("Failed to archive selected notes.",e)}},onDeleteSelected:async()=>{try{await Ke()}catch(e){console.error("Failed to delete selected notes.",e)}},onUndo:async()=>{try{await y()}catch(e){console.error("Failed to undo the last note change.",e)}},onRedo:async()=>{try{await k()}catch(e){console.error("Failed to redo the last note change.",e)}},canUndo:j,canRedo:C,noteAssistant:Le,selectedCount:W.length,explorerExpanded:e,setExplorerExpanded:t,panelWidth:V,toolbarOffset:ee,minimized:xe,setMinimized:ge,mobileActive:"notes"===we,notesLocked:je,onToggleNotesLock:()=>{if(!je){const e=document.activeElement;e instanceof HTMLElement&&(e.isContentEditable||e instanceof HTMLTextAreaElement)&&e.blur()}Ce(e=>!e)}}),(0,l.jsx)(ar,{onClearAll:Me,panelWidth:se,toolbarOffset:ue,minimized:fe,setMinimized:be,menuExpanded:ve,setMenuExpanded:ye,mobileActive:"chat"===we})]}),(0,l.jsxs)(wr,{onScroll:$e,children:[(0,l.jsxs)(kr,{role:"region","aria-label":"Notes",children:[(0,l.jsx)(me,{systemTags:M,customTags:N,unpinnedTags:L,onToggleTagPin:async e=>{!je&&F&&await B(L.includes(e)?L.filter(t=>t!==e):[...L,e])},selectedTag:T,setSelectedTag:z,explorerExpanded:e,setExplorerExpanded:t,minimized:xe,setMinimized:ge,selectedNoteIds:W,onRenameTag:async(e,t)=>{if(!je){if(await m(e,t),L.includes(e)){const n=L.filter(t=>t!==e);n.includes(t)||n.push(t),await B(n)}T===e&&z(t)}},onDeleteTag:async e=>{je||(await g(e),L.includes(e)&&await B(L.filter(t=>t!==e)),T===e&&z("all"))},onAddTagToSelected:async e=>{je||await f(W,e)},onRemoveTagFromSelected:async e=>{je||await b(W,e)},trashCount:Ae.length,selectedTrashCount:Ee.length,onDeleteSelectedNotes:Ke,onRestoreSelectedTrash:async()=>{je||await b(Ee,"trash")},onRestoreAllTrash:async()=>{je||await b(Ae,"trash")},onEmptyTrash:async()=>{if(je||!Ae.length)return;window.confirm(`Permanently delete all ${Ae.length} note${1===Ae.length?"":"s"} from Trash? You can undo this while the notes view is open.`)&&await v([],Ae)},actionsLocked:je,tagPreferencesLoading:!F}),(0,l.jsx)($r,{ref:Y,minimized:xe,otherMinimized:fe,children:!xe&&(0,l.jsx)(sn,{entries:P,searchContent:$,fuzzySearchEnabled:A,pickerTags:D,updateEntryDate:async(e,t)=>{je||await x(e,t)},onHoverCard:J,onChangeEntry:Ue,onChangeEmoji:async(e,t)=>{je||await h(e,t)},onDuplicateNote:async e=>{if(!je)try{const t=d.find(t=>t.id===e);if(!t)throw new Error("The note selected for duplication could not be found.");if(!await p({content:t.content,date:t.date,emoji:t.emoji}))throw new Error("The note could not be duplicated for the current user.")}catch(t){console.error("Failed to duplicate note.",t)}},onArchiveNote:async e=>{try{await Be([e])}catch(t){console.error("Failed to archive note.",t)}},onDeleteNote:async e=>{try{await Ke([e])}catch(t){console.error("Failed to delete note.",t)}},selectedNoteIds:W,onToggleSelection:Te,templateOptions:Se,notesLocked:je,onEditorFocus:Pe,onEditorBlur:Re})})]}),(0,l.jsxs)(jr,{role:"region","aria-label":"AI sessions",$minimized:fe,children:[(0,l.jsx)(Cr,{ref:oe,minimized:fe,otherMinimized:xe,children:(0,l.jsx)(En,{uid:(null===o||void 0===o?void 0:o.uid)||"",selectedNotesText:Ne,noteTitles:De,notesCount:W.length,clearSelectedNotes:Me})}),(0,l.jsx)(lr,{minimized:fe,setMinimized:be,menuExpanded:ve,setMenuExpanded:ye})]})]})]})})},yr=a.Ay.div`
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
`,wr=a.Ay.div`
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
`,kr=a.Ay.div`
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
`,jr=a.Ay.div`
  position: relative;
  display: flex;
  flex: ${({$minimized:e})=>e?"0 0 60px":"1 1 60px"};
  width: ${({$minimized:e})=>e?"60px":"auto"};
  min-width: 0;
  max-width: ${({$minimized:e})=>e?"60px":"1084px"};
  height: 100%;
  min-height: 0;

  @media (max-width: 768px) {
    display: flex;
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    max-width: none;
    height: 100%;
    overflow: hidden;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`,Cr=a.Ay.div`
  flex: ${({minimized:e})=>e?"0":"1"};
  width: ${({minimized:e})=>e?"0":"auto"};
  min-width: 0;
  max-width: 1324px;
  margin-left: ${({minimized:e,otherMinimized:t})=>!e&&t?"auto":"0"};
  margin-right: ${({minimized:e,otherMinimized:t})=>!e&&t?"auto":"0"};
  flex-direction: column;
  overflow: hidden;
  background: var(--mavis-panel);

  @media (max-width: 768px) {
    flex: ${({minimized:e})=>e?"0":"1 1 0"};
    max-width: none;
    margin: 0;
  }
`,$r=a.Ay.div`
  flex: ${({minimized:e})=>e?"0 0 0":"1.5"};
  width: ${({minimized:e})=>e?"0":"auto"};
  min-width: 0;
  max-width: 1324px;
  margin-left: ${({minimized:e,otherMinimized:t})=>!e&&t?"auto":"0"};
  margin-right: ${({minimized:e,otherMinimized:t})=>!e&&t?"auto":"10px"};
  flex-direction: column;
  overflow: hidden;
  background: var(--mavis-panel);
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: var(--mavis-scrollbar) var(--mavis-panel);

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--mavis-panel);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--mavis-scrollbar);
    border-radius: 6px;
    border: 2px solid var(--mavis-panel);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--mavis-border-strong);
  }

  @media (max-width: 768px) {
    flex: ${({minimized:e})=>e?"0 0 0":"1 1 0"};
    max-width: none;
    margin: 0;
  }
`},6510(e,t,n){e.exports=n.p+"static/media/mavis.28a5d798b26e2e8abaab.png"}}]);
//# sourceMappingURL=dashboard.1488d974.chunk.js.map