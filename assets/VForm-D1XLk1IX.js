import{r as R,j as I,s as L,b as T,t as w,u as D,e as F,v as W,w as M,M as O,k as U,x as X,y as C,l as Y,z as $,A as j}from"./VNavigationDrawer-DbqlWJ5w.js";import{p as y,g as B,i as E,j as f,L as h,R as z,m as A,b as H,c as _,t as S,S as G,T as J,U as Z,W as q,X as K,J as Q,r as N,I as p,Y as ee,G as k,Z as te,_ as ae}from"./index-Ct00TYZC.js";import{m as ne,e as oe,f as x}from"./VList-C27HWUxM.js";const le=y({...R({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),fe=B()({name:"VAppBarNavIcon",props:le(),setup(e,r){let{slots:i}=r;return E(()=>f(I,h(e,{class:["v-app-bar-nav-icon"]}),i)),{}}}),se=y({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:z,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...A(),...L({location:"top end"}),...T(),...H(),..._(),...w({transition:"scale-rotate-transition"})},"VBadge"),me=B()({name:"VBadge",inheritAttrs:!1,props:se(),setup(e,r){const{backgroundColorClasses:i,backgroundColorStyles:m}=D(S(e,"color")),{roundedClasses:s}=F(e),{t:b}=G(),{textColorClasses:a,textColorStyles:V}=W(S(e,"textColor")),{themeClasses:c}=J(),{locationStyles:u}=M(e,!0,t=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(t)?+(e.offsetY??0):["left","right"].includes(t)?+(e.offsetX??0):0));return E(()=>{const t=Number(e.content),n=!e.max||isNaN(t)?e.content:t<=+e.max?t:`${e.max}+`,[d,o]=Z(r.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return f(e.tag,h({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},o,{style:e.style}),{default:()=>{var v,l;return[f("div",{class:"v-badge__wrapper"},[(l=(v=r.slots).default)==null?void 0:l.call(v),f(O,{transition:e.transition},{default:()=>{var g,P;return[q(f("span",h({class:["v-badge__badge",c.value,i.value,s.value,a.value],style:[m.value,V.value,e.inline?{}:u.value],"aria-atomic":"true","aria-label":b(e.label,t),"aria-live":"polite",role:"status"},d),[e.dot?void 0:r.slots.badge?(P=(g=r.slots).badge)==null?void 0:P.call(g):e.icon?f(U,{icon:e.icon},null):n]),[[K,e.modelValue]])]}})])]}})}),{}}}),re=y({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ne({origin:"center center",scrollStrategy:"block",transition:{component:oe},zIndex:2400})},"VDialog"),ve=B()({name:"VDialog",props:re(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,r){let{emit:i,slots:m}=r;const s=Q(e,"modelValue"),{scopeId:b}=X(),a=N();function V(t){var o,v;const n=t.relatedTarget,d=t.target;if(n!==d&&((o=a.value)!=null&&o.contentEl)&&((v=a.value)!=null&&v.globalTop)&&![document,a.value.contentEl].includes(d)&&!a.value.contentEl.contains(d)){const l=te(a.value.contentEl);if(!l.length)return;const g=l[0],P=l[l.length-1];n===g?P.focus():g.focus()}}p(()=>{document.removeEventListener("focusin",V)}),ee&&k(()=>s.value&&e.retainFocus,t=>{t?document.addEventListener("focusin",V):document.removeEventListener("focusin",V)},{immediate:!0});function c(){var t;i("afterEnter"),(t=a.value)!=null&&t.contentEl&&!a.value.contentEl.contains(document.activeElement)&&a.value.contentEl.focus({preventScroll:!0})}function u(){i("afterLeave")}return k(s,async t=>{var n;t||(await ae(),(n=a.value.activatorEl)==null||n.focus({preventScroll:!0}))}),E(()=>{const t=x.filterProps(e),n=h({"aria-haspopup":"dialog"},e.activatorProps),d=h({tabindex:-1},e.contentProps);return f(x,h({ref:a,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},t,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,"aria-modal":"true",activatorProps:n,contentProps:d,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:c,onAfterLeave:u},b),{activator:m.activator,default:function(){for(var o=arguments.length,v=new Array(o),l=0;l<o;l++)v[l]=arguments[l];return f(Y,{root:"VDialog"},{default:()=>{var g;return[(g=m.default)==null?void 0:g.call(m,...v)]}})}})}),C({},a)}}),ie=y({...A(),...$()},"VForm"),ge=B()({name:"VForm",props:ie(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,r){let{slots:i,emit:m}=r;const s=j(e),b=N();function a(c){c.preventDefault(),s.reset()}function V(c){const u=c,t=s.validate();u.then=t.then.bind(t),u.catch=t.catch.bind(t),u.finally=t.finally.bind(t),m("submit",u),u.defaultPrevented||t.then(n=>{var o;let{valid:d}=n;d&&((o=b.value)==null||o.submit())}),u.preventDefault()}return E(()=>{var c;return f("form",{ref:b,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:a,onSubmit:V},[(c=i.default)==null?void 0:c.call(i,s)])}),C(s,b)}});export{me as V,fe as a,ge as b,ve as c};
