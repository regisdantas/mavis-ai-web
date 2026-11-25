"use strict";(Array.isArray(globalThis.webpackChunkmavis_ai_web)?globalThis.webpackChunkmavis_ai_web:globalThis.webpackChunkmavis_ai_web=[]).push([[945],{1929(e,t,n){n.r(t),n.d(t,{default:()=>cn});var i=n(5043),o=n(2816),r=n(1009),a=n(7246),s=n(4960),l=n(7149),d=n(579);const c=({selectedTag:e,selectedDate:t,searchContent:n,onSearchChange:o,onDateChange:c,onAddNote:y,onCopyAllNotes:v,selectedCount:k,onSelectAll:j,onClearAll:C,expanded:S,setExplorerExpanded:A,panelWidth:$,minimized:T,setMinimized:E,mobileActive:N,notesLocked:D,onToggleNotesLock:M})=>{const z=S?208:52,[P,O]=i.useState(!1),R=i.useRef(null),L=i.useRef(null);return i.useEffect(()=>{if(!P)return;const e=e=>{var t;const n=e.target;n instanceof Node&&null!==(t=R.current)&&void 0!==t&&t.contains(n)||O(!1)};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[P]),i.useEffect(()=>{var e;P&&(null===(e=L.current)||void 0===e||e.focus())},[P]),i.useEffect(()=>{N||O(!1)},[N]),(0,d.jsxs)(p,{explorerWidth:z,barWidth:$,minimized:T,mobileActive:N,children:[(0,d.jsx)(g,{children:T?"Explorer":""===n.trim()?e.charAt(0).toUpperCase()+e.slice(1):"Search"}),!T&&(0,d.jsxs)(d.Fragment,{children:["journal"===e&&(0,d.jsx)(u,{children:(0,d.jsx)("input",{title:"Select date",type:"date",value:t,onChange:c})}),(0,d.jsxs)(x,{ref:R,$searchExpanded:P,children:[(0,d.jsx)(h,{type:"button","aria-label":"Open search","aria-expanded":P,tabIndex:P?-1:0,onClick:()=>O(!0),children:(0,d.jsx)(r.CKj,{})}),(0,d.jsx)("input",{ref:L,"aria-hidden":!P,tabIndex:P?0:-1,placeholder:"Search",value:n,onChange:e=>o(e.target.value),onKeyDown:e=>{"Enter"!==e.key&&"Escape"!==e.key||(e.preventDefault(),e.currentTarget.blur(),O(!1))}}),(0,d.jsx)(a.K,{title:"Clear search",onClick:()=>o(""),children:(0,d.jsx)(l.rOP,{})})]})]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(f,{type:"button",title:D?"Unlock note editing":"Lock note editing","aria-label":D?"Unlock note editing":"Lock note editing","aria-pressed":D,onClick:M,children:D?(0,d.jsx)(r.F5$,{}):(0,d.jsx)(r.K4k,{})}),(0,d.jsx)(w,{type:"button",title:S?"Collapse notes menu":"Expand notes menu","aria-label":S?"Collapse notes menu":"Expand notes menu","data-sidebar-toggle":"notes",onClick:()=>A(!S),children:(0,d.jsx)(r.ND1,{})}),!T&&(0,d.jsxs)(d.Fragment,{children:[k>0?(0,d.jsx)(a.K,{title:"Clear all notes",onClick:C,children:(0,d.jsx)(r.TG1,{})}):(0,d.jsx)(a.K,{title:"Select all visible notes",onClick:j,children:(0,d.jsx)(r.NLe,{})}),(0,d.jsx)(a.K,{title:"Copy all visible notes",onClick:v,children:(0,d.jsx)(r.nxz,{})}),(0,d.jsx)(a.K,{disabled:D,title:"Add note",onClick:y,children:(0,d.jsx)(s.n4h,{})})]}),(0,d.jsx)(b,{title:T?"Restore notes panel":"Minimize notes panel",onClick:()=>E(!T),children:T?(0,d.jsx)(r.mkN,{}):(0,d.jsx)(r.prK,{})})]})]})},p=o.Ay.div`
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
`,u=o.Ay.div`
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
`,g=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;

  @media (max-width: 768px) {
    display: none;
  }
`,x=o.Ay.div`
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
`,h=o.Ay.button`
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
`,m=o.Ay.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 35px;

  @media (max-width: 768px) {
    order: 0;
  }
`,f=o.Ay.button`
  display: flex;
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
  cursor: pointer;

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 768px) {
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`,b=(0,o.Ay)(a.K)`
  @media (max-width: 768px) {
    display: none !important;
  }
`,w=o.Ay.button`
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
`;var y=n(2815),v=n(4966),k=n(2127);const j=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},C=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},S=e=>{if(!j(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))};var A=n(8222),$=n.n(A),T=n(8046),E=n(1286);const N=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),D=e=>{const t=(0,T.H9)(E.OO,"users",e);return(0,T.rJ)(t,"entries")},M=async(e,t)=>{const n=D(e);return(await(0,T.GG)((0,T.P)(n,(0,T._M)("id","==",t)))).docs};var z=n(6625),P=n(7950);const O=({children:e})=>{const t=document.getElementById("header-portal");return t?(0,P.createPortal)(e,t):null},R={title:"",type:"record",tags:[],text:"",color:"#fff",pinned:!1,collapsed:!1},L=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],I=e=>e.replace(/\b\w/g,e=>e.toUpperCase());async function K(e,t){await(0,T.BN)((0,T.H9)(E.OO,"users",e,"settings","tagPins"),{unpinnedTags:Array.from(new Set(t))})}var F=n(5561),H=n(5263);function J(e,t){(0,i.useEffect)(()=>{function n(n){e.current&&n.target instanceof Node&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[e,t])}const U=({systemTags:e,customTags:t,unpinnedTags:n,onToggleTagPin:o,selectedTag:s,setSelectedTag:l,explorerExpanded:c,setExplorerExpanded:p,minimized:u,setMinimized:g,selectedNoteIds:x,onRenameTag:h,onDeleteTag:m,onAddTagToSelected:f,onRemoveTagFromSelected:b,trashCount:w,selectedTrashCount:y,onDeleteSelectedNotes:v,onRestoreSelectedTrash:k,onRestoreAllTrash:j,onEmptyTrash:C,actionsLocked:S=!1,tagPreferencesLoading:A=!1})=>{const $=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),[T,E]=i.useState(null),[N,D]=i.useState(null),[M,z]=i.useState(""),P=i.useRef(null),O=i.useRef(null),R=i.useCallback(()=>{E(null),D(null)},[]);J(O,R),i.useEffect(()=>{S&&R()},[S,R]);const L=()=>{window.innerWidth<=768&&p(!1)},I=e=>{l(e),L()};i.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!c)return;const n=e.target;n instanceof Node&&(null===(t=P.current)||void 0===t||!t.contains(n))&&(n instanceof Element&&n.closest('[data-sidebar-toggle="notes"]')||p(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[c,p]);const K=async e=>{try{await e(),E(null),L()}catch(t){console.error("Failed to complete tag menu action.",t)}},F=e=>{const t=e.icon,n="all"!==e.name&&"other"!==e.name,i="trash"===e.name;return(0,d.jsxs)(G,{ref:T===e.name?O:null,$active:T===e.name,children:[(0,d.jsxs)(a.K,{expanded:c,selected:s===e.name,title:e.name,onClick:()=>I(e.name),children:[(0,d.jsx)(t,{}),c&&(0,d.jsx)("span",{children:$(e.name)})]}),c&&n&&(0,d.jsxs)(_,{children:[(0,d.jsx)(q,{type:"button",disabled:S,"aria-label":`Manage ${e.name} tag`,title:`Manage ${$(e.name)} tag`,onClick:t=>{t.stopPropagation(),E(T===e.name?null:e.name)},children:(0,d.jsx)(r.ZZB,{})}),T===e.name&&(0,d.jsx)(Y,{children:i?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(X,{type:"button",disabled:!x.length,onClick:()=>{K(v)},children:"Delete Selected"}),(0,d.jsx)(X,{type:"button",disabled:0===y,onClick:()=>{K(k)},children:"Restore Selected"}),(0,d.jsx)(X,{type:"button",disabled:0===w,onClick:()=>{K(j)},children:"Restore All"}),(0,d.jsx)(X,{type:"button",disabled:0===w,onClick:()=>{K(C)},children:"Empty Bin"})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(X,{type:"button",disabled:!x.length,onClick:()=>{K(()=>f(e.name))},children:"Add Selected"}),(0,d.jsx)(X,{type:"button",disabled:!x.length,onClick:()=>{K(()=>b(e.name))},children:"Remove Selected"})]})})]})]},e.name)},U=e=>{const t=!n.includes(e);return(0,d.jsxs)(G,{ref:T===e?O:null,$active:T===e,children:[(0,d.jsxs)(a.K,{expanded:c,selected:s===e,title:$(e),onClick:()=>I(e),children:[(0,d.jsx)(r.cnX,{}),N===e?(0,d.jsx)(V,{autoFocus:!0,value:M,onClick:e=>e.stopPropagation(),onChange:e=>{e.currentTarget.setCustomValidity(""),z(e.target.value)},onKeyDown:t=>{if("Enter"===t.key){const n=M.trim();if(!n)return t.currentTarget.setCustomValidity("A tag name is required."),void t.currentTarget.reportValidity();K(async()=>{await h(e,n),D(null)})}"Escape"===t.key&&R()}}):c&&(0,d.jsx)("span",{children:$(e)})]}),c&&(0,d.jsxs)(_,{children:[(0,d.jsx)(q,{type:"button",disabled:S,"aria-label":`Manage ${e} tag`,title:`Manage ${$(e)} tag`,onClick:t=>{t.stopPropagation(),E(T===e?null:e)},children:(0,d.jsx)(r.ZZB,{})}),T===e&&(0,d.jsxs)(Y,{children:[(0,d.jsx)(X,{type:"button",disabled:S||A,onClick:()=>{K(()=>o(e))},children:t?"Unpin":"Pin"}),(0,d.jsx)(X,{type:"button",onClick:()=>{D(e),z(e)},children:"Rename"}),(0,d.jsx)(X,{type:"button",onClick:()=>{K(()=>m(e))},children:"Delete"}),(0,d.jsx)(X,{type:"button",disabled:!x.length,onClick:()=>{K(()=>f(e))},children:"Add Selected"}),(0,d.jsx)(X,{type:"button",disabled:!x.length,onClick:()=>{K(()=>b(e))},children:"Remove Selected"})]})]})]},e)},Z=t.filter(e=>!n.includes(e)),Q=t.filter(e=>n.includes(e));return(0,d.jsxs)(B,{ref:P,expanded:c,children:[(0,d.jsxs)(a.K,{expanded:c,title:"Menu",onClick:()=>p(!c),children:[(0,d.jsx)(r.ND1,{}),c&&(0,d.jsx)("span",{children:"Menu"})]}),u&&(0,d.jsxs)(a.K,{expanded:c,title:"Expand Notes Explorer",onClick:()=>g(!u),children:[(0,d.jsx)(H.$ZN,{}),c&&(0,d.jsx)("span",{children:"Expand Notes Explorer"})]}),e.filter(e=>"top"===e.position).map(F),Z.map(U),e.filter(e=>"bottom"===e.position).map(F),Q.length>0&&(0,d.jsx)(W,{role:"separator"}),Q.map(U)]})},B=o.Ay.div`
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
`,W=o.Ay.div`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  background: #d0d0d0;
`,G=o.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${({$active:e})=>e?9999:1};
`,_=o.Ay.div`
  position: relative;
`,q=o.Ay.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`,Y=o.Ay.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
`,X=o.Ay.button`
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
`,V=o.Ay.input`
  width: 100px;
  margin-left: 8px;
`;var Z=n(5369);const Q=({title:e,titleRef:t,readOnly:n,collapsed:i,isFavorite:o,selected:l,onToggleSelection:c,copyFormattedContent:p,onToggleFavorite:u,onToggleCollapse:g,onTitleChange:x})=>(0,d.jsxs)(te,{children:[(0,d.jsxs)(ne,{children:[(0,d.jsx)(ee,{title:l?"Unselect note":"Select note",onClick:c,children:l?"\u2713":""}),o?(0,d.jsx)(a.K,{disabled:n,title:"Remove favorite",onClick:u,children:(0,d.jsx)(Z.gt3,{})}):(0,d.jsx)(a.K,{disabled:n,title:"Add favorite",onClick:u,children:(0,d.jsx)(r.usP,{})}),(0,d.jsx)(ie,{ref:t,title:"Note name",role:"textbox",contentEditable:!n,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>x(e.currentTarget.innerText),children:e})]}),(0,d.jsxs)(oe,{children:[(0,d.jsx)(a.K,{title:"Copy note",onClick:p,children:(0,d.jsx)(r.nxz,{})}),i?(0,d.jsx)(a.K,{disabled:n,title:"Expand note",onClick:g,children:(0,d.jsx)(s.BSQ,{})}):(0,d.jsx)(a.K,{disabled:n,title:"Collapse note",onClick:g,children:(0,d.jsx)(s.q2p,{})})]})]}),ee=o.Ay.span`
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
`,te=o.Ay.header`
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
`,ne=o.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;

  color: black;
`,ie=o.Ay.span`
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
`,oe=o.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`;var re=n(8849),ae=n(5709),se=n(8420),le=n(6801),de=n(8452),ce=n(285),pe=n(4853),ue=n(8550),ge=n(3596),xe=n(5312),he=n.n(xe);const me=e=>{const t=e=>{for(let o=0;o<e.children.length;o+=1){const r=e.children[o];if("text"===r.type){var n,i;const t=null===(n=r.position)||void 0===n||null===(i=n.start)||void 0===i?void 0:i.offset;void 0!==t&&(e.children[o]={type:"element",tagName:"span",properties:{"data-note-source-start":t},children:[r]})}else"element"===r.type&&t(r)}};t(e)},fe=()=>me,be=({label:e,expression:t,onExecute:n,disabled:i})=>(0,d.jsx)("button",{className:"markdownButton",disabled:i,onClick:()=>n(t),children:e}),we=({value:e,readOnly:t,editing:n,textareaRef:i,markdownRef:o,setValue:r,setEditing:a,onSave:s,onMarkdownClick:l,processMarkdown:c,onExecuteExpression:p})=>{if(n)return(0,d.jsx)(ve,{ref:i,readOnly:t,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:e||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,r(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)&&(s(),a(!1))}});const u=c(e||"* \u2753 What do you have for today?");return(0,d.jsx)(ye,{ref:o,onClick:n=>{if(t)return;const i=n.target;if(i.closest("button"))return;const o=u===e?((e,t,n)=>{var i,o,r;const a=document,s=null===(i=a.caretPositionFromPoint)||void 0===i?void 0:i.call(a,t,n),l=(null===s||void 0===s?void 0:s.offsetNode.nodeType)===Node.TEXT_NODE,d=l?null:null===(o=a.caretRangeFromPoint)||void 0===o?void 0:o.call(a,t,n),c=l?null===s||void 0===s?void 0:s.offsetNode:null===d||void 0===d?void 0:d.startContainer,p=l?null===s||void 0===s?void 0:s.offset:null===d||void 0===d?void 0:d.startOffset;if(!c||void 0===p||c.nodeType!==Node.TEXT_NODE||!e.contains(c))return null;const u=null===(r=c.parentElement)||void 0===r?void 0:r.closest("[data-note-source-start]"),g=null===u||void 0===u?void 0:u.getAttribute("data-note-source-start");if(null===g||void 0===g)return null;const x=Number(g)+p;return Number.isFinite(x)?x:null})(n.currentTarget,n.clientX,n.clientY):null;l(i.innerText||i.textContent||"",o)},children:(0,d.jsx)(re.oz,{rehypePlugins:[ae.A,fe],components:{button(e){var n,i,o;const r=decodeURIComponent(String(null!==(n=null===(i=e.node)||void 0===i||null===(o=i.properties)||void 0===o?void 0:o.dataExpression)&&void 0!==n?n:""));return(0,d.jsx)(be,{label:String(e.children),expression:r,onExecute:p,disabled:t})}},remarkPlugins:[[de.A,{padSpaceAfter:!1,emoticon:!0}],[ue.A,{tight:!0,ordered:!0}],[se.A,{stringLength:he()}],ce.A,pe.A,ge.A,le.A],children:u})})},ye=o.Ay.div`
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
`,ve=o.Ay.textarea`
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
`,ke=({colors:e,onColorClicked:t,dropdownRef:n})=>(0,P.createPortal)((0,d.jsx)(je,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map(e=>(0,d.jsxs)(Ce,{onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:[(0,d.jsx)(Se,{color:e}),(0,d.jsx)(Ae,{children:e})]},e))}),document.body),je=o.Ay.div`
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
`,Ce=o.Ay.button`
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
`,Se=o.Ay.div`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  background: ${({color:e})=>e};

  border: 1px solid rgba(0, 0, 0, 0.15);

  flex-shrink: 0;
`,Ae=o.Ay.span`
  font-size: 12px;
  font-weight: 600;

  color: #444;
`,$e=({options:e,onPicked:t,dropdownRef:n})=>(0,P.createPortal)((0,d.jsx)(Te,{ref:n,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:e.map((e,n)=>(0,d.jsx)(Ee,{onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),t(e)},children:(0,d.jsx)(Ne,{children:(0,d.jsx)(De,{children:e.title})})},n))}),document.body),Te=o.Ay.div`
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
`,Ee=o.Ay.button`
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
`,Ne=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  min-width: 0;
`,De=o.Ay.span`
  color: #444;

  font-size: 12px;
  font-weight: 600;

  line-height: 1.3;
`,Me=({readOnly:e,aiLoading:t,isArchived:n,isTrash:i,showColorPicker:o,showTemplatePicker:s,colorPickerRef:c,templatePickerRef:p,colorDropdownRef:u,templateDropdownRef:g,noteColors:x,templateOptions:h,undoLastChange:m,handleAI:f,archiveNote:b,trashNote:w,setShowColorPicker:y,setShowTemplatePicker:v,onColorSelected:k,onTemplateSelected:j})=>(0,d.jsxs)(ze,{children:[(0,d.jsxs)(Pe,{children:[(0,d.jsx)(a.K,{disabled:e,title:"Change note background color",onClick:()=>y(e=>!e),children:(0,d.jsx)(l.$di,{})}),(0,d.jsx)(a.K,{disabled:e,title:"Load template",onClick:()=>v(e=>!e),children:(0,d.jsx)(r.MRc,{})}),(0,d.jsx)(a.K,{disabled:e,"data-keepeditor":"true",title:"AI assistant",onMouseDown:e=>e.preventDefault(),onClick:f,children:(0,d.jsx)(r.Ojn,{color:t?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:e,"data-keepeditor":"true",title:"Revert last change",onMouseDown:e=>e.preventDefault(),onClick:m,children:(0,d.jsx)(r.cO3,{})}),(0,d.jsx)(a.K,{disabled:e,title:n?"Unarchive note":"Archive note",onClick:b,children:(0,d.jsx)(r.OZ2,{color:n?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:e,title:i?"Delete permanently":"Move to trash",onClick:w,children:(0,d.jsx)(r.IXo,{color:i?"#dc2626":void 0})})]}),o&&(0,d.jsx)(Oe,{ref:c,children:(0,d.jsx)(ke,{colors:x,onColorClicked:k,dropdownRef:u})}),s&&(0,d.jsx)(Re,{ref:p,children:(0,d.jsx)($e,{options:h,onPicked:j,dropdownRef:g})})]}),ze=o.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 0 0;
`,Pe=o.Ay.span`
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
`,Oe=o.Ay.div`
  position: relative;
  width: 100%;
`,Re=o.Ay.div`
  position: relative;
  width: 100%;
`,Le=({date:e,tags:t,availableTags:n,readOnly:o,tagPickerRef:a,tagDropdownRef:l,otherTagsDropdownRef:c,showTagPicker:p,creatingTag:u,newTagName:g,setShowTagPicker:x,setCreatingTag:h,setNewTagName:m,onDateChange:f,hasTag:b,toggleTag:w,createTag:y,formatTag:v,formatDate:k})=>{const j=i.useRef(null);return(0,d.jsxs)(Ie,{children:[(0,d.jsx)(Fe,{children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Ke,{$disabled:o,"aria-disabled":o,onClick:()=>{var e,t,n;o||(null===(e=j.current)||void 0===e||null===(t=e.showPicker)||void 0===t||t.call(e),null===(n=j.current)||void 0===n||n.click())},children:k(e)}),(0,d.jsx)("input",{ref:j,type:"date",value:e,style:{display:"none"},onChange:e=>f(e.target.value)})]})}),t.length>0&&(0,d.jsxs)(He,{ref:c,children:[(0,d.jsxs)(Je,{"aria-label":`Show ${t.length} note ${1===t.length?"tag":"tags"}`,title:`${t.length} note ${1===t.length?"tag":"tags"}`,children:[(0,d.jsx)(r.cnX,{}),(0,d.jsx)("span",{children:t.length}),(0,d.jsx)(r.fK4,{})]}),(0,d.jsx)(Ue,{children:t.map(e=>(0,d.jsx)(Be,{type:"button",disabled:o,onClick:()=>w(e),children:v(e)},e))})]}),(0,d.jsxs)(We,{ref:a,children:[!o&&(0,d.jsx)(Ge,{type:"button",title:"Add tag","aria-label":"Add tag",onClick:()=>x(!p),children:(0,d.jsx)(s.n4h,{})}),p&&(0,P.createPortal)((0,d.jsxs)(_e,{ref:l,children:[n.map(e=>(0,d.jsxs)(qe,{className:b(e)?"selected":"",onClick:()=>{o||w(e)},children:[(0,d.jsx)(r.cnX,{}),(0,d.jsx)("span",{children:v(e)})]},e)),u?(0,d.jsx)(Xe,{autoFocus:!0,placeholder:"Tag name...",value:g,onChange:e=>!o&&m(e.target.value),onKeyDown:e=>{o||"Enter"!==e.key||y(g),"Escape"===e.key&&(h(!1),m(""))},onBlur:()=>{if(o)return h(!1),void m("");g.trim()?y(g):h(!1)}}):(0,d.jsxs)(Ye,{onClick:()=>!o&&h(!0),children:[(0,d.jsx)(r.cnX,{}),"New Tag"]})]}),document.body)]})]})},Ie=o.Ay.div`
  && {
    width: fit-content;
    margin-left: 0;
  }

  display: flex;
  align-items: center;
  flex-direction: row !important;
  justify-content: flex-start !important;
  gap: 8px;
`,Ke=o.Ay.span`
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
`,Fe=o.Ay.div`
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
`,He=o.Ay.details`
  position: relative;
  flex: 0 0 auto;
`,Je=o.Ay.summary`
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
`,Ue=o.Ay.div`
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
`,Be=o.Ay.button`
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
`,We=o.Ay.div`
  && {
    width: fit-content;
    margin-left: 0;
  }

  position: relative;
  flex: 0 0;
  width: fit-content;
  margin: 0;
`,Ge=o.Ay.button`
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
`,_e=o.Ay.div`
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
`,qe=o.Ay.span`
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
`,Ye=o.Ay.span`
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
`,Xe=o.Ay.input`
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
`,Ve=(e={})=>{const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},Ze=(e,t={},n=!1,i=0)=>{const o=new Date;return(e=e.replace(/@date\b/g,()=>o.toLocaleDateString()).replace(/@time\b/g,()=>o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>o.toLocaleString()).replace(/@dayofweek\b/g,()=>o.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(o.getMonth()+1)).replace(/@monthname\b/g,()=>o.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(o.getFullYear())).replace(/@today\b/g,()=>o.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const i=Number(t),o=Number(n);return i&&o?(i/(o*o)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-o.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const i=Math.max(-1,Math.min(1,Number(n))),o=t.isMobile?5:10,r=Math.abs(i),a=`${Math.round(100*i)}%`,s=Math.round(r*o);let l=i>=0?"\u2588".repeat(s)+"\u2591".repeat(o-s):"\u2591".repeat(o-s)+"\u2588".repeat(s);const d=Math.max(0,Math.floor((o-a.length)/2));return l.slice(0,d)+a+l.slice(d+a.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&i<5?Ze(e,t,n,i+1):e},Qe=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,et=(e,t)=>{const n={};e.replace(Qe,(e,t,i)=>(n[t]=i.trim(),""));let i=!0;for(;i;){i=!1;for(const[e,o]of Object.entries(n)){if(!o.includes("@"))continue;const r=Ze(tt(o,n),Ve({...t,...n}));r!==o&&(n[e]=r,i=!0)}}return n},tt=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var i;return null!==(i=t[n])&&void 0!==i?i:""}),nt=(e,t,n)=>{const i=et(e),o=Ve({...t,...Object.fromEntries(Object.entries(i).map(([e,t])=>{if(""===t)return[e,""];const n=Number(t);return[e,Number.isNaN(n)?t:n]}))});return Ze(tt((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),i),o,n)};function it(){const[e,t]=(0,i.useState)(""),[n,o]=(0,i.useState)(""),[r,a]=(0,i.useState)({city:"",country:""});return(0,i.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async({coords:n})=>{try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${n.latitude}&longitude=${n.longitude}&current=temperature_2m,weather_code`),l=await t.json();let d="",c="";try{var i,o,r,a;const e=await fetch(`https://geocode.maps.co/reverse?lat=${n.latitude}&lon=${n.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();d=(null===(i=t.address)||void 0===i?void 0:i.city)||(null===(o=t.address)||void 0===o?void 0:o.town)||(null===(r=t.address)||void 0===r?void 0:r.village)||"",c=(null===(a=t.address)||void 0===a?void 0:a.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(l.current.temperature_2m)}\xb0C`,weather:(s=l.current.weather_code,0===s?"\u2600\ufe0f Sunny":[1,2].includes(s)?"\ud83c\udf24\ufe0f Partly Cloudy":3===s?"\u2601\ufe0f Cloudy":[45,48].includes(s)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(s)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(s)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(s)?"\u2744\ufe0f Snowing":[80,81,82].includes(s)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(s)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:d,country:c})}catch(l){t(l)}var s}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),o(e.weather),a({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:r}}var ot=n(9894);const rt=new TextEncoder,at=new TextDecoder;function st(e){const t=new Uint8Array(e);let n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return btoa(n)}function lt(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function dt(e,t){const n=await crypto.subtle.importKey("raw",rt.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function ct(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),i=crypto.getRandomValues(new Uint8Array(16)),o=await dt(t,i);return{encrypted:st(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},o,rt.encode(e))),iv:st(n),salt:st(i)}}(t,e);await(0,T.BN)((0,T.H9)(E.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function pt(e){const t=await(0,T.x7)((0,T.H9)(E.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,i){const o=await dt(i,lt(n)),r=await crypto.subtle.decrypt({name:"AES-GCM",iv:lt(t)},o,lt(e));return at.decode(r)}(n.encryptedApiKey,n.iv,n.salt,e)}async function ut(e,t,n,i,o,r){console.log(o);const a=r||await pt(e);if(!a)throw new Error("OpenAI API Key not configured.");const s=new ot.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),l=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${i}\n`;return await s.responses.create({model:o||"gpt-6-luna",input:l})}const gt="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const xt=({id:e,date:t,content:n,notesLocked:o,onDeleteCard:r,onChangeContent:a,onChangeDate:s,tags:l,selected:c,onToggleSelection:p,templateOptions:u})=>{const[g,x]=i.useState(!1),[h,m]=i.useState(!1),[f,b]=i.useState(!1),w=i.useRef(null),y=i.useRef(null),v=i.useRef(null),k=i.useRef(null),S=i.useRef(null),A=i.useRef(null),$=i.useRef(null),T=i.useRef(null),E=i.useRef(null),N=i.useRef(null),[D,M]=i.useState(window.innerWidth<1260),{user:P}=(0,z.o)(),{temperature:O,weather:K,location:F}=it(),{setCursorPosition:H,findBestCursorPosition:J}=function({editing:e,textareaRef:t}){const[n,o]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(!e||!t.current||null===n)return;const i=t.current;i.focus(),i.setSelectionRange(n,n);const o=requestAnimationFrame(()=>{if(!i.isConnected)return;const e=document.createElement("div"),t=window.getComputedStyle(i);e.style.position="absolute",e.style.visibility="hidden",e.style.whiteSpace="pre-wrap",e.style.wordWrap="break-word",e.style.boxSizing=t.boxSizing,e.style.font=t.font,e.style.lineHeight=t.lineHeight,e.style.letterSpacing=t.letterSpacing,e.style.wordSpacing=t.wordSpacing,e.style.textIndent=t.textIndent,e.style.tabSize=t.tabSize,e.style.padding=t.padding,e.style.border=t.border,e.style.width=t.width,e.textContent=`${i.value.substring(0,n)}\u200b`,document.body.appendChild(e);const o=e.offsetHeight;document.body.removeChild(e);const r=i.getBoundingClientRect().top;let a=i.parentElement;for(;a;){const e=window.getComputedStyle(a).overflowY;if("auto"===e||"scroll"===e||"overlay"===e){const e=a.getBoundingClientRect().top,t=a.scrollTop+r+o-e-a.clientHeight/2;return void a.scrollTo({top:Math.max(0,t),behavior:"smooth"})}a=a.parentElement}window.scrollTo({top:Math.max(0,window.scrollY+r+o-window.innerHeight/2),behavior:"smooth"})});return()=>cancelAnimationFrame(o)},[e,n,t]),{cursorPosition:n,setCursorPosition:o,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const i=n.split(" ");for(let o=Math.min(i.length,8);o>=2;o--)for(let e=0;e<=i.length-o;e++){const n=i.slice(e,e+o).join(" "),r=t.indexOf(n);if(r>=0)return r}for(const o of i){if(o.length<4)continue;const e=t.indexOf(o);if(e>=0)return e}return t.length}}}({editing:g,textareaRef:w});!function({tagPickerRef:e,tagDropdownRef:t,otherTagsDropdownRef:n,colorPickerRef:o,colorDropdownRef:r,templatePickerRef:a,templateDropdownRef:s,closeTagPicker:l,closeColorPicker:d,closeTemplatePicker:c}){(0,i.useEffect)(()=>{const i=i=>{var p,u,g,x,h,m,f,b,w,y,v,k,j,C;const S=i.target,A=null!==(p=null===(u=e.current)||void 0===u?void 0:u.contains(S))&&void 0!==p&&p,$=null!==(g=null===(x=t.current)||void 0===x?void 0:x.contains(S))&&void 0!==g&&g;A||$||l(),(null===(h=null===(m=n.current)||void 0===m?void 0:m.contains(S))||void 0===h||!h)&&n.current&&(n.current.open=!1);const T=null!==(f=null===(b=o.current)||void 0===b?void 0:b.contains(S))&&void 0!==f&&f,E=null!==(w=null===(y=r.current)||void 0===y?void 0:y.contains(S))&&void 0!==w&&w;T||E||d();const N=null!==(v=null===(k=a.current)||void 0===k?void 0:k.contains(S))&&void 0!==v&&v,D=null!==(j=null===(C=s.current)||void 0===C?void 0:C.contains(S))&&void 0!==j&&j;N||D||c()};return document.addEventListener("pointerdown",i),()=>{document.removeEventListener("pointerdown",i)}},[e,t,n,o,r,a,s,l,d,c])}({tagPickerRef:k,tagDropdownRef:T,otherTagsDropdownRef:S,colorPickerRef:A,colorDropdownRef:E,templatePickerRef:$,templateDropdownRef:N,closeTagPicker:()=>{q(!1),Y(!1)},closeColorPicker:()=>{m(!1)},closeTemplatePicker:()=>{b(!1)}}),i.useEffect(()=>{const e=()=>{M(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const U=i.useMemo(()=>((e,t)=>{const n=t(e)?JSON.parse(e):{...R,text:e};return n&&"object"===typeof n&&delete n.locked,{...R,...n,tags:Array.from(new Set([...n.tags||[]]))}})(n,j),[n]),B=o,{showTagPicker:W,creatingTag:G,newTagName:_,setShowTagPicker:q,setCreatingTag:Y,setNewTagName:X,hasTag:V,toggleTag:Z,createTag:ee}=function({tags:e,onTagsChange:t}){const[n,o]=(0,i.useState)(!1),[r,a]=(0,i.useState)(!1),[s,l]=(0,i.useState)(""),d=t=>e.includes(t),c=n=>{console.log("current tags",e);const i=Array.from(new Set(d(n)?e.filter(e=>e!==n):[...e,n]));console.log("updated tags",i),t(i)};return{showTagPicker:n,creatingTag:r,newTagName:s,setShowTagPicker:o,setCreatingTag:a,setNewTagName:l,hasTag:d,toggleTag:c,createTag:e=>{const t=e.trim().toLowerCase();t&&(c(t),l(""),a(!1))}}}({tags:U.tags,onTagsChange:t=>{B||a(e,JSON.stringify({...U,tags:t}))}}),te=i.useCallback(e=>V("templates")?e:((e,t={})=>{const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/quarter\b/g,()=>String(Math.floor(n.getMonth()/3)+1)).replace(/\/week\b/g,()=>{const e=new Date(n);e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const t=new Date(e.getFullYear(),0,4);return String(1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7))}).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const i=Number(t),o=Number(n);return String(Math.floor(Math.random()*(o-i+1))+i)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",i=Number(t);return Array.from({length:i},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const i=new Date(t);let o=n.getFullYear()-i.getFullYear();const r=n.getMonth()-i.getMonth();return(r<0||0===r&&n.getDate()<i.getDate())&&o--,String(o)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const i=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(i/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})})(e,{weather:K,temperature:O,city:F.city,country:F.country}),[V,F.city,F.country,O,K]),[ne,ie]=i.useState(U.text||""),[oe,re]=i.useState([]),ae=i.useRef({text:U.text||"",title:U.title||""});i.useEffect(()=>{ae.current={text:U.text||"",title:U.title||""}},[U.text,U.title]);const se=i.useCallback((t,n)=>{var i,o,r,s,l;const d=null!==t&&void 0!==t?t:g&&null!==(i=null===(o=w.current)||void 0===o?void 0:o.value)&&void 0!==i?i:ne,c=null!==(r=null!==(s=null!==n&&void 0!==n?n:null===(l=v.current)||void 0===l?void 0:l.innerText)&&void 0!==s?s:U.title)&&void 0!==r?r:"",p=te(d),u=te(c),x=ae.current;x.text===p&&x.title===u||(ae.current={text:p,title:u},ie(p),a(e,JSON.stringify({...U,text:p,title:u})).catch(e=>{console.error("Failed to autosave note.",e),ae.current.text===p&&ae.current.title===u&&(ae.current=x)}))},[g,e,te,U,a,ne]);i.useEffect(()=>{if(!g||B)return;const e=window.setTimeout(()=>se(),500);return()=>window.clearTimeout(e)},[g,B,se,ne]),i.useEffect(()=>{const e=()=>se(),t=()=>{"hidden"===document.visibilityState&&se()};return document.addEventListener("visibilitychange",t),window.addEventListener("pagehide",e),window.addEventListener("beforeunload",e),()=>{document.removeEventListener("visibilitychange",t),window.removeEventListener("pagehide",e),window.removeEventListener("beforeunload",e)}},[se]),i.useEffect(()=>{var e;B&&(m(!1),b(!1),q(!1),Y(!1),S.current&&(S.current.open=!1),g&&(null===(e=w.current)||void 0===e||e.blur()))},[g,B,Y,q,m,b]);const le=i.useCallback(e=>{re(t=>t[t.length-1]===e?t:[...t,e])},[]),{aiLoading:de,handleAI:ce}=function({userId:e,value:t,textareaRef:n,pushHistory:o,onContentChange:r}){const[a,s]=(0,i.useState)(!1);return{aiLoading:a,handleAI:async()=>{if(!e)return void alert("User not authenticated");let i=await pt(e);if(!i){var a;if(i=(null===(a=window.prompt("OpenAI API Key not configured.\n\nEnter your OpenAI API Key:"))||void 0===a?void 0:a.trim())||"",!i)return;await ct(e,i)}const l=window.prompt("Examples:\n\nFix grammar\nSummarize\nRewrite professionally\nTranslate to Portuguese");if(null!==l&&void 0!==l&&l.trim()){s(!0);try{o(t);const a=n.current;if(a&&a.selectionStart!==a.selectionEnd){const n=a.selectionStart,o=a.selectionEnd,s=t.substring(n,o),d=await ut(e,gt,l,s,"gpt-6-luna",i),c=t.substring(0,n)+d.output_text.trim()+t.substring(o);return void r(c)}const s=await ut(e,gt,l,t,"gpt-6-luna",i),d=`${t}\n\n${s.output_text.trim()}`;r(d)}catch(d){console.error(d),alert(d instanceof Error?d.message:"AI request failed")}finally{s(!1)}}}}}({userId:null===P||void 0===P?void 0:P.uid,value:ne,textareaRef:w,pushHistory:le,onContentChange:t=>{B||(ie(t),a(e,JSON.stringify({...U,text:t})))}}),pe=()=>{if(B)return;if(V("trash"))return void r(e,!0);const t=(e=>Array.from(new Set([...e.filter(e=>"archive"!==e),"trash"])))(U.tags);a(e,JSON.stringify({...U,tags:t}))};return(0,d.jsx)(ht,{selected:c,children:(0,d.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:U.color||"#eee"},children:[(0,d.jsx)(Q,{title:U.title,titleRef:v,readOnly:o,collapsed:U.collapsed,selected:c,onToggleSelection:()=>p(e),isFavorite:V("favorite"),copyFormattedContent:async()=>{if(!y.current)return;const e=y.current.innerHTML,t=y.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>{B||Z("favorite")},onToggleCollapse:()=>{o||a(e,JSON.stringify({...U,collapsed:!U.collapsed}))},onTitleChange:e=>se(void 0,e)}),!U.collapsed&&(0,d.jsx)(we,{value:ne,readOnly:B,editing:g,textareaRef:w,markdownRef:y,setValue:ie,setEditing:x,processMarkdown:e=>nt(e,{temperature:O,weather:K,city:F.city,country:F.country},D),onExecuteExpression:t=>{if(B)return;le(ne);const n=((e,t,n)=>{const i=t.match(/^\$\{(\w+)\}=(.*)$/);if(!i)return e;const o=i[1];let r=i[2];const a=et(e);r=Ze(r,Ve({...n,...a})),r=r.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=a[t])&&void 0!==n?n:"")});const s="${"+o+"}="+Function(`return (${r})`)(),l=new RegExp(`^\\$\\{${o}\\}\\s*=([^\\r\\n]*)`,"m");return l.test(e)?e.replace(l,s):e.trimEnd()+"\n"+s})(ne,t,{temperature:O,weather:K,city:F.city,country:F.country});ie(n),a(e,JSON.stringify({...U,text:n}))},onSave:()=>{var e,t;return se(null!==(e=null===(t=w.current)||void 0===t?void 0:t.value)&&void 0!==e?e:ne)},onMarkdownClick:(e,t)=>{if(B)return;le(ne);const n=null!==t&&void 0!==t?t:J(e,ne);H(n),x(!0)}}),(0,d.jsx)("footer",{className:"footer",children:(0,d.jsxs)("span",{className:"footbox",children:[(0,d.jsx)(Le,{tagDropdownRef:T,otherTagsDropdownRef:S,date:t,tags:U.tags,availableTags:l,readOnly:B,tagPickerRef:k,showTagPicker:W,creatingTag:G,newTagName:_,setShowTagPicker:q,setCreatingTag:Y,setNewTagName:X,onDateChange:t=>{B||s(e,t)},hasTag:V,toggleTag:Z,createTag:ee,formatTag:I,formatDate:C}),(0,d.jsx)(Me,{colorDropdownRef:E,templateDropdownRef:N,readOnly:B,aiLoading:de,isArchived:V("archive"),isTrash:V("trash"),showColorPicker:h,showTemplatePicker:f,colorPickerRef:A,templatePickerRef:$,noteColors:L,templateOptions:u,undoLastChange:()=>{if(B)return;const t=oe[oe.length-1];t&&(re(e=>e.slice(0,-1)),ie(t),a(e,JSON.stringify({...U,text:t})))},handleAI:()=>{B||ce()},archiveNote:()=>{B||(()=>{if(o)return;const t=(e=>e.includes("archive")?e.filter(e=>"archive"!==e):[...e.filter(e=>"trash"!==e),"archive"])(U.tags);a(e,JSON.stringify({...U,tags:t}))})()},trashNote:()=>{B||pe()},setShowColorPicker:m,setShowTemplatePicker:b,onColorSelected:t=>{B||(a(e,JSON.stringify({...U,color:t})),m(!1))},onTemplateSelected:t=>{if(B)return;le(ne);let n=t.text.replace(/\\\$\{/g,"${");n=te(n);const i=Array.from(new Set([...U.tags||[],...t.tags||[]]));a(e,JSON.stringify({...U,collapsed:!1,color:t.color,text:n,title:te(t.title),tags:i})),ie(n),b(!1)}})]})})]})},e)},ht=o.Ay.div`
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

`,mt=({entries:e,pickerTags:t,cardRefs:n,onHoverCard:i,onDeleteEntry:o,onChangeEntry:r,updateEntryDate:a,selectedNoteIds:s,onToggleSelection:l,templateOptions:c,notesLocked:p})=>(0,d.jsx)(ft,{children:e.map((e,u)=>(0,d.jsx)("div",{ref:t=>{n.current[e.id]=t},onMouseEnter:()=>i(e.id),onMouseLeave:()=>i(null),children:(0,d.jsx)(xt,{id:e.id,date:e.date,number:u+1,content:e.content,onDeleteCard:o,onChangeContent:r,onChangeDate:a,tags:t,selected:s.includes(e.id),onToggleSelection:l,templateOptions:c,notesLocked:p})},e.id))}),ft=o.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`,bt=e=>{try{return JSON.parse(e).color||"#cccccc"}catch{return"#cccccc"}},wt=({entries:e,hoveredCardId:t,cardHeights:n,totalHeight:i,onScrollToCard:o})=>(0,d.jsx)(yt,{children:e.map(e=>(0,d.jsxs)(vt,{$selected:t===e.id,style:{backgroundColor:bt(e.content),height:`${Math.max((n[e.id]||40)/Math.max(i,1)*100,60)}px`},children:[(0,d.jsx)(a.K,{style:{padding:"0",margin:"0"},title:"Go to note top",onClick:()=>o(e.id,"top"),children:(0,d.jsx)(r.wAb,{})}),(0,d.jsx)(a.K,{style:{padding:"0",margin:"0"},title:"Go to note bottom",onClick:()=>o(e.id,"bottom"),children:(0,d.jsx)(r.fK4,{})})]},e.id))}),yt=o.Ay.div`
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
`,vt=o.Ay.div`
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
`,kt=e=>{const t=(0,T.H9)(E.OO,"users",e);return(0,T.rJ)(t,"chatSessions")},jt=async(e,t)=>{const n=kt(e);return(await(0,T.GG)((0,T.P)(n,(0,T._M)("id","==",t)))).docs};const Ct=(0,i.createContext)(void 0),St="You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.",At=({uid:e,selectedNotesText:t,noteTitles:n,clearSelectedNotes:o,entries:r})=>{const[a,s]=(0,i.useState)(""),[l,d]=(0,i.useState)([]),[c,p]=(0,i.useState)([]),{sessions:u,fetchSessions:g,createSession:x,updateSession:h,deleteSession:m}=function(e){const[t,n]=i.useState([]),o=i.useCallback(async()=>{if(!e)return;const t=(await(0,T.GG)(kt(e))).docs.map(e=>e.data());n((e=>[...e].sort((e,t)=>e.updatedAt>t.updatedAt?-1:e.updatedAt<t.updatedAt?1:0))(t))},[e]),r=i.useCallback(async t=>{if(!e)return null;const i={id:$()(),title:"New Chat",createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString(),model:t,selectedPromptIds:[],messages:[]};return n(e=>[i,...e]),await(0,T.gS)(kt(e),i),i},[e]),a=i.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const i=await jt(e,t.id);await Promise.all(i.map(n=>(0,T.BN)((0,T.H9)(E.OO,`users/${e}/chatSessions/${n.id}`),t)))},[e]),s=i.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const i=await jt(e,t);await Promise.all(i.map(t=>(0,T.kd)((0,T.H9)(E.OO,`users/${e}/chatSessions/${t.id}`))))},[e]);return{sessions:t,setSessions:n,fetchSessions:o,createSession:r,updateSession:a,deleteSession:s}}(e),[f,b]=(0,i.useState)(!1),[w,y]=(0,i.useState)(null),[v,k]=(0,i.useState)(!1),[j,C]=(0,i.useState)("gpt-6-luna"),[S,A]=(0,i.useState)(!0),N=(0,i.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),D=(0,i.useCallback)(async()=>{const e=await x(j);e&&(d([]),y(e.id),p([]))},[x,j]);(0,i.useEffect)(()=>{f&&(u.length>0||D())},[f,u,D]),(0,i.useEffect)(()=>{(async()=>{await g(),b(!0)})()},[g]);const M=(0,i.useCallback)(async e=>{if(!w)return;const t=u.find(e=>e.id===w);if(!t)return;const n=l.includes(e)?l.filter(t=>t!==e):[...l,e];d(n),await h({...t,selectedPromptIds:n,updatedAt:(new Date).toISOString()})},[w,l,u,h]),z=(0,i.useMemo)(()=>r.filter(e=>l.includes(e.id)).map(e=>{try{return JSON.parse(e.content).text||""}catch{return""}}).join("\n\n"),[r,l]),P=(0,i.useCallback)(e=>{const t=u.find(t=>t.id===e);t&&(d(t.selectedPromptIds||[]),y(e),p(t.messages),C(t.model))},[u]);(0,i.useEffect)(()=>{0!==u.length&&(w||P(u[0].id))},[u,w,P]);const O=(0,i.useMemo)(()=>r.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[r]),R=(0,i.useCallback)(async()=>{const i=a.trim();if(!i||v)return;if(!e)return void p(e=>[...e,{id:$()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const r=n.length>0?`Notes:\n${n.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",l=N(c),d={id:$()(),role:"user",content:`${r}${i}`};p(e=>{const t=[...e,d],n=u.find(e=>e.id===w);return n&&h({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?i.substring(0,30):n.title}),t}),s(""),k(!0);const g=[];S&&l&&g.push(`History:\n${l}`),t.trim()&&g.push(`Context:\n${t}`);const x=g.join("\n\n");try{var m,f;const t=[St,z].filter(Boolean),n=await ut(e,t.join("\n\n"),i,x,j),r={id:$()(),role:"assistant",content:n.output_text.trim()||"No response was returned.",tokens:{input:(null===(m=n.usage)||void 0===m?void 0:m.input_tokens)||0,output:(null===(f=n.usage)||void 0===f?void 0:f.output_tokens)||0}};p(e=>{const t=[...e,r],n=u.find(e=>e.id===w);return n&&h({...n,messages:t,updatedAt:(new Date).toISOString(),title:"New Chat"===n.title?i.substring(0,30):n.title}),t}),o()}catch(b){console.error("Mavis error:",b);const e=b instanceof Error?b.message:"An unexpected error occurred.";p(t=>[...t,{id:$()(),role:"assistant",content:e}])}finally{k(!1)}},[a,v,e,n,t,j,c,S,N,o,u,w,h,z]),L=(0,i.useCallback)(async()=>{if(v||0===c.length)return;if(!e)return void p(e=>[...e,{id:$()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const t=N(c);k(!0);try{var n,i;const o=await ut(e,`${St}\n\n${z}`,"Summarize the entire conversation history into one comprehensive, self-contained message.\n\nInclude all important information from the conversation, especially:\n\n- Every requirement and specification\n- Every decision that was made\n- Every implementation detail\n- Every instruction and constraint\n- Important facts, dates, names, titles, values, and references\n- Code-related decisions, expected behavior, and affected files or components\n- Problems, errors, solutions, and changes that were discussed\n- Rejected alternatives and the reasons they were rejected\n- Open questions, unresolved issues, assumptions, and pending tasks\n- The current state of the work\n- Clear next steps, if any\n\nPreserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.\n\nWrite the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.",`Conversation history:\n${t}`,j),r={id:$()(),role:"assistant",content:o.output_text.trim()||"No summary was returned.",tokens:{input:(null===(n=o.usage)||void 0===n?void 0:n.input_tokens)||0,output:(null===(i=o.usage)||void 0===i?void 0:i.output_tokens)||0}};p([r]);const a=u.find(e=>e.id===w);a&&await h({...a,messages:[r],updatedAt:(new Date).toISOString()})}catch(o){console.error("Mavis summary error:",o);const e=o instanceof Error?o.message:"An unexpected error occurred.";p(t=>[...t,{id:$()(),role:"assistant",content:e}])}finally{k(!1)}},[v,c,e,N,j,w,u,h,z]),I=(0,i.useCallback)(async e=>{if(!w)return;const t=u.find(e=>e.id===w);if(!t)return;const n="all"===e?[]:t.messages.filter(t=>t.id!==e);p(n),await h({...t,messages:n,updatedAt:(new Date).toISOString()})},[w,u,h]),K=(0,i.useCallback)(async()=>{if(!w)return;const e=u.find(e=>e.id===w);e&&(p([]),await h({...e,messages:[],updatedAt:(new Date).toISOString()}))},[w,u,h]),F=(0,i.useCallback)(async e=>{if(await m(e),w===e){const t=u.filter(t=>t.id!==e);t.length>0?P(t[0].id):await D()}},[m,w,u,P,D]);return{prompt:a,setPrompt:s,selectedPromptIds:l,togglePrompt:M,availablePromptNotes:O,messages:c,isLoading:v,sessions:u,currentSessionId:w,createNewSession:D,loadSession:P,deleteSession:m,removeSession:F,sendPrompt:R,deleteMessage:I,clearMessages:K,summarizeHistory:L,selectedModel:j,setSelectedModel:C,includeHistory:S,setIncludeHistory:A}};function $t({children:e,uid:t,selectedNotesText:n,noteTitles:i,clearSelectedNotes:o,entries:r}){const a=At({uid:t,selectedNotesText:n,noteTitles:i,clearSelectedNotes:o,entries:r});return(0,d.jsx)(Ct.Provider,{value:a,children:e})}function Tt(){const e=(0,i.useContext)(Ct);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}const Et=["gpt-5-mini","gpt-6-luna","gpt-5.6-terra","gpt-5.6-sol"],Nt=({uid:e,selectedNotesText:t,noteTitles:n,notesCount:o,clearSelectedNotes:s})=>{const[c,p]=i.useState(!1),{prompt:u,setPrompt:g,messages:x,isLoading:h,sendPrompt:m,deleteMessage:f,selectedModel:b,setSelectedModel:w,selectedPromptIds:y,availablePromptNotes:k,togglePrompt:j,includeHistory:C,setIncludeHistory:S,summarizeHistory:A}=Tt(),[$,T]=i.useState(!1),[E,N]=i.useState(!1),D=i.useRef(null),M=i.useRef(null),z=i.useCallback(()=>T(!1),[]),P=i.useCallback(()=>N(!1),[]);J(D,z),J(M,P);return(0,d.jsxs)(It,{children:[(0,d.jsxs)(Kt,{children:[x.map(e=>(0,d.jsxs)(Dt,{role:e.role,children:[(0,d.jsx)(zt,{role:e.role,children:e.tokens&&(0,d.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,d.jsx)(Ft,{role:e.role,children:(0,d.jsx)(re.oz,{remarkPlugins:[se.A],children:e.content})}),(0,d.jsxs)(Mt,{role:e.role,children:[(0,d.jsx)(a.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,d.jsx)(r.nxz,{})}),(0,d.jsx)(a.K,{title:"Delete message",onClick:()=>f(e.id),children:(0,d.jsx)(r.IXo,{})})]})]},e.id)),h&&(0,d.jsx)(Ft,{role:"assistant",children:"Thinking..."})]}),(0,d.jsx)(Ht,{expanded:c,children:(0,d.jsxs)(Jt,{children:[(0,d.jsxs)(Ot,{children:[(0,d.jsxs)(Yt,{ref:M,children:[(0,d.jsxs)(Wt,{title:"Prompt presets",onClick:()=>{T(!1),N(e=>!e)},children:[(0,d.jsx)(v.vTI,{}),(0,d.jsxs)(Gt,{children:["Prompts (",y.length,")"]})]}),E&&(0,d.jsx)(_t,{children:k.map(e=>(0,d.jsxs)(qt,{className:y.includes(e.id)?"selected":"",onClick:()=>{j(e.id)},children:[(0,d.jsx)(v.vTI,{}),(0,d.jsx)("span",{children:e.title})]},e.id))})]}),(0,d.jsxs)(Bt,{ref:D,children:[(0,d.jsxs)(Wt,{style:{margin:"0px !important"},title:"Selecionar modelo de IA",onClick:()=>{N(!1),T(e=>!e)},children:[(0,d.jsx)(r.Ojn,{}),(0,d.jsx)(Gt,{children:b})]}),$&&(0,d.jsx)(_t,{children:Et.map(e=>(0,d.jsxs)(qt,{className:b===e?"selected":"",onClick:()=>{w(e),T(!1)},title:e,children:[(0,d.jsx)(r.Ojn,{}),(0,d.jsx)("span",{children:e})]},e))})]}),(0,d.jsxs)(Rt,{children:["Notes: ",o]})]}),(0,d.jsxs)(Pt,{children:[(0,d.jsx)(Ut,{expanded:c,value:u,placeholder:"Ask Mavis...",disabled:h,onChange:e=>g(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),m())}}),(0,d.jsxs)(Lt,{children:[(0,d.jsx)(a.K,{title:"Summarize History",onClick:()=>{A()},children:(0,d.jsx)(l.Z1M,{})}),(0,d.jsx)(a.K,{title:"Include chat history in prompts",children:(0,d.jsx)(l.bfP,{color:C?"#2563eb":"#555",onClick:()=>S(!C)})}),(0,d.jsx)(a.K,{title:"Clear chat history",onClick:()=>{f("all")},children:(0,d.jsx)(v.U3h,{})}),(0,d.jsx)(a.K,{title:c?"Collapse":"Expand",onClick:()=>p(e=>!e),children:c?(0,d.jsx)(r.eDi,{}):(0,d.jsx)(r.mkN,{})}),(0,d.jsx)(a.K,{title:"Copy input",onClick:()=>{(async()=>{u.trim()&&await navigator.clipboard.writeText(u)})()},disabled:!u.trim(),children:(0,d.jsx)(r.nxz,{})}),(0,d.jsx)(a.K,{title:"Send prompt",onClick:()=>{m()},disabled:h||!u.trim(),children:(0,d.jsx)(r.kGk,{})}),(0,d.jsx)(a.K,{title:"Clear input",onClick:()=>{g("")},disabled:!u.trim(),children:(0,d.jsx)(r.yGN,{})}),(0,d.jsx)(a.K,{title:"Clear selected notes",onClick:s,disabled:0===o,children:(0,d.jsx)(l.DnH,{})})]})]})]})})]})},Dt=o.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
`,Mt=o.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,zt=o.Ay.div`
  font-size: 10px;
  color: #555;
  margin-bottom: 2px;
  align-self: ${({role:e})=>"user"===e?"flex-end":"flex-start"};
  white-space: nowrap;
`,Pt=o.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,Ot=o.Ay.span`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,Rt=o.Ay.span`
  font-size: 12px;
  color: #555;
`,Lt=o.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,It=o.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Kt=o.Ay.div`
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
`,Ft=o.Ay.div`
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
`,Ht=o.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;
  margin: 0;
  background: #e0e0e5;
  ${({expanded:e})=>e&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}
`,Jt=o.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #e0e0e5;
`,Ut=o.Ay.textarea`
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
`,Bt=o.Ay.div`
  padding: 0px;
  position: relative;
  width: auto;
`,Wt=o.Ay.div`
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
`,Gt=o.Ay.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_t=o.Ay.div`
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
`,qt=o.Ay.span`
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
`,Yt=o.Ay.div`
  position: relative;
`,Xt=({expanded:e,panelWidth:t,minimized:n,setMinimized:i,notesMinimized:o,menuExpanded:a,setMenuExpanded:s,mobileActive:l,notesLocked:c,onToggleNotesLock:p})=>{const u=e?208:52;return(0,d.jsxs)(Vt,{explorerWidth:u,notesMinimized:o,barWidth:t,minimized:n,mobileActive:l,children:[(0,d.jsxs)(Zt,{children:[(0,d.jsx)(r.Ojn,{}),"Chat"]}),(0,d.jsxs)(Qt,{children:[(0,d.jsx)(tn,{type:"button",title:c?"Unlock note editing":"Lock note editing","aria-label":c?"Unlock note editing":"Lock note editing","aria-pressed":c,onClick:p,children:c?(0,d.jsx)(r.F5$,{}):(0,d.jsx)(r.K4k,{})}),(0,d.jsx)(nn,{type:"button",title:a?"Collapse sessions menu":"Expand sessions menu","aria-label":a?"Collapse sessions menu":"Expand sessions menu","data-sidebar-toggle":"sessions",onClick:()=>s(!a),children:(0,d.jsx)(r.ND1,{})}),(0,d.jsx)(en,{title:n?"Restore chat panel":"Minimize chat panel",onClick:()=>i(!n),children:n?(0,d.jsx)(r.mkN,{}):(0,d.jsx)(r.prK,{})})]})]})},Vt=o.Ay.div`
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
`,Zt=o.Ay.div`
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
`,Qt=o.Ay.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 35px;
`,en=(0,o.Ay)(a.K)`
  @media (max-width: 768px) {
    display: none !important;
  }
`,tn=o.Ay.button`
  display: flex;
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
  cursor: pointer;

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 768px) {
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`,nn=o.Ay.button`
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
`,on=({minimized:e,setMinimized:t,menuExpanded:n,setMenuExpanded:o})=>{const{sessions:s,currentSessionId:l,createNewSession:c,loadSession:p,deleteSession:u,removeSession:g}=Tt(),x=i.useRef(null),h=()=>{window.innerWidth<=768&&o(!1)};return i.useEffect(()=>{const e=e=>{var t;if(window.innerWidth>768||!n)return;const i=e.target;i instanceof Node&&(null===(t=x.current)||void 0===t||!t.contains(i))&&(i instanceof Element&&i.closest('[data-sidebar-toggle="sessions"]')||o(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n,o]),(0,d.jsxs)(rn,{ref:x,expanded:n,children:[(0,d.jsxs)(a.K,{expanded:n,title:"Menu",onClick:()=>o(!n),children:[(0,d.jsx)(r.ND1,{}),n&&(0,d.jsx)("span",{children:"Sessions"})]}),e&&(0,d.jsxs)(a.K,{expanded:n,title:"Expand Chat",onClick:()=>{t(!e),h()},children:[(0,d.jsx)(r.Ojn,{}),n&&(0,d.jsx)("span",{children:"Expand Chat"})]}),(0,d.jsxs)(a.K,{expanded:n,onClick:()=>{c(),h()},children:[(0,d.jsx)(r.GGD,{}),n&&(0,d.jsx)("span",{children:"New Chat"})]}),(0,d.jsx)(an,{disabled:!n,children:s.map(e=>(0,d.jsxs)(ln,{children:[(0,d.jsx)(sn,{active:l===e.id,onClick:()=>{p(e.id),h()},children:e.title}),(0,d.jsx)(dn,{onClick:t=>{t.stopPropagation(),u(e.id),h()},children:(0,d.jsx)(r.IXo,{size:12})})]},e.id))})]})},rn=o.Ay.div`
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
`,an=o.Ay.div`
  display: ${e=>e.disabled?"none":"flex"};
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,sn=o.Ay.div`
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
`,ln=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,dn=o.Ay.button`
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
`,cn=({explorerExpanded:e,setExplorerExpanded:t})=>{var n;const{selectedDate:o,setSelectedDate:a}=(0,F.M)(),{user:s}=(0,z.o)(),l=null!==(n=null===s||void 0===s?void 0:s.uid)&&void 0!==n?n:"",{entries:p,fetchEntries:u,addEntry:g,updateEntry:x,deleteEntry:h,updateEntryDate:m,renameTag:f,deleteTag:b,addTagToEntries:w,removeTagFromEntries:j}=function(e){const[t,n]=i.useState([]),o=i.useCallback(async()=>{if(!e)return;const t=D(e),i=(await(0,T.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}});n(N(i))},[e]),r=i.useCallback(async({content:t,date:i})=>{if(!e)return null;const o={uid:e,id:$()(),content:t,date:i,createdAt:(new Date).toISOString()};return n(e=>N([...e,o])),await(0,T.gS)(D(e),o),o},[e]),a=i.useCallback(async(i,o)=>{if(!e)return;const r=t.find(e=>e.id===i);if(!r)return;const a={...r,content:o};n(e=>N(e.map(e=>e.id===i?a:e)));const s=await M(e,i);await Promise.all(s.map(t=>(0,T.BN)((0,T.H9)(E.OO,`users/${e}/entries/${t.id}`),a)))},[t,e]),s=i.useCallback(async t=>{if(!e)return;n(e=>N(e.map(e=>e.id===t.id?t:e)));const i=await M(e,t.id);await Promise.all(i.map(n=>(0,T.BN)((0,T.H9)(E.OO,`users/${e}/entries/${n.id}`),t)))},[e]),l=i.useCallback(async(e,n)=>{const i=t.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}});await Promise.all(i.map(async t=>{const i=JSON.parse(t.content);await s({...t,content:JSON.stringify({...i,tags:(i.tags||[]).map(t=>t===e?n:t)})})}))},[t,s]),d=i.useCallback(async e=>{const n=t.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}});await Promise.all(n.map(async t=>{const n=JSON.parse(t.content);await s({...t,content:JSON.stringify({...n,tags:(n.tags||[]).filter(t=>t!==e)})})}))},[t,s]),c=i.useCallback(async(e,n)=>{const i=t.filter(t=>e.includes(t.id));await Promise.all(i.map(async e=>{const t=JSON.parse(e.content);await s({...e,content:JSON.stringify({...t,tags:Array.from(new Set([...t.tags||[],n]))})})}))},[t,s]),p=i.useCallback(async(e,n)=>{const i=t.filter(t=>e.includes(t.id));await Promise.all(i.map(async e=>{const t=JSON.parse(e.content);await s({...e,content:JSON.stringify({...t,tags:(t.tags||[]).filter(e=>e!==n)})})}))},[t,s]),u=i.useCallback(async(n,i)=>{if(!e)return;const o=t.find(e=>e.id===n);o&&await s({...o,date:i})},[t,s,e]),g=i.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const i=await M(e,t);await Promise.all(i.map(t=>(0,T.kd)((0,T.H9)(E.OO,`users/${e}/entries/${t.id}`))))},[e]);return{entries:t,setEntries:n,fetchEntries:o,addEntry:r,updateEntry:a,replaceEntry:s,deleteEntry:g,updateEntryDate:u,renameTag:l,deleteTag:d,addTagToEntries:c,removeTagFromEntries:p}}((null===s||void 0===s?void 0:s.uid)||""),{searchContent:C,setSearchContent:A,selectedTag:P,setSelectedTag:L,systemTags:I,availableTags:H,pickerTags:J,visibleEntries:B}=function(e){const[t,n]=i.useState(""),[o,a]=i.useState("favorite"),s=i.useMemo(()=>[{name:"all",icon:r.Vap,system:!0,position:"top"},{name:"favorite",icon:r.usP,system:!0,position:"top"},{name:"journal",icon:k.Fsq,system:!0,position:"top"},{name:"templates",icon:r.MRc,system:!0,position:"top"},{name:"prompts",icon:v.vTI,system:!0,position:"top"},{name:"other",icon:y.uoj,system:!0,position:"top"},{name:"archive",icon:r.OZ2,system:!0,position:"bottom"},{name:"trash",icon:r.IXo,system:!0,position:"bottom"}],[]),l=i.useMemo(()=>s.map(e=>e.name),[s]),d=i.useMemo(()=>Array.from(new Set(e.flatMap(e=>S(e.content)))).filter(e=>!l.includes(e)).sort(),[e,l]),c=i.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...d])).sort(),[d]),p=i.useCallback(e=>{const n=S(e.content),i=n.includes("trash"),r=n.includes("archive"),a=n.includes("templates"),s=n.includes("prompts");return""!==t.trim()?e.content.toLowerCase().includes(t.toLowerCase()):"all"===o?!i&&!r:"favorite"===o?n.includes("favorite")&&!i&&!r:"journal"===o?n.includes("journal")&&!a&&!i&&!r:"templates"===o?a&&!i&&!r:"prompts"===o?s&&!i&&!r:"other"===o?!i&&!r&&!a&&!s&&!n.includes("journal"):"archive"===o?r&&!i:"trash"===o?i:n.includes(o)&&!i&&!r&&!a&&!s},[t,o]),u=i.useMemo(()=>e.filter(p),[e,p]);return{searchContent:t,setSearchContent:n,selectedTag:o,setSelectedTag:a,systemTags:s,availableTags:d,pickerTags:c,visibleEntries:u,isEntryVisible:p}}(p),W=i.useMemo(()=>(e=>{if(!e)return[];try{const t=localStorage.getItem(`mavis-ai-web:unpinned-tags:${e}`);if(null===t)return[];const n=JSON.parse(t);return Array.isArray(n)&&n.every(e=>"string"===typeof e)?Array.from(new Set(n)):(console.error("Stored tag pin preferences must be an array of strings."),[])}catch(t){return console.error("Failed to load tag pin preferences.",t),[]}})(l),[l]),[G,_]=i.useState(()=>({userId:l,tags:W,loaded:!1})),q=G.userId===l?G.tags:W,Y=G.userId===l&&G.loaded;i.useEffect(()=>{let e=!0;return(async()=>{if(l)try{const t=await async function(e){const t=await(0,T.x7)((0,T.H9)(E.OO,"users",e,"settings","tagPins"));if(!t.exists())return null;const n=t.data().unpinnedTags;if(!Array.isArray(n)||!n.every(e=>"string"===typeof e))throw new Error("Stored unpinned tag preferences must be an array of strings.");return Array.from(new Set(n))}(l),n=null!==t&&void 0!==t?t:W;null===t&&n.length>0&&await K(l,n),e&&_({userId:l,tags:n,loaded:!0})}catch(t){console.error("Failed to load tag pin preferences from Firebase.",t),e&&_({userId:l,tags:W,loaded:!0})}else _({userId:l,tags:[],loaded:!0})})(),()=>{e=!1}},[l,W]);const X=async e=>{const t=Array.from(new Set(e));if(!l)throw new Error("Cannot save tag pin preferences without an authenticated user.");await K(l,t),_({userId:l,tags:t,loaded:!0})},{cardRefs:V,cardHeights:Z,totalHeight:Q}=function(e=[]){const t=i.useRef({}),[n,o]=i.useState({}),r=i.useCallback(()=>{const e={};Object.entries(t.current).forEach(([t,n])=>{n&&(e[t]=n.offsetHeight)}),o(e)},[]);i.useEffect(()=>{const e=new ResizeObserver(()=>{r()});return Object.values(t.current).forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[r]),i.useEffect(()=>{r()},[...e,r]);const a=i.useMemo(()=>Object.values(n).reduce((e,t)=>e+t,0),[n]);return{cardRefs:t,cardHeights:n,totalHeight:a,refreshCardHeights:r}}([p]),[ee,te]=i.useState(null),[ne,ie]=i.useState([]),oe=i.useRef(null),[re,ae]=i.useState(0),se=i.useRef(null),[le,de]=i.useState(0),[ce,pe]=i.useState(!1),[ue,ge]=i.useState(!1),[xe,he]=i.useState(!1),[me,fe]=i.useState("notes"),[be,we]=i.useState(!0),ye=()=>{if(!be){const e=document.activeElement;e instanceof HTMLElement&&(e.isContentEditable||e instanceof HTMLTextAreaElement)&&e.blur()}we(e=>!e)},ve=i.useCallback(e=>{const{clientWidth:t,scrollLeft:n}=e.currentTarget;if(0===t)return;const i=n>=t/2?"chat":"notes";fe(e=>e===i?e:i)},[]),ke=i.useMemo(()=>p.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[p]),je=i.useMemo(()=>p.filter(e=>S(e.content).includes("trash")).map(e=>e.id),[p]),Ce=i.useMemo(()=>ne.filter(e=>je.includes(e)),[ne,je]);i.useLayoutEffect(()=>{const e=()=>{var e,t;de(null!==(e=null===(t=se.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return se.current&&t.observe(se.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]),i.useLayoutEffect(()=>{const e=()=>{var e,t;ae(null!==(e=null===(t=oe.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return oe.current&&t.observe(oe.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]);const Se=i.useCallback(e=>{ie(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),Ae=i.useCallback(()=>{ie(B.map(e=>e.id))},[B]),$e=i.useCallback(()=>{ie([])},[]);i.useEffect(()=>{ie(e=>e.filter(e=>p.some(t=>t.id===e)))},[p]);const Te=i.useMemo(()=>p.filter(e=>ne.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[p,ne]),Ee=i.useMemo(()=>p.filter(e=>ne.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[p,ne]);i.useEffect(()=>{u()},[u]);const Ne=()=>{window.scrollTo({top:0,behavior:"smooth"})},De=async(e,t=!1)=>{if(!be){if(!t){const t=p.find(t=>t.id===e);if(!t)return;const n=JSON.parse(t.content),i=Array.from(new Set([...(n.tags||[]).filter(e=>"archive"!==e),"trash"]));return void await x(e,JSON.stringify({...n,tags:i}))}await h(e)}},Me=(i.useMemo(()=>p.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[p]),x);return(0,d.jsx)(pn,{children:(0,d.jsxs)($t,{uid:s?s.uid:"",selectedNotesText:Te,noteTitles:Ee,clearSelectedNotes:$e,entries:p,children:[(0,d.jsxs)(O,{children:[(0,d.jsx)(c,{selectedTag:P,selectedDate:o,searchContent:C,onSearchChange:A,onDateChange:e=>{a(e.target.value)},onAddNote:async function(){if(be)return;const e="all"!==P?[P]:[];await g({date:o,content:JSON.stringify({...R,tags:e})}),Ne()},onCopyAllNotes:async()=>{const e=Te.length>0?Te:B.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:Ae,onClearAll:$e,selectedCount:ne.length,expanded:e,setExplorerExpanded:t,panelWidth:re,minimized:ce,setMinimized:pe,mobileActive:"notes"===me,notesLocked:be,onToggleNotesLock:ye}),(0,d.jsx)(Xt,{onClearAll:$e,expanded:e,panelWidth:le,minimized:ue,setMinimized:ge,notesMinimized:ce,menuExpanded:xe,setMenuExpanded:he,mobileActive:"chat"===me,notesLocked:be,onToggleNotesLock:ye})]}),(0,d.jsxs)(un,{onScroll:ve,children:[(0,d.jsxs)(gn,{role:"region","aria-label":"Notes",children:[(0,d.jsx)(U,{systemTags:I,customTags:H,unpinnedTags:q,onToggleTagPin:async e=>{!be&&Y&&await X(q.includes(e)?q.filter(t=>t!==e):[...q,e])},selectedTag:P,setSelectedTag:L,explorerExpanded:e,setExplorerExpanded:t,minimized:ce,setMinimized:pe,selectedNoteIds:ne,onRenameTag:async(e,t)=>{if(!be){if(await f(e,t),q.includes(e)){const n=q.filter(t=>t!==e);n.includes(t)||n.push(t),await X(n)}P===e&&L(t)}},onDeleteTag:async e=>{be||(await b(e),q.includes(e)&&await X(q.filter(t=>t!==e)),P===e&&L("all"))},onAddTagToSelected:async e=>{be||await w(ne,e)},onRemoveTagFromSelected:async e=>{be||await j(ne,e)},trashCount:je.length,selectedTrashCount:Ce.length,onDeleteSelectedNotes:async()=>{if(be||!ne.length)return;const e=new Set(Ce),t=ne.filter(t=>!e.has(t));if(Ce.length){const e=`${Ce.length} selected ${1===Ce.length?"note":"notes"}`,n=`${t.length} selected ${1===t.length?"note":"notes"}`,i=t.length?`Move ${n} to Trash and permanently delete ${e} from Trash?`:`Permanently delete ${e} from Trash?`;if(!window.confirm(i))return}await Promise.all([...Ce.map(e=>h(e)),...t.map(e=>De(e))])},onRestoreSelectedTrash:async()=>{be||await j(Ce,"trash")},onRestoreAllTrash:async()=>{be||await j(je,"trash")},onEmptyTrash:async()=>{if(be||!je.length)return;window.confirm(`Permanently delete all ${je.length} note${1===je.length?"":"s"} from Trash? This cannot be undone.`)&&await Promise.all(je.map(e=>h(e)))},actionsLocked:be,tagPreferencesLoading:!Y}),!ce&&(0,d.jsx)(wt,{entries:B,hoveredCardId:ee,cardHeights:Z,totalHeight:Q,onScrollToCard:(e,t)=>{const n=V.current[e],i=oe.current;if(!n||!i)return;const o=n.offsetTop,r="top"===t?o-100:o-i.clientHeight+n.offsetHeight+50;i.scrollTo({top:Math.max(0,r),behavior:"smooth"})}}),(0,d.jsx)(mn,{ref:oe,minimized:ce,children:!ce&&(0,d.jsx)(mt,{entries:B,pickerTags:J,cardRefs:V,updateEntryDate:async(e,t)=>{be||await m(e,t)},onHoverCard:te,onDeleteEntry:De,onChangeEntry:Me,selectedNoteIds:ne,onToggleSelection:Se,templateOptions:ke,notesLocked:be})})]}),(0,d.jsxs)(xn,{role:"region","aria-label":"AI sessions",children:[(0,d.jsx)(hn,{ref:se,minimized:ue,children:(0,d.jsx)(Nt,{uid:(null===s||void 0===s?void 0:s.uid)||"",selectedNotesText:Te,noteTitles:Ee,notesCount:ne.length,clearSelectedNotes:$e})}),(0,d.jsx)(on,{minimized:ue,setMinimized:ge,menuExpanded:xe,setMenuExpanded:he})]})]})]})})},pn=o.Ay.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
`,un=o.Ay.div`
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
`,gn=o.Ay.div`
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
`,xn=o.Ay.div`
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
`,hn=o.Ay.div`
  flex: ${({minimized:e})=>e?"0":"1"};
  width: ${({minimized:e})=>e?"0":"auto"};
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;

  @media (max-width: 768px) {
    flex: ${({minimized:e})=>e?"0":"1 1 0"};
  }
`,mn=o.Ay.div`
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
//# sourceMappingURL=dashboard.e6963ed0.chunk.js.map