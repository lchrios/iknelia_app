(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[23],{1519:function(e,t,c){"use strict";var s=c(14),a=c(11),i=c(0),n=c(29),l=c(1378),r=c(591),j=c(1341),d=c(1310),o=c(1357),b=c(1301),m=c(442),O=c(5),x=c(52),h=(c(90),c(352)),u=c(1);const p=Object(m.a)((e=>{e.palette;let t=Object(a.a)(e,["palette"]);return{close:{padding:t.spacing(.5)},sidenav:{marginTop:-345,paddingTop:74,paddingBottom:600,[t.breakpoints.down("sm")]:{marginTop:-410}}}})),v=[{title:"sesiones",icon:"date_range",route:"sessions"},{title:"Buscar",icon:"search",route:"browse"}];t.a=({therapist:e,loading:t,url:c})=>{const a=Object(x.a)().user,m=p(),N=Object(i.useState)(!1),f=Object(s.a)(N,2);f[0],f[1];const g=Object(i.useState)(!1),y=Object(s.a)(g,2);y[0],y[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:Object(O.default)("flex-column text-white items-center overflow-hidden",m.sidenav),children:[t?Object(u.jsx)(h.a,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{className:"h-84 w-84",src:c}),Object(u.jsx)("p",{className:"",children:a.displayName||a.email}),Object(u.jsxs)("div",{className:"flex flex-wrap w-full px-12 mb-6",children:[Object(u.jsxs)("div",{className:"flex-grow",children:[Object(u.jsx)("p",{className:"uppercase mb-1",children:"Edad"}),Object(u.jsx)("h4",{className:"font-medium",children:a.age})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"uppercase mb-1",children:"Telefono"}),Object(u.jsx)("a",{className:"font-medium h5",children:a.phone})]}),Object(u.jsx)("div",{})]})]}),Object(u.jsxs)("div",{className:"px-8 pt-2 bg-default",children:[Object(u.jsxs)(r.a,{container:!0,spacing:3,children:[Object(u.jsx)(j.a,{onClick:()=>n.a.push("/"+a.uid+"/home"),children:Object(u.jsx)(r.a,{item:!0,children:Object(u.jsx)(d.a,{className:"bg-secondary w-104 h-104 flex justify-center items-center",children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)(o.a,{children:"home"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"pt-4",children:"Home"})]})})})}),v.map(((e,t)=>Object(u.jsx)("div",{children:Object(u.jsx)(j.a,{onClick:()=>{n.a.push("/".concat(a.uid,"/").concat(e.route))},children:Object(u.jsx)(r.a,{item:!0,children:Object(u.jsx)(d.a,{className:"w-104 h-104 flex items-center justify-center",children:Object(u.jsxs)("div",{className:"text-muted text-center",children:[Object(u.jsx)(o.a,{children:e.icon}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"pt-4",children:e.title})]})})})})},t)))]}),Object(u.jsx)("div",{className:"py-4"}),t?Object(u.jsx)(r.a,{container:!0,direction:"column",alignItems:"center",children:Object(u.jsx)(r.a,{item:!0,children:Object(u.jsx)(b.a,{})})}):Object(u.jsx)("div",{className:"flex items-center justify-center text-primary",style:{display:void 0!==e?"block":"none"},children:Object(u.jsxs)(j.a,{onClick:()=>{},children:[Object(u.jsx)(o.a,{children:"sentiment_very_satisfied"}),Object(u.jsx)("h5",{className:"ml-8 text-primary font-medium mb-0",children:"Iniciar terapia"})]})}),Object(u.jsx)("div",{className:"py-2"})]})]})})}},2190:function(e,t,c){"use strict";c.r(t);var s=c(14),a=c(11),i=c(0),n=c(1296),l=c(1376),r=c(608),j=c(1357),d=c(1341),o=c(254),b=c(1297),m=c(5),O=c(442),x=c(112),h=c(1680),u=c.n(h),p=c(1378),v=c(443),N=c(444),f=c(52),g=c(90),y=c(352),w=c(1);var k=({toggleSidenav:e})=>{const t=Object(i.useState)([]),c=Object(s.a)(t,2),a=c[0],n=c[1],l=Object(i.useState)([]),d=Object(s.a)(l,2),o=d[0],b=d[1],m=Object(i.useState)([]),O=Object(s.a)(m,2),x=O[0],h=O[1],k=Object(i.useState)(),S=Object(s.a)(k,2),C=S[0],B=S[1],R=Object(f.a)().user,T=Object(i.useState)(!0),E=Object(s.a)(T,2),L=E[0],_=E[1];Object(i.useEffect)((()=>{g.a.get("/t").then((e=>{n(e.data.data),b(e.data.id),h(e.data.urls),console.log(e.data),g.a.get("/u/".concat(R.uid)).then((e=>{200===e.status&&void 0!==e.data.id&&B(e.data.id),_(!1)}))}))}),[]);const F=[{name:"name",label:"Nombre",options:{filter:!0,customBodyRenderLite:e=>{let t=a[e];return Object(w.jsxs)("div",{className:"flex items-center",children:[Object(w.jsx)(p.a,{className:"w-48 h-48",src:x[e]}),Object(w.jsxs)("div",{className:"ml-3",children:[Object(w.jsx)("h5",{className:"my-0 text-15",children:null===t||void 0===t?void 0:t.name}),Object(w.jsx)("small",{className:"text-muted",children:null===t||void 0===t?void 0:t.email})]})]})}}},{name:"address",label:"Consultorio",options:{filter:!0,customBodyRenderLite:e=>{let t=a[e];return Object(w.jsx)("span",{className:"ellipsis",children:(null===t||void 0===t?void 0:t.address)||"Sin direccion"})}}},{name:"exp",label:"Experiencia",options:{filter:!0,customBodyRenderLite:e=>{let t=a[e];return Object(w.jsx)("span",{className:"",children:null===t||void 0===t?void 0:t.exp})}}},{name:"ced",label:"Cedula",options:{filter:!0,customBodyRenderLite:e=>{let t=a[e];return Object(w.jsx)("span",{className:"ellipsis",children:null===t||void 0===t?void 0:t.cedula})}}},{name:"action",label:"Seleccionar terapeuta ",options:{filter:!1,customBodyRenderLite:e=>Object(w.jsxs)("div",{className:"flex",children:[Object(w.jsx)("div",{className:""}),Object(w.jsx)(r.a,{onClick:()=>{g.a.post("/u/".concat(R.uid,"/t/").concat(o[e])).then((t=>{console.log("Terapeutas reasignados",o[e]),B(o[e])})).catch((e=>{console.error(e)}))},children:Object(w.jsx)(j.a,{children:C===o[e]?"check_circle":"control_point"})})]})}}];return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"m-sm-30",children:L?Object(w.jsx)(y.a,{}):Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"overflow-auto",children:[Object(w.jsx)("div",{className:"hide-on-pc flex justify-end menu-button",children:Object(w.jsx)(r.a,{onClick:e,children:Object(w.jsx)(j.a,{className:"",children:"menu"})})}),Object(w.jsx)("div",{className:"min-w-300",children:Object(w.jsx)(u.a,{title:"Todos los terapeutas",data:a,columns:F,options:{filterType:"textField",responsive:"simple",selectableRows:"none",filter:!1,download:!1,print:!1,pagination:!1,viewColumns:!1,elevation:0,rowsPerPageOptions:[10,20,40,80,100],customSearchRender:(e,t,c,s)=>Object(w.jsx)(v.a,{appear:!0,in:!0,timeout:300,children:Object(w.jsx)(N.a,{variant:"outlined",size:"small",fullWidth:!0,onChange:({target:{value:e}})=>t(e),InputProps:{style:{paddingRight:0},startAdornment:Object(w.jsx)(j.a,{className:"mr-2",fontSize:"large",children:"search"}),endAdornment:Object(w.jsx)(r.a,{onClick:c,children:Object(w.jsx)(j.a,{fontSize:"small",children:"clear"})})}})})}})})]})})})})},S=c(1519),C=c(29);const B=Object(O.a)((e=>{e.palette,Object(a.a)(e,["palette"]);return{headerBG:{height:345,"@media only screen and (max-width: 959px)":{height:0}}}}));t.default=Object(b.a)({},{withTheme:!0})((()=>{const e=Object(i.useState)(!0),t=Object(s.a)(e,2),c=t[0],a=t[1],b=Object(f.a)().user,O=Object(o.a)(),h=B(),u=Object(n.a)(O.breakpoints.down("sm")),p=()=>{a(!c)};return Object(i.useEffect)((()=>{a(!1)}),[u]),u?Object(w.jsx)("div",{className:"relative ",children:Object(w.jsxs)(x.n,{children:[Object(w.jsxs)(x.m,{width:"300px",open:c,toggleSidenav:p,children:[Object(w.jsx)("div",{className:Object(m.default)("bg-primary text-right",h.headerBG),children:Object(w.jsx)(l.a,{smUp:!0,children:Object(w.jsx)(r.a,{onClick:p,children:Object(w.jsx)(j.a,{className:"text-white mt-2",children:"clear"})})})}),Object(w.jsx)(S.a,{})]}),Object(w.jsxs)(x.o,{children:[Object(w.jsx)("div",{className:Object(m.default)("bg-primary",h.headerBG)}),Object(w.jsx)(k,{toggleSidenav:p})]})]})}):Object(w.jsx)(i.Fragment,{children:Object(w.jsxs)("div",{className:"m-sm-30",children:[Object(w.jsx)("div",{className:"mb-sm-30"}),Object(w.jsx)("div",{children:Object(w.jsx)(d.a,{className:"x-center",color:"secondary",variant:"contained",onClick:()=>C.a.push("/"+b.uid+"/home"),children:"Volver al escritorio"})}),Object(w.jsx)("div",{children:Object(w.jsx)("h1",{children:"Encuentra a tu terapeuta favorito"})}),Object(w.jsx)(k,{})]})})}))}}]);