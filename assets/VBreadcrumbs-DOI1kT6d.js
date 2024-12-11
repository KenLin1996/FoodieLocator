import{m as ve,b as O,e as fe,f as z}from"./VSelectionControl-DkIv2yHl.js";import{p as x,R as q,g as B,J as R,e as g,i as w,$ as A,j as u,L as T,r as X,F as L,aF as J,m as _,b as H,c as me,d as be,C as he,S as ge,s as M,G as ye,a2 as Ve,W as K,an as Ce,a1 as N,K as ke,X as Se,k as D,_ as xe,t as C,D as Q,aG as Be}from"./index-CxTg6CYq.js";import{r as we,v as Z,j as Y,y as Ie,C as Te,E as Pe,ai as $e,aj as We,a4 as _e,ak as Ee,a5 as Re,M as Xe,a9 as p,af as ee,u as te,x as Ye,aa as He,ad as Me,b as De,e as Ae,k as Le,l as Ge}from"./VNavigationDrawer-sR-NTLA9.js";const je=x({indeterminate:Boolean,indeterminateIcon:{type:q,default:"$checkboxIndeterminate"},...ve({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ft=B()({name:"VCheckboxBtn",props:je(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:t}=a;const n=R(e,"indeterminate"),s=R(e,"modelValue");function i(l){n.value&&(n.value=!1)}const o=g(()=>n.value?e.indeterminateIcon:e.falseIcon),d=g(()=>n.value?e.indeterminateIcon:e.trueIcon);return w(()=>{const l=A(O.filterProps(e),["modelValue"]);return u(O,T(l,{modelValue:s.value,"onUpdate:modelValue":[c=>s.value=c,i],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:o.value,trueIcon:d.value,"aria-checked":n.value?"mixed":void 0}),t)}),{}}}),G=Symbol.for("vuetify:v-tabs"),Oe=x({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...A(we({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ze=B()({name:"VTab",props:Oe(),setup(e,a){let{slots:t,attrs:n}=a;const{textColorClasses:s,textColorStyles:i}=Z(e,"sliderColor"),o=X(),d=X(),l=g(()=>e.direction==="horizontal"),c=g(()=>{var b,v;return((v=(b=o.value)==null?void 0:b.group)==null?void 0:v.isSelected.value)??!1});function V(b){var r,f;let{value:v}=b;if(v){const y=(f=(r=o.value)==null?void 0:r.$el.parentElement)==null?void 0:f.querySelector(".v-tab--selected .v-tab__slider"),k=d.value;if(!y||!k)return;const E=getComputedStyle(y).color,P=y.getBoundingClientRect(),$=k.getBoundingClientRect(),m=l.value?"x":"y",h=l.value?"X":"Y",S=l.value?"right":"bottom",I=l.value?"width":"height",ie=P[m],ue=$[m],W=ie>ue?P[S]-$[S]:P[m]-$[m],ce=Math.sign(W)>0?l.value?"right":"bottom":Math.sign(W)<0?l.value?"left":"top":"center",re=(Math.abs(W)+(Math.sign(W)<0?P[I]:$[I]))/Math.max(P[I],$[I])||0,de=P[I]/$[I]||0,j=1.5;Te(k,{backgroundColor:[E,"currentcolor"],transform:[`translate${h}(${W}px) scale${h}(${de})`,`translate${h}(${W/j}px) scale${h}(${(re-1)/j+1})`,"none"],transformOrigin:Array(3).fill(ce)},{duration:225,easing:Pe})}}return w(()=>{const b=Y.filterProps(e);return u(Y,T({symbol:G,ref:o,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},b,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":V}),{...t,default:()=>{var v;return u(L,null,[((v=t.default)==null?void 0:v.call(t))??e.text,!e.hideSlider&&u("div",{ref:d,class:["v-tab__slider",s.value],style:i.value},null)])}})}),Ie({},o)}}),Fe=e=>{const{touchstartX:a,touchendX:t,touchstartY:n,touchendY:s}=e,i=.5,o=16;e.offsetX=t-a,e.offsetY=s-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<a-o&&e.left(e),e.right&&t>a+o&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&s<n-o&&e.up(e),e.down&&s>n+o&&e.down(e))};function Ue(e,a){var n;const t=e.changedTouches[0];a.touchstartX=t.clientX,a.touchstartY=t.clientY,(n=a.start)==null||n.call(a,{originalEvent:e,...a})}function qe(e,a){var n;const t=e.changedTouches[0];a.touchendX=t.clientX,a.touchendY=t.clientY,(n=a.end)==null||n.call(a,{originalEvent:e,...a}),Fe(a)}function Je(e,a){var n;const t=e.changedTouches[0];a.touchmoveX=t.clientX,a.touchmoveY=t.clientY,(n=a.move)==null||n.call(a,{originalEvent:e,...a})}function Ke(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ue(t,a),touchend:t=>qe(t,a),touchmove:t=>Je(t,a)}}function Ne(e,a){var d;const t=a.value,n=t!=null&&t.parent?e.parentElement:e,s=(t==null?void 0:t.options)??{passive:!0},i=(d=a.instance)==null?void 0:d.$.uid;if(!n||!i)return;const o=Ke(a.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[i]=o,J(o).forEach(l=>{n.addEventListener(l,o[l],s)})}function Qe(e,a){var i,o;const t=(i=a.value)!=null&&i.parent?e.parentElement:e,n=(o=a.instance)==null?void 0:o.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const s=t._touchHandlers[n];J(s).forEach(d=>{t.removeEventListener(d,s[d])}),delete t._touchHandlers[n]}const ne={mounted:Ne,unmounted:Qe},ae=Symbol.for("vuetify:v-window"),oe=Symbol.for("vuetify:v-window-group"),se=x({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},..._(),...H(),...me()},"VWindow"),F=B()({name:"VWindow",directives:{Touch:ne},props:se(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:n}=be(e),{isRtl:s}=he(),{t:i}=ge(),o=$e(e,oe),d=X(),l=g(()=>s.value?!e.reverse:e.reverse),c=M(!1),V=g(()=>{const m=e.direction==="vertical"?"y":"x",S=(l.value?!c.value:c.value)?"-reverse":"";return`v-window-${m}${S}-transition`}),b=M(0),v=X(void 0),r=g(()=>o.items.value.findIndex(m=>o.selected.value.includes(m.id)));ye(r,(m,h)=>{const S=o.items.value.length,I=S-1;S<=2?c.value=m<h:m===I&&h===0?c.value=!0:m===0&&h===I?c.value=!1:c.value=m<h}),Ve(ae,{transition:V,isReversed:c,transitionCount:b,transitionHeight:v,rootRef:d});const f=g(()=>e.continuous||r.value!==0),y=g(()=>e.continuous||r.value!==o.items.value.length-1);function k(){f.value&&o.prev()}function E(){y.value&&o.next()}const P=g(()=>{const m=[],h={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:o.prev,"aria-label":i("$vuetify.carousel.prev")};m.push(f.value?t.prev?t.prev({props:h}):u(Y,h,null):u("div",null,null));const S={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:o.next,"aria-label":i("$vuetify.carousel.next")};return m.push(y.value?t.next?t.next({props:S}):u(Y,S,null):u("div",null,null)),m}),$=g(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?k():E()},right:()=>{l.value?E():k()},start:h=>{let{originalEvent:S}=h;S.stopPropagation()}},...e.touch===!0?{}:e.touch});return w(()=>K(u(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var m,h;return[u("div",{class:"v-window__container",style:{height:v.value}},[(m=t.default)==null?void 0:m.call(t,{group:o}),e.showArrows!==!1&&u("div",{class:"v-window__controls"},[P.value])]),(h=t.additional)==null?void 0:h.call(t,{group:o})]}}),[[Ce("touch"),$.value]])),{group:o}}}),Ze=x({...A(se(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),pe=B()({name:"VTabsWindow",props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const n=N(G,null),s=R(e,"modelValue"),i=g({get(){var o;return s.value!=null||!n?s.value:(o=n.items.value.find(d=>n.selected.value.includes(d.id)))==null?void 0:o.value},set(o){s.value=o}});return w(()=>{const o=F.filterProps(e);return u(F,T({_as:"VTabsWindow"},o,{modelValue:i.value,"onUpdate:modelValue":d=>i.value=d,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),t)}),{}}}),le=x({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},..._(),...We(),..._e()},"VWindowItem"),U=B()({name:"VWindowItem",directives:{Touch:ne},props:le(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const n=N(ae),s=Ee(e,oe),{isBooted:i}=ke();if(!n||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=M(!1),d=g(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!o.value||!n||(o.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var f;o.value||!n||(o.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=D((f=n.rootRef.value)==null?void 0:f.clientHeight)),n.transitionCount.value+=1)}function V(){l()}function b(f){o.value&&xe(()=>{!d.value||!o.value||!n||(n.transitionHeight.value=D(f.clientHeight))})}const v=g(()=>{const f=n.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof f!="string"?n.transition.value:f,onBeforeEnter:c,onAfterEnter:l,onEnterCancelled:V,onBeforeLeave:c,onAfterLeave:l,onLeaveCancelled:V,onEnter:b}:!1}),{hasContent:r}=Re(e,s.isSelected);return w(()=>u(Xe,{transition:v.value,disabled:!i.value},{default:()=>{var f;return[K(u("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[r.value&&((f=t.default)==null?void 0:f.call(t))]),[[Se,s.isSelected.value]])]}})),{groupItem:s}}}),et=x({...le()},"VTabsWindowItem"),tt=B()({name:"VTabsWindowItem",props:et(),setup(e,a){let{slots:t}=a;return w(()=>{const n=U.filterProps(e);return u(U,T({_as:"VTabsWindowItem"},n,{class:["v-tabs-window-item",e.class],style:e.style}),t)}),{}}});function nt(e){return e?e.map(a=>Be(a)?a:{text:a,value:a}):[]}const at=x({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...fe({mandatory:"force",selectedClass:"v-tab-item--selected"}),...p(),...H()},"VTabs"),mt=B()({name:"VTabs",props:at(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:t,slots:n}=a;const s=R(e,"modelValue"),i=g(()=>nt(e.items)),{densityClasses:o}=ee(e),{backgroundColorClasses:d,backgroundColorStyles:l}=te(C(e,"bgColor")),{scopeId:c}=Ye();return Q({VTab:{color:C(e,"color"),direction:C(e,"direction"),stacked:C(e,"stacked"),fixed:C(e,"fixedTabs"),sliderColor:C(e,"sliderColor"),hideSlider:C(e,"hideSlider")}}),w(()=>{const V=z.filterProps(e),b=!!(n.window||e.items.length>0);return u(L,null,[u(z,T(V,{modelValue:s.value,"onUpdate:modelValue":v=>s.value=v,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,d.value,e.class],style:[{"--v-tabs-height":D(e.height)},l.value,e.style],role:"tablist",symbol:G},c,t),{default:()=>{var v;return[((v=n.default)==null?void 0:v.call(n))??i.value.map(r=>{var f;return((f=n.tab)==null?void 0:f.call(n,{item:r}))??u(ze,T(r,{key:r.text,value:r.value}),{default:n[`tab.${r.value}`]?()=>{var y;return(y=n[`tab.${r.value}`])==null?void 0:y.call(n,{item:r})}:void 0})})]}}),b&&u(pe,T({modelValue:s.value,"onUpdate:modelValue":v=>s.value=v,key:"tabs-window"},c),{default:()=>{var v;return[i.value.map(r=>{var f;return((f=n.item)==null?void 0:f.call(n,{item:r}))??u(tt,{value:r.value},{default:()=>{var y;return(y=n[`item.${r.value}`])==null?void 0:y.call(n,{item:r})}})}),(v=n.window)==null?void 0:v.call(n)]}})])}),{}}}),ot=x({divider:[Number,String],..._()},"VBreadcrumbsDivider"),st=B()({name:"VBreadcrumbsDivider",props:ot(),setup(e,a){let{slots:t}=a;return w(()=>{var n;return u("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=t==null?void 0:t.default)==null?void 0:n.call(t))??e.divider])}),{}}}),lt=x({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,..._(),...He(),...H({tag:"li"})},"VBreadcrumbsItem"),it=B()({name:"VBreadcrumbsItem",props:lt(),setup(e,a){let{slots:t,attrs:n}=a;const s=Me(e,n),i=g(()=>{var c;return e.active||((c=s.isActive)==null?void 0:c.value)}),o=g(()=>i.value?e.activeColor:e.color),{textColorClasses:d,textColorStyles:l}=Z(o);return w(()=>u(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":i.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:i.value&&e.activeClass},d.value,e.class],style:[l.value,e.style],"aria-current":i.value?"page":void 0},{default:()=>{var c,V;return[s.isLink.value?u("a",T({class:"v-breadcrumbs-item--link",onClick:s.navigate},s.linkProps),[((V=t.default)==null?void 0:V.call(t))??e.title]):((c=t.default)==null?void 0:c.call(t))??e.title]}})),{}}}),ut=x({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:q,items:{type:Array,default:()=>[]},..._(),...p(),...De(),...H({tag:"ul"})},"VBreadcrumbs"),bt=B()({name:"VBreadcrumbs",props:ut(),setup(e,a){let{slots:t}=a;const{backgroundColorClasses:n,backgroundColorStyles:s}=te(C(e,"bgColor")),{densityClasses:i}=ee(e),{roundedClasses:o}=Ae(e);Q({VBreadcrumbsDivider:{divider:C(e,"divider")},VBreadcrumbsItem:{activeClass:C(e,"activeClass"),activeColor:C(e,"activeColor"),color:C(e,"color"),disabled:C(e,"disabled")}});const d=g(()=>e.items.map(l=>typeof l=="string"?{item:{title:l},raw:l}:{item:l,raw:l}));return w(()=>{const l=!!(t.prepend||e.icon);return u(e.tag,{class:["v-breadcrumbs",n.value,i.value,o.value,e.class],style:[s.value,e.style]},{default:()=>{var c;return[l&&u("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?u(Ge,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):u(Le,{key:"prepend-icon",start:!0,icon:e.icon},null)]),d.value.map((V,b,v)=>{var y;let{item:r,raw:f}=V;return u(L,null,[((y=t.item)==null?void 0:y.call(t,{item:r,index:b}))??u(it,T({key:b,disabled:b>=v.length-1},typeof r=="string"?{title:r}:r),{default:t.title?()=>{var k;return(k=t.title)==null?void 0:k.call(t,{item:r,index:b})}:void 0}),b<v.length-1&&u(st,null,{default:t.divider?()=>{var k;return(k=t.divider)==null?void 0:k.call(t,{item:f,index:b})}:void 0})])}),(c=t.default)==null?void 0:c.call(t)]}})}),{}}});export{ft as V,mt as a,ze as b,pe as c,tt as d,bt as e,je as m};
