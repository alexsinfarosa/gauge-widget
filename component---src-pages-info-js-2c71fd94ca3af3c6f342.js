(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{334:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(394),o=a(396),s=a(426),l=a(375),c=a(311),d=a(856),u=a(412),f=a(138),p=Object(l.a)(function(e){return{li:{fontSize:"0.8rem",listStyle:"square"},a:{color:e.palette.secondary.main}}});function h(){var e=p();return r.a.useContext(f.b).loading?r.a.createElement(u.a,null):r.a.createElement(d.a,{px:2},r.a.createElement(c.a,{variant:"h6"},r.a.createElement(d.a,{mb:4,color:"secondary.dark",fontWeight:500},"Welcome to the Cornell University Northeast Regional Climate Center’s Lawn Irrigation App!")),r.a.createElement(c.a,{paragraph:!0,align:"justify"},"The Lawn Irrigation App was developed with support from New York American Water to help customers water their lawns efficiently and effectively. It uses local climate data to let you know how much water your lawn needs based on your location and recent weather patterns. It is designed to help you:"),r.a.createElement(c.a,{component:"div",gutterBottom:!0,align:"justify"},r.a.createElement("ul",null,r.a.createElement("li",{className:e.li},"Give your lawn just the water it needs based on recent weather patterns specific to your location"),r.a.createElement("li",{className:e.li},"Avoid overwatering your lawn – which can be a bigger cause of problems than under-watering"),r.a.createElement("li",{className:e.li},"Contribute to a sustainable water supply for Long Island"),r.a.createElement("li",{className:e.li},"Save you money on your water bill."))),r.a.createElement(c.a,{paragraph:!0,align:"justify"},"For more water saving tips, tools, and special offers for New York American Water customers please check out our H2O Control Toolbox"," ",r.a.createElement("a",{href:"https://amwater.com/nyaw/conservation",target:"_blank",rel:"noopener noreferrer",className:e.a},"H2O Control Toolbox"),"."),r.a.createElement(c.a,{paragraph:!0,align:"justify"},"You provide the app with your address and some basic information about your irrigation system and watering habits and we do the rest! The app considers the following factors:"),r.a.createElement(c.a,{component:"div",gutterBottom:!0,align:"justify"},r.a.createElement("ul",null,r.a.createElement("li",{className:e.li},"Evapotranspiration"),r.a.createElement("li",{className:e.li},"Recent local rainfall"),r.a.createElement("li",{className:e.li},"How much watering you’ve done recently"),r.a.createElement("li",{className:e.li},"The local short-term weather forecast"))),r.a.createElement(c.a,{paragraph:!0,align:"justify"},"The app then makes a data-driven recommendation on whether you should water your lawn in the coming few days. If you indicate that the Nassau County Irrigation ordinance applies to you the app will make recommendations consistent with the ordinance. The app uses the information you provide but neither NRCC nor New York American Water collects any data about you, or your lawn so you can rest assured that your privacy is protected."),r.a.createElement(c.a,{paragraph:!0,align:"justify"},"Please note that the app assumes you have a well-designed irrigation system that provides uniform coverage without any leaks in the system. It’s important to keep your system well-maintained. We recommend you check that your system is functioning correctly, at least annually and with the help of a professional irrigation contractor."))}var m=a(365),g=(a(186),a(656)),b=a(137),y=a(479),w=a.n(y),v=a(398),E=Object(v.b)(w.a).withConfig({displayName:"image__StyledImg",componentId:"sc-1dp3e9-0"})([""]);var x=function(e){return r.a.createElement(b.b,{query:"2395177629",render:function(t){var a,n=t.images;return a=n.edges.find(function(t){return t.node.publicURL===e.src}),r.a.createElement(E,{fluid:a.node.childImageSharp.fluid})},data:g})},A=a(657),S=a.n(A),O=a(658),j=a.n(O);function I(){var e=Object(m.a)();return r.a.createElement(d.a,{px:2},r.a.createElement(d.a,{mb:5,mt:2},r.a.createElement(c.a,{variant:"subtitle2",align:"justify"},"The Lawn page provides the main functionalities of the app. Let's break down from top to bottom the various sections.")),r.a.createElement(d.a,{mb:3},r.a.createElement(c.a,{variant:"h6",color:"secondary",style:{borderBottom:"1px solid "+e.palette.secondary.main}},"Top Bar")),r.a.createElement(d.a,{maxWidth:"70%",m:"auto",mb:3},r.a.createElement(d.a,{bgcolor:e.palette.background.deficit,color:"white",p:1,textAlign:"center"},r.a.createElement(c.a,null,"Water!"))),r.a.createElement(d.a,{mb:5},r.a.createElement(c.a,{align:"justify"},"The bar displays today's water recommendation message. It informs the user to water (orange) or not (blue) their lawn.")),r.a.createElement(d.a,{mb:3},r.a.createElement(c.a,{variant:"h6",color:"secondary",style:{borderBottom:"1px solid "+e.palette.secondary.main}},"Address")),r.a.createElement(d.a,{maxWidth:"90%",m:"auto",mb:3},r.a.createElement(c.a,{align:"center",color:"textSecondary"},"133 N Main St, Freeport, NY, USA")),r.a.createElement(d.a,{mb:5},r.a.createElement(c.a,{paragraph:!0,align:"justify"},"Next, we find the address. This is the address provided by the user. It is required to obtain weather related data.")),r.a.createElement(d.a,{mb:3},r.a.createElement(c.a,{variant:"h6",color:"secondary",style:{borderBottom:"1px solid "+e.palette.secondary.main}},"Graph")),r.a.createElement(d.a,{m:"auto",mb:3},r.a.createElement(x,{src:S.a})),r.a.createElement(c.a,{paragraph:!0,align:"justify"},"We arrive then at the graph. In the example above, the blue bar going to the right of the graph indicates no water defict, hence on 04/13, the user should not water the lawn."),r.a.createElement(c.a,{paragraph:!0,align:"justify"},"The orange bar going to the left of the graph warns the user of a water deficit. In this case, on 04/12, the user should follow the app's recommendation and water their lawn."),r.a.createElement(d.a,{mb:5},r.a.createElement(c.a,{paragraph:!0,align:"justify"},"Users can tap on any of the water droplet icons on the right side of the graph. When tapping an icon, which turns into blue, the user tells the app that the lawn was watered that day, which triggers the app to recalculate the daily deficits. The user can also undo the action by tapping the icon again which makes it grey.")),r.a.createElement(d.a,{mb:3},r.a.createElement(c.a,{variant:"h6",color:"secondary",style:{borderBottom:"1px solid "+e.palette.secondary.main}},"Using Forecast Data to Calculate Current Date Deficit")),r.a.createElement(d.a,{m:"auto",mb:6},r.a.createElement(x,{src:j.a})),r.a.createElement(c.a,{paragraph:!0,align:"justify"},"In the above graph, the user is advised not to water on the current date (TODAY), despite the graph indicating a water deficit."),r.a.createElement(c.a,{paragraph:!0,align:"justify"},"The reason being that the calculation of the water deficit for the current date includes forecast data, rainfall. In fact, from the graph we see that there is a high probability of rainfall for the next day."),r.a.createElement(c.a,{paragraph:!0,align:"justify"},"Because of the high probability, the rainfall is accounted into the calculation of the current date's deficit. As a result of that the app now suggests to the user not to water the lawn, allowing water conservation."),r.a.createElement(c.a,{paragraph:!0,align:"justify"},r.a.createElement("b",null,"Note:")," For users following the"," ",r.a.createElement("b",null,"Nassau Even/Odd Water Ordinance"),", the app will use forecast data for the day after tomorrow instead to determine the current date deficit since they are allowed to water only every other day."),r.a.createElement(d.a,{mb:6}))}var T=a(374),k=a(372),C=a(392),z=a(388),N=Object(l.a)(function(e){return{tabs:{height:80,background:e.palette.background.default}}});t.default=function(){var e=N(),t=r.a.useContext(f.b),a=t.countRef,n=t.setCountRef,l=r.a.useState(1),c=l[0],d=l[1];return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Info Page"}),r.a.createElement(T.a,{value:c,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){d(t)},centered:!0,className:e.tabs},r.a.createElement(k.a,{disabled:0===a,style:{paddingRight:48,paddingLeft:48},label:"About",icon:r.a.createElement(C.a,{icon:["fal","info"],size:"lg"})}),r.a.createElement(k.a,{style:{paddingRight:48,paddingLeft:48},label:"How it works?",icon:r.a.createElement(C.a,{icon:["fal","question-circle"],size:"lg"})})),0===c&&r.a.createElement(z.b,null,r.a.createElement(h,null)),1===c&&r.a.createElement(z.b,null,r.a.createElement(I,null)),0===a?r.a.createElement(z.e,{to:"/lawn/",onClick:function(){n(a+1)},style:{width:250,padding:24,textAlign:"center",margin:"auto"}},"OK"):r.a.createElement(s.a,null))}},388:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return c}),a.d(t,"e",function(){return d}),a.d(t,"d",function(){return u});var n=a(398),r=a(137),i=a(81),o=a.n(i),s=n.b.div.withConfig({displayName:"sharedComponents__GridContainer",componentId:"sc-1xmki40-0"})(["display:grid;height:100vh;grid-template-rows:60px auto 80px;padding-left:16px;padding-right:16px;"]),l=n.b.div.withConfig({displayName:"sharedComponents__MainContainer",componentId:"sc-1xmki40-1"})(["display:flex;flex-direction:column;height:calc(100vh - 80px);overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{width:0;height:0;}padding-top:16px;"]),c=n.b.div.withConfig({displayName:"sharedComponents__InfoContainer",componentId:"sc-1xmki40-2"})(["display:flex;flex-direction:column;height:calc(100vh - 160px);overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{width:0;height:0;}padding-top:16px;"]),d=Object(n.b)(r.a).withConfig({displayName:"sharedComponents__StyledLink",componentId:"sc-1xmki40-3"})(["text-decoration:none;padding:24px 80px;border:1px solid ",";border-radius:50px;text-transform:uppercase;background:#ffffff;display:block;font-size:1.1rem;font-family:roboto;color:",';::after{content:" →";}:hover{color:#fff;background:',";transition:all 0.2s ease 0s;}"],o.a[300],o.a[300],o.a[500]),u=Object(n.b)(r.a).withConfig({displayName:"sharedComponents__StyledButton",componentId:"sc-1xmki40-4"})(["height:80px;text-decoration:none;padding:24px 80px;border-top-left-radius:16px;border-top-right-radius:16px;text-transform:uppercase;background:",";color:#fff;text-align:center;width:100%;display:block;font-size:1.1rem;font-family:roboto;letter-spacing:1px;line-height:10px;",'::after{content:" →";}:hover{color:#fff;background:',";transition:all 0.3s ease 0s;","}"],o.a[300],function(e){return e.disabled&&Object(n.a)(["background:#fafafa;color:rgba(0,0,0,0.67);"])},o.a[500],function(e){return e.disabled&&Object(n.a)(["cursor:default;background:#fafafa;color:rgba(0,0,0,0.67);"])})},392:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return w});var n=a(140),r=a(5),i=a.n(r),o=a(0),s=a.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){c(e,t,a[t])})}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var h,m=(function(e){var t,a,n,r,i,o,s,l,c,d,u,f,h,m,g;t=p,a=function(e,t,n){if(!l(t)||d(t)||u(t)||f(t)||s(t))return t;var r,i=0,o=0;if(c(t))for(r=[],o=t.length;i<o;i++)r.push(a(e,t[i],n));else for(var p in r={},t)Object.prototype.hasOwnProperty.call(t,p)&&(r[e(p,n)]=a(e,t[p],n));return r},n=function(e){return h(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)},r=function(e){var t=n(e);return t.substr(0,1).toUpperCase()+t.substr(1)},i=function(e,t){return function(e,t){var a=(t=t||{}).separator||"_",n=t.split||/(?=[A-Z])/;return e.split(n).join(a)}(e,t).toLowerCase()},o=Object.prototype.toString,s=function(e){return"function"==typeof e},l=function(e){return e===Object(e)},c=function(e){return"[object Array]"==o.call(e)},d=function(e){return"[object Date]"==o.call(e)},u=function(e){return"[object RegExp]"==o.call(e)},f=function(e){return"[object Boolean]"==o.call(e)},h=function(e){return(e-=0)==e},m=function(e,t){var a=t&&"process"in t?t.process:t;return"function"!=typeof a?e:function(t,n){return a(t,e,n)}},g={camelize:n,decamelize:i,pascalize:r,depascalize:i,camelizeKeys:function(e,t){return a(m(n,t),e)},decamelizeKeys:function(e,t){return a(m(i,t),e,t)},pascalizeKeys:function(e,t){return a(m(r,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}},e.exports?e.exports=g:t.humps=g}(h={exports:{}},h.exports),h.exports);var g=!1;try{g=!0}catch(E){}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function y(e){return null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function w(e){var t=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,s=y(t),l=b("classes",[].concat(f(function(e){var t,a=(c(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},"fa-".concat(e.size),null!==e.size),c(t,"fa-rotate-".concat(e.rotation),null!==e.rotation),c(t,"fa-pull-".concat(e.pull),null!==e.pull),t);return Object.keys(a).map(function(e){return a[e]?e:null}).filter(function(e){return e})}(e)),f(i.split(" ")))),u=b("transform","string"==typeof e.transform?n.c.transform(e.transform):e.transform),p=b("mask",y(a)),h=Object(n.a)(s,d({},l,u,p,{symbol:r,title:o}));if(!h)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",s),null;var m=h.abstract,E={};return Object.keys(e).forEach(function(t){w.defaultProps.hasOwnProperty(t)||(E[t]=e[t])}),v(m[0],E)}w.displayName="FontAwesomeIcon",w.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object])},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var v=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var r=(a.children||[]).map(function(a){return e(t,a)}),i=Object.keys(a.attributes||{}).reduce(function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var a,n=t.indexOf(":"),r=m.camelize(t.slice(0,n)),i=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=i:e[r]=i,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m.camelize(t)]=n}return e},{attrs:{}}),o=n.style,s=void 0===o?{}:o,l=u(n,["style"]);return i.attrs.style=d({},i.attrs.style,s),t.apply(void 0,[a.tag,d({},i.attrs,l)].concat(f(r)))}.bind(null,s.a.createElement)}).call(this,a(61))},394:function(e,t,a){"use strict";var n=a(395),r=a(0),i=a.n(r),o=a(5),s=a.n(o),l=a(137),c=a(631),d=(a(422),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(c.a,{maxWidth:"sm",style:{padding:0}},t)},data:n})});d.propTypes={children:s.a.node.isRequired},t.a=d},395:function(e){e.exports={data:{site:{siteMetadata:{title:"Lawn Irrigation Tool"}}}}},396:function(e,t,a){"use strict";var n=a(397),r=a(0),i=a.n(r),o=a(5),s=a.n(o),l=a(139),c=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},397:function(e){e.exports={data:{site:{siteMetadata:{title:"Lawn Irrigation Tool",description:"Lawn irrigation tool",author:"Alex Sinfarosa - @alexsinfarosa"}}}}},412:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),r=a.n(n),i=a(448),o=a.n(i),s=a(365),l=a(856);function c(){var e=Object(s.a)();return r.a.createElement(l.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},r.a.createElement(o.a,{color:e.palette.primary.main}))}},426:function(e,t,a){"use strict";a(185);var n=a(0),r=a.n(n),i=a(137),o=a(398),s=a(311),l=a(392),c=a(427),d=o.b.nav.withConfig({displayName:"navigation__Nav",componentId:"sc-1pcvvnt-0"})(["display:flex;justify-content:space-between;align-items:flex-start;background:#fafafa;height:80px;padding:8px 16px;width:100%;"]),u=Object(o.b)(i.a).withConfig({displayName:"navigation__LinkStyled",componentId:"sc-1pcvvnt-1"})(["color:rgba(0,0,0,0.65);text-decoration:none;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:0.9rem;"]),f={color:"#556cd6"};t.a=function(){var e=c.window.location.pathname.split("/"),t=e[e.length-2];return r.a.createElement(d,null,r.a.createElement(u,{to:"/info/",activeStyle:f},r.a.createElement(l.a,{icon:["info"===t?"fa":"fal","info-circle"],size:"lg"}),r.a.createElement(s.a,{variant:"caption"},"Info")),r.a.createElement(u,{to:"/lawn/",activeStyle:f},r.a.createElement(l.a,{icon:["lawn"===t?"fa":"fal","home"],size:"lg"}),r.a.createElement(s.a,{variant:"caption"},"Recommendation")),r.a.createElement(u,{to:"/forecast/",activeStyle:f},r.a.createElement(l.a,{icon:["forecast"===t?"fa":"fal","cloud"],size:"lg"}),r.a.createElement(s.a,{variant:"caption"},"Forecast")),r.a.createElement(u,{to:"/lawns/",activeStyle:f},r.a.createElement(l.a,{icon:["lawns"===t?"fa":"fal","th-list"],size:"lg"}),r.a.createElement(s.a,{variant:"caption"},"Lawns")))}},427:function(e,t,a){"use strict";var n=a(428),r=n.Nothing,i=n.isNothing,o="undefined"!=typeof window?window:r,s="undefined"!=typeof document?document:r;e.exports.window=o,e.exports.document=s,e.exports.exists=function(e){return!i(e)}},428:function(e,t,a){"use strict";a.r(t),a.d(t,"Nothing",function(){return r}),a.d(t,"toBool",function(){return i}),a.d(t,"isNothing",function(){return o}),a.d(t,"isSomething",function(){return s}),a.d(t,"serialize",function(){return l}),a.d(t,"deserialize",function(){return c});var n,r=((n=function(){return r}).toString=n.toLocaleString=n[Symbol.toPrimitive]=function(){return""},n.valueOf=function(){return!1},new Proxy(Object.freeze(n),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:r}})),i=function(e){return!(!e||!e.valueOf())},o=function(e){return e===r},s=function(e){return!(e===r||null==e)},l=function(e){return JSON.stringify(e,function(e,t){return t===r?null:t})},c=function(e){return JSON.parse(e,function(e,t){return null===t?r:t})}},479:function(e,t,a){"use strict";var n=a(37);t.__esModule=!0,t.default=void 0;var r,i=n(a(34)),o=n(a(21)),s=n(a(142)),l=n(a(1)),c=n(a(0)),d=n(a(5)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var m=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+o+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},u,{onLoad:o,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,w=e.Tag,v=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,x=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,l.default)({opacity:E?1:0,transition:x?"opacity 0.5s":"none"},s),S="boolean"==typeof y?"lightgray":y,O={transitionDelay:"0.5s"},j=(0,l.default)({opacity:this.state.imgLoaded?0:1},x&&O,s,f),I={title:t,alt:this.state.isVisible?"":a,style:j,className:p};if(h){var T=h;return c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),S&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&O)}),T.base64&&c.default.createElement(b,(0,l.default)({src:T.base64},I)),T.tracedSVG&&c.default.createElement(b,(0,l.default)({src:T.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,T.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},T))}}))}if(m){var k=m,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete C.display,c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},S&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:S,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},x&&O)}),k.base64&&c.default.createElement(b,(0,l.default)({src:k.base64},I)),k.tracedSVG&&c.default.createElement(b,(0,l.default)({src:k.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(b,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},k))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=y;t.default=E},656:function(e){e.exports={data:{images:{edges:[{node:{publicURL:"/static/howTo-1-fe85b932ead8407d2c12073c6c8b2138.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA30lEQVQoz31RPU8DMQzNn+7IzF/pH+jAjISEKsZ2QTAgMZQBWvUujRPbj3zgI3egWnJe4sTPL7ZTVRQraHszO0vGUxCcSHEMCuJ5Ts/hhmH4QzBHwZkYt0+Em8eI1UPE9iBToZ7Qew+3rFC9I63x7IGbsuKsVxTGGE3eL4k9OL+DX+/Ab/cAh47e1nleSgmuyFz2TVVqgny9IO3XSM8bSLxMypfKjD6EANeawRD/CSKCSHso0kjNa79yTOzuB2MkHMYWL+YqMIE/dhi7AU1fz8WgjP+MM+HFj3lInPdN6TfLAiY95V3n2gAAAABJRU5ErkJggg==",aspectRatio:3.027173913043478,src:"/static/fe85b932ead8407d2c12073c6c8b2138/69781/howTo-1.png",srcSet:"/static/fe85b932ead8407d2c12073c6c8b2138/68017/howTo-1.png 63w,\n/static/fe85b932ead8407d2c12073c6c8b2138/6dea1/howTo-1.png 125w,\n/static/fe85b932ead8407d2c12073c6c8b2138/69781/howTo-1.png 250w,\n/static/fe85b932ead8407d2c12073c6c8b2138/ae0e1/howTo-1.png 375w,\n/static/fe85b932ead8407d2c12073c6c8b2138/3fa08/howTo-1.png 500w,\n/static/fe85b932ead8407d2c12073c6c8b2138/5a67f/howTo-1.png 750w,\n/static/fe85b932ead8407d2c12073c6c8b2138/81ce6/howTo-1.png 1114w",sizes:"(max-width: 250px) 100vw, 250px"}}}},{node:{publicURL:"/static/howTo-2-3af63a8e451e935cbf91cc5a1afced65.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABlElEQVQoz32Sz2oUQRDG5+5BRcjBi4IH0UtezgcJaPAQTBDREMRX0IteBBURBJFoNsYQnWTnb/duT3f1z+6ZndlNdmPBR01PV31VX1UnyaZiJR4qrmwpbj7VrO3o1t96prmxrUkeXZITcfWJ5iKuRWxPuf3ccH/PcHfXcG+vYf2l4c4Lw/UdE+4nrMpNqsYTUS964zk+zTn8m3HwJ+P3uOLnyZhRWnCY5hylGZkyKAt9fo+EleaZqBpVldRlTjOdoIM3dUGju/9izRC7aIl4j4gnuAA/w3IJ7SBrYCpzGpnF9hzOCUlZliiluqCBcA5p2T2v9hsevDO8PXbtWWb30ay1pGlK5FqS7Bfa67/9jPR/MYPkuq4pqwql9TkC76WF+KhReP3LsvHZ8nXcaV7s0DlHrzRxjcGGoUfvu0FeWE9n33J4c+Q4Uf7ceHrCKjQVpSd1WH0Rhh2fwNChWKQYIfkBPniX/QhZ9VDiMskiYSn7ufDlVBiVMidsFPbTFvbDJvbjY5r3G9iz70hbTJYW2J+LouAfoFgnuSb//KYAAAAASUVORK5CYII=",aspectRatio:1.802547770700637,src:"/static/3af63a8e451e935cbf91cc5a1afced65/69781/howTo-2.png",srcSet:"/static/3af63a8e451e935cbf91cc5a1afced65/68017/howTo-2.png 63w,\n/static/3af63a8e451e935cbf91cc5a1afced65/6dea1/howTo-2.png 125w,\n/static/3af63a8e451e935cbf91cc5a1afced65/69781/howTo-2.png 250w,\n/static/3af63a8e451e935cbf91cc5a1afced65/ae0e1/howTo-2.png 375w,\n/static/3af63a8e451e935cbf91cc5a1afced65/3fa08/howTo-2.png 500w,\n/static/3af63a8e451e935cbf91cc5a1afced65/5a67f/howTo-2.png 750w,\n/static/3af63a8e451e935cbf91cc5a1afced65/fc328/howTo-2.png 1132w",sizes:"(max-width: 250px) 100vw, 250px"}}}}]}}}},657:function(e,t,a){e.exports=a.p+"static/howTo-1-fe85b932ead8407d2c12073c6c8b2138.png"},658:function(e,t,a){e.exports=a.p+"static/howTo-2-3af63a8e451e935cbf91cc5a1afced65.png"}}]);
//# sourceMappingURL=component---src-pages-info-js-2c71fd94ca3af3c6f342.js.map