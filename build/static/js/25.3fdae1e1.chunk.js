(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[25],{1477:function(e,t,a){"use strict";var c=a(2),n=a(7),s=a(0),r=(a(6),a(4)),l=a(9),i=a(333),o=a(348),d=s.forwardRef((function(e,t){var a=e.children,l=e.classes,d=e.className,j=e.disableTypography,b=void 0!==j&&j,m=e.inset,h=void 0!==m&&m,O=e.primary,p=e.primaryTypographyProps,u=e.secondary,x=e.secondaryTypographyProps,y=Object(n.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),g=s.useContext(o.a).dense,v=null!=O?O:a;null==v||v.type===i.a||b||(v=s.createElement(i.a,Object(c.a)({variant:g?"body2":"body1",className:l.primary,component:"span",display:"block"},p),v));var N=u;return null==N||N.type===i.a||b||(N=s.createElement(i.a,Object(c.a)({variant:"body2",className:l.secondary,color:"textSecondary",display:"block"},x),N)),s.createElement("div",Object(c.a)({className:Object(r.default)(l.root,d,g&&l.dense,h&&l.inset,v&&N&&l.multiline),ref:t},y),v,N)}));t.a=Object(l.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(d)},2158:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a(14),s=a(11),r=a(0),l=a(41),i=a(1334),o=a(1293),d=a(1351),j=a(1537),b=a(1477),m=a(1);var h=(e,t,a,c)=>Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{selected:a===e,alignItems:"flex-start",children:Object(m.jsx)("div",{onClick:()=>c(t,e),children:Object(m.jsx)(b.a,{primary:t.title,secondary:t.body})})})}),O=a(96),p=a(51);var u=(e,t)=>{const a=Object(p.a)().user,s=Object(r.useState)({addingNote:!1,title:null}),j=Object(n.a)(s,2),b=j[0],u=j[1],x=()=>{u({addingNote:!b.addingNote,title:null})},y=()=>{console.log(b),O.a.post("/t/"+a.uid+"/new").then((e=>{console.log("Nota creada")})).catch((e=>{console.error(e)}))},g=()=>{console.log("select note")},v=()=>{console.log("delete note")};return 0!==e.length?(console.log(e),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)(i.a,{className:"mt-4",onClick:x,color:"secondary",variant:"contained",children:b.addingNote?"Cancelar":"Crear nueva nota"})}),b.addingNote?Object(m.jsxs)("div",{className:"p-4",children:[Object(m.jsx)(l.ValidatorForm,{children:Object(m.jsx)(l.TextValidator,{className:"mb-4 w-full",label:"Ingresa el t\xedtulo de la nota",type:"text",onKeyUp:e=>{return t=e.target.value,u(Object(c.a)(Object(c.a)({},b),{},{title:t})),void console.log("here it is",t);var t}})}),Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)(i.a,{color:"secondary",variant:"contained",onClick:y,children:"Guardar nota"})})]}):null,Object(m.jsx)(o.a,{children:e.notes.map((a=>Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{notes:e.notes,selectedNoteIndex:t,selectNote:g,deleteNote:v}),Object(m.jsx)(d.a,{})]},a)))})]})):Object(m.jsx)("div",{children:"No pudimos recibir las notas de NotesApp.JSX"})},x=a(50),y=a.n(x),g=a(71),v=a(587),N=a(1347),f=a(601),T=a(439),k=a(1640);var w=a(551),C=a.n(w);const I=Object(T.a)((e=>({button:{margin:e.spacing(1)},input:{display:"none"}})));var S=()=>{const e=I(),t=Object(r.useState)({content:""}),a=Object(n.a)(t,2),c=a[0],s=a[1],i=function(){var e=Object(g.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s({content:t}),o();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(e,t,a){var c,n;return function(){function s(){c=null,a||(n=e.apply(r,l))}var r=this,l=arguments;return clearTimeout(c),c=setTimeout(s,t),a&&!c&&(n=e.apply(r,l)),n}}((()=>{}),1500);return Object(m.jsx)("div",{className:"m-sm-30",children:Object(m.jsx)(l.ValidatorForm,{children:Object(m.jsxs)(v.a,{container:!0,spacing:1,children:[Object(m.jsx)(v.a,{item:!0,lg:12,md:12,sm:12,xs:12}),Object(m.jsxs)(v.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:[Object(m.jsx)(C.a,{value:c.content,onChange:i}),Object(m.jsx)(k.a,{title:"\xbfNecesitas ayuda?",children:Object(m.jsx)(f.a,{className:e.button,children:Object(m.jsx)(N.a,{children:"help"})})})]})]})})})},B=a(1289),E=a(1365),G=a(1290),P=a(52),V=a(111),F=a(4),J=a(356),A=a(38);const L=Object(T.a)((e=>{e.palette,Object(s.a)(e,["palette"]);return{headerBG:{height:100,"@media only screen and (max-width: 959px)":{height:400}}}}));t.default=Object(G.a)({},{withTheme:!0})((()=>{const e=Object(P.a)(),t=L(),a=(Object(B.a)(e.breakpoints.down("sm")),Object(r.useState)({selectedNoteIndex:null,selectedNote:null,notes:null})),s=Object(n.a)(a,2),l=s[0],o=s[1],d=Object(r.useState)(!0),j=Object(n.a)(d,2),b=j[0],h=j[1],x=Object(p.a)().user;return Object(r.useEffect)((()=>{O.a.get("/t/".concat(x.uid,"/n")).then((e=>{o(Object(c.a)(Object(c.a)({},l),{},{notes:e.data.data})),h(!1)})).catch((e=>{console.error(e)}))}),[]),Object(m.jsx)("div",{className:"relative",children:b?Object(m.jsx)(J.a,{}):Object(m.jsx)(m.Fragment,{children:l.notes?Object(m.jsxs)(V.n,{children:[Object(m.jsxs)(V.m,{width:"300px py-4",children:[Object(m.jsx)("div",{className:"mb-10",children:Object(m.jsx)(u,{selectedNoteIndex:l.selectedNoteIndex,notes:l.notes})}),Object(m.jsxs)("div",{className:(Object(F.default)("bg-primary text-center",t.headerBG),"p-4"),children:[Object(m.jsx)(i.a,{onClick:()=>A.a.push("/"+x.uid+"/dashboard"),color:"secondary",variant:"contained",className:"align-middle y-center",children:Object(m.jsx)("h3",{className:"align-middle justify-center",children:"Volver al escritorio"})}),Object(m.jsx)(E.a,{smUp:!0,children:Object(m.jsx)(f.a,{children:Object(m.jsx)(N.a,{className:"text-white",children:"clear"})})})]})]}),Object(m.jsxs)(V.o,{children:[Object(m.jsx)("div",{className:(Object(F.default)("bg-primary",t.headerBG),"text-center"),children:Object(m.jsx)("h1",{className:"pb-4 mb-2 mt-2",children:"Aplicaci\xf3n de notas"})}),Object(m.jsx)(S,{})]})]}):Object(m.jsx)("div",{children:"No logramos obtener las notas de la base de datos"})})})}))}}]);