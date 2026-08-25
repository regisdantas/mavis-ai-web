"use strict";(globalThis.webpackChunkmavis_ai_web||=[]).push([[945],{8326(e,t,n){n.r(t),n.d(t,{default:()=>Xt});var i=n(5043),r=n(4138),o=n(1009),a=n(7246),s=n(4960),l=n(7149),d=n(579);const c=e=>{let{selectedTag:t,selectedDate:n,searchContent:i,onSearchChange:r,onDateChange:c,onAddNote:m,onCopyAllNotes:f,selectedCount:b,onSelectAll:w,onClearAll:y,expanded:v,panelWidth:k,minimized:j,setMinimized:C}=e;const S=v?188:52;return(0,d.jsxs)(p,{explorerWidth:S,barWidth:k,minimized:j,children:[(0,d.jsx)(g,{children:j?"Explorer":""===i.trim()?t.charAt(0).toUpperCase()+t.slice(1):"Search"}),!j&&(0,d.jsxs)(d.Fragment,{children:["journal"===t&&(0,d.jsx)(u,{children:(0,d.jsx)("input",{title:"Select date",type:"date",value:n,onChange:c})}),(0,d.jsxs)(x,{children:[(0,d.jsx)("input",{placeholder:"Search",value:i,onChange:e=>r(e.target.value)}),(0,d.jsx)(a.K,{title:"Clear search",onClick:()=>r(""),children:(0,d.jsx)(l.rOP,{})})]})]}),(0,d.jsxs)(h,{children:[!j&&(0,d.jsxs)(d.Fragment,{children:[b>0?(0,d.jsx)(a.K,{title:"Clear all notes",onClick:y,children:(0,d.jsx)(o.TG1,{})}):(0,d.jsx)(a.K,{title:"Select all visible notes",onClick:w,children:(0,d.jsx)(o.NLe,{})}),(0,d.jsx)(a.K,{title:"Copy all visible notes",onClick:f,children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Add note",onClick:m,children:(0,d.jsx)(s.n4h,{})})]}),(0,d.jsx)(a.K,{title:j?"Restore notes panel":"Minimize notes panel",onClick:()=>C(!0),children:j?(0,d.jsx)(o.mkN,{}):(0,d.jsx)(o.prK,{})})]})]})},p=r.Ay.div`
  display: ${e=>{let{minimized:t}=e;return t?"none":"flex"}};
  height: 32px;
  min-width: 100px;
  width: ${e=>{let{barWidth:t}=e;return`${t+60}px`}};
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin-left: ${e=>{let{explorerWidth:t}=e;return`${t}px`}};
  margin-top: 10px;
  border-bottom: 1px solid #d0d0d0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;
  position: relative;
`,u=r.Ay.div`
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
`,g=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`,x=r.Ay.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  width: 250px;
  height: 30px;
  background: #231f20;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  input {
    width: 100%;
    padding: 10px;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
  }

  @media (max-width: 1260px) {
    position: static;
    width: 160px;
    margin: 0 5px;
  }
`,h=r.Ay.div`
  display: flex;
  align-items: center;
  height: 35px;
`;var m=n(2815),f=n(4966),b=n(2127);const w=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},y=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},v=e=>{if(!w(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))};var k=n(8222),j=n.n(k),C=n(2471),S=n(1286);const A=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),T=e=>{const t=(0,C.H9)(S.OO,"users",e);return(0,C.rJ)(t,"entries")},D=async(e,t)=>{const n=T(e);return(await(0,C.GG)((0,C.P)(n,(0,C._M)("id","==",t)))).docs};var N=n(6625),E=n(7950);const M=e=>{let{children:t}=e;const n=document.getElementById("header-portal");return n?(0,E.createPortal)(t,n):null},$={title:"",type:"record",tags:[],text:"",color:"#fff",locked:!1,pinned:!1,collapsed:!1},z=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],P=e=>e.replace(/\b\w/g,e=>e.toUpperCase());var O=n(5561),R=n(5263);const L=e=>{let{systemTags:t,customTags:n,selectedTag:r,setSelectedTag:s,explorerExpanded:l,setExplorerExpanded:c,minimized:p,setMinimized:u,selectedNoteIds:g,onRenameTag:x,onDeleteTag:h,onAddTagToSelected:m,onRemoveTagFromSelected:f}=e;const b=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),[w,y]=i.useState(null),[v,k]=i.useState(null),[j,C]=i.useState(""),S=i.useRef(null);return(0,d.jsxs)(K,{expanded:l,children:[(0,d.jsxs)(a.K,{expanded:l,title:"Menu",onClick:()=>c(!l),children:[(0,d.jsx)(o.ND1,{}),l&&(0,d.jsx)("span",{children:"Menu"})]}),p&&(0,d.jsxs)(a.K,{expanded:l,title:"Expand Notes Explorer",onClick:()=>u(!p),children:[(0,d.jsx)(R.$ZN,{}),l&&(0,d.jsx)("span",{children:"Expand Notes Explorer"})]}),t.filter(e=>"top"===e.position).map(e=>{const t=e.icon;return(0,d.jsxs)(a.K,{expanded:l,selected:r===e.name,title:e.name,onClick:()=>s(e.name),children:[(0,d.jsx)(t,{}),l&&(0,d.jsx)("span",{children:b(e.name)})]},e.name)}),n.map(e=>(0,d.jsxs)(I,{active:w===e,children:[(0,d.jsxs)(a.K,{expanded:l,selected:r===e,title:b(e),onClick:()=>s(e),children:[(0,d.jsx)(o.cnX,{}),v===e?(0,d.jsx)(B,{autoFocus:!0,value:j,onClick:e=>e.stopPropagation(),onChange:e=>C(e.target.value),onKeyDown:async t=>{"Enter"===t.key&&(await x(e,j.trim()),k(null),y(null)),"Escape"===t.key&&k(null)}}):l&&(0,d.jsx)("span",{children:b(e)})]}),l&&(0,d.jsxs)(F,{ref:S,children:[(0,d.jsx)(H,{onClick:t=>{t.stopPropagation(),y(w===e?null:e)},children:(0,d.jsx)(o.ZZB,{})}),w===e&&(0,d.jsxs)(J,{children:[(0,d.jsx)(U,{onClick:()=>{k(e),C(e)},children:"Rename"}),(0,d.jsx)(U,{onClick:()=>h(e),children:"Delete"}),(0,d.jsx)(U,{disabled:!g.length,onClick:()=>m(e),children:"Add Selected"}),(0,d.jsx)(U,{disabled:!g.length,onClick:()=>f(e),children:"Remove Selected"})]})]})]},e)),t.filter(e=>"bottom"===e.position).map(e=>{const t=e.icon;return(0,d.jsxs)(a.K,{expanded:l,selected:r===e.name,title:e.name,onClick:()=>s(e.name),children:[(0,d.jsx)(t,{}),l&&(0,d.jsx)("span",{children:b(e.name)})]},e.name)})]})},K=r.Ay.div`
  width: ${e=>e.expanded?"180px":"44px"};

  border-left: 1px solid #d0d0d0;
  background: #f5f5f5;
  overflow-y: hidden;
  overflow-x: hidden;
  padding: 4px;
  margin-right: 20px;
  transform: scaleX(-1);

  > * {
    transform: scaleX(-1);
  }
`,I=r.Ay.div`
  position: relative;
  display: flex;
  align-items: center;

  z-index: ${e=>{let{active:t}=e;return t?9999:1}};
`,F=r.Ay.div`
  position: relative;
`,H=r.Ay.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
`,J=r.Ay.div`
  position: absolute;
  top: 100%;
  right: 0;

  min-width: 160px;

  background: white;
  border-radius: 8px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  z-index: 999;
`,U=r.Ay.div`
  padding: 10px;
  cursor: ${e=>{let{disabled:t}=e;return t?"not-allowed":"pointer"}};

  opacity: ${e=>{let{disabled:t}=e;return t?.5:1}};

  &:hover {
    background: ${e=>{let{disabled:t}=e;return t?"transparent":"#f1f1f1"}};
  }
`,B=r.Ay.input`
  width: 100px;
  margin-left: 8px;
`;var G=n(5369);const W=e=>{let{title:t,locked:n,collapsed:i,speaking:r,isFavorite:l,selected:c,onToggleSelection:p,speak:u,stopSpeaking:g,copyFormattedContent:x,onToggleFavorite:h,onToggleLock:m,onToggleCollapse:f,onTitleChange:b}=e;return(0,d.jsxs)(q,{children:[(0,d.jsxs)(Y,{children:[(0,d.jsx)(_,{title:c?"Unselect note":"Select note",onClick:p,children:c?"\u2713":""}),l?(0,d.jsx)(a.K,{disabled:n,title:"Remove favorite",onClick:h,children:(0,d.jsx)(G.gt3,{})}):(0,d.jsx)(a.K,{disabled:n,title:"Add favorite",onClick:h,children:(0,d.jsx)(o.usP,{})}),(0,d.jsx)(V,{title:"Note name",role:"textbox",contentEditable:!n,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>b(e.currentTarget.innerText),children:t})]}),(0,d.jsxs)(X,{children:[r?(0,d.jsx)(a.K,{title:"Stop hearing note",onClick:g,children:(0,d.jsx)(o.cKW,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Hear note",onClick:u,children:(0,d.jsx)(o.o77,{})}),(0,d.jsx)(a.K,{title:"Copy note",onClick:x,children:(0,d.jsx)(o.nxz,{})}),n?(0,d.jsx)(a.K,{title:"Unlock note",onClick:m,children:(0,d.jsx)(o.F5$,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Lock note",onClick:m,children:(0,d.jsx)(o.K4k,{})}),i?(0,d.jsx)(a.K,{title:"Expand note",onClick:f,children:(0,d.jsx)(s.BSQ,{})}):(0,d.jsx)(a.K,{title:"Collapse note",onClick:f,children:(0,d.jsx)(s.q2p,{})})]})]})},_=r.Ay.span`
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
`,q=r.Ay.header`
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  border-bottom: 1px solid #757575;

  svg {
    cursor: pointer;
    height: 18px;
  }

  @media (max-width: 1260px) {
    height: auto;
    min-height: 44px;
  }
`,Y=r.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  margin: 0;
  padding: 0;

  color: black;
`,V=r.Ay.span`
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
`,X=r.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`;var Z=n(7996),Q=n(4993),ee=n(3859),te=n(6801),ne=n(7353),ie=n(285),re=n(578),oe=n(8550),ae=n(3596),se=n(5312),le=n.n(se);const de=e=>{let{label:t,expression:n,onExecute:i}=e;return(0,d.jsx)("button",{className:"markdownButton",onClick:()=>i(n),children:t})},ce=e=>{let{value:t,locked:n,editing:i,textareaRef:r,markdownRef:o,setValue:a,setEditing:s,onSave:l,onMarkdownClick:c,processMarkdown:p,onExecuteExpression:u}=e;return i?(0,d.jsx)(ue,{ref:r,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:t||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,a(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)&&(l(),s(!1))}}):(0,d.jsx)(pe,{ref:o,onClick:e=>{if(n)return;const t=e.target;c(t.innerText||t.textContent||"")},children:(0,d.jsx)(Z.oz,{rehypePlugins:[Q.A],components:{button(e){var t,n,i;const r=decodeURIComponent(String(null!==(t=null===(n=e.node)||void 0===n||null===(i=n.properties)||void 0===i?void 0:i.dataExpression)&&void 0!==t?t:""));return(0,d.jsx)(de,{label:String(e.children),expression:r,onExecute:u})}},remarkPlugins:[[ne.A,{padSpaceAfter:!1,emoticon:!0}],[oe.A,{tight:!0,ordered:!0}],[ee.A,{stringLength:le()}],ie.A,re.A,ae.A,te.A],children:p(t||"* \u2753 What do you have for today?")})})},pe=r.Ay.div`
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
`,ue=r.Ay.textarea`
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
`;var ge=n(5922);const xe=e=>{let{colors:t,onColorClicked:n,dropdownRef:i}=e;return(0,E.createPortal)((0,d.jsx)(he,{ref:i,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:t.map(e=>(0,d.jsxs)(me,{onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)},children:[(0,d.jsx)(fe,{color:e}),(0,d.jsx)(be,{children:e})]},e))}),document.body)},he=r.Ay.div`
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
`,me=r.Ay.button`
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
`,fe=r.Ay.div`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  background: ${e=>{let{color:t}=e;return t}};

  border: 1px solid rgba(0, 0, 0, 0.15);

  flex-shrink: 0;
`,be=r.Ay.span`
  font-size: 12px;
  font-weight: 600;

  color: #444;
`,we=e=>{let{options:t,onPicked:n,dropdownRef:i}=e;return(0,E.createPortal)((0,d.jsx)(ye,{ref:i,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:t.map((e,t)=>(0,d.jsx)(ve,{onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)},children:(0,d.jsx)(ke,{children:(0,d.jsx)(je,{children:e.title})})},t))}),document.body)},ye=r.Ay.div`
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
`,ve=r.Ay.button`
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
`,ke=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  min-width: 0;
`,je=r.Ay.span`
  color: #444;

  font-size: 12px;
  font-weight: 600;

  line-height: 1.3;
`,Ce=e=>{let{isLocked:t,listening:n,aiLoading:i,isArchived:r,isTrash:s,showColorPicker:c,showTemplatePicker:p,colorPickerRef:u,templatePickerRef:g,colorDropdownRef:x,templateDropdownRef:h,noteColors:m,templateOptions:f,startListening:b,stopListening:w,undoLastChange:y,handleAI:v,archiveNote:k,trashNote:j,setShowColorPicker:C,setShowTemplatePicker:S,onColorSelected:A,onTemplateSelected:T}=e;return(0,d.jsxs)(Se,{children:[(0,d.jsxs)(Ae,{children:[(0,d.jsx)(a.K,{disabled:t,title:"Change note background color",onClick:()=>C(e=>!e),children:(0,d.jsx)(l.$di,{})}),(0,d.jsx)(a.K,{disabled:t,title:"Load template",onClick:()=>S(e=>!e),children:(0,d.jsx)(o.MRc,{})}),(0,d.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"AI assistant",onMouseDown:e=>e.preventDefault(),onClick:v,children:(0,d.jsx)(o.Ojn,{color:i?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"Revert last change",onMouseDown:e=>e.preventDefault(),onClick:y,children:(0,d.jsx)(o.cO3,{})}),n?(0,d.jsx)(a.K,{disabled:t,title:"Stop listening",onClick:w,children:(0,d.jsx)(o.kGk,{color:"#2563eb"})}):(0,d.jsx)(a.K,{disabled:t,title:"Listen note",onClick:b,children:(0,d.jsx)(o.Rrl,{})}),(0,d.jsx)(ge.iJU,{}),(0,d.jsx)(a.K,{disabled:t,title:r?"Unarchive note":"Archive note",onClick:k,children:(0,d.jsx)(o.OZ2,{color:r?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:t,title:s?"Delete permanently":"Move to trash",onClick:j,children:(0,d.jsx)(o.IXo,{color:s?"#dc2626":void 0})})]}),c&&(0,d.jsx)(Te,{ref:u,children:(0,d.jsx)(xe,{colors:m,onColorClicked:A,dropdownRef:x})}),p&&(0,d.jsx)(De,{ref:g,children:(0,d.jsx)(we,{options:f,onPicked:T,dropdownRef:h})})]})},Se=r.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 0 0;
`,Ae=r.Ay.span`
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
`,Te=r.Ay.div`
  position: relative;
  width: 100%;
`,De=r.Ay.div`
  position: relative;
  width: 100%;
`,Ne=e=>{let{date:t,tags:n,availableTags:r,isLocked:a,tagPickerRef:l,tagDropdownRef:c,showTagPicker:p,creatingTag:u,newTagName:g,setShowTagPicker:x,setCreatingTag:h,setNewTagName:m,onDateChange:f,hasTag:b,toggleTag:w,createTag:y,formatTag:v,formatDate:k}=e;const j=i.useRef(null);return(0,d.jsxs)(Ee,{children:[(0,d.jsxs)($e,{children:[(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Me,{onClick:()=>{var e,t,n;null===(e=j.current)||void 0===e||null===(t=e.showPicker)||void 0===t||t.call(e),null===(n=j.current)||void 0===n||n.click()},children:k(t)}),(0,d.jsx)("input",{ref:j,type:"date",value:t,style:{display:"none"},onChange:e=>f(e.target.value)})]}),n.map(e=>(0,d.jsx)(ze,{onClick:()=>!a&&w(e),children:v(e)},e))]}),(0,d.jsxs)(Pe,{ref:l,children:[!a&&(0,d.jsx)(Oe,{onClick:()=>x(!p),children:(0,d.jsx)(s.n4h,{})}),p&&(0,E.createPortal)((0,d.jsxs)(Re,{ref:c,children:[r.map(e=>(0,d.jsxs)(Le,{className:b(e)?"selected":"",onClick:()=>w(e),children:[(0,d.jsx)(o.cnX,{}),(0,d.jsx)("span",{children:v(e)})]},e)),u?(0,d.jsx)(Ie,{autoFocus:!0,placeholder:"Tag name...",value:g,onChange:e=>m(e.target.value),onKeyDown:e=>{"Enter"===e.key&&y(g),"Escape"===e.key&&(h(!1),m(""))},onBlur:()=>{g.trim()?y(g):h(!1)}}):(0,d.jsxs)(Ke,{onClick:()=>h(!0),children:[(0,d.jsx)(o.cnX,{}),"New Tag"]})]}),document.body)]})]})},Ee=r.Ay.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row !important;
  justify-content: flex-start !important;
  gap: 8px;
`,Me=r.Ay.span`
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
`,$e=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  gap: 6px;
  width: fit-content;
  margin-left: 10px;
`,ze=r.Ay.span`
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

  &:hover {
    background: rgba(79, 70, 229, 0.2);
  }
`,Pe=r.Ay.div`
  position: relative;
  flex: 0 0;
  width: fit-content;
  margin: 0;
`,Oe=r.Ay.span`
  display: flex;
  align-items: center;
  padding: 2px 10px;

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
`,Re=r.Ay.div`
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
`,Le=r.Ay.span`
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
`,Ke=r.Ay.span`
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
`,Ie=r.Ay.input`
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
`;function Fe(){const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(""),o=(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return void console.warn("SpeechRecognition API not supported");const n=new e;n.lang="pt-BR",n.continuous=!0,n.interimResults=!0,n.onresult=e=>{let t="";for(let n=0;n<e.results.length;n++)t+=e.results[n][0].transcript;r(t)},n.onend=()=>{t(!1)},o.current=n},[]);return{listening:e,transcript:n,startListening:()=>{var e;null===(e=o.current)||void 0===e||e.start(),t(!0)},stopListening:()=>{var e;null===(e=o.current)||void 0===e||e.stop(),t(!1)}}}function He(){const[e,t]=(0,i.useState)(!1);return{speak:function(e){const n=function(e){return function(e){return e.replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/#+\s/g,"").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/[_~]/g,"").replace(/\n+/g,". ").trim()}(e).replace(/[^\p{L}\p{N}\s]/gu," ").replace(/\s+/g," ").trim()}(e),i=new SpeechSynthesisUtterance(n),r=function(e){return/[\xe3\xf5\xe1\xe0\xe2\xe9\xea\xed\xf3\xf4\xfa\xe7]/i.test(e)?"pt-BR":"en-US"}(n),o=speechSynthesis.getVoices().find(e=>e.lang.startsWith(r));o&&(i.voice=o),i.lang=r,i.onstart=()=>t(!0),i.onend=()=>t(!1),speechSynthesis.speak(i)},stopSpeaking:()=>{speechSynthesis.cancel(),t(!1)},speaking:e}}const Je=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},Ue=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const r=new Date;return(e=e.replace(/@date\b/g,()=>r.toLocaleDateString()).replace(/@time\b/g,()=>r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>r.toLocaleString()).replace(/@dayofweek\b/g,()=>r.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(r.getMonth()+1)).replace(/@monthname\b/g,()=>r.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(r.getFullYear())).replace(/@today\b/g,()=>r.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const i=Number(t),r=Number(n);return i&&r?(i/(r*r)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-r.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const i=Math.max(-1,Math.min(1,Number(n))),r=t.isMobile?5:10,o=Math.abs(i),a=`${Math.round(100*i)}%`,s=Math.round(o*r);let l=i>=0?"\u2588".repeat(s)+"\u2591".repeat(r-s):"\u2591".repeat(r-s)+"\u2588".repeat(s);const d=Math.max(0,Math.floor((r-a.length)/2));return l.slice(0,d)+a+l.slice(d+a.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&i<5?Ue(e,t,n,i+1):e},Be=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,Ge=(e,t)=>{const n={};e.replace(Be,(e,t,i)=>(n[t]=i.trim(),""));let i=!0;for(;i;){i=!1;for(const[e,r]of Object.entries(n)){if(!r.includes("@"))continue;const o=Ue(We(r,n),Je({...t,...n}));o!==r&&(n[e]=o,i=!0)}}return n},We=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var i;return null!==(i=t[n])&&void 0!==i?i:""}),_e=(e,t,n)=>{const i=Ge(e),r=Je({...t,...Object.fromEntries(Object.entries(i).map(e=>{let[t,n]=e;if(""===n)return[t,""];const i=Number(n);return[t,Number.isNaN(i)?n:i]}))});return Ue(We((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),i),r,n)};function qe(){const[e,t]=(0,i.useState)(""),[n,r]=(0,i.useState)(""),[o,a]=(0,i.useState)({city:"",country:""});return(0,i.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async n=>{let{coords:i}=n;try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${i.latitude}&longitude=${i.longitude}&current=temperature_2m,weather_code`),n=await t.json();let d="",c="";try{var r,o,a,s;const e=await fetch(`https://geocode.maps.co/reverse?lat=${i.latitude}&lon=${i.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();d=(null===(r=t.address)||void 0===r?void 0:r.city)||(null===(o=t.address)||void 0===o?void 0:o.town)||(null===(a=t.address)||void 0===a?void 0:a.village)||"",c=(null===(s=t.address)||void 0===s?void 0:s.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(n.current.temperature_2m)}\xb0C`,weather:(l=n.current.weather_code,0===l?"\u2600\ufe0f Sunny":[1,2].includes(l)?"\ud83c\udf24\ufe0f Partly Cloudy":3===l?"\u2601\ufe0f Cloudy":[45,48].includes(l)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(l)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(l)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(l)?"\u2744\ufe0f Snowing":[80,81,82].includes(l)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(l)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:d,country:c})}catch(d){t(d)}var l}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),r(e.weather),a({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:o}}var Ye=n(503);const Ve=new TextEncoder,Xe=new TextDecoder;function Ze(e){const t=new Uint8Array(e);let n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return btoa(n)}function Qe(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function et(e,t){const n=await crypto.subtle.importKey("raw",Ve.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function tt(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),i=crypto.getRandomValues(new Uint8Array(16)),r=await et(t,i);return{encrypted:Ze(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},r,Ve.encode(e))),iv:Ze(n),salt:Ze(i)}}(t,e);await(0,C.BN)((0,C.H9)(S.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function nt(e){const t=await(0,C.x7)((0,C.H9)(S.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,i){const r=await et(i,Qe(n)),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:Qe(t)},r,Qe(e));return Xe.decode(o)}(n.encryptedApiKey,n.iv,n.salt,e)}async function it(e,t,n,i,r,o){console.log(r);const a=o||await nt(e);if(!a)throw new Error("OpenAI API Key not configured.");const s=new Ye.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),l=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${i}\n`;return await s.responses.create({model:r||"gpt-5.6-luna",input:l})}const rt="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const ot=e=>{let{id:t,date:n,content:r,onDeleteCard:o,onChangeContent:a,onChangeDate:s,tags:l,selected:c,onToggleSelection:p,templateOptions:u}=e;const{listening:g,transcript:x,startListening:h,stopListening:m}=Fe(),{speak:f,speaking:b,stopSpeaking:v}=He(),[k,j]=i.useState(!1),[C,S]=i.useState(!1),[A,T]=i.useState(!1),D=i.useRef(null),E=i.useRef(null),M=i.useRef(null),O=i.useRef(null),R=i.useRef(null),L=i.useRef(null),K=i.useRef(null),I=i.useRef(null),[F,H]=i.useState(window.innerWidth<1260),{user:J}=(0,N.o)(),{temperature:U,weather:B,location:G}=qe(),{setCursorPosition:_,findBestCursorPosition:q}=function(e){let{editing:t,textareaRef:n}=e;const[r,o]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(!t||!n.current||null===r)return;const e=n.current;e.focus(),e.setSelectionRange(r,r),requestAnimationFrame(()=>{const t=document.createElement("div"),n=window.getComputedStyle(e);t.style.position="absolute",t.style.visibility="hidden",t.style.whiteSpace="pre-wrap",t.style.wordWrap="break-word",t.style.font=n.font,t.style.lineHeight=n.lineHeight,t.style.padding=n.padding,t.style.width=`${e.clientWidth}px`,t.textContent=e.value.substring(0,r),document.body.appendChild(t);const i=t.offsetHeight;document.body.removeChild(t);const o=e.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:o+i-window.innerHeight/2,behavior:"smooth"})})},[t,r,n]),{cursorPosition:r,setCursorPosition:o,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const i=n.split(" ");for(let r=Math.min(i.length,8);r>=2;r--)for(let e=0;e<=i.length-r;e++){const n=i.slice(e,e+r).join(" "),o=t.indexOf(n);if(o>=0)return o}for(const r of i){if(r.length<4)continue;const e=t.indexOf(r);if(e>=0)return e}return t.length}}}({editing:k,textareaRef:D});!function(e){let{tagPickerRef:t,tagDropdownRef:n,colorPickerRef:r,colorDropdownRef:o,templatePickerRef:a,templateDropdownRef:s,closeTagPicker:l,closeColorPicker:d,closeTemplatePicker:c}=e;(0,i.useEffect)(()=>{const e=e=>{var i,p,u,g,x,h,m,f,b,w,y,v;const k=e.target,j=null!==(i=null===(p=t.current)||void 0===p?void 0:p.contains(k))&&void 0!==i&&i,C=null!==(u=null===(g=n.current)||void 0===g?void 0:g.contains(k))&&void 0!==u&&u;j||C||l();const S=null!==(x=null===(h=r.current)||void 0===h?void 0:h.contains(k))&&void 0!==x&&x,A=null!==(m=null===(f=o.current)||void 0===f?void 0:f.contains(k))&&void 0!==m&&m;S||A||d();const T=null!==(b=null===(w=a.current)||void 0===w?void 0:w.contains(k))&&void 0!==b&&b,D=null!==(y=null===(v=s.current)||void 0===v?void 0:v.contains(k))&&void 0!==y&&y;T||D||c()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t,n,r,o,a,s,l,d,c])}({tagPickerRef:M,tagDropdownRef:L,colorPickerRef:O,colorDropdownRef:K,templatePickerRef:R,templateDropdownRef:I,closeTagPicker:()=>{Q(!1),ee(!1)},closeColorPicker:()=>{S(!1)},closeTemplatePicker:()=>{T(!1)}}),i.useEffect(()=>{const e=()=>{H(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const Y=i.useMemo(()=>((e,t)=>{const n=t(e)?JSON.parse(e):{...$,text:e};return{...$,...n,tags:Array.from(new Set([...n.tags||[]]))}})(r,w),[r]),{showTagPicker:V,creatingTag:X,newTagName:Z,setShowTagPicker:Q,setCreatingTag:ee,setNewTagName:te,hasTag:ne,toggleTag:ie,createTag:re}=function(e){let{tags:t,onTagsChange:n}=e;const[r,o]=(0,i.useState)(!1),[a,s]=(0,i.useState)(!1),[l,d]=(0,i.useState)(""),c=e=>t.includes(e),p=e=>{console.log("current tags",t);const i=Array.from(new Set(c(e)?t.filter(t=>t!==e):[...t,e]));console.log("updated tags",i),n(i)};return{showTagPicker:r,creatingTag:a,newTagName:l,setShowTagPicker:o,setCreatingTag:s,setNewTagName:d,hasTag:c,toggleTag:p,createTag:e=>{const t=e.trim().toLowerCase();t&&(p(t),d(""),s(!1))}}}({tags:Y.tags,onTagsChange:e=>{a(t,JSON.stringify({...Y,tags:e}))}}),[oe,ae]=i.useState(Y.text||""),[se,le]=i.useState([]),de=i.useCallback(e=>{le(t=>t[t.length-1]===e?t:[...t,e])},[]),{aiLoading:pe,handleAI:ue}=function(e){let{userId:t,value:n,textareaRef:r,pushHistory:o,onContentChange:a}=e;const[s,l]=(0,i.useState)(!1);return{aiLoading:s,handleAI:async()=>{if(!t)return void alert("User not authenticated");let e=await nt(t);if(!e){var i;if(e=(null===(i=window.prompt("OpenAI API Key not configured.\n\nEnter your OpenAI API Key:"))||void 0===i?void 0:i.trim())||"",!e)return;await tt(t,e)}const s=window.prompt("Examples:\n\nFix grammar\nSummarize\nRewrite professionally\nTranslate to Portuguese");if(null!==s&&void 0!==s&&s.trim()){l(!0);try{o(n);const i=r.current;if(i&&i.selectionStart!==i.selectionEnd){const r=i.selectionStart,o=i.selectionEnd,l=n.substring(r,o),d=await it(t,rt,s,l,"gpt-5.6-luna",e),c=n.substring(0,r)+d.output_text.trim()+n.substring(o);return void a(c)}const l=await it(t,rt,s,n,"gpt-5.6-luna",e),d=`${n}\n\n${l.output_text.trim()}`;a(d)}catch(d){console.error(d),alert(d instanceof Error?d.message:"AI request failed")}finally{l(!1)}}}}}({userId:null===J||void 0===J?void 0:J.uid,value:oe,textareaRef:D,pushHistory:de,onContentChange:e=>{ae(e),a(t,JSON.stringify({...Y,text:e}))}}),ge=()=>{if(ne("trash"))return void o(t,!0);const e=(e=>Array.from(new Set([...e.filter(e=>"archive"!==e),"trash"])))(Y.tags);a(t,JSON.stringify({...Y,tags:e}))},xe=e=>ne("templates")?e:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/quarter\b/g,()=>String(Math.floor(n.getMonth()/3)+1)).replace(/\/week\b/g,()=>{const e=new Date(n);e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const t=new Date(e.getFullYear(),0,4);return String(1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7))}).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/week\b/g,()=>{const e=new Date(n.getFullYear(),0,1),t=Math.ceil(((n.getTime()-e.getTime())/864e5+e.getDay()+1)/7);return String(t)}).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const i=Number(t),r=Number(n);return String(Math.floor(Math.random()*(r-i+1))+i)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",i=Number(t);return Array.from({length:i},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const i=new Date(t);let r=n.getFullYear()-i.getFullYear();const o=n.getMonth()-i.getMonth();return(o<0||0===o&&n.getDate()<i.getDate())&&r--,String(r)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const i=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(i/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})}(e,{weather:B,temperature:U,city:G.city,country:G.country});i.useEffect(()=>{if(!g&&x){de(oe);const e=oe+x;a(t,JSON.stringify({...Y,text:e})),ae(e)}},[g,x,oe,t,Y,de,a]);const he=Y.locked;return(0,d.jsx)(at,{selected:c,children:(0,d.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:Y.color||"#eee"},children:[(0,d.jsx)(W,{title:Y.title,locked:Y.locked,collapsed:Y.collapsed,selected:c,onToggleSelection:()=>p(t),speaking:b,isFavorite:ne("favorite"),speak:()=>f(oe),stopSpeaking:v,copyFormattedContent:async()=>{if(!E.current)return;const e=E.current.innerHTML,t=E.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>ie("favorite"),onToggleLock:()=>a(t,JSON.stringify({...Y,locked:!Y.locked})),onToggleCollapse:()=>a(t,JSON.stringify({...Y,collapsed:!Y.collapsed})),onTitleChange:e=>a(t,JSON.stringify({...Y,title:xe(e)}))}),Y.collapsed?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ce,{value:oe,locked:Y.locked,editing:k,textareaRef:D,markdownRef:E,setValue:ae,setEditing:j,processMarkdown:e=>_e(e,{temperature:U,weather:B,city:G.city,country:G.country},F),onExecuteExpression:e=>{de(oe);const n=((e,t,n)=>{const i=t.match(/^\$\{(\w+)\}=(.*)$/);if(!i)return e;const r=i[1];let o=i[2];const a=Ge(e);o=Ue(o,Je({...n,...a})),o=o.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=a[t])&&void 0!==n?n:"")});const s="${"+r+"}="+Function(`return (${o})`)(),l=new RegExp(`^\\$\\{${r}\\}\\s*=([^\\r\\n]*)`,"m");return l.test(e)?e.replace(l,s):e.trimEnd()+"\n"+s})(oe,e,{temperature:U,weather:B,city:G.city,country:G.country});ae(n),a(t,JSON.stringify({...Y,text:n}))},onSave:()=>((e,t)=>{const n=xe(t);a(e,JSON.stringify({...Y,text:n})),ae(n)})(t,oe),onMarkdownClick:e=>{de(oe);const t=q(e,oe);_(t),j(!0)}}),(0,d.jsx)("footer",{className:"footer",children:(0,d.jsxs)("span",{className:"footbox",children:[(0,d.jsx)(Ne,{tagDropdownRef:L,date:n,tags:Y.tags,availableTags:l,isLocked:he,tagPickerRef:M,showTagPicker:V,creatingTag:X,newTagName:Z,setShowTagPicker:Q,setCreatingTag:ee,setNewTagName:te,onDateChange:e=>s(t,e),hasTag:ne,toggleTag:ie,createTag:re,formatTag:P,formatDate:y}),(0,d.jsx)(Ce,{colorDropdownRef:K,templateDropdownRef:I,isLocked:he,listening:g,aiLoading:pe,isArchived:ne("archive"),isTrash:ne("trash"),showColorPicker:C,showTemplatePicker:A,colorPickerRef:O,templatePickerRef:R,noteColors:z,templateOptions:u,startListening:()=>{Y.locked||h()},stopListening:m,undoLastChange:()=>{const e=se[se.length-1];e&&(le(e=>e.slice(0,-1)),ae(e),a(t,JSON.stringify({...Y,text:e})))},handleAI:()=>{Y.locked||ue()},archiveNote:()=>{Y.locked||(()=>{const e=(e=>e.includes("archive")?e.filter(e=>"archive"!==e):[...e.filter(e=>"trash"!==e),"archive"])(Y.tags);a(t,JSON.stringify({...Y,tags:e}))})()},trashNote:()=>{Y.locked||ge()},setShowColorPicker:S,setShowTemplatePicker:T,onColorSelected:e=>{a(t,JSON.stringify({...Y,color:e})),S(!1)},onTemplateSelected:e=>{de(oe);let n=e.text.replace(/\\\$\{/g,"${");if(n=xe(n),!Y.locked){const i=Array.from(new Set([...Y.tags||[],...e.tags||[]]));a(t,JSON.stringify({...Y,collapsed:!1,color:e.color,text:n,title:xe(e.title),tags:i})),ae(n)}}})]})})]})]})},t)},at=r.Ay.div`
box-shadow: ${e=>{let{selected:t}=e;return t?"0 0 0 3px #2563eb":"none"}};  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  margin: 10px 0px 0px 0px;

  background-color: #757575;
  border-radius: 5px;

  div {
    margin-left: 10px;
    width: 100%;
  }

  .ContentContainer {
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    border-radius: 5px 5px 0px 0px;
    margin: 0;

    .footer {
      width: 100%;
      height: 44px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      border-bottom: 1px solid lightgray;
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

`,st=e=>{let{entries:t,pickerTags:n,cardRefs:i,onHoverCard:r,onDeleteEntry:o,onChangeEntry:a,updateEntryDate:s,selectedNoteIds:l,onToggleSelection:c,templateOptions:p}=e;return(0,d.jsx)(lt,{children:t.map((e,t)=>(0,d.jsx)("div",{ref:t=>{i.current[e.id]=t},onMouseEnter:()=>r(e.id),onMouseLeave:()=>r(null),children:(0,d.jsx)(ot,{id:e.id,date:e.date,number:t+1,content:e.content,onDeleteCard:o,onChangeContent:a,onChangeDate:s,tags:n,selected:l.includes(e.id),onToggleSelection:c,templateOptions:p})},e.id))})},lt=r.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`,dt=e=>{try{return JSON.parse(e).color||"#cccccc"}catch{return"#cccccc"}},ct=e=>{let{entries:t,hoveredCardId:n,cardHeights:i,totalHeight:r,onScrollToCard:s}=e;return(0,d.jsx)(pt,{children:t.map(e=>(0,d.jsxs)(ut,{$selected:n===e.id,style:{backgroundColor:dt(e.content),height:`${Math.max((i[e.id]||40)/Math.max(r,1)*100,24)}px`},children:[(0,d.jsx)(a.K,{title:"Go to note top",onClick:()=>s(e.id,"top"),children:(0,d.jsx)(o.wAb,{})}),(0,d.jsx)(a.K,{title:"Go to note bottom",onClick:()=>s(e.id,"bottom"),children:(0,d.jsx)(o.fK4,{})})]},e.id))})},pt=r.Ay.div`
  padding-top: 20px;
  width: 60px;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;
  background: #d0d0d0;
`,ut=r.Ay.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2px;

  border-radius: 4px;

  padding: 0 2px;

  border: ${e=>{let{$selected:t}=e;return t?"2px solid #2563eb":"1px solid transparent"}};

  button:hover {
    background: white;
  }

  svg {
    margin: 0;
    padding: 0;
  }
`,gt=e=>{const t=(0,C.H9)(S.OO,"users",e);return(0,C.rJ)(t,"chatSessions")},xt=async(e,t)=>{const n=gt(e);return(await(0,C.GG)((0,C.P)(n,(0,C._M)("id","==",t)))).docs};const ht=(0,i.createContext)(void 0),mt="You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.",ft=e=>{let{uid:t,selectedNotesText:n,noteTitles:r,clearSelectedNotes:o,entries:a}=e;const[s,l]=(0,i.useState)(""),[d,c]=(0,i.useState)([]),[p,u]=(0,i.useState)([]),{sessions:g,fetchSessions:x,createSession:h,updateSession:m,deleteSession:f}=function(e){const[t,n]=i.useState([]),r=i.useCallback(async()=>{if(!e)return;const t=(await(0,C.GG)(gt(e))).docs.map(e=>e.data());n((e=>[...e].sort((e,t)=>e.updatedAt>t.updatedAt?-1:e.updatedAt<t.updatedAt?1:0))(t))},[e]),o=i.useCallback(async t=>{if(!e)return null;const i={id:j()(),title:"New Chat",createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString(),model:t,selectedPromptIds:[],messages:[]};return n(e=>[i,...e]),await(0,C.gS)(gt(e),i),i},[e]),a=i.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const i=await xt(e,t.id);await Promise.all(i.map(n=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/chatSessions/${n.id}`),t)))},[e]),s=i.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const i=await xt(e,t);await Promise.all(i.map(t=>(0,C.kd)((0,C.H9)(S.OO,`users/${e}/chatSessions/${t.id}`))))},[e]);return{sessions:t,setSessions:n,fetchSessions:r,createSession:o,updateSession:a,deleteSession:s}}(t),[b,w]=(0,i.useState)(!1),[y,v]=(0,i.useState)(null),[k,A]=(0,i.useState)(!1),[T,D]=(0,i.useState)("gpt-5.6-luna"),[N,E]=(0,i.useState)(!0),M=(0,i.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),$=(0,i.useCallback)(async()=>{const e=await h(T);e&&(c([]),v(e.id),u([]))},[h,T]);(0,i.useEffect)(()=>{b&&(g.length>0||$())},[b,g,$]),(0,i.useEffect)(()=>{(async()=>{await x(),w(!0)})()},[x]);const z=(0,i.useCallback)(async e=>{if(!y)return;const t=g.find(e=>e.id===y);if(!t)return;const n=d.includes(e)?d.filter(t=>t!==e):[...d,e];c(n),await m({...t,selectedPromptIds:n,updatedAt:(new Date).toISOString()})},[y,d,g,m]),P=(0,i.useMemo)(()=>a.filter(e=>d.includes(e.id)).map(e=>{try{return JSON.parse(e.content).text||""}catch{return""}}).join("\n\n"),[a,d]),O=(0,i.useCallback)(e=>{const t=g.find(t=>t.id===e);t&&(c(t.selectedPromptIds||[]),v(e),u(t.messages),D(t.model))},[g]);(0,i.useEffect)(()=>{0!==g.length&&(y||O(g[0].id))},[g,y,O]);const R=(0,i.useMemo)(()=>a.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[a]),L=(0,i.useCallback)(async()=>{const e=s.trim();if(!e||k)return;if(!t)return void u(e=>[...e,{id:j()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const i=r.length>0?`Notes:\n${r.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",a=M(p),d={id:j()(),role:"user",content:`${i}${e}`};u(t=>{const n=[...t,d],i=g.find(e=>e.id===y);return i&&m({...i,messages:n,updatedAt:(new Date).toISOString(),title:"New Chat"===i.title?e.substring(0,30):i.title}),n}),l(""),A(!0);const c=[];N&&a&&c.push(`History:\n${a}`),n.trim()&&c.push(`Context:\n${n}`);const x=c.join("\n\n");try{var h,f;const n=[mt,P].filter(Boolean),i=await it(t,n.join("\n\n"),e,x,T),r={id:j()(),role:"assistant",content:i.output_text.trim()||"No response was returned.",tokens:{input:(null===(h=i.usage)||void 0===h?void 0:h.input_tokens)||0,output:(null===(f=i.usage)||void 0===f?void 0:f.output_tokens)||0}};u(t=>{const n=[...t,r],i=g.find(e=>e.id===y);return i&&m({...i,messages:n,updatedAt:(new Date).toISOString(),title:"New Chat"===i.title?e.substring(0,30):i.title}),n}),o()}catch(b){console.error("Mavis error:",b);const e=b instanceof Error?b.message:"An unexpected error occurred.";u(t=>[...t,{id:j()(),role:"assistant",content:e}])}finally{A(!1)}},[s,k,t,r,n,T,p,N,M,o,g,y,m,P]),K=(0,i.useCallback)(async()=>{if(k||0===p.length)return;if(!t)return void u(e=>[...e,{id:j()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const e=M(p);A(!0);try{var n,i;const r=await it(t,`${mt}\n\n${P}`,"Summarize the entire conversation history into one comprehensive, self-contained message.\n\nInclude all important information from the conversation, especially:\n\n- Every requirement and specification\n- Every decision that was made\n- Every implementation detail\n- Every instruction and constraint\n- Important facts, dates, names, titles, values, and references\n- Code-related decisions, expected behavior, and affected files or components\n- Problems, errors, solutions, and changes that were discussed\n- Rejected alternatives and the reasons they were rejected\n- Open questions, unresolved issues, assumptions, and pending tasks\n- The current state of the work\n- Clear next steps, if any\n\nPreserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.\n\nWrite the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.",`Conversation history:\n${e}`,T),o={id:j()(),role:"assistant",content:r.output_text.trim()||"No summary was returned.",tokens:{input:(null===(n=r.usage)||void 0===n?void 0:n.input_tokens)||0,output:(null===(i=r.usage)||void 0===i?void 0:i.output_tokens)||0}};u([o]);const a=g.find(e=>e.id===y);a&&await m({...a,messages:[o],updatedAt:(new Date).toISOString()})}catch(r){console.error("Mavis summary error:",r);const e=r instanceof Error?r.message:"An unexpected error occurred.";u(t=>[...t,{id:j()(),role:"assistant",content:e}])}finally{A(!1)}},[k,p,t,M,T,y,g,m,P]),I=(0,i.useCallback)(async e=>{if(!y)return;const t=g.find(e=>e.id===y);if(!t)return;const n="all"===e?[]:t.messages.filter(t=>t.id!==e);u(n),await m({...t,messages:n,updatedAt:(new Date).toISOString()})},[y,g,m]),F=(0,i.useCallback)(async()=>{if(!y)return;const e=g.find(e=>e.id===y);e&&(u([]),await m({...e,messages:[],updatedAt:(new Date).toISOString()}))},[y,g,m]),H=(0,i.useCallback)(async e=>{if(await f(e),y===e){const t=g.filter(t=>t.id!==e);t.length>0?O(t[0].id):await $()}},[f,y,g,O,$]);return{prompt:s,setPrompt:l,selectedPromptIds:d,togglePrompt:z,availablePromptNotes:R,messages:p,isLoading:k,sessions:g,currentSessionId:y,createNewSession:$,loadSession:O,deleteSession:f,removeSession:H,sendPrompt:L,deleteMessage:I,clearMessages:F,summarizeHistory:K,selectedModel:T,setSelectedModel:D,includeHistory:N,setIncludeHistory:E}};function bt(e){let{children:t,uid:n,selectedNotesText:i,noteTitles:r,clearSelectedNotes:o,entries:a}=e;const s=ft({uid:n,selectedNotesText:i,noteTitles:r,clearSelectedNotes:o,entries:a});return(0,d.jsx)(ht.Provider,{value:s,children:t})}function wt(){const e=(0,i.useContext)(ht);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}const yt=["gpt-5-mini","gpt-5.6-luna","gpt-5.6-terra","gpt-5.6-sol"],vt=e=>{let{uid:t,selectedNotesText:n,noteTitles:r,notesCount:s,clearSelectedNotes:c}=e;const[p,u]=i.useState(!1),{listening:g,transcript:x,startListening:h,stopListening:m}=Fe(),{speak:b,speaking:w,stopSpeaking:y}=He(),{prompt:v,setPrompt:k,messages:j,isLoading:C,sendPrompt:S,deleteMessage:A,selectedModel:T,setSelectedModel:D,selectedPromptIds:N,availablePromptNotes:E,togglePrompt:M,includeHistory:$,setIncludeHistory:z,summarizeHistory:P}=wt(),[O,R]=i.useState(!1),[L,K]=i.useState(!1);i.useEffect(()=>{!g&&x&&k(e=>e.length>0?`${e} ${x}`:x)},[g,x,k]);return(0,d.jsxs)(Nt,{children:[(0,d.jsxs)(Et,{children:[j.map(e=>(0,d.jsxs)(kt,{role:e.role,children:[(0,d.jsx)(Ct,{role:e.role,children:e.tokens&&(0,d.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,d.jsx)(Mt,{role:e.role,children:(0,d.jsx)(Z.oz,{remarkPlugins:[ee.A],children:e.content})}),(0,d.jsxs)(jt,{role:e.role,children:[(0,d.jsx)(a.K,{title:"Read message",onClick:()=>{return t=e.content,void(w?y():b(t));var t},children:w?(0,d.jsx)(o.TG1,{}):(0,d.jsx)(o.o77,{})}),(0,d.jsx)(a.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Delete message",onClick:()=>A(e.id),children:(0,d.jsx)(o.IXo,{})})]})]},e.id)),C&&(0,d.jsx)(Mt,{role:"assistant",children:"Thinking..."})]}),(0,d.jsx)($t,{expanded:p,children:(0,d.jsxs)(zt,{children:[(0,d.jsxs)(At,{children:[(0,d.jsxs)(Ft,{children:[(0,d.jsxs)(Rt,{title:"Prompt presets",onClick:()=>K(!L),children:[(0,d.jsx)(f.vTI,{}),(0,d.jsxs)(Lt,{children:["Prompts (",N.length,")"]})]}),L&&(0,d.jsx)(Kt,{children:E.map(e=>(0,d.jsxs)(It,{className:N.includes(e.id)?"selected":"",onClick:()=>{M(e.id)},children:[(0,d.jsx)(f.vTI,{}),(0,d.jsx)("span",{children:e.title})]},e.id))})]}),(0,d.jsxs)(Ot,{children:[(0,d.jsxs)(Rt,{style:{margin:"0px !important"},title:"Selecionar modelo de IA",onClick:()=>{R(!O)},children:[(0,d.jsx)(o.Ojn,{}),(0,d.jsx)(Lt,{children:T})]}),O&&(0,d.jsx)(Kt,{children:yt.map(e=>(0,d.jsxs)(It,{className:T===e?"selected":"",onClick:()=>{D(e),R(!1)},title:e,children:[(0,d.jsx)(o.Ojn,{}),(0,d.jsx)("span",{children:e})]},e))})]}),(0,d.jsxs)(Tt,{children:["Notes: ",s]})]}),(0,d.jsxs)(St,{children:[(0,d.jsx)(Pt,{expanded:p,value:v,placeholder:"Ask Mavis...",disabled:C,onChange:e=>k(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),S())}}),(0,d.jsxs)(Dt,{children:[(0,d.jsx)(a.K,{title:"Summarize History",onClick:()=>{P()},children:(0,d.jsx)(l.Z1M,{})}),(0,d.jsx)(a.K,{title:"Include chat history in prompts",children:(0,d.jsx)(l.bfP,{color:$?"#2563eb":"#555",onClick:()=>z(!$)})}),(0,d.jsx)(a.K,{title:"Clear chat history",onClick:()=>{A("all")},children:(0,d.jsx)(f.U3h,{})}),g?(0,d.jsx)(a.K,{title:"Stop recording",onClick:m,children:(0,d.jsx)(o.TG1,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Voice input",onClick:h,children:(0,d.jsx)(o.Rrl,{})}),(0,d.jsx)(a.K,{title:p?"Collapse":"Expand",onClick:()=>u(e=>!e),children:p?(0,d.jsx)(o.eDi,{}):(0,d.jsx)(o.mkN,{})}),(0,d.jsx)(a.K,{title:"Copy input",onClick:()=>{(async()=>{v.trim()&&await navigator.clipboard.writeText(v)})()},disabled:!v.trim(),children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Send prompt",onClick:()=>{S()},disabled:C||!v.trim(),children:(0,d.jsx)(o.kGk,{})}),(0,d.jsx)(a.K,{title:"Clear input",onClick:()=>{k("")},disabled:!v.trim(),children:(0,d.jsx)(o.yGN,{})}),(0,d.jsx)(a.K,{title:"Clear selected notes",onClick:c,disabled:0===s,children:(0,d.jsx)(l.DnH,{})})]})]})]})})]})},kt=r.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
`,jt=r.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,Ct=r.Ay.div`
  font-size: 10px;
  color: #555;
  margin-bottom: 2px;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  white-space: nowrap;
`,St=r.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,At=r.Ay.span`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,Tt=r.Ay.span`
  font-size: 12px;
  color: #555;
`,Dt=r.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,Nt=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Et=r.Ay.div`
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
`,Mt=r.Ay.div`
  max-width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  white-space: pre-wrap;
  word-break: break-word;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  background: ${e=>{let{role:t}=e;return"user"===t?"#2563eb":"#f5f5f5"}};
  color: ${e=>{let{role:t}=e;return"user"===t?"#fff":"#222"}};
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
`,$t=r.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;
  margin: 0;
  background: #e0e0e5;
  ${e=>{let{expanded:t}=e;return t&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}}
`,zt=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #e0e0e5;
`,Pt=r.Ay.textarea`
  resize: none;
  min-height: ${e=>{let{expanded:t}=e;return t?"calc(100vh - 80px)":"80px"}};
  max-height: ${e=>{let{expanded:t}=e;return t?"calc(100vh - 80px)":"300px"}};
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
`,Ot=r.Ay.div`
  padding: 0px;
  position: relative;
  width: auto;
`,Rt=r.Ay.div`
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
`,Lt=r.Ay.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Kt=r.Ay.div`
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
`,It=r.Ay.span`
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
`,Ft=r.Ay.div`
  position: relative;
`,Ht=e=>{let{expanded:t,panelWidth:n,minimized:i,setMinimized:r,notesMinimized:s}=e;const l=t?188:52;return(0,d.jsxs)(Jt,{explorerWidth:l,notesMinimized:s,barWidth:n,minimized:i,children:[(0,d.jsxs)(Ut,{children:[(0,d.jsx)(o.Ojn,{}),"Chat"]}),(0,d.jsx)(Bt,{children:(0,d.jsx)(a.K,{title:"Minimize chat panel",onClick:()=>r(!0),children:(0,d.jsx)(o.prK,{})})})]})},Jt=r.Ay.div`
  display: ${e=>{let{minimized:t}=e;return t?"none":"flex"}};
  width: ${e=>{let{barWidth:t}=e;return`${t}px`}};
  margin-left: ${e=>{let{explorerWidth:t,notesMinimized:n}=e;return`${n?t+10:10}px`}} !important;
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
`,Ut=r.Ay.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`,Bt=r.Ay.div`
  display: flex;
  align-items: center;
  height: 35px;
`,Gt=e=>{let{minimized:t,setMinimized:n}=e;const[r,s]=i.useState(!1),{sessions:l,currentSessionId:c,createNewSession:p,loadSession:u,deleteSession:g,removeSession:x}=wt();return(0,d.jsxs)(Wt,{expanded:r,children:[(0,d.jsxs)(a.K,{expanded:r,title:"Menu",onClick:()=>s(!r),children:[(0,d.jsx)(o.ND1,{}),r&&(0,d.jsx)("span",{children:"Sessions"})]}),t&&(0,d.jsxs)(a.K,{expanded:r,title:"Expand Chat",onClick:()=>n(!t),children:[(0,d.jsx)(o.Ojn,{}),r&&(0,d.jsx)("span",{children:"Expand Chat"})]}),(0,d.jsxs)(a.K,{expanded:r,onClick:()=>{p()},children:[(0,d.jsx)(o.GGD,{}),r&&(0,d.jsx)("span",{children:"New Chat"})]}),(0,d.jsx)(_t,{disabled:!r,children:l.map(e=>(0,d.jsxs)(Yt,{children:[(0,d.jsx)(qt,{active:c===e.id,onClick:()=>u(e.id),children:e.title}),(0,d.jsx)(Vt,{onClick:t=>{t.stopPropagation(),g(e.id)},children:(0,d.jsx)(o.IXo,{size:12})})]},e.id))})]})},Wt=r.Ay.div`
  width: ${e=>e.expanded?"180px":"40px"};
  position: static;
  right: 0;
  top: 40px;
  height: 100%;
  border-left: 1px solid #d0d0d0;
  padding: 4px;
  overflow-y: none;
  overflow-x: visible;
  background: #f8f8f8;
  margin-left: 6px;
  transition: width 0.3s ease-in-out;
`,_t=r.Ay.div`
  display: ${e=>e.disabled?"none":"flex"};
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,qt=r.Ay.div`
  flex: 1;

  display: flex;
  align-items: center;

  min-height: 28px;

  padding: 4px 10px;

  border-radius: 999px;

  background: ${e=>{let{active:t}=e;return t?"#4f46e5":"rgba(79, 70, 229, 0.12)"}};

  color: ${e=>{let{active:t}=e;return t?"#fff":"#4338ca"}};

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: ${e=>{let{active:t}=e;return t?"#4f46e5":"rgba(79, 70, 229, 0.2)"}};
  }
`,Yt=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Vt=r.Ay.button`
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
`,Xt=e=>{let{explorerExpanded:t,setExplorerExpanded:n}=e;const{selectedDate:r,setSelectedDate:a}=(0,O.M)(),{user:s}=(0,N.o)(),{entries:l,fetchEntries:p,addEntry:u,updateEntry:g,deleteEntry:x,updateEntryDate:h,renameTag:w,deleteTag:y,addTagToEntries:k,removeTagFromEntries:E}=function(e){const[t,n]=i.useState([]),r=i.useCallback(async()=>{if(!e)return;const t=T(e),i=(await(0,C.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}});n(A(i))},[e]),o=i.useCallback(async t=>{let{content:i,date:r}=t;if(!e)return null;const o={uid:e,id:j()(),content:i,date:r,createdAt:(new Date).toISOString()};return n(e=>A([...e,o])),await(0,C.gS)(T(e),o),o},[e]),a=i.useCallback(async(i,r)=>{if(!e)return;const o=t.find(e=>e.id===i);if(!o)return;const a={...o,content:r};n(e=>A(e.map(e=>e.id===i?a:e)));const s=await D(e,i);await Promise.all(s.map(t=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/entries/${t.id}`),a)))},[t,e]),s=i.useCallback(async t=>{if(!e)return;n(e=>A(e.map(e=>e.id===t.id?t:e)));const i=await D(e,t.id);await Promise.all(i.map(n=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/entries/${n.id}`),t)))},[e]),l=i.useCallback(async(e,n)=>{const i=t.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}});await Promise.all(i.map(async t=>{const i=JSON.parse(t.content);await s({...t,content:JSON.stringify({...i,tags:(i.tags||[]).map(t=>t===e?n:t)})})}))},[t,s]),d=i.useCallback(async e=>{const n=t.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}});await Promise.all(n.map(async t=>{const n=JSON.parse(t.content);await s({...t,content:JSON.stringify({...n,tags:(n.tags||[]).filter(t=>t!==e)})})}))},[t,s]),c=i.useCallback(async(e,n)=>{const i=t.filter(t=>e.includes(t.id));await Promise.all(i.map(async e=>{const t=JSON.parse(e.content);await s({...e,content:JSON.stringify({...t,tags:Array.from(new Set([...t.tags||[],n]))})})}))},[t,s]),p=i.useCallback(async(e,n)=>{const i=t.filter(t=>e.includes(t.id));await Promise.all(i.map(async e=>{const t=JSON.parse(e.content);await s({...e,content:JSON.stringify({...t,tags:(t.tags||[]).filter(e=>e!==n)})})}))},[t,s]),u=i.useCallback(async(n,i)=>{if(!e)return;const r=t.find(e=>e.id===n);r&&await s({...r,date:i})},[t,s,e]),g=i.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const i=await D(e,t);await Promise.all(i.map(t=>(0,C.kd)((0,C.H9)(S.OO,`users/${e}/entries/${t.id}`))))},[e]);return{entries:t,setEntries:n,fetchEntries:r,addEntry:o,updateEntry:a,replaceEntry:s,deleteEntry:g,updateEntryDate:u,renameTag:l,deleteTag:d,addTagToEntries:c,removeTagFromEntries:p}}((null===s||void 0===s?void 0:s.uid)||""),{searchContent:z,setSearchContent:P,selectedTag:R,setSelectedTag:K,systemTags:I,availableTags:F,pickerTags:H,visibleEntries:J}=function(e){const[t,n]=i.useState(""),[r,a]=i.useState("favorite"),s=i.useMemo(()=>[{name:"all",icon:o.Vap,system:!0,position:"top"},{name:"favorite",icon:o.usP,system:!0,position:"top"},{name:"journal",icon:b.Fsq,system:!0,position:"top"},{name:"templates",icon:o.MRc,system:!0,position:"top"},{name:"prompts",icon:f.vTI,system:!0,position:"top"},{name:"other",icon:m.uoj,system:!0,position:"top"},{name:"archive",icon:o.OZ2,system:!0,position:"bottom"},{name:"trash",icon:o.IXo,system:!0,position:"bottom"}],[]),l=i.useMemo(()=>s.map(e=>e.name),[s]),d=i.useMemo(()=>Array.from(new Set(e.flatMap(e=>v(e.content)))).filter(e=>!l.includes(e)).sort(),[e,l]),c=i.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...d])).sort(),[d]),p=i.useCallback(e=>{const n=v(e.content),i=n.includes("trash"),o=n.includes("archive"),a=n.includes("templates"),s=n.includes("prompts");return""!==t.trim()?e.content.toLowerCase().includes(t.toLowerCase()):"all"===r?!i&&!o:"favorite"===r?n.includes("favorite")&&!i&&!o:"journal"===r?n.includes("journal")&&!a&&!i&&!o:"templates"===r?a&&!i&&!o:"prompts"===r?s&&!i&&!o:"other"===r?!i&&!o&&!a&&!s&&!n.includes("journal"):"archive"===r?o&&!i:"trash"===r?i:n.includes(r)&&!i&&!o&&!a&&!s},[t,r]),u=i.useMemo(()=>e.filter(p),[e,p]);return{searchContent:t,setSearchContent:n,selectedTag:r,setSelectedTag:a,systemTags:s,availableTags:d,pickerTags:c,visibleEntries:u,isEntryVisible:p}}(l),{cardRefs:U,cardHeights:B,totalHeight:G}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=i.useRef({}),[n,r]=i.useState({}),o=i.useCallback(()=>{const e={};Object.entries(t.current).forEach(t=>{let[n,i]=t;i&&(e[n]=i.offsetHeight)}),r(e)},[]);i.useEffect(()=>{const e=new ResizeObserver(()=>{o()});return Object.values(t.current).forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[o]),i.useEffect(()=>{o()},[...e,o]);const a=i.useMemo(()=>Object.values(n).reduce((e,t)=>e+t,0),[n]);return{cardRefs:t,cardHeights:n,totalHeight:a,refreshCardHeights:o}}([l]),[W,_]=i.useState(null),[q,Y]=i.useState([]),V=i.useRef(null),[X,Z]=i.useState(0),Q=i.useRef(null),[ee,te]=i.useState(0),[ne,ie]=i.useState(!1),[re,oe]=i.useState(!1),ae=i.useMemo(()=>l.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[l]);i.useLayoutEffect(()=>{const e=()=>{var e,t;te(null!==(e=null===(t=Q.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return Q.current&&t.observe(Q.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]),i.useLayoutEffect(()=>{const e=()=>{var e,t;Z(null!==(e=null===(t=V.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return V.current&&t.observe(V.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]);const se=i.useCallback(e=>{Y(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),le=i.useCallback(()=>{Y(J.map(e=>e.id))},[J]),de=i.useCallback(()=>{Y([])},[]);i.useEffect(()=>{Y(e=>e.filter(e=>l.some(t=>t.id===e)))},[l]);const ce=i.useMemo(()=>l.filter(e=>q.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[l,q]),pe=i.useMemo(()=>l.filter(e=>q.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[l,q]);i.useEffect(()=>{p()},[p]);const ue=()=>{window.scrollTo({top:0,behavior:"smooth"})},ge=(i.useMemo(()=>l.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[l]),g);return(0,d.jsx)(Zt,{children:(0,d.jsxs)(bt,{uid:s?s.uid:"",selectedNotesText:ce,noteTitles:pe,clearSelectedNotes:de,entries:l,children:[(0,d.jsxs)(M,{children:[(0,d.jsx)(c,{selectedTag:R,selectedDate:r,searchContent:z,onSearchChange:P,onDateChange:e=>{a(e.target.value)},onAddNote:async function(){const e="all"!==R?[R]:[];await u({date:r,content:JSON.stringify({...$,tags:e})}),ue()},onCopyAllNotes:async()=>{const e=ce.length>0?ce:J.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:le,onClearAll:de,selectedCount:q.length,expanded:t,panelWidth:X,minimized:ne,setMinimized:ie}),(0,d.jsx)(Ht,{onClearAll:de,expanded:t,panelWidth:ee,minimized:re,setMinimized:oe,notesMinimized:ne})]}),(0,d.jsx)(L,{systemTags:I,customTags:F,selectedTag:R,setSelectedTag:K,explorerExpanded:t,setExplorerExpanded:n,minimized:ne,setMinimized:ie,selectedNoteIds:q,onRenameTag:async(e,t)=>{await w(e,t),R===e&&K(t)},onDeleteTag:async e=>{await y(e),R===e&&K("all")},onAddTagToSelected:async e=>{await k(q,e)},onRemoveTagFromSelected:async e=>{await E(q,e)}}),!ne&&(0,d.jsx)(ct,{entries:J,hoveredCardId:W,cardHeights:B,totalHeight:G,onScrollToCard:(e,t)=>{const n=U.current[e],i=V.current;if(!n||!i)return;const r=n.offsetTop,o="top"===t?r-100:r-i.clientHeight+n.offsetHeight+50;i.scrollTo({top:Math.max(0,o),behavior:"smooth"})}}),(0,d.jsx)(en,{ref:V,minimized:ne,children:!ne&&(0,d.jsx)(st,{entries:J,pickerTags:H,cardRefs:U,updateEntryDate:h,onHoverCard:_,onDeleteEntry:async function(e){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])){const t=l.find(t=>t.id===e);if(!t)return;const n=JSON.parse(t.content),i=Array.from(new Set([...(n.tags||[]).filter(e=>"archive"!==e),"trash"]));return void await g(e,JSON.stringify({...n,tags:i}))}await x(e)},onChangeEntry:ge,selectedNoteIds:q,onToggleSelection:se,templateOptions:ae})}),(0,d.jsx)(Qt,{ref:Q,minimized:re,children:(0,d.jsx)(vt,{uid:(null===s||void 0===s?void 0:s.uid)||"",selectedNotesText:ce,noteTitles:pe,notesCount:q.length,clearSelectedNotes:de})}),(0,d.jsx)(Gt,{minimized:re,setMinimized:oe})]})})},Zt=r.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Qt=r.Ay.div`
  flex: ${e=>{let{minimized:t}=e;return t?"0":"1"}};
  width: ${e=>{let{minimized:t}=e;return t?"0":"auto"}};
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
`,en=r.Ay.div`
  flex: ${e=>{let{minimized:t}=e;return t?"0 0 0":"1.5"}};
  width: ${e=>{let{minimized:t}=e;return t?"0":"auto"}};
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
`}}]);
//# sourceMappingURL=dashboard.294972f5.chunk.js.map