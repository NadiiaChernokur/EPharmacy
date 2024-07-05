import{s as i,u as y,d as R,b as S,j as e,e as q,l as z}from"./index-48bbd110.js";import{F as u,a as F,E as L,c as w,b as o,Q as E,d as p,B as x}from"./ReactToastify-03ad727c.js";const A=i.div`
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 54px;
  padding: 199px 0;
  box-sizing: border-box;
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    padding: 64px 0px;
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 335px;
    padding: 81px 0;
  }
`,P=i.div`
  width: 540px;
  position: relative;
  font-weight: 600;
  font-size: 40px;
  line-height: 154%;
  color: #1d1e21;
  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 121%;
    width: 100%;
  }
`,T=i.img`
  position: absolute;
  top: -109px;
  right: 9px;
  @media screen and (max-width: 767px) {
    width: 95px;
    height: 93px;
    top: -25px;
    right: -19px;
  }
`,k=i.span`
  color: #59b17a;
`,D=i(u)`
  width: 574px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  flex-direction: column;
  gap: 62px;
  @media screen and (max-width: 767px) {
    width: 335px;
    align-items: center;
  }
`,Z=i(u)`
  width: 323px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  flex-direction: column;
  gap: 62px;
  @media screen and (max-width: 767px) {
    bottom: -122px;
    align-items: center;
  }
`,N=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`,$=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,t=i(F)`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  width: 280px;
  height: 44px;
  background: #fff;
  padding: 0 18px;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`,h=i.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  align-items: center;
  gap: 14px;
`,m=i.button`
  border-radius: 60px;
  border: none;
  width: 280px;
  height: 44px;
  background: #59b17a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`,g=i.span`
  color: #59b17a;
  text-decoration: underline;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,n=i(L)`
  color: red;
`,I=i.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  bottom: 0;
  right: 0;
  @media screen and (max-width: 767px) {
    bottom: -122px;
  }
`,B="/assets/white round pill-232bb2d4.png",C="/assets/elements-08c9af28.png",V=w({name:o().min(2,"The Name must contain at least 2 characters").required("Name is required"),email:o().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required("Email is required"),phone:o().required("Phone number is required").matches(/^[+]?[0-9]{10,15}$/,"The phone number must consist of numbers only").min(10,"The phone number must contain at least 10 digits"),password:o().required("Password is required").min(6,"The password must contain at least 6 characters")}),_=w({email:o().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required("Email is required"),password:o().required("Password is required").min(6,"The password must contain at least 6 characters")}),O=()=>{const c=y(),l=R(),d=S(),b=async s=>{var r;const a=await c(q(s));((r=a.error)==null?void 0:r.message)==="Rejected"?x(a.payload.message):d("/login")},f=async s=>{var r;const a=await c(z(s));((r=a.error)==null?void 0:r.message)==="Rejected"?x(a.payload.message):(localStorage.setItem("e-pharmacy",JSON.stringify(a.payload)),d("/medicine"))},j=()=>{d("/login")},v=()=>{d("/register")};return e.jsxs(A,{children:[e.jsx(E,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsxs(P,{children:[e.jsxs("h3",{children:["Your medication, delivered Say goodbye to all",e.jsx(k,{children:" your healthcare"})," worries with us"]}),e.jsx(T,{src:B,alt:"Pills"})]}),l.pathname==="/register"&&e.jsx(p,{initialValues:{name:"",email:"",phone:"",password:""},validationSchema:V,onSubmit:(s,{setSubmitting:a})=>{b(s),a(!1)},children:({isSubmitting:s})=>e.jsxs(D,{children:[e.jsxs(N,{children:[e.jsxs("div",{children:[e.jsx(t,{type:"text",name:"name",placeholder:"User Name"}),e.jsx(n,{name:"name",component:"div"})]}),e.jsxs("div",{children:[e.jsx(t,{type:"text",name:"email",placeholder:"Email address"}),e.jsx(n,{name:"email",component:"div"})]}),e.jsxs("div",{children:[e.jsx(t,{type:"text",name:"phone",placeholder:"Phone number"}),e.jsx(n,{name:"phone",component:"div"})]}),e.jsxs("div",{children:[e.jsx(t,{type:"password",name:"password",placeholder:"Password"}),e.jsx(n,{name:"password",component:"div"})]})]}),e.jsxs(h,{children:[e.jsx(m,{type:"submit",disabled:s,children:"Register"}),e.jsxs("p",{children:["Already have an account?"," ",e.jsx(g,{onClick:j,children:"Login"})]})]})]})}),l.pathname==="/login"&&e.jsx(p,{initialValues:{email:"",password:""},validationSchema:_,onSubmit:(s,{setSubmitting:a})=>{f(s),a(!1)},children:({isSubmitting:s})=>e.jsxs(Z,{children:[e.jsxs($,{children:[e.jsxs("div",{children:[e.jsx(t,{type:"text",name:"email",placeholder:"Email address"}),e.jsx(n,{name:"email",component:"div"})]}),e.jsxs("div",{children:[e.jsx(t,{type:"password",name:"password",placeholder:"Password"}),e.jsx(n,{name:"password",component:"div"})]})]}),e.jsxs(h,{children:[e.jsx(m,{type:"submit",disabled:s,children:"Login"}),e.jsxs("p",{children:["Don't have an account yet?",e.jsx(g,{onClick:v,children:"Registration"})]})]})]})}),e.jsx(I,{children:e.jsx("img",{src:C,alt:"",width:"196px"})})]})};export{O as default};
