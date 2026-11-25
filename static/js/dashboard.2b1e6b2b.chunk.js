"use strict";(Array.isArray(globalThis.webpackChunkmavis_ai_web)?globalThis.webpackChunkmavis_ai_web:globalThis.webpackChunkmavis_ai_web=[]).push([[945],{5091(e,t,n){n.r(t),n.d(t,{default:()=>sn});var o=n(5043),i=n(2816),r=n(1009),a=n(7246),s=n(4960),l=n(7149),d=n(579);const c=({selectedTag:e,selectedDate:t,searchContent:n,onSearchChange:i,onDateChange:c,onAddNote:w,onCopyAllNotes:y,selectedCount:v,onSelectAll:k,onClearAll:j,expanded:C,setExplorerExpanded:S,panelWidth:$,minimized:A,setMinimized:T,mobileActive:E})=>{const N=C?208:52,[D,M]=o.useState(!1),z=o.useRef(null),P=o.useRef(null);return o.useEffect(()=>{if(!D)return;const e=e=>{var t;const n=e.target;n instanceof Node&&null!==(t=z.current)&&void 0!==t&&t.contains(n)||M(!1)};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[D]),o.useEffect(()=>{var e;D&&(null===(e=P.current)||void 0===e||e.focus())},[D]),o.useEffect(()=>{E||M(!1)},[E]),(0,d.jsxs)(p,{explorerWidth:N,barWidth:$,minimized:A,mobileActive:E,children:[(0,d.jsx)(g,{children:A?"Explorer":""===n.trim()?e.charAt(0).toUpperCase()+e.slice(1):"Search"}),!A&&(0,d.jsxs)(d.Fragment,{children:["journal"===e&&(0,d.jsx)(u,{children:(0,d.jsx)("input",{title:"Select date",type:"date",value:t,onChange:c})}),(0,d.jsxs)(x,{ref:z,$searchExpanded:D,children:[(0,d.jsx)(h,{type:"button","aria-label":"Open search","aria-expanded":D,tabIndex:D?-1:0,onClick:()=>M(!0),children:(0,d.jsx)(r.CKj,{})}),(0,d.jsx)("input",{ref:P,"aria-hidden":!D,tabIndex:D?0:-1,placeholder:"Search",value:n,onChange:e=>i(e.target.value),onKeyDown:e=>{"Enter"!==e.key&&"Escape"!==e.key||(e.preventDefault(),e.currentTarget.blur(),M(!1))}}),(0,d.jsx)(a.K,{title:"Clear search",onClick:()=>i(""),children:(0,d.jsx)(l.rOP,{})})]})]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(b,{type:"button",title:C?"Collapse notes menu":"Expand notes menu","aria-label":C?"Collapse notes menu":"Expand notes menu","data-sidebar-toggle":"notes",onClick:()=>S(!C),children:(0,d.jsx)(r.ND1,{})}),!A&&(0,d.jsxs)(d.Fragment,{children:[v>0?(0,d.jsx)(a.K,{title:"Clear all notes",onClick:j,children:(0,d.jsx)(r.TG1,{})}):(0,d.jsx)(a.K,{title:"Select all visible notes",onClick:k,children:(0,d.jsx)(r.NLe,{})}),(0,d.jsx)(a.K,{title:"Copy all visible notes",onClick:y,children:(0,d.jsx)(r.nxz,{})}),(0,d.jsx)(a.K,{title:"Add note",onClick:w,children:(0,d.jsx)(s.n4h,{})})]}),(0,d.jsx)(f,{title:A?"Restore notes panel":"Minimize notes panel",onClick:()=>T(!A),children:A?(0,d.jsx)(r.mkN,{}):(0,d.jsx)(r.prK,{})})]})]})},p=i.Ay.div`
  display: ${({minimized:e})=>e?"none":"flex"};
  height: 32px;
  min-width: 100px;
  width: ${({barWidth:e})=>`${e+20}px`};
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin-left: ${({explorerWidth:e})=>`${e}px`};
  margin-top: 10px;
  border-bottom: 1px solid #d0d0d0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;
  position: relative;

  @media (max-width: 768px) {
    display: ${({mobileActive:e})=>e?"flex":"none"};
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    height: 40px;
    margin: 0;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
    justify-content: flex-end;

    && ${a.K} svg {
      color: #fff !important;
    }

    && ${a.K}:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`,u=i.Ay.div`
  display: flex;
  align-items: center;

  height: 35px;

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
`,g=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;

  @media (max-width: 768px) {
    display: none;
  }
`,x=i.Ay.div`
  display: flex;
  align-self: ${({$searchExpanded:e})=>e?"flex-start":"center"};
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  width: ${({$searchExpanded:e})=>e?"250px":"30px"};
  height: 30px;
  overflow: hidden;
  transform-origin: right center;
  background: ${({$searchExpanded:e})=>e?"#231f20":"transparent"};
  border-radius: ${({$searchExpanded:e})=>e?"0 0 10px 10px":"10px"};
  box-shadow: none;
  transition: width 240ms cubic-bezier(0.2, 0.8, 0.2, 1), height 200ms ease, margin 200ms ease,
    background-color 180ms ease, border-radius 200ms ease, box-shadow 220ms ease;

  > button {
    order: 2;
    display: flex;
    flex: ${({$searchExpanded:e})=>e?"0 0 0px":"0 0 30px"};
    width: ${({$searchExpanded:e})=>e?"0":"30px"};
    min-width: 0;
    padding: 0;
    overflow: hidden;
    opacity: ${({$searchExpanded:e})=>e?0:1};
    pointer-events: ${({$searchExpanded:e})=>e?"none":"auto"};
    transition: flex-basis 220ms ease, opacity 140ms ease;
  }

  input {
    order: 1;
    display: block;
    flex: ${({$searchExpanded:e})=>e?"1 1 0%":"0 0 0px"};
    width: 0;
    min-width: 0;
    padding: ${({$searchExpanded:e})=>e?"10px":"0"};
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    opacity: ${({$searchExpanded:e})=>e?1:0};
    pointer-events: ${({$searchExpanded:e})=>e?"auto":"none"};
    transition: flex-grow 220ms ease, opacity 160ms ease, padding 220ms ease;
  }

  && ${a.K} svg {
    color: #fff !important;
  }

  && ${a.K} {
    order: 3;
    display: flex;
    flex: ${({$searchExpanded:e})=>e?"0 0 34px":"0 0 0px"};
    width: ${({$searchExpanded:e})=>e?"30px":"0"} !important;
    min-width: ${({$searchExpanded:e})=>e?"30px":"0"} !important;
    margin: ${({$searchExpanded:e})=>e?"2px":"0"} !important;
    padding: 0 !important;
    overflow: hidden;
    opacity: ${({$searchExpanded:e})=>e?1:0};
    pointer-events: ${({$searchExpanded:e})=>e?"auto":"none"};
    transition: flex-basis 220ms ease, opacity 160ms ease, margin 220ms ease;
  }

  @media (max-width: 1260px) {
    position: static;
    width: ${({$searchExpanded:e})=>e?"160px":"30px"};
    margin: ${({$searchExpanded:e})=>e?"0 5px 0 auto":"2px 2px 2px auto"};
  }

  @media (max-width: 768px) {
    position: ${({$searchExpanded:e})=>e?"absolute":"static"};
    order: 1;
    top: ${({$searchExpanded:e})=>e?"2px":"auto"};
    right: ${({$searchExpanded:e})=>e?"2px":"auto"};
    z-index: ${({$searchExpanded:e})=>e?20:"auto"};
    flex: 0 0 ${({$searchExpanded:e})=>e?"calc(100% - 24px)":"30px"};
    width: ${({$searchExpanded:e})=>e?"calc(100% - 24px)":"30px"};
    min-width: ${({$searchExpanded:e})=>e?"0":"30px"};
    height: ${({$searchExpanded:e})=>e?"36px":"30px"};
    margin: ${({$searchExpanded:e})=>e?"0":"2px"};
    align-self: ${({$searchExpanded:e})=>e?"auto":"center"};
    overflow: hidden;
    border-radius: ${({$searchExpanded:e})=>e?"0 0 12px 12px":"10px"};
    background: ${({$searchExpanded:e})=>e?"#fff":"transparent"};
    box-shadow: ${({$searchExpanded:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

    > button {
      color: #fff;
    }

    > input {
      padding: ${({$searchExpanded:e})=>e?"0 10px":"0"};
      height: 100%;
    }

    && ${a.K} svg {
      color: #231f20 !important;
    }

    && ${a.K}:hover {
      background: rgba(35, 31, 32, 0.1);
    }

    input::placeholder {
      color: rgba(35, 31, 32, 0.6);
    }

    input {
      color: #231f20;
    }
  }
`,h=i.Ay.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #2e2e2e;
  cursor: pointer;
`,m=i.Ay.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 35px;

  @media (max-width: 768px) {
    order: 0;
  }
`,f=(0,i.Ay)(a.K)`
  @media (max-width: 768px) {
    display: none !important;
  }
`,b=i.Ay.button`
  display: none;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #2e2e2e;

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 768px) {
    display: flex;
    color: #fff;
  }
`;var w=n(2815),y=n(4966),v=n(2127);const k=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},j=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},C=e=>{if(!k(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))};var S=n(8222),$=n.n(S),A=n(8046),T=n(1286);const E=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),N=e=>{const t=(0,A.H9)(T.OO,"users",e);return(0,A.rJ)(t,"entries")},D=async(e,t)=>{const n=N(e);return(await(0,A.GG)((0,A.P)(n,(0,A._M)("id","==",t)))).docs};var M=n(6625),z=n(7950);const P=({children:e})=>{const t=document.getElementById("header-portal");return t?(0,z.createPortal)(e,t):null},O={title:"",type:"record",tags:[],text:"",color:"#fff",locked:!1,pinned:!1,collapsed:!1},R=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],I=e=>e.replace(/\b\w/g,e=>e.toUpperCase());var K=n(5561),L=n(5263);function F(e,t){(0,o.useEffect)(()=>{function n(n){e.current&&n.target instanceof Node&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[e,t])}const H=({systemTags:e,customTags:t,unpinnedTags:n,onToggleTagPin:i,selectedTag:s,setSelectedTag:l,explorerExpanded:c,setExplorerExpanded:p,minimized:u,setMinimized:g,selectedNoteIds:x,onRenameTag:h,onDeleteTag:m,onAddTagToSelected:f,onRemoveTagFromSelected:b,trashCount:w,selectedTrashCount:y,onDeleteSelectedNotes:v,onRestoreSelectedTrash:k,onRestoreAllTrash:j,onEmptyTrash:C})=>{const S=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),[$,A]=o.useState(null),[T,E]=o.useState(null),[N,D]=o.useState(""),M=o.useRef(null),z=o.useRef(null),P=o.useCallback(()=>{A(null),E(null)},[]);F(z,P),o.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!c)return;const n=e.target;n instanceof Node&&(null===(t=M.current)||void 0===t||!t.contains(n))&&(n instanceof Element&&n.closest('[data-sidebar-toggle="notes"]')||p(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[c,p]);const O=async e=>{await e(),A(null)},R=e=>{const t=e.icon,n="all"!==e.name&&"other"!==e.name,o="trash"===e.name;return(0,d.jsxs)(B,{ref:$===e.name?z:null,$active:$===e.name,children:[(0,d.jsxs)(a.K,{expanded:c,selected:s===e.name,title:e.name,onClick:()=>l(e.name),children:[(0,d.jsx)(t,{}),c&&(0,d.jsx)("span",{children:S(e.name)})]}),c&&n&&(0,d.jsxs)(W,{children:[(0,d.jsx)(G,{type:"button","aria-label":`Manage ${e.name} tag`,title:`Manage ${S(e.name)} tag`,onClick:t=>{t.stopPropagation(),A($===e.name?null:e.name)},children:(0,d.jsx)(r.ZZB,{})}),$===e.name&&(0,d.jsx)(_,{children:o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(q,{type:"button",disabled:!x.length,onClick:()=>{O(v)},children:"Delete Selected"}),(0,d.jsx)(q,{type:"button",disabled:0===y,onClick:()=>{O(k)},children:"Restore Selected"}),(0,d.jsx)(q,{type:"button",disabled:0===w,onClick:()=>{O(j)},children:"Restore All"}),(0,d.jsx)(q,{type:"button",disabled:0===w,onClick:()=>{O(C)},children:"Empty Bin"})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(q,{type:"button",disabled:!x.length,onClick:()=>{O(()=>f(e.name))},children:"Add Selected"}),(0,d.jsx)(q,{type:"button",disabled:!x.length,onClick:()=>{O(()=>b(e.name))},children:"Remove Selected"})]})})]})]},e.name)},I=e=>{const t=!n.includes(e);return(0,d.jsxs)(B,{ref:$===e?z:null,$active:$===e,children:[(0,d.jsxs)(a.K,{expanded:c,selected:s===e,title:S(e),onClick:()=>l(e),children:[(0,d.jsx)(r.cnX,{}),T===e?(0,d.jsx)(Y,{autoFocus:!0,value:N,onClick:e=>e.stopPropagation(),onChange:e=>{e.currentTarget.setCustomValidity(""),D(e.target.value)},onKeyDown:async t=>{if("Enter"===t.key){const n=N.trim();if(!n)return t.currentTarget.setCustomValidity("A tag name is required."),void t.currentTarget.reportValidity();await h(e,n),E(null),A(null)}"Escape"===t.key&&P()}}):c&&(0,d.jsx)("span",{children:S(e)})]}),c&&(0,d.jsxs)(W,{children:[(0,d.jsx)(G,{type:"button","aria-label":`Manage ${e} tag`,title:`Manage ${S(e)} tag`,onClick:t=>{t.stopPropagation(),A($===e?null:e)},children:(0,d.jsx)(r.ZZB,{})}),$===e&&(0,d.jsxs)(_,{children:[(0,d.jsx)(q,{type:"button",onClick:()=>{i(e),A(null)},children:t?"Unpin":"Pin"}),(0,d.jsx)(q,{type:"button",onClick:()=>{E(e),D(e)},children:"Rename"}),(0,d.jsx)(q,{type:"button",onClick:()=>{O(()=>m(e))},children:"Delete"}),(0,d.jsx)(q,{type:"button",disabled:!x.length,onClick:()=>{O(()=>f(e))},children:"Add Selected"}),(0,d.jsx)(q,{type:"button",disabled:!x.length,onClick:()=>{O(()=>b(e))},children:"Remove Selected"})]})]})]},e)},K=t.filter(e=>!n.includes(e)),H=t.filter(e=>n.includes(e));return(0,d.jsxs)(J,{ref:M,expanded:c,children:[(0,d.jsxs)(a.K,{expanded:c,title:"Menu",onClick:()=>p(!c),children:[(0,d.jsx)(r.ND1,{}),c&&(0,d.jsx)("span",{children:"Menu"})]}),u&&(0,d.jsxs)(a.K,{expanded:c,title:"Expand Notes Explorer",onClick:()=>g(!u),children:[(0,d.jsx)(L.$ZN,{}),c&&(0,d.jsx)("span",{children:"Expand Notes Explorer"})]}),e.filter(e=>"top"===e.position).map(R),K.map(I),e.filter(e=>"bottom"===e.position).map(R),H.length>0&&(0,d.jsx)(U,{role:"separator"}),H.map(I)]})},J=i.Ay.div`
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
`,U=i.Ay.div`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  background: #d0d0d0;
`,B=i.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${({$active:e})=>e?9999:1};
`,W=i.Ay.div`
  position: relative;
`,G=i.Ay.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
`,_=i.Ay.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
`,q=i.Ay.button`
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
`,Y=i.Ay.input`
  width: 100px;
  margin-left: 8px;
`;var X=n(5369);const V=({title:e,locked:t,collapsed:n,isFavorite:o,selected:i,onToggleSelection:l,copyFormattedContent:c,onToggleFavorite:p,onToggleLock:u,onToggleCollapse:g,onTitleChange:x})=>(0,d.jsxs)(Q,{children:[(0,d.jsxs)(ee,{children:[(0,d.jsx)(Z,{title:i?"Unselect note":"Select note",onClick:l,children:i?"\u2713":""}),o?(0,d.jsx)(a.K,{disabled:t,title:"Remove favorite",onClick:p,children:(0,d.jsx)(X.gt3,{})}):(0,d.jsx)(a.K,{disabled:t,title:"Add favorite",onClick:p,children:(0,d.jsx)(r.usP,{})}),(0,d.jsx)(te,{title:"Note name",role:"textbox",contentEditable:!t,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>x(e.currentTarget.innerText),children:e})]}),(0,d.jsxs)(ne,{children:[(0,d.jsx)(a.K,{title:"Copy note",onClick:c,children:(0,d.jsx)(r.nxz,{})}),t?(0,d.jsx)(a.K,{title:"Unlock note",onClick:u,children:(0,d.jsx)(r.F5$,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Lock note",onClick:u,children:(0,d.jsx)(r.K4k,{})}),n?(0,d.jsx)(a.K,{title:"Expand note",onClick:g,children:(0,d.jsx)(s.BSQ,{})}):(0,d.jsx)(a.K,{title:"Collapse note",onClick:g,children:(0,d.jsx)(s.q2p,{})})]})]}),Z=i.Ay.span`
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
`,Q=i.Ay.header`
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  svg {
    cursor: pointer;
    height: 18px;
  }

  @media (max-width: 1260px) {
    height: auto;
    min-height: 44px;
  }
`,ee=i.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;

  color: black;
`,te=i.Ay.span`
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
`,ne=i.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`;var oe=n(8849),ie=n(5709),re=n(8420),ae=n(6801),se=n(8452),le=n(285),de=n(4853),ce=n(8550),pe=n(3596),ue=n(5312),ge=n.n(ue);const xe=e=>{const t=e=>{for(let i=0;i<e.children.length;i+=1){const r=e.children[i];if("text"===r.type){var n,o;const t=null===(n=r.position)||void 0===n||null===(o=n.start)||void 0===o?void 0:o.offset;void 0!==t&&(e.children[i]={type:"element",tagName:"span",properties:{"data-note-source-start":t},children:[r]})}else"element"===r.type&&t(r)}};t(e)},he=()=>xe,me=({label:e,expression:t,onExecute:n})=>(0,d.jsx)("button",{className:"markdownButton",onClick:()=>n(t),children:e}),fe=({value:e,locked:t,editing:n,textareaRef:o,markdownRef:i,setValue:r,setEditing:a,onSave:s,onMarkdownClick:l,processMarkdown:c,onExecuteExpression:p})=>{if(n)return(0,d.jsx)(we,{ref:o,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:e||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,r(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)&&(s(),a(!1))}});const u=c(e||"* \u2753 What do you have for today?");return(0,d.jsx)(be,{ref:i,onClick:n=>{if(t)return;const o=n.target;if(o.closest("button"))return;const i=u===e?((e,t,n)=>{var o,i,r;const a=document,s=null===(o=a.caretPositionFromPoint)||void 0===o?void 0:o.call(a,t,n),l=(null===s||void 0===s?void 0:s.offsetNode.nodeType)===Node.TEXT_NODE,d=l?null:null===(i=a.caretRangeFromPoint)||void 0===i?void 0:i.call(a,t,n),c=l?null===s||void 0===s?void 0:s.offsetNode:null===d||void 0===d?void 0:d.startContainer,p=l?null===s||void 0===s?void 0:s.offset:null===d||void 0===d?void 0:d.startOffset;if(!c||void 0===p||c.nodeType!==Node.TEXT_NODE||!e.contains(c))return null;const u=null===(r=c.parentElement)||void 0===r?void 0:r.closest("[data-note-source-start]"),g=null===u||void 0===u?void 0:u.getAttribute("data-note-source-start");if(null===g||void 0===g)return null;const x=Number(g)+p;return Number.isFinite(x)?x:null})(n.currentTarget,n.clientX,n.clientY):null;l(o.innerText||o.textContent||"",i)},children:(0,d.jsx)(oe.oz,{rehypePlugins:[ie.A,he],components:{button(e){var t,n,o;const i=decodeURIComponent(String(null!==(t=null===(n=e.node)||void 0===n||null===(o=n.properties)||void 0===o?void 0:o.dataExpression)&&void 0!==t?t:""));return(0,d.jsx)(me,{label:String(e.children),expression:i,onExecute:p})}},remarkPlugins:[[se.A,{padSpaceAfter:!1,emoticon:!0}],[ce.A,{tight:!0,ordered:!0}],[re.A,{stringLength:ge()}],le.A,de.A,pe.A,ae.A],children:u})})},be=i.Ay.div`
  && {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    margin-left: 0;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
    scrollbar-color: #b0b0b5 transparent;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b0b0b5;
    border-radius: 6px;
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
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: break-word;
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
    display: inline-table;
    width: auto;

    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-spacing: 0;

    margin: 0;
    margin-bottom: 20px;
    margin-right: 10px;

    @media (max-width: 1260px) {
      width: max-content;
      min-width: 100%;
    }
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

  img {
    max-width: 45vw;
  }
`,we=i.Ay.textarea`
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
`,ye=({colors:e,onColorClicked:t,dropdownRef:n})=>(0,z.createPortal)((0,d.jsx)(ve,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map(e=>(0,d.jsxs)(ke,{onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:[(0,d.jsx)(je,{color:e}),(0,d.jsx)(Ce,{children:e})]},e))}),document.body),ve=i.Ay.div`
  position: absolute;

  top: 120px;
  right: 50%;

  min-width: 160px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: white;

  border-radius: 14px;

  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 999999;
`,ke=i.Ay.button`
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
`,je=i.Ay.div`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  background: ${({color:e})=>e};

  border: 1px solid rgba(0, 0, 0, 0.15);

  flex-shrink: 0;
`,Ce=i.Ay.span`
  font-size: 12px;
  font-weight: 600;

  color: #444;
`,Se=({options:e,onPicked:t,dropdownRef:n})=>(0,z.createPortal)((0,d.jsx)($e,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map((e,n)=>(0,d.jsx)(Ae,{onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:(0,d.jsx)(Te,{children:(0,d.jsx)(Ee,{children:e.title})})},n))}),document.body),$e=i.Ay.div`
  position: absolute;

  top: 120px;
  right: 50%;

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
`,Ae=i.Ay.button`
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
`,Te=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  min-width: 0;
`,Ee=i.Ay.span`
  color: #444;

  font-size: 12px;
  font-weight: 600;

  line-height: 1.3;
`,Ne=({isLocked:e,aiLoading:t,isArchived:n,isTrash:o,showColorPicker:i,showTemplatePicker:s,colorPickerRef:c,templatePickerRef:p,colorDropdownRef:u,templateDropdownRef:g,noteColors:x,templateOptions:h,undoLastChange:m,handleAI:f,archiveNote:b,trashNote:w,setShowColorPicker:y,setShowTemplatePicker:v,onColorSelected:k,onTemplateSelected:j})=>(0,d.jsxs)(De,{children:[(0,d.jsxs)(Me,{children:[(0,d.jsx)(a.K,{disabled:e,title:"Change note background color",onClick:()=>y(e=>!e),children:(0,d.jsx)(l.$di,{})}),(0,d.jsx)(a.K,{disabled:e,title:"Load template",onClick:()=>v(e=>!e),children:(0,d.jsx)(r.MRc,{})}),(0,d.jsx)(a.K,{disabled:e,"data-keepeditor":"true",title:"AI assistant",onMouseDown:e=>e.preventDefault(),onClick:f,children:(0,d.jsx)(r.Ojn,{color:t?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:e,"data-keepeditor":"true",title:"Revert last change",onMouseDown:e=>e.preventDefault(),onClick:m,children:(0,d.jsx)(r.cO3,{})}),(0,d.jsx)(a.K,{disabled:e,title:n?"Unarchive note":"Archive note",onClick:b,children:(0,d.jsx)(r.OZ2,{color:n?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:e,title:o?"Delete permanently":"Move to trash",onClick:w,children:(0,d.jsx)(r.IXo,{color:o?"#dc2626":void 0})})]}),i&&(0,d.jsx)(ze,{ref:c,children:(0,d.jsx)(ye,{colors:x,onColorClicked:k,dropdownRef:u})}),s&&(0,d.jsx)(Pe,{ref:p,children:(0,d.jsx)(Se,{options:h,onPicked:j,dropdownRef:g})})]}),De=i.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 0 0;
`,Me=i.Ay.span`
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
`,ze=i.Ay.div`
  position: relative;
  width: 100%;
`,Pe=i.Ay.div`
  position: relative;
  width: 100%;
`,Oe=({date:e,tags:t,availableTags:n,isLocked:i,tagPickerRef:a,tagDropdownRef:l,otherTagsDropdownRef:c,showTagPicker:p,creatingTag:u,newTagName:g,setShowTagPicker:x,setCreatingTag:h,setNewTagName:m,onDateChange:f,hasTag:b,toggleTag:w,createTag:y,formatTag:v,formatDate:k})=>{const j=o.useRef(null);return(0,d.jsxs)(Re,{children:[(0,d.jsx)(Ke,{children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Ie,{onClick:()=>{var e,t,n;null===(e=j.current)||void 0===e||null===(t=e.showPicker)||void 0===t||t.call(e),null===(n=j.current)||void 0===n||n.click()},children:k(e)}),(0,d.jsx)("input",{ref:j,type:"date",value:e,style:{display:"none"},onChange:e=>f(e.target.value)})]})}),t.length>0&&(0,d.jsxs)(Le,{ref:c,children:[(0,d.jsxs)(Fe,{"aria-label":`Show ${t.length} note ${1===t.length?"tag":"tags"}`,title:`${t.length} note ${1===t.length?"tag":"tags"}`,children:[(0,d.jsx)(r.cnX,{}),(0,d.jsx)("span",{children:t.length}),(0,d.jsx)(r.fK4,{})]}),(0,d.jsx)(He,{children:t.map(e=>(0,d.jsx)(Je,{type:"button",disabled:i,onClick:()=>w(e),children:v(e)},e))})]}),(0,d.jsxs)(Ue,{ref:a,children:[!i&&(0,d.jsx)(Be,{type:"button",title:"Add tag","aria-label":"Add tag",onClick:()=>x(!p),children:(0,d.jsx)(s.n4h,{})}),p&&(0,z.createPortal)((0,d.jsxs)(We,{ref:l,children:[n.map(e=>(0,d.jsxs)(Ge,{className:b(e)?"selected":"",onClick:()=>w(e),children:[(0,d.jsx)(r.cnX,{}),(0,d.jsx)("span",{children:v(e)})]},e)),u?(0,d.jsx)(qe,{autoFocus:!0,placeholder:"Tag name...",value:g,onChange:e=>m(e.target.value),onKeyDown:e=>{"Enter"===e.key&&y(g),"Escape"===e.key&&(h(!1),m(""))},onBlur:()=>{g.trim()?y(g):h(!1)}}):(0,d.jsxs)(_e,{onClick:()=>h(!0),children:[(0,d.jsx)(r.cnX,{}),"New Tag"]})]}),document.body)]})]})},Re=i.Ay.div`
  && {
    width: fit-content;
    margin-left: 0;
  }

  display: flex;
  align-items: center;
  flex-direction: row !important;
  justify-content: flex-start !important;
  gap: 8px;
`,Ie=i.Ay.span`
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
`,Ke=i.Ay.div`
  && {
    width: fit-content;
    margin-left: 0;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  margin-left: 0;
`,Le=i.Ay.details`
  position: relative;
  flex: 0 0 auto;
`,Fe=i.Ay.summary`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 22px;
  min-height: 22px;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(79, 70, 229, 0.12);
  color: #4338ca;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,He=i.Ay.div`
  && {
    width: max-content;
    margin-left: 0;
  }

  position: absolute;
  bottom: calc(100% + 6px);
  left: 0;
  z-index: 20;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  width: max-content;
  min-width: 120px;
  max-width: min(280px, 80vw);
  padding: 8px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
`,Je=i.Ay.button`
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
    cursor: default;
    opacity: 0.75;
  }
`,Ue=i.Ay.div`
  && {
    width: fit-content;
    margin-left: 0;
  }

  position: relative;
  flex: 0 0;
  width: fit-content;
  margin: 0;
`,Be=i.Ay.button`
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
`,We=i.Ay.div`
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
`,Ge=i.Ay.span`
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
`,_e=i.Ay.span`
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
`,qe=i.Ay.input`
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
`,Ye=(e={})=>{const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},Xe=(e,t={},n=!1,o=0)=>{const i=new Date;return(e=e.replace(/@date\b/g,()=>i.toLocaleDateString()).replace(/@time\b/g,()=>i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>i.toLocaleString()).replace(/@dayofweek\b/g,()=>i.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(i.getMonth()+1)).replace(/@monthname\b/g,()=>i.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(i.getFullYear())).replace(/@today\b/g,()=>i.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const o=Number(t),i=Number(n);return o&&i?(o/(i*i)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-i.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const o=Math.max(-1,Math.min(1,Number(n))),i=t.isMobile?5:10,r=Math.abs(o),a=`${Math.round(100*o)}%`,s=Math.round(r*i);let l=o>=0?"\u2588".repeat(s)+"\u2591".repeat(i-s):"\u2591".repeat(i-s)+"\u2588".repeat(s);const d=Math.max(0,Math.floor((i-a.length)/2));return l.slice(0,d)+a+l.slice(d+a.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&o<5?Xe(e,t,n,o+1):e},Ve=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,Ze=(e,t)=>{const n={};e.replace(Ve,(e,t,o)=>(n[t]=o.trim(),""));let o=!0;for(;o;){o=!1;for(const[e,i]of Object.entries(n)){if(!i.includes("@"))continue;const r=Xe(Qe(i,n),Ye({...t,...n}));r!==i&&(n[e]=r,o=!0)}}return n},Qe=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var o;return null!==(o=t[n])&&void 0!==o?o:""}),et=(e,t,n)=>{const o=Ze(e),i=Ye({...t,...Object.fromEntries(Object.entries(o).map(([e,t])=>{if(""===t)return[e,""];const n=Number(t);return[e,Number.isNaN(n)?t:n]}))});return Xe(Qe((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),o),i,n)};function tt(){const[e,t]=(0,o.useState)(""),[n,i]=(0,o.useState)(""),[r,a]=(0,o.useState)({city:"",country:""});return(0,o.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async({coords:n})=>{try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${n.latitude}&longitude=${n.longitude}&current=temperature_2m,weather_code`),l=await t.json();let d="",c="";try{var o,i,r,a;const e=await fetch(`https://geocode.maps.co/reverse?lat=${n.latitude}&lon=${n.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();d=(null===(o=t.address)||void 0===o?void 0:o.city)||(null===(i=t.address)||void 0===i?void 0:i.town)||(null===(r=t.address)||void 0===r?void 0:r.village)||"",c=(null===(a=t.address)||void 0===a?void 0:a.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(l.current.temperature_2m)}\xb0C`,weather:(s=l.current.weather_code,0===s?"\u2600\ufe0f Sunny":[1,2].includes(s)?"\ud83c\udf24\ufe0f Partly Cloudy":3===s?"\u2601\ufe0f Cloudy":[45,48].includes(s)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(s)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(s)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(s)?"\u2744\ufe0f Snowing":[80,81,82].includes(s)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(s)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:d,country:c})}catch(l){t(l)}var s}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),i(e.weather),a({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:r}}var nt=n(9894);const ot=new TextEncoder,it=new TextDecoder;function rt(e){const t=new Uint8Array(e);let n="";for(let o=0;o<t.length;o++)n+=String.fromCharCode(t[o]);return btoa(n)}function at(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function st(e,t){const n=await crypto.subtle.importKey("raw",ot.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function lt(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),o=crypto.getRandomValues(new Uint8Array(16)),i=await st(t,o);return{encrypted:rt(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},i,ot.encode(e))),iv:rt(n),salt:rt(o)}}(t,e);await(0,A.BN)((0,A.H9)(T.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function dt(e){const t=await(0,A.x7)((0,A.H9)(T.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,o){const i=await st(o,at(n)),r=await crypto.subtle.decrypt({name:"AES-GCM",iv:at(t)},i,at(e));return it.decode(r)}(n.encryptedApiKey,n.iv,n.salt,e)}async function ct(e,t,n,o,i,r){console.log(i);const a=r||await dt(e);if(!a)throw new Error("OpenAI API Key not configured.");const s=new nt.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),l=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${o}\n`;return await s.responses.create({model:i||"gpt-6-luna",input:l})}const pt="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const ut=({id:e,date:t,content:n,onDeleteCard:i,onChangeContent:r,onChangeDate:a,tags:s,selected:l,onToggleSelection:c,templateOptions:p})=>{const[u,g]=o.useState(!1),[x,h]=o.useState(!1),[m,f]=o.useState(!1),b=o.useRef(null),w=o.useRef(null),y=o.useRef(null),v=o.useRef(null),C=o.useRef(null),S=o.useRef(null),$=o.useRef(null),A=o.useRef(null),T=o.useRef(null),[E,N]=o.useState(window.innerWidth<1260),{user:D}=(0,M.o)(),{temperature:z,weather:P,location:K}=tt(),{setCursorPosition:L,findBestCursorPosition:F}=function({editing:e,textareaRef:t}){const[n,i]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!e||!t.current||null===n)return;const o=t.current;o.focus(),o.setSelectionRange(n,n);const i=requestAnimationFrame(()=>{if(!o.isConnected)return;const e=document.createElement("div"),t=window.getComputedStyle(o);e.style.position="absolute",e.style.visibility="hidden",e.style.whiteSpace="pre-wrap",e.style.wordWrap="break-word",e.style.boxSizing=t.boxSizing,e.style.font=t.font,e.style.lineHeight=t.lineHeight,e.style.letterSpacing=t.letterSpacing,e.style.wordSpacing=t.wordSpacing,e.style.textIndent=t.textIndent,e.style.tabSize=t.tabSize,e.style.padding=t.padding,e.style.border=t.border,e.style.width=t.width,e.textContent=`${o.value.substring(0,n)}\u200b`,document.body.appendChild(e);const i=e.offsetHeight;document.body.removeChild(e);const r=o.getBoundingClientRect().top;let a=o.parentElement;for(;a;){const e=window.getComputedStyle(a).overflowY;if("auto"===e||"scroll"===e||"overlay"===e){const e=a.getBoundingClientRect().top,t=a.scrollTop+r+i-e-a.clientHeight/2;return void a.scrollTo({top:Math.max(0,t),behavior:"smooth"})}a=a.parentElement}window.scrollTo({top:Math.max(0,window.scrollY+r+i-window.innerHeight/2),behavior:"smooth"})});return()=>cancelAnimationFrame(i)},[e,n,t]),{cursorPosition:n,setCursorPosition:i,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const o=n.split(" ");for(let i=Math.min(o.length,8);i>=2;i--)for(let e=0;e<=o.length-i;e++){const n=o.slice(e,e+i).join(" "),r=t.indexOf(n);if(r>=0)return r}for(const i of o){if(i.length<4)continue;const e=t.indexOf(i);if(e>=0)return e}return t.length}}}({editing:u,textareaRef:b});!function({tagPickerRef:e,tagDropdownRef:t,otherTagsDropdownRef:n,colorPickerRef:i,colorDropdownRef:r,templatePickerRef:a,templateDropdownRef:s,closeTagPicker:l,closeColorPicker:d,closeTemplatePicker:c}){(0,o.useEffect)(()=>{const o=o=>{var p,u,g,x,h,m,f,b,w,y,v,k,j,C;const S=o.target,$=null!==(p=null===(u=e.current)||void 0===u?void 0:u.contains(S))&&void 0!==p&&p,A=null!==(g=null===(x=t.current)||void 0===x?void 0:x.contains(S))&&void 0!==g&&g;$||A||l(),(null===(h=null===(m=n.current)||void 0===m?void 0:m.contains(S))||void 0===h||!h)&&n.current&&(n.current.open=!1);const T=null!==(f=null===(b=i.current)||void 0===b?void 0:b.contains(S))&&void 0!==f&&f,E=null!==(w=null===(y=r.current)||void 0===y?void 0:y.contains(S))&&void 0!==w&&w;T||E||d();const N=null!==(v=null===(k=a.current)||void 0===k?void 0:k.contains(S))&&void 0!==v&&v,D=null!==(j=null===(C=s.current)||void 0===C?void 0:C.contains(S))&&void 0!==j&&j;N||D||c()};return document.addEventListener("pointerdown",o),()=>{document.removeEventListener("pointerdown",o)}},[e,t,n,i,r,a,s,l,d,c])}({tagPickerRef:y,tagDropdownRef:$,otherTagsDropdownRef:v,colorPickerRef:C,colorDropdownRef:A,templatePickerRef:S,templateDropdownRef:T,closeTagPicker:()=>{W(!1),G(!1)},closeColorPicker:()=>{h(!1)},closeTemplatePicker:()=>{f(!1)}}),o.useEffect(()=>{const e=()=>{N(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const H=o.useMemo(()=>((e,t)=>{const n=t(e)?JSON.parse(e):{...O,text:e};return{...O,...n,tags:Array.from(new Set([...n.tags||[]]))}})(n,k),[n]),{showTagPicker:J,creatingTag:U,newTagName:B,setShowTagPicker:W,setCreatingTag:G,setNewTagName:_,hasTag:q,toggleTag:Y,createTag:X}=function({tags:e,onTagsChange:t}){const[n,i]=(0,o.useState)(!1),[r,a]=(0,o.useState)(!1),[s,l]=(0,o.useState)(""),d=t=>e.includes(t),c=n=>{console.log("current tags",e);const o=Array.from(new Set(d(n)?e.filter(e=>e!==n):[...e,n]));console.log("updated tags",o),t(o)};return{showTagPicker:n,creatingTag:r,newTagName:s,setShowTagPicker:i,setCreatingTag:a,setNewTagName:l,hasTag:d,toggleTag:c,createTag:e=>{const t=e.trim().toLowerCase();t&&(c(t),l(""),a(!1))}}}({tags:H.tags,onTagsChange:t=>{r(e,JSON.stringify({...H,tags:t}))}}),[Z,Q]=o.useState(H.text||""),[ee,te]=o.useState([]),ne=o.useCallback(e=>{te(t=>t[t.length-1]===e?t:[...t,e])},[]),{aiLoading:oe,handleAI:ie}=function({userId:e,value:t,textareaRef:n,pushHistory:i,onContentChange:r}){const[a,s]=(0,o.useState)(!1);return{aiLoading:a,handleAI:async()=>{if(!e)return void alert("User not authenticated");let o=await dt(e);if(!o){var a;if(o=(null===(a=window.prompt("OpenAI API Key not configured.\n\nEnter your OpenAI API Key:"))||void 0===a?void 0:a.trim())||"",!o)return;await lt(e,o)}const l=window.prompt("Examples:\n\nFix grammar\nSummarize\nRewrite professionally\nTranslate to Portuguese");if(null!==l&&void 0!==l&&l.trim()){s(!0);try{i(t);const a=n.current;if(a&&a.selectionStart!==a.selectionEnd){const n=a.selectionStart,i=a.selectionEnd,s=t.substring(n,i),d=await ct(e,pt,l,s,"gpt-6-luna",o),c=t.substring(0,n)+d.output_text.trim()+t.substring(i);return void r(c)}const s=await ct(e,pt,l,t,"gpt-6-luna",o),d=`${t}\n\n${s.output_text.trim()}`;r(d)}catch(d){console.error(d),alert(d instanceof Error?d.message:"AI request failed")}finally{s(!1)}}}}}({userId:null===D||void 0===D?void 0:D.uid,value:Z,textareaRef:b,pushHistory:ne,onContentChange:t=>{Q(t),r(e,JSON.stringify({...H,text:t}))}}),re=()=>{if(q("trash"))return void i(e,!0);const t=(e=>Array.from(new Set([...e.filter(e=>"archive"!==e),"trash"])))(H.tags);r(e,JSON.stringify({...H,tags:t}))},ae=e=>q("templates")?e:((e,t={})=>{const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/quarter\b/g,()=>String(Math.floor(n.getMonth()/3)+1)).replace(/\/week\b/g,()=>{const e=new Date(n);e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const t=new Date(e.getFullYear(),0,4);return String(1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7))}).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const o=Number(t),i=Number(n);return String(Math.floor(Math.random()*(i-o+1))+o)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",o=Number(t);return Array.from({length:o},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const o=new Date(t);let i=n.getFullYear()-o.getFullYear();const r=n.getMonth()-o.getMonth();return(r<0||0===r&&n.getDate()<o.getDate())&&i--,String(i)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const o=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(o/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})})(e,{weather:P,temperature:z,city:K.city,country:K.country}),se=H.locked;return(0,d.jsx)(gt,{selected:l,children:(0,d.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:H.color||"#eee"},children:[(0,d.jsx)(V,{title:H.title,locked:H.locked,collapsed:H.collapsed,selected:l,onToggleSelection:()=>c(e),isFavorite:q("favorite"),copyFormattedContent:async()=>{if(!w.current)return;const e=w.current.innerHTML,t=w.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>Y("favorite"),onToggleLock:()=>r(e,JSON.stringify({...H,locked:!H.locked})),onToggleCollapse:()=>r(e,JSON.stringify({...H,collapsed:!H.collapsed})),onTitleChange:t=>r(e,JSON.stringify({...H,title:ae(t)}))}),!H.collapsed&&(0,d.jsx)(fe,{value:Z,locked:H.locked,editing:u,textareaRef:b,markdownRef:w,setValue:Q,setEditing:g,processMarkdown:e=>et(e,{temperature:z,weather:P,city:K.city,country:K.country},E),onExecuteExpression:t=>{ne(Z);const n=((e,t,n)=>{const o=t.match(/^\$\{(\w+)\}=(.*)$/);if(!o)return e;const i=o[1];let r=o[2];const a=Ze(e);r=Xe(r,Ye({...n,...a})),r=r.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=a[t])&&void 0!==n?n:"")});const s="${"+i+"}="+Function(`return (${r})`)(),l=new RegExp(`^\\$\\{${i}\\}\\s*=([^\\r\\n]*)`,"m");return l.test(e)?e.replace(l,s):e.trimEnd()+"\n"+s})(Z,t,{temperature:z,weather:P,city:K.city,country:K.country});Q(n),r(e,JSON.stringify({...H,text:n}))},onSave:()=>((e,t)=>{const n=ae(t);r(e,JSON.stringify({...H,text:n})),Q(n)})(e,Z),onMarkdownClick:(e,t)=>{ne(Z);const n=null!==t&&void 0!==t?t:F(e,Z);L(n),g(!0)}}),(0,d.jsx)("footer",{className:"footer",children:(0,d.jsxs)("span",{className:"footbox",children:[(0,d.jsx)(Oe,{tagDropdownRef:$,otherTagsDropdownRef:v,date:t,tags:H.tags,availableTags:s,isLocked:se,tagPickerRef:y,showTagPicker:J,creatingTag:U,newTagName:B,setShowTagPicker:W,setCreatingTag:G,setNewTagName:_,onDateChange:t=>a(e,t),hasTag:q,toggleTag:Y,createTag:X,formatTag:I,formatDate:j}),(0,d.jsx)(Ne,{colorDropdownRef:A,templateDropdownRef:T,isLocked:se,aiLoading:oe,isArchived:q("archive"),isTrash:q("trash"),showColorPicker:x,showTemplatePicker:m,colorPickerRef:C,templatePickerRef:S,noteColors:R,templateOptions:p,undoLastChange:()=>{const t=ee[ee.length-1];t&&(te(e=>e.slice(0,-1)),Q(t),r(e,JSON.stringify({...H,text:t})))},handleAI:()=>{H.locked||ie()},archiveNote:()=>{H.locked||(()=>{const t=(e=>e.includes("archive")?e.filter(e=>"archive"!==e):[...e.filter(e=>"trash"!==e),"archive"])(H.tags);r(e,JSON.stringify({...H,tags:t}))})()},trashNote:()=>{H.locked||re()},setShowColorPicker:h,setShowTemplatePicker:f,onColorSelected:t=>{r(e,JSON.stringify({...H,color:t})),h(!1)},onTemplateSelected:t=>{ne(Z);let n=t.text.replace(/\\\$\{/g,"${");if(n=ae(n),!H.locked){const o=Array.from(new Set([...H.tags||[],...t.tags||[]]));r(e,JSON.stringify({...H,collapsed:!1,color:t.color,text:n,title:ae(t.title),tags:o})),Q(n)}f(!1)}})]})})]})},e)},gt=i.Ay.div`
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
      height: 44px;
      display: flex;
      flex-direction: row;
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

`,xt=({entries:e,pickerTags:t,cardRefs:n,onHoverCard:o,onDeleteEntry:i,onChangeEntry:r,updateEntryDate:a,selectedNoteIds:s,onToggleSelection:l,templateOptions:c})=>(0,d.jsx)(ht,{children:e.map((e,p)=>(0,d.jsx)("div",{ref:t=>{n.current[e.id]=t},onMouseEnter:()=>o(e.id),onMouseLeave:()=>o(null),children:(0,d.jsx)(ut,{id:e.id,date:e.date,number:p+1,content:e.content,onDeleteCard:i,onChangeContent:r,onChangeDate:a,tags:t,selected:s.includes(e.id),onToggleSelection:l,templateOptions:c})},e.id))}),ht=i.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`,mt=e=>{try{return JSON.parse(e).color||"#cccccc"}catch{return"#cccccc"}},ft=({entries:e,hoveredCardId:t,cardHeights:n,totalHeight:o,onScrollToCard:i})=>(0,d.jsx)(bt,{children:e.map(e=>(0,d.jsxs)(wt,{$selected:t===e.id,style:{backgroundColor:mt(e.content),height:`${Math.max((n[e.id]||40)/Math.max(o,1)*100,60)}px`},children:[(0,d.jsx)(a.K,{style:{padding:"0",margin:"0"},title:"Go to note top",onClick:()=>i(e.id,"top"),children:(0,d.jsx)(r.wAb,{})}),(0,d.jsx)(a.K,{style:{padding:"0",margin:"0"},title:"Go to note bottom",onClick:()=>i(e.id,"bottom"),children:(0,d.jsx)(r.fK4,{})})]},e.id))}),bt=i.Ay.div`
  padding-top: 20px;
  width: 20px;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;
  background: #d0d0d0;

  @media (max-width: 768px) {
    display: none;
  }
`,wt=i.Ay.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 0;
  padding: 0 !important;
  border: ${({$selected:e})=>e?"2px solid #2563eb":"1px solid transparent"};
  border-bottom: ${({$selected:e})=>e?"2px solid #2563eb":"1px solid rgb(0, 0, 0, 0.2)"};

  button:hover {
    background: white;
  }

  svg {
    margin: 0;
    padding: 0;
  }
`,yt=e=>{const t=(0,A.H9)(T.OO,"users",e);return(0,A.rJ)(t,"chatSessions")},vt=async(e,t)=>{const n=yt(e);return(await(0,A.GG)((0,A.P)(n,(0,A._M)("id","==",t)))).docs};const kt=(0,o.createContext)(void 0),jt="You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.",Ct=({uid:e,selectedNotesText:t,noteTitles:n,clearSelectedNotes:i,entries:r})=>{const[a,s]=(0,o.useState)(""),[l,d]=(0,o.useState)([]),[c,p]=(0,o.useState)([]),{sessions:u,fetchSessions:g,createSession:x,updateSession:h,deleteSession:m}=function(e){const[t,n]=o.useState([]),i=o.useCallback(async()=>{if(!e)return;const t=(await(0,A.GG)(yt(e))).docs.map(e=>e.data());n((e=>[...e].sort((e,t)=>e.updatedAt>t.updatedAt?-1:e.updatedAt<t.updatedAt?1:0))(t))},[e]),r=o.useCallback(async t=>{if(!e)return null;const o={id:$()(),title:"New Chat",createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString(),model:t,selectedPromptIds:[],messages:[]};return n(e=>[o,...e]),await(0,A.gS)(yt(e),o),o},[e]),a=o.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const o=await vt(e,t.id);await Promise.all(o.map(n=>(0,A.BN)((0,A.H9)(T.OO,`users/${e}/chatSessions/${n.id}`),t)))},[e]),s=o.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const o=await vt(e,t);await Promise.all(o.map(t=>(0,A.kd)((0,A.H9)(T.OO,`users/${e}/chatSessions/${t.id}`))))},[e]);return{sessions:t,setSessions:n,fetchSessions:i,createSession:r,updateSession:a,deleteSession:s}}(e),[f,b]=(0,o.useState)(!1),[w,y]=(0,o.useState)(null),[v,k]=(0,o.useState)(!1),[j,C]=(0,o.useState)("gpt-6-luna"),[S,E]=(0,o.useState)(!0),N=(0,o.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),D=(0,o.useCallback)(async()=>{const e=await x(j);e&&(d([]),y(e.id),p([]))},[x,j]);(0,o.useEffect)(()=>{f&&(u.length>0||D())},[f,u,D]),(0,o.useEffect)(()=>{(async()=>{await g(),b(!0)})()},[g]);const M=(0,o.useCallback)(async e=>{if(!w)return;const t=u.find(e=>e.id===w);if(!t)return;const n=l.includes(e)?l.filter(t=>t!==e):[...l,e];d(n),await h({...t,selectedPromptIds:n,updatedAt:(new Date).toISOString()})},[w,l,u,h]),z=(0,o.useMemo)(()=>r.filter(e=>l.includes(e.id)).map(e=>{try{return JSON.parse(e.content).text||""}catch{return""}}).join("\n\n"),[r,l]),P=(0,o.useCallback)(e=>{const t=u.find(t=>t.id===e);t&&(d(t.selectedPromptIds||[]),y(e),p(t.messages),C(t.model))},[u]);(0,o.useEffect)(()=>{0!==u.length&&(w||P(u[0].id))},[u,w,P]);const O=(0,o.useMemo)(()=>r.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[r]),R=(0,o.useCallback)(async()=>{const o=a.trim();if(!o||v)return;if(!e)return void p(e=>[...e,{id:$()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const r=n.length>0?`Notes:\n${n.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",l=N(c),d={id:$()(),role:"user",content:`${r}${o}`};p(e=>{const t=[...e,d],n=u.find(e=>e.id===w);return n&&h({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?o.substring(0,30):n.title}),t}),s(""),k(!0);const g=[];S&&l&&g.push(`History:\n${l}`),t.trim()&&g.push(`Context:\n${t}`);const x=g.join("\n\n");try{var m,f;const t=[jt,z].filter(Boolean),n=await ct(e,t.join("\n\n"),o,x,j),r={id:$()(),role:"assistant",content:n.output_text.trim()||"No response was returned.",tokens:{input:(null===(m=n.usage)||void 0===m?void 0:m.input_tokens)||0,output:(null===(f=n.usage)||void 0===f?void 0:f.output_tokens)||0}};p(e=>{const t=[...e,r],n=u.find(e=>e.id===w);return n&&h({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?o.substring(0,30):n.title}),t}),i()}catch(b){console.error("Mavis error:",b);const e=b instanceof Error?b.message:"An unexpected error occurred.";p(t=>[...t,{id:$()(),role:"assistant",content:e}])}finally{k(!1)}},[a,v,e,n,t,j,c,S,N,i,u,w,h,z]),I=(0,o.useCallback)(async()=>{if(v||0===c.length)return;if(!e)return void p(e=>[...e,{id:$()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const t=N(c);k(!0);try{var n,o;const i=await ct(e,`${jt}\n\n${z}`,"Summarize the entire conversation history into one comprehensive, self-contained message.\n\nInclude all important information from the conversation, especially:\n\n- Every requirement and specification\n- Every decision that was made\n- Every implementation detail\n- Every instruction and constraint\n- Important facts, dates, names, titles, values, and references\n- Code-related decisions, expected behavior, and affected files or components\n- Problems, errors, solutions, and changes that were discussed\n- Rejected alternatives and the reasons they were rejected\n- Open questions, unresolved issues, assumptions, and pending tasks\n- The current state of the work\n- Clear next steps, if any\n\nPreserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.\n\nWrite the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.",`Conversation history:\n${t}`,j),r={id:$()(),role:"assistant",content:i.output_text.trim()||"No summary was returned.",tokens:{input:(null===(n=i.usage)||void 0===n?void 0:n.input_tokens)||0,output:(null===(o=i.usage)||void 0===o?void 0:o.output_tokens)||0}};p([r]);const a=u.find(e=>e.id===w);a&&await h({...a,messages:[r],updatedAt:(new Date).toISOString()})}catch(i){console.error("Mavis summary error:",i);const e=i instanceof Error?i.message:"An unexpected error occurred.";p(t=>[...t,{id:$()(),role:"assistant",content:e}])}finally{k(!1)}},[v,c,e,N,j,w,u,h,z]),K=(0,o.useCallback)(async e=>{if(!w)return;const t=u.find(e=>e.id===w);if(!t)return;const n="all"===e?[]:t.messages.filter(t=>t.id!==e);p(n),await h({...t,messages:n,updatedAt:(new Date).toISOString()})},[w,u,h]),L=(0,o.useCallback)(async()=>{if(!w)return;const e=u.find(e=>e.id===w);e&&(p([]),await h({...e,messages:[],updatedAt:(new Date).toISOString()}))},[w,u,h]),F=(0,o.useCallback)(async e=>{if(await m(e),w===e){const t=u.filter(t=>t.id!==e);t.length>0?P(t[0].id):await D()}},[m,w,u,P,D]);return{prompt:a,setPrompt:s,selectedPromptIds:l,togglePrompt:M,availablePromptNotes:O,messages:c,isLoading:v,sessions:u,currentSessionId:w,createNewSession:D,loadSession:P,deleteSession:m,removeSession:F,sendPrompt:R,deleteMessage:K,clearMessages:L,summarizeHistory:I,selectedModel:j,setSelectedModel:C,includeHistory:S,setIncludeHistory:E}};function St({children:e,uid:t,selectedNotesText:n,noteTitles:o,clearSelectedNotes:i,entries:r}){const a=Ct({uid:t,selectedNotesText:n,noteTitles:o,clearSelectedNotes:i,entries:r});return(0,d.jsx)(kt.Provider,{value:a,children:e})}function $t(){const e=(0,o.useContext)(kt);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}const At=["gpt-5-mini","gpt-6-luna","gpt-5.6-terra","gpt-5.6-sol"],Tt=({uid:e,selectedNotesText:t,noteTitles:n,notesCount:i,clearSelectedNotes:s})=>{const[c,p]=o.useState(!1),{prompt:u,setPrompt:g,messages:x,isLoading:h,sendPrompt:m,deleteMessage:f,selectedModel:b,setSelectedModel:w,selectedPromptIds:v,availablePromptNotes:k,togglePrompt:j,includeHistory:C,setIncludeHistory:S,summarizeHistory:$}=$t(),[A,T]=o.useState(!1),[E,N]=o.useState(!1),D=o.useRef(null),M=o.useRef(null),z=o.useCallback(()=>T(!1),[]),P=o.useCallback(()=>N(!1),[]);F(D,z),F(M,P);return(0,d.jsxs)(Rt,{children:[(0,d.jsxs)(It,{children:[x.map(e=>(0,d.jsxs)(Et,{role:e.role,children:[(0,d.jsx)(Dt,{role:e.role,children:e.tokens&&(0,d.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,d.jsx)(Kt,{role:e.role,children:(0,d.jsx)(oe.oz,{remarkPlugins:[re.A],children:e.content})}),(0,d.jsxs)(Nt,{role:e.role,children:[(0,d.jsx)(a.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,d.jsx)(r.nxz,{})}),(0,d.jsx)(a.K,{title:"Delete message",onClick:()=>f(e.id),children:(0,d.jsx)(r.IXo,{})})]})]},e.id)),h&&(0,d.jsx)(Kt,{role:"assistant",children:"Thinking..."})]}),(0,d.jsx)(Lt,{expanded:c,children:(0,d.jsxs)(Ft,{children:[(0,d.jsxs)(zt,{children:[(0,d.jsxs)(_t,{ref:M,children:[(0,d.jsxs)(Ut,{title:"Prompt presets",onClick:()=>{T(!1),N(e=>!e)},children:[(0,d.jsx)(y.vTI,{}),(0,d.jsxs)(Bt,{children:["Prompts (",v.length,")"]})]}),E&&(0,d.jsx)(Wt,{children:k.map(e=>(0,d.jsxs)(Gt,{className:v.includes(e.id)?"selected":"",onClick:()=>{j(e.id)},children:[(0,d.jsx)(y.vTI,{}),(0,d.jsx)("span",{children:e.title})]},e.id))})]}),(0,d.jsxs)(Jt,{ref:D,children:[(0,d.jsxs)(Ut,{style:{margin:"0px !important"},title:"Selecionar modelo de IA",onClick:()=>{N(!1),T(e=>!e)},children:[(0,d.jsx)(r.Ojn,{}),(0,d.jsx)(Bt,{children:b})]}),A&&(0,d.jsx)(Wt,{children:At.map(e=>(0,d.jsxs)(Gt,{className:b===e?"selected":"",onClick:()=>{w(e),T(!1)},title:e,children:[(0,d.jsx)(r.Ojn,{}),(0,d.jsx)("span",{children:e})]},e))})]}),(0,d.jsxs)(Pt,{children:["Notes: ",i]})]}),(0,d.jsxs)(Mt,{children:[(0,d.jsx)(Ht,{expanded:c,value:u,placeholder:"Ask Mavis...",disabled:h,onChange:e=>g(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),m())}}),(0,d.jsxs)(Ot,{children:[(0,d.jsx)(a.K,{title:"Summarize History",onClick:()=>{$()},children:(0,d.jsx)(l.Z1M,{})}),(0,d.jsx)(a.K,{title:"Include chat history in prompts",children:(0,d.jsx)(l.bfP,{color:C?"#2563eb":"#555",onClick:()=>S(!C)})}),(0,d.jsx)(a.K,{title:"Clear chat history",onClick:()=>{f("all")},children:(0,d.jsx)(y.U3h,{})}),(0,d.jsx)(a.K,{title:c?"Collapse":"Expand",onClick:()=>p(e=>!e),children:c?(0,d.jsx)(r.eDi,{}):(0,d.jsx)(r.mkN,{})}),(0,d.jsx)(a.K,{title:"Copy input",onClick:()=>{(async()=>{u.trim()&&await navigator.clipboard.writeText(u)})()},disabled:!u.trim(),children:(0,d.jsx)(r.nxz,{})}),(0,d.jsx)(a.K,{title:"Send prompt",onClick:()=>{m()},disabled:h||!u.trim(),children:(0,d.jsx)(r.kGk,{})}),(0,d.jsx)(a.K,{title:"Clear input",onClick:()=>{g("")},disabled:!u.trim(),children:(0,d.jsx)(r.yGN,{})}),(0,d.jsx)(a.K,{title:"Clear selected notes",onClick:s,disabled:0===i,children:(0,d.jsx)(l.DnH,{})})]})]})]})})]})},Et=i.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
`,Nt=i.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,Dt=i.Ay.div`
  font-size: 10px;
  color: #555;
  margin-bottom: 2px;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  white-space: nowrap;
`,Mt=i.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,zt=i.Ay.span`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,Pt=i.Ay.span`
  font-size: 12px;
  color: #555;
`,Ot=i.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,Rt=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,It=i.Ay.div`
  flex: 1;
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
`,Kt=i.Ay.div`
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
`,Lt=i.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;
  margin: 0;
  background: #e0e0e5;
  ${({expanded:e})=>e&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}
`,Ft=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #e0e0e5;
`,Ht=i.Ay.textarea`
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
`,Jt=i.Ay.div`
  padding: 0px;
  position: relative;
  width: auto;
`,Ut=i.Ay.div`
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
`,Bt=i.Ay.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Wt=i.Ay.div`
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
`,Gt=i.Ay.span`
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
`,_t=i.Ay.div`
  position: relative;
`,qt=({expanded:e,panelWidth:t,minimized:n,setMinimized:o,notesMinimized:i,menuExpanded:a,setMenuExpanded:s,mobileActive:l})=>{const c=e?208:52;return(0,d.jsxs)(Yt,{explorerWidth:c,notesMinimized:i,barWidth:t,minimized:n,mobileActive:l,children:[(0,d.jsxs)(Xt,{children:[(0,d.jsx)(r.Ojn,{}),"Chat"]}),(0,d.jsxs)(Vt,{children:[(0,d.jsx)(Qt,{type:"button",title:a?"Collapse sessions menu":"Expand sessions menu","aria-label":a?"Collapse sessions menu":"Expand sessions menu","data-sidebar-toggle":"sessions",onClick:()=>s(!a),children:(0,d.jsx)(r.ND1,{})}),(0,d.jsx)(Zt,{title:n?"Restore chat panel":"Minimize chat panel",onClick:()=>o(!n),children:n?(0,d.jsx)(r.mkN,{}):(0,d.jsx)(r.prK,{})})]})]})},Yt=i.Ay.div`
  display: ${({minimized:e})=>e?"none":"flex"};
  width: ${({barWidth:e})=>`${e}px`};
  margin-left: ${({explorerWidth:e,notesMinimized:t})=>`${t?e+10:10}px`} !important;
  flex-direction: row;
  align-items: center;
  height: 32px;
  padding: 0;
  margin-left: 10px;
  margin-top: 10px;
  border-bottom: 1px solid #d0d0d0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;
  position: relative;

  @media (max-width: 768px) {
    display: ${({mobileActive:e})=>e?"flex":"none"};
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    height: 40px;
    margin: 0;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
    justify-content: flex-end;

    && ${a.K} svg {
      color: #fff !important;
    }

    && ${a.K}:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`,Xt=i.Ay.div`
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
`,Vt=i.Ay.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 35px;
`,Zt=(0,i.Ay)(a.K)`
  @media (max-width: 768px) {
    display: none !important;
  }
`,Qt=i.Ay.button`
  display: none;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #2e2e2e;

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 768px) {
    display: flex;
    color: #fff;
  }
`,en=({minimized:e,setMinimized:t,menuExpanded:n,setMenuExpanded:i})=>{const{sessions:s,currentSessionId:l,createNewSession:c,loadSession:p,deleteSession:u,removeSession:g}=$t(),x=o.useRef(null);return o.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!n)return;const o=e.target;o instanceof Node&&(null===(t=x.current)||void 0===t||!t.contains(o))&&(o instanceof Element&&o.closest('[data-sidebar-toggle="sessions"]')||i(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n,i]),(0,d.jsxs)(tn,{ref:x,expanded:n,children:[(0,d.jsxs)(a.K,{expanded:n,title:"Menu",onClick:()=>i(!n),children:[(0,d.jsx)(r.ND1,{}),n&&(0,d.jsx)("span",{children:"Sessions"})]}),e&&(0,d.jsxs)(a.K,{expanded:n,title:"Expand Chat",onClick:()=>t(!e),children:[(0,d.jsx)(r.Ojn,{}),n&&(0,d.jsx)("span",{children:"Expand Chat"})]}),(0,d.jsxs)(a.K,{expanded:n,onClick:()=>{c()},children:[(0,d.jsx)(r.GGD,{}),n&&(0,d.jsx)("span",{children:"New Chat"})]}),(0,d.jsx)(nn,{disabled:!n,children:s.map(e=>(0,d.jsxs)(rn,{children:[(0,d.jsx)(on,{active:l===e.id,onClick:()=>p(e.id),children:e.title}),(0,d.jsx)(an,{onClick:t=>{t.stopPropagation(),u(e.id)},children:(0,d.jsx)(r.IXo,{size:12})})]},e.id))})]})},tn=i.Ay.div`
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
`,nn=i.Ay.div`
  display: ${e=>e.disabled?"none":"flex"};
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,on=i.Ay.div`
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
`,rn=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,an=i.Ay.button`
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
`,sn=({explorerExpanded:e,setExplorerExpanded:t})=>{var n;const{selectedDate:i,setSelectedDate:a}=(0,K.M)(),{user:s}=(0,M.o)(),l=null!==(n=null===s||void 0===s?void 0:s.uid)&&void 0!==n?n:"",{entries:p,fetchEntries:u,addEntry:g,updateEntry:x,deleteEntry:h,updateEntryDate:m,renameTag:f,deleteTag:b,addTagToEntries:k,removeTagFromEntries:j}=function(e){const[t,n]=o.useState([]),i=o.useCallback(async()=>{if(!e)return;const t=N(e),o=(await(0,A.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}});n(E(o))},[e]),r=o.useCallback(async({content:t,date:o})=>{if(!e)return null;const i={uid:e,id:$()(),content:t,date:o,createdAt:(new Date).toISOString()};return n(e=>E([...e,i])),await(0,A.gS)(N(e),i),i},[e]),a=o.useCallback(async(o,i)=>{if(!e)return;const r=t.find(e=>e.id===o);if(!r)return;const a={...r,content:i};n(e=>E(e.map(e=>e.id===o?a:e)));const s=await D(e,o);await Promise.all(s.map(t=>(0,A.BN)((0,A.H9)(T.OO,`users/${e}/entries/${t.id}`),a)))},[t,e]),s=o.useCallback(async t=>{if(!e)return;n(e=>E(e.map(e=>e.id===t.id?t:e)));const o=await D(e,t.id);await Promise.all(o.map(n=>(0,A.BN)((0,A.H9)(T.OO,`users/${e}/entries/${n.id}`),t)))},[e]),l=o.useCallback(async(e,n)=>{const o=t.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}});await Promise.all(o.map(async t=>{const o=JSON.parse(t.content);await s({...t,content:JSON.stringify({...o,tags:(o.tags||[]).map(t=>t===e?n:t)})})}))},[t,s]),d=o.useCallback(async e=>{const n=t.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}});await Promise.all(n.map(async t=>{const n=JSON.parse(t.content);await s({...t,content:JSON.stringify({...n,tags:(n.tags||[]).filter(t=>t!==e)})})}))},[t,s]),c=o.useCallback(async(e,n)=>{const o=t.filter(t=>e.includes(t.id));await Promise.all(o.map(async e=>{const t=JSON.parse(e.content);await s({...e,content:JSON.stringify({...t,tags:Array.from(new Set([...t.tags||[],n]))})})}))},[t,s]),p=o.useCallback(async(e,n)=>{const o=t.filter(t=>e.includes(t.id));await Promise.all(o.map(async e=>{const t=JSON.parse(e.content);await s({...e,content:JSON.stringify({...t,tags:(t.tags||[]).filter(e=>e!==n)})})}))},[t,s]),u=o.useCallback(async(n,o)=>{if(!e)return;const i=t.find(e=>e.id===n);i&&await s({...i,date:o})},[t,s,e]),g=o.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const o=await D(e,t);await Promise.all(o.map(t=>(0,A.kd)((0,A.H9)(T.OO,`users/${e}/entries/${t.id}`))))},[e]);return{entries:t,setEntries:n,fetchEntries:i,addEntry:r,updateEntry:a,replaceEntry:s,deleteEntry:g,updateEntryDate:u,renameTag:l,deleteTag:d,addTagToEntries:c,removeTagFromEntries:p}}((null===s||void 0===s?void 0:s.uid)||""),{searchContent:S,setSearchContent:z,selectedTag:R,setSelectedTag:I,systemTags:L,availableTags:F,pickerTags:J,visibleEntries:U}=function(e){const[t,n]=o.useState(""),[i,a]=o.useState("favorite"),s=o.useMemo(()=>[{name:"all",icon:r.Vap,system:!0,position:"top"},{name:"favorite",icon:r.usP,system:!0,position:"top"},{name:"journal",icon:v.Fsq,system:!0,position:"top"},{name:"templates",icon:r.MRc,system:!0,position:"top"},{name:"prompts",icon:y.vTI,system:!0,position:"top"},{name:"other",icon:w.uoj,system:!0,position:"top"},{name:"archive",icon:r.OZ2,system:!0,position:"bottom"},{name:"trash",icon:r.IXo,system:!0,position:"bottom"}],[]),l=o.useMemo(()=>s.map(e=>e.name),[s]),d=o.useMemo(()=>Array.from(new Set(e.flatMap(e=>C(e.content)))).filter(e=>!l.includes(e)).sort(),[e,l]),c=o.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...d])).sort(),[d]),p=o.useCallback(e=>{const n=C(e.content),o=n.includes("trash"),r=n.includes("archive"),a=n.includes("templates"),s=n.includes("prompts");return""!==t.trim()?e.content.toLowerCase().includes(t.toLowerCase()):"all"===i?!o&&!r:"favorite"===i?n.includes("favorite")&&!o&&!r:"journal"===i?n.includes("journal")&&!a&&!o&&!r:"templates"===i?a&&!o&&!r:"prompts"===i?s&&!o&&!r:"other"===i?!o&&!r&&!a&&!s&&!n.includes("journal"):"archive"===i?r&&!o:"trash"===i?o:n.includes(i)&&!o&&!r&&!a&&!s},[t,i]),u=o.useMemo(()=>e.filter(p),[e,p]);return{searchContent:t,setSearchContent:n,selectedTag:i,setSelectedTag:a,systemTags:s,availableTags:d,pickerTags:c,visibleEntries:u,isEntryVisible:p}}(p),B=o.useMemo(()=>(e=>{if(!e)return[];try{const t=localStorage.getItem(`mavis-ai-web:unpinned-tags:${e}`);if(null===t)return[];const n=JSON.parse(t);return Array.isArray(n)&&n.every(e=>"string"===typeof e)?Array.from(new Set(n)):(console.error("Stored tag pin preferences must be an array of strings."),[])}catch(t){return console.error("Failed to load tag pin preferences.",t),[]}})(l),[l]),[W,G]=o.useState(()=>({userId:l,tags:B})),_=W.userId===l?W.tags:B,q=e=>{const t=Array.from(new Set(e));if(l){try{localStorage.setItem(`mavis-ai-web:unpinned-tags:${l}`,JSON.stringify(t))}catch(n){console.error("Failed to save tag pin preferences.",n)}G({userId:l,tags:t})}else console.error("Cannot save tag pin preferences without an authenticated user.")},{cardRefs:Y,cardHeights:X,totalHeight:V}=function(e=[]){const t=o.useRef({}),[n,i]=o.useState({}),r=o.useCallback(()=>{const e={};Object.entries(t.current).forEach(([t,n])=>{n&&(e[t]=n.offsetHeight)}),i(e)},[]);o.useEffect(()=>{const e=new ResizeObserver(()=>{r()});return Object.values(t.current).forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[r]),o.useEffect(()=>{r()},[...e,r]);const a=o.useMemo(()=>Object.values(n).reduce((e,t)=>e+t,0),[n]);return{cardRefs:t,cardHeights:n,totalHeight:a,refreshCardHeights:r}}([p]),[Z,Q]=o.useState(null),[ee,te]=o.useState([]),ne=o.useRef(null),[oe,ie]=o.useState(0),re=o.useRef(null),[ae,se]=o.useState(0),[le,de]=o.useState(!1),[ce,pe]=o.useState(!1),[ue,ge]=o.useState(!1),[xe,he]=o.useState("notes"),me=o.useCallback(e=>{const{clientWidth:t,scrollLeft:n}=e.currentTarget;if(0===t)return;const o=n>=t/2?"chat":"notes";he(e=>e===o?e:o)},[]),fe=o.useMemo(()=>p.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[p]),be=o.useMemo(()=>p.filter(e=>C(e.content).includes("trash")).map(e=>e.id),[p]),we=o.useMemo(()=>ee.filter(e=>be.includes(e)),[ee,be]);o.useLayoutEffect(()=>{const e=()=>{var e,t;se(null!==(e=null===(t=re.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return re.current&&t.observe(re.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]),o.useLayoutEffect(()=>{const e=()=>{var e,t;ie(null!==(e=null===(t=ne.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return ne.current&&t.observe(ne.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]);const ye=o.useCallback(e=>{te(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),ve=o.useCallback(()=>{te(U.map(e=>e.id))},[U]),ke=o.useCallback(()=>{te([])},[]);o.useEffect(()=>{te(e=>e.filter(e=>p.some(t=>t.id===e)))},[p]);const je=o.useMemo(()=>p.filter(e=>ee.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[p,ee]),Ce=o.useMemo(()=>p.filter(e=>ee.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[p,ee]);o.useEffect(()=>{u()},[u]);const Se=()=>{window.scrollTo({top:0,behavior:"smooth"})},$e=async(e,t=!1)=>{if(!t){const t=p.find(t=>t.id===e);if(!t)return;const n=JSON.parse(t.content),o=Array.from(new Set([...(n.tags||[]).filter(e=>"archive"!==e),"trash"]));return void await x(e,JSON.stringify({...n,tags:o}))}await h(e)},Ae=(o.useMemo(()=>p.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[p]),x);return(0,d.jsx)(ln,{children:(0,d.jsxs)(St,{uid:s?s.uid:"",selectedNotesText:je,noteTitles:Ce,clearSelectedNotes:ke,entries:p,children:[(0,d.jsxs)(P,{children:[(0,d.jsx)(c,{selectedTag:R,selectedDate:i,searchContent:S,onSearchChange:z,onDateChange:e=>{a(e.target.value)},onAddNote:async function(){const e="all"!==R?[R]:[];await g({date:i,content:JSON.stringify({...O,tags:e})}),Se()},onCopyAllNotes:async()=>{const e=je.length>0?je:U.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:ve,onClearAll:ke,selectedCount:ee.length,expanded:e,setExplorerExpanded:t,panelWidth:oe,minimized:le,setMinimized:de,mobileActive:"notes"===xe}),(0,d.jsx)(qt,{onClearAll:ke,expanded:e,panelWidth:ae,minimized:ce,setMinimized:pe,notesMinimized:le,menuExpanded:ue,setMenuExpanded:ge,mobileActive:"chat"===xe})]}),(0,d.jsxs)(dn,{onScroll:me,children:[(0,d.jsxs)(cn,{role:"region","aria-label":"Notes",children:[(0,d.jsx)(H,{systemTags:L,customTags:F,unpinnedTags:_,onToggleTagPin:e=>{q(_.includes(e)?_.filter(t=>t!==e):[..._,e])},selectedTag:R,setSelectedTag:I,explorerExpanded:e,setExplorerExpanded:t,minimized:le,setMinimized:de,selectedNoteIds:ee,onRenameTag:async(e,t)=>{if(await f(e,t),_.includes(e)){const n=_.filter(t=>t!==e);n.includes(t)||n.push(t),q(n)}R===e&&I(t)},onDeleteTag:async e=>{await b(e),_.includes(e)&&q(_.filter(t=>t!==e)),R===e&&I("all")},onAddTagToSelected:async e=>{await k(ee,e)},onRemoveTagFromSelected:async e=>{await j(ee,e)},trashCount:be.length,selectedTrashCount:we.length,onDeleteSelectedNotes:async()=>{if(!ee.length)return;const e=new Set(we),t=ee.filter(t=>!e.has(t));if(we.length){const e=`${we.length} selected ${1===we.length?"note":"notes"}`,n=`${t.length} selected ${1===t.length?"note":"notes"}`,o=t.length?`Move ${n} to Trash and permanently delete ${e} from Trash?`:`Permanently delete ${e} from Trash?`;if(!window.confirm(o))return}await Promise.all([...we.map(e=>h(e)),...t.map(e=>$e(e))])},onRestoreSelectedTrash:async()=>{await j(we,"trash")},onRestoreAllTrash:async()=>{await j(be,"trash")},onEmptyTrash:async()=>{if(!be.length)return;window.confirm(`Permanently delete all ${be.length} note${1===be.length?"":"s"} from Trash? This cannot be undone.`)&&await Promise.all(be.map(e=>h(e)))}}),!le&&(0,d.jsx)(ft,{entries:U,hoveredCardId:Z,cardHeights:X,totalHeight:V,onScrollToCard:(e,t)=>{const n=Y.current[e],o=ne.current;if(!n||!o)return;const i=n.offsetTop,r="top"===t?i-100:i-o.clientHeight+n.offsetHeight+50;o.scrollTo({top:Math.max(0,r),behavior:"smooth"})}}),(0,d.jsx)(gn,{ref:ne,minimized:le,children:!le&&(0,d.jsx)(xt,{entries:U,pickerTags:J,cardRefs:Y,updateEntryDate:m,onHoverCard:Q,onDeleteEntry:$e,onChangeEntry:Ae,selectedNoteIds:ee,onToggleSelection:ye,templateOptions:fe})})]}),(0,d.jsxs)(pn,{role:"region","aria-label":"AI sessions",children:[(0,d.jsx)(un,{ref:re,minimized:ce,children:(0,d.jsx)(Tt,{uid:(null===s||void 0===s?void 0:s.uid)||"",selectedNotesText:je,noteTitles:Ce,notesCount:ee.length,clearSelectedNotes:ke})}),(0,d.jsx)(en,{minimized:ce,setMinimized:pe,menuExpanded:ue,setMenuExpanded:ge})]})]})]})})},ln=i.Ay.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
`,dn=i.Ay.div`
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
`,cn=i.Ay.div`
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
`,pn=i.Ay.div`
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
`,un=i.Ay.div`
  flex: ${({minimized:e})=>e?"0":"1"};
  width: ${({minimized:e})=>e?"0":"auto"};
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;

  @media (max-width: 768px) {
    flex: ${({minimized:e})=>e?"0":"1 1 0"};
  }
`,gn=i.Ay.div`
  flex: ${({minimized:e})=>e?"0 0 0":"1.5"};
  width: ${({minimized:e})=>e?"0":"auto"};
  min-width: 0;
  margin-right: 10px;
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
    margin-right: 0;
  }
`}}]);
//# sourceMappingURL=dashboard.2b1e6b2b.chunk.js.map