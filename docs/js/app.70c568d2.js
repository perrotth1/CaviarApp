(function(e){function t(t){for(var c,i,r=t[0],l=t[1],o=t[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);b&&b(t);while(d.length)d.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(c=!1)}c&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var c={},s={app:0},n=[];function i(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"be6bcda4"}[e]+".js"}function r(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,c){a=s[e]=[t,c]}));t.push(a[2]=c);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(e);var o=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",o.name="ChunkLoadError",o.type=c,o.request=n,a[1](o)}s[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=c,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(a,c,function(t){return e[t]}.bind(null,c));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3749:function(e,t,a){e.exports=a.p+"img/user1avatar.b996cd9c.png"},"455b":function(e,t,a){},"55a2":function(e,t,a){e.exports=a.p+"img/CAVIARlogo.8d99bef9.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");function s(e,t,a,s,n,i){var r=Object(c["B"])("Nav"),l=Object(c["B"])("router-view");return Object(c["v"])(),Object(c["g"])("div",null,[Object(c["k"])(r),Object(c["k"])(l)])}var n=a("55a2"),i=a.n(n),r=a("3749"),l=a.n(r),o={class:"navbar is-spaced",role:"navigation","aria-label":"main navigation",style:{"background-color":"black"}},u={class:"navbar-brand"},b=Object(c["h"])("img",{src:i.a,height:"28"},null,-1),d=Object(c["h"])("span",{"aria-hidden":"true"},null,-1),h=Object(c["h"])("span",{"aria-hidden":"true"},null,-1),v=Object(c["h"])("span",{"aria-hidden":"true"},null,-1),p=[d,h,v],m={class:"navbar-start"},j=Object(c["h"])("figure",{class:"image"},[Object(c["h"])("img",{src:l.a})],-1),O=Object(c["h"])("span",{class:"icon"},[Object(c["h"])("i",{class:"fas fa-home"})],-1),f=Object(c["h"])("span",{class:"icon"},[Object(c["h"])("i",{class:"fas fa-search"})],-1),g=Object(c["h"])("span",{class:"icon"},[Object(c["h"])("i",{class:"fas fa-comment-alt"})],-1),y={class:"navbar-item has-dropdown is-hoverable"},k=Object(c["h"])("a",{class:"navbar-link"}," More ",-1),x={class:"navbar-dropdown"},P=Object(c["j"])(" About "),_=Object(c["j"])(" Contact "),w={class:"navbar-end"},S={class:"navbar-item"};function L(e,t,a,s,n,i){var r=Object(c["B"])("router-link"),l=Object(c["B"])("LoginBadge");return Object(c["v"])(),Object(c["g"])("nav",o,[Object(c["h"])("div",u,[Object(c["k"])(r,{class:"navbar-item",to:"/"},{default:Object(c["K"])((function(){return[b]})),_:1}),Object(c["h"])("a",{role:"button",class:Object(c["r"])(["navbar-burger",{"is-active":n.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(e){return n.isActive=!n.isActive})},p,2)]),Object(c["h"])("div",{class:Object(c["r"])(["navbar-menu",{"is-active":n.isActive}])},[Object(c["h"])("div",m,[Object(c["k"])(r,{class:"navbar-item",to:"/profile","active-class":"is-active"},{default:Object(c["K"])((function(){return[j]})),_:1}),Object(c["k"])(r,{class:"navbar-item",to:"/","active-class":"is-active",exact:""},{default:Object(c["K"])((function(){return[O]})),_:1}),Object(c["k"])(r,{class:"navbar-item",to:"/","active-class":"is-active"},{default:Object(c["K"])((function(){return[f]})),_:1}),Object(c["k"])(r,{class:"navbar-item",to:"/post","active-class":"is-active"},{default:Object(c["K"])((function(){return[g]})),_:1}),Object(c["h"])("div",y,[k,Object(c["h"])("div",x,[Object(c["k"])(r,{class:"navbar-item",to:"/","active-class":"is-active"},{default:Object(c["K"])((function(){return[P]})),_:1}),Object(c["k"])(r,{class:"navbar-item",to:"/","active-class":"is-active"},{default:Object(c["K"])((function(){return[_]})),_:1})])])]),Object(c["h"])("div",w,[Object(c["h"])("div",S,[Object(c["k"])(l)])])],2)])}a("b0c0");var C={key:0,class:"buttons"},A=Object(c["h"])("strong",null,"Sign up",-1),I=Object(c["j"])(" Log in "),B={key:1};function U(e,t,a,s,n,i){var r=Object(c["B"])("router-link");return n.Session.user?(Object(c["v"])(),Object(c["g"])("div",B," Hello "+Object(c["E"])(i.name),1)):(Object(c["v"])(),Object(c["g"])("div",C,[Object(c["k"])(r,{class:"button is-primary",to:"/signup"},{default:Object(c["K"])((function(){return[A]})),_:1}),Object(c["k"])(r,{class:"button is-primary",to:"/login"},{default:Object(c["K"])((function(){return[I]})),_:1})]))}var E=a("1da1"),R=(a("96cf"),a("8918")),T=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),K={class:"section"};function N(e,t,a,s,n,i){var r=Object(c["B"])("UserPostCard");return Object(c["v"])(),Object(c["g"])("div",K,[Object(c["k"])(r),Object(c["k"])(r),Object(c["k"])(r),Object(c["k"])(r)])}var H={class:"card"},M=Object(c["h"])("div",{class:"columns"},[Object(c["h"])("div",{class:"column is-half"},[Object(c["h"])("div",{class:"card-content has-background-black",id:"outfitArea"},[Object(c["h"])("div",{class:"card-image"},[Object(c["h"])("figure",{class:"image",id:"topImg"},[Object(c["h"])("img",{src:"https://images-na.ssl-images-amazon.com/images/I/519pr6HAytL._AC_UL550_SR423,550_QL65_.jpg",alt:"Placeholder image"})])]),Object(c["h"])("div",{class:"card-image",id:"pantImg"},[Object(c["h"])("figure",{class:"image"},[Object(c["h"])("img",{src:"https://images-na.ssl-images-amazon.com/images/I/41qve4wrPYL._AC_UL550_SR423,550_QL65_.jpg",alt:"Placeholder image"})])]),Object(c["h"])("div",{class:"card-image",id:"shoeImg"},[Object(c["h"])("figure",{class:"image"},[Object(c["h"])("img",{src:"https://m.media-amazon.com/images/I/81-YIHCJZ8L._AC_SX255_.jpg",alt:"Placeholder image"})])])])]),Object(c["h"])("div",{class:"column is-half"},[Object(c["h"])("div",{class:"card-content"},[Object(c["h"])("div",{class:"media"},[Object(c["h"])("p",{class:"title is-2"},"OUTFIT TITLE")]),Object(c["h"])("div",{class:"media"},[Object(c["h"])("div",{class:"media-content"},[Object(c["h"])("div",{class:"columns"},[Object(c["h"])("div",{class:"column is-2"},[Object(c["h"])("span",{class:"icon"},[Object(c["h"])("i",{class:"fas fa-heart"})])]),Object(c["h"])("div",{class:"column is-2"},[Object(c["h"])("p",{class:"title is-6"},"4455")]),Object(c["h"])("div",{class:"column is-3",style:{"margin-left":"auto"}},[Object(c["h"])("span",{class:"icon"},[Object(c["h"])("i",{class:"fas fa-share"})])])])])]),Object(c["h"])("div",{class:"media"},[Object(c["h"])("div",{class:"media-left"},[Object(c["h"])("figure",{class:"image is-48x48"},[Object(c["h"])("img",{src:l.a,alt:"Placeholder image"})])]),Object(c["h"])("div",{class:"media-content"},[Object(c["h"])("p",{class:"title is-4"},"John Smith"),Object(c["h"])("p",{class:"subtitle is-6"},"@johnsmith")])]),Object(c["h"])("div",{class:"content"},[Object(c["j"])(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "),Object(c["h"])("a",null,"@bulmaio"),Object(c["j"])(". "),Object(c["h"])("a",{href:"#"},"#css"),Object(c["h"])("a",{href:"#"},"#responsive"),Object(c["h"])("br"),Object(c["h"])("time",{datetime:"2016-1-1"},"11:09 PM - 1 Jan 2016")])])])],-1),J=[M];function q(e,t,a,s,n,i){return Object(c["v"])(),Object(c["g"])("div",H,J)}var z={},Q=(a("58cb"),a("6b0d")),V=a.n(Q);const Y=V()(z,[["render",q]]);var D=Y,F={name:"Home",components:{UserPostCard:D}};const W=V()(F,[["render",N]]);var X=W,Z={class:"box",id:"postBox"},$=Object(c["h"])("div",{class:"columns"},[Object(c["h"])("div",{class:"column"},[Object(c["h"])("input",{class:"input is-primary",type:"text",placeholder:"Outfit Title"})])],-1),G=Object(c["h"])("hr",null,null,-1),ee=Object(c["h"])("hr",null,null,-1),te=Object(c["h"])("textarea",{class:"textarea",placeholder:"Caption"},null,-1),ae=Object(c["h"])("br",null,null,-1),ce=Object(c["h"])("button",{class:"button"},"Post",-1);function se(e,t,a,s,n,i){var r=Object(c["B"])("PostItemSelect");return Object(c["v"])(),Object(c["g"])("div",Z,[$,G,Object(c["k"])(r),Object(c["k"])(r),Object(c["k"])(r),ee,te,ae,ce])}var ne={class:"block"},ie=Object(c["i"])('<div class="columns"><div class="column is-3" id="clothingItemImg"><figure class="image is-square"><img src="https://images-na.ssl-images-amazon.com/images/I/41jS2lfDYzL._AC_UL650_SR500,650_QL65_.jpg" style="border-radius:10px;"></figure></div><div class="column is-3" id="searchOrUpload"><input class="input is-primary" type="text" name="search" placeholder="Search tops..."><button class="button" id="shirtSearchButton">Search</button><br><br> Or choose custom pic: <div class="file"><label class="file-label"><input class="file-input" type="file" name="example"><span class="file-cta"><span class="file-icon"><i class="fas fa-upload"></i></span><span class="file-label"> Choose file… </span></span></label></div></div><div class="column is-6" id="searchResultsArea"><div class="box" id="resultsWindow"><ul id="results"><li>Search result</li><li>Search result</li><li>Search result</li></ul></div></div></div>',1),re=[ie];function le(e,t,a,s,n,i){return Object(c["v"])(),Object(c["g"])("div",ne,re)}var oe={name:"PostItemSelect",components:{}};const ue=V()(oe,[["render",le]]);var be=ue,de={name:"Post",components:{PostItemSelect:be}};const he=V()(de,[["render",se]]);var ve=he,pe={class:"box mx-6 my-6 p-6",id:"loginBox"},me={class:"field"},je=Object(c["h"])("label",{class:"label"},"Email:",-1),Oe={class:"control"},fe={class:"field"},ge=Object(c["h"])("label",{class:"label"},"Password:",-1),ye={class:"control"},ke=Object(c["h"])("div",{class:"field"},[Object(c["h"])("p",{class:"control"},[Object(c["h"])("button",{class:"button is-success",id:"loginButton"},"Login")])],-1);function xe(e,t,a,s,n,i){return Object(c["v"])(),Object(c["g"])("form",{class:"section",onSubmit:t[2]||(t[2]=Object(c["M"])((function(e){return i.login()}),["prevent"]))},[Object(c["h"])("div",pe,[Object(c["h"])("div",me,[je,Object(c["h"])("div",Oe,[Object(c["L"])(Object(c["h"])("input",{class:"input",type:"email",placeholder:"example@ex.com","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.email=t})},null,512),[[c["H"],e.email]])])]),Object(c["h"])("div",fe,[ge,Object(c["h"])("div",ye,[Object(c["L"])(Object(c["h"])("input",{class:"input",type:"password",placeholder:"*******","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[c["H"],e.password]])])]),ke])],32)}var Pe={Name:"Login",data:function(){return{email:null,password:null,session:tt}},Components:{},methods:{login:function(){this.session.Login(this.email,this.password)}}};const _e=V()(Pe,[["render",xe]]);var we=_e,Se={class:"container"},Le=Object(c["i"])('<div class="box mx-6 my-6 p-6" id="loginBox"><div class="field"><label class="label">Pick a Username:</label><div class="control"><input class="input" type="text" placeholder="ex: doctor_evil_1999"></div></div><div class="field"><label class="label">Pick a Password:</label><div class="control"><input class="input" type="password" placeholder="*******"></div></div><div class="field"><label class="label">Enter Email:</label><div class="control"><input class="input" type="email" placeholder="example@ex.com"></div></div><div class="field"><label class="label">Enter Phone Number:</label><div class="control"><input class="input" type="text" placeholder="666-666-6666"></div></div></div>',1),Ce=[Le];function Ae(e,t,a,s,n,i){return Object(c["v"])(),Object(c["g"])("div",Se,Ce)}var Ie={Name:"Signup",Components:{}};const Be=V()(Ie,[["render",Ae]]);var Ue=Be,Ee={class:"section"};function Re(e,t,a,s,n,i){var r=Object(c["B"])("UserPostCard");return Object(c["v"])(),Object(c["g"])("div",Ee,[Object(c["k"])(r)])}var Te={class:"card"},Ke=Object(c["h"])("div",{class:"card-content"},[Object(c["h"])("div",{class:"media"},[Object(c["h"])("figure",{class:"image is-48x48"},[Object(c["h"])("img",{src:l.a,alt:"Placeholder image"})]),Object(c["h"])("p",{class:"title is-2"},"Uruhara Kisuke")]),Object(c["h"])("div",{class:"media"})],-1),Ne=[Ke];function He(e,t,a,s,n,i){return Object(c["v"])(),Object(c["g"])("div",Te,Ne)}var Me={};const Je=V()(Me,[["render",He]]);var qe=Je,ze={Name:"Profile",Components:{UserProfileCard:qe,UserPostCard:D}};const Qe=V()(ze,[["render",Re]]);var Ve=Qe,Ye=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/post",name:"Post",component:ve,meta:{requiresLogin:!0}},{path:"/login",name:"Login",component:we},{path:"/signup",name:"Signup",component:Ue},{path:"/profile",name:"Profile",component:Ve}],De=Object(T["a"])({history:Object(T["b"])(""),routes:Ye});De.beforeEach((function(e,t,a){e.meta.requiresLogin&&!sessionStorage.user?a("/login"):a()}));var Fe,We=De,Xe=null!==(Fe="/")&&void 0!==Fe?Fe:"http://localhost:3100/";function Ze(e){return $e.apply(this,arguments)}function $e(){return $e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var a,c,s,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=n.length>1&&void 0!==n[1]?n[1]:null,c=n.length>2&&void 0!==n[2]?n[2]:null,e.prev=2,!a){e.next=9;break}return e.next=6,fetch(Xe+t,{method:null!==c&&void 0!==c?c:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 6:s=e.sent,e.next=12;break;case 9:return e.next=11,fetch(Xe);case 11:s=e.sent;case 12:if(s.ok){e.next=16;break}return e.next=15,s.json();case 15:throw e.sent;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](2),tt.Error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])}))),$e.apply(this,arguments)}function Ge(e,t){return Ze("users/login",{handle:e,password:t})}var et={user:null,messages:[],toRoute:"/home",Login:function(e,t){var a=this;return Object(E["a"])(regeneratorRuntime.mark((function c(){var s;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Ge(e,t);case 3:s=c.sent,a.user=s.user,We.push(a.toRoute),c.next=11;break;case 8:c.prev=8,c.t0=c["catch"](0),a.Error(c.t0);case 11:case"end":return c.stop()}}),c,null,[[0,8]])})))()},Error:function(e){var t;console.log(e);var a=null!==(t=e.msg)&&void 0!==t?t:e;R["a"].open({duration:7500,message:a,variant:"danger",type:"danger",closable:!0})}},tt=et,at={data:function(){return{Session:tt}},methods:{login:function(){this.$router.push("/login")}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName}}};const ct=V()(at,[["render",U]]);var st=ct,nt={data:function(){return{isActive:!1}},components:{LoginBadge:st}};const it=V()(nt,[["render",L]]);var rt=it,lt={components:{Nav:rt}};const ot=V()(lt,[["render",s]]);var ut=ot;a("6597"),a("7051");Object(c["d"])(ut).use(We).mount("#app")},"58cb":function(e,t,a){"use strict";a("455b")}});
//# sourceMappingURL=app.70c568d2.js.map