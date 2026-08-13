"use strict";(globalThis.webpackChunkmavis_ai_web||=[]).push([[945],{7875(e,t,n){n.r(t),n.d(t,{default:()=>lt});var o=n(5043),r=n(4138),a=n(7246),i=n(4960),s=n(7149),d=n(1009),l=n(579);const c=e=>{let{selectedTag:t,selectedDate:n,searchContent:o,onSearchChange:r,onDateChange:c,onAddNote:m,onCopyAllNotes:f,onSelectAll:b,onClearAll:_,expanded:w,barWidth:y}=e;const v=w?188:52;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(p,{explorerWidth:v,barWidth:y,children:[(0,l.jsx)(g,{children:""===o.trim()?t.charAt(0).toUpperCase()+t.slice(1):"Search"}),"journal"===t&&(0,l.jsx)(u,{children:(0,l.jsx)("input",{title:"Select date",type:"date",value:n,onChange:c})}),(0,l.jsxs)(h,{children:[(0,l.jsx)("input",{placeholder:"Search",value:o,onChange:e=>r(e.target.value)}),(0,l.jsx)(a.K,{title:"Clear search",onClick:()=>r(""),children:(0,l.jsx)(s.rOP,{})})]}),(0,l.jsxs)(x,{children:[(0,l.jsx)(a.K,{title:"Clear all notes",onClick:_,children:(0,l.jsx)(d.TG1,{})}),(0,l.jsx)(a.K,{title:"Select all visible notes",onClick:b,children:(0,l.jsx)(d.NLe,{})}),(0,l.jsx)(a.K,{title:"Copy all visible notes",onClick:f,children:(0,l.jsx)(d.nxz,{})}),(0,l.jsx)(a.K,{title:"Add note",onClick:m,children:(0,l.jsx)(i.n4h,{})})]})]})})},p=r.Ay.div`
  display: flex;
  width: ${e=>{let{barWidth:t}=e;return`${t+60}px`}};
  flex-direction: row;
  align-items: center;
  min-height: 40px;
  padding: 0;
  margin-left: ${e=>{let{explorerWidth:t}=e;return`${t}px`}};
  margin-top: 16px;
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
`,h=r.Ay.div`
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
`,x=r.Ay.div`
  display: flex;
  align-items: center;
  height: 35px;
`;var m=n(2127);const f=e=>{try{JSON.parse(e)}catch(t){return!1}return!0},b=e=>{const t=e.split("-");return 3!==t.length?e:`${t[2]}/${t[1]}/${t[0]}`},_=e=>{if(!f(e))return[];const t=JSON.parse(e);return Array.from(new Set(t.tags||[]))},w=[{id:0,name:"Habits",title:"\ud83d\udd01 Habits - /year/S/eval(/month > 6 ? 2 : 1)",color:"#BBDEFB",tags:["daily"],text:String.raw`<div style="display:flex; gap:8px; align-items:flex-start;">

<div style="flex:1">

| Action | Habit | Count | Target | Progress | Done |
|---------|---------|---------|---------|---------|---------|
| @button(Done, \${follow_diet_done_dates}=\${follow_diet_done_dates} + "@date" + "," ) | 🍽️ Follow Diet | @eval(countDates(follow_diet_done_dates)) | 120 | @progress(@eval(countDates(follow_diet_done_dates) / 120)) | @eval(follow_diet_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${drink_water_done_dates}=\${drink_water_done_dates} + "@date" + "," ) | 🚰 Drink 3L Water | @eval(countDates(drink_water_done_dates)) | 120 | @progress(@eval(countDates(drink_water_done_dates) / 120)) | @eval(drink_water_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${exercise_done_dates}=\${exercise_done_dates} + "@date" + "," ) | 💪 Exercise | @eval(countDates(exercise_done_dates)) | 90 | @progress(@eval(countDates(exercise_done_dates) / 90)) | @eval(exercise_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${no_alcohol_done_dates}=\${no_alcohol_done_dates} + "@date" + "," ) | 🚱 No Alcohol | @eval(countDates(no_alcohol_done_dates)) | 120 | @progress(@eval(countDates(no_alcohol_done_dates) / 120)) | @eval(no_alcohol_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${no_porn_done_dates}=\${no_porn_done_dates} + "@date" + "," ) | 🔞 No Porn | @eval(countDates(no_porn_done_dates)) | 120 | @progress(@eval(countDates(no_porn_done_dates) / 120)) | @eval(no_porn_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${no_fap_done_dates}=\${no_fap_done_dates} + "@date" + "," ) | 🚯 No FAP | @eval(countDates(no_fap_done_dates)) | 120 | @progress(@eval(countDates(no_fap_done_dates) / 120)) | @eval(no_fap_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${study_done_dates}=\${study_done_dates} + "@date" + "," ) | 📖 Study | @eval(countDates(study_done_dates)) | 100 | @progress(@eval(countDates(study_done_dates) / 100)) | @eval(study_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${read_done_dates}=\${read_done_dates} + "@date" + "," ) | 📙 Read | @eval(countDates(read_done_dates)) | 100 | @progress(@eval(countDates(read_done_dates) / 100)) | @eval(read_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${meditation_done_dates}=\${meditation_done_dates} + "@date" + "," ) | 🧘 Meditation | @eval(countDates(meditation_done_dates)) | 100 | @progress(@eval(countDates(meditation_done_dates) / 100)) | @eval(meditation_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${gratitude_done_dates}=\${gratitude_done_dates} + "@date" + "," ) | 🙏 Gratitude | @eval(countDates(gratitude_done_dates)) | 100 | @progress(@eval(countDates(gratitude_done_dates) / 100)) | @eval(gratitude_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${journal_done_dates}=\${journal_done_dates} + "@date" + "," ) | ✍🏼 Journal | @eval(countDates(journal_done_dates)) | 100 | @progress(@eval(countDates(journal_done_dates) / 100)) | @eval(journal_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${track_mood_done_dates}=\${track_mood_done_dates} + "@date" + "," ) | 😃 Track Mood | @eval(countDates(track_mood_done_dates)) | 120 | @progress(@eval(countDates(track_mood_done_dates) / 120)) | @eval(track_mood_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${good_work_done_dates}=\${good_work_done_dates} + "@date" + "," ) | 👷 Good Work | @eval(countDates(good_work_done_dates)) | 120 | @progress(@eval(countDates(good_work_done_dates) / 120)) | @eval(good_work_done_dates.includes("@date") ? '✅' : '⬜') |

</div>

<div style="flex:1">

| Action | Habit | Count | Target | Progress | Done |
|---------|---------|---------|---------|---------|---------|
| @button(Done, \${projects_done_dates}=\${projects_done_dates} + "@date" + "," ) | 🏗️ Projects | @eval(countDates(projects_done_dates)) | 80 | @progress(@eval(countDates(projects_done_dates) / 80)) | @eval(projects_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${organization_done_dates}=\${organization_done_dates} + "@date" + "," ) | 🗂️ Organization | @eval(countDates(organization_done_dates)) | 60 | @progress(@eval(countDates(organization_done_dates) / 60)) | @eval(organization_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${fun_done_dates}=\${fun_done_dates} + "@date" + "," ) | 🎉 Fun | @eval(countDates(fun_done_dates)) | 60 | @progress(@eval(countDates(fun_done_dates) / 60)) | @eval(fun_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${run_done_dates}=\${run_done_dates} + "@date" + "," ) | 🏃 Run | @eval(countDates(run_done_dates)) | 60 | @progress(@eval(countDates(run_done_dates) / 60)) | @eval(run_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${meal_prep_done_dates}=\${meal_prep_done_dates} + "@date" + "," ) | 🍱 Meal Prep | @eval(countDates(meal_prep_done_dates)) | 40 | @progress(@eval(countDates(meal_prep_done_dates) / 40)) | @eval(meal_prep_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${measure_weight_done_dates}=\${measure_weight_done_dates} + "@date" + "," ) | ⚖️ Measure Weight | @eval(countDates(measure_weight_done_dates)) | 120 | @progress(@eval(countDates(measure_weight_done_dates) / 120)) | @eval(measure_weight_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${cold_shower_done_dates}=\${cold_shower_done_dates} + "@date" + "," ) | 🛀 Cold Shower | @eval(countDates(cold_shower_done_dates)) | 90 | @progress(@eval(countDates(cold_shower_done_dates) / 90)) | @eval(cold_shower_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${wim_hof_done_dates}=\${wim_hof_done_dates} + "@date" + "," ) | 🫁 Wim Hof | @eval(countDates(wim_hof_done_dates)) | 90 | @progress(@eval(countDates(wim_hof_done_dates) / 90)) | @eval(wim_hof_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${body_scan_done_dates}=\${body_scan_done_dates} + "@date" + "," ) | 👃 Body Scan | @eval(countDates(body_scan_done_dates)) | 90 | @progress(@eval(countDates(body_scan_done_dates) / 90)) | @eval(body_scan_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${dev_challenge_done_dates}=\${dev_challenge_done_dates} + "@date" + "," ) | 👨‍💻 Dev Challenge | @eval(countDates(dev_challenge_done_dates)) | 100 | @progress(@eval(countDates(dev_challenge_done_dates) / 100)) | @eval(dev_challenge_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${family_activity_done_dates}=\${family_activity_done_dates} + "@date" + "," ) | 👨‍👩‍👦 Family Activity | @eval(countDates(family_activity_done_dates)) | 50 | @progress(@eval(countDates(family_activity_done_dates) / 50)) | @eval(family_activity_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${nature_time_done_dates}=\${nature_time_done_dates} + "@date" + "," ) | 🌿 Nature Time | @eval(countDates(nature_time_done_dates)) | 50 | @progress(@eval(countDates(nature_time_done_dates) / 50)) | @eval(nature_time_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${music_creation_done_dates}=\${music_creation_done_dates} + "@date" + "," ) | 🎵 Music Creation | @eval(countDates(music_creation_done_dates)) | 60 | @progress(@eval(countDates(music_creation_done_dates) / 60)) | @eval(music_creation_done_dates.includes("@date") ? '✅' : '⬜') |

</div>

</div>

\${follow_diet_done_dates}=
\${drink_water_done_dates}=
\${exercise_done_dates}=
\${no_alcohol_done_dates}=
\${no_porn_done_dates}=
\${no_fap_done_dates}=
\${study_done_dates}=
\${read_done_dates}=
\${meditation_done_dates}=
\${gratitude_done_dates}=
\${journal_done_dates}=
\${track_mood_done_dates}=
\${good_work_done_dates}=
\${projects_done_dates}=
\${organization_done_dates}=
\${fun_done_dates}=
\${run_done_dates}=
\${meal_prep_done_dates}=
\${measure_weight_done_dates}=
\${cold_shower_done_dates}=
\${wim_hof_done_dates}=
\${body_scan_done_dates}=
\${dev_challenge_done_dates}=
\${family_activity_done_dates}=
\${nature_time_done_dates}=
\${music_creation_done_dates}=`},{id:1,name:"Journal",title:"\u270d\ud83c\udffc Journal - /dayofweek, /date",color:"#F3E5C8",tags:["journal"],text:String.raw`📍 /city - /country, /dayofweek, /datetime
🌤️ Weather: /weather /temperature
🌙 Moon: /moon
🍂 Season: /season

⚖️ Weight: \${weight} kg
📏 BMI: @bmi(\${weight},\${height})
🎂 Age: /age(1991-12-21)

💤 Sleep: \${sleep}h
🎭 Mood: @select[ | happy 😄, joyful 😊 , excited 🤩 , calm 😌 , neutral 😐 , tired 😪 , sleepy 😴 , worried 😟 , anxious 😰 , sad 😢 ]
⚡ Energy: @select[ | High 🚀, Medium ⚡, Low 🔋 ]
🧠 Focus: @select[ | High 🚀, Medium ⚡, Low 😐, Poor 👎 ]

\${sleep}=
\${weight}=
\${height}=

📝 Day Summary:



🗓️ Schedule:

-

🎯 Top priority:

-

❤️ Gratitude:

-

🤝 Commitments:

-

✅ Main achievement:

-

💭 Notes:

- `}];var y=n(8222),v=n.n(y),k=n(2471),j=n(1286);const C=e=>[...e].sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:e.createdAt>t.createdAt?-1:e.createdAt<t.createdAt?1:0),S=e=>{const t=(0,k.H9)(j.OO,"users",e);return(0,k.rJ)(t,"entries")},D=async(e,t)=>{const n=S(e);return(await(0,k.GG)((0,k.P)(n,(0,k._M)("id","==",t)))).docs};var $=n(6625),T=n(7950);const A=e=>{let{children:t}=e;const n=document.getElementById("header-portal");return n?(0,T.createPortal)(t,n):null},E={title:"",type:"record",tags:[],text:"",color:"#fff",locked:!1,pinned:!1,collapsed:!1},M=["#F8F9FA","#CED4DA","#FFF4B5","#FFDCC8","#FFCDD2","#FADCE6","#DCCCFB","#BBDEFB","#C8E6C9","#B2DFDB","#F3E5C8","#D7CCC8"],N=e=>e.replace(/\b\w/g,e=>e.toUpperCase());var P=n(5561);const R=e=>{let{systemTags:t,customTags:n,selectedTag:o,setSelectedTag:r,explorerExpanded:i,setExplorerExpanded:s}=e;const c=e=>e.replace(/\b\w/g,e=>e.toUpperCase());return(0,l.jsxs)(L,{expanded:i,children:[(0,l.jsxs)(a.K,{expanded:i,title:"Menu",onClick:()=>s(!i),children:[(0,l.jsx)(d.ND1,{}),i&&(0,l.jsx)("span",{children:"Menu"})]}),t.map(e=>{const t=e.icon;return(0,l.jsxs)(a.K,{expanded:i,selected:o===e.name,title:e.name,onClick:()=>r(e.name),children:[(0,l.jsx)(t,{}),i&&(0,l.jsx)("span",{children:c(e.name)})]},e.name)}),n.map(e=>(0,l.jsxs)(a.K,{expanded:i,selected:o===e,title:c(e),onClick:()=>r(e),children:[(0,l.jsx)(d.cnX,{}),i&&(0,l.jsx)("span",{children:c(e)})]},e))]})},L=r.Ay.div`
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
`;var O=n(5369);const z=e=>{let{title:t,locked:n,collapsed:o,speaking:r,isFavorite:s,selected:c,onToggleSelection:p,speak:u,stopSpeaking:g,copyFormattedContent:h,onToggleFavorite:x,onToggleLock:m,onToggleCollapse:f,onTitleChange:b}=e;return(0,l.jsxs)(K,{children:[(0,l.jsxs)(H,{children:[(0,l.jsx)(F,{title:c?"Unselect note":"Select note",onClick:p,children:c?"\u2713":""}),s?(0,l.jsx)(a.K,{disabled:n,title:"Remove favorite",onClick:x,children:(0,l.jsx)(O.gt3,{})}):(0,l.jsx)(a.K,{disabled:n,title:"Add favorite",onClick:x,children:(0,l.jsx)(d.usP,{})}),(0,l.jsx)(I,{title:"Note name",role:"textbox",contentEditable:!n,suppressContentEditableWarning:!0,"data-placeholder":"\ud83d\ude4b Give me a name",onBlur:e=>b(e.currentTarget.innerText),children:t})]}),(0,l.jsxs)(B,{children:[r?(0,l.jsx)(a.K,{title:"Stop hearing note",onClick:g,children:(0,l.jsx)(d.cKW,{color:"#2563eb"})}):(0,l.jsx)(a.K,{title:"Hear note",onClick:u,children:(0,l.jsx)(d.o77,{})}),(0,l.jsx)(a.K,{title:"Copy note",onClick:h,children:(0,l.jsx)(d.nxz,{})}),n?(0,l.jsx)(a.K,{title:"Unlock note",onClick:m,children:(0,l.jsx)(d.F5$,{color:"#2563eb"})}):(0,l.jsx)(a.K,{title:"Lock note",onClick:m,children:(0,l.jsx)(d.K4k,{})}),o?(0,l.jsx)(a.K,{title:"Expand note",onClick:f,children:(0,l.jsx)(i.BSQ,{})}):(0,l.jsx)(a.K,{title:"Collapse note",onClick:f,children:(0,l.jsx)(i.q2p,{})})]})]})},F=r.Ay.span`
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
`,K=r.Ay.header`
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
`,H=r.Ay.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  margin: 0;
  padding: 0;

  color: black;
`,I=r.Ay.span`
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
`,B=r.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`;var W=n(7996),U=n(4993),J=n(3859),G=n(6801),q=n(7353),Y=n(285),V=n(578),X=n(8550),Z=n(3596),Q=n(5312),ee=n.n(Q);const te=e=>{let{label:t,expression:n,onExecute:o}=e;return(0,l.jsx)("button",{className:"markdownButton",onClick:()=>o(n),children:t})},ne=e=>{let{value:t,locked:n,editing:o,textareaRef:r,markdownRef:a,setValue:i,setEditing:s,onSave:d,onMarkdownClick:c,processMarkdown:p,onExecuteExpression:u}=e;return o?(0,l.jsx)(re,{ref:r,placeholder:"* \u2753 What do you have for today?\n\n<markdown editor>",autoFocus:!0,value:t||"",onFocus:e=>{const t=e.currentTarget;t.style.height="auto",t.style.height=`${t.scrollHeight}px`},onChange:e=>{const t=e.currentTarget;t.style.height=`${t.scrollHeight}px`,i(e.target.value)},onBlur:e=>{var t;const n=e.relatedTarget;"true"!==(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.keepeditor)&&(d(),s(!1))}}):(0,l.jsx)(oe,{ref:a,onClick:e=>{if(n)return;const t=e.target;c(t.innerText||t.textContent||"")},children:(0,l.jsx)(W.oz,{rehypePlugins:[U.A],components:{button(e){var t,n,o;const r=decodeURIComponent(String(null!==(t=null===(n=e.node)||void 0===n||null===(o=n.properties)||void 0===o?void 0:o.dataExpression)&&void 0!==t?t:""));return(0,l.jsx)(te,{label:String(e.children),expression:r,onExecute:u})}},remarkPlugins:[[q.A,{padSpaceAfter:!1,emoticon:!0}],[X.A,{tight:!0,ordered:!0}],[J.A,{stringLength:ee()}],Y.A,V.A,Z.A,G.A],children:p(t||"* \u2753 What do you have for today?")})})},oe=r.Ay.div`
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
`,re=r.Ay.textarea`
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
`;var ae=n(5922);const ie=e=>{let{colors:t,onColorClicked:n}=e;return(0,T.createPortal)((0,l.jsx)("div",{onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),style:{position:"fixed",top:"120px",right:"50%",transform:"translate(420px, 0%)",display:"flex",flexDirection:"column",gap:"4px",padding:"8px",background:"white",border:"1px solid #323232",borderRadius:"8px",boxShadow:"0 10px 30px rgba(0,0,0,0.25)",zIndex:999999},children:t.map(e=>(0,l.jsx)("button",{style:{backgroundColor:e,width:60,height:24,border:"1px solid #666",borderRadius:4,cursor:"pointer",padding:0},onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)}},e))}),document.body)},se=e=>{let{options:t,onPicked:n}=e;return(0,T.createPortal)((0,l.jsx)("div",{onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),style:{position:"fixed",top:"120px",right:"50%",transform:"translate(420px, 0%)",display:"flex",flexDirection:"column",gap:"4px",padding:"8px",background:"white",border:"1px solid #323232",borderRadius:"8px",boxShadow:"0 10px 30px rgba(0,0,0,0.25)",zIndex:999999},children:t.map(e=>(0,l.jsx)("button",{style:{backgroundColor:"#cfcfcf",width:"100%",height:24,border:"1px solid #666",borderRadius:4,cursor:"pointer",padding:"2px"},onMouseDown:t=>{t.preventDefault(),t.stopPropagation(),n(e)},children:e.name},e.id))}),document.body)},de=e=>{let{isLocked:t,listening:n,aiLoading:o,isArchived:r,isTrash:i,showColorPicker:c,showTemplatePicker:p,colorPickerRef:u,templatePickerRef:g,noteColors:h,templateOptions:x,startListening:m,stopListening:f,undoLastChange:b,handleAI:_,archiveNote:w,trashNote:y,setShowColorPicker:v,setShowTemplatePicker:k,onColorSelected:j,onTemplateSelected:C}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(le,{children:[(0,l.jsx)(a.K,{disabled:t,title:"Change note background color",onClick:()=>v(e=>!e),children:(0,l.jsx)(s.$di,{})}),(0,l.jsx)(a.K,{disabled:t,title:"Load template",onClick:()=>k(e=>!e),children:(0,l.jsx)(d.MRc,{})}),(0,l.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"AI assistant",onMouseDown:e=>e.preventDefault(),onClick:_,children:(0,l.jsx)(d.Ojn,{color:o?"#2563eb":void 0})}),(0,l.jsx)(a.K,{disabled:t,"data-keepeditor":"true",title:"Revert last change",onMouseDown:e=>e.preventDefault(),onClick:b,children:(0,l.jsx)(d.cO3,{})}),n?(0,l.jsx)(a.K,{disabled:t,title:"Stop listening",onClick:f,children:(0,l.jsx)(d.kGk,{color:"#2563eb"})}):(0,l.jsx)(a.K,{disabled:t,title:"Listen note",onClick:m,children:(0,l.jsx)(d.Rrl,{})}),(0,l.jsx)(ae.iJU,{}),(0,l.jsx)(a.K,{disabled:t,title:r?"Unarchive note":"Archive note",onClick:w,children:(0,l.jsx)(d.OZ2,{color:r?"#2563eb":void 0})}),(0,l.jsx)(a.K,{disabled:t,title:i?"Delete permanently":"Move to trash",onClick:y,children:(0,l.jsx)(d.IXo,{color:i?"#dc2626":void 0})})]}),c&&(0,l.jsx)(ce,{ref:u,children:(0,l.jsx)(ie,{colors:h,onColorClicked:j})}),p&&(0,l.jsx)(pe,{ref:g,children:(0,l.jsx)(se,{options:x,onPicked:C})})]})},le=r.Ay.span`
  position: relative;

  width: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin: 0;
  padding: 0;

  z-index: 8;
`,ce=r.Ay.div`
  position: relative;
  width: 100%;
`,pe=r.Ay.div`
  position: relative;
  width: 100%;
`,ue=e=>{let{date:t,tags:n,availableTags:o,isLocked:r,tagPickerRef:a,showTagPicker:s,creatingTag:c,newTagName:p,setShowTagPicker:u,setCreatingTag:g,setNewTagName:h,hasTag:x,toggleTag:m,createTag:f,formatTag:b,formatDate:_}=e;return(0,l.jsxs)(ge,{children:[(0,l.jsxs)(xe,{children:[(0,l.jsx)(he,{children:_(t)}),n.map(e=>(0,l.jsx)(me,{onClick:()=>!r&&m(e),children:b(e)},e))]}),(0,l.jsxs)(fe,{ref:a,children:[!r&&(0,l.jsx)(be,{onClick:()=>u(!s),children:(0,l.jsx)(i.n4h,{})}),s&&(0,l.jsxs)(_e,{children:[o.map(e=>(0,l.jsxs)(we,{className:x(e)?"selected":"",onClick:()=>m(e),children:[(0,l.jsx)(d.cnX,{}),(0,l.jsx)("span",{children:b(e)})]},e)),c?(0,l.jsx)(ve,{autoFocus:!0,placeholder:"Tag name...",value:p,onChange:e=>h(e.target.value),onKeyDown:e=>{"Enter"===e.key&&f(p),"Escape"===e.key&&(g(!1),h(""))},onBlur:()=>{p.trim()?f(p):g(!1)}}):(0,l.jsxs)(ye,{onClick:()=>g(!0),children:[(0,l.jsx)(d.cnX,{}),"New Tag"]})]})]})]})},ge=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,he=r.Ay.span`
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
`,xe=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-left: 10px;
`,me=r.Ay.span`
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
`,fe=r.Ay.div`
  position: relative;

  width: auto;
  margin: 0;
`,be=r.Ay.span`
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
`,_e=r.Ay.div`
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
`,we=r.Ay.span`
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
`,ye=r.Ay.span`
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
`,ve=r.Ay.input`
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
`;const ke=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new Date;return{now:t,year:t.getFullYear(),month:t.getMonth()+1,week:Math.ceil(((t.getTime()-new Date(t.getFullYear(),0,1).getTime())/864e5+new Date(t.getFullYear(),0,1).getDay()+1)/7),countDates:e=>new Set(String(e||"").split(",").map(e=>e.trim()).filter(Boolean)).size,hasDate:(e,t)=>String(e||"").includes(t),...e}},je=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const r=new Date;return(e=e.replace(/@date\b/g,()=>r.toLocaleDateString()).replace(/@time\b/g,()=>r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/@datetime\b/g,()=>r.toLocaleString()).replace(/@dayofweek\b/g,()=>r.toLocaleDateString(void 0,{weekday:"long"})).replace(/@week\b/g,()=>String(t.week)).replace(/@month\b/g,()=>String(r.getMonth()+1)).replace(/@monthname\b/g,()=>r.toLocaleDateString(void 0,{month:"long"})).replace(/@year\b/g,()=>String(r.getFullYear())).replace(/@today\b/g,()=>r.toLocaleDateString()).replace(/@weather\b/g,()=>t.weather||"@weather").replace(/@temperature\b/g,()=>t.temperature||"@temperature").replace(/@city\b/g,()=>t.city||"@city").replace(/@country\b/g,()=>t.country||"@country").replace(/@upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/@lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/@select\[(.*?)\|(.*?)\]/g,(e,t)=>t.trim()).replace(/@bmi\(([\d.]+),([\d.]+)\)/g,(e,t,n)=>{const o=Number(t),r=Number(n);return o&&r?(o/(r*r)).toFixed(1):"[BMI error]"}).replace(/@calculate\((.*?)\)/g,(e,t)=>{try{return String(Function(`return (${t})`)())}catch{return"[Calculation error]"}}).replace(/@countdown\((.*?)\)/g,(e,t)=>{const n=new Date(t).getTime()-r.getTime();return String(Math.max(0,Math.ceil(n/864e5)))}).replace(/@rating\((\d+)\)/g,(e,t)=>{const n=Math.max(0,Math.min(5,Number(t)));return`${"\u2605".repeat(n)}${"\u2606".repeat(5-n)}`}).replace(/@progress\((-?[\d.]+)\)/g,(e,n)=>{const o=Math.max(-1,Math.min(1,Number(n))),r=t.isMobile?5:10,a=Math.abs(o),i=`${Math.round(100*o)}%`,s=Math.round(a*r);let d=o>=0?"\u2588".repeat(s)+"\u2591".repeat(r-s):"\u2591".repeat(r-s)+"\u2588".repeat(s);const l=Math.max(0,Math.floor((r-i.length)/2));return d.slice(0,l)+i+d.slice(l+i.length)}).replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})).includes("@")&&o<5?je(e,t,n,o+1):e},Ce=/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,Se=(e,t)=>{const n={};e.replace(Ce,(e,t,o)=>(n[t]=o.trim(),""));let o=!0;for(;o;){o=!1;for(const[e,r]of Object.entries(n)){if(!r.includes("@"))continue;const a=je(De(r,n),ke({...t,...n}));a!==r&&(n[e]=a,o=!0)}}return n},De=(e,t)=>e.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,n)=>{var o;return null!==(o=t[n])&&void 0!==o?o:""}),$e=(e,t,n)=>{const o=Se(e),r=ke({...t,...Object.fromEntries(Object.entries(o).map(e=>{let[t,n]=e;if(""===n)return[t,""];const o=Number(n);return[t,Number.isNaN(o)?n:o]}))});return je(De((e=>e.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm,""))((e=>e.replace(/@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,(e,t,n)=>`<button data-expression="${encodeURIComponent(n.trim())}">${t}</button>`))(e)),o),r,n)};function Te(){const[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)({city:"",country:""});return(0,o.useEffect)(()=>{(async()=>new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async n=>{let{coords:o}=n;try{const t=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${o.latitude}&longitude=${o.longitude}&current=temperature_2m,weather_code`),n=await t.json();let l="",c="";try{var r,a,i,s;const e=await fetch(`https://geocode.maps.co/reverse?lat=${o.latitude}&lon=${o.longitude}&api_key=undefined`),t=await e.json();l=(null===(r=t.address)||void 0===r?void 0:r.city)||(null===(a=t.address)||void 0===a?void 0:a.town)||(null===(i=t.address)||void 0===i?void 0:i.village)||"",c=(null===(s=t.address)||void 0===s?void 0:s.country)||""}catch{console.warn("Reverse geocoding failed")}e({temperature:`${Math.round(n.current.temperature_2m)}\xb0C`,weather:(d=n.current.weather_code,0===d?"\u2600\ufe0f Sunny":[1,2].includes(d)?"\ud83c\udf24\ufe0f Partly Cloudy":3===d?"\u2601\ufe0f Cloudy":[45,48].includes(d)?"\ud83c\udf2b\ufe0f Foggy":[51,53,55,56,57].includes(d)?"\ud83c\udf26\ufe0f Light Rain":[61,63,65,66,67].includes(d)?"\ud83c\udf27\ufe0f Rainy":[71,73,75,77].includes(d)?"\u2744\ufe0f Snowing":[80,81,82].includes(d)?"\ud83c\udf27\ufe0f Rain Showers":[95,96,99].includes(d)?"\u26c8\ufe0f Stormy":"\u2601\ufe0f Cloudy"),city:l,country:c})}catch(l){t(l)}var d}):t(new Error("Geolocation not available"))}))().then(e=>{t(e.temperature),r(e.weather),i({city:e.city,country:e.country})}).catch(console.error)},[]),{temperature:e,weather:n,location:a}}var Ae=n(503);const Ee=new TextEncoder,Me=new TextDecoder;function Ne(e){const t=new Uint8Array(e);let n="";for(let o=0;o<t.length;o++)n+=String.fromCharCode(t[o]);return btoa(n)}function Pe(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}async function Re(e,t){const n=await crypto.subtle.importKey("raw",Ee.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:2e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function Le(e,t){const n=await async function(e,t){const n=crypto.getRandomValues(new Uint8Array(12)),o=crypto.getRandomValues(new Uint8Array(16)),r=await Re(t,o);return{encrypted:Ne(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},r,Ee.encode(e))),iv:Ne(n),salt:Ne(o)}}(t,e);await(0,k.BN)((0,k.H9)(j.OO,"users",e,"settings","openai"),{encryptedApiKey:n.encrypted,iv:n.iv,salt:n.salt})}async function Oe(e){const t=await(0,k.x7)((0,k.H9)(j.OO,"users",e,"settings","openai"));if(!t.exists())return"";const n=t.data();return async function(e,t,n,o){const r=await Re(o,Pe(n)),a=await crypto.subtle.decrypt({name:"AES-GCM",iv:Pe(t)},r,Pe(e));return Me.decode(a)}(n.encryptedApiKey,n.iv,n.salt,e)}async function ze(e,t,n,o,r){const a=r||await Oe(e);if(!a)throw new Error("OpenAI API Key not configured.");const i=new Ae.Ay({apiKey:a,dangerouslyAllowBrowser:!0}),s=`\nSystem:\n${t}\n\nInstruction:\n${n}\n\nContext:\n${o}\n`;return(await i.responses.create({model:"gpt-5-mini",input:s})).output_text.trim()}const Fe="You are a text editor assistant.\n\nExecute the user's instruction on the provided text.\n\nRules:\n\n- Return only the resulting text.\n- Do not explain anything.\n- Do not add introductions.\n- Do not add conclusions.\n- Do not add notes.\n- Preserve formatting whenever possible.\n- Keep the EXACT SAME language used in the original text.\n- Never translate unless the instruction explicitly requests translation.\n- Ignore previous requests, conversation history, context, memory, and earlier instructions.\n- Treat this request as a completely isolated session.\n- Use only:\n  1. the instruction below\n  2. the provided text\n- Do not use information from previous requests.\n- Do not carry context across requests.\n- Always use markdown.\n- If the code contains commands (@cmd or /cmd), keep them. Use them.\n";const Ke=e=>{let{id:t,date:n,content:r,onDeleteCard:a,onChangeContent:i,tags:s,selected:d,onToggleSelection:c}=e;const{listening:p,transcript:u,startListening:g,stopListening:h}=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(""),a=(0,o.useRef)(null);return(0,o.useEffect)(()=>{const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e)return void console.warn("SpeechRecognition API not supported");const n=new e;n.lang="pt-BR",n.continuous=!0,n.interimResults=!0,n.onresult=e=>{let t="";for(let n=0;n<e.results.length;n++)t+=e.results[n][0].transcript;r(t)},n.onend=()=>{t(!1)},a.current=n},[]),{listening:e,transcript:n,startListening:()=>{var e;null===(e=a.current)||void 0===e||e.start(),t(!0)},stopListening:()=>{var e;null===(e=a.current)||void 0===e||e.stop(),t(!1)}}}(),{speak:x,speaking:m,stopSpeaking:_}=function(){const[e,t]=(0,o.useState)(!1);return{speak:function(e){const n=function(e){return function(e){return e.replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/#+\s/g,"").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/[_~]/g,"").replace(/\n+/g,". ").trim()}(e).replace(/[^\p{L}\p{N}\s]/gu," ").replace(/\s+/g," ").trim()}(e),o=new SpeechSynthesisUtterance(n),r=function(e){return/[\xe3\xf5\xe1\xe0\xe2\xe9\xea\xed\xf3\xf4\xfa\xe7]/i.test(e)?"pt-BR":"en-US"}(n),a=speechSynthesis.getVoices().find(e=>e.lang.startsWith(r));a&&(o.voice=a),o.lang=r,o.onstart=()=>t(!0),o.onend=()=>t(!1),speechSynthesis.speak(o)},stopSpeaking:()=>{speechSynthesis.cancel(),t(!1)},speaking:e}}(),[y,v]=o.useState(!1),[k,j]=o.useState(!1),[C,S]=o.useState(!1),D=o.useRef(null),T=o.useRef(null),A=o.useRef(null),P=o.useRef(null),R=o.useRef(null),[L,O]=o.useState(window.innerWidth<1260),{user:F}=(0,$.o)(),{temperature:K,weather:H,location:I}=Te(),{setCursorPosition:B,findBestCursorPosition:W}=function(e){let{editing:t,textareaRef:n}=e;const[r,a]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!t||!n.current||null===r)return;const e=n.current;e.focus(),e.setSelectionRange(r,r),requestAnimationFrame(()=>{const t=document.createElement("div"),n=window.getComputedStyle(e);t.style.position="absolute",t.style.visibility="hidden",t.style.whiteSpace="pre-wrap",t.style.wordWrap="break-word",t.style.font=n.font,t.style.lineHeight=n.lineHeight,t.style.padding=n.padding,t.style.width=`${e.clientWidth}px`,t.textContent=e.value.substring(0,r),document.body.appendChild(t);const o=t.offsetHeight;document.body.removeChild(t);const a=e.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:a+o-window.innerHeight/2,behavior:"smooth"})})},[t,r,n]),{cursorPosition:r,setCursorPosition:a,findBestCursorPosition:(e,t)=>{const n=e.replace(/[\u2588\u2591]+/g,"").replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g,"").replace(/\s+/g," ").trim();if(!n)return t.length;const o=n.split(" ");for(let r=Math.min(o.length,8);r>=2;r--)for(let e=0;e<=o.length-r;e++){const n=o.slice(e,e+r).join(" "),a=t.indexOf(n);if(a>=0)return a}for(const r of o){if(r.length<4)continue;const e=t.indexOf(r);if(e>=0)return e}return t.length}}}({editing:y,textareaRef:D});!function(e){let{tagPickerRef:t,colorPickerRef:n,templatePickerRef:r,closeTagPicker:a,closeColorPicker:i,closeTemplatePicker:s}=e;(0,o.useEffect)(()=>{const e=e=>{const o=e.target;t.current&&!t.current.contains(o)&&a(),n.current&&!n.current.contains(o)&&i(),r.current&&!r.current.contains(o)&&s()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t,n,r,a,i,s])}({tagPickerRef:A,colorPickerRef:P,templatePickerRef:R,closeTagPicker:()=>{Y(!1),V(!1)},closeColorPicker:()=>{j(!1)},closeTemplatePicker:()=>{S(!1)}}),o.useEffect(()=>{const e=()=>{O(window.innerWidth<1260)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const U=o.useMemo(()=>((e,t)=>{const n=t(e)?JSON.parse(e):{...E,text:e};return{...E,...n,tags:Array.from(new Set([...n.tags||[]]))}})(r,f),[r]),{showTagPicker:J,creatingTag:G,newTagName:q,setShowTagPicker:Y,setCreatingTag:V,setNewTagName:X,hasTag:Z,toggleTag:Q,createTag:ee}=function(e){let{tags:t,onTagsChange:n}=e;const[r,a]=(0,o.useState)(!1),[i,s]=(0,o.useState)(!1),[d,l]=(0,o.useState)(""),c=e=>t.includes(e),p=e=>{const o=Array.from(new Set(c(e)?t.filter(t=>t!==e):[...t,e]));n(o)};return{showTagPicker:r,creatingTag:i,newTagName:d,setShowTagPicker:a,setCreatingTag:s,setNewTagName:l,hasTag:c,toggleTag:p,createTag:e=>{const t=e.trim().toLowerCase();t&&(p(t),l(""),s(!1))}}}({tags:U.tags,onTagsChange:e=>{i(t,JSON.stringify({...U,tags:e}))}}),[te,oe]=o.useState(U.text||""),[re,ae]=o.useState([]),ie=o.useCallback(e=>{ae(t=>t[t.length-1]===e?t:[...t,e])},[]),{aiLoading:se,handleAI:le}=function(e){let{userId:t,value:n,textareaRef:r,pushHistory:a,onContentChange:i}=e;const[s,d]=(0,o.useState)(!1);return{aiLoading:s,handleAI:async()=>{if(!t)return void alert("User not authenticated");let e=await Oe(t);if(!e){var o;if(e=(null===(o=window.prompt("OpenAI API Key not configured.\n\nEnter your OpenAI API Key:"))||void 0===o?void 0:o.trim())||"",!e)return;await Le(t,e)}const s=window.prompt("Examples:\n\nFix grammar\nSummarize\nRewrite professionally\nTranslate to Portuguese");if(null!==s&&void 0!==s&&s.trim()){d(!0);try{a(n);const o=r.current;if(o&&o.selectionStart!==o.selectionEnd){const r=o.selectionStart,a=o.selectionEnd,d=n.substring(r,a),l=await ze(t,Fe,s,d,e),c=n.substring(0,r)+l+n.substring(a);return void i(c)}const d=await ze(t,Fe,s,n,e);i(`${n}\n\n${d}`)}catch(l){console.error(l),alert(l instanceof Error?l.message:"AI request failed")}finally{d(!1)}}}}}({userId:null===F||void 0===F?void 0:F.uid,value:te,textareaRef:D,pushHistory:ie,onContentChange:e=>{oe(e),i(t,JSON.stringify({...U,text:e}))}}),ce=()=>{if(Z("trash"))return void a(t,!0);const e=(e=>Array.from(new Set([...e.filter(e=>"archive"!==e),"trash"])))(U.tags);i(t,JSON.stringify({...U,tags:e}))},pe=e=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new Date;return e.replace(/\/date\b/g,()=>n.toLocaleDateString()).replace(/\/time\b/g,()=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).replace(/\/datetime\b/g,()=>n.toLocaleString()).replace(/\/dayofweek\b/g,()=>n.toLocaleDateString(void 0,{weekday:"long"})).replace(/\/week\b/g,()=>{const e=new Date(n.getFullYear(),0,1),t=Math.ceil(((n.getTime()-e.getTime())/864e5+e.getDay()+1)/7);return String(t)}).replace(/\/month\b/g,()=>String(n.getMonth()+1)).replace(/\/monthname\b/g,()=>n.toLocaleDateString(void 0,{month:"long"})).replace(/\/year\b/g,()=>String(n.getFullYear())).replace(/\/today\b/g,()=>n.toLocaleDateString()).replace(/\/yesterday\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()-1),e.toLocaleDateString()}).replace(/\/tomorrow\b/g,()=>{const e=new Date(n);return e.setDate(e.getDate()+1),e.toLocaleDateString()}).replace(/\/weather\b/g,()=>t.weather||"/weather").replace(/\/temperature\b/g,()=>t.temperature||"/temperature").replace(/\/city\b/g,()=>t.city||"/city").replace(/\/country\b/g,()=>t.country||"/country").replace(/\/moon\b/g,()=>{const e=2551443,t=(n.getTime()/1e3-new Date("2001-01-24").getTime()/1e3)%e/e;return t<.03?"\ud83c\udf11 New Moon":t<.22?"\ud83c\udf12 Waxing Crescent":t<.28?"\ud83c\udf13 First Quarter":t<.47?"\ud83c\udf14 Waxing Gibbous":t<.53?"\ud83c\udf15 Full Moon":t<.72?"\ud83c\udf16 Waning Gibbous":t<.78?"\ud83c\udf17 Last Quarter":"\ud83c\udf18 Waning Crescent"}).replace(/\/season\b/g,()=>{const e=n.getMonth()+1;return[12,1,2].includes(e)?"\u2600\ufe0f Summer":[3,4,5].includes(e)?"\ud83c\udf42 Autumn":[6,7,8].includes(e)?"\u2744\ufe0f Winter":"\ud83c\udf38 Spring"}).replace(/\/guid\b/g,()=>crypto.randomUUID()).replace(/\/uuid\b/g,()=>crypto.randomUUID()).replace(/\/random\((\d+),(\d+)\)/g,(e,t,n)=>{const o=Number(t),r=Number(n);return String(Math.floor(Math.random()*(r-o+1))+o)}).replace(/\/random\((\d+)\)/g,(e,t)=>String(Math.floor(Math.random()*Number(t))+1)).replace(/\/random\b/g,()=>String(Math.floor(100*Math.random())+1)).replace(/\/password\((\d+)\)/g,(e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",o=Number(t);return Array.from({length:o},()=>n[Math.floor(70*Math.random())]).join("")}).replace(/\/password\b/g,()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";return Array.from({length:12},()=>e[Math.floor(70*Math.random())]).join("")}).replace(/\/barcode\((.*?)\)/g,(e,t)=>`https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(t)}`).replace(/\/qrcode\((.*?)\)/g,(e,t)=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`).replace(/\/upper\((.*?)\)/g,(e,t)=>t.toUpperCase()).replace(/\/lower\((.*?)\)/g,(e,t)=>t.toLowerCase()).replace(/\/stars\((\d+)\)/g,(e,t)=>"\u2b50".repeat(Math.max(0,Math.min(Number(t),10)))).replace(/\/age\((.*?)\)/g,(e,t)=>{const o=new Date(t);let r=n.getFullYear()-o.getFullYear();const a=n.getMonth()-o.getMonth();return(a<0||0===a&&n.getDate()<o.getDate())&&r--,String(r)}).replace(/\/countdown\((.*?)\)/g,(e,t)=>{const o=new Date(t).getTime()-n.getTime();return String(Math.max(0,Math.ceil(o/864e5)))}).replace(/\/lorem\((\d+)\)/g,(e,t)=>{const n="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");return Array.from({length:Number(t)},(e,t)=>n[t%n.length]).join(" ")}).replace(/\/lorem\b/g,()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,(e,n)=>{try{const e=Function(...Object.keys(t),`return (${n})`);return String(e(...Object.values(t)))}catch{return"[Expression error]"}})}(e,{weather:H,temperature:K,city:I.city,country:I.country});o.useEffect(()=>{if(!p&&u){ie(te);const e=te+u;i(t,JSON.stringify({...U,text:e})),oe(e)}},[p,u,te,t,U,ie,i]);const ge=U.locked;return(0,l.jsx)(He,{selected:d,children:(0,l.jsxs)("div",{className:"ContentContainer",style:{backgroundColor:U.color||"#eee"},children:[(0,l.jsx)(z,{title:U.title,locked:U.locked,collapsed:U.collapsed,selected:d,onToggleSelection:()=>c(t),speaking:m,isFavorite:Z("favorite"),speak:()=>x(te),stopSpeaking:_,copyFormattedContent:async()=>{if(!T.current)return;const e=T.current.innerHTML,t=T.current.innerText;await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})})])},onToggleFavorite:()=>Q("favorite"),onToggleLock:()=>i(t,JSON.stringify({...U,locked:!U.locked})),onToggleCollapse:()=>i(t,JSON.stringify({...U,collapsed:!U.collapsed})),onTitleChange:e=>i(t,JSON.stringify({...U,title:pe(e)}))}),U.collapsed?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ne,{value:te,locked:U.locked,editing:y,textareaRef:D,markdownRef:T,setValue:oe,setEditing:v,processMarkdown:e=>$e(e,{temperature:K,weather:H,city:I.city,country:I.country},L),onExecuteExpression:e=>{ie(te);const n=((e,t,n)=>{const o=t.match(/^\$\{(\w+)\}=(.*)$/);if(!o)return e;const r=o[1];let a=o[2];const i=Se(e);a=je(a,ke({...n,...i})),a=a.replace(/\$\{([a-zA-Z_]\w*)\}/g,(e,t)=>{var n;return JSON.stringify(null!==(n=i[t])&&void 0!==n?n:"")});const s="${"+r+"}="+Function(`return (${a})`)(),d=new RegExp(`^\\$\\{${r}\\}\\s*=([^\\r\\n]*)`,"m");return d.test(e)?e.replace(d,s):e.trimEnd()+"\n"+s})(te,e,{temperature:K,weather:H,city:I.city,country:I.country});oe(n),i(t,JSON.stringify({...U,text:n}))},onSave:()=>((e,t)=>{const n=pe(t);i(e,JSON.stringify({...U,text:n})),oe(n)})(t,te),onMarkdownClick:e=>{ie(te);const t=W(e,te);B(t),v(!0)}}),(0,l.jsx)("footer",{className:"footer",children:(0,l.jsxs)("span",{className:"footbox",children:[(0,l.jsx)(ue,{date:n,tags:U.tags,availableTags:s,isLocked:ge,tagPickerRef:A,showTagPicker:J,creatingTag:G,newTagName:q,setShowTagPicker:Y,setCreatingTag:V,setNewTagName:X,hasTag:Z,toggleTag:Q,createTag:ee,formatTag:N,formatDate:b}),(0,l.jsx)(de,{isLocked:ge,listening:p,aiLoading:se,isArchived:Z("archive"),isTrash:Z("trash"),showColorPicker:k,showTemplatePicker:C,colorPickerRef:P,templatePickerRef:R,noteColors:M,templateOptions:w,startListening:()=>{U.locked||g()},stopListening:h,undoLastChange:()=>{const e=re[re.length-1];e&&(ae(e=>e.slice(0,-1)),oe(e),i(t,JSON.stringify({...U,text:e})))},handleAI:()=>{U.locked||le()},archiveNote:()=>{U.locked||(()=>{const e=(e=>e.includes("archive")?e.filter(e=>"archive"!==e):[...e.filter(e=>"trash"!==e),"archive"])(U.tags);i(t,JSON.stringify({...U,tags:e}))})()},trashNote:()=>{U.locked||ce()},setShowColorPicker:j,setShowTemplatePicker:S,onColorSelected:e=>{i(t,JSON.stringify({...U,color:e})),j(!1)},onTemplateSelected:e=>{ie(te);let n=e.text.replace(/\\\$\{/g,"${");if(n=pe(n),!U.locked){const o=Array.from(new Set([...U.tags||[],...e.tags||[]]));i(t,JSON.stringify({...U,collapsed:!1,color:e.color,text:n,title:pe(e.title),tags:o})),oe(n)}}})]})})]})]})},t)},He=r.Ay.div`
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

`,Ie=e=>{let{entries:t,pickerTags:n,cardRefs:o,onHoverCard:r,onDeleteEntry:a,onChangeEntry:i,selectedNoteIds:s,onToggleSelection:d}=e;return(0,l.jsx)(Be,{children:t.map((e,t)=>(0,l.jsx)("div",{ref:t=>{o.current[e.id]=t},onMouseEnter:()=>r(e.id),onMouseLeave:()=>r(null),children:(0,l.jsx)(Ke,{id:e.id,date:e.date,number:t+1,content:e.content,onDeleteCard:a,onChangeContent:i,tags:n,selected:s.includes(e.id),onToggleSelection:d})},e.id))})},Be=r.Ay.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`,We=e=>{try{return JSON.parse(e).color||"#cccccc"}catch{return"#cccccc"}},Ue=e=>{let{entries:t,hoveredCardId:n,cardHeights:o,totalHeight:r,onScrollToCard:i}=e;return(0,l.jsx)(Je,{children:t.map(e=>(0,l.jsxs)(Ge,{$selected:n===e.id,style:{backgroundColor:We(e.content),height:`${Math.max((o[e.id]||40)/Math.max(r,1)*100,24)}px`},children:[(0,l.jsx)(a.K,{title:"Go to note top",onClick:()=>i(e.id,"top"),children:(0,l.jsx)(d.wAb,{})}),(0,l.jsx)(a.K,{title:"Go to note bottom",onClick:()=>i(e.id,"bottom"),children:(0,l.jsx)(d.fK4,{})})]},e.id))})},Je=r.Ay.div`
  padding-top: 20px;
  width: 60px;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;
  background: #d0d0d0;
`,Ge=r.Ay.div`
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
`,qe=e=>{let{uid:t,text:n,noteTitles:r,notesCount:i}=e;const[s,c]=o.useState(""),[p,u]=o.useState(""),[g,h]=o.useState([]),[x,m]=o.useState(!1),f=async()=>{const e=s.trim();if(!e||x)return;if(!t)return void h(e=>[...e,{id:v()(),role:"assistant",content:"You must be logged in to use Mavis."}]);const o=r.length>0?`Notes:\n${r.map(e=>`\u2022 ${e}`).join("\n")}\n\n`:"",a={id:v()(),role:"user",content:`${o}${e}`};h(e=>[...e,a]),c(""),m(!0);try{const o=await ze(t,p,e,n),r={id:v()(),role:"assistant",content:o||"No response was returned."};h(e=>[...e,r])}catch(i){console.error("Mavis error:",i);const e=i instanceof Error?i.message:"An unexpected error occurred.",t={id:v()(),role:"assistant",content:e};h(e=>[...e,t])}finally{m(!1)}};return(0,l.jsxs)(Xe,{children:[(0,l.jsxs)(Ze,{children:[g.map(e=>(0,l.jsx)(Qe,{role:e.role,children:e.content},e.id)),x&&(0,l.jsx)(Qe,{role:"assistant",children:"Thinking..."})]}),(0,l.jsxs)(et,{children:[(0,l.jsxs)(tt,{children:[(0,l.jsxs)(Ye,{children:["Selected Notes: ",i]}),(0,l.jsx)(nt,{value:s,placeholder:"Ask Mavis...",disabled:x,onChange:e=>c(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),f())}})]}),(0,l.jsxs)(Ve,{children:[(0,l.jsx)(a.K,{onClick:()=>{f()},disabled:x||!s.trim(),children:(0,l.jsx)(d.kGk,{})}),(0,l.jsx)(a.K,{onClick:()=>{(async()=>{s.trim()&&await navigator.clipboard.writeText(s)})()},disabled:!s.trim(),children:(0,l.jsx)(d.nxz,{})}),(0,l.jsx)(a.K,{onClick:()=>{c("")},disabled:!s.trim(),children:(0,l.jsx)(d.IXo,{})})]})]})]})},Ye=r.Ay.div`
  font-size: 12px;
  color: #555;
  margin-bottom: 4px;
`,Ve=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
`,Xe=r.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Ze=r.Ay.div`
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
`,Qe=r.Ay.div`
  max-width: 90%;
  padding: 10px 14px;
  border-radius: 12px;

  white-space: pre-wrap;
  word-break: break-word;

  align-self: ${e=>{let{role:t}=e;return"user"===t?"flex-end":"flex-start"}};

  background: ${e=>{let{role:t}=e;return"user"===t?"#2563eb":"#f5f5f5"}};

  color: ${e=>{let{role:t}=e;return"user"===t?"#fff":"#222"}};
`,et=r.Ay.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;

  display: flex;
  flex-direction: row;
  gap: 10px;

  background: #e0e0e5;
`,tt=r.Ay.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: #e0e0e5;
`,nt=r.Ay.textarea`
  resize: none;
  min-height: 80px;
  max-height: 200px;
  width: 100%;

  border: 1px solid #ccc;
  border-radius: 8px;

  padding: 10px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`,ot=e=>{let{onClearAll:t,expanded:n,barWidth:o}=e;const r=n?188:52;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(rt,{explorerWidth:r,barWidth:o,children:[(0,l.jsxs)(at,{children:[(0,l.jsx)(d.Ojn,{}),"Chat"]}),(0,l.jsx)(it,{})]})})},rt=r.Ay.div`
  display: flex;
  width: ${e=>{let{barWidth:t}=e;return`${t}px`}};
  flex-direction: row;
  align-items: center;
  min-height: 40px;
  padding: 0;
  margin-left: 10px;
  margin-top: 16px;
  border-bottom: 1px solid #d0d0d0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;
  position: relative;
`,at=r.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`,it=r.Ay.div`
  display: flex;
  align-items: center;
  height: 35px;
`,st=()=>{const[e,t]=o.useState(!1),n=e;return(0,l.jsx)(dt,{expanded:n,children:(0,l.jsxs)(a.K,{expanded:n,title:"Menu",onClick:()=>t(!e),children:[(0,l.jsx)(d.ND1,{}),n&&(0,l.jsx)("span",{children:"Mavis Settings"})]})})},dt=r.Ay.div`
  width: ${e=>e.expanded?"180px":"40px"};
  position: static;
  right: 0;
  top: 40px;
  height: 100%;
  border-left: 1px solid #d0d0d0;
  padding: 4px;
  overflow-y: hidden;
  overflow-x: hidden;
  background: #f8f8f8;
  margin-left: 6px;
`,lt=e=>{let{explorerExpanded:t,setExplorerExpanded:n}=e;const{selectedDate:r,setSelectedDate:a}=(0,P.M)(),{user:i}=(0,$.o)(),{entries:s,fetchEntries:p,addEntry:u,updateEntry:g,deleteEntry:h}=function(e){const[t,n]=o.useState([]),r=o.useCallback(async()=>{if(!e)return;const t=S(e),o=(await(0,k.GG)(t)).docs.map(e=>{const t=e.data();return{...t,createdAt:t.createdAt||t.date}});n(C(o))},[e]),a=o.useCallback(async t=>{let{content:o,date:r}=t;if(!e)return null;const a={uid:e,id:v()(),content:o,date:r,createdAt:(new Date).toISOString()};return n(e=>C([...e,a])),await(0,k.gS)(S(e),a),a},[e]),i=o.useCallback(async(o,r)=>{if(!e)return;const a=t.find(e=>e.id===o);if(!a)return;const i={...a,content:r};n(e=>e.map(e=>e.id===o?i:e));const s=await D(e,o);await Promise.all(s.map(t=>(0,k.BN)((0,k.H9)(j.OO,`users/${e}/entries/${t.id}`),i)))},[t,e]),s=o.useCallback(async t=>{if(!e)return;n(e=>e.map(e=>e.id===t.id?t:e));const o=await D(e,t.id);await Promise.all(o.map(n=>(0,k.BN)((0,k.H9)(j.OO,`users/${e}/entries/${n.id}`),t)))},[e]),d=o.useCallback(async t=>{if(!e)return;n(e=>e.filter(e=>e.id!==t));const o=await D(e,t);await Promise.all(o.map(t=>(0,k.kd)((0,k.H9)(j.OO,`users/${e}/entries/${t.id}`))))},[e]);return{entries:t,setEntries:n,fetchEntries:r,addEntry:a,updateEntry:i,replaceEntry:s,deleteEntry:d}}((null===i||void 0===i?void 0:i.uid)||""),{searchContent:x,setSearchContent:f,selectedTag:b,setSelectedTag:w,systemTags:y,availableTags:T,pickerTags:M,visibleEntries:N}=function(e){const[t,n]=o.useState(""),[r,a]=o.useState("favorite"),i=o.useMemo(()=>[{name:"all",icon:d.Vap,system:!0},{name:"favorite",icon:d.usP,system:!0},{name:"journal",icon:m.Fsq,system:!0},{name:"templates",icon:d.MRc,system:!0},{name:"archive",icon:d.OZ2,system:!0},{name:"trash",icon:d.IXo,system:!0}],[]),s=o.useMemo(()=>i.map(e=>e.name),[i]),l=o.useMemo(()=>Array.from(new Set(e.flatMap(e=>_(e.content)))).filter(e=>!s.includes(e)).sort(),[e,s]),c=o.useMemo(()=>Array.from(new Set(["journal","templates",...l])).sort(),[l]),p=o.useCallback(e=>{const n=_(e.content);return""!==t.trim()?e.content.toLowerCase().includes(t.toLowerCase()):"all"===r?!n.includes("archive")&&!n.includes("trash"):"archive"===r?n.includes("archive"):"trash"===r?n.includes("trash"):n.includes(r)&&!n.includes("archive")&&!n.includes("trash")},[t,r]),u=o.useMemo(()=>e.filter(p),[e,p]);return{searchContent:t,setSearchContent:n,selectedTag:r,setSelectedTag:a,systemTags:i,availableTags:l,pickerTags:c,visibleEntries:u,isEntryVisible:p}}(s),{cardRefs:L,cardHeights:O,totalHeight:z}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=o.useRef({}),[n,r]=o.useState({}),a=o.useCallback(()=>{const e={};Object.entries(t.current).forEach(t=>{let[n,o]=t;o&&(e[n]=o.offsetHeight)}),r(e)},[]);o.useEffect(()=>{const e=new ResizeObserver(()=>{a()});return Object.values(t.current).forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[a]),o.useEffect(()=>{a()},[...e,a]);const i=o.useMemo(()=>Object.values(n).reduce((e,t)=>e+t,0),[n]);return{cardRefs:t,cardHeights:n,totalHeight:i,refreshCardHeights:a}}([s]),[F,K]=o.useState(null),H=o.useRef(null),[I,B]=o.useState([]),W=o.useRef(null),[U,J]=o.useState(0),G=o.useRef(null),[q,Y]=o.useState(0);o.useLayoutEffect(()=>{const e=()=>{var e,t;Y(null!==(e=null===(t=G.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return G.current&&t.observe(G.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]),o.useLayoutEffect(()=>{const e=()=>{var e,t;J(null!==(e=null===(t=W.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==e?e:0)};e();const t=new ResizeObserver(e);return W.current&&t.observe(W.current),window.addEventListener("resize",e),()=>{t.disconnect(),window.removeEventListener("resize",e)}},[]);const V=o.useCallback(e=>{B(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),X=o.useCallback(()=>{B(N.map(e=>e.id))},[N]),Z=o.useCallback(()=>{B([])},[]);o.useEffect(()=>{B(e=>e.filter(e=>s.some(t=>t.id===e)))},[s]);const Q=o.useMemo(()=>N.filter(e=>I.includes(e.id)).map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n"),[N,I]),ee=o.useMemo(()=>N.filter(e=>I.includes(e.id)).map(e=>{try{return JSON.parse(e.content).title||"Untitled"}catch{return"Untitled"}}),[N,I]);o.useEffect(()=>{p()},[p]);const te=()=>{window.scrollTo({top:0,behavior:"smooth"})},ne=g;return(0,l.jsxs)(ct,{children:[(0,l.jsxs)(A,{children:[(0,l.jsx)(c,{selectedTag:b,selectedDate:r,searchContent:x,onSearchChange:f,onDateChange:e=>{a(e.target.value)},onAddNote:async function(){const e="all"!==b?[b]:[];await u({date:r,content:JSON.stringify({...E,tags:e})}),te()},onCopyAllNotes:async()=>{const e=Q.length>0?Q:N.map(e=>{try{const t=JSON.parse(e.content);return[`# ${t.title||"Untitled"}`,`Date: ${e.date}`,`Tags: ${(t.tags||[]).join(", ")}`,"",t.text||""].join("\n")}catch{return e.content}}).join("\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n");await navigator.clipboard.writeText(e)},onSelectAll:X,onClearAll:Z,expanded:t,barWidth:U}),(0,l.jsx)(ot,{onClearAll:Z,expanded:t,barWidth:q})]}),(0,l.jsx)(R,{systemTags:y,customTags:T,selectedTag:b,setSelectedTag:w,explorerExpanded:t,setExplorerExpanded:n}),(0,l.jsx)(Ue,{entries:N,hoveredCardId:F,cardHeights:O,totalHeight:z,onScrollToCard:(e,t)=>{const n=L.current[e],o=H.current;if(!n||!o)return;const r=n.offsetTop-10,a=n.offsetTop+n.offsetHeight-o.clientHeight+20;o.scrollTo({top:"top"===t?r:a,behavior:"smooth"})}}),(0,l.jsx)(ut,{ref:W,children:(0,l.jsx)(Ie,{entries:N,pickerTags:M,cardRefs:L,onHoverCard:K,onDeleteEntry:async function(e){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])){const t=s.find(t=>t.id===e);if(!t)return;const n=JSON.parse(t.content),o=Array.from(new Set([...(n.tags||[]).filter(e=>"archive"!==e),"trash"]));return void await g(e,JSON.stringify({...n,tags:o}))}await h(e)},onChangeEntry:ne,selectedNoteIds:I,onToggleSelection:V})}),(0,l.jsx)(pt,{ref:G,children:(0,l.jsx)(qe,{uid:(null===i||void 0===i?void 0:i.uid)||"",text:Q,noteTitles:ee,notesCount:I.length})}),(0,l.jsx)(st,{})]})},ct=r.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,pt=r.Ay.div`
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
  border-right: 1px solid #d0d0d0;
`,ut=r.Ay.div`
  flex: 1.5;
  min-width: 280px;
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
  border-right: 1px solid #d0d0d0;
  margin-right: 10px;

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
//# sourceMappingURL=dashboard.7732bcb0.chunk.js.map