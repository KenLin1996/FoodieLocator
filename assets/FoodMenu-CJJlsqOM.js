import{x as lt,l as Le,y as $e,t as nt,B as at,h as he,k as ne,g as V,f as Z,j as oe,i as N,_ as Ue,o as ot,V as st,p as it}from"./VNavigationDrawer-DbqlWJ5w.js";import{m as ut,e as Ne,g as Re,f as De,h as rt,i as ct,j as dt,k as mt,V as ae,b as ft,d as Ce,u as vt,a as Be}from"./VList-C27HWUxM.js";import{p as se,$ as je,g as be,J as Se,C as pt,a0 as gt,e as L,r as F,a1 as He,s as K,a2 as qe,a3 as ht,I as Ke,a4 as bt,_ as Te,Z as Fe,G as Y,Y as re,L as W,i as ye,j as t,a5 as yt,a6 as _e,m as We,u as Ge,F as E,a7 as xt,w as ze,a8 as Ye,E as Ve,a9 as wt,aa as _t,ab as Vt,ac as kt,t as Ct,f as St,H as Je,k as ve,R as Tt,S as Pt,ad as It,ae as At,z as B,af as Ee,ag as Oe,o as P,n as J,q as r,v as f,A as I,x as H,y as Q,B as Rt,l as Dt,M as Bt}from"./index-Ct00TYZC.js";import{V as Ft,a as Xe,b as pe,c as Qe,d as ge,e as zt}from"./VBreadcrumbs-DuyjkTG8.js";import{V as Ze,a as Pe}from"./VSelectionControl-DI-lJy-1.js";const Et=se({id:String,submenu:Boolean,...je(ut({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Ne}}),["absolute"])},"VMenu"),Ot=be()({name:"VMenu",props:Et(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:a}=m;const u=Se(e,"modelValue"),{scopeId:c}=lt(),{isRtl:v}=pt(),p=gt(),s=L(()=>e.id||`v-menu-${p}`),o=F(),n=He(Re,null),k=K(new Set);qe(Re,{register(){k.value.add(p)},unregister(){k.value.delete(p)},closeParents(i){setTimeout(()=>{var h;!k.value.size&&!e.persistent&&(i==null||(h=o.value)!=null&&h.contentEl&&!ht(i,o.value.contentEl))&&(u.value=!1,n==null||n.closeParents())},40)}}),Ke(()=>{n==null||n.unregister(),document.removeEventListener("focusin",w)}),bt(()=>u.value=!1);async function w(i){var S,_,j;const h=i.relatedTarget,y=i.target;await Te(),u.value&&h!==y&&((S=o.value)!=null&&S.contentEl)&&((_=o.value)!=null&&_.globalTop)&&![document,o.value.contentEl].includes(y)&&!o.value.contentEl.contains(y)&&((j=Fe(o.value.contentEl)[0])==null||j.focus())}Y(u,i=>{i?(n==null||n.register(),re&&document.addEventListener("focusin",w,{once:!0})):(n==null||n.unregister(),re&&document.removeEventListener("focusin",w))},{immediate:!0});function g(i){n==null||n.closeParents(i)}function C(i){var h,y,S,_,j;if(!e.disabled)if(i.key==="Tab"||i.key==="Enter"&&!e.closeOnContentClick){if(i.key==="Enter"&&(i.target instanceof HTMLTextAreaElement||i.target instanceof HTMLInputElement&&i.target.closest("form")))return;i.key==="Enter"&&i.preventDefault(),yt(Fe((h=o.value)==null?void 0:h.contentEl,!1),i.shiftKey?"prev":"next",A=>A.tabIndex>=0)||(u.value=!1,(S=(y=o.value)==null?void 0:y.activatorEl)==null||S.focus())}else e.submenu&&i.key===(v.value?"ArrowRight":"ArrowLeft")&&(u.value=!1,(j=(_=o.value)==null?void 0:_.activatorEl)==null||j.focus())}function O(i){var y;if(e.disabled)return;const h=(y=o.value)==null?void 0:y.contentEl;h&&u.value?i.key==="ArrowDown"?(i.preventDefault(),i.stopImmediatePropagation(),_e(h,"next")):i.key==="ArrowUp"?(i.preventDefault(),i.stopImmediatePropagation(),_e(h,"prev")):e.submenu&&(i.key===(v.value?"ArrowRight":"ArrowLeft")?u.value=!1:i.key===(v.value?"ArrowLeft":"ArrowRight")&&(i.preventDefault(),_e(h,"first"))):(e.submenu?i.key===(v.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(i.key))&&(u.value=!0,i.preventDefault(),setTimeout(()=>setTimeout(()=>O(i))))}const z=L(()=>W({"aria-haspopup":"menu","aria-expanded":String(u.value),"aria-owns":s.value,onKeydown:O},e.activatorProps));return ye(()=>{const i=De.filterProps(e);return t(De,W({ref:o,id:s.value,class:["v-menu",e.class],style:e.style},i,{modelValue:u.value,"onUpdate:modelValue":h=>u.value=h,absolute:!0,activatorProps:z.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":g,onKeydown:C},c),{activator:a.activator,default:function(){for(var h=arguments.length,y=new Array(h),S=0;S<h;S++)y[S]=arguments[S];return t(Le,{root:"VMenu"},{default:()=>{var _;return[(_=a.default)==null?void 0:_.call(a,...y)]}})}})}),$e({id:s,ΨopenChildren:k},o)}}),Mt=se({renderless:Boolean,...We()},"VVirtualScrollItem"),Lt=be()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Mt(),emits:{"update:height":e=>!0},setup(e,m){let{attrs:a,emit:u,slots:c}=m;const{resizeRef:v,contentRect:p}=Ge(void 0,"border");Y(()=>{var s;return(s=p.value)==null?void 0:s.height},s=>{s!=null&&u("update:height",s)}),ye(()=>{var s,o;return e.renderless?t(E,null,[(s=c.default)==null?void 0:s.call(c,{itemRef:v})]):t("div",W({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},a),[(o=c.default)==null?void 0:o.call(c)])})}}),$t=-1,Ut=1,ke=100,Nt=se({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function jt(e,m){const a=xt(),u=K(0);ze(()=>{u.value=parseFloat(e.itemHeight||0)});const c=K(0),v=K(Math.ceil((parseInt(e.height)||a.height.value)/(u.value||16))||1),p=K(0),s=K(0),o=F(),n=F();let k=0;const{resizeRef:w,contentRect:g}=Ge();ze(()=>{w.value=o.value});const C=L(()=>{var l;return o.value===document.documentElement?a.height.value:((l=g.value)==null?void 0:l.height)||parseInt(e.height)||0}),O=L(()=>!!(o.value&&n.value&&C.value&&u.value));let z=Array.from({length:m.value.length}),i=Array.from({length:m.value.length});const h=K(0);let y=-1;function S(l){return z[l]||u.value}const _=wt(()=>{const l=performance.now();i[0]=0;const d=m.value.length;for(let x=1;x<=d-1;x++)i[x]=(i[x-1]||0)+S(x-1);h.value=Math.max(h.value,performance.now()-l)},h),j=Y(O,l=>{l&&(j(),k=n.value.offsetTop,_.immediate(),q(),~y&&Te(()=>{re&&window.requestAnimationFrame(()=>{fe(y),y=-1})}))});Ye(()=>{_.clear()});function ie(l,d){const x=z[l],T=u.value;u.value=T?Math.min(u.value,d):d,(x!==d||T!==u.value)&&(z[l]=d,_())}function A(l){return l=Ve(l,0,m.value.length-1),i[l]||0}function ce(l){return Ht(i,l)}let ee=0,X=0,ue=0;Y(C,(l,d)=>{d&&(q(),l<d&&requestAnimationFrame(()=>{X=0,q()}))});function de(){if(!o.value||!n.value)return;const l=o.value.scrollTop,d=performance.now();d-ue>500?(X=Math.sign(l-ee),k=n.value.offsetTop):X=l-ee,ee=l,ue=d,q()}function te(){!o.value||!n.value||(X=0,ue=0,q())}let me=-1;function q(){cancelAnimationFrame(me),me=requestAnimationFrame(xe)}function xe(){if(!o.value||!C.value)return;const l=ee-k,d=Math.sign(X),x=Math.max(0,l-ke),T=Ve(ce(x),0,m.value.length),$=l+C.value+ke,b=Ve(ce($)+1,T+1,m.value.length);if((d!==$t||T<c.value)&&(d!==Ut||b>v.value)){const R=A(c.value)-A(T),D=A(b)-A(v.value);Math.max(R,D)>ke?(c.value=T,v.value=b):(T<=0&&(c.value=T),b>=m.value.length&&(v.value=b))}p.value=A(c.value),s.value=A(m.value.length)-A(v.value)}function fe(l){const d=A(l);!o.value||l&&!d?y=l:o.value.scrollTop=d}const we=L(()=>m.value.slice(c.value,v.value).map((l,d)=>({raw:l,index:d+c.value})));return Y(m,()=>{z=Array.from({length:m.value.length}),i=Array.from({length:m.value.length}),_.immediate(),q()},{deep:!0}),{calculateVisibleItems:q,containerRef:o,markerRef:n,computedItems:we,paddingTop:p,paddingBottom:s,scrollToIndex:fe,handleScroll:de,handleScrollend:te,handleItemResize:ie}}function Ht(e,m){let a=e.length-1,u=0,c=0,v=null,p=-1;if(e[a]<m)return a;for(;u<=a;)if(c=u+a>>1,v=e[c],v>m)a=c-1;else if(v<m)p=c,u=c+1;else return v===m?c:u;return p}const qt=se({items:{type:Array,default:()=>[]},renderless:Boolean,...Nt(),...We(),..._t()},"VVirtualScroll"),Kt=be()({name:"VVirtualScroll",props:qt(),setup(e,m){let{slots:a}=m;const u=Vt("VVirtualScroll"),{dimensionStyles:c}=kt(e),{calculateVisibleItems:v,containerRef:p,markerRef:s,handleScroll:o,handleScrollend:n,handleItemResize:k,scrollToIndex:w,paddingTop:g,paddingBottom:C,computedItems:O}=jt(e,Ct(e,"items"));return St(()=>e.renderless,()=>{function z(){var y,S;const h=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";p.value===document.documentElement?(document[h]("scroll",o,{passive:!0}),document[h]("scrollend",n)):((y=p.value)==null||y[h]("scroll",o,{passive:!0}),(S=p.value)==null||S[h]("scrollend",n))}Je(()=>{p.value=rt(u.vnode.el,!0),z(!0)}),Ye(z)}),ye(()=>{const z=O.value.map(i=>t(Lt,{key:i.index,renderless:e.renderless,"onUpdate:height":h=>k(i.index,h)},{default:h=>{var y;return(y=a.default)==null?void 0:y.call(a,{item:i.raw,index:i.index,...h})}}));return e.renderless?t(E,null,[t("div",{ref:s,class:"v-virtual-scroll__spacer",style:{paddingTop:ve(g.value)}},null),z,t("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ve(C.value)}},null)]):t("div",{ref:p,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:n,style:[c.value,e.style]},[t("div",{ref:s,class:"v-virtual-scroll__container",style:{paddingTop:ve(g.value),paddingBottom:ve(C.value)}},[z])])}),{calculateVisibleItems:v,scrollToIndex:w}}});function Wt(e,m){const a=K(!1);let u;function c(s){cancelAnimationFrame(u),a.value=!0,u=requestAnimationFrame(()=>{u=requestAnimationFrame(()=>{a.value=!1})})}async function v(){await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>{if(a.value){const o=Y(a,()=>{o(),s()})}else s()})}async function p(s){var k,w;if(s.key==="Tab"&&((k=m.value)==null||k.focus()),!["PageDown","PageUp","Home","End"].includes(s.key))return;const o=(w=e.value)==null?void 0:w.$el;if(!o)return;(s.key==="Home"||s.key==="End")&&o.scrollTo({top:s.key==="Home"?0:o.scrollHeight,behavior:"smooth"}),await v();const n=o.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(s.key==="PageDown"||s.key==="Home"){const g=o.getBoundingClientRect().top;for(const C of n)if(C.getBoundingClientRect().top>=g){C.focus();break}}else{const g=o.getBoundingClientRect().bottom;for(const C of[...n].reverse())if(C.getBoundingClientRect().bottom<=g){C.focus();break}}}return{onScrollPassive:c,onKeydown:p}}const Gt=se({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:Tt,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...ct({itemChildren:!1})},"Select"),Yt=se({...Gt(),...je(dt({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...nt({transition:{component:Ne}})},"VSelect"),Me=be()({name:"VSelect",props:Yt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,m){let{slots:a}=m;const{t:u}=Pt(),c=F(),v=F(),p=F(),s=Se(e,"menu"),o=L({get:()=>s.value,set:l=>{var d;s.value&&!l&&((d=v.value)!=null&&d.ΨopenChildren.size)||(s.value=l)}}),{items:n,transformIn:k,transformOut:w}=mt(e),g=Se(e,"modelValue",[],l=>k(l===null?[null]:It(l)),l=>{const d=w(l);return e.multiple?d:d[0]??null}),C=L(()=>typeof e.counterValue=="function"?e.counterValue(g.value):typeof e.counterValue=="number"?e.counterValue:g.value.length),O=at(),z=L(()=>g.value.map(l=>l.value)),i=K(!1),h=L(()=>o.value?e.closeText:e.openText);let y="",S;const _=L(()=>e.hideSelected?n.value.filter(l=>!g.value.some(d=>e.valueComparator(d,l))):n.value),j=L(()=>e.hideNoData&&!_.value.length||e.readonly||(O==null?void 0:O.isReadonly.value)),ie=L(()=>{var l;return{...e.menuProps,activatorProps:{...((l=e.menuProps)==null?void 0:l.activatorProps)||{},"aria-haspopup":"listbox"}}}),A=F(),ce=Wt(A,c);function ee(l){e.openOnClear&&(o.value=!0)}function X(){j.value||(o.value=!o.value)}function ue(l){Ee(l)&&de(l)}function de(l){var $,b;if(!l.key||e.readonly||O!=null&&O.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(o.value=!0),["Escape","Tab"].includes(l.key)&&(o.value=!1),l.key==="Home"?($=A.value)==null||$.focus("first"):l.key==="End"&&((b=A.value)==null||b.focus("last"));const d=1e3;if(e.multiple||!Ee(l))return;const x=performance.now();x-S>d&&(y=""),y+=l.key.toLowerCase(),S=x;const T=n.value.find(R=>R.title.toLowerCase().startsWith(y));if(T!==void 0){g.value=[T];const R=_.value.indexOf(T);re&&window.requestAnimationFrame(()=>{var D;R>=0&&((D=p.value)==null||D.scrollToIndex(R))})}}function te(l){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const x=g.value.findIndex($=>e.valueComparator($.value,l.value)),T=d??!~x;if(~x){const $=T?[...g.value,l]:[...g.value];$.splice(x,1),g.value=$}else T&&(g.value=[...g.value,l])}else{const x=d!==!1;g.value=x?[l]:[],Te(()=>{o.value=!1})}}function me(l){var d;(d=A.value)!=null&&d.$el.contains(l.relatedTarget)||(o.value=!1)}function q(){var l;e.eager&&((l=p.value)==null||l.calculateVisibleItems())}function xe(){var l;i.value&&((l=c.value)==null||l.focus())}function fe(l){i.value=!0}function we(l){if(l==null)g.value=[];else if(Oe(c.value,":autofill")||Oe(c.value,":-webkit-autofill")){const d=n.value.find(x=>x.title===l);d&&te(d)}else c.value&&(c.value.value="")}return Y(o,()=>{if(!e.hideSelected&&o.value&&g.value.length){const l=_.value.findIndex(d=>g.value.some(x=>e.valueComparator(x.value,d.value)));re&&window.requestAnimationFrame(()=>{var d;l>=0&&((d=p.value)==null||d.scrollToIndex(l))})}}),Y(()=>e.items,(l,d)=>{o.value||i.value&&!d.length&&l.length&&(o.value=!0)}),ye(()=>{const l=!!(e.chips||a.chip),d=!!(!e.hideNoData||_.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),x=g.value.length>0,T=ae.filterProps(e),$=x||!i.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return t(ae,W({ref:c},T,{modelValue:g.value.map(b=>b.props.value).join(", "),"onUpdate:modelValue":we,focused:i.value,"onUpdate:focused":b=>i.value=b,validationValue:g.externalValue,counterValue:C.value,dirty:x,class:["v-select",{"v-select--active-menu":o.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":g.value.length,"v-select--selection-slot":!!a.selection},e.class],style:e.style,inputmode:"none",placeholder:$,"onClick:clear":ee,"onMousedown:control":X,onBlur:me,onKeydown:de,"aria-label":u(h.value),title:u(h.value)}),{...a,default:()=>t(E,null,[t(Ot,W({ref:v,modelValue:o.value,"onUpdate:modelValue":b=>o.value=b,activator:"parent",contentClass:"v-select__content",disabled:j.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:q,onAfterLeave:xe},ie.value),{default:()=>[d&&t(ft,W({ref:A,selected:z.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:b=>b.preventDefault(),onKeydown:ue,onFocusin:fe,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},ce,e.listProps),{default:()=>{var b,R,D;return[(b=a["prepend-item"])==null?void 0:b.call(a),!_.value.length&&!e.hideNoData&&(((R=a["no-data"])==null?void 0:R.call(a))??t(Ce,{title:u(e.noDataText)},null)),t(Kt,{ref:p,renderless:!0,items:_.value},{default:G=>{var Ae;let{item:U,index:le,itemRef:M}=G;const Ie=W(U.props,{ref:M,key:le,onClick:()=>te(U,null)});return((Ae=a.item)==null?void 0:Ae.call(a,{item:U,index:le,props:Ie}))??t(Ce,W(Ie,{role:"option"}),{prepend:et=>{let{isSelected:tt}=et;return t(E,null,[e.multiple&&!e.hideSelected?t(Ft,{key:U.value,modelValue:tt,ripple:!1,tabindex:"-1"},null):void 0,U.props.prependAvatar&&t(he,{image:U.props.prependAvatar},null),U.props.prependIcon&&t(ne,{icon:U.props.prependIcon},null)])}})}}),(D=a["append-item"])==null?void 0:D.call(a)]}})]}),g.value.map((b,R)=>{function D(M){M.stopPropagation(),M.preventDefault(),te(b,!1)}const G={"onClick:close":D,onKeydown(M){M.key!=="Enter"&&M.key!==" "||(M.preventDefault(),M.stopPropagation(),D(M))},onMousedown(M){M.preventDefault(),M.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},U=l?!!a.chip:!!a.selection,le=U?At(l?a.chip({item:b,index:R,props:G}):a.selection({item:b,index:R})):void 0;if(!(U&&!le))return t("div",{key:b.value,class:"v-select__selection"},[l?a.chip?t(Le,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:b.title}}},{default:()=>[le]}):t(Ze,W({key:"chip",closable:e.closableChips,size:"small",text:b.title,disabled:b.props.disabled},G),null):le??t("span",{class:"v-select__selection-text"},[b.title,e.multiple&&R<g.value.length-1&&t("span",{class:"v-select__selection-comma"},[B(",")])])])})]),"append-inner":function(){var G;for(var b=arguments.length,R=new Array(b),D=0;D<b;D++)R[D]=arguments[D];return t(E,null,[(G=a["append-inner"])==null?void 0:G.call(a,...R),e.menuIcon?t(ne,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),$e({isFocused:i,menu:o,select:te},c)}}),Jt={__name:"BookATable",setup(e){const m=F("Sunday"),a=F(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),u=F(0),c=[1,2,3,4,5,6,7];return(v,p)=>(P(),J(Z,null,{default:r(()=>[t(V,{lg:"6",cols:"12"},{default:r(()=>[t(Z,null,{default:r(()=>[t(V,{class:"mt-2",sm:"6",md:"6",lg:"6",xl:"6",cols:"12"},{default:r(()=>[t(Me,{modelValue:m.value,"onUpdate:modelValue":p[0]||(p[0]=s=>m.value=s),label:"Select Day Of Week",items:a.value,variant:"outlined","hide-details":"",color:"#d23f57",density:"compact"},null,8,["modelValue","items"])]),_:1}),t(V,{class:"mt-2",sm:"6",md:"6",lg:"6",xl:"6",cols:"12"},{default:r(()=>[t(Me,{modelValue:u.value,"onUpdate:modelValue":p[1]||(p[1]=s=>u.value=s),label:"Number Of Guests",items:c,variant:"outlined","hide-details":"",color:"#d23f57",density:"compact"},null,8,["modelValue"])]),_:1}),t(V,{class:"mt-2",sm:"6",md:"6",lg:"6",xl:"6",cols:"12"},{default:r(()=>[t(ae,{label:"First Name",variant:"outlined","hide-details":"",color:"#d23f57",density:"compact"})]),_:1}),t(V,{class:"mt-2",sm:"6",md:"6",lg:"6",xl:"6",cols:"12"},{default:r(()=>[t(ae,{label:"Last Name",variant:"outlined","hide-details":"",color:"#d23f57",density:"compact"})]),_:1}),t(V,{class:"mt-2",sm:"6",md:"6",lg:"6",xl:"6",cols:"12"},{default:r(()=>[t(ae,{label:"Email",variant:"outlined","hide-details":"",color:"#d23f57",density:"compact"})]),_:1}),t(V,{class:"mt-2",sm:"6",md:"6",lg:"6",xl:"6",cols:"12"},{default:r(()=>[t(ae,{label:"Phone",variant:"outlined","hide-details":"",color:"#d23f57",density:"compact"})]),_:1}),t(V,{cols:"12"},{default:r(()=>[t(oe,{height:"40",class:"rounded-1",density:"default",variant:"text",style:{color:"#fff","background-color":"#d23f57"}},{default:r(()=>p[2]||(p[2]=[B(" BOOK ")])),_:1})]),_:1})]),_:1})]),_:1}),t(V,{lg:"6",cols:"12"},{default:r(()=>[t(N,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/download-app.c757568.png",cover:""})]),_:1})]),_:1}))}},Xt={class:"d-flex justify-space-between align-center flex-wrap"},Qt={class:"d-flex flex-wrap mb-4"},Zt={class:"mb-2",style:{"font-size":"16px","font-weight":"500",color:"rgba(0, 0, 0, 0.87)"}},el={style:{color:"#0f3460"}},tl={class:"d-flex align-center mb-3"},ll={class:"ms-3",style:{"font-size":"16px",color:"#757575"}},nl={class:"d-flex mb-1",style:{"font-size":"14px"}},al={class:"me-2"},ol={style:{color:"#d23f57"}},sl={__name:"ProductCardC",props:{product:{type:Object,required:!0}},setup(e){const m=e,a=vt(),u=()=>{a.addItemToCart(m.product)};return(c,v)=>(P(),J(Z,null,{default:r(()=>[t(V,{cols:"12"},{default:r(()=>[f("div",Xt,[f("div",Qt,[t(he,{class:"me-3 rounded-0",size:"150"},{default:r(()=>[t(N,{src:e.product.img,cover:"",class:"rounded-0"},null,8,["src"])]),_:1}),f("div",null,[f("h5",Zt,I(e.product.name),1),t(Ze,{style:{"background-color":"#f5f5f5"},link:"",size:"small",class:"mb-2"},{default:r(()=>[f("span",el,I(e.product.label),1)]),_:1}),f("div",tl,[t(Pe,{"model-value":5,length:5,color:"amber",density:"compact",size:"small","half-increments":"",readonly:""}),f("h6",ll," ("+I(e.product.comments)+") ",1)]),f("div",nl,[v[0]||(v[0]=f("p",{class:"me-2 text-decoration-line-through",style:{color:"#757575"}}," $100 ",-1)),f("p",al,"$"+I(e.product.price),1),f("p",ol,I(e.product.discount)+"%off",1)]),v[1]||(v[1]=f("p",{style:{"font-size":"14px",color:"#757575"}}," (4 Pcs mutton in chicken keema gravy) ",-1))])]),f("div",null,[t(oe,{"append-icon":"mdi-plus",variant:"outlined",color:"#d23f57",onClick:u},{default:r(()=>v[2]||(v[2]=[B(" ADD ")])),_:1})])])]),_:1})]),_:1}))}},il={class:"d-flex flex-row"},ul={class:"categoryBtn"},rl={style:{"font-size":"20px","margin-bottom":"16px"}},cl={__name:"OrderOnline",setup(e){const m=F("option-0"),a=He("openSideBar"),u=()=>{a&&a()},c=[{name:"Recomended",counts:4,products:[{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/4.780fc7d.png",name:"Tandoori Chicken (Full)",label:"Recomended",comments:43,price:90,discount:10},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg",name:"Starbucks",label:"Recomended",comments:100,price:80,discount:20},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg",name:"Red Chillies",label:"Recomended",comments:13,price:65,discount:35},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/21.eee29b5.jpg",name:"Woondal",label:"Recomended",comments:31,price:75,discount:25}]},{name:"DPB Special Combos",counts:1,products:[{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/5.8a5927f.png",name:"Swedish Meatballs",label:"DPB Special Combos",comments:1,price:80,discount:20}]},{name:"Chinese Food",counts:3,products:[{img:"https://media.zenfs.com/zh-tw/supertaste_tvbs_com_tw_971/82812d257c8e3a56d2f632849128718b",name:"Fried Rice",label:"Chinese Food",comments:1,price:60,discount:40},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF4mrBrB8lm9tgo01O0A5h-LhLwtThaAJ_g&s",name:"Xiao Long Bao",label:"Chinese Food",comments:3,price:50,discount:50}]},{name:"Indian Food",counts:6,products:[{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ahVV-EFhlhti7US7U-k5vU_ht8GAOETvIQ&s",name:"Indian Curry",label:"Indian Food",comments:10,price:10,discount:90},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSishFUbY756cKbRBkWoBG-lRmCCDSiI_aRXA&s",name:"Naan",label:"Indian Food",comments:10,price:5,discount:95}]},{name:"Japan Food",counts:7,products:[{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg",name:"Sushi",label:"Japan Food",comments:1,price:80,discount:20}]},{name:"Desserts",counts:1,products:[{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/22.c99d20e.jpg",name:"Blueberry Cake",label:"Dessertss",comments:13,price:70,discount:30}]},{name:"Soup",counts:5,products:[{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/7.ea86fb7.png",name:"Pumpkin Soup",label:"Soup",comments:1,price:75,discount:25}]}];return(v,p)=>(P(),J(ot,null,{default:r(()=>[f("div",il,[t(Xe,{modelValue:m.value,"onUpdate:modelValue":p[0]||(p[0]=s=>m.value=s),color:"#000",direction:"vertical","align-tabs":"left",class:"custom-tabs"},{default:r(()=>[(P(),H(E,null,Q(c,(s,o)=>t(pe,{key:o,class:"text-capitalize",text:s.name,value:"option-"+o},null,8,["text","value"])),64))]),_:1},8,["modelValue"]),t(Qe,{modelValue:m.value,"onUpdate:modelValue":p[1]||(p[1]=s=>m.value=s),class:"w-100",style:{padding:"0px 32px"}},{default:r(()=>[(P(),H(E,null,Q(c,(s,o)=>t(ge,{key:o,value:"option-"+o},{default:r(()=>[f("div",ul,[t(oe,{"prepend-icon":"mdi-menu",style:{"background-color":"#d23f57",color:"white","margin-bottom":"16px"},width:"136",onClick:u},{default:r(()=>p[2]||(p[2]=[B(" Categories ")])),_:1})]),f("h3",rl,I(s.name),1),(P(!0),H(E,null,Q(s.products,n=>(P(),J(sl,{key:n,product:n},null,8,["product"]))),128))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])])]),_:1}))}},dl=Ue(cl,[["__scopeId","data-v-205a883c"]]),ml={class:"d-flex align-center flex-wrap mb-4"},fl={style:{"font-size":"14px",color:"#757575"}},vl={class:"d-flex align-center mb-2"},pl={style:{"font-size":"14px",color:"#212121","font-weight":"bold"}},gl={class:"text-grey",style:{"font-size":"14px"}},hl={class:"mb-3",style:{"font-size":"16px",color:"#616161","font-weight":"400"}},bl={style:{"font-size":"14px",color:"#757575"}},yl={class:"mt-4"},xl={class:"d-flex align-center mb-3"},wl={style:{"font-size":"14px",color:"#212121"}},_l={style:{"font-size":"16px",color:"#616161","font-weight":"400"}},Vl={__name:"CommentCards",props:{item:{type:Object,required:!0}},setup(e){return(m,a)=>(P(),H(E,null,[f("div",ml,[t(he,{class:"me-4"},{default:r(()=>[t(N,{src:e.item.avatar},null,8,["src"])]),_:1}),f("div",null,[f("h5",null,I(e.item.name),1),f("p",fl,I(e.item.reviews)+" Reviews, "+I(e.item.followers)+" Followers ",1)])]),f("div",vl,[t(Pe,{"model-value":5,length:5,color:"amber",density:"compact",size:"small","half-increments":"",readonly:""}),f("span",pl," "+I(e.item.rate)+".0 ",1),f("span",gl,I(e.item.time)+" Days Ago",1)]),f("h5",hl,I(e.item.content),1),t(Z,{class:"mb-2"},{default:r(()=>[(P(!0),H(E,null,Q(e.item.imgs,u=>(P(),J(V,{key:u,lg:"6",cols:"6"},{default:r(()=>[t(N,{src:u},null,8,["src"])]),_:2},1024))),128))]),_:1}),f("div",null,[f("p",bl,I(e.item.likes)+" Likes, "+I(e.item.commentsCount)+" Comments ",1),f("div",yl,[t(oe,{"prepend-icon":"mdi-thumb-up-outline",size:"small",variant:"text",style:{color:"#616161"}},{default:r(()=>a[0]||(a[0]=[B(" Like ")])),_:1}),t(oe,{"prepend-icon":"mdi-comment-text-outline",size:"small",variant:"text",style:{color:"#616161"}},{default:r(()=>a[1]||(a[1]=[B(" Comment ")])),_:1})]),t(Be,{class:"my-4"}),(P(!0),H(E,null,Q(e.item.comments,u=>(P(),H("div",{key:u,class:"mb-6"},[f("div",xl,[t(he,{class:"me-3",style:{width:"28px",height:"28px"}},{default:r(()=>[t(N,{src:u.avatar},null,8,["src"])]),_:2},1024),f("p",wl,I(u.name),1)]),f("h5",_l,I(u.comment),1)]))),128)),e.item.comments?(P(),J(Be,{key:0,class:"my-4"})):Rt("",!0)])],64))}},kl={__name:"Reviews",setup(e){const m=F([{avatar:"https://foodhub-nuxt.vercel.app/_nuxt/img/8.38098d6.png",name:"Abriella Bond",reviews:2,followers:9,rate:4,time:3,content:"I've never had such delicious food.",imgs:["https://foodhub-nuxt.vercel.app/_nuxt/img/foodFive.63a95c3.png","https://foodhub-nuxt.vercel.app/_nuxt/img/foodSix.d1a6e1c.png"],likes:4,commentsCount:2,comments:[{avatar:"https://foodhub-nuxt.vercel.app/_nuxt/img/6.9bc51a4.png",name:"Abraham",comment:"I think the taste is very ordinary"},{avatar:"https://foodhub-nuxt.vercel.app/_nuxt/img/7.7edf59d.png",name:"Aaron",comment:"The flavors of this dish are well-layered, each bite is a delightful surprise, perfectly blending spices and the freshness of the ingredients."}]},{avatar:"https://foodhub-nuxt.vercel.app/_nuxt/img/13.35cd907.jpg",name:"Bartholomew",reviews:8,followers:19,rate:4,time:5,content:"The steak is crispy on the outside and tender on the inside, juicy and full of flavor, every bite leaves you craving more.",imgs:[],likes:14,commentsCount:5},{avatar:"https://foodhub-nuxt.vercel.app/_nuxt/img/9.19544e8.jpg",name:"Cornelius",reviews:12,followers:49,rate:4,time:8,content:"This dessert has a smooth texture, with the rich aroma of chocolate perfectly balanced by a subtle sweetness, truly intoxicating.",imgs:[],likes:7,commentsCount:12}]);return(a,u)=>(P(),J(Z,null,{default:r(()=>[t(V,{lg:"6",cols:"12"},{default:r(()=>[(P(!0),H(E,null,Q(m.value,(c,v)=>(P(),J(Vl,{key:v,item:c},null,8,["item"]))),128))]),_:1}),t(V,{lg:"6",cols:"12"},{default:r(()=>[t(N,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/download-app.c757568.png",cover:""})]),_:1})]),_:1}))}},Cl={class:"d-flex justify-space-between flex-wrap align-center mb-3 py-0"},Sl={class:"d-flex align-center flex-nowrap"},Tl={class:"d-flex align-center mb-4",style:{color:"#757575","font-size":"14px"}},Pl={class:"d-flex align-center mb-4",style:{color:"#757575","font-size":"14px"}},Il={class:"d-flex align-center mb-4",style:{color:"#757575","font-size":"14px"}},Al={class:"d-flex align-center justify-end"},Rl={__name:"FoodMenu",setup(e){const m=F("option-1"),a=[{title:"Home",disabled:!1,href:"/"},{title:"New York",disabled:!1,href:"/"},{title:"Restaurants",disabled:!0,href:"/restaurant/FoodMenu"}],u=[{name:"Recomended (4)",counts:4},{name:"DPB Special Combos (1)",counts:1},{name:"Chineese Starters (3)",counts:3},{name:"Chinese Main Course (7)",counts:7},{name:"Indian Main Course (6)",counts:6},{name:"Rice & Pulao (7)",counts:7},{name:"Desserts (1)",counts:1},{name:"Soup & wonton (5)",counts:5},{name:"Accompaniment (4)",counts:4},{name:"Biryani (1)",counts:1}],c=F(!1);qe("openSideBar",()=>{c.value=!0});const v=F(null),p=o=>{v.value=o},s=()=>{window.innerWidth>960&&(c.value=!1)};return Je(()=>{s(),window.addEventListener("resize",s)}),Ke(()=>{window.removeEventListener("resize",s)}),(o,n)=>{const k=Dt("router-link");return P(),H(E,null,[t(st,null,{default:r(()=>[t(zt,{items:a,class:"px-0"},{divider:r(()=>[t(ne,{icon:"mdi-chevron-right"})]),_:1}),t(Z,null,{default:r(()=>[t(V,{lg:"6",cols:"12",class:"py-1 pr-1"},{default:r(()=>[t(N,{height:"100%",src:"https://foodhub-nuxt.vercel.app/_nuxt/img/bigFood.fb87b8d.png",cover:""})]),_:1}),t(V,{lg:"6",cols:"12"},{default:r(()=>[t(Z,null,{default:r(()=>[t(V,{cols:"6",class:"pt-1 pr-1 pb-1 pl-1"},{default:r(()=>[t(N,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/foodOne.f29cb9f.png",width:"434",cover:""})]),_:1}),t(V,{cols:"6",class:"pt-1 pr-1 pb-1 pl-1"},{default:r(()=>[t(N,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/foodTwo.3b74f91.png",width:"434",cover:""})]),_:1}),t(V,{cols:"6",class:"pt-1 pr-1 pb-1 pl-1"},{default:r(()=>[t(N,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/foodThree.fd71db5.png",width:"434",cover:""})]),_:1}),t(V,{cols:"6",class:"pt-1 pr-1 pb-1 pl-1"},{default:r(()=>[t(N,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/foodFour.e242457.png",width:"434",cover:""})]),_:1})]),_:1})]),_:1}),t(V,{class:"mt-4 py-0 pr-0",cols:"12"},{default:r(()=>[f("div",Cl,[n[6]||(n[6]=f("h1",{style:{"font-size":"30px"}},"Starbucks",-1)),f("div",Sl,[t(Pe,{"model-value":5,length:5,color:"amber",density:"compact",size:"small","half-increments":"",readonly:"",class:"mr-1"}),n[4]||(n[4]=f("span",{style:{"font-size":"14px"}},"4.5",-1)),n[5]||(n[5]=f("span",{class:"text-grey",style:{"font-size":"14px"}},"（1004）",-1))])]),n[12]||(n[12]=f("p",{class:"mb-5",style:{"font-size":"14px"}}," Coffee, signature roasts, light bite, quick bite, fast foods ",-1)),f("div",Tl,[t(ne,{icon:"mdi-map-marker",style:{"font-size":"16px","margin-right":"8px"}}),n[8]||(n[8]=B("The Dorothy Ross Friedman Residence, NY, US - ")),t(k,{to:"/restaurant/FoodMenu",style:{"text-decoration":"underline",color:"#757575"}},{default:r(()=>n[7]||(n[7]=[B(" Show Map ")])),_:1})]),f("div",Pl,[t(ne,{icon:"mdi-clock-outline",style:{"font-size":"16px","margin-right":"8px"}}),t(k,{to:"/restaurant/FoodMenu",style:{color:"#d23f57"}},{default:r(()=>n[9]||(n[9]=[B(" Open Now ")])),_:1}),n[10]||(n[10]=B("  - Sun - Mon: 9am - 10pm "))]),f("div",Il,[t(ne,{icon:"mdi-earth",style:{"font-size":"16px","margin-right":"8px"}}),t(k,{to:"/restaurant/FoodMenu",style:{color:"#757575"}},{default:r(()=>n[11]||(n[11]=[B(" www.starbucks.com ")])),_:1})])]),_:1})]),_:1}),f("div",null,[t(Xe,{modelValue:m.value,"onUpdate:modelValue":n[0]||(n[0]=w=>m.value=w),"align-tabs":"left",color:"#d23f57","slider-color":"#d23f57",class:"mb-8",style:{"font-size":"14px"}},{default:r(()=>[t(pe,{value:"option-1",class:"text-capitalize"},{default:r(()=>n[13]||(n[13]=[B(" Order Online ")])),_:1}),t(pe,{value:"option-2",class:"text-capitalize"},{default:r(()=>n[14]||(n[14]=[B(" Book a Table ")])),_:1}),t(pe,{value:"option-3",class:"text-capitalize"},{default:r(()=>n[15]||(n[15]=[B(" Reviews ")])),_:1})]),_:1},8,["modelValue"]),t(Qe,{modelValue:m.value,"onUpdate:modelValue":n[1]||(n[1]=w=>m.value=w)},{default:r(()=>[t(ge,{value:"option-1"},{default:r(()=>[t(dl)]),_:1}),t(ge,{value:"option-2"},{default:r(()=>[t(Jt)]),_:1}),t(ge,{value:"option-3"},{default:r(()=>[t(kl)]),_:1})]),_:1},8,["modelValue"])])]),_:1}),t(it,{modelValue:c.value,"onUpdate:modelValue":n[3]||(n[3]=w=>c.value=w),temporary:"",width:260,class:"position-fixed",style:{"z-index":"3006",top:"0",height:"100%",padding:"20px"}},{default:r(()=>[f("div",Al,[t(oe,{icon:"mdi-close",variant:"text",onClick:n[2]||(n[2]=w=>c.value=!c.value)})]),(P(),H(E,null,Q(u,(w,g)=>t(Ce,{key:g,value:w,class:Bt(["pa-0 w-100 d-inline-block mb-5",{"selected-item":v.value===g}]),style:{"min-height":"0px"},onClick:C=>p(g)},{default:r(()=>[B(I(w.name),1)]),_:2},1032,["value","class","onClick"])),64))]),_:1},8,["modelValue"])],64)}}},Ol=Ue(Rl,[["__scopeId","data-v-556897b7"]]);export{Ol as default};