import{l as O,o as d,n as N,q as o,j as e,v as s,A as h,r as u,H as te,I as oe,x as c,F as m,z as a,N as S,y as f,O as se,L as $}from"./index-BGwhzDjd.js";import{V as le,a as I,_ as E}from"./VRadioGroup-Dqw7dZLN.js";import{o as T,i as x,p as ne,k as U,_ as ae,V as g,f as p,g as i,h as C,j as n}from"./scopeId-C-zu6Anj.js";import{u as ie,b as R,V as D,a as B,c as re,d as A,e as M}from"./VNavigationDrawer-CZvTicd6.js";import{b as de,V as ue,a as ce}from"./VForm-p-Kypniy.js";import"./VSelectionControl-VBk8jeQW.js";const pe={style:{"font-size":"16px"}},me={class:"d-flex align-center"},fe={style:{"font-size":"12px"}},ge={__name:"ProductCardB",props:{item:{type:Object,required:!0}},setup(k){return(v,V)=>{const y=O("router-link");return d(),N(y,{to:k.item.to},{default:o(()=>[e(T,null,{default:o(()=>[e(x,{src:k.item.img,class:"align-end",height:"300",cover:""},{default:o(()=>[s("div",null,[e(ne,{class:"text-white"},{default:o(()=>[s("h5",pe,h(k.item.name),1),s("div",me,[s("p",fe,h(k.item.count)+" Places",1),e(U,{icon:"mdi-chevron-right",size:"x-small"})])]),_:1})])]),_:1},8,["src"])]),_:1})]),_:1},8,["to"])}}},xe={class:"homeHeader",style:{"background-image":"url('	https://foodhub-nuxt.vercel.app/_nuxt/img/header-bg.d39c465.png')","background-size":"cover"}},he={class:"mt-15"},ve={class:"d-flex align-center mb-15 mx-auto flex-wrap",style:{background:"#fff","border-radius":"4px"}},ye={class:"content w-100"},we={class:"bg w-100",style:{"background-color":"#f6f9fc"}},be={class:"d-flex justify-space-between align-center flex-wrap"},_e={style:{"font-size":"17px",color:"#616161"}},ke={class:"w-100 py-16",style:{"background-color":"#f6f9fc"}},Ve={class:"d-flex align-center mb-8 mx-auto flex-nowrap",style:{background:"#fff","border-radius":"4px",border:"1px solid #d9e1e6"}},ze={class:"px-3 px-md-10 py-8"},Ce={class:"d-flex align-center justify-center col-lg-8 col-10 pa-3 mx-5"},Fe={class:"d-flex flex-column"},je={class:"text-center my-3",style:{"font-size":"14px"}},De={class:"py-4",style:{"background-color":"#f6f9fc"}},Me={class:"text-center"},Be={class:"d-flex align-center justify-space-between mt-3 mb-2 pl-3"},Ne={class:"d-flex align-center"},Le={class:"d-flex flex-column justify-space-between",style:{height:"calc(100% - 68px)"}},Pe={class:"d-flex align-center mr-1"},Se={class:"mr-3 text-center"},$e={class:"my-1"},Ie={class:"d-flex flex-column"},Ee={class:"text-truncate",style:{"font-size":"16px",width:"110px"}},Re={style:{color:"#d23f57","font-size":"16px"}},Ae={class:"d-flex flex-column pa-2"},Oe={class:"d-flex align-center justify-space-between mt-3 mb-2 pl-3"},Te={__name:"index",setup(k){const v=ie(),V=u(!1),y=u(),F=u(),j=u(!1),w=u(!1),b=u(!1),Y=u(["Review","Photos","Order List","Order History","Followers","Bookmarks"]),G=u([{title:"Food Menu",to:"/resturant/FoodMenu"},{title:"Resturant Two Column",to:"/resturant/ResturantTwoColumn"},{title:"Search Resturant",to:"/"}]),q=()=>{y.value="",F.value=""},H=u(window.innerWidth>=960),W=[{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg",name:"Order Food Online",showLifestyle:!0,to:"/resturant/FoodMenu"},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg",name:"Go Out For Meal",showLifestyle:!0,to:"/resturant/FoodMenu"},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/17.3634737.jpg",name:"Nightlife & Clubs",showLifestyle:!0,to:"/resturant/FoodMenu"},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg",name:"Pro Membership",showLifestyle:!0,to:"/resturant/FoodMenu"}],Q=[{img:"https://media.istockphoto.com/id/1454217037/zh/%E7%85%A7%E7%89%87/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade-center.jpg?s=612x612&w=0&k=20&c=9ZeEQ6sBuQGdpIbE-_EbaiFSSjvV2mBGK0DQOjY1DG0=",name:"Best Of New York",count:26,to:""},{img:"https://media.istockphoto.com/id/1369814693/photo/los-angeles.jpg?s=612x612&w=0&k=20&c=DFV2MZegN9dGw--BF-24os350UwlrCgs25x93AH99Do=",name:"Best Of Los Angeles",count:14,to:""},{img:"https://www.shutterstock.com/image-photo/chicago-illinois-usa-on-lake-600nw-2421911865.jpg",name:"Best Of Chicago",count:10,to:""},{img:"https://heritageclubthc.com/wp-content/uploads/2023/08/iStock-1363707600.jpg",name:"Best Of Boston",count:20,to:""}],K=[{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/9.1c1a4aa.png",name:"Italian",to:"/resturant/FoodMenu"},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/10.4b83261.png",name:"Chinesse",to:"/resturant/FoodMenu"},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/11.53f677b.png",name:"Japanesse",to:"/resturant/FoodMenu"},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/12.95a2711.png",name:"Indian",to:"/resturant/FoodMenu"},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/13.b85d0c1.png",name:"Thai Food",to:"/resturant/FoodMenu"},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/14.05cff0f.png",name:"Mexican",to:"/resturant/FoodMenu"}],Z=[{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qcvQkilIuzWmKjUBi08r-ktFF3n_2X-BgA&s",name:"New York Cheesecake",rate:4.5,price:29.95,category:"Desserts",city:"New York",time:"3 - 5",discount:{hasDiscount:!0,value:65},to:"/resturant/FoodMenu"},{img:"https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg",name:"California Roll",rate:4.5,price:10,category:"Sushi",city:"Los Angeles",time:"3 - 5",discount:{hasDiscount:!0,value:60},to:"/resturant/FoodMenu"},{img:"https://t3.ftcdn.net/jpg/09/46/66/06/360_F_946660682_g6fHbVm33zRMHe9H3f0WDoi3fiupcKRW.jpg",name:"New York-style Pizza",rate:4.5,price:33.65,category:"Pizza",city:"New York",time:"3 - 5",discount:{hasDiscount:!1,value:30},to:"/resturant/FoodMenu"},{img:"https://www.mystateline.com/wp-content/uploads/sites/17/2023/02/AdobeStock_61641020_Preview.jpeg?w=1280",name:"Italian Beef Sandwich",rate:4.5,price:24,category:"Sandwiches",city:"Chicago",time:"8 - 10",discount:{hasDiscount:!0,value:55},to:"/resturant/FoodMenu"},{img:"https://static.vecteezy.com/system/resources/previews/027/537/012/non_2x/a-boston-cream-pie-with-chocolate-icing-on-a-plate-ai-generated-free-photo.jpeg",name:"Boston Cream Pie",rate:4,price:18.95,category:"Desserts",city:"Boston",time:"8 - 10",discount:{hasDiscount:!0,value:30},to:"/resturant/FoodMenu"},{img:"https://img.freepik.com/premium-photo/kolaches-filled-with-seasonal-fruits-yummy-delicious-kolaches-food-image-photography_1295756-183696.jpg",name:"Kolaches",rate:4,price:2.99,category:"Baking",city:"Houston",time:"8 - 10",discount:{hasDiscount:!1,value:30},to:"/resturant/FoodMenu"},{img:"https://img.freepik.com/premium-photo/chicagostyle-deep-dish-pizza-thick-crust-with-cheese-chunky-tomato-sauce_818261-25460.jpg",name:"Deep-Dish Pizza",rate:3.5,price:9.99,category:"Pizza",city:"Chicago",time:"15 - 20",discount:{hasDiscount:!1,value:30},to:"/resturant/FoodMenu"},{img:"https://d-mars.com/wp-content/uploads/2024/05/iStock-172410532-1.jpg",name:"Pecan Pie",rate:3,price:45,category:"Desserts",city:"Houston",time:"15 - 20",discount:{hasDiscount:!0,value:30},to:"/resturant/FoodMenu"}],L=u(["Dashboards"]),P=()=>{H.value=window.innerWidth>=960};te(()=>{window.addEventListener("resize",P)}),oe(()=>{window.removeEventListener("resize",P)});const J=_=>{v.addItemToCart(_)},X=_=>{v.decreaseQuantity(_)},ee=_=>{v.removeItemFromCart(_)};return(_,t)=>{const z=O("router-link");return d(),c(m,null,[s("div",xe,[e(g,null,{default:o(()=>[e(p,{class:"d-flex justify-space-between align-center"},{default:o(()=>[e(i,{cols:"7"},{default:o(()=>[e(p,{class:"d-flex align-center w-100"},{default:o(()=>[e(i,{cols:"12",class:"d-flex align-center justify-start"},{default:o(()=>[e(C,{style:{"margin-right":"16px"}},{default:o(()=>[e(z,{to:"/"},{default:o(()=>[e(x,{width:"48px",height:"48px",src:"https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{class:"d-flex align-center justify-end flex-nowrap",cols:"5"},{default:o(()=>[e(n,{"prepend-icon":"mdi-account-circle-outline",variant:"text",style:{color:"#fff"},onClick:t[0]||(t[0]=l=>V.value=!V.value)},{default:o(()=>t[12]||(t[12]=[s("span",{class:"hidden-text"},"ACCOUNT",-1)])),_:1}),e(n,{"prepend-icon":"mdi-cart-outline",variant:"text",style:{color:"#fff"},onClick:t[1]||(t[1]=l=>w.value=!w.value)},{default:o(()=>[a(h(S(v).items.length),1)]),_:1}),e(ue,{style:{color:"#fff"},onClick:t[2]||(t[2]=l=>b.value=!b.value)})]),_:1})]),_:1})]),_:1}),e(g,null,{default:o(()=>[s("div",he,[e(p,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>t[13]||(t[13]=[s("h1",{class:"text-center font-weight-regular mb-4",style:{color:"white","font-size":"48px"}},[a(" Discover the best food & drinks in "),s("span",{class:"font-weight-bold"},"New York")],-1),s("h4",{class:"text-center font-weight-light mb-5",style:{color:"white","font-size":"20px"}}," The meals you love, delivered with care ",-1)])),_:1})]),_:1}),e(p,null,{default:o(()=>[e(i,{class:"mx-auto",cols:"12",lg:"7"},{default:o(()=>[s("div",ve,[e(n,{"prepend-icon":"mdi-map-marker",variant:"plain",disabled:"",class:"text-capitalize"},{default:o(()=>t[14]||(t[14]=[a(" New York ")])),_:1}),e(n,{"prepend-icon":"mdi-crosshairs-gps",variant:"text",class:"rounded-0 theme--light text-capitalize",height:"40"},{default:o(()=>t[15]||(t[15]=[a(" Location ")])),_:1}),e(D,{placeholder:"Search for restaurant",density:"compact",variant:"plain","hide-details":"","single-line":"",style:{width:"210px"}}),e(n,{height:"40",class:"rounded-0 rounded-te rounded-be",density:"default",variant:"text",style:{color:"#fff","background-color":"#d23f57"},to:"/resturant/ResturantTwoColumn"},{default:o(()=>t[16]||(t[16]=[a(" Search ")])),_:1})])]),_:1})]),_:1})])]),_:1})]),s("div",ye,[s("div",we,[e(g,{class:"py-15"},{default:o(()=>[e(p,null,{default:o(()=>[(d(),c(m,null,f(W,(l,r)=>e(i,{key:r,sm:"6",md:"4",lg:"3",cols:"12"},{default:o(()=>[e(E,{item:l},null,8,["item"])]),_:2},1024)),64))]),_:1})]),_:1})]),e(g,{class:"py-15"},{default:o(()=>[e(p,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[t[19]||(t[19]=s("h2",null,"Collections",-1)),s("h6",be,[t[18]||(t[18]=s("span",{style:{color:"#9e9e9e","font-size":"14px","font-weight":"400"}}," Explore curated lists of top restaurants, cafes, pubs, and bars in New York, based on trends ",-1)),e(z,{to:"/",style:{color:"#d23f57","font-size":"16px"}},{default:o(()=>t[17]||(t[17]=[a(" View all collections ")])),_:1})])]),_:1}),(d(),c(m,null,f(Q,(l,r)=>e(i,{key:r,sm:"6",md:"4",lg:"3",cols:"12"},{default:o(()=>[e(ge,{item:l},null,8,["item"])]),_:2},1024)),64))]),_:1})]),_:1}),e(g,{class:"py-15"},{default:o(()=>[e(p,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>t[20]||(t[20]=[s("h2",null,"Browse By Cuisine",-1)])),_:1}),(d(),c(m,null,f(K,(l,r)=>e(i,{key:r,class:"text-center",sm:"6",md:"4",lg:"2",cols:"12"},{default:o(()=>[e(z,{to:l.to},{default:o(()=>[e(C,{class:"mb-4",size:"150"},{default:o(()=>[e(x,{src:l.img},null,8,["src"])]),_:2},1024),s("h4",_e,h(l.name),1)]),_:2},1032,["to"])]),_:2},1024)),64))]),_:1})]),_:1}),e(g,{class:"py-15"},{default:o(()=>[e(p,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>t[21]||(t[21]=[s("h2",null,"Popular Near You",-1)])),_:1}),(d(),c(m,null,f(Z,(l,r)=>e(i,{key:r,sm:"6",md:"4",lg:"3",cols:"12"},{default:o(()=>[e(E,{item:l},null,8,["item"])]),_:2},1024)),64))]),_:1})]),_:1}),s("div",ke,[e(g,{class:"mx-auto"},{default:o(()=>[e(p,{class:"d-flex justify-center align-center"},{default:o(()=>[e(i,{sm:"4",md:"3",lg:"3",cols:"12",class:"text-sm-right text-md-right text-lg-right text-center"},{default:o(()=>[e(x,{class:"d-inline-block",src:"https://foodhub-nuxt.vercel.app/_nuxt/img/App.4927ff9.png",cover:"",width:"185"})]),_:1}),e(i,{sm:"8",md:"9",lg:"9",cols:"12",style:{"max-width":"563px"}},{default:o(()=>[t[23]||(t[23]=s("h1",{style:{"font-size":"40px"}},"Get the Mobile App",-1)),t[24]||(t[24]=s("p",{style:{"font-size":"18px",color:"#757575"}}," We will send you a link, open it on your phone to download the app ",-1)),e(le,{class:"my-4",inline:"","hide-details":""},{default:o(()=>[e(I,{label:"Email",value:"Email",color:"red",class:"mr-4"}),e(I,{label:"Phone",value:"Phone",color:"red"})]),_:1}),s("div",Ve,[e(D,{placeholder:"Email",density:"compact",variant:"plain","hide-details":"","single-line":"",style:{width:"210px",padding:"0px 12px"}}),e(n,{height:"40",class:"rounded-0 rounded-te rounded-be",density:"default",variant:"text",style:{color:"#fff","background-color":"#d23f57"}},{default:o(()=>t[22]||(t[22]=[a(" Search ")])),_:1})]),t[25]||(t[25]=s("h6",{class:"mb-4",style:{"font-size":"14px",color:"#9e9e9e"}}," Download App from ",-1)),s("div",null,[e(C,{class:"rounded me-4",style:{width:"120px",height:"45px"}},{default:o(()=>[e(x,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/google-play.430ca54.png"})]),_:1}),e(C,{class:"rounded",style:{width:"120px",height:"45px"}},{default:o(()=>[e(x,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/app-store.63e3986.png"})]),_:1})])]),_:1})]),_:1})]),_:1})])]),e(de,{modelValue:V.value,"onUpdate:modelValue":t[6]||(t[6]=l=>V.value=l),"max-width":"500"},{default:o(()=>[e(T,null,{default:o(()=>[s("div",ze,[t[34]||(t[34]=s("h3",{class:"mb-2 text-center"},"Welcome To Foodie Locator",-1)),t[35]||(t[35]=s("h5",{class:"mb-9 text-center",style:{"font-size":"12px"}}," Log in with email & password ",-1)),e(ce,{onSubmit:se(q,["prevent"])},{default:o(()=>[t[27]||(t[27]=s("p",{class:"mb-1",style:{color:"#212121","font-size":"14px","font-weight":"300"}}," Email or Phone Number ",-1)),e(D,{modelValue:y.value,"onUpdate:modelValue":t[3]||(t[3]=l=>y.value=l),density:"compact",placeholder:"Example@gmail.com","prepend-inner-icon":"mdi-email-outline",variant:"outlined",required:"",rules:[()=>!!y.value||"This field is required"]},null,8,["modelValue","rules"]),t[28]||(t[28]=s("p",{class:"mb-1",style:{color:"#212121","font-size":"14px","font-weight":"300"}}," Password ",-1)),e(D,{modelValue:F.value,"onUpdate:modelValue":t[4]||(t[4]=l=>F.value=l),"append-inner-icon":j.value?"mdi-eye-off":"mdi-eye",type:j.value?"text":"password",density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined",required:"",rules:[()=>!!F.value||"This field is required"],class:"mb-2",autocomplete:"password","onClick:appendInner":t[5]||(t[5]=l=>j.value=!j.value)},null,8,["modelValue","append-inner-icon","type","rules"]),s("div",null,[e(n,{class:"w-100",style:{"background-color":"#d23f57",color:"#fff"},type:"submit"},{default:o(()=>t[26]||(t[26]=[a(" Login ")])),_:1})])]),_:1}),s("div",Ce,[e(B),t[29]||(t[29]=s("span",{class:"mx-4"},"on",-1)),e(B)]),s("div",Fe,[e(n,{class:"w-100 mb-4","prepend-icon":"mdi-facebook ",style:{"background-color":"#3f50b5",color:"#fff","font-weight":"400"}},{default:o(()=>t[30]||(t[30]=[a(" Continue With Facebook ")])),_:1}),e(n,{class:"w-100 mb-4","prepend-icon":"mdi-google ",style:{"background-color":"#1876d1",color:"#fff","font-weight":"400"}},{default:o(()=>t[31]||(t[31]=[a(" Continue With Google ")])),_:1}),s("p",je,[t[33]||(t[33]=a(" Don't have account?  ")),e(z,{style:{"text-decoration":"underline"},to:"/"},{default:o(()=>t[32]||(t[32]=[s("span",null," Sign Up ",-1)])),_:1})])])]),s("div",De,[s("p",Me,[t[37]||(t[37]=a(" Forgot Your Password  ")),e(z,{style:{"text-decoration":"underline"},to:"/"},{default:o(()=>t[36]||(t[36]=[s("span",null," Reset It ",-1)])),_:1})])])]),_:1})]),_:1},8,["modelValue"]),e(R,{modelValue:w.value,"onUpdate:modelValue":t[8]||(t[8]=l=>w.value=l),location:"right",temporary:"",width:296,class:"position-fixed",style:{"z-index":"3100",top:"0",height:"100%"}},{default:o(()=>[s("div",Be,[s("div",Ne,[e(U,{icon:"mdi-shopping-outline",class:"mr-3"}),t[38]||(t[38]=s("h4",{style:{"font-size":"20px",color:"#757575"}},"Cart",-1))]),e(n,{icon:"mdi-close",variant:"text",color:"#d23f57",onClick:t[7]||(t[7]=l=>w.value=!w.value)})]),e(B),s("div",Le,[s("div",null,[(d(!0),c(m,null,f(S(v).items,l=>(d(),c("div",{key:l,class:"pa-3 mb-4 d-flex align-center justify-space-between w-100"},[s("div",Pe,[s("div",Se,[e(n,{icon:"mdi-plus",density:"compact",color:"#d23f57",variant:"outlined",onClick:r=>J(l)},null,8,["onClick"]),s("p",$e,h(l.quantity),1),e(n,{icon:"mdi-minus",density:"compact",color:"#d23f57",variant:"outlined",onClick:r=>X(l)},null,8,["onClick"])]),e(C,{class:"mr-4 rounded",size:"64"},{default:o(()=>[e(x,{src:l.img},null,8,["src"])]),_:2},1024),s("div",Ie,[s("h5",Ee,h(l.name),1),t[39]||(t[39]=s("p",{style:{"font-size":"12px"}},"$530 x 1",-1)),s("h5",Re," $"+h(l.price),1)])]),s("div",null,[e(n,{icon:"mdi-close",variant:"text",color:"#000",onClick:r=>ee(l)},null,8,["onClick"])])]))),128))]),s("div",Ae,[e(n,{class:"w-100 mb-3 text-capitalize",color:"#d23f57"},{default:o(()=>t[40]||(t[40]=[a(" Checkout Now ($ 220) ")])),_:1}),e(n,{class:"w-100",variant:"outlined",color:"#d23f57"},{default:o(()=>t[41]||(t[41]=[a(" View Cart ")])),_:1})])])]),_:1},8,["modelValue"]),e(R,{modelValue:b.value,"onUpdate:modelValue":t[11]||(t[11]=l=>b.value=l),location:"left",temporary:"",width:296,class:"position-fixed",style:{"z-index":"3100",top:"0",height:"100%"}},{default:o(()=>[s("div",Oe,[t[42]||(t[42]=s("h4",{style:{"font-size":"20px",color:"#757575"}},"List",-1)),e(n,{icon:"mdi-close",variant:"text",color:"#757575",onClick:t[9]||(t[9]=l=>b.value=!b.value)})]),e(re,{opened:L.value,"onUpdate:opened":t[10]||(t[10]=l=>L.value=l)},{default:o(()=>[e(A,{value:"Dashboards"},{activator:o(({props:l})=>[e(M,$(l,{title:"Dashboards","prepend-icon":"mdi-view-dashboard-variant-outline",color:"#d23f57"}),null,16)]),default:o(()=>[(d(!0),c(m,null,f(Y.value,(l,r)=>(d(),N(M,{key:r,title:l,value:l},null,8,["title","value"]))),128))]),_:1}),e(A,{value:"Restaurant"},{activator:o(({props:l})=>[e(M,$(l,{title:"Restaurant","prepend-icon":"mdi-view-dashboard-variant-outline",color:"#d23f57"}),null,16)]),default:o(()=>[(d(!0),c(m,null,f(G.value,l=>(d(),N(M,{key:l.title,title:l.title,to:l.to},null,8,["title","to"]))),128))]),_:1})]),_:1},8,["opened"])]),_:1},8,["modelValue"])],64)}}},Qe=ae(Te,[["__scopeId","data-v-10e87f33"]]);export{Qe as default};