(this.webpackJsonpiknelia=this.webpackJsonpiknelia||[]).push([[21],{1568:function(e,t,a){"use strict";var s=a(11),c=(a(0),a(439)),i=a(52),r=a(1348),n=a(2142),l=a(1480),o=a(4),d=a(64),b=a(1);const j=Object(c.a)((e=>{e.palette,Object(s.a)(e,["palette"]);return{footer:{minHeight:"var(--topbar-height)","@media (max-width: 499px)":{display:"table",width:"100%",minHeight:"auto",padding:"1rem 0","& .container":{flexDirection:"column !important","& a":{margin:"0 0 16px !important"}}}},appbar:{zIndex:96}}}));t.a=()=>{const e=j(),t=Object(i.a)(),a=Object(d.a)().settings,s=a.themes[a.footer.theme]||t;return Object(b.jsx)(r.a,{theme:s,children:Object(b.jsx)(n.a,{color:"primary",position:"fixed",className:e.appbar,children:Object(b.jsx)(l.a,{className:Object(o.default)("flex items-center",e.footer),children:Object(b.jsxs)("div",{className:"flex items-center container w-full",children:[Object(b.jsx)("span",{className:"m-auto"}),Object(b.jsxs)("p",{className:"m-0",children:["Desarrollado por"," ",Object(b.jsx)("a",{href:"https://github.com/lchrios/iknelia",children:"ChriVias Soft"})]})]})})})})}},1569:function(e,t,a){"use strict";a(0);var s=a(1348),c=a(52),i=a(64),r=a(1);t.a=({children:e})=>{const t=Object(c.a)(),a=Object(i.a)().settings,n=a.themes[a.layout1Settings.leftSidebar.theme]||t;return Object(r.jsx)(s.a,{theme:n,children:e})}},1570:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(40),c=a(2),i=a(0),r=a.n(i);function n(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),e?r.a.createElement(s.d,a,e.map((function(e,a){return r.a.createElement(s.b,{key:e.key||a,path:e.path,exact:e.exact,strict:e.strict,render:function(a){return e.render?e.render(Object(c.a)({},a,{},t,{route:e})):r.a.createElement(e.component,Object(c.a)({},a,t,{route:e}))}})}))):null}},1571:function(e,t,a){"use strict";var s=a(0),c=a(11),i=a(601),r=a(1347),n=a(1556),l=a(439),o=a(4),d=a(64),b=a(1);const j=Object(l.a)((e=>{e.palette,Object(c.a)(e,["palette"]);return{toggle:{position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}}}}));var m=()=>{const e=j(),t=Object(d.a)(),a=t.settings,s=t.updateSettings,c=()=>{s({secondarySidebar:{open:!a.secondarySidebar.open}})};return Object(b.jsxs)("div",{className:Object(o.default)({[e.toggle]:!0,open:a.secondarySidebar.open}),children:[a.secondarySidebar.open&&Object(b.jsx)(i.a,{onClick:c,size:"small","aria-label":"toggle",children:Object(b.jsx)(r.a,{children:"close"})}),!a.secondarySidebar.open&&Object(b.jsx)(n.a,{color:"primary","aria-label":"expand",className:"",onClick:c,children:Object(b.jsx)(r.a,{children:"settings"})})]})},h=a(5),u=a(14),p=a(1640),x=a(1686),O=a(1334),g=a(1303),f=a(2144),v=a(355),y=a.n(v),w=a(1973),S=a(9);var N=Object(S.a)((e=>({badge:{top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"}})))(w.a),k=a(1348);const C=Object(l.a)((e=>{let t=e.palette;Object(c.a)(e,["palette"]);return{label:{color:t.secondary.main,backgroundColor:t.primary.dark,fontWeight:700,transform:"rotate(90deg)",marginBottom:"2.5rem",padding:".25rem .5rem",borderRadius:"4px",cursor:"pointer",letterSpacing:"1.5px",fontSize:"1rem","&:hover, &.open":{backgroundColor:t.secondary.main,color:t.secondary.contrastText}},helpText:{margin:"0px .5rem 1rem"},maxCustomizer:{position:"fixed",top:0,right:0,zIndex:50},customizerCloseButton:{position:"absolute",right:8,top:8},layoutBox:{"&:hover":{"& .layout-name":{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"rgba(0,0,0,0.3)",zIndex:12}}}}})),z=[{name:"Light Sidebar",thumbnail:"/assets/images/screenshots/layout1-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"whiteBlue",bgOpacity:.98},topbar:{theme:"blueDark",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Compact Sidebar",thumbnail:"/assets/images/screenshots/layout5-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"compact",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"whiteBlue",fixed:!0}}}},{name:"Dark Sidebar",thumbnail:"/assets/images/screenshots/layout1-blue-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"blueDark",fixed:!0}}}},{name:"Dark Theme",thumbnail:"/assets/images/screenshots/layout3-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"purpleDark1",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"purpleDark1",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Horizontal Navigation",thumbnail:"/assets/images/screenshots/layout4-customizer.png",isPro:!0,options:{activeLayout:"layout2",activeTheme:"purple1",layout2Settings:{mode:"full"},footer:{theme:"slateDark1"}}}];var I=e=>{const t=Object(s.useState)(!1),a=Object(u.a)(t,2),c=a[0],n=a[1],l=Object(s.useState)(0),j=Object(u.a)(l,2),m=j[0],v=j[1],w=C(),S=Object(d.a)(),I=S.settings,D=S.updateSettings,_=()=>{n(!c)},L=e=>{v(e)};let R=Object(h.a)({},I.themes[I.activeTheme]);return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(p.a,{title:"Theme Settings",placement:"left",children:Object(b.jsx)("span",{className:Object(o.default)({[w.label]:!0,open:c}),onClick:_,children:"DEMOS"})}),Object(b.jsx)(k.a,{theme:R,children:Object(b.jsx)(x.a,{anchor:"right",open:c,variant:"temporary",onClose:_,ModalProps:{keepMounted:!0},children:Object(b.jsxs)("div",{className:Object(o.default)("flex-column w-320 pb-8 elevation-z12 h-full-screen bg-default",w.maxCustomizer),children:[Object(b.jsxs)("div",{className:"flex items-center px-5 py-4 mb-4 min-h-64 elevation-z6",children:[Object(b.jsx)(r.a,{color:"primary",children:"settings"}),Object(b.jsx)("h5",{className:"mb-0 ml-2",children:"Theme Settings"}),Object(b.jsx)(i.a,{onClick:_,className:w.customizerCloseButton,children:Object(b.jsx)(r.a,{children:"close"})})]}),Object(b.jsxs)("div",{className:"px-6 mb-4 flex",children:[Object(b.jsx)(O.a,{variant:"outlined",color:0===m?"secondary":"primary",onClick:()=>L(0),className:"mr-4",children:"Demos"}),Object(b.jsx)(O.a,{variant:"outlined",color:1===m?"secondary":"primary",onClick:()=>L(1),children:"Settings"})]}),Object(b.jsxs)(y.a,{options:{suppressScrollX:!0},className:"px-4",children:[0===m&&Object(b.jsxs)("div",{className:"mb-8 mx-2",children:[Object(b.jsx)("div",{className:"text-muted",children:"Layouts"}),Object(b.jsx)("div",{className:"flex-column",children:z.map((e=>Object(b.jsx)(N,{color:"secondary",className:Object(o.default)("w-full my-3 max-h-152 cursor-pointer",w.layoutBox),badgeContent:"Pro",invisible:!e.isPro,children:Object(b.jsxs)(g.a,{className:"relative",onClick:()=>D(e.options),elevation:4,children:[Object(b.jsx)("div",{className:"layout-name hidden",children:Object(b.jsx)(O.a,{variant:"contained",color:"secondary",children:e.name})}),Object(b.jsx)("img",{className:"w-full",src:e.thumbnail,alt:e.name})]})},e.name)))})]}),1===m&&Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:w.helpText,children:["We used React context API to control layout. Check out the"," ",Object(b.jsx)(f.a,{href:"http://demos.ui-lib.com/matx-react-doc/layout.html",target:"_blank",children:"Documentation"})]})})]})]})})})]})},D=a(228),_=a(95),L=a(40),R=a(51);const T=Object(l.a)((e=>{e.palette,Object(c.a)(e,["palette"]);return{miniCart:{width:"var(--sidenav-width)","& .cart__topbar":{height:"var(--topbar-height)"},"& .mini-cart__item":{transition:"background 300ms ease","&:hover":{background:"rgba(0,0,0,0.01)"}}}}}));let P=!1;var B=function({container:e}){const t=Object(s.useState)(0),a=Object(u.a)(t,2),c=a[0],n=a[1],l=Object(s.useState)(!1),j=Object(u.a)(l,2),m=j[0],h=j[1],p=T(),g=Object(D.b)(),f=Object(L.g)(),v=Object(R.a)().user,y=Object(D.c)((e=>e.ecommerce)).cartList,S=Object(d.a)().settings;P||(g(Object(_.j)(v.id)),P=!0);const N=()=>{h(!m)};return Object(s.useEffect)((()=>{let e=0;y.forEach((t=>{e+=t.price*t.amount})),n(e)}),[y]),Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(i.a,{onClick:N,children:Object(b.jsx)(w.a,{color:"secondary",badgeContent:y.length,children:Object(b.jsx)(r.a,{children:"shopping_cart"})})}),Object(b.jsx)(k.a,{theme:S.themes[S.activeTheme],children:Object(b.jsx)(x.a,{container:e,variant:"temporary",anchor:"right",open:m,onClose:N,ModalProps:{keepMounted:!0},children:Object(b.jsxs)("div",{className:Object(o.default)("flex-column h-full",p.miniCart),children:[Object(b.jsxs)("div",{className:"cart__topbar elevation-z6 flex items-center p-1 mb-2 pl-4",children:[Object(b.jsx)(r.a,{color:"primary",children:"shopping_cart"}),Object(b.jsx)("h5",{className:"ml-2 my-0 font-medium",children:"Cart"})]}),Object(b.jsx)("div",{className:"flex-grow overflow-auto",children:y.map((e=>Object(b.jsxs)("div",{className:"mini-cart__item flex items-center py-2 px-2",children:[Object(b.jsxs)("div",{className:"flex flex-column mr-1",children:[Object(b.jsx)(i.a,{size:"small",onClick:()=>g(Object(_.k)(v.id,e.id,e.amount+1)),children:Object(b.jsx)(r.a,{className:"cursor-pointer",children:"keyboard_arrow_up"})}),Object(b.jsx)(i.a,{disabled:!(e.amount-1),size:"small",onClick:()=>g(Object(_.k)(v.id,e.id,e.amount-1)),children:Object(b.jsx)(r.a,{className:"cursor-pointer",children:"keyboard_arrow_down"})})]}),Object(b.jsx)("div",{className:"mr-2",children:Object(b.jsx)("img",{className:"w-48",src:e.imgUrl,alt:e.title})}),Object(b.jsxs)("div",{className:"mr-2 text-center flex-grow flex-column",children:[Object(b.jsx)("h6",{className:"m-0 mb-1 ellipsis w-120",children:e.title}),Object(b.jsxs)("small",{className:"text-muted",children:["$",e.price," x ",e.amount]})]}),Object(b.jsx)(i.a,{size:"small",onClick:()=>g(Object(_.i)(v.userId,e.id)),children:Object(b.jsx)(r.a,{fontSize:"small",children:"clear"})})]},e.id)))}),Object(b.jsxs)(O.a,{className:"w-full border-radius-0",variant:"contained",color:"primary",onClick:()=>{c>0&&(f.push("/ecommerce/checkout"),h(!1))},children:["Checkout ($",c.toFixed(2),")"]})]})})})]})},M=a(111);const E=Object(l.a)((e=>{let t=e.palette;return{root:{position:"fixed",height:"100vh",width:e=>e.width,right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:Object(c.a)(e,["palette"]).shadows[8],backgroundColor:t.primary.main,zIndex:98,transition:"all 0.15s ease"},"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:e=>e.width},".matx-customizer":{right:e=>e.width}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:e=>"calc(100% - ".concat(e.width,")")}}}}}));var H=()=>{const e=E({width:"50px"});return Object(b.jsxs)("div",{className:Object(o.default)("secondary-sidebar",e.root),children:[Object(b.jsx)("span",{className:"m-auto"}),Object(b.jsx)(I,{}),Object(b.jsx)(B,{}),Object(b.jsx)(M.c,{icon:Object(b.jsx)(i.a,{className:"my-3",size:"small",children:Object(b.jsx)(r.a,{children:"comments"})}),children:Object(b.jsx)(M.d,{})}),Object(b.jsx)("span",{className:"m-auto"})]})};var W=({theme:e,classes:t,children:a,open:s})=>Object(b.jsx)(k.a,{theme:e,children:a});t.a=()=>{const e=Object(d.a)().settings,t=e.themes[e.secondarySidebar.theme];return Object(b.jsxs)(W,{theme:t,children:[e.secondarySidebar.open&&Object(b.jsx)(H,{}),Object(b.jsx)(m,{})]})}},1574:function(e,t,a){"use strict";var s=a(5),c=a(11),i=a(0),r=a.n(i),n=a(439),l=a(52),o=a(355),d=a.n(o),b=a(357),j=a(111),m=a(4),h=a(64),u=a(601),p=a(1347),x=a(1);const O=Object(n.a)((e=>{e.palette;return{scrollable:{paddingLeft:20,paddingRight:20},sidenavMobileOverlay:{position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",background:"rgba(0, 0, 0, 0.54)",zIndex:-1,[Object(c.a)(e,["palette"]).breakpoints.up("lg")]:{display:"none"}}}}));var g=({children:e})=>{const t=O(),a=Object(h.a)(),c=a.settings,r=a.updateSettings;return Object(x.jsxs)(i.Fragment,{children:[Object(x.jsxs)(d.a,{options:{suppressScrollX:!0},className:Object(m.default)("relative px-4",t.scrollable),children:[e,Object(x.jsx)(u.a,{children:Object(x.jsx)(p.a,{children:"clear"})}),Object(x.jsx)(j.s,{items:b.a})]}),Object(x.jsx)("div",{onClick:()=>(e=>{let t=c.activeLayout+"Settings",a=c[t];r(Object(s.a)(Object(s.a)({},c),{},{[t]:Object(s.a)(Object(s.a)({},a),{},{leftSidebar:Object(s.a)(Object(s.a)({},a.leftSidebar),e)})}))})({mode:"close"}),className:t.sidenavMobileOverlay})]})},f=a(365),v=a(1365),y=a(2145),w=a(127);const S=Object(n.a)((e=>{let t=e.palette,a=Object(c.a)(e,["palette"]);return{sidenav:({width:e,primaryRGB:s,bgImgURL:c})=>({position:"fixed",top:0,left:0,height:"100vh",width:e,boxShadow:a.shadows[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.text.primary,transition:"all 250ms ease-in-out",backgroundImage:"linear-gradient(to bottom, rgba(".concat(s,", 0.96), rgba(").concat(s,", 0.96)), url(").concat(c,")"),"&:hover":{width:"var(--sidenav-width)","& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}),hideOnCompact:{display:"none"},userInfo:{}}})),N=()=>{const e=Object(l.a)(),t=Object(h.a)(),a=t.settings,c=t.updateSettings,i=a.layout1Settings.leftSidebar,r=i.mode,n=Object(w.b)(e.palette.primary.main),o=S(Object(s.a)(Object(s.a)({},i),{},{width:(()=>{switch(r){case"compact":return"var(--sidenav-compact-width)";default:return"var(--sidenav-width)"}})(),primaryRGB:n}));return Object(x.jsx)("div",{className:o.sidenav,children:Object(x.jsxs)("div",{className:"flex-column relative h-full",children:[Object(x.jsx)(f.b,{children:Object(x.jsx)(v.a,{smDown:!0,children:Object(x.jsx)(y.a,{onChange:()=>{var e;e={mode:"compact"===r?"full":"compact"},c({layout1Settings:{leftSidebar:Object(s.a)({},e)}})},checked:"full"!==i.mode,color:"secondary",size:"small"})})}),Object(x.jsx)(g,{})]})})};t.a=r.a.memo(N)},2167:function(e,t,a){"use strict";a.r(t);var s=a(11),c=a(0),i=a.n(c),r=a(1348),n=a(1289),l=a(355),o=a.n(l),d=a(1570),b=a(5),j=a(601),m=a(1347),h=a(1365),u=a(1367),p=a(1437),x=a(111),O=a(35),g=a(439),f=a(52),v=a(4),y=a(51),w=a(64),S=a(1);const N=Object(g.a)((e=>{let t=e.palette,a=Object(s.a)(e,["palette"]);return{topbar:{top:0,zIndex:96,transition:"all 0.3s ease",background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))","& .topbar-hold":{backgroundColor:t.primary.main,height:80,paddingLeft:18,paddingRight:20,[a.breakpoints.down("sm")]:{paddingLeft:16,paddingRight:16},[a.breakpoints.down("xs")]:{paddingLeft:14,paddingRight:16}},"& .fixed":{boxShadow:a.shadows[8],height:64}},userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}})),k=()=>{var e,t;const a=Object(f.a)(),s=N(),c=Object(w.a)(),i=c.settings,r=c.updateSettings,l=Object(y.a)(),o=l.logout,d=l.user,g=Object(n.a)(a.breakpoints.down("md")),k=null===i||void 0===i||null===(e=i.layout1Settings)||void 0===e||null===(t=e.topbar)||void 0===t?void 0:t.fixed;return Object(S.jsx)("div",{className:s.topbar,children:Object(S.jsx)("div",{className:Object(v.default)({"topbar-hold":!0,fixed:k}),children:Object(S.jsxs)("div",{className:"flex justify-between items-center h-full",children:[Object(S.jsx)("div",{className:"flex",children:Object(S.jsx)(j.a,{onClick:()=>{let e,t=i.layout1Settings;var a;e=g?"close"===t.leftSidebar.mode?"mobile":"close":"full"===t.leftSidebar.mode?"close":"full",a={mode:e},r({layout1Settings:{leftSidebar:Object(b.a)({},a)}})},className:"hide-on-pc",children:Object(S.jsx)(m.a,{children:"menu"})})}),Object(S.jsx)("div",{className:"flex items-center",children:Object(S.jsxs)(x.k,{menuButton:Object(S.jsxs)("div",{className:s.userMenu,children:[Object(S.jsx)(h.a,{xsDown:!0,children:Object(S.jsxs)("span",{children:["Hi ",Object(S.jsx)("strong",{children:d.name})]})}),Object(S.jsx)(u.a,{className:"cursor-pointer",src:d.avatar})]}),children:[Object(S.jsx)(p.a,{children:Object(S.jsxs)(O.b,{className:s.menuItem,to:"/",children:[Object(S.jsx)(m.a,{children:" home "}),Object(S.jsx)("span",{className:"pl-4",children:" Home "})]})}),Object(S.jsx)(p.a,{children:Object(S.jsxs)(O.b,{className:s.menuItem,to:"/page-layouts/user-profile",children:[Object(S.jsx)(m.a,{children:" person "}),Object(S.jsx)("span",{className:"pl-4",children:" Profile "})]})}),Object(S.jsxs)(p.a,{className:s.menuItem,children:[Object(S.jsx)(m.a,{children:" settings "}),Object(S.jsx)("span",{className:"pl-4",children:" Settings "})]}),Object(S.jsxs)(p.a,{onClick:o,className:s.menuItem,children:[Object(S.jsx)(m.a,{children:" power_settings_new "}),Object(S.jsx)("span",{className:"pl-4",children:" Logout "})]})]})})]})})})};var C=i.a.memo(k),z=a(1574),I=a(1568),D=a(1571),_=a(195),L=a(1569);const R=Object(g.a)((e=>{e.palette;let t=Object(s.a)(e,["palette"]);return{contentWrap:({width:e,secondarySidebar:a})=>({verticalAlign:"top",marginLeft:e,transition:"all 0.3s ease",[t.breakpoints.up("sm")]:{marginRight:a.open?50:0}}),topbar:{top:0,zIndex:96,background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))",transition:"all 0.3s ease"}}})),T=()=>{const e=Object(w.a)(),t=e.settings,a=e.updateSettings,s=t.layout1Settings,i=t.secondarySidebar,l=s.leftSidebar,b=l.mode,j=l.show,m=Object(c.useContext)(_.a).routes,h=(()=>{switch(b){case"full":return"var(--sidenav-width)";case"compact":return"var(--sidenav-compact-width)";default:return"0px"}})();let u=R({width:h,secondarySidebar:i});const p=Object(f.a)(),O=Object(n.a)(p.breakpoints.down("md")),g=Object(c.useRef)({isMdScreen:O,settings:t}),y=t.themes[s.topbar.theme],N="theme-".concat(p.palette.type," flex");return Object(c.useEffect)((()=>{let e=g.current.settings,t=e.layout1Settings.leftSidebar.mode;if(e.layout1Settings.leftSidebar.show){a({layout1Settings:{leftSidebar:{mode:O?"close":t}}})}}),[O]),Object(S.jsxs)("div",{className:Object(v.default)("bg-default",N),children:[j&&"close"!==b&&Object(S.jsx)(L.a,{children:Object(S.jsx)(z.a,{})}),Object(S.jsxs)("div",{className:Object(v.default)("flex-grow flex-column relative overflow-hidden h-full-screen",u.contentWrap),children:[s.topbar.show&&s.topbar.fixed&&Object(S.jsx)(r.a,{theme:y,children:Object(S.jsx)(C,{fixed:!0,className:"elevation-z8"})}),t.perfectScrollbar&&Object(S.jsxs)(o.a,{className:"flex-grow flex-column relative h-full",children:[s.topbar.show&&!s.topbar.fixed&&Object(S.jsx)(r.a,{theme:y,children:Object(S.jsx)(C,{})}),Object(S.jsx)("div",{className:"relative flex-grow",children:Object(S.jsx)(x.p,{children:Object(d.a)(m)})}),t.footer.show&&!t.footer.fixed&&Object(S.jsx)(I.a,{})]}),!t.perfectScrollbar&&Object(S.jsxs)("div",{className:"flex-grow flex-column relative h-full scroll-y",children:[s.topbar.show&&!s.topbar.fixed&&Object(S.jsx)(r.a,{theme:y,children:Object(S.jsx)(C,{})}),Object(S.jsx)("div",{className:"relative flex-grow",children:Object(S.jsx)(x.p,{children:Object(d.a)(m)})}),t.footer.show&&!t.footer.fixed&&Object(S.jsx)(I.a,{})]}),t.footer.show&&t.footer.fixed&&Object(S.jsx)(I.a,{})]}),t.secondarySidebar.show&&Object(S.jsx)(D.a,{})]})};t.default=i.a.memo(T)}}]);