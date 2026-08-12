"use strict";(globalThis.webpackChunkmavis_ai||=[]).push([[966],{9841(o,e,r){r.r(e),r.d(e,{CustomButton:()=>g,default:()=>h});var i=r(5043);var t=r(2127),a=r(7149),s=r(3216),n=r(6625),l=r(4138),c=r(5059),d=r(579);const h=()=>{const{user:o,signInWithGoogle:e,signInWithFacebook:r}=(0,n.o)(),[l,c]=(h=null,i.useState(h));var h;const u=(0,s.Zp)();return(0,i.useEffect)(()=>{null!==o&&void 0!==o.displayName&&u("/dashboard")},[o]),(0,d.jsx)(p,{children:(0,d.jsxs)(b,{children:[(0,d.jsxs)("form",{action:"submit",children:[(0,d.jsx)("input",{type:"text",placeholder:"Email"}),(0,d.jsx)("input",{type:"password",placeholder:"Password"}),(0,d.jsxs)(g,{color:"#04d361",children:[(0,d.jsx)(a.mm2,{})," Sign in with Email"]})]}),(0,d.jsxs)(g,{color:"#DB4437",onClick:async()=>{try{await e()}catch(o){console.log(o),c({type:"error",fields:"email",message:o instanceof Error?o.message:"Unknown error"})}},children:[(0,d.jsx)(t.t8w,{size:20})," Sign in using Google Account"]}),(0,d.jsxs)(g,{color:"#3b5998",onClick:async()=>{try{await r()}catch(o){console.log(o),c({type:"error",fields:"email",message:o instanceof Error?o.message:"Unknown error"})}},children:[(0,d.jsx)(t.MkP,{size:20})," Sign in using Facebook Account"]})]})})},p=l.Ay.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;

  @media (max-width: 1260px) {
    padding-top: 40px;
    padding-bottom: 10px;
  }
`,b=l.Ay.div`
  position: absolute;
  margin-top: 25px;

  width: 100%;
  max-width: 990px;

  height: calc(100vh - 40px);

  overflow-x: hidden;

  padding: 10px;
  background: #e0e0e5;

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

  @media (max-width: 1260px) {
    max-width: 100%;
    padding: 5px;
  }
`,g=l.Ay.button`
  display: block !important;
  svg {
    float: left;
    margin-left: 10px;
  }

  ${o=>o.color&&l.AH`
      background-color: ${o.color} !important;
      &:hover {
        background-color: ${(0,c.Qw)(.2,o.color)} !important;
      }
    `}
`}}]);
//# sourceMappingURL=login.9ad8538d.chunk.js.map