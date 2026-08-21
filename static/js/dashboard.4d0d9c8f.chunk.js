"use strict";(globalThis.webpackChunkmavis_ai_web||=[]).push([[945],{1267(e,t,n){n.r(t),n.d(t,{default:()=>Gt});var i=n(5043),r=n(4138),o=n(1009),a=n(7246),s=n(4960),l=n(7149),d=n(579);const c=e=>{let{selectedTag:t,selectedDate:n,searchContent:i,onSearchChange:r,onDateChange:c,onAddNote:m,onCopyAllNotes:f,selectedCount:b,onSelectAll:y,onClearAll:w,expanded:v,panelWidth:k,minimized:j,setMinimized:C}=e;const S=v?188:52;return(0,d.jsxs)(p,{explorerWidth:S,barWidth:k,minimized:j,children:[(0,d.jsx)(g,{children:j?"Explorer":""===i.trim()?t.charAt(0).toUpperCase()+t.slice(1):"Search"}),!j&&(0,d.jsxs)(d.Fragment,{children:["journal"===t&&(0,d.jsx)(u,{children:(0,d.jsx)("input",{title:"Select date",type:"date",value:n,onChange:c})}),(0,d.jsxs)(x,{children:[(0,d.jsx)("input",{placeholder:"Search",value:i,onChange:e=>r(e.target.value)}),(0,d.jsx)(a.K,{title:"Clear search",onClick:()=>r(""),children:(0,d.jsx)(l.rOP,{})})]})]}),(0,d.jsxs)(h,{children:[!j&&(0,d.jsxs)(d.Fragment,{children:[b>0?(0,d.jsx)(a.K,{title:"Clear all notes",onClick:w,children:(0,d.jsx)(o.TG1,{})}):(0,d.jsx)(a.K,{title:"Select all visible notes",onClick:y,children:(0,d.jsx)(o.NLe,{})}),(0,d.jsx)(a.K,{title:"Copy all visible notes",onClick:f,children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Add note",onClick:m,children:(0,d.jsx)(s.n4h,{})})]}),(0,d.jsx)(a.K,{title:j?"Restore notes panel":"Minimize notes panel",onClick:()=>C(!0),children:j?(0,d.jsx)(o.mkN,{}):(0,d.jsx)(o.prK,{})})]})]})},p=r.Ay.div`
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
`;var m=n(2815),f=n(4966),b=n(2127);const y=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},w=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},v=e=>{if(!y(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))};var k=n(8222),j=n.n(k),C=n(2471),S=n(1286);const A=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),T=e=>{const t=(0,C.H9)(S.OO,"users",e);return(0,C.rJ)(t,"entries")},N=async(e,t)=>{const n=T(e);return(await(0,C.GG)((0,C.P)(n,(0,C._M)("id","==",t)))).docs};var M=n(6625),z=n(7950);const $=e=>{let{children:t}=e;const n=document.getElementById("header-portal");return n?(0,z.createPortal)(t,n):null},E={title:"",type:"record",tags:[],text:"",color:"#fff",locked:!1,pinned:!1,collapsed:!1},D=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],O=e=>e.replace(/\b\w/g,e=>e.toUpperCase());var P=n(5561),L=n(5263);const K=e=>{let{systemTags:t,customTags:n,selectedTag:i,setSelectedTag:r,explorerExpanded:s,setExplorerExpanded:l,minimized:c,setMinimized:p}=e;const u=e=>e.replace(/\b\w/g,e=>e.toUpperCase());return(0,d.jsxs)(I,{expanded:s,children:[(0,d.jsxs)(a.K,{expanded:s,title:"Menu",onClick:()=>l(!s),children:[(0,d.jsx)(o.ND1,{}),s&&(0,d.jsx)("span",{children:"Menu"})]}),c&&(0,d.jsxs)(a.K,{expanded:s,title:"Expand Notes Explorer",onClick:()=>p(!c),children:[(0,d.jsx)(L.$ZN,{}),s&&(0,d.jsx)("span",{children:"Expand Notes Explorer"})]}),t.filter(e=>"top"===e.position).map(e=>{const t=e.icon;return(0,d.jsxs)(a.K,{expanded:s,selected:i===e.name,title:e.name,onClick:()=>r(e.name),children:[(0,d.jsx)(t,{}),s&&(0,d.jsx)("span",{children:u(e.name)})]},e.name)}),n.map(e=>(0,d.jsxs)(a.K,{expanded:s,selected:i===e,title:u(e),onClick:()=>r(e),children:[(0,d.jsx)(o.cnX,{}),s&&(0,d.jsx)("span",{children:u(e)})]},e)),t.filter(e=>"bottom"===e.position).map(e=>{const t=e.icon;return(0,d.jsxs)(a.K,{expanded:s,selected:i===e.name,title:e.name,onClick:()=>r(e.name),children:[(0,d.jsx)(t,{}),s&&(0,d.jsx)("span",{children:u(e.name)})]},e.name)})]})},I=r.Ay.div`
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
`;var R=n(5369);const F=e=>{let{title:t,locked:n,collapsed:i,speaking:r,isFavorite:l,selected:c,onToggleSelection:p,speak:u,stopSpeaking:g,copyFormattedContent:x,onToggleFavorite:h,onToggleLock:m,onToggleCollapse:f,onTitleChange:b}=e;return(0,d.jsxs)(U,{children:[(0,d.jsxs)(J,{children:[(0,d.jsx)(H,{title:c?"Unselect note":"Select note",onClick:p,children:c?"\u2713":""}),l?(0,d.jsx)(a.K,{disabled:n,title:"Remove favorite",onClick:h,children:(0,d.jsx)(R.gt3,{})}):(0,d.jsx)(a.K,{disabled:n,title:"Add favorite",onClick:h,children:(0,d.jsx)(o.usP,{})}),(0,d.jsx)(B,{title:"Note name",role:"textbox",contentEditable:!n,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>b(e.currentTarget.innerText),children:t})]}),(0,d.jsxs)(G,{children:[r?(0,d.jsx)(a.K,{title:"Stop hearing note",onClick:g,children:(0,d.jsx)(o.cKW,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Hear note",onClick:u,children:(0,d.jsx)(o.o77,{})}),(0,d.jsx)(a.K,{title:"Copy note",onClick:x,children:(0,d.jsx)(o.nxz,{})}),n?(0,d.jsx)(a.K,{title:"Unlock note",onClick:m,children:(0,d.jsx)(o.F5$,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Lock note",onClick:m,children:(0,d.jsx)(o.K4k,{})}),i?(0,d.jsx)(a.K,{title:"Expand note",onClick:f,children:(0,d.jsx)(s.BSQ,{})}):(0,d.jsx)(a.K,{title:"Collapse note",onClick:f,children:(0,d.jsx)(s.q2p,{})})]})]})},H=r.Ay.span`
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
`,U=r.Ay.header`
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
`,J=r.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  margin: 0;
  padding: 0;

  color: black;
`,B=r.Ay.span`
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
`,G=r.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`;var W=n(7996),_=n(4993),q=n(3859),Y=n(6801),V=n(7353),X=n(285),Z=n(578),Q=n(8550),ee=n(3596),te=n(5312),ne=n.n(te);const ie=e=>{let{label:t,expression:n,onExecute:i}=e;return(0,d.jsx)("button",{className:"markdownButton",onClick:()=>i(n),children:t})},re=e=>{let{value:t,locked:n,editing:i,textareaRef:r,markdownRef:o,setValue:a,setEditing:s,onSave:l,onMarkdownClick:c,processMarkdown:p,onExecuteExpression:u}=e;return i?(0,d.jsx)(ae,{ref:r,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:t||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,a(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)&&(l(),s(!1))}}):(0,d.jsx)(oe,{ref:o,onClick:e=>{if(n)return;const t=e.target;c(t.innerText||t.textContent||"")},children:(0,d.jsx)(W.oz,{rehypePlugins:[_.A],components:{button(e){var t,n,i;const r=decodeURIComponent(String(null!==(t=null===(n=e.node)||void 0===n||null===(i=n.properties)||void 0===i?void 0:i.dataExpression)&&void 0!==t?t:""));return(0,d.jsx)(ie,{label:String(e.children),expression:r,onExecute:u})}},remarkPlugins:[[V.A,{padSpaceAfter:!1,emoticon:!0}],[Q.A,{tight:!0,ordered:!0}],[q.A,{stringLength:ne()}],X.A,Z.A,ee.A,Y.A],children:p(t||"* \u2753 What do you have for today?")})})},oe=r.Ay.div`
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
`,ae=r.Ay.textarea`
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
`;var se=n(5922);const le=e=>{let{colors:t,onColorClicked:n}=e;return(0,z.createPortal)((0,d.jsx)(de,{onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:t.map(e=>(0,d.jsxs)(ce,{onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)},children:[(0,d.jsx)(pe,{color:e}),(0,d.jsx)(ue,{children:e})]},e))}),document.body)},de=r.Ay.div`
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
`,ce=r.Ay.button`
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
`,pe=r.Ay.div`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  background: ${e=>{let{color:t}=e;return t}};

  border: 1px solid rgba(0, 0, 0, 0.15);

  flex-shrink: 0;
`,ue=r.Ay.span`
  font-size: 12px;
  font-weight: 600;

  color: #444;
`,ge=e=>{let{options:t,onPicked:n}=e;return(0,z.createPortal)((0,d.jsx)(xe,{onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:t.map((e,t)=>(0,d.jsx)(he,{onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)},children:(0,d.jsx)(me,{children:(0,d.jsx)(fe,{children:e.title})})},t))}),document.body)},xe=r.Ay.div`
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
`,he=r.Ay.button`
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
`,me=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  min-width: 0;
`,fe=r.Ay.span`
  color: #444;

  font-size: 12px;
  font-weight: 600;

  line-height: 1.3;
`,be=e=>{let{isLocked:t,listening:n,aiLoading:i,isArchived:r,isTrash:s,showColorPicker:c,showTemplatePicker:p,colorPickerRef:u,templatePickerRef:g,noteColors:x,templateOptions:h,startListening:m,stopListening:f,undoLastChange:b,handleAI:y,archiveNote:w,trashNote:v,setShowColorPicker:k,setShowTemplatePicker:j,onColorSelected:C,onTemplateSelected:S}=e;return(0,d.jsxs)(ye,{children:[(0,d.jsxs)(we,{children:[(0,d.jsx)(a.K,{disabled:t,title:"Change note background color",onClick:()=>k(e=>!e),children:(0,d.jsx)(l.$di,{})}),(0,d.jsx)(a.K,{disabled:t,title:"Load template",onClick:()=>j(e=>!e),children:(0,d.jsx)(o.MRc,{})}),(0,d.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"AI assistant",onMouseDown:e=>e.preventDefault(),onClick:y,children:(0,d.jsx)(o.Ojn,{color:i?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"Revert last change",onMouseDown:e=>e.preventDefault(),onClick:b,children:(0,d.jsx)(o.cO3,{})}),n?(0,d.jsx)(a.K,{disabled:t,title:"Stop listening",onClick:f,children:(0,d.jsx)(o.kGk,{color:"#2563eb"})}):(0,d.jsx)(a.K,{disabled:t,title:"Listen note",onClick:m,children:(0,d.jsx)(o.Rrl,{})}),(0,d.jsx)(se.iJU,{}),(0,d.jsx)(a.K,{disabled:t,title:r?"Unarchive note":"Archive note",onClick:w,children:(0,d.jsx)(o.OZ2,{color:r?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:t,title:s?"Delete permanently":"Move to trash",onClick:v,children:(0,d.jsx)(o.IXo,{color:s?"#dc2626":void 0})})]}),c&&(0,d.jsx)(ve,{ref:u,children:(0,d.jsx)(le,{colors:x,onColorClicked:C})}),p&&(0,d.jsx)(ke,{ref:g,children:(0,d.jsx)(ge,{options:h,onPicked:S})})]})},ye=r.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 0 0;
`,we=r.Ay.span`
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
`,ve=r.Ay.div`
  position: relative;
  width: 100%;
`,ke=r.Ay.div`
  position: relative;
  width: 100%;
`,je=e=>{let{date:t,tags:n,availableTags:r,isLocked:a,tagPickerRef:l,showTagPicker:c,creatingTag:p,newTagName:u,setShowTagPicker:g,setCreatingTag:x,setNewTagName:h,onDateChange:m,hasTag:f,toggleTag:b,createTag:y,formatTag:w,formatDate:v}=e;const k=i.useRef(null);return(0,d.jsxs)(Ce,{children:[(0,d.jsxs)(Ae,{children:[(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Se,{onClick:()=>{var e,t,n;null===(e=k.current)||void 0===e||null===(t=e.showPicker)||void 0===t||t.call(e),null===(n=k.current)||void 0===n||n.click()},children:v(t)}),(0,d.jsx)("input",{ref:k,type:"date",value:t,style:{display:"none"},onChange:e=>m(e.target.value)})]}),n.map(e=>(0,d.jsx)(Te,{onClick:()=>!a&&b(e),children:w(e)},e))]}),(0,d.jsxs)(Ne,{ref:l,children:[!a&&(0,d.jsx)(Me,{onClick:()=>g(!c),children:(0,d.jsx)(s.n4h,{})}),c&&(0,z.createPortal)((0,d.jsxs)(ze,{children:[r.map(e=>(0,d.jsxs)($e,{className:f(e)?"selected":"",onClick:()=>b(e),children:[(0,d.jsx)(o.cnX,{}),(0,d.jsx)("span",{children:w(e)})]},e)),p?(0,d.jsx)(De,{autoFocus:!0,placeholder:"Tag name...",value:u,onChange:e=>h(e.target.value),onKeyDown:e=>{"Enter"===e.key&&y(u),"Escape"===e.key&&(x(!1),h(""))},onBlur:()=>{u.trim()?y(u):x(!1)}}):(0,d.jsxs)(Ee,{onClick:()=>x(!0),children:[(0,d.jsx)(o.cnX,{}),"New Tag"]})]}),document.body)]})]})},Ce=r.Ay.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row !important;
  justify-content: flex-start !important;
  gap: 8px;
`,Se=r.Ay.span`
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
`,Ae=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  gap: 6px;
  width: fit-content;
  margin-left: 10px;
`,Te=r.Ay.span`
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
`,Ne=r.Ay.div`
  position: relative;
  flex: 0 0;
  width: fit-content;
  margin: 0;
`,Me=r.Ay.span`
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
`,ze=r.Ay.div`
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
`,$e=r.Ay.span`
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
`,Ee=r.Ay.span`
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
`,De=r.Ay.input`
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
`;function Oe(){const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(""),o=(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return void console.warn("SpeechRecognition API not supported");const n=new e;n.lang="pt-BR",n.continuous=!0,n.interimResults=!0,n.onresult=e=>{let t="";for(let n=0;n<e.results.length;n++)t+=e.results[n][0].transcript;r(t)},n.onend=()=>{t(!1)},o.current=n},[]);return{listening:e,transcript:n,startListening:()=>{var e;null===(e=o.current)||void 0===e||e.start(),t(!0)},stopListening:()=>{var e;null===(e=o.current)||void 0===e||e.stop(),t(!1)}}}function Pe(){const[e,t]=(0,i.useState)(!1);return{speak:function(e){const n=function(e){return function(e){return e.replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/#+\s/g,"").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/[_~]/g,"").replace(/\n+/g,". ").trim()}(e).replace(/[^\p{L}\p{N}\s]/gu," ").replace(/\s+/g," ").trim()}(e),i=new SpeechSynthesisUtterance(n),r=function(e){return/[\xe3\xf5\xe1\xe0\xe2\xe9\xea\xed\xf3\xf4\xfa\xe7]/i.test(e)?"pt-BR":"en-US"}(n),o=speechSynthesis.getVoices().find(e=>e.lang.startsWith(r));o&&(i.voice=o),i.lang=r,i.onstart=()=>t(!0),i.onend=()=>t(!1),speechSynthesis.speak(i)},stopSpeaking:()=>{speechSynthesis.cancel(),t(!1)},speaking:e}}const Le=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},Ke=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const r=new Date;return(e=e.replace(/@date\b/g,()=>r.toLocaleDateString()).replace(/@time\b/g,()=>r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>r.toLocaleString()).replace(/@dayofweek\b/g,()=>r.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(r.getMonth()+1)).replace(/@monthname\b/g,()=>r.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(r.getFullYear())).replace(/@today\b/g,()=>r.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const i=Number(t),r=Number(n);return i&&r?(i/(r*r)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-r.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const i=Math.max(-1,Math.min(1,Number(n))),r=t.isMobile?5:10,o=Math.abs(i),a=`${Math.round(100*i)}%`,s=Math.round(o*r);let l=i>=0?"\u2588".repeat(s)+"\u2591".repeat(r-s):"\u2591".repeat(r-s)+"\u2588".repeat(s);const d=Math.max(0,Math.floor((r-a.length)/2));return l.slice(0,d)+a+l.slice(d+a.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&i<5?Ke(e,t,n,i+1):e},Ie=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,Re=(e,t)=>{const n={};e.replace(Ie,(e,t,i)=>(n[t]=i.trim(),""));let i=!0;for(;i;){i=!1;for(const[e,r]of Object.entries(n)){if(!r.includes("@"))continue;const o=Ke(Fe(r,n),Le({...t,...n}));o!==r&&(n[e]=o,i=!0)}}return n},Fe=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var i;return null!==(i=t[n])&&void 0!==i?i:""}),He=(e,t,n)=>{const i=Re(e),r=Le({...t,...Object.fromEntries(Object.entries(i).map(e=>{let[t,n]=e;if(""===n)return[t,""];const i=Number(n);return[t,Number.isNaN(i)?n:i]}))});return Ke(Fe((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),i),r,n)};function Ue(){const[e,t]=(0,i.useState)(""),[n,r]=(0,i.useState)(""),[o,a]=(0,i.useState)({city:"",country:""});return(0,i.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async n=>{let{coords:i}=n;try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${i.latitude}&longitude=${i.longitude}&current=temperature_2m,weather_code`),n=await t.json();let d="",c="";try{var r,o,a,s;const e=await fetch(`https://geocode.maps.co/reverse?lat=${i.latitude}&lon=${i.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();d=(null===(r=t.address)||void 0===r?void 0:r.city)||(null===(o=t.address)||void 0===o?void 0:o.town)||(null===(a=t.address)||void 0===a?void 0:a.village)||"",c=(null===(s=t.address)||void 0===s?void 0:s.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(n.current.temperature_2m)}\xb0C`,weather:(l=n.current.weather_code,0===l?"\u2600\ufe0f Sunny":[1,2].includes(l)?"\ud83c\udf24\ufe0f Partly Cloudy":3===l?"\u2601\ufe0f Cloudy":[45,48].includes(l)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(l)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(l)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(l)?"\u2744\ufe0f Snowing":[80,81,82].includes(l)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(l)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:d,country:c})}catch(d){t(d)}var l}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),r(e.weather),a({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:o}}var Je=n(503);const Be=new TextEncoder,Ge=new TextDecoder;function We(e){const t=new Uint8Array(e);let n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return btoa(n)}function _e(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function qe(e,t){const n=await crypto.subtle.importKey("raw",Be.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function Ye(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),i=crypto.getRandomValues(new Uint8Array(16)),r=await qe(t,i);return{encrypted:We(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},r,Be.encode(e))),iv:We(n),salt:We(i)}}(t,e);await(0,C.BN)((0,C.H9)(S.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function Ve(e){const t=await(0,C.x7)((0,C.H9)(S.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,i){const r=await qe(i,_e(n)),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:_e(t)},r,_e(e));return Ge.decode(o)}(n.encryptedApiKey,n.iv,n.salt,e)}async function Xe(e,t,n,i,r,o){console.log(r);const a=o||await Ve(e);if(!a)throw new Error("OpenAI API Key not configured.");const s=new Je.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),l=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${i}\n`;return await s.responses.create({model:r||"gpt-5.6-luna",input:l})}const Ze="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const Qe=e=>{let{id:t,date:n,content:r,onDeleteCard:o,onChangeContent:a,onChangeDate:s,tags:l,selected:c,onToggleSelection:p,templateOptions:u}=e;const{listening:g,transcript:x,startListening:h,stopListening:m}=Oe(),{speak:f,speaking:b,stopSpeaking:v}=Pe(),[k,j]=i.useState(!1),[C,S]=i.useState(!1),[A,T]=i.useState(!1),N=i.useRef(null),z=i.useRef(null),$=i.useRef(null),P=i.useRef(null),L=i.useRef(null),[K,I]=i.useState(window.innerWidth<1260),{user:R}=(0,M.o)(),{temperature:H,weather:U,location:J}=Ue(),{setCursorPosition:B,findBestCursorPosition:G}=function(e){let{editing:t,textareaRef:n}=e;const[r,o]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(!t||!n.current||null===r)return;const e=n.current;e.focus(),e.setSelectionRange(r,r),requestAnimationFrame(()=>{const t=document.createElement("div"),n=window.getComputedStyle(e);t.style.position="absolute",t.style.visibility="hidden",t.style.whiteSpace="pre-wrap",t.style.wordWrap="break-word",t.style.font=n.font,t.style.lineHeight=n.lineHeight,t.style.padding=n.padding,t.style.width=`${e.clientWidth}px`,t.textContent=e.value.substring(0,r),document.body.appendChild(t);const i=t.offsetHeight;document.body.removeChild(t);const o=e.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:o+i-window.innerHeight/2,behavior:"smooth"})})},[t,r,n]),{cursorPosition:r,setCursorPosition:o,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const i=n.split(" ");for(let r=Math.min(i.length,8);r>=2;r--)for(let e=0;e<=i.length-r;e++){const n=i.slice(e,e+r).join(" "),o=t.indexOf(n);if(o>=0)return o}for(const r of i){if(r.length<4)continue;const e=t.indexOf(r);if(e>=0)return e}return t.length}}}({editing:k,textareaRef:N});i.useEffect(()=>{const e=()=>{I(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const W=i.useMemo(()=>((e,t)=>{const n=t(e)?JSON.parse(e):{...E,text:e};return{...E,...n,tags:Array.from(new Set([...n.tags||[]]))}})(r,y),[r]),{showTagPicker:_,creatingTag:q,newTagName:Y,setShowTagPicker:V,setCreatingTag:X,setNewTagName:Z,hasTag:Q,toggleTag:ee,createTag:te}=function(e){let{tags:t,onTagsChange:n}=e;const[r,o]=(0,i.useState)(!1),[a,s]=(0,i.useState)(!1),[l,d]=(0,i.useState)(""),c=e=>t.includes(e),p=e=>{console.log("current tags",t);const i=Array.from(new Set(c(e)?t.filter(t=>t!==e):[...t,e]));console.log("updated tags",i),n(i)};return{showTagPicker:r,creatingTag:a,newTagName:l,setShowTagPicker:o,setCreatingTag:s,setNewTagName:d,hasTag:c,toggleTag:p,createTag:e=>{const t=e.trim().toLowerCase();t&&(p(t),d(""),s(!1))}}}({tags:W.tags,onTagsChange:e=>{a(t,JSON.stringify({...W,tags:e}))}}),[ne,ie]=i.useState(W.text||""),[oe,ae]=i.useState([]),se=i.useCallback(e=>{ae(t=>t[t.length-1]===e?t:[...t,e])},[]),{aiLoading:le,handleAI:de}=function(e){let{userId:t,value:n,textareaRef:r,pushHistory:o,onContentChange:a}=e;const[s,l]=(0,i.useState)(!1);return{aiLoading:s,handleAI:async()=>{if(!t)return void alert("User not authenticated");let e=await Ve(t);if(!e){var i;if(e=(null===(i=window.prompt("OpenAI API Key not configured.\n\nEnter your OpenAI API Key:"))||void 0===i?void 0:i.trim())||"",!e)return;await Ye(t,e)}const s=window.prompt("Examples:\n\nFix grammar\nSummarize\nRewrite professionally\nTranslate to Portuguese");if(null!==s&&void 0!==s&&s.trim()){l(!0);try{o(n);const i=r.current;if(i&&i.selectionStart!==i.selectionEnd){const r=i.selectionStart,o=i.selectionEnd,l=n.substring(r,o),d=await Xe(t,Ze,s,l,"gpt-5.6-luna",e),c=n.substring(0,r)+d.output_text.trim()+n.substring(o);return void a(c)}const l=await Xe(t,Ze,s,n,"gpt-5.6-luna",e),d=`${n}\n\n${l.output_text.trim()}`;a(d)}catch(d){console.error(d),alert(d instanceof Error?d.message:"AI request failed")}finally{l(!1)}}}}}({userId:null===R||void 0===R?void 0:R.uid,value:ne,textareaRef:N,pushHistory:se,onContentChange:e=>{ie(e),a(t,JSON.stringify({...W,text:e}))}}),ce=()=>{if(Q("trash"))return void o(t,!0);const e=(e=>Array.from(new Set([...e.filter(e=>"archive"!==e),"trash"])))(W.tags);a(t,JSON.stringify({...W,tags:e}))},pe=e=>Q("templates")?e:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/week\b/g,()=>{const e=new Date(n.getFullYear(),0,1),t=Math.ceil(((n.getTime()-e.getTime())/864e5+e.getDay()+1)/7);return String(t)}).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const i=Number(t),r=Number(n);return String(Math.floor(Math.random()*(r-i+1))+i)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",i=Number(t);return Array.from({length:i},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const i=new Date(t);let r=n.getFullYear()-i.getFullYear();const o=n.getMonth()-i.getMonth();return(o<0||0===o&&n.getDate()<i.getDate())&&r--,String(r)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const i=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(i/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})}(e,{weather:U,temperature:H,city:J.city,country:J.country});i.useEffect(()=>{if(!g&&x){se(ne);const e=ne+x;a(t,JSON.stringify({...W,text:e})),ie(e)}},[g,x,ne,t,W,se,a]);const ue=W.locked;return(0,d.jsx)(et,{selected:c,children:(0,d.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:W.color||"#eee"},children:[(0,d.jsx)(F,{title:W.title,locked:W.locked,collapsed:W.collapsed,selected:c,onToggleSelection:()=>p(t),speaking:b,isFavorite:Q("favorite"),speak:()=>f(ne),stopSpeaking:v,copyFormattedContent:async()=>{if(!z.current)return;const e=z.current.innerHTML,t=z.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>ee("favorite"),onToggleLock:()=>a(t,JSON.stringify({...W,locked:!W.locked})),onToggleCollapse:()=>a(t,JSON.stringify({...W,collapsed:!W.collapsed})),onTitleChange:e=>a(t,JSON.stringify({...W,title:pe(e)}))}),W.collapsed?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(re,{value:ne,locked:W.locked,editing:k,textareaRef:N,markdownRef:z,setValue:ie,setEditing:j,processMarkdown:e=>He(e,{temperature:H,weather:U,city:J.city,country:J.country},K),onExecuteExpression:e=>{se(ne);const n=((e,t,n)=>{const i=t.match(/^\$\{(\w+)\}=(.*)$/);if(!i)return e;const r=i[1];let o=i[2];const a=Re(e);o=Ke(o,Le({...n,...a})),o=o.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=a[t])&&void 0!==n?n:"")});const s="${"+r+"}="+Function(`return (${o})`)(),l=new RegExp(`^\\$\\{${r}\\}\\s*=([^\\r\\n]*)`,"m");return l.test(e)?e.replace(l,s):e.trimEnd()+"\n"+s})(ne,e,{temperature:H,weather:U,city:J.city,country:J.country});ie(n),a(t,JSON.stringify({...W,text:n}))},onSave:()=>((e,t)=>{const n=pe(t);a(e,JSON.stringify({...W,text:n})),ie(n)})(t,ne),onMarkdownClick:e=>{se(ne);const t=G(e,ne);B(t),j(!0)}}),(0,d.jsx)("footer",{className:"footer",children:(0,d.jsxs)("span",{className:"footbox",children:[(0,d.jsx)(je,{date:n,tags:W.tags,availableTags:l,isLocked:ue,tagPickerRef:$,showTagPicker:_,creatingTag:q,newTagName:Y,setShowTagPicker:V,setCreatingTag:X,setNewTagName:Z,onDateChange:e=>s(t,e),hasTag:Q,toggleTag:ee,createTag:te,formatTag:O,formatDate:w}),(0,d.jsx)(be,{isLocked:ue,listening:g,aiLoading:le,isArchived:Q("archive"),isTrash:Q("trash"),showColorPicker:C,showTemplatePicker:A,colorPickerRef:P,templatePickerRef:L,noteColors:D,templateOptions:u,startListening:()=>{W.locked||h()},stopListening:m,undoLastChange:()=>{const e=oe[oe.length-1];e&&(ae(e=>e.slice(0,-1)),ie(e),a(t,JSON.stringify({...W,text:e})))},handleAI:()=>{W.locked||de()},archiveNote:()=>{W.locked||(()=>{const e=(e=>e.includes("archive")?e.filter(e=>"archive"!==e):[...e.filter(e=>"trash"!==e),"archive"])(W.tags);a(t,JSON.stringify({...W,tags:e}))})()},trashNote:()=>{W.locked||ce()},setShowColorPicker:S,setShowTemplatePicker:T,onColorSelected:e=>{a(t,JSON.stringify({...W,color:e})),S(!1)},onTemplateSelected:e=>{se(ne);let n=e.text.replace(/\\\$\{/g,"${");if(n=pe(n),!W.locked){const i=Array.from(new Set([...W.tags||[],...e.tags||[]]));a(t,JSON.stringify({...W,collapsed:!1,color:e.color,text:n,title:pe(e.title),tags:i})),ie(n)}}})]})})]})]})},t)},et=r.Ay.div`
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

`,tt=e=>{let{entries:t,pickerTags:n,cardRefs:i,onHoverCard:r,onDeleteEntry:o,onChangeEntry:a,updateEntryDate:s,selectedNoteIds:l,onToggleSelection:c,templateOptions:p}=e;return(0,d.jsx)(nt,{children:t.map((e,t)=>(0,d.jsx)("div",{ref:t=>{i.current[e.id]=t},onMouseEnter:()=>r(e.id),onMouseLeave:()=>r(null),children:(0,d.jsx)(Qe,{id:e.id,date:e.date,number:t+1,content:e.content,onDeleteCard:o,onChangeContent:a,onChangeDate:s,tags:n,selected:l.includes(e.id),onToggleSelection:c,templateOptions:p})},e.id))})},nt=r.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`,it=e=>{try{return JSON.parse(e).color||"#cccccc"}catch{return"#cccccc"}},rt=e=>{let{entries:t,hoveredCardId:n,cardHeights:i,totalHeight:r,onScrollToCard:s}=e;return(0,d.jsx)(ot,{children:t.map(e=>(0,d.jsxs)(at,{$selected:n===e.id,style:{backgroundColor:it(e.content),height:`${Math.max((i[e.id]||40)/Math.max(r,1)*100,24)}px`},children:[(0,d.jsx)(a.K,{title:"Go to note top",onClick:()=>s(e.id,"top"),children:(0,d.jsx)(o.wAb,{})}),(0,d.jsx)(a.K,{title:"Go to note bottom",onClick:()=>s(e.id,"bottom"),children:(0,d.jsx)(o.fK4,{})})]},e.id))})},ot=r.Ay.div`
  padding-top: 20px;
  width: 60px;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;
  background: #d0d0d0;
`,at=r.Ay.div`
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
`,st=e=>{const t=(0,C.H9)(S.OO,"users",e);return(0,C.rJ)(t,"chatSessions")},lt=async(e,t)=>{const n=st(e);return(await(0,C.GG)((0,C.P)(n,(0,C._M)("id","==",t)))).docs};const dt=(0,i.createContext)(void 0),ct="You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.",pt=e=>{let{uid:t,selectedNotesText:n,noteTitles:r,clearSelectedNotes:o,entries:a}=e;const[s,l]=(0,i.useState)(""),[d,c]=(0,i.useState)([]),[p,u]=(0,i.useState)([]),{sessions:g,fetchSessions:x,createSession:h,updateSession:m,deleteSession:f}=function(e){const[t,n]=i.useState([]),r=i.useCallback(async()=>{if(!e)return;const t=(await(0,C.GG)(st(e))).docs.map(e=>e.data());n((e=>[...e].sort((e,t)=>e.updatedAt>t.updatedAt?-1:e.updatedAt<t.updatedAt?1:0))(t))},[e]),o=i.useCallback(async t=>{if(!e)return null;const i={id:j()(),title:"New Chat",createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString(),model:t,selectedPromptIds:[],messages:[]};return n(e=>[i,...e]),await(0,C.gS)(st(e),i),i},[e]),a=i.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const i=await lt(e,t.id);await Promise.all(i.map(n=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/chatSessions/${n.id}`),t)))},[e]),s=i.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const i=await lt(e,t);await Promise.all(i.map(t=>(0,C.kd)((0,C.H9)(S.OO,`users/${e}/chatSessions/${t.id}`))))},[e]);return{sessions:t,setSessions:n,fetchSessions:r,createSession:o,updateSession:a,deleteSession:s}}(t),[b,y]=(0,i.useState)(!1),[w,v]=(0,i.useState)(null),[k,A]=(0,i.useState)(!1),[T,N]=(0,i.useState)("gpt-5.6-luna"),[M,z]=(0,i.useState)(!0),$=(0,i.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),E=(0,i.useCallback)(async()=>{const e=await h(T);e&&(c([]),v(e.id),u([]))},[h,T]);(0,i.useEffect)(()=>{b&&(g.length>0||E())},[b,g,E]),(0,i.useEffect)(()=>{(async()=>{await x(),y(!0)})()},[x]);const D=(0,i.useCallback)(async e=>{if(!w)return;const t=g.find(e=>e.id===w);if(!t)return;const n=d.includes(e)?d.filter(t=>t!==e):[...d,e];c(n),await m({...t,selectedPromptIds:n,updatedAt:(new Date).toISOString()})},[w,d,g,m]),O=(0,i.useMemo)(()=>a.filter(e=>d.includes(e.id)).map(e=>{try{return JSON.parse(e.content).text||""}catch{return""}}).join("\n\n"),[a,d]),P=(0,i.useCallback)(e=>{const t=g.find(t=>t.id===e);t&&(c(t.selectedPromptIds||[]),v(e),u(t.messages),N(t.model))},[g]);(0,i.useEffect)(()=>{0!==g.length&&(w||P(g[0].id))},[g,w,P]);const L=(0,i.useMemo)(()=>a.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[a]),K=(0,i.useCallback)(async()=>{const e=s.trim();if(!e||k)return;if(!t)return void u(e=>[...e,{id:j()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const i=r.length>0?`Notes:\n${r.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",a=$(p),d={id:j()(),role:"user",content:`${i}${e}`};u(t=>{const n=[...t,d],i=g.find(e=>e.id===w);return i&&m({...i,messages:n,updatedAt:(new Date).toISOString(),title:"New Chat"===i.title?e.substring(0,30):i.title}),n}),l(""),A(!0);const c=[];M&&a&&c.push(`History:\n${a}`),n.trim()&&c.push(`Context:\n${n}`);const x=c.join("\n\n");try{var h,f;const n=[ct,O].filter(Boolean),i=await Xe(t,n.join("\n\n"),e,x,T),r={id:j()(),role:"assistant",content:i.output_text.trim()||"No response was returned.",tokens:{input:(null===(h=i.usage)||void 0===h?void 0:h.input_tokens)||0,output:(null===(f=i.usage)||void 0===f?void 0:f.output_tokens)||0}};u(t=>{const n=[...t,r],i=g.find(e=>e.id===w);return i&&m({...i,messages:n,updatedAt:(new Date).toISOString(),title:"New Chat"===i.title?e.substring(0,30):i.title}),n}),o()}catch(b){console.error("Mavis error:",b);const e=b instanceof Error?b.message:"An unexpected error occurred.";u(t=>[...t,{id:j()(),role:"assistant",content:e}])}finally{A(!1)}},[s,k,t,r,n,T,p,M,$,o,g,w,m,O]),I=(0,i.useCallback)(async()=>{if(k||0===p.length)return;if(!t)return void u(e=>[...e,{id:j()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const e=$(p);A(!0);try{var n,i;const r=await Xe(t,`${ct}\n\n${O}`,"Summarize the entire conversation history into one comprehensive, self-contained message.\n\nInclude all important information from the conversation, especially:\n\n- Every requirement and specification\n- Every decision that was made\n- Every implementation detail\n- Every instruction and constraint\n- Important facts, dates, names, titles, values, and references\n- Code-related decisions, expected behavior, and affected files or components\n- Problems, errors, solutions, and changes that were discussed\n- Rejected alternatives and the reasons they were rejected\n- Open questions, unresolved issues, assumptions, and pending tasks\n- The current state of the work\n- Clear next steps, if any\n\nPreserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.\n\nWrite the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.",`Conversation history:\n${e}`,T),o={id:j()(),role:"assistant",content:r.output_text.trim()||"No summary was returned.",tokens:{input:(null===(n=r.usage)||void 0===n?void 0:n.input_tokens)||0,output:(null===(i=r.usage)||void 0===i?void 0:i.output_tokens)||0}};u([o]);const a=g.find(e=>e.id===w);a&&await m({...a,messages:[o],updatedAt:(new Date).toISOString()})}catch(r){console.error("Mavis summary error:",r);const e=r instanceof Error?r.message:"An unexpected error occurred.";u(t=>[...t,{id:j()(),role:"assistant",content:e}])}finally{A(!1)}},[k,p,t,$,T,w,g,m,O]),R=(0,i.useCallback)(async e=>{if(!w)return;const t=g.find(e=>e.id===w);if(!t)return;const n="all"===e?[]:t.messages.filter(t=>t.id!==e);u(n),await m({...t,messages:n,updatedAt:(new Date).toISOString()})},[w,g,m]),F=(0,i.useCallback)(async()=>{if(!w)return;const e=g.find(e=>e.id===w);e&&(u([]),await m({...e,messages:[],updatedAt:(new Date).toISOString()}))},[w,g,m]),H=(0,i.useCallback)(async e=>{if(await f(e),w===e){const t=g.filter(t=>t.id!==e);t.length>0?P(t[0].id):await E()}},[f,w,g,P,E]);return{prompt:s,setPrompt:l,selectedPromptIds:d,togglePrompt:D,availablePromptNotes:L,messages:p,isLoading:k,sessions:g,currentSessionId:w,createNewSession:E,loadSession:P,deleteSession:f,removeSession:H,sendPrompt:K,deleteMessage:R,clearMessages:F,summarizeHistory:I,selectedModel:T,setSelectedModel:N,includeHistory:M,setIncludeHistory:z}};function ut(e){let{children:t,uid:n,selectedNotesText:i,noteTitles:r,clearSelectedNotes:o,entries:a}=e;const s=pt({uid:n,selectedNotesText:i,noteTitles:r,clearSelectedNotes:o,entries:a});return(0,d.jsx)(dt.Provider,{value:s,children:t})}function gt(){const e=(0,i.useContext)(dt);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}const xt=["gpt-5-mini","gpt-5.6-luna","gpt-5.6-terra","gpt-5.6-sol"],ht=e=>{let{uid:t,selectedNotesText:n,noteTitles:r,notesCount:s,clearSelectedNotes:c}=e;const[p,u]=i.useState(!1),{listening:g,transcript:x,startListening:h,stopListening:m}=Oe(),{speak:b,speaking:y,stopSpeaking:w}=Pe(),{prompt:v,setPrompt:k,messages:j,isLoading:C,sendPrompt:S,deleteMessage:A,selectedModel:T,setSelectedModel:N,selectedPromptIds:M,availablePromptNotes:z,togglePrompt:$,includeHistory:E,setIncludeHistory:D,summarizeHistory:O}=gt(),[P,L]=i.useState(!1),[K,I]=i.useState(!1);i.useEffect(()=>{!g&&x&&k(e=>e.length>0?`${e} ${x}`:x)},[g,x,k]);return(0,d.jsxs)(jt,{children:[(0,d.jsxs)(Ct,{children:[j.map(e=>(0,d.jsxs)(mt,{role:e.role,children:[(0,d.jsx)(bt,{role:e.role,children:e.tokens&&(0,d.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,d.jsx)(St,{role:e.role,children:(0,d.jsx)(W.oz,{remarkPlugins:[q.A],children:e.content})}),(0,d.jsxs)(ft,{role:e.role,children:[(0,d.jsx)(a.K,{title:"Read message",onClick:()=>{return t=e.content,void(y?w():b(t));var t},children:y?(0,d.jsx)(o.TG1,{}):(0,d.jsx)(o.o77,{})}),(0,d.jsx)(a.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Delete message",onClick:()=>A(e.id),children:(0,d.jsx)(o.IXo,{})})]})]},e.id)),C&&(0,d.jsx)(St,{role:"assistant",children:"Thinking..."})]}),(0,d.jsx)(At,{expanded:p,children:(0,d.jsxs)(Tt,{children:[(0,d.jsxs)(wt,{children:[(0,d.jsxs)(Ot,{children:[(0,d.jsxs)(zt,{title:"Prompt presets",onClick:()=>I(!K),children:[(0,d.jsx)(f.vTI,{}),(0,d.jsxs)($t,{children:["Prompts (",M.length,")"]})]}),K&&(0,d.jsx)(Et,{children:z.map(e=>(0,d.jsxs)(Dt,{className:M.includes(e.id)?"selected":"",onClick:()=>{$(e.id)},children:[(0,d.jsx)(f.vTI,{}),(0,d.jsx)("span",{children:e.title})]},e.id))})]}),(0,d.jsxs)(Mt,{children:[(0,d.jsxs)(zt,{style:{margin:"0px !important"},title:"Selecionar modelo de IA",onClick:()=>{L(!P)},children:[(0,d.jsx)(o.Ojn,{}),(0,d.jsx)($t,{children:T})]}),P&&(0,d.jsx)(Et,{children:xt.map(e=>(0,d.jsxs)(Dt,{className:T===e?"selected":"",onClick:()=>{N(e),L(!1)},title:e,children:[(0,d.jsx)(o.Ojn,{}),(0,d.jsx)("span",{children:e})]},e))})]}),(0,d.jsxs)(vt,{children:["Notes: ",s]})]}),(0,d.jsxs)(yt,{children:[(0,d.jsx)(Nt,{expanded:p,value:v,placeholder:"Ask Mavis...",disabled:C,onChange:e=>k(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),S())}}),(0,d.jsxs)(kt,{children:[(0,d.jsx)(a.K,{title:"Summarize History",onClick:()=>{O()},children:(0,d.jsx)(l.Z1M,{})}),(0,d.jsx)(a.K,{title:"Include chat history in prompts",children:(0,d.jsx)(l.bfP,{color:E?"#2563eb":"#555",onClick:()=>D(!E)})}),(0,d.jsx)(a.K,{title:"Clear chat history",onClick:()=>{A("all")},children:(0,d.jsx)(f.U3h,{})}),g?(0,d.jsx)(a.K,{title:"Stop recording",onClick:m,children:(0,d.jsx)(o.TG1,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Voice input",onClick:h,children:(0,d.jsx)(o.Rrl,{})}),(0,d.jsx)(a.K,{title:p?"Collapse":"Expand",onClick:()=>u(e=>!e),children:p?(0,d.jsx)(o.eDi,{}):(0,d.jsx)(o.mkN,{})}),(0,d.jsx)(a.K,{title:"Copy input",onClick:()=>{(async()=>{v.trim()&&await navigator.clipboard.writeText(v)})()},disabled:!v.trim(),children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Send prompt",onClick:()=>{S()},disabled:C||!v.trim(),children:(0,d.jsx)(o.kGk,{})}),(0,d.jsx)(a.K,{title:"Clear input",onClick:()=>{k("")},disabled:!v.trim(),children:(0,d.jsx)(o.yGN,{})}),(0,d.jsx)(a.K,{title:"Clear selected notes",onClick:c,disabled:0===s,children:(0,d.jsx)(l.DnH,{})})]})]})]})})]})},mt=r.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
`,ft=r.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,bt=r.Ay.div`
  font-size: 10px;
  color: #555;
  margin-bottom: 2px;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  white-space: nowrap;
`,yt=r.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,wt=r.Ay.span`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,vt=r.Ay.span`
  font-size: 12px;
  color: #555;
`,kt=r.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,jt=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Ct=r.Ay.div`
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
`,St=r.Ay.div`
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
`,At=r.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;
  margin: 0;
  background: #e0e0e5;
  ${e=>{let{expanded:t}=e;return t&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}}
`,Tt=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #e0e0e5;
`,Nt=r.Ay.textarea`
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
`,Mt=r.Ay.div`
  padding: 0px;
  position: relative;
  width: auto;
`,zt=r.Ay.div`
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
`,$t=r.Ay.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Et=r.Ay.div`
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
`,Dt=r.Ay.span`
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
`,Ot=r.Ay.div`
  position: relative;
`,Pt=e=>{let{expanded:t,panelWidth:n,minimized:i,setMinimized:r,notesMinimized:s}=e;const l=t?188:52;return(0,d.jsxs)(Lt,{explorerWidth:l,notesMinimized:s,barWidth:n,minimized:i,children:[(0,d.jsxs)(Kt,{children:[(0,d.jsx)(o.Ojn,{}),"Chat"]}),(0,d.jsx)(It,{children:(0,d.jsx)(a.K,{title:"Minimize chat panel",onClick:()=>r(!0),children:(0,d.jsx)(o.prK,{})})})]})},Lt=r.Ay.div`
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
`,Kt=r.Ay.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`,It=r.Ay.div`
  display: flex;
  align-items: center;
  height: 35px;
`,Rt=e=>{let{minimized:t,setMinimized:n}=e;const[r,s]=i.useState(!1),{sessions:l,currentSessionId:c,createNewSession:p,loadSession:u,deleteSession:g,removeSession:x}=gt();return(0,d.jsxs)(Ft,{expanded:r,children:[(0,d.jsxs)(a.K,{expanded:r,title:"Menu",onClick:()=>s(!r),children:[(0,d.jsx)(o.ND1,{}),r&&(0,d.jsx)("span",{children:"Sessions"})]}),t&&(0,d.jsxs)(a.K,{expanded:r,title:"Expand Chat",onClick:()=>n(!t),children:[(0,d.jsx)(o.Ojn,{}),r&&(0,d.jsx)("span",{children:"Expand Chat"})]}),(0,d.jsxs)(a.K,{expanded:r,onClick:()=>{p()},children:[(0,d.jsx)(o.GGD,{}),r&&(0,d.jsx)("span",{children:"New Chat"})]}),(0,d.jsx)(Ht,{disabled:!r,children:l.map(e=>(0,d.jsxs)(Jt,{children:[(0,d.jsx)(Ut,{active:c===e.id,onClick:()=>u(e.id),children:e.title}),(0,d.jsx)(Bt,{onClick:t=>{t.stopPropagation(),g(e.id)},children:(0,d.jsx)(o.IXo,{size:12})})]},e.id))})]})},Ft=r.Ay.div`
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
`,Ht=r.Ay.div`
  display: ${e=>e.disabled?"none":"flex"};
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,Ut=r.Ay.div`
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
`,Jt=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Bt=r.Ay.button`
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
`,Gt=e=>{let{explorerExpanded:t,setExplorerExpanded:n}=e;const{selectedDate:r,setSelectedDate:a}=(0,P.M)(),{user:s}=(0,M.o)(),{entries:l,fetchEntries:p,addEntry:u,updateEntry:g,deleteEntry:x,updateEntryDate:h}=function(e){const[t,n]=i.useState([]),r=i.useCallback(async()=>{if(!e)return;const t=T(e),i=(await(0,C.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}});n(A(i))},[e]),o=i.useCallback(async t=>{let{content:i,date:r}=t;if(!e)return null;const o={uid:e,id:j()(),content:i,date:r,createdAt:(new Date).toISOString()};return n(e=>A([...e,o])),await(0,C.gS)(T(e),o),o},[e]),a=i.useCallback(async(i,r)=>{if(!e)return;const o=t.find(e=>e.id===i);if(!o)return;const a={...o,content:r};n(e=>A(e.map(e=>e.id===i?a:e)));const s=await N(e,i);await Promise.all(s.map(t=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/entries/${t.id}`),a)))},[t,e]),s=i.useCallback(async t=>{if(!e)return;n(e=>A(e.map(e=>e.id===t.id?t:e)));const i=await N(e,t.id);await Promise.all(i.map(n=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/entries/${n.id}`),t)))},[e]),l=i.useCallback(async(n,i)=>{if(!e)return;const r=t.find(e=>e.id===n);r&&await s({...r,date:i})},[t,s,e]),d=i.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const i=await N(e,t);await Promise.all(i.map(t=>(0,C.kd)((0,C.H9)(S.OO,`users/${e}/entries/${t.id}`))))},[e]);return{entries:t,setEntries:n,fetchEntries:r,addEntry:o,updateEntry:a,replaceEntry:s,deleteEntry:d,updateEntryDate:l}}((null===s||void 0===s?void 0:s.uid)||""),{searchContent:y,setSearchContent:w,selectedTag:k,setSelectedTag:z,systemTags:D,availableTags:O,pickerTags:L,visibleEntries:I}=function(e){const[t,n]=i.useState(""),[r,a]=i.useState("favorite"),s=i.useMemo(()=>[{name:"all",icon:o.Vap,system:!0,position:"top"},{name:"favorite",icon:o.usP,system:!0,position:"top"},{name:"journal",icon:b.Fsq,system:!0,position:"top"},{name:"templates",icon:o.MRc,system:!0,position:"top"},{name:"prompts",icon:f.vTI,system:!0,position:"top"},{name:"other",icon:m.uoj,system:!0,position:"top"},{name:"archive",icon:o.OZ2,system:!0,position:"bottom"},{name:"trash",icon:o.IXo,system:!0,position:"bottom"}],[]),l=i.useMemo(()=>s.map(e=>e.name),[s]),d=i.useMemo(()=>Array.from(new Set(e.flatMap(e=>v(e.content)))).filter(e=>!l.includes(e)).sort(),[e,l]),c=i.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...d])).sort(),[d]),p=i.useCallback(e=>{const n=v(e.content),i=n.includes("trash"),o=n.includes("archive"),a=n.includes("templates"),s=n.includes("prompts");return""!==t.trim()?e.content.toLowerCase().includes(t.toLowerCase()):"all"===r?!i&&!o:"favorite"===r?n.includes("favorite")&&!i&&!o:"journal"===r?n.includes("journal")&&!a&&!i&&!o:"templates"===r?a&&!i&&!o:"prompts"===r?s&&!i&&!o:"other"===r?!i&&!o&&!a&&!s&&!n.includes("journal"):"archive"===r?o&&!i:"trash"===r?i:n.includes(r)&&!i&&!o&&!a&&!s},[t,r]),u=i.useMemo(()=>e.filter(p),[e,p]);return{searchContent:t,setSearchContent:n,selectedTag:r,setSelectedTag:a,systemTags:s,availableTags:d,pickerTags:c,visibleEntries:u,isEntryVisible:p}}(l),{cardRefs:R,cardHeights:F,totalHeight:H}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=i.useRef({}),[n,r]=i.useState({}),o=i.useCallback(()=>{const e={};Object.entries(t.current).forEach(t=>{let[n,i]=t;i&&(e[n]=i.offsetHeight)}),r(e)},[]);i.useEffect(()=>{const e=new ResizeObserver(()=>{o()});return Object.values(t.current).forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[o]),i.useEffect(()=>{o()},[...e,o]);const a=i.useMemo(()=>Object.values(n).reduce((e,t)=>e+t,0),[n]);return{cardRefs:t,cardHeights:n,totalHeight:a,refreshCardHeights:o}}([l]),[U,J]=i.useState(null),[B,G]=i.useState([]),W=i.useRef(null),[_,q]=i.useState(0),Y=i.useRef(null),[V,X]=i.useState(0),[Z,Q]=i.useState(!1),[ee,te]=i.useState(!1),ne=i.useMemo(()=>l.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[l]);i.useLayoutEffect(()=>{const e=()=>{var e,t;X(null!==(e=null===(t=Y.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return Y.current&&t.observe(Y.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]),i.useLayoutEffect(()=>{const e=()=>{var e,t;q(null!==(e=null===(t=W.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return W.current&&t.observe(W.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]);const ie=i.useCallback(e=>{G(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),re=i.useCallback(()=>{G(I.map(e=>e.id))},[I]),oe=i.useCallback(()=>{G([])},[]);i.useEffect(()=>{G(e=>e.filter(e=>l.some(t=>t.id===e)))},[l]);const ae=i.useMemo(()=>l.filter(e=>B.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[l,B]),se=i.useMemo(()=>l.filter(e=>B.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[l,B]);i.useEffect(()=>{p()},[p]);const le=()=>{window.scrollTo({top:0,behavior:"smooth"})},de=(i.useMemo(()=>l.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[l]),g);return(0,d.jsx)(Wt,{children:(0,d.jsxs)(ut,{uid:s?s.uid:"",selectedNotesText:ae,noteTitles:se,clearSelectedNotes:oe,entries:l,children:[(0,d.jsxs)($,{children:[(0,d.jsx)(c,{selectedTag:k,selectedDate:r,searchContent:y,onSearchChange:w,onDateChange:e=>{a(e.target.value)},onAddNote:async function(){const e="all"!==k?[k]:[];await u({date:r,content:JSON.stringify({...E,tags:e})}),le()},onCopyAllNotes:async()=>{const e=ae.length>0?ae:I.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:re,onClearAll:oe,selectedCount:B.length,expanded:t,panelWidth:_,minimized:Z,setMinimized:Q}),(0,d.jsx)(Pt,{onClearAll:oe,expanded:t,panelWidth:V,minimized:ee,setMinimized:te,notesMinimized:Z})]}),(0,d.jsx)(K,{systemTags:D,customTags:O,selectedTag:k,setSelectedTag:z,explorerExpanded:t,setExplorerExpanded:n,minimized:Z,setMinimized:Q}),!Z&&(0,d.jsx)(rt,{entries:I,hoveredCardId:U,cardHeights:F,totalHeight:H,onScrollToCard:(e,t)=>{const n=R.current[e],i=W.current;if(!n||!i)return;const r=n.offsetTop,o="top"===t?r-100:r-i.clientHeight+n.offsetHeight+50;i.scrollTo({top:Math.max(0,o),behavior:"smooth"})}}),(0,d.jsx)(qt,{ref:W,minimized:Z,children:!Z&&(0,d.jsx)(tt,{entries:I,pickerTags:L,cardRefs:R,updateEntryDate:h,onHoverCard:J,onDeleteEntry:async function(e){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])){const t=l.find(t=>t.id===e);if(!t)return;const n=JSON.parse(t.content),i=Array.from(new Set([...(n.tags||[]).filter(e=>"archive"!==e),"trash"]));return void await g(e,JSON.stringify({...n,tags:i}))}await x(e)},onChangeEntry:de,selectedNoteIds:B,onToggleSelection:ie,templateOptions:ne})}),(0,d.jsx)(_t,{ref:Y,minimized:ee,children:(0,d.jsx)(ht,{uid:(null===s||void 0===s?void 0:s.uid)||"",selectedNotesText:ae,noteTitles:se,notesCount:B.length,clearSelectedNotes:oe})}),(0,d.jsx)(Rt,{minimized:ee,setMinimized:te})]})})},Wt=r.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,_t=r.Ay.div`
  flex: ${e=>{let{minimized:t}=e;return t?"0":"1"}};
  width: ${e=>{let{minimized:t}=e;return t?"0":"auto"}};
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
`,qt=r.Ay.div`
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
//# sourceMappingURL=dashboard.4d0d9c8f.chunk.js.map