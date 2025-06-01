import{r as u,ai as K,P as x,aO as U,aP as H,aQ as M,aR as Q,c as q}from"./index-DneCdsLu.js";var _=u.createContext({});function v(){return v=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)({}).hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},v.apply(null,arguments)}function F(n){if(Array.isArray(n))return n}function G(n,e){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var t,o,a,i,c=[],y=!0,m=!1;try{if(a=(r=r.call(n)).next,e!==0)for(;!(y=(t=a.call(r)).done)&&(c.push(t.value),c.length!==e);y=!0);}catch(s){m=!0,o=s}finally{try{if(!y&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(m)throw o}}return c}}function S(n,e){(e==null||e>n.length)&&(e=n.length);for(var r=0,t=Array(e);r<e;r++)t[r]=n[r];return t}function J(n,e){if(n){if(typeof n=="string")return S(n,e);var r={}.toString.call(n).slice(8,-1);return r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set"?Array.from(n):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(n,e):void 0}}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(n,e){return F(n)||G(n,e)||J(n,e)||V()}function d(n){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(n)}function X(n,e){if(d(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var t=r.call(n,e||"default");if(d(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Y(n){var e=X(n,"string");return d(e)=="symbol"?e:e+""}function w(n,e,r){return(e=Y(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Z(n,e){if(n==null)return{};var r={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(e.includes(t))continue;r[t]=n[t]}return r}function A(n,e){if(n==null)return{};var r,t,o=Z(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.includes(r)||{}.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function j(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),r.push.apply(r,t)}return r}function f(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?j(Object(r),!0).forEach(function(t){w(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function nn(n){return n.replace(/-(.)/g,function(e,r){return r.toUpperCase()})}function en(n,e){K(n,"[@ant-design/icons] ".concat(e))}function P(n){return d(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(d(n.icon)==="object"||typeof n.icon=="function")}function I(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(e,r){var t=n[r];switch(r){case"class":e.className=t,delete e.class;break;default:delete e[r],e[nn(r)]=t}return e},{})}function h(n,e,r){return r?x.createElement(n.tag,f(f({key:e},I(n.attrs)),r),(n.children||[]).map(function(t,o){return h(t,"".concat(e,"-").concat(n.tag,"-").concat(o))})):x.createElement(n.tag,f({key:e},I(n.attrs)),(n.children||[]).map(function(t,o){return h(t,"".concat(e,"-").concat(n.tag,"-").concat(o))}))}function E(n){return U(n)[0]}function N(n){return n?Array.isArray(n)?n:[n]:[]}var rn=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,tn=function(e){var r=u.useContext(_),t=r.csp,o=r.prefixCls,a=rn;o&&(a=a.replace(/anticon/g,o)),u.useEffect(function(){var i=e.current,c=H(i);M(a,"@ant-design-icons",{prepend:!0,csp:t,attachTo:c})},[])},on=["icon","className","onClick","style","primaryColor","secondaryColor"],p={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function an(n){var e=n.primaryColor,r=n.secondaryColor;p.primaryColor=e,p.secondaryColor=r||E(e),p.calculated=!!r}function ln(){return f({},p)}var g=function(e){var r=e.icon,t=e.className,o=e.onClick,a=e.style,i=e.primaryColor,c=e.secondaryColor,y=A(e,on),m=u.useRef(),s=p;if(i&&(s={primaryColor:i,secondaryColor:c||E(i)}),tn(m),en(P(r),"icon should be icon definiton, but got ".concat(r)),!P(r))return null;var l=r;return l&&typeof l.icon=="function"&&(l=f(f({},l),{},{icon:l.icon(s.primaryColor,s.secondaryColor)})),h(l.icon,"svg-".concat(l.name),f(f({className:t,onClick:o,style:a,"data-icon":l.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},y),{},{ref:m}))};g.displayName="IconReact";g.getTwoToneColors=ln;g.setTwoToneColors=an;function R(n){var e=N(n),r=k(e,2),t=r[0],o=r[1];return g.setTwoToneColors({primaryColor:t,secondaryColor:o})}function cn(){var n=g.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var sn=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];R(Q.primary);var T=u.forwardRef(function(n,e){var r=n.className,t=n.icon,o=n.spin,a=n.rotate,i=n.tabIndex,c=n.onClick,y=n.twoToneColor,m=A(n,sn),s=u.useContext(_),l=s.prefixCls,b=l===void 0?"anticon":l,z=s.rootClassName,$=q(z,b,w(w({},"".concat(b,"-").concat(t.name),!!t.name),"".concat(b,"-spin"),!!o||t.name==="loading"),r),C=i;C===void 0&&c&&(C=-1);var D=a?{msTransform:"rotate(".concat(a,"deg)"),transform:"rotate(".concat(a,"deg)")}:void 0,L=N(y),O=k(L,2),W=O[0],B=O[1];return u.createElement("span",v({role:"img","aria-label":t.name},m,{ref:e,tabIndex:C,onClick:c,className:$}),u.createElement(g,{icon:t,primaryColor:W,secondaryColor:B,style:D}))});T.displayName="AntdIcon";T.getTwoToneColor=cn;T.setTwoToneColor=R;export{T as I,v as _};
