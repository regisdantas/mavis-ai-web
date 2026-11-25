"use strict";(Array.isArray(globalThis.webpackChunkmavis_ai_web)?globalThis.webpackChunkmavis_ai_web:globalThis.webpackChunkmavis_ai_web=[]).push([[966],{9841(o,r,i){i.r(r),i.d(r,{CustomButton:()=>g,default:()=>b});var e=i(5043);var t=i(2127),a=i(7149),n=i(3216),s=i(6625),l=i(2816),c=i(5059),d=i(579);const b=()=>{const{user:o,signInWithGoogle:r,signInWithFacebook:i}=(0,s.o)(),[l,c]=(b=null,e.useState(b));var b;const u=(0,n.Zp)();return(0,e.useEffect)(()=>{null!==o&&void 0!==o.displayName&&u("/dashboard")},[o]),(0,d.jsx)(p,{children:(0,d.jsxs)(h,{children:[(0,d.jsxs)("form",{action:"submit",children:[(0,d.jsx)("input",{type:"text",placeholder:"Email"}),(0,d.jsx)("input",{type:"password",placeholder:"Password"}),(0,d.jsxs)(g,{color:"#04d361",children:[(0,d.jsx)(a.mm2,{})," Sign in with Email"]})]}),(0,d.jsxs)(g,{color:"#DB4437",onClick:async()=>{try{await r()}catch(o){console.log(o),c({type:"error",fields:"email",message:o instanceof Error?o.message:"Unknown error"})}},children:[(0,d.jsx)(t.t8w,{size:20})," Sign in using Google Account"]}),(0,d.jsxs)(g,{color:"#3b5998",onClick:async()=>{try{await i()}catch(o){console.log(o),c({type:"error",fields:"email",message:o instanceof Error?o.message:"Unknown error"})}},children:[(0,d.jsx)(t.MkP,{size:20})," Sign in using Facebook Account"]})]})})},p=l.Ay.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;

  @media (max-width: 1260px) {
    padding-top: 40px;
    padding-bottom: 10px;
  }
`,h=l.Ay.div`
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

  input,
  button {
    margin-left: auto;
    margin-right: auto;

    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    height: 50px;
    svg {
      font-size: 24px;
      margin-right: 7px;
    }
  }
  button {
    background: #323232;
    justify-content: center;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${(0,c.Qw)(.2,"#323232")};
    }

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
//# sourceMappingURL=login.9188df34.chunk.js.map