(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[18],{1314:function(e,t,a){"use strict";function s(e){return function(){return null}}a.d(t,"a",(function(){return s}))},1380:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1381:function(e,t,a){var s=a(1425);function n(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!==typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var r=i?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(a,c,r):a[c]=e[c]}return a.default=e,t&&t.set(e,a),a}},1382:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.createSvgIcon}});var s=a(1401)},1390:function(e,t,a){"use strict";function s(e,t,a,s,n){return null}a.d(t,"a",(function(){return s}))},1401:function(e,t,a){"use strict";a.r(t),a.d(t,"capitalize",(function(){return s.a})),a.d(t,"createChainedFunction",(function(){return n.a})),a.d(t,"createSvgIcon",(function(){return i.a})),a.d(t,"debounce",(function(){return c.a})),a.d(t,"deprecatedPropType",(function(){return r})),a.d(t,"isMuiElement",(function(){return l.a})),a.d(t,"ownerDocument",(function(){return o.a})),a.d(t,"ownerWindow",(function(){return d.a})),a.d(t,"requirePropFactory",(function(){return m.a})),a.d(t,"setRef",(function(){return j.a})),a.d(t,"unsupportedProp",(function(){return b.a})),a.d(t,"useControlled",(function(){return u.a})),a.d(t,"useEventCallback",(function(){return h.a})),a.d(t,"useForkRef",(function(){return p.a})),a.d(t,"unstable_useId",(function(){return x.a})),a.d(t,"useIsFocusVisible",(function(){return O.a}));var s=a(12),n=a(82),i=a(35),c=a(183);function r(e,t){return function(){return null}}var l=a(184),o=a(46),d=a(186),m=a(1314),j=a(98),b=a(1390),u=a(133),h=a(55),p=a(25),x=a(349),O=a(348)},1425:function(e,t){function a(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},1437:function(e,t,a){"use strict";var s=a(1380),n=a(1381);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),c=(0,s(a(1382)).default)(i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=c},1468:function(e,t,a){"use strict";var s=a(1380),n=a(1381);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),c=(0,s(a(1382)).default)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");t.default=c},1624:function(e,t,a){"use strict";var s=a(2),n=a(7),i=a(0),c=(a(4),a(5)),r=a(9),l=i.forwardRef((function(e,t){var a=e.classes,r=e.className,l=e.dividers,o=void 0!==l&&l,d=Object(n.a)(e,["classes","className","dividers"]);return i.createElement("div",Object(s.a)({className:Object(c.default)(a.root,r,o&&a.dividers),ref:t},d))}));t.a=Object(r.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(l)},1625:function(e,t,a){"use strict";var s=a(2),n=a(7),i=a(0),c=(a(4),a(5)),r=a(9),l=i.forwardRef((function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,l=e.classes,o=e.className,d=Object(n.a)(e,["disableSpacing","classes","className"]);return i.createElement("div",Object(s.a)({className:Object(c.default)(l.root,o,!r&&l.spacing),ref:t},d))}));t.a=Object(r.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(l)},1679:function(e,t,a){"use strict";var s=a(2),n=a(7),i=a(0),c=(a(4),a(5)),r=a(9),l=a(335),o=i.forwardRef((function(e,t){var a=e.children,r=e.classes,o=e.className,d=e.disableTypography,m=void 0!==d&&d,j=Object(n.a)(e,["children","classes","className","disableTypography"]);return i.createElement("div",Object(s.a)({className:Object(c.default)(r.root,o),ref:t},j),m?a:i.createElement(l.a,{component:"h2",variant:"h6"},a))}));t.a=Object(r.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(o)},1697:function(e,t,a){"use strict";var s=a(7),n=a(2),i=a(0),c=(a(4),a(5)),r=a(9),l=a(592),o=a(12),d=i.forwardRef((function(e,t){var a=e.children,r=e.classes,d=e.className,m=e.color,j=void 0===m?"default":m,b=e.component,u=void 0===b?"button":b,h=e.disabled,p=void 0!==h&&h,x=e.disableFocusRipple,O=void 0!==x&&x,g=e.focusVisibleClassName,f=e.size,v=void 0===f?"large":f,y=e.variant,N=void 0===y?"round":y,w=Object(s.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return i.createElement(l.a,Object(n.a)({className:Object(c.default)(r.root,d,"round"!==N&&r.extended,"large"!==v&&r["size".concat(Object(o.a)(v))],p&&r.disabled,{primary:r.primary,secondary:r.secondary,inherit:r.colorInherit}[j]),component:u,disabled:p,focusRipple:!O,focusVisibleClassName:Object(c.default)(r.focusVisible,g),ref:t},w),i.createElement("span",{className:r.label},a))}));t.a=Object(r.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)},2068:function(e,t,a){"use strict";var s=a(2),n=a(7),i=a(0),c=(a(4),a(5)),r=a(9),l=a(12),o=i.forwardRef((function(e,t){var a=e.anchorOrigin,r=void 0===a?{vertical:"top",horizontal:"right"}:a,o=e.badgeContent,d=e.children,m=e.classes,j=e.className,b=e.color,u=void 0===b?"default":b,h=e.component,p=void 0===h?"span":h,x=e.invisible,O=e.max,g=void 0===O?99:O,f=e.overlap,v=void 0===f?"rectangle":f,y=e.showZero,N=void 0!==y&&y,w=e.variant,C=void 0===w?"standard":w,k=Object(n.a)(e,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),S=x;null==x&&(0===o&&!N||null==o&&"dot"!==C)&&(S=!0);var z="";return"dot"!==C&&(z=o>g?"".concat(g,"+"):o),i.createElement(p,Object(s.a)({className:Object(c.default)(m.root,j),ref:t},k),d,i.createElement("span",{className:Object(c.default)(m.badge,m["".concat(r.horizontal).concat(Object(l.a)(r.vertical),"}")],m["anchorOrigin".concat(Object(l.a)(r.vertical)).concat(Object(l.a)(r.horizontal)).concat(Object(l.a)(v))],"default"!==u&&m["color".concat(Object(l.a)(u))],S&&m.invisible,"dot"===C&&m.dot)},z))}));t.a=Object(r.a)((function(e){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorError:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(o)},2184:function(e,t,a){"use strict";a.r(t);var s=a(14),n=a(11),i=a(0),c=a.n(i),r=a(1295),l=a(1375),o=a(607),d=a(1356),m=a(1296),j=a(53),b=a(112),u=a(605),h=a(5),p=a(589),x=a(1300),O=a(1309),g=a(1377),f=a(1360),v=a(29),y=a(1340),N=a(40),w=a(35),C=Object(w.a)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle"),k=a(79),S=a(52),z=a(1363),T=a(1);const R=Object(u.a)((e=>({button:{margin:e.spacing(0)}})));var L=({open:e,closeDone:t,session:a,sid:n,img:c})=>{const r=R(),l=Object(i.useState)(!1),m=Object(s.a)(l,2);m[0],m[1];return Object(T.jsxs)(z.a,{onClose:t,open:e,maxWidth:"sm",fullWidth:!1,children:[Object(T.jsxs)("div",{className:"flex justify-between items-center pl-4 pr-2 py-2 bg-primary",children:[Object(T.jsx)("h4",{className:"m-0 text-white",children:"Confirmar sesi\xf3n completada"}),Object(T.jsx)(o.a,{onClick:t,children:Object(T.jsx)(d.a,{className:"text-white",children:"clear"})})]}),Object(T.jsxs)("div",{className:"p-4",children:[Object(T.jsxs)(p.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"center",children:[Object(T.jsx)(p.a,{item:!0,lg:2,md:2,sm:2,xs:12,children:Object(T.jsx)(g.a,{src:c,className:"ml-3 h-56 w-56"})}),Object(T.jsx)(p.a,{item:!0,lg:10,md:10,sm:10,xs:12,children:Object(T.jsxs)(p.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"center",children:[Object(T.jsxs)(p.a,{item:!0,lg:7,md:7,sm:7,xs:12,children:[Object(T.jsx)("h4",{className:"m-1 text-gray",children:a.user_name}),Object(T.jsx)(f.a,{}),Object(T.jsx)("h4",{className:"m-1 text-muted",children:a.user_email})]}),Object(T.jsx)(p.a,{item:!0,lg:5,md:5,sm:5,xs:12,children:Object(T.jsx)(O.a,{elevation:2,className:"bg-primary",variant:"outlined",children:Object(T.jsx)("h4",{className:"m-2 text-white text-center",children:a.tipo})})})]})}),Object(T.jsx)(p.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(T.jsx)(O.a,{elevation:10,className:"bg-primary",children:Object(T.jsx)("h4",{className:"m-2 text-white text-center",children:new Date(a.start).toLocaleTimeString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})})}),Object(T.jsx)(p.a,{item:!0,lg:12,md:12,sm:12,xs:12,className:"alignCenter",children:Object(T.jsx)(y.a,{variant:"contained",color:"secondary",size:"large",fullWidth:!0,className:r.button,startIcon:Object(T.jsx)(C,{}),children:"Confirmar sesi\xf3n"})})]}),Object(T.jsx)(f.a,{}),Object(T.jsx)("h6",{className:"mt-4 text-error",children:"Al hacer click est\xe1 confirmando que la sesi\xf3n se llev\xf3 a cabo exitosamente. "})]})]})};Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this};const I=Object(u.a)((e=>{e.palette;return{google:{color:"#ec412c"},twitter:{color:"#039ff5"},button:{margin:Object(n.a)(e,["palette"]).spacing(1)}}}));new Date,(new Date).addHours(1),(new Date).addHours(3);var _=({sessions:e,users:t})=>{const a=I(),n=Object(i.useState)(!1),c=Object(s.a)(n,2),r=c[0],l=c[1],o={weekday:"long",year:"numeric",month:"long",day:"numeric"},m=e=>{let a=t.id.indexOf(e);return a<=-1?console.log("No se tiene registro del usuario xd"):(console.log("Se encontr\xf3 un registro del usuario. Pasando imagen..."),t.url[a])},j=e=>{l(!1)};return Object(T.jsx)(p.a,{container:!0,spacing:2,direction:"column",children:e.data.map(((t,s)=>Object(T.jsx)(p.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(T.jsxs)(O.a,{className:"p-5 ml-5 mr-5",elevation:12,children:[Object(T.jsxs)("div",{className:"flex justify-between mb-4",children:[Object(T.jsx)(g.a,{className:"h-56 w-56",src:m(t.user)}),Object(T.jsx)("div",{children:Object(T.jsx)(T.Fragment,{children:r&&Object(T.jsx)(L,{closeDone:j,open:r,session:t,sid:e.id[s],img:m(t.user)})})})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h5",{className:"m-0 capitalize",children:null===t||void 0===t?void 0:t.user_name}),Object(T.jsxs)(p.a,{item:!0,children:[Object(T.jsx)("h4",{className:"text-muted mt-2",children:"Fecha pactada:"}),Object(T.jsx)("p",{className:"text-muted",children:new Date(null===t||void 0===t?void 0:t.start).toLocaleTimeString("es-ES",o)})]}),Object(T.jsx)("div",{className:"mb-4",children:Object(T.jsxs)(N.b,{className:"flex mb-1 items-center",to:"/",children:[Object(T.jsx)(b.g,{fontSize:"small",className:Object(h.default)("text-14",a.google)}),Object(T.jsx)("span",{className:"ml-2",children:null===t||void 0===t?void 0:t.user_email})]})}),Object(T.jsxs)("div",{className:"flex flex-wrap ",children:[Object(T.jsx)(y.a,{variant:"contained",size:"small",onClick:()=>{(e=>{0===e&&l(!0)})(s)},startIcon:0==s?Object(T.jsx)(C,{}):Object(T.jsx)(d.a,{children:"face"}),className:Object(h.default)("bg-light-primary hover-bg-primary text-primary px-5",a.button),children:0==s?"Marcar como completada":"Contactar paciente"}),Object(T.jsx)(y.a,{size:"small",variant:"contained",startIcon:1==s?Object(T.jsx)(d.a,{children:"watch_later"}):Object(T.jsx)(d.a,{children:"visibility"}),className:Object(h.default)("bg-light-primary hover-bg-primary text-primary px-5 mr-1",a.button),children:1==s?"Posponer sesi\xf3n":"Ver perfil de usuario"})]})]})]})},s)))})},E=a(350),M=a(2068),D=a(1697);var P=({users:e})=>e.data.map(((t,a)=>Object(T.jsxs)(p.a,{item:!0,className:"flex items-center mb-4 ml-2 mt-3",children:[t.answered?Object(T.jsx)(D.a,{className:"primary",children:Object(T.jsx)("h4",{className:Object(h.default)("m-0 font-normal","Hombre"===t.gender?"text-primary":"text-error"),children:t.name.slice(0,2)})}):Object(T.jsx)(M.a,{badgeContent:"Nuevo",color:"secondary",children:Object(T.jsx)(D.a,{className:"primary",children:Object(T.jsx)("h4",{className:"text-secondary m-0 font-normal",children:t.name.slice(0,2)})})}),Object(T.jsxs)("div",{className:"ml-4",children:[Object(T.jsx)("h5",{className:"m-0 mb-1 font-medium",children:t.name}),Object(T.jsx)("h6",{className:Object(h.default)("m-0 font-normal",t.answered?"Hombre"===t.gender?"text-primary":"text-error":"text-secondary"),children:t.email}),Object(T.jsx)("p",{className:"m-0 text-muted",children:t.age})]})]},e.id[a])));Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this};const B=Object(u.a)((e=>{e.palette;return{google:{color:"#ec412c"},twitter:{color:"#039ff5"},button:{margin:Object(n.a)(e,["palette"]).spacing(1)}}})),V=[{name:"Jorge Rodriguez",location:"Guadalajara, Jalisco",time:new Date,num:1},{name:"Matha Benitez",location:"Monterrey, Nuevo Leon",time:(new Date).addHours(1),num:3},{name:"Carlos Martinez",location:"Aguascalientes, Aguascalientes",time:(new Date).addHours(3),num:2}];var W=()=>{const e=B(),t=Object(S.a)().user,a=Object(i.useState)(V),n=Object(s.a)(a,2);n[0],n[1];return Object(T.jsx)(p.a,{container:!0,spacing:3,direction:"column",children:Object(T.jsx)(p.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(T.jsx)(O.a,{className:"p-5",children:Object(T.jsxs)("div",{className:"flex-column  items-center   mb-4",children:[Object(T.jsx)(d.a,{className:"w-56 mb-2 ml-2",children:"sentiment_dissatisfied"}),Object(T.jsx)("h3",{className:" capitalize pb-2",children:"Actualmente no tienes ninguna cita agendada"}),Object(T.jsx)("h5",{className:"text-muted",children:"Abre tus horarios para que los usuarios puedan seleccionar alguno de los disponibles"}),Object(T.jsx)("div",{className:" ",children:Object(T.jsx)(y.a,{variant:"contained",startIcon:Object(T.jsx)(d.a,{children:"watch_later"}),className:Object(h.default)("bg-light-primary hover-bg-primary text-primary px-5 mr-1",e.button),onClick:()=>v.a.push("/"+t.uid+"/schedule"),children:"Abrir horarios"})})]})})})})};const F=Object(u.a)((e=>{let t=e.palette,a=Object(n.a)(e,["palette"]);return{profileContent:{marginTop:-345,paddingTop:74,paddingRight:30,paddingLeft:4,"& .menu-button":{display:"none"},"@media only screen and (max-width: 959px)":{marginTop:-390,paddingTop:24,paddingRight:16,paddingLeft:16},"@media only screen and (max-width: 767px)":{marginTop:-410,paddingTop:16,paddingRight:16,paddingLeft:16,"& .menu-button":{display:"flex"}}},cardLeftVerticalLine:{"&:after":{content:'" "',position:"absolute",height:35,width:5,top:-30,background:t.primary.main}},cardGrayBox:{height:220,width:"calc(100% - 16px)",borderRadius:8,backgroundColor:"rgba(var(--body), 0.1)"},showAllPatients:{margin:a.spacing(1)}}}));var A=()=>{const e=F();return Object(T.jsxs)("div",{children:[Object(T.jsxs)(O.a,{className:"overflow-unset flex py-4",children:[Object(T.jsxs)("div",{className:"w-100 min-w-100 text-center",children:[Object(T.jsx)(D.a,{className:"relative mt--14",size:"medium",color:"primary",children:Object(T.jsx)(d.a,{children:"trending_up"})}),Object(T.jsx)("div",{className:"py-3"}),Object(T.jsx)(o.a,{size:"small",children:Object(T.jsx)(d.a,{children:"favorite"})}),Object(T.jsx)("p",{className:"pb-4 m-0",children:"65"}),Object(T.jsx)(o.a,{size:"small",children:Object(T.jsx)(d.a,{children:"chat"})}),Object(T.jsx)("p",{className:"m-0",children:"65"})]}),Object(T.jsxs)("div",{className:"flex-grow",children:[Object(T.jsxs)("div",{className:"flex items-center justify-between pr-4 pb-3",children:[Object(T.jsx)("h5",{className:"m-0 font-medium capitalize",children:"Entrada m\xe1s popular"}),Object(T.jsx)("span",{className:"text-muted",children:"12/03/2019"})]}),Object(T.jsx)(f.a,{className:"mb-4"}),Object(T.jsx)("h4",{className:"m-0 font-medium capitalize",children:"T\xe9cnicas de relajaci\xf3n"}),Object(T.jsx)("div",{className:e.cardGrayBox,children:Object(T.jsx)("img",{className:"h-full w-full border-radius-4",src:"/assets/images/photo-1.jpg",alt:"random"})}),Object(T.jsx)("p",{className:"m-0 pt-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]}),Object(T.jsx)("div",{className:"py-7"}),Object(T.jsxs)(O.a,{className:"overflow-unset flex py-4",children:[Object(T.jsxs)("div",{className:"w-100 min-w-100 text-center",children:[Object(T.jsx)(D.a,{className:Object(h.default)("relative mt--14",e.cardLeftVerticalLine),size:"medium",color:"primary",children:Object(T.jsx)(d.a,{children:"date_range"})}),Object(T.jsx)("div",{className:"py-3"}),Object(T.jsx)(o.a,{size:"small",children:Object(T.jsx)(d.a,{children:"favorite"})}),Object(T.jsx)("p",{className:"pb-4 m-0",children:"65"}),Object(T.jsx)(o.a,{size:"small",children:Object(T.jsx)(d.a,{children:"chat"})}),Object(T.jsx)("p",{className:"m-0",children:"65"})]}),Object(T.jsxs)("div",{className:"flex-grow",children:[Object(T.jsxs)("div",{className:"flex items-center justify-between pr-4 pb-3",children:[Object(T.jsx)("h5",{className:"m-0 font-medium capitalize",children:"\xdaltima entrada"}),Object(T.jsx)("span",{className:"text-muted",children:"12/03/2019"})]}),Object(T.jsx)(f.a,{}),Object(T.jsx)("p",{className:"m-0 pt-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]}),Object(T.jsx)("div",{className:"py-7"}),Object(T.jsxs)(O.a,{className:"overflow-unset flex py-4",children:[Object(T.jsxs)("div",{className:"w-100 min-w-100 text-center",children:[Object(T.jsx)(D.a,{className:Object(h.default)("relative mt--14",e.cardLeftVerticalLine),size:"medium",color:"primary",children:Object(T.jsx)(d.a,{children:"star_outline"})}),Object(T.jsx)("div",{className:"py-3"}),Object(T.jsx)(o.a,{size:"small",children:Object(T.jsx)(d.a,{children:"favorite"})}),Object(T.jsx)("p",{className:"pb-4 m-0",children:"65"}),Object(T.jsx)(o.a,{size:"small",children:Object(T.jsx)(d.a,{children:"chat"})}),Object(T.jsx)("p",{className:"m-0",children:"65"})]}),Object(T.jsxs)("div",{className:"flex-grow",children:[Object(T.jsxs)("div",{className:"flex items-center justify-between pr-4 pb-3",children:[Object(T.jsx)("h5",{className:"m-0 font-medium capitalize",children:"Entrada con mas likes"}),Object(T.jsx)("span",{className:"text-muted",children:"12/03/2019"})]}),Object(T.jsx)(f.a,{}),Object(T.jsx)("p",{className:"m-0 pt-3",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]})]})};const H=Object(u.a)((e=>{let t=e.palette,a=Object(n.a)(e,["palette"]);return{profileContent:{marginTop:-345,paddingTop:74,paddingRight:30,paddingLeft:4,"& .menu-button":{display:"none"},"@media only screen and (max-width: 959px)":{marginTop:-390,paddingTop:24,paddingRight:16,paddingLeft:16},"@media only screen and (max-width: 767px)":{marginTop:-410,paddingTop:16,paddingRight:16,paddingLeft:16,"& .menu-button":{display:"flex"}}},cardLeftVerticalLine:{"&:after":{content:'" "',position:"absolute",height:35,width:5,top:-30,background:t.primary.main}},cardGrayBox:{height:220,width:"calc(100% - 16px)",borderRadius:8,backgroundColor:"rgba(var(--body), 0.1)"},showAllPatients:{margin:a.spacing(1)}}})),$=[];var G=({toggleSidenav:e,loading:t,users:a,blogs:n,sessions:c})=>{const r=H(),l=Object(i.useState)([{title:"Pacientes",amount:"Cargando...",icon:"person",route:"/tid:/patients"},{title:"Sesiones agendadas",amount:"Cargando...",icon:"event",route:"/:tid/appointments"},{title:"Sesiones completadas",amount:"Cargando...",icon:"offline_pin",route:"/tid:/completedApp"}]),m=Object(s.a)(l,2),j=m[0],b=m[1];return Object(i.useEffect)((()=>{t||(()=>{let e=0;c.data.forEach((t=>{"completada"===t.state&&(e+=1)})),b([{title:"Pacientes",amount:a.id.length,icon:"person",route:"/tid:/patients"},{title:"Sesiones agendadas",amount:c.data.length,icon:"event",route:"/:tid/appointments"},{title:"Sesiones completadas",amount:e,icon:"offline_pin",route:"/tid:/completedApp"}])})()}),[t]),Object(T.jsx)(i.Fragment,{children:Object(T.jsxs)("div",{className:r.profileContent,children:[Object(T.jsx)("div",{className:"flex justify-end menu-button",children:Object(T.jsx)(o.a,{onClick:e,children:Object(T.jsx)(d.a,{className:"text-white",children:"menu"})})}),Object(T.jsx)("div",{className:r.headerCardHolder,children:t?Object(T.jsx)(p.a,{container:!0,direction:"column",alignItems:"center",children:Object(T.jsx)(p.a,{item:!0,children:Object(T.jsx)(x.a,{color:"secondary"})})}):Object(T.jsx)(p.a,{container:!0,spacing:6,children:j.map((e=>Object(T.jsx)(p.a,{item:!0,lg:4,md:4,sm:12,xs:12,children:Object(T.jsxs)(O.a,{className:"h-96 bg-gray bg-default flex items-center justify-between p-4",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("span",{className:"text-light-white uppercase",children:e.title}),Object(T.jsx)("h4",{className:"font-normal text-white m-0 pt-2",children:e.amount})]}),Object(T.jsx)("div",{className:"w-56 h-36",children:Object(T.jsx)(o.a,{onClick:()=>v.a.push(e.route),children:Object(T.jsx)(d.a,{className:"text-white",children:e.icon})})})]})},e.title)))})}),Object(T.jsx)("div",{className:"py-8"}),Object(T.jsxs)(p.a,{container:!0,spacing:3,children:[Object(T.jsxs)(p.a,{item:!0,lg:8,md:8,sm:12,xs:12,children:[Object(T.jsx)(O.a,{className:"pb-4",children:t?Object(T.jsx)("div",{className:"mt-10 mb-10",children:Object(T.jsx)(E.a,{color:"primary",size:32})}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("h4",{className:"text-32 px-4 pt-4 pb-0",children:"Tus pr\xf3ximas citas"}),0===c.data.length?Object(T.jsx)(W,{}):Object(T.jsx)(_,{sessions:c,users:a})]})}),Object(T.jsx)("div",{className:"py-6"}),Object(T.jsx)(A,{})]}),Object(T.jsxs)(p.a,{item:!0,lg:4,md:4,sm:12,xs:12,container:!0,spacing:1,children:[Object(T.jsx)(p.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(T.jsx)(O.a,{className:"p-4 h-full",children:t?Object(T.jsx)("div",{className:"mt-10 mb-10",children:Object(T.jsx)(E.a,{})}):Object(T.jsx)(T.Fragment,{children:0!==(null===a||void 0===a?void 0:a.id.length)?Object(T.jsxs)("div",{children:[Object(T.jsxs)("h4",{className:"font-medium text-muted",children:[Object(T.jsx)(d.a,{children:"group"})," Pacientes"]}),Object(T.jsx)("div",{style:{maxHeight:400,overflow:"auto"},children:Object(T.jsx)(p.a,{container:!0,direction:"column",justify:"space-evenly",alignItems:"stretch",children:Object(T.jsx)(P,{users:a})})})]}):Object(T.jsx)("div",{className:"mt-12",children:Object(T.jsxs)("div",{className:"flex-column items-center mb-6",children:[Object(T.jsx)(g.a,{className:"w-84 h-84",src:""}),Object(T.jsx)("h5",{className:"mt-4 mb-2",children:"A\xfan no atiendes a ning\xfan paciente"}),Object(T.jsx)("small",{className:"text-muted",children:"Promociona tu perfil"})]})})})})}),Object(T.jsx)(p.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(T.jsx)(O.a,{children:$.map(((e,t)=>Object(T.jsxs)(i.Fragment,{children:[Object(T.jsx)("div",{className:"py-4 px-6 flex flex-wrap items-center justify-between",children:Object(T.jsxs)("div",{className:"flex flex-wrap items-center",children:[Object(T.jsx)("div",{className:"flex justify-center items-center bg-gray w-64 h-52 border-radius-4",children:Object(T.jsx)("img",{className:"w-36 overflow-hidden",src:e.img,alt:"master card"})}),Object(T.jsxs)("div",{className:"ml-4",children:[Object(T.jsx)("h5",{className:"mb-1 font-medium",children:e.type}),Object(T.jsx)("span",{className:"text-muted",children:e.product})]})]})}),t!==$.length-1&&Object(T.jsx)(f.a,{})]},t)))})})]}),Object(T.jsx)(p.a,{item:!0,lg:8,md:8,sm:12,xs:12}),Object(T.jsx)(p.a,{item:!0,lg:4,md:4,sm:12,xs:12})]}),Object(T.jsx)("div",{className:"py-2"})]})})},U=a(1625),J=a(1624),K=a(1679),q=a(335),Z=a(6),Y=a(1468),Q=a.n(Y),X=a(1437),ee=a.n(X),te=a(1306),ae=a(588);const se={error:Q.a},ne=Object(u.a)((e=>({error:{backgroundColor:e.palette.error.dark},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}})));function ie(e){const t=ne(),a=e.className,s=e.message,i=e.onClose,c=e.variant,r=Object(n.a)(e,["className","message","onClose","variant"]),l=se[c];return Object(T.jsx)(te.a,Object(Z.a)({className:Object(h.default)(t[c],a),"aria-describedby":"client-snackbar",message:Object(T.jsxs)("span",{id:"client-snackbar",className:t.message,children:[Object(T.jsx)(l,{className:Object(h.default)(t.icon,t.iconVariant)}),s]}),action:[Object(T.jsx)(o.a,{"aria-label":"Close",color:"inherit",onClick:i,children:Object(T.jsx)(ee.a,{className:t.icon})},"close")]},r))}const ce=Object(u.a)((e=>({margin:{margin:e.spacing(0)}})));function re(){const e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(i.useState)({open:!1,Transition:ae.a,vertial:"top",horizontal:"center"})),n=Object(s.a)(a,2),c=n[0],r=(n[1],Object(S.a)().user,ce());c.vertical,c.horizontal,c.open;return Object(T.jsx)("div",{className:"my-4",children:Object(T.jsx)(ie,{anchorOrigin:{vertical:"bottom",horizontal:"center"},variant:"error",open:c.open,className:r.margin,TransitionComponent:c.Transition,message:Object(T.jsx)("span",{id:"message-id",children:"No has completado tu informaci\xf3n para recibir pagos, presiona el bot\xf3n 'conectar con stripe'"})})})}const le={error:Q.a},oe=Object(u.a)((e=>({error:{backgroundColor:e.palette.error.dark},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}})));function de(e){const t=oe(),a=e.className,s=e.message,i=e.onClose,c=e.variant,r=Object(n.a)(e,["className","message","onClose","variant"]),l=le[c];return Object(T.jsx)(te.a,Object(Z.a)({className:Object(h.default)(t[c],a),"aria-describedby":"client-snackbar",message:Object(T.jsxs)("span",{id:"client-snackbar",className:t.message,children:[Object(T.jsx)(l,{className:Object(h.default)(t.icon,t.iconVariant)}),s]}),action:[Object(T.jsx)(o.a,{"aria-label":"Close",color:"inherit",onClick:i,children:Object(T.jsx)(ee.a,{className:t.icon})},"close")]},r))}const me=Object(u.a)((e=>({margin:{margin:e.spacing(0)}})));function je(){const e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(i.useState)({open:!1,Transition:ae.a,vertial:"top",horizontal:"center"})),n=Object(s.a)(a,2),c=n[0],r=(n[1],Object(S.a)().user,me());c.vertical,c.horizontal,c.open;return Object(T.jsx)("div",{children:Object(T.jsx)(de,{anchorOrigin:{vertical:"bottom",horizontal:"center"},variant:"error",open:c.open,className:r.margin,TransitionComponent:c.Transition,message:Object(T.jsx)("span",{id:"message-id",children:'No has completado tu horario. Da click en "Horario" para empezar a realizarlo'})})})}const be=Object(u.a)((e=>{let t=e.palette;Object(n.a)(e,["palette"]);return{stripeConnect:{background:t.primary.main,display:"inline-block",height:38,textDecoration:"none",width:180,borderRadius:4,mozBorderRadius:4,webkitBorderRadius:4,userSelect:"none",mozUserSelect:"none",webkitUserSelect:"none",msUserSelect:"none",webkitfontSmoothing:"antialiased"}}})),ue=Object(u.a)((e=>{e.palette;return{sidenav:{marginTop:-345,paddingTop:74,[Object(n.a)(e,["palette"]).breakpoints.down("sm")]:{marginTop:-410}}}})),he=[{title:"Horarios",icon:"event",route:"schedule"},{title:"Pacientes",icon:"group",route:"patients"},{title:"Mis blogs",icon:"article",route:"myblogs"},{title:"Nuevo blog",icon:"edit",route:"newblog"}];var pe=({url:e,loading:t,therapist:a})=>{const n=ue(),r=(be(),c.a.useState(!1)),l=Object(s.a)(r,2),o=l[0],m=l[1],j=Object(i.useState)(!0),b=Object(s.a)(j,2),u=b[0],x=b[1],f=Object(S.a)().user,N=c.a.useState(!1),w=Object(s.a)(N,2),C=w[0],R=w[1];function L(){R(!1)}const I=c.a.useState(!1),_=Object(s.a)(I,2);_[0],_[1];return Object(i.useEffect)((()=>{k.a.get("/t/".concat(f.uid,"/reAuth")).then((e=>{m(e.data.charges_enabled)})),k.a.get("/t/".concat(f.uid,"/schedule")).then((e=>{e.data.schedule&&x(0!==e.data.schedule.length)}))}),[]),Object(T.jsxs)("div",{children:[Object(T.jsxs)(z.a,{onClose:L,"aria-labelledby":"customized-dialog-title",open:C,children:[Object(T.jsx)(K.a,{id:"customized-dialog-title",onClose:L,children:"Notas de mis sesiones"}),Object(T.jsx)(J.a,{dividers:!0,children:Object(T.jsx)(y.a,{variant:"contained",color:"primary",className:"x-center",size:"large",onClick:()=>v.a.push("/:pid/notes"),children:Object(T.jsx)(q.a,{gutterBottom:!0,children:"Crear nota"})})}),Object(T.jsx)(U.a,{children:Object(T.jsxs)(y.a,{onClick:L,className:"bg-error",variant:"outlined",size:"small",children:[Object(T.jsx)(d.a,{children:"clear"}),"Cerrar"]})})]}),Object(T.jsxs)("div",{className:Object(h.default)("flex-column items-center",n.sidenav),children:[Object(T.jsx)(g.a,{className:"h-84 w-84 mb-5",src:e}),Object(T.jsx)("p",{className:"text-white",children:f.email}),Object(T.jsx)("div",{className:"py-3"}),Object(T.jsxs)("div",{className:"flex flex-wrap w-full px-12 mb-11",children:[Object(T.jsxs)("div",{className:"flex-grow",children:[Object(T.jsx)("p",{className:"uppercase text-light-white mb-1",children:"Ingresos"}),Object(T.jsx)("h4",{className:"font-medium text-white",children:"$ 20,495"})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{className:"uppercase text-light-white mb-1",children:"Calificaci\xf3n"}),Object(T.jsxs)("h4",{className:"font-medium text-white",children:[Object(T.jsx)(d.a,{children:"star_rate"})," 4.75"]})]}),Object(T.jsx)("div",{})]}),Object(T.jsxs)("div",{className:"px-8 pt-2 bg-default",children:[Object(T.jsxs)(p.a,{container:!0,spacing:3,children:[Object(T.jsx)(y.a,{children:Object(T.jsx)(p.a,{item:!0,children:Object(T.jsx)(O.a,{className:"w-104 h-104 bg-primary flex justify-center items-center",children:Object(T.jsxs)("div",{className:"text-light-white text-center",children:[Object(T.jsx)(d.a,{children:"sentiment_very_satisfied"}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{className:"pt-4",children:"Escritorio"})]})})})}),Object(T.jsx)(y.a,{onClick:function(){R(!0)},children:Object(T.jsx)(p.a,{item:!0,children:Object(T.jsx)(O.a,{className:"w-104 h-104  flex justify-center items-center",children:Object(T.jsxs)("div",{className:"text-light text-center",children:[Object(T.jsx)(d.a,{children:"content_paste"}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{className:"pt-4",children:"Notas"})]})})})}),he.map(((e,t)=>Object(T.jsx)(y.a,{onClick:()=>v.a.push("/"+f.uid+"/"+e.route),children:Object(T.jsx)(p.a,{item:!0,children:Object(T.jsx)(O.a,{className:"w-104 h-104 flex items-center justify-center",children:Object(T.jsxs)("div",{className:"text-light text-center",children:[Object(T.jsx)(d.a,{children:e.icon}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{className:"pt-4",children:e.title})]})})})},t)))]}),Object(T.jsx)("div",{className:"py-4"}),Object(T.jsx)(O.a,{className:"flex items-center justify-center text-primary",children:Object(T.jsxs)(y.a,{className:n.socialButton,children:[Object(T.jsx)(d.a,{children:"exit_to_app"}),Object(T.jsx)("h5",{className:"ml-8 text-primary font-medium mb-0",children:"Comenzar la pr\xf3xima sesi\xf3n"})]})}),Object(T.jsx)(O.a,{className:"flex items-center mt-2 justify-center text-primary",children:o?null:Object(T.jsx)(y.a,{fullWidth:!0,onClick:function(){console.log("Conectando con stripe",o),!1===o?v.a.push("/".concat(f.uid,"/connectFailedView")):void 0==o&&k.a.post("/t/".concat(f.uid,"/connect"),{email:f.email}).then((e=>{window.location.href=e.data.url}))},children:Object(T.jsx)("h5",{children:"Conectar con stripe"})})}),Object(T.jsx)("div",{className:"py-2"})]})]}),o?null:Object(T.jsx)(re,{}),u?null:Object(T.jsx)(je,{})]})};const xe=Object(u.a)((e=>{e.palette,Object(n.a)(e,["palette"]);return{headerBG:{height:345,"@media only screen and (max-width: 959px)":{height:400}}}}));t.default=Object(m.a)({},{withTheme:!0})((()=>{const e=Object(i.useState)(!0),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(S.a)().user,m=Object(j.a)(),u=xe(),p=Object(r.a)(m.breakpoints.down("sm")),x=Object(i.useState)(!0),O=Object(s.a)(x,2),g=O[0],f=O[1],v=Object(i.useState)(),y=Object(s.a)(v,2),N=y[0],w=y[1],C=Object(i.useState)(),z=Object(s.a)(C,2),R=z[0],L=z[1],I=Object(i.useState)(),_=Object(s.a)(I,2),E=_[0],M=_[1],D=Object(i.useState)(),P=Object(s.a)(D,2),B=P[0],V=(P[1],Object(i.useState)()),W=Object(s.a)(V,2),F=W[0],A=W[1],H=Object(i.useState)(4),$=Object(s.a)(H,2),U=$[0],J=$[1],K=()=>{n(!a)},q=()=>{J((e=>e-1))};return Object(i.useEffect)((()=>{n(!p)}),[p]),Object(i.useEffect)((()=>{console.log(U),0===U&&f(!1)}),[U]),Object(i.useEffect)((()=>{k.a.get("/t/".concat(c.uid,"/u")).then((e=>{console.log("OK: Usuarios obtenidos"),L(e.data),q()})),k.a.get("/t/".concat(c.uid,"/s/uncompleted")).then((e=>{console.log("OK: Sesiones obtenidas"),w(e.data),q()})),k.a.get("/t/".concat(c.uid,"/b")).then((e=>{console.log("OK: Blogs obtenidos"),M(e.data),q()})),k.a.get("/t/".concat(c.uid,"/image")).then((e=>{console.log("OK: Imagen obtenida"),A(e.data.url),q()}))}),[]),Object(T.jsx)("div",{className:"relative",children:Object(T.jsxs)(b.n,{children:[Object(T.jsxs)(b.m,{width:"300px",open:a,toggleSidenav:K,children:[Object(T.jsx)("div",{className:Object(h.default)("bg-primary text-right",u.headerBG),children:Object(T.jsx)(l.a,{smUp:!0,children:Object(T.jsx)(o.a,{onClick:K,children:Object(T.jsx)(d.a,{className:"text-white",children:"clear"})})})}),Object(T.jsx)(pe,{url:F,therapist:B,loading:g})]}),Object(T.jsxs)(b.o,{open:a,children:[Object(T.jsx)("div",{className:Object(h.default)("bg-primary",u.headerBG)}),Object(T.jsx)(G,{toggleSidenav:K,loading:g,users:R,blogs:E,sessions:N})]})]})})}))}}]);