import{l as M,r as B,m as F,q as K,_ as V,c as H,o as d,b as m,d as i,s as z,x as p,z as N,n as R,y as j,F as _,e as b,a as T,j as y,w as v,p as Y,i as q,g as I,k as D,v as E}from"./index.5c07d7fd.js";import{c as J,s as O}from"./slide.fc0c8479.js";function G({props:n,carouselsInner:t}){const r=M(null),e=M(0),f=M(0),S=M(null),a=M(!0),c=M(10),l=B({isPressed:!1,startX:0,offsetLeft:null,carouselLeft:"0%",offsetWidth:0}),P=()=>{a.value&&(f.value-=1,a.value=!1)},u=()=>{a.value&&(f.value+=1,a.value=!1)},s=o=>{f.value=o},g=()=>{n.autoPlay&&(S.value=setInterval(()=>{u()},n.timeDetention))},L=()=>{clearInterval(S.value)},A=()=>{a.value=!0};F(f,(o,h)=>{o<0?(f.value=0,A()):o>e.value-1?(f.value=e.value-1,A()):x()});const U=o=>{l.isPressed=!0,l.startX=o.pageX,l.offsetLeft=t.value.offsetLeft,l.offsetWidth=t.value.offsetWidth},X=o=>{if(!l.isPressed)return;o.preventDefault();const h=(o.pageX-(l.startX-l.offsetLeft))/l.offsetWidth*e.value*100,w=(l.startX-o.pageX)/(l.offsetWidth/e.value)*100;o.pageX<l.startX&&w>0&&w>c.value?(o.preventDefault(),u(),l.isPressed=!1,a.value=!1):o.pageX>l.startX&&w<0&&w<-c.value?(o.preventDefault(),P(),l.isPressed=!1,a.value=!1):l.carouselLeft=`${h}%`},C=o=>{l.isPressed=!1},W=o=>{l.isPressed=!1;const h=(l.startX-o.pageX)/(l.offsetWidth/e.value)*100;(o.pageX<l.startX&&h>0&&h<c.value||o.pageX>l.startX&&h<0&&h>-c.value)&&x()},x=()=>{let o=8,h=n.perPage*o,w=f.value*h;l.carouselLeft=`calc(-${f.value*100}% + -${w}px)`};return K(()=>{r.value=[...t.value.children].filter(o=>o.className==="owl-slide"),e.value=Math.ceil(r.value.length/n.perPage),n.autoPlay&&g()}),{currentSlide:f,slideAmount:e,isTransitionend:a,carouselState:l,prevSlide:P,nextSlide:u,changeSlide:s,enabledAutoPlay:g,pauseAutoPlay:L,toggleActive:A,handleMouseDown:U,handleMouseMove:X,handleMouseLeave:C,handleMouseUp:W}}const Q={name:"owl-carousel",props:{perPage:{type:Number,default:1},autoPlay:{type:Boolean,default:!0},timeDetention:{type:Number,default:5e3},navigationEnabled:{type:Boolean,default:!0},paginationEnabled:{type:Boolean,default:!0},navigationBtnSmall:{type:Boolean,default:!1},customItemWidth:{type:Number,default:null},customItemHeight:{type:Number,default:null}},setup(n){const t=M(null),r=M(null),e=H(()=>n.navigationEnabled?n.navigationEnabled:!0),f=H(()=>n.paginationEnabled?n.paginationEnabled:!0),{currentSlide:S,slideAmount:a,isTransitionend:c,carouselState:l,prevSlide:P,nextSlide:u,changeSlide:s,enabledAutoPlay:g,pauseAutoPlay:L,toggleActive:A,handleMouseDown:U,handleMouseMove:X,handleMouseLeave:C,handleMouseUp:W}=G({props:n,carouselsInner:r}),x=()=>{console.log("tD")},o=()=>{console.log("tE")},h=()=>{console.log("tC")},w=()=>{console.log("tM")};return K(()=>{r.value.ontransitionend=()=>A(),r.value.ontransitioncancel=()=>A()}),{owlCarousels:t,carouselsInner:r,carouselState:l,currentSlide:S,slideAmount:a,isTransitionend:c,navigationEnabled:e,paginationEnabled:f,handleMouseDown:U,handleMouseLeave:C,handleMouseUp:W,handleMouseMove:X,prevSlide:P,nextSlide:u,changeSlide:s,enabledAutoPlay:g,pauseAutoPlay:L,tD:x,tE:o,tC:h,tM:w}}},Z={key:1,class:"pagination"},$=["onClick"];function ee(n,t,r,e,f,S){return d(),m("div",{class:"owl-carousel",ref:"owlCarousels",style:N({"--customItemWidth":r.customItemWidth?`${r.customItemWidth}px`:"100vw","--customItemHeight":r.customItemHeight?`${r.customItemHeight}px`:"100vh","--perPage":r.perPage,"--currentSlide":e.currentSlide})},[i("div",{class:"carousel-inner",ref:"carouselsInner",onMousedown:t[0]||(t[0]=p((...a)=>e.handleMouseDown&&e.handleMouseDown(...a),["prevent"])),onMouseleave:t[1]||(t[1]=p((...a)=>e.handleMouseLeave&&e.handleMouseLeave(...a),["prevent"])),onMouseup:t[2]||(t[2]=p((...a)=>e.handleMouseUp&&e.handleMouseUp(...a),["prevent"])),onMousemove:t[3]||(t[3]=p((...a)=>e.handleMouseMove&&e.handleMouseMove(...a),["prevent"])),onTouchstart:t[4]||(t[4]=p((...a)=>e.handleMouseDown&&e.handleMouseDown(...a),["prevent"])),onTouchcancel:t[5]||(t[5]=p((...a)=>e.handleMouseLeave&&e.handleMouseLeave(...a),["prevent"])),onTouchend:t[6]||(t[6]=p((...a)=>e.handleMouseUp&&e.handleMouseUp(...a),["prevent"])),onTouchmove:t[7]||(t[7]=p((...a)=>e.handleMouseMove&&e.handleMouseMove(...a),["prevent"])),style:N({"--carouselLeft":e.carouselState.carouselLeft})},[z(n.$slots,"default",{currentSlide:e.currentSlide},void 0,!0)],36),e.navigationEnabled?(d(),m("div",{key:0,class:R(["navigation",{"nav-small":r.navigationBtnSmall}])},[i("button",{class:"btn-icon btn-navigation icon-arrow-left",onClick:t[8]||(t[8]=p(a=>e.prevSlide(),["self"])),onMouseover:t[9]||(t[9]=(...a)=>e.pauseAutoPlay&&e.pauseAutoPlay(...a)),onMouseout:t[10]||(t[10]=(...a)=>e.enabledAutoPlay&&e.enabledAutoPlay(...a)),onTouchstart:t[11]||(t[11]=(...a)=>e.pauseAutoPlay&&e.pauseAutoPlay(...a)),onTouchend:t[12]||(t[12]=(...a)=>e.enabledAutoPlay&&e.enabledAutoPlay(...a))},null,32),i("button",{class:"btn-icon btn-navigation icon-arrow-right",onClick:t[13]||(t[13]=p(a=>e.nextSlide(),["self"])),onMouseover:t[14]||(t[14]=(...a)=>e.pauseAutoPlay&&e.pauseAutoPlay(...a)),onMouseout:t[15]||(t[15]=(...a)=>e.enabledAutoPlay&&e.enabledAutoPlay(...a)),onTouchstart:t[16]||(t[16]=(...a)=>e.pauseAutoPlay&&e.pauseAutoPlay(...a)),onTouchend:t[17]||(t[17]=(...a)=>e.enabledAutoPlay&&e.enabledAutoPlay(...a))},null,32)],2)):j("",!0),e.paginationEnabled?(d(),m("div",Z,[(d(!0),m(_,null,b(e.slideAmount,(a,c)=>(d(),m("button",{class:R(["btn-icon btn-pagination",{active:e.currentSlide==c}]),key:c,onClick:p(l=>e.changeSlide(c),["self"]),onMouseover:t[18]||(t[18]=(...l)=>e.pauseAutoPlay&&e.pauseAutoPlay(...l)),onMouseout:t[19]||(t[19]=(...l)=>e.enabledAutoPlay&&e.enabledAutoPlay(...l)),onTouchstart:t[20]||(t[20]=(...l)=>e.pauseAutoPlay&&e.pauseAutoPlay(...l)),onTouchend:t[21]||(t[21]=(...l)=>e.enabledAutoPlay&&e.enabledAutoPlay(...l))},null,42,$))),128))])):j("",!0)],4)}const te=V(Q,[["render",ee],["__scopeId","data-v-652a3a30"]]),ae={name:"slideInner",setup(){}},le={class:"owl-slide",ref:"slideInner"};function oe(n,t,r,e,f,S){return d(),m("div",le,[z(n.$slots,"default")],512)}const ne=V(ae,[["render",oe]]);const se={components:{carousel:J,owlCarousel:te,slide:O,owlSlide:ne},setup(){const n=B([{url:"",media:new URL("/Vue-UI-Kit/assets/annie-spratt-S7viz8JWxwY-unsplash.be1dc3eb.jpg",self.location).href,mediaText:"annie"},{url:"",media:new URL("/Vue-UI-Kit/assets/daiga-ellaby-ClWvcrkBhMY-unsplash.50a320f8.jpg",self.location).href,mediaText:"daiga"},{url:"",media:new URL("/Vue-UI-Kit/assets/josefin-WS5yjFjycNY-unsplash.b5bc7055.jpg",self.location).href,mediaText:"daiga"}]),t=B([{url:"https://www.pexels.com/video/black-and-white-video-of-people-853889/",media:new URL("/Vue-UI-Kit/assets/Pexels-Videos-2670.822671fb.mp4",self.location).href,mediaText:""},{url:"https://www.pexels.com/video/people-watching-a-band-854054/",media:new URL("/Vue-UI-Kit/assets/Pexels-Videos-2834.1d932ede.mp4",self.location).href,mediaText:""},{url:"https://www.pexels.com/video/video-of-people-walking-855564/",media:new URL("/Vue-UI-Kit/assets/Video-Of-People-Walking.e32f2150.mp4",self.location).href,mediaText:""}]);return{images:n,videos:t}}},k=n=>(Y("data-v-0d320c55"),n=n(),q(),n),ie={class:"images"},ue=["src","alt"],de={class:"images"},re=["src","alt"],ce={class:"images"},fe=k(()=>i("img",{src:"https://picsum.photos/400/400",alt:"picsum"},null,-1)),ve={class:"images"},me=k(()=>i("img",{src:"https://picsum.photos/400/400",alt:"picsum"},null,-1)),ge={class:"images"},he=["src","alt"],pe=k(()=>i("p",null,"\u4E0D\u555F\u7528\u81EA\u52D5\u8F2A\u64AD",-1)),ye={class:"images"},_e=["src","alt"],Pe=k(()=>i("p",null,"\u5F71\u7247",-1)),we={class:"videos"},be=["href"],Me=["src","alt"];function Se(n,t,r,e,f,S){const a=T("owlSlide"),c=T("owlCarousel"),l=T("slide"),P=T("carousel",!0);return d(),m(_,null,[i("div",ie,[y(c,{autoPlay:!1,customItemHeight:400},{default:v(()=>[(d(!0),m(_,null,b(e.images,(u,s)=>(d(),I(a,{key:s},{default:v(()=>[i("img",{src:u.media,alt:u.mediaText},null,8,ue)]),_:2},1024))),128))]),_:1})]),i("div",de,[y(c,{autoPlay:!1,perPage:1,customItemHeight:400},{default:v(()=>[(d(!0),m(_,null,b(e.videos,(u,s)=>(d(),I(a,{key:s},{default:v(()=>[i("video",{src:u.media,alt:u.mediaText,muted:"",autoplay:"",loop:"",playsInline:""},null,8,re)]),_:2},1024))),128))]),_:1})]),i("div",ce,[y(c,{autoPlay:!1,perPage:4,customItemHeight:400},{default:v(()=>[(d(),m(_,null,b(12,(u,s)=>y(a,{key:s},{default:v(()=>[fe]),_:2},1024)),64))]),_:1})]),i("div",ve,[y(c,{autoPlay:!1,perPage:6,customItemWidth:400,customItemHeight:400},{default:v(()=>[(d(),m(_,null,b(12,(u,s)=>y(a,{key:s},{default:v(()=>[me]),_:2},1024)),64))]),_:1})]),i("div",ge,[y(P,{customHeight:400},{default:v(({currentSlide:u})=>[(d(!0),m(_,null,b(e.images,(s,g)=>D((d(),I(l,{key:g},{default:v(()=>[i("img",{src:s.media,alt:s.mediaText},null,8,he)]),_:2},1024)),[[E,g===u]])),128))]),_:1})]),pe,i("div",ye,[y(P,{autoPlay:!1,navigationBtnSmall:!0,customHeight:200,customWidth:200},{default:v(({currentSlide:u})=>[(d(!0),m(_,null,b(e.images,(s,g)=>D((d(),I(l,{key:g},{default:v(()=>[i("img",{src:s.media,alt:s.mediaText},null,8,_e)]),_:2},1024)),[[E,g===u]])),128))]),_:1})]),Pe,i("div",we,[y(P,null,{default:v(({currentSlide:u})=>[(d(!0),m(_,null,b(e.videos,(s,g)=>D((d(),I(l,{key:g},{default:v(()=>[i("a",{href:s.url,target:"_blank"},[i("video",{src:s.media,alt:s.mediaText,muted:"",autoplay:"",loop:"",playsInline:""},null,8,Me)],8,be)]),_:2},1024)),[[E,g===u]])),128))]),_:1})])],64)}const xe=V(se,[["render",Se],["__scopeId","data-v-0d320c55"]]);export{xe as default};