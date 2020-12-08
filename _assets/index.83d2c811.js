import{a as t,b7 as e,dp as a,T as o,aJ as s,o as n,j as l,dq as i,aW as r,y as d}from"./index.fa77065c.js";import{b as p,r as f}from"./domUtils.aee0a6fd.js";function y(n,l="top center 0",i){return t({name:n,props:{group:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:l}},setup(t,{slots:l,attrs:i}){const r=e=>{e.style.transformOrigin=t.origin};return()=>{const d=t.group?a:e;return o(d,{name:n,mode:t.mode,...i,onBeforeEnter:r},(()=>s(l)))}}})}var g=t({name:"CollapseTransition",setup:()=>({on:{beforeEnter(t){p(t,"collapse-transition"),t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){f(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave(t){0!==t.scrollHeight&&(p(t,"collapse-transition"),t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){f(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}})});const c=r("data-v-6f8c3672"),v=c(((t,a,o,s,r,p)=>(n(),l(e,i(t.on),{default:c((()=>[d(t.$slots,"default")])),_:3},16))));g.render=v,g.__scopeId="data-v-6f8c3672";var m=t({name:"CollapseTransition",setup:(t,{slots:e})=>()=>o(g,null,(()=>s(e)))});const h=y("fade-transition"),u=y("scale-transition"),w=y("slide-y-transition"),B=y("scroll-y-transition"),T=y("slide-y-reverse-transition"),_=y("scroll-y-reverse-transition"),P=y("slide-x-transition"),x=y("scroll-x-transition"),L=y("slide-x-reverse-transition"),S=y("scroll-x-reverse-transition"),E=y("scale-rotate-transition"),b=function(a,n,l="in-out"){return t({name:a,props:{mode:{type:String,default:l}},setup:(t,{attrs:l,slots:i})=>()=>o(e,{name:a,mode:t.mode,...l,onBeforeEnter:n.beforeEnter,onEnter:n.enter,onLeave:n.leave,onAfterLeave:n.afterLeave,onLeaveCancelled:n.afterLeave},(()=>s(i)))})}("expand-x-transition",function(t="",e=!1){const a=e?"width":"height",o=`offset${s=a,s.charAt(0).toUpperCase()+s.slice(1)}`;var s;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[a]:t.style[a]}},enter(e){const a=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{}))},afterEnter:l,enterCancelled:l,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[a]:t.style[a]},t.style.overflow="hidden",t.style[a]=`${t[o]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[a]="0"))},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),l(e)}function l(t){const e=t._initialStyle[a];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[a]=e),Reflect.deleteProperty(t,"_initialStyle")}}("",!0));export{m as C,b as E,h as F,u as S,w as a,B as b,T as c,_ as d,P as e,x as f,L as g,S as h,E as i,g as s};