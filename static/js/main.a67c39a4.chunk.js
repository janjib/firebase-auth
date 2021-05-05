(this["webpackJsonpauth-tutorial"]=this["webpackJsonpauth-tutorial"]||[]).push([[0],{53:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(18),s=c.n(n),i=(c(43),c(56)),j=c(8),o=c(32),l=(c(44),o.a.initializeApp({apiKey:"AIzaSyCzMo5ZKyDoqQv34N3L0cdHbSzbK5QHqJA",authDomain:"auth-development-5eedc.firebaseapp.com",projectId:"auth-development-5eedc",storageBucket:"auth-development-5eedc.appspot.com",messagingSenderId:"1081288713690",appId:"1:1081288713690:web:942c67bcb1be93e0534ce3"})),u=l.auth(),d=c(1),b=a.a.createContext(),O=function(){return Object(r.useContext)(b)},h=function(e){var t=e.children,c=Object(r.useState)(),a=Object(j.a)(c,2),n=a[0],s=a[1],i=Object(r.useState)(!0),o=Object(j.a)(i,2),l=o[0],O=o[1];Object(r.useEffect)((function(){return u.onAuthStateChanged((function(e){s(e),O(!1)}))}),[]);var h={currentUser:n,login:function(e,t){return u.signInWithEmailAndPassword(e,t)},signup:function(e,t){return u.createUserWithEmailAndPassword(e,t)},logout:function(){return u.signOut()},resetPassword:function(e){return u.sendPasswordResetEmail(e)},updateEmail:function(e){return n.updateEmail(e)},updatePassword:function(e){return n.updatePassword(e)}};return Object(d.jsx)(b.Provider,{value:h,children:!l&&t})},p=c(59),x=c(57),m=c(58),f=c(55),v=c(7),w=c(10),g=function(){var e=Object(v.g)(),t=Object(r.useRef)(),c=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useState)(""),s=Object(j.a)(n,2),i=s[0],o=s[1],l=Object(r.useState)(!1),u=Object(j.a)(l,2),b=u[0],h=u[1],g=O().signup;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.a,{children:Object(d.jsxs)(p.a.Body,{children:[Object(d.jsx)("h2",{className:"mb-4 text-center",children:"Sign Up"}),i&&Object(d.jsx)(x.a,{variant:"danger",children:i}),Object(d.jsxs)(m.a,{onSubmit:function(r){if(r.preventDefault(),c.current.value!==a.current.value)return o("Password does not match");try{o(""),h(!0),g(t.current.value,c.current.value),e.push("/")}catch(n){o("Failed to create an account")}h(!1)},children:[Object(d.jsxs)(m.a.Group,{id:"email",children:[Object(d.jsx)(m.a.Label,{children:"Email"}),Object(d.jsx)(m.a.Control,{type:"email",ref:t,required:!0})]}),Object(d.jsxs)(m.a.Group,{id:"password",children:[Object(d.jsx)(m.a.Label,{children:"Password"}),Object(d.jsx)(m.a.Control,{type:"password",ref:c,required:!0})]}),Object(d.jsxs)(m.a.Group,{id:"password-confirm",children:[Object(d.jsx)(m.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(m.a.Control,{type:"password",ref:a,required:!0})]}),Object(d.jsx)(f.a,{className:"w-100",type:"submit",disabled:b,children:"Sign Up"})]})]})}),Object(d.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account ? ",Object(d.jsx)(w.b,{to:"/Login",children:"Log In"})]})]})},y=c(16),S=c.n(y),N=c(17),P=function(){var e=Object(v.g)(),t=Object(r.useState)(""),c=Object(j.a)(t,2),a=c[0],n=c[1],s=O(),i=s.currentUser,o=s.logout,l=function(){var t=Object(N.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(""),t.prev=1,t.next=4,o();case 4:e.push("login"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n("Failed to logout");case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.a,{children:Object(d.jsxs)(p.a.Body,{children:[Object(d.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),a&&Object(d.jsx)(x.a,{variant:"danger",children:a}),Object(d.jsx)("strong",{children:"Email : "}),i.email,Object(d.jsx)(w.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:Object(d.jsx)(f.a,{variant:"link",onClick:l,children:"Log Out"})})]})},L=function(){var e=Object(v.g)(),t=Object(r.useRef)(),c=Object(r.useRef)(),a=Object(r.useState)(""),n=Object(j.a)(a,2),s=n[0],i=n[1],o=Object(r.useState)(!1),l=Object(j.a)(o,2),u=l[0],b=l[1],h=O().login,g=function(){var r=Object(N.a)(S.a.mark((function r(a){return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.prev=1,i(""),b(!0),r.next=6,h(t.current.value,c.current.value);case 6:e.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),i("Failed to login");case 12:b(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.a,{children:Object(d.jsxs)(p.a.Body,{children:[Object(d.jsx)("h2",{className:"mb-4 text-center",children:"Log In"}),s&&Object(d.jsx)(x.a,{variant:"danger",children:s}),Object(d.jsxs)(m.a,{onSubmit:g,children:[Object(d.jsxs)(m.a.Group,{id:"email",children:[Object(d.jsx)(m.a.Label,{children:"Email"}),Object(d.jsx)(m.a.Control,{type:"email",ref:t,required:!0})]}),Object(d.jsxs)(m.a.Group,{id:"password",children:[Object(d.jsx)(m.a.Label,{children:"Password"}),Object(d.jsx)(m.a.Control,{type:"password",ref:c,required:!0})]}),Object(d.jsx)(f.a,{className:"w-100",type:"submit",disabled:u,children:"Log In"})]}),Object(d.jsx)("div",{className:"w-100 text-center mt-3",children:Object(d.jsx)(w.b,{to:"/forgot-password",children:"Forgot password?"})})]})}),Object(d.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account ? ",Object(d.jsx)(w.b,{to:"/signup",children:"Sign Up"})]})]})},C=c(22),k=c(37),E=function(e){var t=e.component,c=Object(k.a)(e,["component"]),r=O().currentUser;return Object(d.jsx)(v.b,Object(C.a)(Object(C.a)({},c),{},{render:function(e){return r?Object(d.jsx)(t,Object(C.a)({},e)):Object(d.jsx)(v.a,{to:"/login"})}}))},R=function(){var e=Object(r.useRef)(),t=Object(r.useState)(""),c=Object(j.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)(""),b=Object(j.a)(u,2),h=b[0],v=b[1],g=O().resetPassword,y=function(){var t=Object(N.a)(S.a.mark((function t(c){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,v(""),n(""),l(!0),t.next=7,g(e.current.value);case 7:v("Check your inbox for further instruction"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n("Failed to reset password");case 13:l(!1);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.a,{children:Object(d.jsxs)(p.a.Body,{children:[Object(d.jsx)("h2",{className:"mb-4 text-center",children:"Password Reset"}),a&&Object(d.jsx)(x.a,{variant:"danger",children:a}),h&&Object(d.jsx)(x.a,{variant:"success",children:h}),Object(d.jsxs)(m.a,{onSubmit:y,children:[Object(d.jsxs)(m.a.Group,{id:"email",children:[Object(d.jsx)(m.a.Label,{children:"Email"}),Object(d.jsx)(m.a.Control,{type:"email",ref:e,required:!0})]}),Object(d.jsx)(f.a,{className:"w-100",type:"submit",disabled:o,children:"Reset Password"})]}),Object(d.jsx)("div",{className:"w-100 text-center mt-3",children:Object(d.jsx)(w.b,{to:"/Login",children:"Login"})})]})}),Object(d.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account ? ",Object(d.jsx)(w.b,{to:"/signup",children:"Sign Up"})]})]})},U=function(){var e=Object(v.g)(),t=Object(r.useRef)(),c=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useState)(""),s=Object(j.a)(n,2),i=s[0],o=s[1],l=Object(r.useState)(!1),u=Object(j.a)(l,2),b=u[0],h=u[1],g=O(),y=g.currentUser,S=g.updateEmail,N=g.updatePassword;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.a,{children:Object(d.jsxs)(p.a.Body,{children:[Object(d.jsx)("h2",{className:"mb-4 text-center",children:"Update Profile"}),i&&Object(d.jsx)(x.a,{variant:"danger",children:i}),Object(d.jsxs)(m.a,{onSubmit:function(r){if(r.preventDefault(),h(!0),o(""),c.current.value!==a.current.value)return o("Password does not match");var n=[];t.current.value!==y.email&&n.push(S(t.current.value)),c.current.value&&n.push(N(c.current.value)),Promise.all(n).then((function(){e.push("/")})).catch((function(){return o("Failed to update account")})).finally((function(){return h(!1)}))},children:[Object(d.jsxs)(m.a.Group,{id:"email",children:[Object(d.jsx)(m.a.Label,{children:"Email"}),Object(d.jsx)(m.a.Control,{type:"email",ref:t,defaultValue:y.email})]}),Object(d.jsxs)(m.a.Group,{id:"password",children:[Object(d.jsx)(m.a.Label,{children:"Password"}),Object(d.jsx)(m.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(d.jsxs)(m.a.Group,{id:"password-confirm",children:[Object(d.jsx)(m.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(m.a.Control,{type:"password",ref:a,required:!0,placeholder:"Leave blank to keep the same"})]}),Object(d.jsx)(f.a,{className:"w-100",type:"submit",disabled:b,children:"Update"})]})]})}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:Object(d.jsx)(w.b,{to:"/",children:"Cancel"})})]})};var F=function(){return Object(d.jsx)(i.a,{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"},children:Object(d.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(d.jsx)(w.a,{children:Object(d.jsx)(h,{children:Object(d.jsxs)(v.d,{children:[Object(d.jsx)(E,{exact:!0,path:"/",component:P}),Object(d.jsx)(E,{exact:!0,path:"/update-profile",component:U}),Object(d.jsx)(v.b,{path:"/signup",component:g}),Object(d.jsx)(v.b,{path:"/login",component:L}),Object(d.jsx)(v.b,{path:"/forgot-password",component:R})]})})})})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.a67c39a4.chunk.js.map