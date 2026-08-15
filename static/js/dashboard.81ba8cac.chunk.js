"use strict";(globalThis.webpackChunkmavis_ai_web||=[]).push([[945],{5876(e,t,n){n.r(t),n.d(t,{default:()=>Tt});var r=n(5043),o=n(4138),i=n(1009),a=n(7246),s=n(4960),l=n(7149),d=n(579);const c=e=>{let{selectedTag:t,selectedDate:n,searchContent:r,onSearchChange:o,onDateChange:c,onAddNote:m,onCopyAllNotes:f,selectedCount:b,onSelectAll:w,onClearAll:y,expanded:v,panelWidth:k,minimized:j,onToggleMinimize:C}=e;const S=v?188:52;return(0,d.jsxs)(p,{explorerWidth:S,barWidth:k,minimized:j,children:[(0,d.jsx)(u,{children:j?"Explorer":""===r.trim()?t.charAt(0).toUpperCase()+t.slice(1):"Search"}),!j&&(0,d.jsxs)(d.Fragment,{children:["journal"===t&&(0,d.jsx)(g,{children:(0,d.jsx)("input",{title:"Select date",type:"date",value:n,onChange:c})}),(0,d.jsxs)(x,{children:[(0,d.jsx)("input",{placeholder:"Search",value:r,onChange:e=>o(e.target.value)}),(0,d.jsx)(a.K,{title:"Clear search",onClick:()=>o(""),children:(0,d.jsx)(l.rOP,{})})]})]}),(0,d.jsxs)(h,{children:[!j&&(0,d.jsxs)(d.Fragment,{children:[b>0?(0,d.jsx)(a.K,{title:"Clear all notes",onClick:y,children:(0,d.jsx)(i.TG1,{})}):(0,d.jsx)(a.K,{title:"Select all visible notes",onClick:w,children:(0,d.jsx)(i.NLe,{})}),(0,d.jsx)(a.K,{title:"Copy all visible notes",onClick:f,children:(0,d.jsx)(i.nxz,{})}),(0,d.jsx)(a.K,{title:"Add note",onClick:m,children:(0,d.jsx)(s.n4h,{})})]}),(0,d.jsx)(a.K,{title:j?"Restore notes panel":"Minimize notes panel",onClick:C,children:j?(0,d.jsx)(i.mkN,{}):(0,d.jsx)(i.prK,{})})]})]})},p=o.Ay.div`
  display: flex;
  height: 32px;
  min-width: 100px;
  width: ${e=>{let{barWidth:t,minimized:n}=e;return n?"110px":`${t+60}px`}};
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin-left: ${e=>{let{explorerWidth:t}=e;return`${t}px`}};
  margin-top: 10px;
  border-bottom: 1px solid #d0d0d0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: ${e=>{let{minimized:t}=e;return t?"10px":"0px"}};
  border-bottom-right-radius: ${e=>{let{minimized:t}=e;return t?"10px":"0px"}};
  background: #e0e0e5;
  position: relative;
`,g=o.Ay.div`
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
`,u=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`,x=o.Ay.div`
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
`,h=o.Ay.div`
  display: flex;
  align-items: center;
  height: 35px;
`;var m=n(4966),f=n(2127);const b=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},w=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},y=e=>{if(!b(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))};var v=n(8222),k=n.n(v),j=n(2471),C=n(1286);const S=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),T=e=>{const t=(0,j.H9)(C.OO,"users",e);return(0,j.rJ)(t,"entries")},A=async(e,t)=>{const n=T(e);return(await(0,j.GG)((0,j.P)(n,(0,j._M)("id","==",t)))).docs};var M=n(6625),$=n(7950);const z=e=>{let{children:t}=e;const n=document.getElementById("header-portal");return n?(0,$.createPortal)(t,n):null},N={title:"",type:"record",tags:[],text:"",color:"#fff",locked:!1,pinned:!1,collapsed:!1},E=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],D=e=>e.replace(/\b\w/g,e=>e.toUpperCase());var P=n(5561);const L=e=>{let{systemTags:t,customTags:n,selectedTag:r,setSelectedTag:o,explorerExpanded:s,setExplorerExpanded:l}=e;const c=e=>e.replace(/\b\w/g,e=>e.toUpperCase());return(0,d.jsxs)(O,{expanded:s,children:[(0,d.jsxs)(a.K,{expanded:s,title:"Menu",onClick:()=>l(!s),children:[(0,d.jsx)(i.ND1,{}),s&&(0,d.jsx)("span",{children:"Menu"})]}),t.filter(e=>"top"===e.position).map(e=>{const t=e.icon;return(0,d.jsxs)(a.K,{expanded:s,selected:r===e.name,title:e.name,onClick:()=>o(e.name),children:[(0,d.jsx)(t,{}),s&&(0,d.jsx)("span",{children:c(e.name)})]},e.name)}),n.map(e=>(0,d.jsxs)(a.K,{expanded:s,selected:r===e,title:c(e),onClick:()=>o(e),children:[(0,d.jsx)(i.cnX,{}),s&&(0,d.jsx)("span",{children:c(e)})]},e)),t.filter(e=>"bottom"===e.position).map(e=>{const t=e.icon;return(0,d.jsxs)(a.K,{expanded:s,selected:r===e.name,title:e.name,onClick:()=>o(e.name),children:[(0,d.jsx)(t,{}),s&&(0,d.jsx)("span",{children:c(e.name)})]},e.name)})]})},O=o.Ay.div`
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
`;var R=n(5369);const K=e=>{let{title:t,locked:n,collapsed:r,speaking:o,isFavorite:l,selected:c,onToggleSelection:p,speak:g,stopSpeaking:u,copyFormattedContent:x,onToggleFavorite:h,onToggleLock:m,onToggleCollapse:f,onTitleChange:b}=e;return(0,d.jsxs)(I,{children:[(0,d.jsxs)(H,{children:[(0,d.jsx)(F,{title:c?"Unselect note":"Select note",onClick:p,children:c?"\u2713":""}),l?(0,d.jsx)(a.K,{disabled:n,title:"Remove favorite",onClick:h,children:(0,d.jsx)(R.gt3,{})}):(0,d.jsx)(a.K,{disabled:n,title:"Add favorite",onClick:h,children:(0,d.jsx)(i.usP,{})}),(0,d.jsx)(U,{title:"Note name",role:"textbox",contentEditable:!n,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>b(e.currentTarget.innerText),children:t})]}),(0,d.jsxs)(B,{children:[o?(0,d.jsx)(a.K,{title:"Stop hearing note",onClick:u,children:(0,d.jsx)(i.cKW,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Hear note",onClick:g,children:(0,d.jsx)(i.o77,{})}),(0,d.jsx)(a.K,{title:"Copy note",onClick:x,children:(0,d.jsx)(i.nxz,{})}),n?(0,d.jsx)(a.K,{title:"Unlock note",onClick:m,children:(0,d.jsx)(i.F5$,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Lock note",onClick:m,children:(0,d.jsx)(i.K4k,{})}),r?(0,d.jsx)(a.K,{title:"Expand note",onClick:f,children:(0,d.jsx)(s.BSQ,{})}):(0,d.jsx)(a.K,{title:"Collapse note",onClick:f,children:(0,d.jsx)(s.q2p,{})})]})]})},F=o.Ay.span`
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
`,I=o.Ay.header`
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
`,H=o.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  margin: 0;
  padding: 0;

  color: black;
`,U=o.Ay.span`
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
`,B=o.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`;var J=n(7996),W=n(4993),G=n(3859),q=n(6801),_=n(7353),V=n(285),Y=n(578),X=n(8550),Z=n(3596),Q=n(5312),ee=n.n(Q);const te=e=>{let{label:t,expression:n,onExecute:r}=e;return(0,d.jsx)("button",{className:"markdownButton",onClick:()=>r(n),children:t})},ne=e=>{let{value:t,locked:n,editing:r,textareaRef:o,markdownRef:i,setValue:a,setEditing:s,onSave:l,onMarkdownClick:c,processMarkdown:p,onExecuteExpression:g}=e;return r?(0,d.jsx)(oe,{ref:o,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:t||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,a(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)&&(l(),s(!1))}}):(0,d.jsx)(re,{ref:i,onClick:e=>{if(n)return;const t=e.target;c(t.innerText||t.textContent||"")},children:(0,d.jsx)(J.oz,{rehypePlugins:[W.A],components:{button(e){var t,n,r;const o=decodeURIComponent(String(null!==(t=null===(n=e.node)||void 0===n||null===(r=n.properties)||void 0===r?void 0:r.dataExpression)&&void 0!==t?t:""));return(0,d.jsx)(te,{label:String(e.children),expression:o,onExecute:g})}},remarkPlugins:[[_.A,{padSpaceAfter:!1,emoticon:!0}],[X.A,{tight:!0,ordered:!0}],[G.A,{stringLength:ee()}],V.A,Y.A,Z.A,q.A],children:p(t||"* \u2753 What do you have for today?")})})},re=o.Ay.div`
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
`,oe=o.Ay.textarea`
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
`;var ie=n(5922);const ae=e=>{let{colors:t,onColorClicked:n}=e;return(0,$.createPortal)((0,d.jsx)("div",{onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),style:{position:"fixed",top:"120px",right:"50%",transform:"translate(420px, 0%)",display:"flex",flexDirection:"column",gap:"4px",padding:"8px",background:"white",border:"1px solid #323232",borderRadius:"8px",boxShadow:"0 10px 30px rgba(0,0,0,0.25)",zIndex:999999},children:t.map(e=>(0,d.jsx)("button",{style:{backgroundColor:e,width:60,height:24,border:"1px solid #666",borderRadius:4,cursor:"pointer",padding:0},onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)}},e))}),document.body)},se=e=>{let{options:t,onPicked:n}=e;return(0,$.createPortal)((0,d.jsx)("div",{onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),style:{position:"fixed",top:"120px",right:"50%",transform:"translate(420px, 0%)",display:"flex",flexDirection:"column",gap:"4px",padding:"8px",background:"white",border:"1px solid #323232",borderRadius:"8px",boxShadow:"0 10px 30px rgba(0,0,0,0.25)",zIndex:999999},children:t.map((e,t)=>(0,d.jsx)("button",{style:{backgroundColor:"#cfcfcf",width:"100%",height:24,border:"1px solid #666",borderRadius:4,cursor:"pointer",padding:"2px"},onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)},children:e.title},t))}),document.body)},le=e=>{let{isLocked:t,listening:n,aiLoading:r,isArchived:o,isTrash:s,showColorPicker:c,showTemplatePicker:p,colorPickerRef:g,templatePickerRef:u,noteColors:x,templateOptions:h,startListening:m,stopListening:f,undoLastChange:b,handleAI:w,archiveNote:y,trashNote:v,setShowColorPicker:k,setShowTemplatePicker:j,onColorSelected:C,onTemplateSelected:S}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(de,{children:[(0,d.jsx)(a.K,{disabled:t,title:"Change note background color",onClick:()=>k(e=>!e),children:(0,d.jsx)(l.$di,{})}),(0,d.jsx)(a.K,{disabled:t,title:"Load template",onClick:()=>j(e=>!e),children:(0,d.jsx)(i.MRc,{})}),(0,d.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"AI assistant",onMouseDown:e=>e.preventDefault(),onClick:w,children:(0,d.jsx)(i.Ojn,{color:r?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"Revert last change",onMouseDown:e=>e.preventDefault(),onClick:b,children:(0,d.jsx)(i.cO3,{})}),n?(0,d.jsx)(a.K,{disabled:t,title:"Stop listening",onClick:f,children:(0,d.jsx)(i.kGk,{color:"#2563eb"})}):(0,d.jsx)(a.K,{disabled:t,title:"Listen note",onClick:m,children:(0,d.jsx)(i.Rrl,{})}),(0,d.jsx)(ie.iJU,{}),(0,d.jsx)(a.K,{disabled:t,title:o?"Unarchive note":"Archive note",onClick:y,children:(0,d.jsx)(i.OZ2,{color:o?"#2563eb":void 0})}),(0,d.jsx)(a.K,{disabled:t,title:s?"Delete permanently":"Move to trash",onClick:v,children:(0,d.jsx)(i.IXo,{color:s?"#dc2626":void 0})})]}),c&&(0,d.jsx)(ce,{ref:g,children:(0,d.jsx)(ae,{colors:x,onColorClicked:C})}),p&&(0,d.jsx)(pe,{ref:u,children:(0,d.jsx)(se,{options:h,onPicked:S})})]})},de=o.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin: 0;
  padding: 0;

  z-index: 8;
`,ce=o.Ay.div`
  position: relative;
  width: 100%;
`,pe=o.Ay.div`
  position: relative;
  width: 100%;
`,ge=e=>{let{date:t,tags:n,availableTags:r,isLocked:o,tagPickerRef:a,showTagPicker:l,creatingTag:c,newTagName:p,setShowTagPicker:g,setCreatingTag:u,setNewTagName:x,hasTag:h,toggleTag:m,createTag:f,formatTag:b,formatDate:w}=e;return(0,d.jsxs)(ue,{children:[(0,d.jsxs)(he,{children:[(0,d.jsx)(xe,{children:w(t)}),n.map(e=>(0,d.jsx)(me,{onClick:()=>!o&&m(e),children:b(e)},e))]}),(0,d.jsxs)(fe,{ref:a,children:[!o&&(0,d.jsx)(be,{onClick:()=>g(!l),children:(0,d.jsx)(s.n4h,{})}),l&&(0,d.jsxs)(we,{children:[r.map(e=>(0,d.jsxs)(ye,{className:h(e)?"selected":"",onClick:()=>m(e),children:[(0,d.jsx)(i.cnX,{}),(0,d.jsx)("span",{children:b(e)})]},e)),c?(0,d.jsx)(ke,{autoFocus:!0,placeholder:"Tag name...",value:p,onChange:e=>x(e.target.value),onKeyDown:e=>{"Enter"===e.key&&f(p),"Escape"===e.key&&(u(!1),x(""))},onBlur:()=>{p.trim()?f(p):u(!1)}}):(0,d.jsxs)(ve,{onClick:()=>u(!0),children:[(0,d.jsx)(i.cnX,{}),"New Tag"]})]})]})]})},ue=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,xe=o.Ay.span`
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
`,he=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-left: 10px;
`,me=o.Ay.span`
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
`,fe=o.Ay.div`
  position: relative;

  width: auto;
  margin: 0;
`,be=o.Ay.span`
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
`,we=o.Ay.div`
  position: absolute;

  bottom: 42px;
  left: 0;

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
`,ye=o.Ay.span`
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
`,ve=o.Ay.span`
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
`,ke=o.Ay.input`
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
`;function je(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(""),i=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return void console.warn("SpeechRecognition API not supported");const n=new e;n.lang="pt-BR",n.continuous=!0,n.interimResults=!0,n.onresult=e=>{let t="";for(let n=0;n<e.results.length;n++)t+=e.results[n][0].transcript;o(t)},n.onend=()=>{t(!1)},i.current=n},[]);return{listening:e,transcript:n,startListening:()=>{var e;null===(e=i.current)||void 0===e||e.start(),t(!0)},stopListening:()=>{var e;null===(e=i.current)||void 0===e||e.stop(),t(!1)}}}function Ce(){const[e,t]=(0,r.useState)(!1);return{speak:function(e){const n=function(e){return function(e){return e.replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/#+\s/g,"").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/[_~]/g,"").replace(/\n+/g,". ").trim()}(e).replace(/[^\p{L}\p{N}\s]/gu," ").replace(/\s+/g," ").trim()}(e),r=new SpeechSynthesisUtterance(n),o=function(e){return/[\xe3\xf5\xe1\xe0\xe2\xe9\xea\xed\xf3\xf4\xfa\xe7]/i.test(e)?"pt-BR":"en-US"}(n),i=speechSynthesis.getVoices().find(e=>e.lang.startsWith(o));i&&(r.voice=i),r.lang=o,r.onstart=()=>t(!0),r.onend=()=>t(!1),speechSynthesis.speak(r)},stopSpeaking:()=>{speechSynthesis.cancel(),t(!1)},speaking:e}}const Se=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},Te=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const o=new Date;return(e=e.replace(/@date\b/g,()=>o.toLocaleDateString()).replace(/@time\b/g,()=>o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>o.toLocaleString()).replace(/@dayofweek\b/g,()=>o.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(o.getMonth()+1)).replace(/@monthname\b/g,()=>o.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(o.getFullYear())).replace(/@today\b/g,()=>o.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const r=Number(t),o=Number(n);return r&&o?(r/(o*o)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-o.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const r=Math.max(-1,Math.min(1,Number(n))),o=t.isMobile?5:10,i=Math.abs(r),a=`${Math.round(100*r)}%`,s=Math.round(i*o);let l=r>=0?"\u2588".repeat(s)+"\u2591".repeat(o-s):"\u2591".repeat(o-s)+"\u2588".repeat(s);const d=Math.max(0,Math.floor((o-a.length)/2));return l.slice(0,d)+a+l.slice(d+a.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&r<5?Te(e,t,n,r+1):e},Ae=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,Me=(e,t)=>{const n={};e.replace(Ae,(e,t,r)=>(n[t]=r.trim(),""));let r=!0;for(;r;){r=!1;for(const[e,o]of Object.entries(n)){if(!o.includes("@"))continue;const i=Te($e(o,n),Se({...t,...n}));i!==o&&(n[e]=i,r=!0)}}return n},$e=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var r;return null!==(r=t[n])&&void 0!==r?r:""}),ze=(e,t,n)=>{const r=Me(e),o=Se({...t,...Object.fromEntries(Object.entries(r).map(e=>{let[t,n]=e;if(""===n)return[t,""];const r=Number(n);return[t,Number.isNaN(r)?n:r]}))});return Te($e((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),r),o,n)};function Ne(){const[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)(""),[i,a]=(0,r.useState)({city:"",country:""});return(0,r.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async n=>{let{coords:r}=n;try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${r.latitude}&longitude=${r.longitude}&current=temperature_2m,weather_code`),n=await t.json();let d="",c="";try{var o,i,a,s;const e=await fetch(`https://geocode.maps.co/reverse?lat=${r.latitude}&lon=${r.longitude}&api_key=6a769ff32713b140131224gcj534262`),t=await e.json();d=(null===(o=t.address)||void 0===o?void 0:o.city)||(null===(i=t.address)||void 0===i?void 0:i.town)||(null===(a=t.address)||void 0===a?void 0:a.village)||"",c=(null===(s=t.address)||void 0===s?void 0:s.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(n.current.temperature_2m)}\xb0C`,weather:(l=n.current.weather_code,0===l?"\u2600\ufe0f Sunny":[1,2].includes(l)?"\ud83c\udf24\ufe0f Partly Cloudy":3===l?"\u2601\ufe0f Cloudy":[45,48].includes(l)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(l)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(l)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(l)?"\u2744\ufe0f Snowing":[80,81,82].includes(l)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(l)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:d,country:c})}catch(d){t(d)}var l}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),o(e.weather),a({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:i}}var Ee=n(503);const De=new TextEncoder,Pe=new TextDecoder;function Le(e){const t=new Uint8Array(e);let n="";for(let r=0;r<t.length;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function Oe(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function Re(e,t){const n=await crypto.subtle.importKey("raw",De.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function Ke(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),r=crypto.getRandomValues(new Uint8Array(16)),o=await Re(t,r);return{encrypted:Le(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},o,De.encode(e))),iv:Le(n),salt:Le(r)}}(t,e);await(0,j.BN)((0,j.H9)(C.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function Fe(e){const t=await(0,j.x7)((0,j.H9)(C.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,r){const o=await Re(r,Oe(n)),i=await crypto.subtle.decrypt({name:"AES-GCM",iv:Oe(t)},o,Oe(e));return Pe.decode(i)}(n.encryptedApiKey,n.iv,n.salt,e)}async function Ie(e,t,n,r,o,i){console.log(o);const a=i||await Fe(e);if(!a)throw new Error("OpenAI API Key not configured.");const s=new Ee.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),l=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${r}\n`;return await s.responses.create({model:o||"gpt-5.6-luna",input:l})}const He="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const Ue=e=>{let{id:t,date:n,content:o,onDeleteCard:i,onChangeContent:a,tags:s,selected:l,onToggleSelection:c,templateOptions:p}=e;const{listening:g,transcript:u,startListening:x,stopListening:h}=je(),{speak:m,speaking:f,stopSpeaking:y}=Ce(),[v,k]=r.useState(!1),[j,C]=r.useState(!1),[S,T]=r.useState(!1),A=r.useRef(null),$=r.useRef(null),z=r.useRef(null),P=r.useRef(null),L=r.useRef(null),[O,R]=r.useState(window.innerWidth<1260),{user:F}=(0,M.o)(),{temperature:I,weather:H,location:U}=Ne(),{setCursorPosition:B,findBestCursorPosition:J}=function(e){let{editing:t,textareaRef:n}=e;const[o,i]=(0,r.useState)(null);return(0,r.useEffect)(()=>{if(!t||!n.current||null===o)return;const e=n.current;e.focus(),e.setSelectionRange(o,o),requestAnimationFrame(()=>{const t=document.createElement("div"),n=window.getComputedStyle(e);t.style.position="absolute",t.style.visibility="hidden",t.style.whiteSpace="pre-wrap",t.style.wordWrap="break-word",t.style.font=n.font,t.style.lineHeight=n.lineHeight,t.style.padding=n.padding,t.style.width=`${e.clientWidth}px`,t.textContent=e.value.substring(0,o),document.body.appendChild(t);const r=t.offsetHeight;document.body.removeChild(t);const i=e.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:i+r-window.innerHeight/2,behavior:"smooth"})})},[t,o,n]),{cursorPosition:o,setCursorPosition:i,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const r=n.split(" ");for(let o=Math.min(r.length,8);o>=2;o--)for(let e=0;e<=r.length-o;e++){const n=r.slice(e,e+o).join(" "),i=t.indexOf(n);if(i>=0)return i}for(const o of r){if(o.length<4)continue;const e=t.indexOf(o);if(e>=0)return e}return t.length}}}({editing:v,textareaRef:A});!function(e){let{tagPickerRef:t,colorPickerRef:n,templatePickerRef:o,closeTagPicker:i,closeColorPicker:a,closeTemplatePicker:s}=e;(0,r.useEffect)(()=>{const e=e=>{const r=e.target;t.current&&!t.current.contains(r)&&i(),n.current&&!n.current.contains(r)&&a(),o.current&&!o.current.contains(r)&&s()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t,n,o,i,a,s])}({tagPickerRef:z,colorPickerRef:P,templatePickerRef:L,closeTagPicker:()=>{V(!1),Y(!1)},closeColorPicker:()=>{C(!1)},closeTemplatePicker:()=>{T(!1)}}),r.useEffect(()=>{const e=()=>{R(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const W=r.useMemo(()=>((e,t)=>{const n=t(e)?JSON.parse(e):{...N,text:e};return{...N,...n,tags:Array.from(new Set([...n.tags||[]]))}})(o,b),[o]),{showTagPicker:G,creatingTag:q,newTagName:_,setShowTagPicker:V,setCreatingTag:Y,setNewTagName:X,hasTag:Z,toggleTag:Q,createTag:ee}=function(e){let{tags:t,onTagsChange:n}=e;const[o,i]=(0,r.useState)(!1),[a,s]=(0,r.useState)(!1),[l,d]=(0,r.useState)(""),c=e=>t.includes(e),p=e=>{const r=Array.from(new Set(c(e)?t.filter(t=>t!==e):[...t,e]));n(r)};return{showTagPicker:o,creatingTag:a,newTagName:l,setShowTagPicker:i,setCreatingTag:s,setNewTagName:d,hasTag:c,toggleTag:p,createTag:e=>{const t=e.trim().toLowerCase();t&&(p(t),d(""),s(!1))}}}({tags:W.tags,onTagsChange:e=>{a(t,JSON.stringify({...W,tags:e}))}}),[te,re]=r.useState(W.text||""),[oe,ie]=r.useState([]),ae=r.useCallback(e=>{ie(t=>t[t.length-1]===e?t:[...t,e])},[]),{aiLoading:se,handleAI:de}=function(e){let{userId:t,value:n,textareaRef:o,pushHistory:i,onContentChange:a}=e;const[s,l]=(0,r.useState)(!1);return{aiLoading:s,handleAI:async()=>{if(!t)return void alert("User not authenticated");let e=await Fe(t);if(!e){var r;if(e=(null===(r=window.prompt("OpenAI API Key not configured.\n\nEnter your OpenAI API Key:"))||void 0===r?void 0:r.trim())||"",!e)return;await Ke(t,e)}const s=window.prompt("Examples:\n\nFix grammar\nSummarize\nRewrite professionally\nTranslate to Portuguese");if(null!==s&&void 0!==s&&s.trim()){l(!0);try{i(n);const r=o.current;if(r&&r.selectionStart!==r.selectionEnd){const o=r.selectionStart,i=r.selectionEnd,l=n.substring(o,i),d=await Ie(t,He,s,l,e),c=n.substring(0,o)+d+n.substring(i);return void a(c)}const l=await Ie(t,He,s,n,e);a(`${n}\n\n${l}`)}catch(d){console.error(d),alert(d instanceof Error?d.message:"AI request failed")}finally{l(!1)}}}}}({userId:null===F||void 0===F?void 0:F.uid,value:te,textareaRef:A,pushHistory:ae,onContentChange:e=>{re(e),a(t,JSON.stringify({...W,text:e}))}}),ce=()=>{if(Z("trash"))return void i(t,!0);const e=(e=>Array.from(new Set([...e.filter(e=>"archive"!==e),"trash"])))(W.tags);a(t,JSON.stringify({...W,tags:e}))},pe=e=>Z("templates")?e:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/week\b/g,()=>{const e=new Date(n.getFullYear(),0,1),t=Math.ceil(((n.getTime()-e.getTime())/864e5+e.getDay()+1)/7);return String(t)}).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const r=Number(t),o=Number(n);return String(Math.floor(Math.random()*(o-r+1))+r)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",r=Number(t);return Array.from({length:r},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const r=new Date(t);let o=n.getFullYear()-r.getFullYear();const i=n.getMonth()-r.getMonth();return(i<0||0===i&&n.getDate()<r.getDate())&&o--,String(o)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const r=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(r/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})}(e,{weather:H,temperature:I,city:U.city,country:U.country});r.useEffect(()=>{if(!g&&u){ae(te);const e=te+u;a(t,JSON.stringify({...W,text:e})),re(e)}},[g,u,te,t,W,ae,a]);const ue=W.locked;return(0,d.jsx)(Be,{selected:l,children:(0,d.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:W.color||"#eee"},children:[(0,d.jsx)(K,{title:W.title,locked:W.locked,collapsed:W.collapsed,selected:l,onToggleSelection:()=>c(t),speaking:f,isFavorite:Z("favorite"),speak:()=>m(te),stopSpeaking:y,copyFormattedContent:async()=>{if(!$.current)return;const e=$.current.innerHTML,t=$.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>Q("favorite"),onToggleLock:()=>a(t,JSON.stringify({...W,locked:!W.locked})),onToggleCollapse:()=>a(t,JSON.stringify({...W,collapsed:!W.collapsed})),onTitleChange:e=>a(t,JSON.stringify({...W,title:pe(e)}))}),W.collapsed?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(ne,{value:te,locked:W.locked,editing:v,textareaRef:A,markdownRef:$,setValue:re,setEditing:k,processMarkdown:e=>ze(e,{temperature:I,weather:H,city:U.city,country:U.country},O),onExecuteExpression:e=>{ae(te);const n=((e,t,n)=>{const r=t.match(/^\$\{(\w+)\}=(.*)$/);if(!r)return e;const o=r[1];let i=r[2];const a=Me(e);i=Te(i,Se({...n,...a})),i=i.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=a[t])&&void 0!==n?n:"")});const s="${"+o+"}="+Function(`return (${i})`)(),l=new RegExp(`^\\$\\{${o}\\}\\s*=([^\\r\\n]*)`,"m");return l.test(e)?e.replace(l,s):e.trimEnd()+"\n"+s})(te,e,{temperature:I,weather:H,city:U.city,country:U.country});re(n),a(t,JSON.stringify({...W,text:n}))},onSave:()=>((e,t)=>{const n=pe(t);a(e,JSON.stringify({...W,text:n})),re(n)})(t,te),onMarkdownClick:e=>{ae(te);const t=J(e,te);B(t),k(!0)}}),(0,d.jsx)("footer",{className:"footer",children:(0,d.jsxs)("span",{className:"footbox",children:[(0,d.jsx)(ge,{date:n,tags:W.tags,availableTags:s,isLocked:ue,tagPickerRef:z,showTagPicker:G,creatingTag:q,newTagName:_,setShowTagPicker:V,setCreatingTag:Y,setNewTagName:X,hasTag:Z,toggleTag:Q,createTag:ee,formatTag:D,formatDate:w}),(0,d.jsx)(le,{isLocked:ue,listening:g,aiLoading:se,isArchived:Z("archive"),isTrash:Z("trash"),showColorPicker:j,showTemplatePicker:S,colorPickerRef:P,templatePickerRef:L,noteColors:E,templateOptions:p,startListening:()=>{W.locked||x()},stopListening:h,undoLastChange:()=>{const e=oe[oe.length-1];e&&(ie(e=>e.slice(0,-1)),re(e),a(t,JSON.stringify({...W,text:e})))},handleAI:()=>{W.locked||de()},archiveNote:()=>{W.locked||(()=>{const e=(e=>e.includes("archive")?e.filter(e=>"archive"!==e):[...e.filter(e=>"trash"!==e),"archive"])(W.tags);a(t,JSON.stringify({...W,tags:e}))})()},trashNote:()=>{W.locked||ce()},setShowColorPicker:C,setShowTemplatePicker:T,onColorSelected:e=>{a(t,JSON.stringify({...W,color:e})),C(!1)},onTemplateSelected:e=>{ae(te);let n=e.text.replace(/\\\$\{/g,"${");if(n=pe(n),!W.locked){const r=Array.from(new Set([...W.tags||[],...e.tags||[]]));a(t,JSON.stringify({...W,collapsed:!1,color:e.color,text:n,title:pe(e.title),tags:r})),re(n)}}})]})})]})]})},t)},Be=o.Ay.div`
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

`,Je=e=>{let{entries:t,pickerTags:n,cardRefs:r,onHoverCard:o,onDeleteEntry:i,onChangeEntry:a,selectedNoteIds:s,onToggleSelection:l,templateOptions:c}=e;return(0,d.jsx)(We,{children:t.map((e,t)=>(0,d.jsx)("div",{ref:t=>{r.current[e.id]=t},onMouseEnter:()=>o(e.id),onMouseLeave:()=>o(null),children:(0,d.jsx)(Ue,{id:e.id,date:e.date,number:t+1,content:e.content,onDeleteCard:i,onChangeContent:a,tags:n,selected:s.includes(e.id),onToggleSelection:l,templateOptions:c})},e.id))})},We=o.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`,Ge=e=>{try{return JSON.parse(e).color||"#cccccc"}catch{return"#cccccc"}},qe=e=>{let{entries:t,hoveredCardId:n,cardHeights:r,totalHeight:o,onScrollToCard:s}=e;return(0,d.jsx)(_e,{children:t.map(e=>(0,d.jsxs)(Ve,{$selected:n===e.id,style:{backgroundColor:Ge(e.content),height:`${Math.max((r[e.id]||40)/Math.max(o,1)*100,24)}px`},children:[(0,d.jsx)(a.K,{title:"Go to note top",onClick:()=>s(e.id,"top"),children:(0,d.jsx)(i.wAb,{})}),(0,d.jsx)(a.K,{title:"Go to note bottom",onClick:()=>s(e.id,"bottom"),children:(0,d.jsx)(i.fK4,{})})]},e.id))})},_e=o.Ay.div`
  padding-top: 20px;
  width: 60px;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;
  background: #d0d0d0;
`,Ve=o.Ay.div`
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
`,Ye=(0,r.createContext)(void 0);function Xe(e){let{children:t,uid:n,selectedNotesText:o,noteTitles:i,clearSelectedNotes:a}=e;const s=(e=>{let{uid:t,selectedNotesText:n,noteTitles:o,clearSelectedNotes:i}=e;const[a,s]=(0,r.useState)(""),[l,d]=(0,r.useState)(""),[c,p]=(0,r.useState)([]),[g,u]=(0,r.useState)(!1),[x,h]=(0,r.useState)("gpt-5.6-luna"),m=(0,r.useCallback)(e=>e.map(e=>`${"user"===e.role?"User":"Assistant"}: ${e.content}`).join("\n"),[]),f=(0,r.useCallback)(async()=>{const e=a.trim();if(!e||g)return;if(!t)return void p(e=>[...e,{id:k()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const r=o.length>0?`Notes:\n${o.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",d=m(c),h={id:k()(),role:"user",content:`${r}${e}`};p(e=>[...e,h]),s(""),u(!0);const f=`History:\n${d}\n\nContext:\n${n}`;try{var b,w;const n=await Ie(t,`You are Mavis, my personal AI assistant. If you need the context of Notes which title might be available in the history, ask for them.\n\n${l}`,e,f,x),r={id:k()(),role:"assistant",content:n.output_text.trim()||"No response was returned.",tokens:{input:(null===(b=n.usage)||void 0===b?void 0:b.input_tokens)||0,output:(null===(w=n.usage)||void 0===w?void 0:w.output_tokens)||0}};p(e=>[...e,r]),i()}catch(y){console.error("Mavis error:",y);const e=y instanceof Error?y.message:"An unexpected error occurred.";p(t=>[...t,{id:k()(),role:"assistant",content:e}])}finally{u(!1)}},[a,g,t,o,n,x,l,c,m,i]),b=(0,r.useCallback)(e=>{p(t=>t.filter(t=>t.id!==e))},[]),w=(0,r.useCallback)(()=>{p([])},[]);return{prompt:a,setPrompt:s,systemPrompt:l,setSystemPrompt:d,messages:c,isLoading:g,sendPrompt:f,deleteMessage:b,clearMessages:w,selectedModel:x,setSelectedModel:h}})({uid:n,selectedNotesText:o,noteTitles:i,clearSelectedNotes:a});return(0,d.jsx)(Ye.Provider,{value:s,children:t})}function Ze(){const e=(0,r.useContext)(Ye);if(!e)throw new Error("useChatAi must be used inside a ChatAiProvider");return e}const Qe=e=>{let{uid:t,selectedNotesText:n,noteTitles:o,notesCount:s,clearSelectedNotes:l}=e;const[c,p]=r.useState(!1),{listening:g,transcript:u,startListening:x,stopListening:h}=je(),{speak:m,speaking:f,stopSpeaking:b}=Ce(),{prompt:w,setPrompt:y,messages:v,isLoading:k,sendPrompt:j,deleteMessage:C,selectedModel:S}=Ze();r.useEffect(()=>{!g&&u&&y(e=>e.length>0?`${e} ${u}`:u)},[g,u]);return(0,d.jsxs)(st,{children:[(0,d.jsxs)(lt,{children:[v.map(e=>(0,d.jsxs)(et,{role:e.role,children:[(0,d.jsx)(nt,{role:e.role,children:e.tokens&&(0,d.jsxs)("span",{children:["In: ",e.tokens.input,"tks Out: ",e.tokens.output,"tks"]})}),(0,d.jsx)(dt,{role:e.role,children:(0,d.jsx)(J.oz,{remarkPlugins:[G.A],children:e.content})}),(0,d.jsxs)(tt,{role:e.role,children:[(0,d.jsx)(a.K,{title:"Read message",onClick:()=>{return t=e.content,void(f?b():m(t));var t},children:f?(0,d.jsx)(i.TG1,{}):(0,d.jsx)(i.o77,{})}),(0,d.jsx)(a.K,{title:"Copy message",onClick:()=>{(async e=>{await navigator.clipboard.writeText(e)})(e.content)},children:(0,d.jsx)(i.nxz,{})}),(0,d.jsx)(a.K,{title:"Delete message",onClick:()=>C(e.id),children:(0,d.jsx)(i.IXo,{})})]})]},e.id)),k&&(0,d.jsx)(dt,{role:"assistant",children:"Thinking..."})]}),(0,d.jsx)(ct,{expanded:c,children:(0,d.jsxs)(pt,{children:[(0,d.jsxs)(ot,{children:[(0,d.jsxs)(it,{children:["Selected Notes: ",s]}),(0,d.jsxs)(it,{children:["Model: ",S]})]}),(0,d.jsxs)(rt,{children:[(0,d.jsx)(gt,{expanded:c,value:w,placeholder:"Ask Mavis...",disabled:k,onChange:e=>y(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),j())}}),(0,d.jsxs)(at,{children:[g?(0,d.jsx)(a.K,{title:"Stop recording",onClick:h,children:(0,d.jsx)(i.TG1,{color:"#2563eb"})}):(0,d.jsx)(a.K,{title:"Voice input",onClick:x,children:(0,d.jsx)(i.Rrl,{})}),(0,d.jsx)(a.K,{title:c?"Collapse":"Expand",onClick:()=>p(e=>!e),children:c?(0,d.jsx)(i.eDi,{}):(0,d.jsx)(i.mkN,{})}),(0,d.jsx)(a.K,{onClick:()=>{(async()=>{w.trim()&&await navigator.clipboard.writeText(w)})()},disabled:!w.trim(),children:(0,d.jsx)(i.nxz,{})}),(0,d.jsx)(a.K,{onClick:()=>{j()},disabled:k||!w.trim(),children:(0,d.jsx)(i.kGk,{})}),(0,d.jsx)(a.K,{title:"Clear input",onClick:()=>{l(),y("")},disabled:!w.trim(),children:(0,d.jsx)(i.yGN,{})})]})]})]})})]})},et=o.Ay.div`
  display: flex;
  flex-direction: column;

  align-items: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
`,tt=o.Ay.div`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`,nt=o.Ay.div`
  font-size: 10px;
  color: #555;
  margin-bottom: 2px;
  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};
  white-space: nowrap;
`,rt=o.Ay.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`,ot=o.Ay.span`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
`,it=o.Ay.span`
  font-size: 12px;
  color: #555;
`,at=o.Ay.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`,st=o.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,lt=o.Ay.div`
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
`,dt=o.Ay.div`
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
`,ct=o.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;
  margin: 0;
  background: #e0e0e5;
  ${e=>{let{expanded:t}=e;return t&&"\n      position: fixed;\n      inset: 0;\n      z-index: 9999;\n    "}}
`,pt=o.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #e0e0e5;
`,gt=o.Ay.textarea`
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
`,ut=e=>{let{onClearAll:t,expanded:n,panelWidth:r,minimized:o,onToggleMinimize:s}=e;const l=n?188:52;return(0,d.jsxs)(xt,{explorerWidth:l,barWidth:r,minimized:o,children:[(0,d.jsxs)(ht,{children:[(0,d.jsx)(i.Ojn,{}),"Chat"]}),(0,d.jsx)(mt,{children:(0,d.jsx)(a.K,{title:o?"Restore chat panel":"Minimize chat panel",onClick:s,children:o?(0,d.jsx)(i.mkN,{}):(0,d.jsx)(i.prK,{})})})]})},xt=o.Ay.div`
  display: flex;
  width: ${e=>{let{barWidth:t,minimized:n}=e;return n?"auto":`${t}px`}};
  flex-direction: row;
  align-items: center;
  height: 32px;
  padding: 0;
  margin-left: 10px;
  margin-top: 10px;
  border-bottom: 1px solid #d0d0d0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: ${e=>{let{minimized:t}=e;return t?"10px":"0px"}};
  border-bottom-right-radius: ${e=>{let{minimized:t}=e;return t?"10px":"0px"}};
  background: #e0e0e5;
  position: relative;
`,ht=o.Ay.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`,mt=o.Ay.div`
  display: flex;
  align-items: center;
  height: 35px;
`,ft=n.p+"static/media/mavis.28a5d798b26e2e8abaab.png",bt=["gpt-5-mini","gpt-5.6-luna","gpt-5.6-terra","gpt-5.6-sol"],wt=()=>{const[e,t]=r.useState(!1),[n,o]=r.useState(!1),{setSystemPrompt:s,selectedModel:c,setSelectedModel:p}=Ze();return(0,d.jsxs)(yt,{expanded:e,children:[(0,d.jsxs)(a.K,{expanded:e,title:"Menu",onClick:()=>t(!e),children:[(0,d.jsx)(i.ND1,{}),e&&(0,d.jsx)("span",{children:"Mavis Settings"})]}),(0,d.jsxs)(vt,{children:[(0,d.jsxs)(a.K,{expanded:e,title:"Selecionar modelo de IA",onClick:()=>{const e=!n;o(e),e&&t(!0)},children:[(0,d.jsx)(i.Ojn,{}),e&&(0,d.jsx)(kt,{children:"AI Model"})]}),n&&(0,d.jsx)(jt,{children:bt.map(e=>(0,d.jsxs)(Ct,{className:c===e?"selected":"",onClick:()=>p(e),title:e,children:[(0,d.jsx)(i.Ojn,{}),(0,d.jsx)("span",{children:e})]},e))})]}),(0,d.jsxs)(a.K,{expanded:e,title:"System Prompt",children:[(0,d.jsx)(m.vTI,{}),e&&(0,d.jsx)(kt,{children:"System Prompt"})]}),(0,d.jsxs)(a.K,{expanded:e,title:"Summarize History",children:[(0,d.jsx)(l.Z1M,{}),e&&(0,d.jsx)(kt,{children:"Summarize"})]}),(0,d.jsx)(St,{src:ft,draggable:!1,visible:e})]})},yt=o.Ay.div`
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
`,vt=o.Ay.div`
  position: relative;
  width: 100%;
`,kt=o.Ay.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,jt=o.Ay.div`
  position: absolute;

  top: 42px;
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
`,Ct=o.Ay.span`
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
`,St=o.Ay.img`
  position: absolute;
  width: 100px;
  height: auto;
  bottom: 0;
  right: 40px;
  z-index: 10;
  transition: opacity 0.1s ease-in-out, visibility 0s linear 0.3s;
  opacity: ${e=>{let{visible:t}=e;return t?1:0}};
  visibility: ${e=>{let{visible:t}=e;return t?"visible":"hidden"}};
`,Tt=e=>{let{explorerExpanded:t,setExplorerExpanded:n}=e;const{selectedDate:o,setSelectedDate:a}=(0,P.M)(),{user:s}=(0,M.o)(),{entries:l,fetchEntries:p,addEntry:g,updateEntry:u,deleteEntry:x}=function(e){const[t,n]=r.useState([]),o=r.useCallback(async()=>{if(!e)return;const t=T(e),r=(await(0,j.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}});n(S(r))},[e]),i=r.useCallback(async t=>{let{content:r,date:o}=t;if(!e)return null;const i={uid:e,id:k()(),content:r,date:o,createdAt:(new Date).toISOString()};return n(e=>S([...e,i])),await(0,j.gS)(T(e),i),i},[e]),a=r.useCallback(async(r,o)=>{if(!e)return;const i=t.find(e=>e.id===r);if(!i)return;const a={...i,content:o};n(e=>e.map(e=>e.id===r?a:e));const s=await A(e,r);await Promise.all(s.map(t=>(0,j.BN)((0,j.H9)(C.OO,`users/${e}/entries/${t.id}`),a)))},[t,e]),s=r.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const r=await A(e,t.id);await Promise.all(r.map(n=>(0,j.BN)((0,j.H9)(C.OO,`users/${e}/entries/${n.id}`),t)))},[e]),l=r.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const r=await A(e,t);await Promise.all(r.map(t=>(0,j.kd)((0,j.H9)(C.OO,`users/${e}/entries/${t.id}`))))},[e]);return{entries:t,setEntries:n,fetchEntries:o,addEntry:i,updateEntry:a,replaceEntry:s,deleteEntry:l}}((null===s||void 0===s?void 0:s.uid)||""),{searchContent:h,setSearchContent:b,selectedTag:w,setSelectedTag:v,systemTags:$,availableTags:E,pickerTags:D,visibleEntries:O}=function(e){const[t,n]=r.useState(""),[o,a]=r.useState("favorite"),s=r.useMemo(()=>[{name:"all",icon:i.Vap,system:!0,position:"top"},{name:"favorite",icon:i.usP,system:!0,position:"top"},{name:"journal",icon:f.Fsq,system:!0,position:"top"},{name:"templates",icon:i.MRc,system:!0,position:"top"},{name:"prompts",icon:m.vTI,system:!0,position:"top"},{name:"archive",icon:i.OZ2,system:!0,position:"bottom"},{name:"trash",icon:i.IXo,system:!0,position:"bottom"}],[]),l=r.useMemo(()=>s.map(e=>e.name),[s]),d=r.useMemo(()=>Array.from(new Set(e.flatMap(e=>y(e.content)))).filter(e=>!l.includes(e)).sort(),[e,l]),c=r.useMemo(()=>Array.from(new Set(["journal","templates","prompts",...d])).sort(),[d]),p=r.useCallback(e=>{const n=y(e.content),r=n.includes("trash"),i=n.includes("archive"),a=n.includes("templates"),s=n.includes("prompts");return""!==t.trim()?e.content.toLowerCase().includes(t.toLowerCase()):r?"trash"===o:("templates"===o||!a)&&("prompts"===o||!s)&&("archive"===o||!i)&&("templates"===o?a:"prompts"===o?s:"all"===o||("archive"===o?i:"trash"===o?r:n.includes(o)&&!n.includes("archive")&&!n.includes("trash")))},[t,o]),g=r.useMemo(()=>e.filter(p),[e,p]);return{searchContent:t,setSearchContent:n,selectedTag:o,setSelectedTag:a,systemTags:s,availableTags:d,pickerTags:c,visibleEntries:g,isEntryVisible:p}}(l),{cardRefs:R,cardHeights:K,totalHeight:F}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=r.useRef({}),[n,o]=r.useState({}),i=r.useCallback(()=>{const e={};Object.entries(t.current).forEach(t=>{let[n,r]=t;r&&(e[n]=r.offsetHeight)}),o(e)},[]);r.useEffect(()=>{const e=new ResizeObserver(()=>{i()});return Object.values(t.current).forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[i]),r.useEffect(()=>{i()},[...e,i]);const a=r.useMemo(()=>Object.values(n).reduce((e,t)=>e+t,0),[n]);return{cardRefs:t,cardHeights:n,totalHeight:a,refreshCardHeights:i}}([l]),[I,H]=r.useState(null),[U,B]=r.useState([]),J=r.useRef(null),[W,G]=r.useState(0),q=r.useRef(null),[_,V]=r.useState(0),[Y,X]=r.useState(!1),[Z,Q]=r.useState(!1),ee=r.useMemo(()=>l.filter(e=>{try{return(JSON.parse(e.content).tags||[]).includes("templates")}catch{return!1}}).map(e=>{const t=JSON.parse(e.content);return{title:t.title||"Untitled Template",text:t.text||"",color:t.color,tags:(t.tags||[]).filter(e=>"templates"!==e)}}),[l]);r.useLayoutEffect(()=>{const e=()=>{var e,t;V(null!==(e=null===(t=q.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return q.current&&t.observe(q.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]),r.useLayoutEffect(()=>{const e=()=>{var e,t;G(null!==(e=null===(t=J.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return J.current&&t.observe(J.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]);const te=r.useCallback(e=>{B(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),ne=r.useCallback(()=>{B(O.map(e=>e.id))},[O]),re=r.useCallback(()=>{B([])},[]);r.useEffect(()=>{B(e=>e.filter(e=>l.some(t=>t.id===e)))},[l]);const oe=r.useMemo(()=>O.filter(e=>U.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[O,U]),ie=r.useMemo(()=>O.filter(e=>U.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[O,U]);r.useEffect(()=>{p()},[p]);const ae=()=>{window.scrollTo({top:0,behavior:"smooth"})},se=u;return(0,d.jsx)(At,{children:(0,d.jsxs)(Xe,{uid:s?s.uid:"",selectedNotesText:oe,noteTitles:ie,clearSelectedNotes:re,children:[(0,d.jsxs)(z,{children:[(0,d.jsx)(c,{selectedTag:w,selectedDate:o,searchContent:h,onSearchChange:b,onDateChange:e=>{a(e.target.value)},onAddNote:async function(){const e="all"!==w?[w]:[];await g({date:o,content:JSON.stringify({...N,tags:e})}),ae()},onCopyAllNotes:async()=>{const e=oe.length>0?oe:O.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:ne,onClearAll:re,selectedCount:U.length,expanded:t,panelWidth:W,minimized:Y,onToggleMinimize:()=>X(e=>!e)}),(0,d.jsx)(ut,{onClearAll:re,expanded:t,panelWidth:_,minimized:Z,onToggleMinimize:()=>Q(e=>!e)})]}),(0,d.jsx)(L,{systemTags:$,customTags:E,selectedTag:w,setSelectedTag:v,explorerExpanded:t,setExplorerExpanded:n}),!Y&&(0,d.jsx)(qe,{entries:O,hoveredCardId:I,cardHeights:K,totalHeight:F,onScrollToCard:(e,t)=>{const n=R.current[e],r=J.current;if(!n||!r)return;const o=n.offsetTop,i="top"===t?o-100:o-r.clientHeight+n.offsetHeight+50;r.scrollTo({top:Math.max(0,i),behavior:"smooth"})}}),(0,d.jsx)($t,{ref:J,minimized:Y,children:!Y&&(0,d.jsx)(Je,{entries:O,pickerTags:D,cardRefs:R,onHoverCard:H,onDeleteEntry:async function(e){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])){const t=l.find(t=>t.id===e);if(!t)return;const n=JSON.parse(t.content),r=Array.from(new Set([...(n.tags||[]).filter(e=>"archive"!==e),"trash"]));return void await u(e,JSON.stringify({...n,tags:r}))}await x(e)},onChangeEntry:se,selectedNoteIds:U,onToggleSelection:te,templateOptions:ee})}),(0,d.jsx)(Mt,{ref:q,minimized:Z,children:(0,d.jsx)(Qe,{uid:(null===s||void 0===s?void 0:s.uid)||"",selectedNotesText:oe,noteTitles:ie,notesCount:U.length,clearSelectedNotes:re})}),(0,d.jsx)(wt,{})]})})},At=o.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Mt=o.Ay.div`
  flex: ${e=>{let{minimized:t}=e;return t?"0":"1"}};
  width: ${e=>{let{minimized:t}=e;return t?"0":"auto"}};
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
  margin-right: ${e=>{let{minimized:t}=e;return t?"120px":"0px"}};
`,$t=o.Ay.div`
  flex: ${e=>{let{minimized:t}=e;return t?"0 0 0":"1.5"}};
  width: ${e=>{let{minimized:t}=e;return t?"0":"auto"}};
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #b0b0b5 #e0e0e5;
  margin-right: ${e=>{let{minimized:t}=e;return t?"120px":"10px"}};

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
//# sourceMappingURL=dashboard.81ba8cac.chunk.js.map