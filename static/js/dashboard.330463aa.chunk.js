"use strict";(globalThis.webpackChunkmavis_ai_web||=[]).push([[945],{4247(e,t,n){n.r(t),n.d(t,{default:()=>Et});var r=n(5043),i=n(4138),o=n(1009),a=n(7246),s=n(4960),l=n(7149),d=n(579);const c=e=>{let{selectedTag:t,selectedDate:n,searchContent:r,onSearchChange:i,onDateChange:c,onAddNote:m,onCopyAllNotes:f,selectedCount:b,onSelectAll:y,onClearAll:w,expanded:v,panelWidth:k,minimized:j,setMinimized:C}=e;const S=v?188:52;return(0,d.jsxs)(p,{explorerWidth:S,barWidth:k,minimized:j,children:[(0,d.jsx)(g,{children:j?"Explorer":""===r.trim()?t.charAt(0).toUpperCase()+t.slice(1):"Search"}),!j&&(0,d.jsxs)(d.Fragment,{children:["journal"===t&&(0,d.jsx)(u,{children:(0,d.jsx)("input",{title:"Select date",type:"date",value:n,onChange:c})}),(0,d.jsxs)(x,{children:[(0,d.jsx)("input",{placeholder:"Search",value:r,onChange:e=>i(e.target.value)}),(0,d.jsx)(a.K,{title:"Clear search",onClick:()=>i(""),children:(0,d.jsx)(l.rOP,{})})]})]}),(0,d.jsxs)(h,{children:[!j&&(0,d.jsxs)(d.Fragment,{children:[b>0?(0,d.jsx)(a.K,{title:"Clear all notes",onClick:w,children:(0,d.jsx)(o.TG1,{})}):(0,d.jsx)(a.K,{title:"Select all visible notes",onClick:y,children:(0,d.jsx)(o.NLe,{})}),(0,d.jsx)(a.K,{title:"Copy all visible notes",onClick:f,children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Add note",onClick:m,children:(0,d.jsx)(s.n4h,{})})]}),(0,d.jsx)(a.K,{title:j?"Restore notes panel":"Minimize notes panel",onClick:()=>C(!0),children:j?(0,d.jsx)(o.mkN,{}):(0,d.jsx)(o.prK,{})})]})]})},p=i.Ay.div`
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
`;var m=n(2815),f=n(4966),b=n(2127);const y=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},w=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},v=e=>{if(!y(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))};var k=n(8222),j=n.n(k),C=n(2471),S=n(1286);const A=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),T=e=>{const t=(0,C.H9)(S.OO,"users",e);return(0,C.rJ)(t,"entries")},M=async(e,t)=>{const n=T(e);return(await(0,C.GG)((0,C.P)(n,(0,C._M)("id","==",t)))).docs};var z=n(6625),E=n(7950);const $=e=>{let{children:t}=e;const n=document.getElementById("header-portal");return n?(0,E.createPortal)(t,n):null},N={title:"",type:"record",tags:[],text:"",color:"#fff",locked:!1,pinned:!1,collapsed:!1},D=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],P=e=>e.replace(/\b\w/g,e=>e.toUpperCase());var O=n(5561),L=n(5263);const R=e=>{let{systemTags:t,customTags:n,selectedTag:r,setSelectedTag:i,explorerExpanded:s,setExplorerExpanded:l,minimized:c,setMinimized:p}=e;const u=e=>e.replace(/\b\w/g,e=>e.toUpperCase());return(0,d.jsxs)(K,{expanded:s,children:[(0,d.jsxs)(a.K,{expanded:s,title:"Menu",onClick:()=>l(!s),children:[(0,d.jsx)(o.ND1,{}),s&&(0,d.jsx)("span",{children:"Menu"})]}),c&&(0,d.jsxs)(a.K,{expanded:s,title:"Expand Notes Explorer",onClick:()=>p(!c),children:[(0,d.jsx)(L.$ZN,{}),s&&(0,d.jsx)("span",{children:"Expand Notes Explorer"})]}),t.filter(e=>"top"===e.position).map(e=>{const t=e.icon;return(0,d.jsxs)(a.K,{expanded:s,selected:r===e.name,title:e.name,onClick:()=>i(e.name),children:[(0,d.jsx)(t,{}),s&&(0,d.jsx)("span",{children:u(e.name)})]},e.name)}),n.map(e=>(0,d.jsxs)(a.K,{expanded:s,selected:r===e,title:u(e),onClick:()=>i(e),children:[(0,d.jsx)(o.cnX,{}),s&&(0,d.jsx)("span",{children:u(e)})]},e)),t.filter(e=>"bottom"===e.position).map(e=>{const t=e.icon;return(0,d.jsxs)(a.K,{expanded:s,selected:r===e.name,title:e.name,onClick:()=>i(e.name),children:[(0,d.jsx)(t,{}),s&&(0,d.jsx)("span",{children:u(e.name)})]},e.name)})]})},K=i.Ay.div`
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
`;var F=n(5369);const I=e=>{let{title:t,locked:n,collapsed:r,speaking:i,isFavorite:l,selected:c,onToggleSelection:p,speak:u,stopSpeaking:g,copyFormattedContent:x,onToggleFavorite:h,onToggleLock:m,onToggleCollapse:f,onTitleChange:b}=e;return(0,d.jsxs)(U,{children:[(0,d.jsxs)(W,{children:[(0,d.jsx)(H,{title:c?"Unselect note":"Select note",onClick:p,children:c?"\u2713":""}),l?(0,d.jsx)(a.K,{disabled:n,title:"Remove favorite",onClick:h,children:(0,d.jsx)(F.gt3,{})}):(0,d.jsx)(a.K,{disabled:n,title:"Add favorite",onClick:h,children:(0,d.jsx)(o.usP,{})}),(0,d.jsx)(B,{title:"Note name",role:"textbox",contentEditable:!n,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>b(e.currentTarget.innerText),children:t})]}),(0,d.jsxs)(J,{children:[i?(0,d.jsx)(a.K,{title:"Stop hearing note",onClick:g,children:(0,d.jsx)(o.cKW,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Hear note",onClick:u,children:(0,d.jsx)(o.o77,{})}),(0,d.jsx)(a.K,{title:"Copy note",onClick:x,children:(0,d.jsx)(o.nxz,{})}),n?(0,d.jsx)(a.K,{title:"Unlock note",onClick:m,children:(0,d.jsx)(o.F5$,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Lock note",onClick:m,children:(0,d.jsx)(o.K4k,{})}),r?(0,d.jsx)(a.K,{title:"Expand note",onClick:f,children:(0,d.jsx)(s.BSQ,{})}):(0,d.jsx)(a.K,{title:"Collapse note",onClick:f,children:(0,d.jsx)(s.q2p,{})})]})]})},H=i.Ay.span`
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
`,U=i.Ay.header`
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
`,W=i.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  margin: 0;
  padding: 0;

  color: black;
`,B=i.Ay.span`
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
`,J=i.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`;var G=n(7996),_=n(4993),q=n(3859),Y=n(6801),V=n(7353),X=n(285),Z=n(578),Q=n(8550),ee=n(3596),te=n(5312),ne=n.n(te);const re=e=>{let{label:t,expression:n,onExecute:r}=e;return(0,d.jsx)("button",{className:"markdownButton",onClick:()=>r(n),children:t})},ie=e=>{let{value:t,locked:n,editing:r,textareaRef:i,markdownRef:o,setValue:a,setEditing:s,onSave:l,onMarkdownClick:c,processMarkdown:p,onExecuteExpression:u}=e;return r?(0,d.jsx)(ae,{ref:i,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:t||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,a(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)&&(l(),s(!1))}}):(0,d.jsx)(oe,{ref:o,onClick:e=>{if(n)return;const t=e.target;c(t.innerText||t.textContent||"")},children:(0,d.jsx)(G.oz,{rehypePlugins:[_.A],components:{button(e){var t,n,r;const i=decodeURIComponent(String(null!==(t=null===(n=e.node)||void 0===n||null===(r=n.properties)||void 0===r?void 0:r.dataExpression)&&void 0!==t?t:""));return(0,d.jsx)(re,{label:String(e.children),expression:i,onExecute:u})}},remarkPlugins:[[V.A,{padSpaceAfter:!1,emoticon:!0}],[Q.A,{tight:!0,ordered:!0}],[q.A,{stringLength:ne()}],X.A,Z.A,ee.A,Y.A],children:p(t||"* \u2753 What do you have for today?")})})},oe=i.Ay.div`
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
`,ae=i.Ay.textarea`
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
`;var se=n(5922);const le=e=>{let{colors:t,onColorClicked:n}=e;return(0,E.createPortal)((0,d.jsx)("div",{onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),style:{position:"absolute",top:"120px",right:"50%",display:"flex",flexDirection:"column",gap:"4px",padding:"8px",background:"white",border:"1px solid #323232",borderRadius:"8px",boxShadow:"0 10px 30px rgba(0,0,0,0.25)",zIndex:999999},children:t.map(e=>(0,d.jsx)("button",{style:{backgroundColor:e,width:60,height:24,border:"1px solid #666",borderRadius:4,cursor:"pointer",padding:0},onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)}},e))}),document.body)},de=e=>{let{options:t,onPicked:n}=e;return(0,E.createPortal)((0,d.jsx)("div",{onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),style:{position:"absolute",top:"120px",right:"50%",display:"flex",flexDirection:"column",gap:"4px",padding:"8px",background:"white",border:"1px solid #323232",borderRadius:"8px",boxShadow:"0 10px 30px rgba(0,0,0,0.25)",zIndex:999999},children:t.map((e,t)=>(0,d.jsx)("button",{style:{backgroundColor:"#cfcfcf",width:"100%",height:24,border:"1px solid #666",borderRadius:4,cursor:"pointer",padding:"2px"},onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)},children:e.title},t))}),document.body)},ce=e=>{let{isLocked:t,listening:n,aiLoading:r,isArchived:i,isTrash:s,showColorPicker:c,showTemplatePicker:p,colorPickerRef:u,templatePickerRef:g,noteColors:x,templateOptions:h,startListening:m,stopListening:f,undoLastChange:b,handleAI:y,archiveNote:w,trashNote:v,setShowColorPicker:k,setShowTemplatePicker:j,onColorSelected:C,onTemplateSelected:S}=e;return(0,d.jsxs)(pe,{children:[(0,d.jsxs)(ue,{children:[(0,d.jsx)(a.K,{disabled:t,title:"Change note background color",onClick:()=>k(e=>!e),children:(0,d.jsx)(l.$di,{})}),(0,d.jsx)(a.K,{disabled:t,title:"Load template",onClick:()=>j(e=>!e),children:(0,d.jsx)(o.MRc,{})}),(0,d.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"AI assistant",onMouseDown:e=>e.preventDefault(),onClick:y,children:(0,d.jsx)(o.Ojn,{color:r?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"Revert last change",onMouseDown:e=>e.preventDefault(),onClick:b,children:(0,d.jsx)(o.cO3,{})}),n?(0,d.jsx)(a.K,{disabled:t,title:"Stop listening",onClick:f,children:(0,d.jsx)(o.kGk,{color:"#2563eb"})}):(0,d.jsx)(a.K,{disabled:t,title:"Listen note",onClick:m,children:(0,d.jsx)(o.Rrl,{})}),(0,d.jsx)(se.iJU,{}),(0,d.jsx)(a.K,{disabled:t,title:i?"Unarchive note":"Archive note",onClick:w,children:(0,d.jsx)(o.OZ2,{color:i?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:t,title:s?"Delete permanently":"Move to trash",onClick:v,children:(0,d.jsx)(o.IXo,{color:s?"#dc2626":void 0})})]}),c&&(0,d.jsx)(ge,{ref:u,children:(0,d.jsx)(le,{colors:x,onColorClicked:C})}),p&&(0,d.jsx)(xe,{ref:g,children:(0,d.jsx)(de,{options:h,onPicked:S})})]})},pe=i.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 0 0;
`,ue=i.Ay.span`
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
`,ge=i.Ay.div`
  position: relative;
  width: 100%;
`,xe=i.Ay.div`
  position: relative;
  width: 100%;
`,he=e=>{let{date:t,tags:n,availableTags:r,isLocked:i,tagPickerRef:a,showTagPicker:l,creatingTag:c,newTagName:p,setShowTagPicker:u,setCreatingTag:g,setNewTagName:x,hasTag:h,toggleTag:m,createTag:f,formatTag:b,formatDate:y}=e;return(0,d.jsxs)(me,{children:[(0,d.jsxs)(be,{children:[(0,d.jsx)(fe,{children:y(t)}),n.map(e=>(0,d.jsx)(ye,{onClick:()=>!i&&m(e),children:b(e)},e))]}),(0,d.jsxs)(we,{ref:a,children:[!i&&(0,d.jsx)(ve,{onClick:()=>u(!l),children:(0,d.jsx)(s.n4h,{})}),l&&(0,E.createPortal)((0,d.jsxs)(ke,{children:[r.map(e=>(0,d.jsxs)(je,{className:h(e)?"selected":"",onClick:()=>m(e),children:[(0,d.jsx)(o.cnX,{}),(0,d.jsx)("span",{children:b(e)})]},e)),c?(0,d.jsx)(Se,{autoFocus:!0,placeholder:"Tag name...",value:p,onChange:e=>x(e.target.value),onKeyDown:e=>{"Enter"===e.key&&f(p),"Escape"===e.key&&(g(!1),x(""))},onBlur:()=>{p.trim()?f(p):g(!1)}}):(0,d.jsxs)(Ce,{onClick:()=>g(!0),children:[(0,d.jsx)(o.cnX,{}),"New Tag"]})]}),document.body)]})]})},me=i.Ay.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row !important;
  justify-content: flex-start !important;
  gap: 8px;
`,fe=i.Ay.span`
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
`,be=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  gap: 6px;
  width: fit-content;
  margin-left: 10px;
`,ye=i.Ay.span`
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
`,we=i.Ay.div`
  position: relative;
  flex: 0 0;
  width: fit-content;
  margin: 0;
`,ve=i.Ay.span`
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
`,ke=i.Ay.div`
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
`,je=i.Ay.span`
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
`,Ce=i.Ay.span`
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
`,Se=i.Ay.input`
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
`;function Ae(){const[e,t]=(0,r.useState)(!1),[n,i]=(0,r.useState)(""),o=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return void console.warn("SpeechRecognition API not supported");const n=new e;n.lang="pt-BR",n.continuous=!0,n.interimResults=!0,n.onresult=e=>{let t="";for(let n=0;n<e.results.length;n++)t+=e.results[n][0].transcript;i(t)},n.onend=()=>{t(!1)},o.current=n},[]);return{listening:e,transcript:n,startListening:()=>{var e;null===(e=o.current)||void 0===e||e.start(),t(!0)},stopListening:()=>{var e;null===(e=o.current)||void 0===e||e.stop(),t(!1)}}}function Te(){const[e,t]=(0,r.useState)(!1);return{speak:function(e){const n=function(e){return function(e){return e.replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/#+\s/g,"").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/[_~]/g,"").replace(/\n+/g,". ").trim()}(e).replace(/[^\p{L}\p{N}\s]/gu," ").replace(/\s+/g," ").trim()}(e),r=new SpeechSynthesisUtterance(n),i=function(e){return/[\xe3\xf5\xe1\xe0\xe2\xe9\xea\xed\xf3\xf4\xfa\xe7]/i.test(e)?"pt-BR":"en-US"}(n),o=speechSynthesis.getVoices().find(e=>e.lang.startsWith(i));o&&(r.voice=o),r.lang=i,r.onstart=()=>t(!0),r.onend=()=>t(!1),speechSynthesis.speak(r)},stopSpeaking:()=>{speechSynthesis.cancel(),t(!1)},speaking:e}}const Me=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},ze=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=new Date;return(e=e.replace(/@date\b/g,()=>i.toLocaleDateString()).replace(/@time\b/g,()=>i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>i.toLocaleString()).replace(/@dayofweek\b/g,()=>i.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(i.getMonth()+1)).replace(/@monthname\b/g,()=>i.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(i.getFullYear())).replace(/@today\b/g,()=>i.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const r=Number(t),i=Number(n);return r&&i?(r/(i*i)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-i.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const r=Math.max(-1,Math.min(1,Number(n))),i=t.isMobile?5:10,o=Math.abs(r),a=`${Math.round(100*r)}%`,s=Math.round(o*i);let l=r>=0?"\u2588".repeat(s)+"\u2591".repeat(i-s):"\u2591".repeat(i-s)+"\u2588".repeat(s);const d=Math.max(0,Math.floor((i-a.length)/2));return l.slice(0,d)+a+l.slice(d+a.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&r<5?ze(e,t,n,r+1):e},Ee=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,$e=(e,t)=>{const n={};e.replace(Ee,(e,t,r)=>(n[t]=r.trim(),""));let r=!0;for(;r;){r=!1;for(const[e,i]of Object.entries(n)){if(!i.includes("@"))continue;const o=ze(Ne(i,n),Me({...t,...n}));o!==i&&(n[e]=o,r=!0)}}return n},Ne=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var r;return null!==(r=t[n])&&void 0!==r?r:""}),De=(e,t,n)=>{const r=$e(e),i=Me({...t,...Object.fromEntries(Object.entries(r).map(e=>{let[t,n]=e;if(""===n)return[t,""];const r=Number(n);return[t,Number.isNaN(r)?n:r]}))});return ze(Ne((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),r),i,n)};function Pe(){const[e,t]=(0,r.useState)(""),[n,i]=(0,r.useState)(""),[o,a]=(0,r.useState)({city:"",country:""});return(0,r.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async n=>{let{coords:r}=n;try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${r.latitude}&longitude=${r.longitude}&current=temperature_2m,weather_code`),n=await t.json();let d="",c="";try{var i,o,a,s;const e=await fetch(`https://geocode.maps.co/reverse?lat=${r.latitude}&lon=${r.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();d=(null===(i=t.address)||void 0===i?void 0:i.city)||(null===(o=t.address)||void 0===o?void 0:o.town)||(null===(a=t.address)||void 0===a?void 0:a.village)||"",c=(null===(s=t.address)||void 0===s?void 0:s.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(n.current.temperature_2m)}\xb0C`,weather:(l=n.current.weather_code,0===l?"\u2600\ufe0f Sunny":[1,2].includes(l)?"\ud83c\udf24\ufe0f Partly Cloudy":3===l?"\u2601\ufe0f Cloudy":[45,48].includes(l)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(l)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(l)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(l)?"\u2744\ufe0f Snowing":[80,81,82].includes(l)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(l)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:d,country:c})}catch(d){t(d)}var l}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),i(e.weather),a({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:o}}var Oe=n(503);const Le=new TextEncoder,Re=new TextDecoder;function Ke(e){const t=new Uint8Array(e);let n="";for(let r=0;r<t.length;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function Fe(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function Ie(e,t){const n=await crypto.subtle.importKey("raw",Le.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function He(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),r=crypto.getRandomValues(new Uint8Array(16)),i=await Ie(t,r);return{encrypted:Ke(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},i,Le.encode(e))),iv:Ke(n),salt:Ke(r)}}(t,e);await(0,C.BN)((0,C.H9)(S.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function Ue(e){const t=await(0,C.x7)((0,C.H9)(S.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,r){const i=await Ie(r,Fe(n)),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:Fe(t)},i,Fe(e));return Re.decode(o)}(n.encryptedApiKey,n.iv,n.salt,e)}async function We(e,t,n,r,i,o){console.log(i);const a=o||await Ue(e);if(!a)throw new Error("OpenAI API Key not configured.");const s=new Oe.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),l=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${r}\n`;return await s.responses.create({model:i||"gpt-5.6-luna",input:l})}const Be="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const Je=e=>{let{id:t,date:n,content:i,onDeleteCard:o,onChangeContent:a,tags:s,selected:l,onToggleSelection:c,templateOptions:p}=e;const{listening:u,transcript:g,startListening:x,stopListening:h}=Ae(),{speak:m,speaking:f,stopSpeaking:b}=Te(),[v,k]=r.useState(!1),[j,C]=r.useState(!1),[S,A]=r.useState(!1),T=r.useRef(null),M=r.useRef(null),E=r.useRef(null),$=r.useRef(null),O=r.useRef(null),[L,R]=r.useState(window.innerWidth<1260),{user:K}=(0,z.o)(),{temperature:F,weather:H,location:U}=Pe(),{setCursorPosition:W,findBestCursorPosition:B}=function(e){let{editing:t,textareaRef:n}=e;const[i,o]=(0,r.useState)(null);return(0,r.useEffect)(()=>{if(!t||!n.current||null===i)return;const e=n.current;e.focus(),e.setSelectionRange(i,i),requestAnimationFrame(()=>{const t=document.createElement("div"),n=window.getComputedStyle(e);t.style.position="absolute",t.style.visibility="hidden",t.style.whiteSpace="pre-wrap",t.style.wordWrap="break-word",t.style.font=n.font,t.style.lineHeight=n.lineHeight,t.style.padding=n.padding,t.style.width=`${e.clientWidth}px`,t.textContent=e.value.substring(0,i),document.body.appendChild(t);const r=t.offsetHeight;document.body.removeChild(t);const o=e.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:o+r-window.innerHeight/2,behavior:"smooth"})})},[t,i,n]),{cursorPosition:i,setCursorPosition:o,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const r=n.split(" ");for(let i=Math.min(r.length,8);i>=2;i--)for(let e=0;e<=r.length-i;e++){const n=r.slice(e,e+i).join(" "),o=t.indexOf(n);if(o>=0)return o}for(const i of r){if(i.length<4)continue;const e=t.indexOf(i);if(e>=0)return e}return t.length}}}({editing:v,textareaRef:T});!function(e){let{tagPickerRef:t,colorPickerRef:n,templatePickerRef:i,closeTagPicker:o,closeColorPicker:a,closeTemplatePicker:s}=e;(0,r.useEffect)(()=>{const e=e=>{const r=e.target;t.current&&!t.current.contains(r)&&o(),n.current&&!n.current.contains(r)&&a(),i.current&&!i.current.contains(r)&&s()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t,n,i,o,a,s])}({tagPickerRef:E,colorPickerRef:$,templatePickerRef:O,closeTagPicker:()=>{Y(!1),V(!1)},closeColorPicker:()=>{C(!1)},closeTemplatePicker:()=>{A(!1)}}),r.useEffect(()=>{const e=()=>{R(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const J=r.useMemo(()=>((e,t)=>{const n=t(e)?JSON.parse(e):{...N,text:e};return{...N,...n,tags:Array.from(new Set([...n.tags||[]]))}})(i,y),[i]),{showTagPicker:G,creatingTag:_,newTagName:q,setShowTagPicker:Y,setCreatingTag:V,setNewTagName:X,hasTag:Z,toggleTag:Q,createTag:ee}=function(e){let{tags:t,onTagsChange:n}=e;const[i,o]=(0,r.useState)(!1),[a,s]=(0,r.useState)(!1),[l,d]=(0,r.useState)(""),c=e=>t.includes(e),p=e=>{const r=Array.from(new Set(c(e)?t.filter(t=>t!==e):[...t,e]));n(r)};return{showTagPicker:i,creatingTag:a,newTagName:l,setShowTagPicker:o,setCreatingTag:s,setNewTagName:d,hasTag:c,toggleTag:p,createTag:e=>{const t=e.trim().toLowerCase();t&&(p(t),d(""),s(!1))}}}({tags:J.tags,onTagsChange:e=>{a(t,JSON.stringify({...J,tags:e}))}}),[te,ne]=r.useState(J.text||""),[re,oe]=r.useState([]),ae=r.useCallback(e=>{oe(t=>t[t.length-1]===e?t:[...t,e])},[]),{aiLoading:se,handleAI:le}=function(e){let{userId:t,value:n,textareaRef:i,pushHistory:o,onContentChange:a}=e;const[s,l]=(0,r.useState)(!1);return{aiLoading:s,handleAI:async()=>{if(!t)return void alert("User not authenticated");let e=await Ue(t);if(!e){var r;if(e=(null===(r=window.prompt("OpenAI API Key not configured.\n\nEnter your OpenAI API Key:"))||void 0===r?void 0:r.trim())||"",!e)return;await He(t,e)}const s=window.prompt("Examples:\n\nFix grammar\nSummarize\nRewrite professionally\nTranslate to Portuguese");if(null!==s&&void 0!==s&&s.trim()){l(!0);try{o(n);const r=i.current;if(r&&r.selectionStart!==r.selectionEnd){const i=r.selectionStart,o=r.selectionEnd,l=n.substring(i,o),d=await We(t,Be,s,l,"gpt-5.6-luna",e),c=n.substring(0,i)+d.output_text.trim()+n.substring(o);return void a(c)}const l=await We(t,Be,s,n,"gpt-5.6-luna",e),d=`${n}\n\n${l.output_text.trim()}`;a(d)}catch(d){console.error(d),alert(d instanceof Error?d.message:"AI request failed")}finally{l(!1)}}}}}({userId:null===K||void 0===K?void 0:K.uid,value:te,textareaRef:T,pushHistory:ae,onContentChange:e=>{ne(e),a(t,JSON.stringify({...J,text:e}))}}),de=()=>{if(Z("trash"))return void o(t,!0);const e=(e=>Array.from(new Set([...e.filter(e=>"archive"!==e),"trash"])))(J.tags);a(t,JSON.stringify({...J,tags:e}))},pe=e=>Z("templates")?e:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/week\b/g,()=>{const e=new Date(n.getFullYear(),0,1),t=Math.ceil(((n.getTime()-e.getTime())/864e5+e.getDay()+1)/7);return String(t)}).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const r=Number(t),i=Number(n);return String(Math.floor(Math.random()*(i-r+1))+r)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",r=Number(t);return Array.from({length:r},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const r=new Date(t);let i=n.getFullYear()-r.getFullYear();const o=n.getMonth()-r.getMonth();return(o<0||0===o&&n.getDate()<r.getDate())&&i--,String(i)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const r=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(r/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})}(e,{weather:H,temperature:F,city:U.city,country:U.country});r.useEffect(()=>{if(!u&&g){ae(te);const e=te+g;a(t,JSON.stringify({...J,text:e})),ne(e)}},[u,g,te,t,J,ae,a]);const ue=J.locked;return(0,d.jsx)(Ge,{selected:l,children:(0,d.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:J.color||"#eee"},children:[(0,d.jsx)(I,{title:J.title,locked:J.locked,collapsed:J.collapsed,selected:l,onToggleSelection:()=>c(t),speaking:f,isFavorite:Z("favorite"),speak:()=>m(te),stopSpeaking:b,copyFormattedContent:async()=>{if(!M.current)return;const e=M.current.innerHTML,t=M.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>Q("favorite"),onToggleLock:()=>a(t,JSON.stringify({...J,locked:!J.locked})),onToggleCollapse:()=>a(t,JSON.stringify({...J,collapsed:!J.collapsed})),onTitleChange:e=>a(t,JSON.stringify({...J,title:pe(e)}))}),J.collapsed?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ie,{value:te,locked:J.locked,editing:v,textareaRef:T,markdownRef:M,setValue:ne,setEditing:k,processMarkdown:e=>De(e,{temperature:F,weather:H,city:U.city,country:U.country},L),onExecuteExpression:e=>{ae(te);const n=((e,t,n)=>{const r=t.match(/^\$\{(\w+)\}=(.*)$/);if(!r)return e;const i=r[1];let o=r[2];const a=$e(e);o=ze(o,Me({...n,...a})),o=o.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=a[t])&&void 0!==n?n:"")});const s="${"+i+"}="+Function(`return (${o})`)(),l=new RegExp(`^\\$\\{${i}\\}\\s*=([^\\r\\n]*)`,"m");return l.test(e)?e.replace(l,s):e.trimEnd()+"\n"+s})(te,e,{temperature:F,weather:H,city:U.city,country:U.country});ne(n),a(t,JSON.stringify({...J,text:n}))},onSave:()=>((e,t)=>{const n=pe(t);a(e,JSON.stringify({...J,text:n})),ne(n)})(t,te),onMarkdownClick:e=>{ae(te);const t=B(e,te);W(t),k(!0)}}),(0,d.jsx)("footer",{className:"footer",children:(0,d.jsxs)("span",{className:"footbox",children:[(0,d.jsx)(he,{date:n,tags:J.tags,availableTags:s,isLocked:ue,tagPickerRef:E,showTagPicker:G,creatingTag:_,newTagName:q,setShowTagPicker:Y,setCreatingTag:V,setNewTagName:X,hasTag:Z,toggleTag:Q,createTag:ee,formatTag:P,formatDate:w}),(0,d.jsx)(ce,{isLocked:ue,listening:u,aiLoading:se,isArchived:Z("archive"),isTrash:Z("trash"),showColorPicker:j,showTemplatePicker:S,colorPickerRef:$,templatePickerRef:O,noteColors:D,templateOptions:p,startListening:()=>{J.locked||x()},stopListening:h,undoLastChange:()=>{const e=re[re.length-1];e&&(oe(e=>e.slice(0,-1)),ne(e),a(t,JSON.stringify({...J,text:e})))},handleAI:()=>{J.locked||le()},archiveNote:()=>{J.locked||(()=>{const e=(e=>e.includes("archive")?e.filter(e=>"archive"!==e):[...e.filter(e=>"trash"!==e),"archive"])(J.tags);a(t,JSON.stringify({...J,tags:e}))})()},trashNote:()=>{J.locked||de()},setShowColorPicker:C,setShowTemplatePicker:A,onColorSelected:e=>{a(t,JSON.stringify({...J,color:e})),C(!1)},onTemplateSelected:e=>{ae(te);let n=e.text.replace(/\\\$\{/g,"${");if(n=pe(n),!J.locked){const r=Array.from(new Set([...J.tags||[],...e.tags||[]]));a(t,JSON.stringify({...J,collapsed:!1,color:e.color,text:n,title:pe(e.title),tags:r})),ne(n)}}})]})})]})]})},t)},Ge=i.Ay.div`
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

`,_e=e=>{let{entries:t,pickerTags:n,cardRefs:r,onHoverCard:i,onDeleteEntry:o,onChangeEntry:a,selectedNoteIds:s,onToggleSelection:l,templateOptions:c}=e;return(0,d.jsx)(qe,{children:t.map((e,t)=>(0,d.jsx)("div",{ref:t=>{r.current[e.id]=t},onMouseEnter:()=>i(e.id),onMouseLeave:()=>i(null),children:(0,d.jsx)(Je,{id:e.id,date:e.date,number:t+1,content:e.content,onDeleteCard:o,onChangeContent:a,tags:n,selected:s.includes(e.id),onToggleSelection:l,templateOptions:c})},e.id))})},qe=i.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`,Ye=e=>{try{return JSON.parse(e).color||"#cccccc"}catch{return"#cccccc"}},Ve=e=>{let{entries:t,hoveredCardId:n,cardHeights:r,totalHeight:i,onScrollToCard:s}=e;return(0,d.jsx)(Xe,{children:t.map(e=>(0,d.jsxs)(Ze,{$selected:n===e.id,style:{backgroundColor:Ye(e.content),height:`${Math.max((r[e.id]||40)/Math.max(i,1)*100,24)}px`},children:[(0,d.jsx)(a.K,{title:"Go to note top",onClick:()=>s(e.id,"top"),children:(0,d.jsx)(o.wAb,{})}),(0,d.jsx)(a.K,{title:"Go to note bottom",onClick:()=>s(e.id,"bottom"),children:(0,d.jsx)(o.fK4,{})})]},e.id))})},Xe=i.Ay.div`
  padding-top: 20px;
  width: 60px;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;
  background: #d0d0d0;
`,Ze=i.Ay.div`
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
`,Qe=(0,r.createContext)(void 0),et="You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.";function tt(e){let{children:t,uid:n,selectedNotesText:i,noteTitles:o,clearSelectedNotes:a}=e;const s=(e=>{let{uid:t,selectedNotesText:n,noteTitles:i,clearSelectedNotes:o}=e;const[a,s]=(0,r.useState)(""),[l,d]=(0,r.useState)(""),[c,p]=(0,r.useState)([]),[u,g]=(0,r.useState)(!1),[x,h]=(0,r.useState)("gpt-5.6-luna"),[m,f]=(0,r.useState)(!0),b=(0,r.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),y=(0,r.useCallback)(async()=>{const e=a.trim();if(!e||u)return;if(!t)return void p(e=>[...e,{id:j()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const r=i.length>0?`Notes:\n${i.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",d=b(c),h={id:j()(),role:"user",content:`${r}${e}`};p(e=>[...e,h]),s(""),g(!0);const f=[];m&&d&&f.push(`History:\n${d}`),n.trim()&&f.push(`Context:\n${n}`);const y=f.join("\n\n");try{var w,v;const n=await We(t,`${et}\n\n${l}`,e,y,x),r={id:j()(),role:"assistant",content:n.output_text.trim()||"No response was returned.",tokens:{input:(null===(w=n.usage)||void 0===w?void 0:w.input_tokens)||0,output:(null===(v=n.usage)||void 0===v?void 0:v.output_tokens)||0}};p(e=>[...e,r]),o()}catch(k){console.error("Mavis error:",k);const e=k instanceof Error?k.message:"An unexpected error occurred.";p(t=>[...t,{id:j()(),role:"assistant",content:e}])}finally{g(!1)}},[a,u,t,i,n,x,l,c,m,b,o]),w=(0,r.useCallback)(async()=>{if(u||0===c.length)return;if(!t)return void p(e=>[...e,{id:j()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const e=b(c);g(!0);try{var n,r;const i=await We(t,`${et}\n\n${l}`,"Summarize the entire conversation history into one comprehensive, self-contained message.\n\nInclude all important information from the conversation, especially:\n\n- Every requirement and specification\n- Every decision that was made\n- Every implementation detail\n- Every instruction and constraint\n- Important facts, dates, names, titles, values, and references\n- Code-related decisions, expected behavior, and affected files or components\n- Problems, errors, solutions, and changes that were discussed\n- Rejected alternatives and the reasons they were rejected\n- Open questions, unresolved issues, assumptions, and pending tasks\n- The current state of the work\n- Clear next steps, if any\n\nPreserve the meaning and intent of the original conversation. Do not invent information or make decisions that were not made. Clearly distinguish confirmed decisions from suggestions, assumptions, and unresolved points.\n\nWrite the result in Markdown using clear sections and bullet points. Make it detailed enough that a new conversation could continue the work using only this summary. Do not mention that you are summarizing. Do not omit technical details.",`Conversation history:\n${e}`,x),o={id:j()(),role:"assistant",content:i.output_text.trim()||"No summary was returned.",tokens:{input:(null===(n=i.usage)||void 0===n?void 0:n.input_tokens)||0,output:(null===(r=i.usage)||void 0===r?void 0:r.output_tokens)||0}};p([o])}catch(i){console.error("Mavis summary error:",i);const e=i instanceof Error?i.message:"An unexpected error occurred.";p(t=>[...t,{id:j()(),role:"assistant",content:e}])}finally{g(!1)}},[u,c,t,b,x,l]),v=(0,r.useCallback)(e=>{p("all"!==e?t=>t.filter(t=>t.id!==e):[])},[]),k=(0,r.useCallback)(()=>{p([])},[]);return{prompt:a,setPrompt:s,systemPrompt:l,setSystemPrompt:d,messages:c,isLoading:u,sendPrompt:y,deleteMessage:v,clearMessages:k,summarizeHistory:w,selectedModel:x,setSelectedModel:h,includeHistory:m,setIncludeHistory:f}})({uid:n,selectedNotesText:i,noteTitles:o,clearSelectedNotes:a});return(0,d.jsx)(Qe.Provider,{value:s,children:t})}function nt(){const e=(0,r.useContext)(Qe);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}const rt=["gpt-5-mini","gpt-5.6-luna","gpt-5.6-terra","gpt-5.6-sol"],it=e=>{let{uid:t,selectedNotesText:n,noteTitles:i,notesCount:s,clearSelectedNotes:c}=e;const[p,u]=r.useState(!1),{listening:g,transcript:x,startListening:h,stopListening:m}=Ae(),{speak:b,speaking:y,stopSpeaking:w}=Te(),{prompt:v,setPrompt:k,messages:j,isLoading:C,sendPrompt:S,deleteMessage:A,selectedModel:T,setSelectedModel:M,includeHistory:z,setIncludeHistory:E,summarizeHistory:$}=nt(),[N,D]=r.useState(!1);r.useEffect(()=>{!g&&x&&k(e=>e.length>0?`${e} ${x}`:x)},[g,x]);return(0,d.jsxs)(ut,{children:[(0,d.jsxs)(gt,{children:[j.map(e=>(0,d.jsxs)(ot,{role:e.role,children:[(0,d.jsx)(st,{role:e.role,children:e.tokens&&(0,d.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,d.jsx)(xt,{role:e.role,children:(0,d.jsx)(G.oz,{remarkPlugins:[q.A],children:e.content})}),(0,d.jsxs)(at,{role:e.role,children:[(0,d.jsx)(a.K,{title:"Read message",onClick:()=>{return t=e.content,void(y?w():b(t));var t},children:y?(0,d.jsx)(o.TG1,{}):(0,d.jsx)(o.o77,{})}),(0,d.jsx)(a.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Delete message",onClick:()=>A(e.id),children:(0,d.jsx)(o.IXo,{})})]})]},e.id)),C&&(0,d.jsx)(xt,{role:"assistant",children:"Thinking..."})]}),(0,d.jsx)(ht,{expanded:p,children:(0,d.jsxs)(mt,{children:[(0,d.jsxs)(dt,{children:[(0,d.jsxs)(bt,{children:[(0,d.jsxs)(yt,{style:{margin:"0px !important"},title:"Selecionar modelo de IA",onClick:()=>{D(!N)},children:[(0,d.jsx)(o.Ojn,{}),(0,d.jsx)(wt,{children:T})]}),N&&(0,d.jsx)(vt,{children:rt.map(e=>(0,d.jsxs)(kt,{className:T===e?"selected":"",onClick:()=>{M(e),D(!1)},title:e,children:[(0,d.jsx)(o.Ojn,{}),(0,d.jsx)("span",{children:e})]},e))})]}),(0,d.jsxs)(ct,{children:["Selected Notes: ",s]})]}),(0,d.jsxs)(lt,{children:[(0,d.jsx)(ft,{expanded:p,value:v,placeholder:"Ask Mavis...",disabled:C,onChange:e=>k(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),S())}}),(0,d.jsxs)(pt,{children:[(0,d.jsx)(a.K,{title:"Summarize History",onClick:()=>{$()},children:(0,d.jsx)(l.Z1M,{})}),(0,d.jsx)(a.K,{title:"Include chat history in prompts",children:(0,d.jsx)(l.bfP,{color:z?"#2563eb":"#555",onClick:()=>E(!z)})}),(0,d.jsx)(a.K,{title:"Clear chat history",onClick:()=>{A("all")},children:(0,d.jsx)(f.U3h,{})}),g?(0,d.jsx)(a.K,{title:"Stop recording",onClick:m,children:(0,d.jsx)(o.TG1,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Voice input",onClick:h,children:(0,d.jsx)(o.Rrl,{})}),(0,d.jsx)(a.K,{title:p?"Collapse":"Expand",onClick:()=>u(e=>!e),children:p?(0,d.jsx)(o.eDi,{}):(0,d.jsx)(o.mkN,{})}),(0,d.jsx)(a.K,{title:"Copy input",onClick:()=>{(async()=>{v.trim()&&await navigator.clipboard.writeText(v)})()},disabled:!v.trim(),children:(0,d.jsx)(o.nxz,{})}),(0,d.jsx)(a.K,{title:"Send prompt",onClick:()=>{S()},disabled:C||!v.trim(),children:(0,d.jsx)(o.kGk,{})}),(0,d.jsx)(a.K,{title:"Clear input",onClick:()=>{k("")},disabled:!v.trim(),children:(0,d.jsx)(o.yGN,{})}),(0,d.jsx)(a.K,{title:"Clear selected notes",onClick:c,disabled:0===s,children:(0,d.jsx)(l.DnH,{})})]})]})]})})]})},ot=i.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
`,at=i.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,st=i.Ay.div`
  font-size: 10px;
  color: #555;
  margin-bottom: 2px;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  white-space: nowrap;
`,lt=i.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,dt=i.Ay.span`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
`,ct=i.Ay.span`
  font-size: 12px;
  color: #555;
`,pt=i.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,ut=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,gt=i.Ay.div`
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
`,xt=i.Ay.div`
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
`,ht=i.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;
  margin: 0;
  background: #e0e0e5;
  ${e=>{let{expanded:t}=e;return t&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}}
`,mt=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #e0e0e5;
`,ft=i.Ay.textarea`
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
`,bt=i.Ay.div`
  padding: 0px;
  position: relative;
  width: auto;
`,yt=i.Ay.div`
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
`,wt=i.Ay.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,vt=i.Ay.div`
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
`,kt=i.Ay.span`
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
`,jt=e=>{let{onClearAll:t,expanded:n,panelWidth:r,minimized:i,setMinimized:s,notesMinimized:l}=e;const c=n?188:52;return(0,d.jsxs)(Ct,{explorerWidth:c,notesMinimized:l,barWidth:r,minimized:i,children:[(0,d.jsxs)(St,{children:[(0,d.jsx)(o.Ojn,{}),"Chat"]}),(0,d.jsx)(At,{children:(0,d.jsx)(a.K,{title:"Minimize chat panel",onClick:()=>s(!0),children:(0,d.jsx)(o.prK,{})})})]})},Ct=i.Ay.div`
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
`,St=i.Ay.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`,At=i.Ay.div`
  display: flex;
  align-items: center;
  height: 35px;
`,Tt=e=>{let{minimized:t,setMinimized:n}=e;const[i,s]=r.useState(!1),{setSystemPrompt:l}=nt();return(0,d.jsxs)(Mt,{expanded:i,children:[(0,d.jsxs)(a.K,{expanded:i,title:"Menu",onClick:()=>s(!i),children:[(0,d.jsx)(o.ND1,{}),i&&(0,d.jsx)("span",{children:"Settings"})]}),t&&(0,d.jsxs)(a.K,{expanded:i,title:"Expand Chat",onClick:()=>n(!t),children:[(0,d.jsx)(o.Ojn,{}),i&&(0,d.jsx)("span",{children:"Expand Chat"})]}),(0,d.jsxs)(a.K,{expanded:i,title:"Prompts",children:[(0,d.jsx)(f.vTI,{}),i&&(0,d.jsx)(zt,{children:"Prompts"})]})]})},Mt=i.Ay.div`
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
`,zt=i.Ay.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Et=e=>{let{explorerExpanded:t,setExplorerExpanded:n}=e;const{selectedDate:i,setSelectedDate:a}=(0,O.M)(),{user:s}=(0,z.o)(),{entries:l,fetchEntries:p,addEntry:u,updateEntry:g,deleteEntry:x}=function(e){const[t,n]=r.useState([]),i=r.useCallback(async()=>{if(!e)return;const t=T(e),r=(await(0,C.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}});n(A(r))},[e]),o=r.useCallback(async t=>{let{content:r,date:i}=t;if(!e)return null;const o={uid:e,id:j()(),content:r,date:i,createdAt:(new Date).toISOString()};return n(e=>A([...e,o])),await(0,C.gS)(T(e),o),o},[e]),a=r.useCallback(async(r,i)=>{if(!e)return;const o=t.find(e=>e.id===r);if(!o)return;const a={...o,content:i};n(e=>e.map(e=>e.id===r?a:e));const s=await M(e,r);await Promise.all(s.map(t=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/entries/${t.id}`),a)))},[t,e]),s=r.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const r=await M(e,t.id);await Promise.all(r.map(n=>(0,C.BN)((0,C.H9)(S.OO,`users/${e}/entries/${n.id}`),t)))},[e]),l=r.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const r=await M(e,t);await Promise.all(r.map(t=>(0,C.kd)((0,C.H9)(S.OO,`users/${e}/entries/${t.id}`))))},[e]);return{entries:t,setEntries:n,fetchEntries:i,addEntry:o,updateEntry:a,replaceEntry:s,deleteEntry:l}}((null===s||void 0===s?void 0:s.uid)||""),{searchContent:h,setSearchContent:y,selectedTag:w,setSelectedTag:k,systemTags:E,availableTags:D,pickerTags:P,visibleEntries:L}=function(e){const[t,n]=r.useState(""),[i,a]=r.useState("favorite"),s=r.useMemo(()=>[{name:"all",icon:o.Vap,system:!0,position:"top"},{name:"favorite",icon:o.usP,system:!0,position:"top"},{name:"journal",icon:b.Fsq,system:!0,position:"top"},{name:"templates",icon:o.MRc,system:!0,position:"top"},{name:"prompts",icon:f.vTI,system:!0,position:"top"},{name:"other",icon:m.uoj,system:!0,position:"top"},{name:"archive",icon:o.OZ2,system:!0,position:"bottom"},{name:"trash",icon:o.IXo,system:!0,position:"bottom"}],[]),l=r.useMemo(()=>s.map(e=>e.name),[s]),d=r.useMemo(()=>Array.from(new Set(e.flatMap(e=>v(e.content)))).filter(e=>!l.includes(e)).sort(),[e,l]),c=r.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...d])).sort(),[d]),p=r.useCallback(e=>{const n=v(e.content),r=n.includes("trash"),o=n.includes("archive"),a=n.includes("templates"),s=n.includes("prompts");return""!==t.trim()?e.content.toLowerCase().includes(t.toLowerCase()):"all"===i?!r&&!o:"favorite"===i?n.includes("favorite")&&!r&&!o:"journal"===i?n.includes("journal")&&!a&&!r&&!o:"templates"===i?a&&!r&&!o:"prompts"===i?s&&!r&&!o:"other"===i?!r&&!o&&!a&&!s&&!n.includes("journal"):"archive"===i?o&&!r:"trash"===i?r:n.includes(i)&&!n.includes("archive")&&!n.includes("trash")},[t,i]),u=r.useMemo(()=>e.filter(p),[e,p]);return{searchContent:t,setSearchContent:n,selectedTag:i,setSelectedTag:a,systemTags:s,availableTags:d,pickerTags:c,visibleEntries:u,isEntryVisible:p}}(l),{cardRefs:K,cardHeights:F,totalHeight:I}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=r.useRef({}),[n,i]=r.useState({}),o=r.useCallback(()=>{const e={};Object.entries(t.current).forEach(t=>{let[n,r]=t;r&&(e[n]=r.offsetHeight)}),i(e)},[]);r.useEffect(()=>{const e=new ResizeObserver(()=>{o()});return Object.values(t.current).forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[o]),r.useEffect(()=>{o()},[...e,o]);const a=r.useMemo(()=>Object.values(n).reduce((e,t)=>e+t,0),[n]);return{cardRefs:t,cardHeights:n,totalHeight:a,refreshCardHeights:o}}([l]),[H,U]=r.useState(null),[W,B]=r.useState([]),J=r.useRef(null),[G,_]=r.useState(0),q=r.useRef(null),[Y,V]=r.useState(0),[X,Z]=r.useState(!1),[Q,ee]=r.useState(!0),te=r.useMemo(()=>l.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[l]);r.useLayoutEffect(()=>{const e=()=>{var e,t;V(null!==(e=null===(t=q.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return q.current&&t.observe(q.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]),r.useLayoutEffect(()=>{const e=()=>{var e,t;_(null!==(e=null===(t=J.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return J.current&&t.observe(J.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]);const ne=r.useCallback(e=>{B(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),re=r.useCallback(()=>{B(L.map(e=>e.id))},[L]),ie=r.useCallback(()=>{B([])},[]);r.useEffect(()=>{B(e=>e.filter(e=>l.some(t=>t.id===e)))},[l]);const oe=r.useMemo(()=>L.filter(e=>W.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[L,W]),ae=r.useMemo(()=>L.filter(e=>W.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[L,W]);r.useEffect(()=>{p()},[p]);const se=()=>{window.scrollTo({top:0,behavior:"smooth"})},le=g;return(0,d.jsx)($t,{children:(0,d.jsxs)(tt,{uid:s?s.uid:"",selectedNotesText:oe,noteTitles:ae,clearSelectedNotes:ie,children:[(0,d.jsxs)($,{children:[(0,d.jsx)(c,{selectedTag:w,selectedDate:i,searchContent:h,onSearchChange:y,onDateChange:e=>{a(e.target.value)},onAddNote:async function(){const e="all"!==w?[w]:[];await u({date:i,content:JSON.stringify({...N,tags:e})}),se()},onCopyAllNotes:async()=>{const e=oe.length>0?oe:L.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:re,onClearAll:ie,selectedCount:W.length,expanded:t,panelWidth:G,minimized:X,setMinimized:Z}),(0,d.jsx)(jt,{onClearAll:ie,expanded:t,panelWidth:Y,minimized:Q,setMinimized:ee,notesMinimized:X})]}),(0,d.jsx)(R,{systemTags:E,customTags:D,selectedTag:w,setSelectedTag:k,explorerExpanded:t,setExplorerExpanded:n,minimized:X,setMinimized:Z}),!X&&(0,d.jsx)(Ve,{entries:L,hoveredCardId:H,cardHeights:F,totalHeight:I,onScrollToCard:(e,t)=>{const n=K.current[e],r=J.current;if(!n||!r)return;const i=n.offsetTop,o="top"===t?i-100:i-r.clientHeight+n.offsetHeight+50;r.scrollTo({top:Math.max(0,o),behavior:"smooth"})}}),(0,d.jsx)(Dt,{ref:J,minimized:X,children:!X&&(0,d.jsx)(_e,{entries:L,pickerTags:P,cardRefs:K,onHoverCard:U,onDeleteEntry:async function(e){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])){const t=l.find(t=>t.id===e);if(!t)return;const n=JSON.parse(t.content),r=Array.from(new Set([...(n.tags||[]).filter(e=>"archive"!==e),"trash"]));return void await g(e,JSON.stringify({...n,tags:r}))}await x(e)},onChangeEntry:le,selectedNoteIds:W,onToggleSelection:ne,templateOptions:te})}),(0,d.jsx)(Nt,{ref:q,minimized:Q,children:(0,d.jsx)(it,{uid:(null===s||void 0===s?void 0:s.uid)||"",selectedNotesText:oe,noteTitles:ae,notesCount:W.length,clearSelectedNotes:ie})}),(0,d.jsx)(Tt,{minimized:Q,setMinimized:ee})]})})},$t=i.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Nt=i.Ay.div`
  flex: ${e=>{let{minimized:t}=e;return t?"0":"1"}};
  width: ${e=>{let{minimized:t}=e;return t?"0":"auto"}};
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
`,Dt=i.Ay.div`
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
//# sourceMappingURL=dashboard.330463aa.chunk.js.map