"use strict";(globalThis.webpackChunkmavis_ai_web||=[]).push([[945],{8326(e,t,n){n.r(t),n.d(t,{default:()=>Xt});var r=n(5043),i=n(4138),o=n(1009),a=n(7246),s=n(4960),l=n(7149),d=n(579);const c=e=>{let{selectedTag:t,selectedDate:n,searchContent:r,onSearchChange:i,onDateChange:c,onAddNote:m,onCopyAllNotes:f,selectedCount:b,onSelectAll:w,onClearAll:y,expanded:v,panelWidth:k,minimized:j,setMinimized:C}=e;const S=v?208:52;return(0,d.jsxs)(p,{explorerWidth:S,barWidth:k,minimized:j,children:[(0,d.jsx)(g,{children:j?"Explorer":""===r.trim()?t.charAt(0).toUpperCase()+t.slice(1):"Search"}),!j&&(0,d.jsxs)(d.Fragment,{children:["journal"===t&&(0,d.jsx)(u,{children:(0,d.jsx)("input",{title:"Select date",type:"date",value:n,onChange:c})}),(0,d.jsxs)(x,{children:[(0,d.jsx)("input",{placeholder:"Search",value:r,onChange:e=>i(e.target.value)}),(0,d.jsx)(a.K,{title:"Clear search",onClick:()=>i(""),children:(0,d.jsx)(l.rOP,{})})]})]}),(0,d.jsxs)(h,{children:[!j&&(0,d.jsxs)(d.Fragment,{children:[b>0?(0,d.jsx)(a.K,{title:"Clear all notes",onClick:y,children:(0,d.jsx)(o.TG1,{})}):(0,d.jsx)(a.K,{title:"Select all visible notes",onClick:w,children:(0,d.jsx)(o.NLe,{})}),(0,d.jsx)(a.K,{title:"Copy all visible notes",onClick:f,children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Add note",onClick:m,children:(0,d.jsx)(s.n4h,{})})]}),(0,d.jsx)(a.K,{title:j?"Restore notes panel":"Minimize notes panel",onClick:()=>C(!0),children:j?(0,d.jsx)(o.mkN,{}):(0,d.jsx)(o.prK,{})})]})]})},p=i.Ay.div`
  display: ${e=>{let{minimized:t}=e;return t?"none":"flex"}};
  height: 32px;
  min-width: 100px;
  width: ${e=>{let{barWidth:t}=e;return`${t+20}px`}};
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
`,g=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`,x=i.Ay.div`
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
`,h=i.Ay.div`
  display: flex;
  align-items: center;
  height: 35px;
`;var m=n(2815),f=n(4966),b=n(2127);const w=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},y=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},v=e=>{if(!w(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))};var k=n(8222),j=n.n(k),C=n(2471),S=n(1286);const A=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),T=e=>{const t=(0,C.H9)(S.OO,"users",e);return(0,C.rJ)(t,"entries")},D=async(e,t)=>{const n=T(e);return(await(0,C.GG)((0,C.P)(n,(0,C._M)("id","==",t)))).docs};var N=n(6625),E=n(7950);const M=e=>{let{children:t}=e;const n=document.getElementById("header-portal");return n?(0,E.createPortal)(t,n):null},$={title:"",type:"record",tags:[],text:"",color:"#fff",locked:!1,pinned:!1,collapsed:!1},z=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],P=e=>e.replace(/\b\w/g,e=>e.toUpperCase());var O=n(5561),R=n(5263);const L=e=>{let{systemTags:t,customTags:n,selectedTag:i,setSelectedTag:s,explorerExpanded:l,setExplorerExpanded:c,minimized:p,setMinimized:u,selectedNoteIds:g,onRenameTag:x,onDeleteTag:h,onAddTagToSelected:m,onRemoveTagFromSelected:f}=e;const b=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),[w,y]=r.useState(null),[v,k]=r.useState(null),[j,C]=r.useState(""),S=r.useRef(null);return(0,d.jsxs)(K,{expanded:l,children:[(0,d.jsxs)(a.K,{expanded:l,title:"Menu",onClick:()=>c(!l),children:[(0,d.jsx)(o.ND1,{}),l&&(0,d.jsx)("span",{children:"Menu"})]}),p&&(0,d.jsxs)(a.K,{expanded:l,title:"Expand Notes Explorer",onClick:()=>u(!p),children:[(0,d.jsx)(R.$ZN,{}),l&&(0,d.jsx)("span",{children:"Expand Notes Explorer"})]}),t.filter(e=>"top"===e.position).map(e=>{const t=e.icon;return(0,d.jsxs)(a.K,{expanded:l,selected:i===e.name,title:e.name,onClick:()=>s(e.name),children:[(0,d.jsx)(t,{}),l&&(0,d.jsx)("span",{children:b(e.name)})]},e.name)}),n.map(e=>(0,d.jsxs)(I,{active:w===e,children:[(0,d.jsxs)(a.K,{expanded:l,selected:i===e,title:b(e),onClick:()=>s(e),children:[(0,d.jsx)(o.cnX,{}),v===e?(0,d.jsx)(B,{autoFocus:!0,value:j,onClick:e=>e.stopPropagation(),onChange:e=>C(e.target.value),onKeyDown:async t=>{"Enter"===t.key&&(await x(e,j.trim()),k(null),y(null)),"Escape"===t.key&&k(null)}}):l&&(0,d.jsx)("span",{children:b(e)})]}),l&&(0,d.jsxs)(F,{ref:S,children:[(0,d.jsx)(H,{onClick:t=>{t.stopPropagation(),y(w===e?null:e)},children:(0,d.jsx)(o.ZZB,{})}),w===e&&(0,d.jsxs)(J,{children:[(0,d.jsx)(U,{onClick:()=>{k(e),C(e)},children:"Rename"}),(0,d.jsx)(U,{onClick:()=>h(e),children:"Delete"}),(0,d.jsx)(U,{disabled:!g.length,onClick:()=>m(e),children:"Add Selected"}),(0,d.jsx)(U,{disabled:!g.length,onClick:()=>f(e),children:"Remove Selected"})]})]})]},e)),t.filter(e=>"bottom"===e.position).map(e=>{const t=e.icon;return(0,d.jsxs)(a.K,{expanded:l,selected:i===e.name,title:e.name,onClick:()=>s(e.name),children:[(0,d.jsx)(t,{}),l&&(0,d.jsx)("span",{children:b(e.name)})]},e.name)})]})},K=i.Ay.div`
  width: ${e=>e.expanded?"200px":"44px"};

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
`,I=i.Ay.div`
  position: relative;
  display: flex;
  align-items: center;

  z-index: ${e=>{let{active:t}=e;return t?9999:1}};
`,F=i.Ay.div`
  position: relative;
`,H=i.Ay.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
`,J=i.Ay.div`
  position: absolute;
  top: 100%;
  right: 0;

  min-width: 160px;

  background: white;
  border-radius: 8px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  z-index: 999;
`,U=i.Ay.div`
  padding: 10px;
  cursor: ${e=>{let{disabled:t}=e;return t?"not-allowed":"pointer"}};

  opacity: ${e=>{let{disabled:t}=e;return t?.5:1}};

  &:hover {
    background: ${e=>{let{disabled:t}=e;return t?"transparent":"#f1f1f1"}};
  }
`,B=i.Ay.input`
  width: 100px;
  margin-left: 8px;
`;var G=n(5369);const W=e=>{let{title:t,locked:n,collapsed:r,speaking:i,isFavorite:l,selected:c,onToggleSelection:p,speak:u,stopSpeaking:g,copyFormattedContent:x,onToggleFavorite:h,onToggleLock:m,onToggleCollapse:f,onTitleChange:b}=e;return(0,d.jsxs)(q,{children:[(0,d.jsxs)(Y,{children:[(0,d.jsx)(_,{title:c?"Unselect note":"Select note",onClick:p,children:c?"\u2713":""}),l?(0,d.jsx)(a.K,{disabled:n,title:"Remove favorite",onClick:h,children:(0,d.jsx)(G.gt3,{})}):(0,d.jsx)(a.K,{disabled:n,title:"Add favorite",onClick:h,children:(0,d.jsx)(o.usP,{})}),(0,d.jsx)(V,{title:"Note name",role:"textbox",contentEditable:!n,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>b(e.currentTarget.innerText),children:t})]}),(0,d.jsxs)(X,{children:[i?(0,d.jsx)(a.K,{title:"Stop hearing note",onClick:g,children:(0,d.jsx)(o.cKW,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Hear note",onClick:u,children:(0,d.jsx)(o.o77,{})}),(0,d.jsx)(a.K,{title:"Copy note",onClick:x,children:(0,d.jsx)(o.nxz,{})}),n?(0,d.jsx)(a.K,{title:"Unlock note",onClick:m,children:(0,d.jsx)(o.F5$,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Lock note",onClick:m,children:(0,d.jsx)(o.K4k,{})}),r?(0,d.jsx)(a.K,{title:"Expand note",onClick:f,children:(0,d.jsx)(s.BSQ,{})}):(0,d.jsx)(a.K,{title:"Collapse note",onClick:f,children:(0,d.jsx)(s.q2p,{})})]})]})},_=i.Ay.span`
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
`,q=i.Ay.header`
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
`,Y=i.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  margin: 0;
  padding: 0;

  color: black;
`,V=i.Ay.span`
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
`,X=i.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`;var Z=n(7996),Q=n(4993),ee=n(3859),te=n(6801),ne=n(7353),re=n(285),ie=n(578),oe=n(8550),ae=n(3596),se=n(5312),le=n.n(se);const de=e=>{let{label:t,expression:n,onExecute:r}=e;return(0,d.jsx)("button",{className:"markdownButton",onClick:()=>r(n),children:t})},ce=e=>{let{value:t,locked:n,editing:r,textareaRef:i,markdownRef:o,setValue:a,setEditing:s,onSave:l,onMarkdownClick:c,processMarkdown:p,onExecuteExpression:u}=e;return r?(0,d.jsx)(ue,{ref:i,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:t||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,a(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)&&(l(),s(!1))}}):(0,d.jsx)(pe,{ref:o,onClick:e=>{if(n)return;const t=e.target;c(t.innerText||t.textContent||"")},children:(0,d.jsx)(Z.oz,{rehypePlugins:[Q.A],components:{button(e){var t,n,r;const i=decodeURIComponent(String(null!==(t=null===(n=e.node)||void 0===n||null===(r=n.properties)||void 0===r?void 0:r.dataExpression)&&void 0!==t?t:""));return(0,d.jsx)(de,{label:String(e.children),expression:i,onExecute:u})}},remarkPlugins:[[ne.A,{padSpaceAfter:!1,emoticon:!0}],[oe.A,{tight:!0,ordered:!0}],[ee.A,{stringLength:le()}],re.A,ie.A,ae.A,te.A],children:p(t||"* \u2753 What do you have for today?")})})},pe=i.Ay.div`
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
      width: 100%;
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
`,ue=i.Ay.textarea`
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
`;var ge=n(5922);const xe=e=>{let{colors:t,onColorClicked:n,dropdownRef:r}=e;return(0,E.createPortal)((0,d.jsx)(he,{ref:r,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:t.map(e=>(0,d.jsxs)(me,{onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)},children:[(0,d.jsx)(fe,{color:e}),(0,d.jsx)(be,{children:e})]},e))}),document.body)},he=i.Ay.div`
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
`,me=i.Ay.button`
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
`,fe=i.Ay.div`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  background: ${e=>{let{color:t}=e;return t}};

  border: 1px solid rgba(0, 0, 0, 0.15);

  flex-shrink: 0;
`,be=i.Ay.span`
  font-size: 12px;
  font-weight: 600;

  color: #444;
`,we=e=>{let{options:t,onPicked:n,dropdownRef:r}=e;return(0,E.createPortal)((0,d.jsx)(ye,{ref:r,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:t.map((e,t)=>(0,d.jsx)(ve,{onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)},children:(0,d.jsx)(ke,{children:(0,d.jsx)(je,{children:e.title})})},t))}),document.body)},ye=i.Ay.div`
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
`,ve=i.Ay.button`
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
`,ke=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  min-width: 0;
`,je=i.Ay.span`
  color: #444;

  font-size: 12px;
  font-weight: 600;

  line-height: 1.3;
`,Ce=e=>{let{isLocked:t,listening:n,aiLoading:r,isArchived:i,isTrash:s,showColorPicker:c,showTemplatePicker:p,colorPickerRef:u,templatePickerRef:g,colorDropdownRef:x,templateDropdownRef:h,noteColors:m,templateOptions:f,startListening:b,stopListening:w,undoLastChange:y,handleAI:v,archiveNote:k,trashNote:j,setShowColorPicker:C,setShowTemplatePicker:S,onColorSelected:A,onTemplateSelected:T}=e;return(0,d.jsxs)(Se,{children:[(0,d.jsxs)(Ae,{children:[(0,d.jsx)(a.K,{disabled:t,title:"Change note background color",onClick:()=>C(e=>!e),children:(0,d.jsx)(l.$di,{})}),(0,d.jsx)(a.K,{disabled:t,title:"Load template",onClick:()=>S(e=>!e),children:(0,d.jsx)(o.MRc,{})}),(0,d.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"AI assistant",onMouseDown:e=>e.preventDefault(),onClick:v,children:(0,d.jsx)(o.Ojn,{color:r?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"Revert last change",onMouseDown:e=>e.preventDefault(),onClick:y,children:(0,d.jsx)(o.cO3,{})}),n?(0,d.jsx)(a.K,{disabled:t,title:"Stop listening",onClick:w,children:(0,d.jsx)(o.kGk,{color:"#2563eb"})}):(0,d.jsx)(a.K,{disabled:t,title:"Listen note",onClick:b,children:(0,d.jsx)(o.Rrl,{})}),(0,d.jsx)(ge.iJU,{}),(0,d.jsx)(a.K,{disabled:t,title:i?"Unarchive note":"Archive note",onClick:k,children:(0,d.jsx)(o.OZ2,{color:i?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:t,title:s?"Delete permanently":"Move to trash",onClick:j,children:(0,d.jsx)(o.IXo,{color:s?"#dc2626":void 0})})]}),c&&(0,d.jsx)(Te,{ref:u,children:(0,d.jsx)(xe,{colors:m,onColorClicked:A,dropdownRef:x})}),p&&(0,d.jsx)(De,{ref:g,children:(0,d.jsx)(we,{options:f,onPicked:T,dropdownRef:h})})]})},Se=i.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 0 0;
`,Ae=i.Ay.span`
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
`,Te=i.Ay.div`
  position: relative;
  width: 100%;
`,De=i.Ay.div`
  position: relative;
  width: 100%;
`,Ne=e=>{let{date:t,tags:n,availableTags:i,isLocked:a,tagPickerRef:l,tagDropdownRef:c,showTagPicker:p,creatingTag:u,newTagName:g,setShowTagPicker:x,setCreatingTag:h,setNewTagName:m,onDateChange:f,hasTag:b,toggleTag:w,createTag:y,formatTag:v,formatDate:k}=e;const j=r.useRef(null);return(0,d.jsxs)(Ee,{children:[(0,d.jsxs)($e,{children:[(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Me,{onClick:()=>{var e,t,n;null===(e=j.current)||void 0===e||null===(t=e.showPicker)||void 0===t||t.call(e),null===(n=j.current)||void 0===n||n.click()},children:k(t)}),(0,d.jsx)("input",{ref:j,type:"date",value:t,style:{display:"none"},onChange:e=>f(e.target.value)})]}),n.map(e=>(0,d.jsx)(ze,{onClick:()=>!a&&w(e),children:v(e)},e))]}),(0,d.jsxs)(Pe,{ref:l,children:[!a&&(0,d.jsx)(Oe,{onClick:()=>x(!p),children:(0,d.jsx)(s.n4h,{})}),p&&(0,E.createPortal)((0,d.jsxs)(Re,{ref:c,children:[i.map(e=>(0,d.jsxs)(Le,{className:b(e)?"selected":"",onClick:()=>w(e),children:[(0,d.jsx)(o.cnX,{}),(0,d.jsx)("span",{children:v(e)})]},e)),u?(0,d.jsx)(Ie,{autoFocus:!0,placeholder:"Tag name...",value:g,onChange:e=>m(e.target.value),onKeyDown:e=>{"Enter"===e.key&&y(g),"Escape"===e.key&&(h(!1),m(""))},onBlur:()=>{g.trim()?y(g):h(!1)}}):(0,d.jsxs)(Ke,{onClick:()=>h(!0),children:[(0,d.jsx)(o.cnX,{}),"New Tag"]})]}),document.body)]})]})},Ee=i.Ay.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row !important;
  justify-content: flex-start !important;
  gap: 8px;
`,Me=i.Ay.span`
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
`,$e=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  gap: 6px;
  width: fit-content;
  margin-left: 10px;
`,ze=i.Ay.span`
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
`,Pe=i.Ay.div`
  position: relative;
  flex: 0 0;
  width: fit-content;
  margin: 0;
`,Oe=i.Ay.span`
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
`,Re=i.Ay.div`
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
`,Le=i.Ay.span`
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
`,Ke=i.Ay.span`
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
`,Ie=i.Ay.input`
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
`;function Fe(){const[e,t]=(0,r.useState)(!1),[n,i]=(0,r.useState)(""),o=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return void console.warn("SpeechRecognition API not supported");const n=new e;n.lang="pt-BR",n.continuous=!0,n.interimResults=!0,n.onresult=e=>{let t="";for(let n=0;n<e.results.length;n++)t+=e.results[n][0].transcript;i(t)},n.onend=()=>{t(!1)},o.current=n},[]);return{listening:e,transcript:n,startListening:()=>{var e;null===(e=o.current)||void 0===e||e.start(),t(!0)},stopListening:()=>{var e;null===(e=o.current)||void 0===e||e.stop(),t(!1)}}}function He(){const[e,t]=(0,r.useState)(!1);return{speak:function(e){const n=function(e){return function(e){return e.replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/#+\s/g,"").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/[_~]/g,"").replace(/\n+/g,". ").trim()}(e).replace(/[^\p{L}\p{N}\s]/gu," ").replace(/\s+/g," ").trim()}(e),r=new SpeechSynthesisUtterance(n),i=function(e){return/[\xe3\xf5\xe1\xe0\xe2\xe9\xea\xed\xf3\xf4\xfa\xe7]/i.test(e)?"pt-BR":"en-US"}(n),o=speechSynthesis.getVoices().find(e=>e.lang.startsWith(i));o&&(r.voice=o),r.lang=i,r.onstart=()=>t(!0),r.onend=()=>t(!1),speechSynthesis.speak(r)},stopSpeaking:()=>{speechSynthesis.cancel(),t(!1)},speaking:e}}const Je=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},Ue=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=new Date;return(e=e.replace(/@date\b/g,()=>i.toLocaleDateString()).replace(/@time\b/g,()=>i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>i.toLocaleString()).replace(/@dayofweek\b/g,()=>i.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(i.getMonth()+1)).replace(/@monthname\b/g,()=>i.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(i.getFullYear())).replace(/@today\b/g,()=>i.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const r=Number(t),i=Number(n);return r&&i?(r/(i*i)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-i.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const r=Math.max(-1,Math.min(1,Number(n))),i=t.isMobile?5:10,o=Math.abs(r),a=`${Math.round(100*r)}%`,s=Math.round(o*i);let l=r>=0?"\u2588".repeat(s)+"\u2591".repeat(i-s):"\u2591".repeat(i-s)+"\u2588".repeat(s);const d=Math.max(0,Math.floor((i-a.length)/2));return l.slice(0,d)+a+l.slice(d+a.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&r<5?Ue(e,t,n,r+1):e},Be=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,Ge=(e,t)=>{const n={};e.replace(Be,(e,t,r)=>(n[t]=r.trim(),""));let r=!0;for(;r;){r=!1;for(const[e,i]of Object.entries(n)){if(!i.includes("@"))continue;const o=Ue(We(i,n),Je({...t,...n}));o!==i&&(n[e]=o,r=!0)}}return n},We=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var r;return null!==(r=t[n])&&void 0!==r?r:""}),_e=(e,t,n)=>{const r=Ge(e),i=Je({...t,...Object.fromEntries(Object.entries(r).map(e=>{let[t,n]=e;if(""===n)return[t,""];const r=Number(n);return[t,Number.isNaN(r)?n:r]}))});return Ue(We((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),r),i,n)};function qe(){const[e,t]=(0,r.useState)(""),[n,i]=(0,r.useState)(""),[o,a]=(0,r.useState)({city:"",country:""});return(0,r.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async n=>{let{coords:r}=n;try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${r.latitude}&longitude=${r.longitude}&current=temperature_2m,weather_code`),n=await t.json();let d="",c="";try{var i,o,a,s;const e=await fetch(`https://geocode.maps.co/reverse?lat=${r.latitude}&lon=${r.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();d=(null===(i=t.address)||void 0===i?void 0:i.city)||(null===(o=t.address)||void 0===o?void 0:o.town)||(null===(a=t.address)||void 0===a?void 0:a.village)||"",c=(null===(s=t.address)||void 0===s?void 0:s.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(n.current.temperature_2m)}\xb0C`,weather:(l=n.current.weather_code,0===l?"\u2600\ufe0f Sunny":[1,2].includes(l)?"\ud83c\udf24\ufe0f Partly Cloudy":3===l?"\u2601\ufe0f Cloudy":[45,48].includes(l)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(l)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(l)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(l)?"\u2744\ufe0f Snowing":[80,81,82].includes(l)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(l)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:d,country:c})}catch(d){t(d)}var l}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),i(e.weather),a({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:o}}var Ye=n(503);const Ve=new TextEncoder,Xe=new TextDecoder;function Ze(e){const t=new Uint8Array(e);let n="";for(let r=0;r<t.length;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function Qe(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function et(e,t){const n=await crypto.subtle.importKey("raw",Ve.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function tt(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),r=crypto.getRandomValues(new Uint8Array(16)),i=await et(t,r);return{encrypted:Ze(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},i,Ve.encode(e))),iv:Ze(n),salt:Ze(r)}}(t,e);await(0,C.BN)((0,C.H9)(S.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function nt(e){const t=await(0,C.x7)((0,C.H9)(S.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,r){const i=await et(r,Qe(n)),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:Qe(t)},i,Qe(e));return Xe.decode(o)}(n.encryptedApiKey,n.iv,n.salt,e)}async function rt(e,t,n,r,i,o){console.log(i);const a=o||await nt(e);if(!a)throw new Error("OpenAI API Key not configured.");const s=new Ye.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),l=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${r}\n`;return await s.responses.create({model:i||"gpt-5.6-luna",input:l})}const it="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const ot=e=>{let{id:t,date:n,content:i,onDeleteCard:o,onChangeContent:a,onChangeDate:s,tags:l,selected:c,onToggleSelection:p,templateOptions:u}=e;const{listening:g,transcript:x,startListening:h,stopListening:m}=Fe(),{speak:f,speaking:b,stopSpeaking:v}=He(),[k,j]=r.useState(!1),[C,S]=r.useState(!1),[A,T]=r.useState(!1),D=r.useRef(null),E=r.useRef(null),M=r.useRef(null),O=r.useRef(null),R=r.useRef(null),L=r.useRef(null),K=r.useRef(null),I=r.useRef(null),[F,H]=r.useState(window.innerWidth<1260),{user:J}=(0,N.o)(),{temperature:U,weather:B,location:G}=qe(),{setCursorPosition:_,findBestCursorPosition:q}=function(e){let{editing:t,textareaRef:n}=e;const[i,o]=(0,r.useState)(null);return(0,r.useEffect)(()=>{if(!t||!n.current||null===i)return;const e=n.current;e.focus(),e.setSelectionRange(i,i),requestAnimationFrame(()=>{const t=document.createElement("div"),n=window.getComputedStyle(e);t.style.position="absolute",t.style.visibility="hidden",t.style.whiteSpace="pre-wrap",t.style.wordWrap="break-word",t.style.font=n.font,t.style.lineHeight=n.lineHeight,t.style.padding=n.padding,t.style.width=`${e.clientWidth}px`,t.textContent=e.value.substring(0,i),document.body.appendChild(t);const r=t.offsetHeight;document.body.removeChild(t);const o=e.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:o+r-window.innerHeight/2,behavior:"smooth"})})},[t,i,n]),{cursorPosition:i,setCursorPosition:o,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const r=n.split(" ");for(let i=Math.min(r.length,8);i>=2;i--)for(let e=0;e<=r.length-i;e++){const n=r.slice(e,e+i).join(" "),o=t.indexOf(n);if(o>=0)return o}for(const i of r){if(i.length<4)continue;const e=t.indexOf(i);if(e>=0)return e}return t.length}}}({editing:k,textareaRef:D});!function(e){let{tagPickerRef:t,tagDropdownRef:n,colorPickerRef:i,colorDropdownRef:o,templatePickerRef:a,templateDropdownRef:s,closeTagPicker:l,closeColorPicker:d,closeTemplatePicker:c}=e;(0,r.useEffect)(()=>{const e=e=>{var r,p,u,g,x,h,m,f,b,w,y,v;const k=e.target,j=null!==(r=null===(p=t.current)||void 0===p?void 0:p.contains(k))&&void 0!==r&&r,C=null!==(u=null===(g=n.current)||void 0===g?void 0:g.contains(k))&&void 0!==u&&u;j||C||l();const S=null!==(x=null===(h=i.current)||void 0===h?void 0:h.contains(k))&&void 0!==x&&x,A=null!==(m=null===(f=o.current)||void 0===f?void 0:f.contains(k))&&void 0!==m&&m;S||A||d();const T=null!==(b=null===(w=a.current)||void 0===w?void 0:w.contains(k))&&void 0!==b&&b,D=null!==(y=null===(v=s.current)||void 0===v?void 0:v.contains(k))&&void 0!==y&&y;T||D||c()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t,n,i,o,a,s,l,d,c])}({tagPickerRef:M,tagDropdownRef:L,colorPickerRef:O,colorDropdownRef:K,templatePickerRef:R,templateDropdownRef:I,closeTagPicker:()=>{Q(!1),ee(!1)},closeColorPicker:()=>{S(!1)},closeTemplatePicker:()=>{T(!1)}}),r.useEffect(()=>{const e=()=>{H(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const Y=r.useMemo(()=>((e,t)=>{const n=t(e)?JSON.parse(e):{...$,text:e};return{...$,...n,tags:Array.from(new Set([...n.tags||[]]))}})(i,w),[i]),{showTagPicker:V,creatingTag:X,newTagName:Z,setShowTagPicker:Q,setCreatingTag:ee,setNewTagName:te,hasTag:ne,toggleTag:re,createTag:ie}=function(e){let{tags:t,onTagsChange:n}=e;const[i,o]=(0,r.useState)(!1),[a,s]=(0,r.useState)(!1),[l,d]=(0,r.useState)(""),c=e=>t.includes(e),p=e=>{console.log("current tags",t);const r=Array.from(new Set(c(e)?t.filter(t=>t!==e):[...t,e]));console.log("updated tags",r),n(r)};return{showTagPicker:i,creatingTag:a,newTagName:l,setShowTagPicker:o,setCreatingTag:s,setNewTagName:d,hasTag:c,toggleTag:p,createTag:e=>{const t=e.trim().toLowerCase();t&&(p(t),d(""),s(!1))}}}({tags:Y.tags,onTagsChange:e=>{a(t,JSON.stringify({...Y,tags:e}))}}),[oe,ae]=r.useState(Y.text||""),[se,le]=r.useState([]),de=r.useCallback(e=>{le(t=>t[t.length-1]===e?t:[...t,e])},[]),{aiLoading:pe,handleAI:ue}=function(e){let{userId:t,value:n,textareaRef:i,pushHistory:o,onContentChange:a}=e;const[s,l]=(0,r.useState)(!1);return{aiLoading:s,handleAI:async()=>{if(!t)return void alert("User not authenticated");let e=await nt(t);if(!e){var r;if(e=(null===(r=window.prompt("OpenAI API Key not configured.\n\nEnter your OpenAI API Key:"))||void 0===r?void 0:r.trim())||"",!e)return;await tt(t,e)}const s=window.prompt("Examples:\n\nFix grammar\nSummarize\nRewrite professionally\nTranslate to Portuguese");if(null!==s&&void 0!==s&&s.trim()){l(!0);try{o(n);const r=i.current;if(r&&r.selectionStart!==r.selectionEnd){const i=r.selectionStart,o=r.selectionEnd,l=n.substring(i,o),d=await rt(t,it,s,l,"gpt-5.6-luna",e),c=n.substring(0,i)+d.output_text.trim()+n.substring(o);return void a(c)}const l=await rt(t,it,s,n,"gpt-5.6-luna",e),d=`${n}\n\n${l.output_text.trim()}`;a(d)}catch(d){console.error(d),alert(d instanceof Error?d.message:"AI request failed")}finally{l(!1)}}}}}({userId:null===J||void 0===J?void 0:J.uid,value:oe,textareaRef:D,pushHistory:de,onContentChange:e=>{ae(e),a(t,JSON.stringify({...Y,text:e}))}}),ge=()=>{if(ne("trash"))return void o(t,!0);const e=(e=>Array.from(new Set([...e.filter(e=>"archive"!==e),"trash"])))(Y.tags);a(t,JSON.stringify({...Y,tags:e}))},xe=e=>ne("templates")?e:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/quarter\b/g,()=>String(Math.floor(n.getMonth()/3)+1)).replace(/\/week\b/g,()=>{const e=new Date(n);e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const t=new Date(e.getFullYear(),0,4);return String(1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7))}).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/week\b/g,()=>{const e=new Date(n.getFullYear(),0,1),t=Math.ceil(((n.getTime()-e.getTime())/864e5+e.getDay()+1)/7);return String(t)}).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const r=Number(t),i=Number(n);return String(Math.floor(Math.random()*(i-r+1))+r)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",r=Number(t);return Array.from({length:r},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const r=new Date(t);let i=n.getFullYear()-r.getFullYear();const o=n.getMonth()-r.getMonth();return(o<0||0===o&&n.getDate()<r.getDate())&&i--,String(i)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const r=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(r/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})}(e,{weather:B,temperature:U,city:G.city,country:G.country});r.useEffect(()=>{if(!g&&x){de(oe);const e=oe+x;a(t,JSON.stringify({...Y,text:e})),ae(e)}},[g,x,oe,t,Y,de,a]);const he=Y.locked;return(0,d.jsx)(at,{selected:c,children:(0,d.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:Y.color||"#eee"},children:[(0,d.jsx)(W,{title:Y.title,locked:Y.locked,collapsed:Y.collapsed,selected:c,onToggleSelection:()=>p(t),speaking:b,isFavorite:ne("favorite"),speak:()=>f(oe),stopSpeaking:v,copyFormattedContent:async()=>{if(!E.current)return;const e=E.current.innerHTML,t=E.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>re("favorite"),onToggleLock:()=>a(t,JSON.stringify({...Y,locked:!Y.locked})),onToggleCollapse:()=>a(t,JSON.stringify({...Y,collapsed:!Y.collapsed})),onTitleChange:e=>a(t,JSON.stringify({...Y,title:xe(e)}))}),Y.collapsed?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ce,{value:oe,locked:Y.locked,editing:k,textareaRef:D,markdownRef:E,setValue:ae,setEditing:j,processMarkdown:e=>_e(e,{temperature:U,weather:B,city:G.city,country:G.country},F),onExecuteExpression:e=>{de(oe);const n=((e,t,n)=>{const r=t.match(/^\$\{(\w+)\}=(.*)$/);if(!r)return e;const i=r[1];let o=r[2];const a=Ge(e);o=Ue(o,Je({...n,...a})),o=o.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=a[t])&&void 0!==n?n:"")});const s="${"+i+"}="+Function(`return (${o})`)(),l=new RegExp(`^\\$\\{${i}\\}\\s*=([^\\r\\n]*)`,"m");return l.test(e)?e.replace(l,s):e.trimEnd()+"\n"+s})(oe,e,{temperature:U,weather:B,city:G.city,country:G.country});ae(n),a(t,JSON.stringify({...Y,text:n}))},onSave:()=>((e,t)=>{const n=xe(t);a(e,JSON.stringify({...Y,text:n})),ae(n)})(t,oe),onMarkdownClick:e=>{de(oe);const t=q(e,oe);_(t),j(!0)}}),(0,d.jsx)("footer",{className:"footer",children:(0,d.jsxs)("span",{className:"footbox",children:[(0,d.jsx)(Ne,{tagDropdownRef:L,date:n,tags:Y.tags,availableTags:l,isLocked:he,tagPickerRef:M,showTagPicker:V,creatingTag:X,newTagName:Z,setShowTagPicker:Q,setCreatingTag:ee,setNewTagName:te,onDateChange:e=>s(t,e),hasTag:ne,toggleTag:re,createTag:ie,formatTag:P,formatDate:y}),(0,d.jsx)(Ce,{colorDropdownRef:K,templateDropdownRef:I,isLocked:he,listening:g,aiLoading:pe,isArchived:ne("archive"),isTrash:ne("trash"),showColorPicker:C,showTemplatePicker:A,colorPickerRef:O,templatePickerRef:R,noteColors:z,templateOptions:u,startListening:()=>{Y.locked||h()},stopListening:m,undoLastChange:()=>{const e=se[se.length-1];e&&(le(e=>e.slice(0,-1)),ae(e),a(t,JSON.stringify({...Y,text:e})))},handleAI:()=>{Y.locked||ue()},archiveNote:()=>{Y.locked||(()=>{const e=(e=>e.includes("archive")?e.filter(e=>"archive"!==e):[...e.filter(e=>"trash"!==e),"archive"])(Y.tags);a(t,JSON.stringify({...Y,tags:e}))})()},trashNote:()=>{Y.locked||ge()},setShowColorPicker:S,setShowTemplatePicker:T,onColorSelected:e=>{a(t,JSON.stringify({...Y,color:e})),S(!1)},onTemplateSelected:e=>{de(oe);let n=e.text.replace(/\\\$\{/g,"${");if(n=xe(n),!Y.locked){const r=Array.from(new Set([...Y.tags||[],...e.tags||[]]));a(t,JSON.stringify({...Y,collapsed:!1,color:e.color,text:n,title:xe(e.title),tags:r})),ae(n)}}})]})})]})]})},t)},at=i.Ay.div`
box-shadow: ${e=>{let{selected:t}=e;return t?"0 0 0 3px #2563eb":"none"}};  width: 100%;

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

`,st=e=>{let{entries:t,pickerTags:n,cardRefs:r,onHoverCard:i,onDeleteEntry:o,onChangeEntry:a,updateEntryDate:s,selectedNoteIds:l,onToggleSelection:c,templateOptions:p}=e;return(0,d.jsx)(lt,{children:t.map((e,t)=>(0,d.jsx)("div",{ref:t=>{r.current[e.id]=t},onMouseEnter:()=>i(e.id),onMouseLeave:()=>i(null),children:(0,d.jsx)(ot,{id:e.id,date:e.date,number:t+1,content:e.content,onDeleteCard:o,onChangeContent:a,onChangeDate:s,tags:n,selected:l.includes(e.id),onToggleSelection:c,templateOptions:p})},e.id))})},lt=i.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`,dt=e=>{try{return JSON.parse(e).color||"#cccccc"}catch{return"#cccccc"}},ct=e=>{let{entries:t,hoveredCardId:n,cardHeights:r,totalHeight:i,onScrollToCard:s}=e;return(0,d.jsx)(pt,{children:t.map(e=>(0,d.jsxs)(ut,{$selected:n===e.id,style:{backgroundColor:dt(e.content),height:`${Math.max((r[e.id]||40)/Math.max(i,1)*100,60)}px`},children:[(0,d.jsx)(a.K,{style:{padding:"0",margin:"0"},title:"Go to note top",onClick:()=>s(e.id,"top"),children:(0,d.jsx)(o.wAb,{})}),(0,d.jsx)(a.K,{style:{padding:"0",margin:"0"},title:"Go to note bottom",onClick:()=>s(e.id,"bottom"),children:(0,d.jsx)(o.fK4,{})})]},e.id))})},pt=i.Ay.div`
  padding-top: 20px;
  width: 20px;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;
  background: #d0d0d0;
`,ut=i.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0;
  padding: 0 !important;
  border: ${e=>{let{$selected:t}=e;return t?"2px solid #2563eb":"1px solid transparent"}};
  border-bottom: ${e=>{let{$selected:t}=e;return t?"2px solid #2563eb":"1px solid rgb(0, 0, 0, 0.2)"}};

  button:hover {
    background: white;
  }

  svg {
    margin: 0;
    padding: 0;
  }
`,gt=e=>{const t=(0,C.H9)(S.OO,"users",e);return(0,C.rJ)(t,"chatSessions")},xt=async(e,t)=>{const n=gt(e);return(await(0,C.GG)((0,C.P)(n,(0,C._M)("id","==",t)))).docs};const ht=(0,r.createContext)(void 0),mt="You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.",ft=e=>{let{uid:t,selectedNotesText:n,noteTitles:i,clearSelectedNotes:o,entries:a}=e;const[s,l]=(0,r.useState)(""),[d,c]=(0,r.useState)([]),[p,u]=(0,r.useState)([]),{sessions:g,fetchSessions:x,createSession:h,updateSession:m,deleteSession:f}=function(e){const[t,n]=r.useState([]),i=r.useCallback(async()=>{if(!e)return;const t=(await(0,C.GG)(gt(e))).docs.map(e=>e.data());n((e=>[...e].sort((e,t)=>e.updatedAt>t.updatedAt?-1:e.updatedAt<t.updatedAt?1:0))(t))},[e]),o=r.useCallback(async t=>{if(!e)return null;const r={id:j()(),title:"New Chat",createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString(),model:t,selectedPromptIds:[],messages:[]};return n(e=>[r,...e]),await(0,C.gS)(gt(e),r),r},[e]),a=r.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const r=await xt(e,t.id);await Promise.all(r.map(n=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/chatSessions/${n.id}`),t)))},[e]),s=r.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const r=await xt(e,t);await Promise.all(r.map(t=>(0,C.kd)((0,C.H9)(S.OO,`users/${e}/chatSessions/${t.id}`))))},[e]);return{sessions:t,setSessions:n,fetchSessions:i,createSession:o,updateSession:a,deleteSession:s}}(t),[b,w]=(0,r.useState)(!1),[y,v]=(0,r.useState)(null),[k,A]=(0,r.useState)(!1),[T,D]=(0,r.useState)("gpt-5.6-luna"),[N,E]=(0,r.useState)(!0),M=(0,r.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),$=(0,r.useCallback)(async()=>{const e=await h(T);e&&(c([]),v(e.id),u([]))},[h,T]);(0,r.useEffect)(()=>{b&&(g.length>0||$())},[b,g,$]),(0,r.useEffect)(()=>{(async()=>{await x(),w(!0)})()},[x]);const z=(0,r.useCallback)(async e=>{if(!y)return;const t=g.find(e=>e.id===y);if(!t)return;const n=d.includes(e)?d.filter(t=>t!==e):[...d,e];c(n),await m({...t,selectedPromptIds:n,updatedAt:(new Date).toISOString()})},[y,d,g,m]),P=(0,r.useMemo)(()=>a.filter(e=>d.includes(e.id)).map(e=>{try{return JSON.parse(e.content).text||""}catch{return""}}).join("\n\n"),[a,d]),O=(0,r.useCallback)(e=>{const t=g.find(t=>t.id===e);t&&(c(t.selectedPromptIds||[]),v(e),u(t.messages),D(t.model))},[g]);(0,r.useEffect)(()=>{0!==g.length&&(y||O(g[0].id))},[g,y,O]);const R=(0,r.useMemo)(()=>a.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[a]),L=(0,r.useCallback)(async()=>{const e=s.trim();if(!e||k)return;if(!t)return void u(e=>[...e,{id:j()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const r=i.length>0?`Notes:\n${i.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",a=M(p),d={id:j()(),role:"user",content:`${r}${e}`};u(t=>{const n=[...t,d],r=g.find(e=>e.id===y);return r&&m({...r,messages:n,updatedAt:(new Date).toISOString(),title:"New Chat"===r.title?e.substring(0,30):r.title}),n}),l(""),A(!0);const c=[];N&&a&&c.push(`History:\n${a}`),n.trim()&&c.push(`Context:\n${n}`);const x=c.join("\n\n");try{var h,f;const n=[mt,P].filter(Boolean),r=await rt(t,n.join("\n\n"),e,x,T),i={id:j()(),role:"assistant",content:r.output_text.trim()||"No response was returned.",tokens:{input:(null===(h=r.usage)||void 0===h?void 0:h.input_tokens)||0,output:(null===(f=r.usage)||void 0===f?void 0:f.output_tokens)||0}};u(t=>{const n=[...t,i],r=g.find(e=>e.id===y);return r&&m({...r,messages:n,updatedAt:(new Date).toISOString(),title:"New Chat"===r.title?e.substring(0,30):r.title}),n}),o()}catch(b){console.error("Mavis error:",b);const e=b instanceof Error?b.message:"An unexpected error occurred.";u(t=>[...t,{id:j()(),role:"assistant",content:e}])}finally{A(!1)}},[s,k,t,i,n,T,p,N,M,o,g,y,m,P]),K=(0,r.useCallback)(async()=>{if(k||0===p.length)return;if(!t)return void u(e=>[...e,{id:j()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const e=M(p);A(!0);try{var n,r;const i=await rt(t,`${mt}\n\n${P}`,"Summarize the entire conversation history into one comprehensive, self-contained message.\n\nInclude all important information from the conversation, especially:\n\n- Every requirement and specification\n- Every decision that was made\n- Every implementation detail\n- Every instruction and constraint\n- Important facts, dates, names, titles, values, and references\n- Code-related decisions, expected behavior, and affected files or components\n- Problems, errors, solutions, and changes that were discussed\n- Rejected alternatives and the reasons they were rejected\n- Open questions, unresolved issues, assumptions, and pending tasks\n- The current state of the work\n- Clear next steps, if any\n\nPreserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.\n\nWrite the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.",`Conversation history:\n${e}`,T),o={id:j()(),role:"assistant",content:i.output_text.trim()||"No summary was returned.",tokens:{input:(null===(n=i.usage)||void 0===n?void 0:n.input_tokens)||0,output:(null===(r=i.usage)||void 0===r?void 0:r.output_tokens)||0}};u([o]);const a=g.find(e=>e.id===y);a&&await m({...a,messages:[o],updatedAt:(new Date).toISOString()})}catch(i){console.error("Mavis summary error:",i);const e=i instanceof Error?i.message:"An unexpected error occurred.";u(t=>[...t,{id:j()(),role:"assistant",content:e}])}finally{A(!1)}},[k,p,t,M,T,y,g,m,P]),I=(0,r.useCallback)(async e=>{if(!y)return;const t=g.find(e=>e.id===y);if(!t)return;const n="all"===e?[]:t.messages.filter(t=>t.id!==e);u(n),await m({...t,messages:n,updatedAt:(new Date).toISOString()})},[y,g,m]),F=(0,r.useCallback)(async()=>{if(!y)return;const e=g.find(e=>e.id===y);e&&(u([]),await m({...e,messages:[],updatedAt:(new Date).toISOString()}))},[y,g,m]),H=(0,r.useCallback)(async e=>{if(await f(e),y===e){const t=g.filter(t=>t.id!==e);t.length>0?O(t[0].id):await $()}},[f,y,g,O,$]);return{prompt:s,setPrompt:l,selectedPromptIds:d,togglePrompt:z,availablePromptNotes:R,messages:p,isLoading:k,sessions:g,currentSessionId:y,createNewSession:$,loadSession:O,deleteSession:f,removeSession:H,sendPrompt:L,deleteMessage:I,clearMessages:F,summarizeHistory:K,selectedModel:T,setSelectedModel:D,includeHistory:N,setIncludeHistory:E}};function bt(e){let{children:t,uid:n,selectedNotesText:r,noteTitles:i,clearSelectedNotes:o,entries:a}=e;const s=ft({uid:n,selectedNotesText:r,noteTitles:i,clearSelectedNotes:o,entries:a});return(0,d.jsx)(ht.Provider,{value:s,children:t})}function wt(){const e=(0,r.useContext)(ht);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}const yt=["gpt-5-mini","gpt-5.6-luna","gpt-5.6-terra","gpt-5.6-sol"],vt=e=>{let{uid:t,selectedNotesText:n,noteTitles:i,notesCount:s,clearSelectedNotes:c}=e;const[p,u]=r.useState(!1),{listening:g,transcript:x,startListening:h,stopListening:m}=Fe(),{speak:b,speaking:w,stopSpeaking:y}=He(),{prompt:v,setPrompt:k,messages:j,isLoading:C,sendPrompt:S,deleteMessage:A,selectedModel:T,setSelectedModel:D,selectedPromptIds:N,availablePromptNotes:E,togglePrompt:M,includeHistory:$,setIncludeHistory:z,summarizeHistory:P}=wt(),[O,R]=r.useState(!1),[L,K]=r.useState(!1);r.useEffect(()=>{!g&&x&&k(e=>e.length>0?`${e} ${x}`:x)},[g,x,k]);return(0,d.jsxs)(Nt,{children:[(0,d.jsxs)(Et,{children:[j.map(e=>(0,d.jsxs)(kt,{role:e.role,children:[(0,d.jsx)(Ct,{role:e.role,children:e.tokens&&(0,d.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,d.jsx)(Mt,{role:e.role,children:(0,d.jsx)(Z.oz,{remarkPlugins:[ee.A],children:e.content})}),(0,d.jsxs)(jt,{role:e.role,children:[(0,d.jsx)(a.K,{title:"Read message",onClick:()=>{return t=e.content,void(w?y():b(t));var t},children:w?(0,d.jsx)(o.TG1,{}):(0,d.jsx)(o.o77,{})}),(0,d.jsx)(a.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Delete message",onClick:()=>A(e.id),children:(0,d.jsx)(o.IXo,{})})]})]},e.id)),C&&(0,d.jsx)(Mt,{role:"assistant",children:"Thinking..."})]}),(0,d.jsx)($t,{expanded:p,children:(0,d.jsxs)(zt,{children:[(0,d.jsxs)(At,{children:[(0,d.jsxs)(Ft,{children:[(0,d.jsxs)(Rt,{title:"Prompt presets",onClick:()=>K(!L),children:[(0,d.jsx)(f.vTI,{}),(0,d.jsxs)(Lt,{children:["Prompts (",N.length,")"]})]}),L&&(0,d.jsx)(Kt,{children:E.map(e=>(0,d.jsxs)(It,{className:N.includes(e.id)?"selected":"",onClick:()=>{M(e.id)},children:[(0,d.jsx)(f.vTI,{}),(0,d.jsx)("span",{children:e.title})]},e.id))})]}),(0,d.jsxs)(Ot,{children:[(0,d.jsxs)(Rt,{style:{margin:"0px !important"},title:"Selecionar modelo de IA",onClick:()=>{R(!O)},children:[(0,d.jsx)(o.Ojn,{}),(0,d.jsx)(Lt,{children:T})]}),O&&(0,d.jsx)(Kt,{children:yt.map(e=>(0,d.jsxs)(It,{className:T===e?"selected":"",onClick:()=>{D(e),R(!1)},title:e,children:[(0,d.jsx)(o.Ojn,{}),(0,d.jsx)("span",{children:e})]},e))})]}),(0,d.jsxs)(Tt,{children:["Notes: ",s]})]}),(0,d.jsxs)(St,{children:[(0,d.jsx)(Pt,{expanded:p,value:v,placeholder:"Ask Mavis...",disabled:C,onChange:e=>k(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),S())}}),(0,d.jsxs)(Dt,{children:[(0,d.jsx)(a.K,{title:"Summarize History",onClick:()=>{P()},children:(0,d.jsx)(l.Z1M,{})}),(0,d.jsx)(a.K,{title:"Include chat history in prompts",children:(0,d.jsx)(l.bfP,{color:$?"#2563eb":"#555",onClick:()=>z(!$)})}),(0,d.jsx)(a.K,{title:"Clear chat history",onClick:()=>{A("all")},children:(0,d.jsx)(f.U3h,{})}),g?(0,d.jsx)(a.K,{title:"Stop recording",onClick:m,children:(0,d.jsx)(o.TG1,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Voice input",onClick:h,children:(0,d.jsx)(o.Rrl,{})}),(0,d.jsx)(a.K,{title:p?"Collapse":"Expand",onClick:()=>u(e=>!e),children:p?(0,d.jsx)(o.eDi,{}):(0,d.jsx)(o.mkN,{})}),(0,d.jsx)(a.K,{title:"Copy input",onClick:()=>{(async()=>{v.trim()&&await navigator.clipboard.writeText(v)})()},disabled:!v.trim(),children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Send prompt",onClick:()=>{S()},disabled:C||!v.trim(),children:(0,d.jsx)(o.kGk,{})}),(0,d.jsx)(a.K,{title:"Clear input",onClick:()=>{k("")},disabled:!v.trim(),children:(0,d.jsx)(o.yGN,{})}),(0,d.jsx)(a.K,{title:"Clear selected notes",onClick:c,disabled:0===s,children:(0,d.jsx)(l.DnH,{})})]})]})]})})]})},kt=i.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
`,jt=i.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,Ct=i.Ay.div`
  font-size: 10px;
  color: #555;
  margin-bottom: 2px;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  white-space: nowrap;
`,St=i.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,At=i.Ay.span`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,Tt=i.Ay.span`
  font-size: 12px;
  color: #555;
`,Dt=i.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,Nt=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Et=i.Ay.div`
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
`,Mt=i.Ay.div`
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
`,$t=i.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;
  margin: 0;
  background: #e0e0e5;
  ${e=>{let{expanded:t}=e;return t&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}}
`,zt=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #e0e0e5;
`,Pt=i.Ay.textarea`
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
`,Ot=i.Ay.div`
  padding: 0px;
  position: relative;
  width: auto;
`,Rt=i.Ay.div`
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
`,Lt=i.Ay.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Kt=i.Ay.div`
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
`,It=i.Ay.span`
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
`,Ft=i.Ay.div`
  position: relative;
`,Ht=e=>{let{expanded:t,panelWidth:n,minimized:r,setMinimized:i,notesMinimized:s}=e;const l=t?208:52;return(0,d.jsxs)(Jt,{explorerWidth:l,notesMinimized:s,barWidth:n,minimized:r,children:[(0,d.jsxs)(Ut,{children:[(0,d.jsx)(o.Ojn,{}),"Chat"]}),(0,d.jsx)(Bt,{children:(0,d.jsx)(a.K,{title:"Minimize chat panel",onClick:()=>i(!0),children:(0,d.jsx)(o.prK,{})})})]})},Jt=i.Ay.div`
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
`,Ut=i.Ay.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`,Bt=i.Ay.div`
  display: flex;
  align-items: center;
  height: 35px;
`,Gt=e=>{let{minimized:t,setMinimized:n}=e;const[i,s]=r.useState(!1),{sessions:l,currentSessionId:c,createNewSession:p,loadSession:u,deleteSession:g,removeSession:x}=wt();return(0,d.jsxs)(Wt,{expanded:i,children:[(0,d.jsxs)(a.K,{expanded:i,title:"Menu",onClick:()=>s(!i),children:[(0,d.jsx)(o.ND1,{}),i&&(0,d.jsx)("span",{children:"Sessions"})]}),t&&(0,d.jsxs)(a.K,{expanded:i,title:"Expand Chat",onClick:()=>n(!t),children:[(0,d.jsx)(o.Ojn,{}),i&&(0,d.jsx)("span",{children:"Expand Chat"})]}),(0,d.jsxs)(a.K,{expanded:i,onClick:()=>{p()},children:[(0,d.jsx)(o.GGD,{}),i&&(0,d.jsx)("span",{children:"New Chat"})]}),(0,d.jsx)(_t,{disabled:!i,children:l.map(e=>(0,d.jsxs)(Yt,{children:[(0,d.jsx)(qt,{active:c===e.id,onClick:()=>u(e.id),children:e.title}),(0,d.jsx)(Vt,{onClick:t=>{t.stopPropagation(),g(e.id)},children:(0,d.jsx)(o.IXo,{size:12})})]},e.id))})]})},Wt=i.Ay.div`
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
`,_t=i.Ay.div`
  display: ${e=>e.disabled?"none":"flex"};
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,qt=i.Ay.div`
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
`,Yt=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Vt=i.Ay.button`
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
`,Xt=e=>{let{explorerExpanded:t,setExplorerExpanded:n}=e;const{selectedDate:i,setSelectedDate:a}=(0,O.M)(),{user:s}=(0,N.o)(),{entries:l,fetchEntries:p,addEntry:u,updateEntry:g,deleteEntry:x,updateEntryDate:h,renameTag:w,deleteTag:y,addTagToEntries:k,removeTagFromEntries:E}=function(e){const[t,n]=r.useState([]),i=r.useCallback(async()=>{if(!e)return;const t=T(e),r=(await(0,C.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}});n(A(r))},[e]),o=r.useCallback(async t=>{let{content:r,date:i}=t;if(!e)return null;const o={uid:e,id:j()(),content:r,date:i,createdAt:(new Date).toISOString()};return n(e=>A([...e,o])),await(0,C.gS)(T(e),o),o},[e]),a=r.useCallback(async(r,i)=>{if(!e)return;const o=t.find(e=>e.id===r);if(!o)return;const a={...o,content:i};n(e=>A(e.map(e=>e.id===r?a:e)));const s=await D(e,r);await Promise.all(s.map(t=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/entries/${t.id}`),a)))},[t,e]),s=r.useCallback(async t=>{if(!e)return;n(e=>A(e.map(e=>e.id===t.id?t:e)));const r=await D(e,t.id);await Promise.all(r.map(n=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/entries/${n.id}`),t)))},[e]),l=r.useCallback(async(e,n)=>{const r=t.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}});await Promise.all(r.map(async t=>{const r=JSON.parse(t.content);await s({...t,content:JSON.stringify({...r,tags:(r.tags||[]).map(t=>t===e?n:t)})})}))},[t,s]),d=r.useCallback(async e=>{const n=t.filter(t=>{try{return(JSON.parse(t.content).tags||[]).includes(e)}catch{return!1}});await Promise.all(n.map(async t=>{const n=JSON.parse(t.content);await s({...t,content:JSON.stringify({...n,tags:(n.tags||[]).filter(t=>t!==e)})})}))},[t,s]),c=r.useCallback(async(e,n)=>{const r=t.filter(t=>e.includes(t.id));await Promise.all(r.map(async e=>{const t=JSON.parse(e.content);await s({...e,content:JSON.stringify({...t,tags:Array.from(new Set([...t.tags||[],n]))})})}))},[t,s]),p=r.useCallback(async(e,n)=>{const r=t.filter(t=>e.includes(t.id));await Promise.all(r.map(async e=>{const t=JSON.parse(e.content);await s({...e,content:JSON.stringify({...t,tags:(t.tags||[]).filter(e=>e!==n)})})}))},[t,s]),u=r.useCallback(async(n,r)=>{if(!e)return;const i=t.find(e=>e.id===n);i&&await s({...i,date:r})},[t,s,e]),g=r.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const r=await D(e,t);await Promise.all(r.map(t=>(0,C.kd)((0,C.H9)(S.OO,`users/${e}/entries/${t.id}`))))},[e]);return{entries:t,setEntries:n,fetchEntries:i,addEntry:o,updateEntry:a,replaceEntry:s,deleteEntry:g,updateEntryDate:u,renameTag:l,deleteTag:d,addTagToEntries:c,removeTagFromEntries:p}}((null===s||void 0===s?void 0:s.uid)||""),{searchContent:z,setSearchContent:P,selectedTag:R,setSelectedTag:K,systemTags:I,availableTags:F,pickerTags:H,visibleEntries:J}=function(e){const[t,n]=r.useState(""),[i,a]=r.useState("favorite"),s=r.useMemo(()=>[{name:"all",icon:o.Vap,system:!0,position:"top"},{name:"favorite",icon:o.usP,system:!0,position:"top"},{name:"journal",icon:b.Fsq,system:!0,position:"top"},{name:"templates",icon:o.MRc,system:!0,position:"top"},{name:"prompts",icon:f.vTI,system:!0,position:"top"},{name:"other",icon:m.uoj,system:!0,position:"top"},{name:"archive",icon:o.OZ2,system:!0,position:"bottom"},{name:"trash",icon:o.IXo,system:!0,position:"bottom"}],[]),l=r.useMemo(()=>s.map(e=>e.name),[s]),d=r.useMemo(()=>Array.from(new Set(e.flatMap(e=>v(e.content)))).filter(e=>!l.includes(e)).sort(),[e,l]),c=r.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...d])).sort(),[d]),p=r.useCallback(e=>{const n=v(e.content),r=n.includes("trash"),o=n.includes("archive"),a=n.includes("templates"),s=n.includes("prompts");return""!==t.trim()?e.content.toLowerCase().includes(t.toLowerCase()):"all"===i?!r&&!o:"favorite"===i?n.includes("favorite")&&!r&&!o:"journal"===i?n.includes("journal")&&!a&&!r&&!o:"templates"===i?a&&!r&&!o:"prompts"===i?s&&!r&&!o:"other"===i?!r&&!o&&!a&&!s&&!n.includes("journal"):"archive"===i?o&&!r:"trash"===i?r:n.includes(i)&&!r&&!o&&!a&&!s},[t,i]),u=r.useMemo(()=>e.filter(p),[e,p]);return{searchContent:t,setSearchContent:n,selectedTag:i,setSelectedTag:a,systemTags:s,availableTags:d,pickerTags:c,visibleEntries:u,isEntryVisible:p}}(l),{cardRefs:U,cardHeights:B,totalHeight:G}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=r.useRef({}),[n,i]=r.useState({}),o=r.useCallback(()=>{const e={};Object.entries(t.current).forEach(t=>{let[n,r]=t;r&&(e[n]=r.offsetHeight)}),i(e)},[]);r.useEffect(()=>{const e=new ResizeObserver(()=>{o()});return Object.values(t.current).forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[o]),r.useEffect(()=>{o()},[...e,o]);const a=r.useMemo(()=>Object.values(n).reduce((e,t)=>e+t,0),[n]);return{cardRefs:t,cardHeights:n,totalHeight:a,refreshCardHeights:o}}([l]),[W,_]=r.useState(null),[q,Y]=r.useState([]),V=r.useRef(null),[X,Z]=r.useState(0),Q=r.useRef(null),[ee,te]=r.useState(0),[ne,re]=r.useState(!1),[ie,oe]=r.useState(!1),ae=r.useMemo(()=>l.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[l]);r.useLayoutEffect(()=>{const e=()=>{var e,t;te(null!==(e=null===(t=Q.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return Q.current&&t.observe(Q.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]),r.useLayoutEffect(()=>{const e=()=>{var e,t;Z(null!==(e=null===(t=V.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return V.current&&t.observe(V.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]);const se=r.useCallback(e=>{Y(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),le=r.useCallback(()=>{Y(J.map(e=>e.id))},[J]),de=r.useCallback(()=>{Y([])},[]);r.useEffect(()=>{Y(e=>e.filter(e=>l.some(t=>t.id===e)))},[l]);const ce=r.useMemo(()=>l.filter(e=>q.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[l,q]),pe=r.useMemo(()=>l.filter(e=>q.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[l,q]);r.useEffect(()=>{p()},[p]);const ue=()=>{window.scrollTo({top:0,behavior:"smooth"})},ge=(r.useMemo(()=>l.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("prompts")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{id:e.id,title:t.title||"Untitled Prompt"}}),[l]),g);return(0,d.jsx)(Zt,{children:(0,d.jsxs)(bt,{uid:s?s.uid:"",selectedNotesText:ce,noteTitles:pe,clearSelectedNotes:de,entries:l,children:[(0,d.jsxs)(M,{children:[(0,d.jsx)(c,{selectedTag:R,selectedDate:i,searchContent:z,onSearchChange:P,onDateChange:e=>{a(e.target.value)},onAddNote:async function(){const e="all"!==R?[R]:[];await u({date:i,content:JSON.stringify({...$,tags:e})}),ue()},onCopyAllNotes:async()=>{const e=ce.length>0?ce:J.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:le,onClearAll:de,selectedCount:q.length,expanded:t,panelWidth:X,minimized:ne,setMinimized:re}),(0,d.jsx)(Ht,{onClearAll:de,expanded:t,panelWidth:ee,minimized:ie,setMinimized:oe,notesMinimized:ne})]}),(0,d.jsx)(L,{systemTags:I,customTags:F,selectedTag:R,setSelectedTag:K,explorerExpanded:t,setExplorerExpanded:n,minimized:ne,setMinimized:re,selectedNoteIds:q,onRenameTag:async(e,t)=>{await w(e,t),R===e&&K(t)},onDeleteTag:async e=>{await y(e),R===e&&K("all")},onAddTagToSelected:async e=>{await k(q,e)},onRemoveTagFromSelected:async e=>{await E(q,e)}}),!ne&&(0,d.jsx)(ct,{entries:J,hoveredCardId:W,cardHeights:B,totalHeight:G,onScrollToCard:(e,t)=>{const n=U.current[e],r=V.current;if(!n||!r)return;const i=n.offsetTop,o="top"===t?i-100:i-r.clientHeight+n.offsetHeight+50;r.scrollTo({top:Math.max(0,o),behavior:"smooth"})}}),(0,d.jsx)(en,{ref:V,minimized:ne,children:!ne&&(0,d.jsx)(st,{entries:J,pickerTags:H,cardRefs:U,updateEntryDate:h,onHoverCard:_,onDeleteEntry:async function(e){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])){const t=l.find(t=>t.id===e);if(!t)return;const n=JSON.parse(t.content),r=Array.from(new Set([...(n.tags||[]).filter(e=>"archive"!==e),"trash"]));return void await g(e,JSON.stringify({...n,tags:r}))}await x(e)},onChangeEntry:ge,selectedNoteIds:q,onToggleSelection:se,templateOptions:ae})}),(0,d.jsx)(Qt,{ref:Q,minimized:ie,children:(0,d.jsx)(vt,{uid:(null===s||void 0===s?void 0:s.uid)||"",selectedNotesText:ce,noteTitles:pe,notesCount:q.length,clearSelectedNotes:de})}),(0,d.jsx)(Gt,{minimized:ie,setMinimized:oe})]})})},Zt=i.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Qt=i.Ay.div`
  flex: ${e=>{let{minimized:t}=e;return t?"0":"1"}};
  width: ${e=>{let{minimized:t}=e;return t?"0":"auto"}};
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
`,en=i.Ay.div`
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
//# sourceMappingURL=dashboard.376dcc49.chunk.js.map