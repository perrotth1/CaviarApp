(function(e){function t(t){for(var a,i,r=t[0],l=t[1],o=t[2],u=0,b=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(b.length)b.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var l=s[i];0!==c[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},c={app:0},n=[];function i(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"be6bcda4"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(e){var t=[],s=c[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=c[e]=[t,a]}));t.push(s[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(e);var o=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(u);var s=c[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",o.name="ChunkLoadError",o.type=a,o.request=n,s[1](o)}c[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},3749:function(e,t,s){e.exports=s.p+"img/user1avatar.b996cd9c.png"},"55a2":function(e,t,s){e.exports=s.p+"img/CAVIARlogo.8d99bef9.png"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),c=s("8918"),n=s("c43d");s("6597"),s("7051");function i(e,t,s,c,n,i){var r=Object(a["B"])("Nav"),l=Object(a["B"])("router-view");return Object(a["v"])(),Object(a["g"])("div",null,[Object(a["k"])(r),Object(a["k"])(l)])}var r=s("55a2"),l=s.n(r),o=s("3749"),u=s.n(o),d={class:"navbar is-spaced",role:"navigation","aria-label":"main navigation",style:{"background-color":"black"}},b={class:"navbar-brand"},v=Object(a["h"])("img",{src:l.a,height:"28"},null,-1),h=Object(a["h"])("span",{"aria-hidden":"true"},null,-1),m=Object(a["h"])("span",{"aria-hidden":"true"},null,-1),p=Object(a["h"])("span",{"aria-hidden":"true"},null,-1),j=[h,m,p],O={class:"navbar-start"},f=Object(a["h"])("figure",{class:"image"},[Object(a["h"])("img",{src:u.a})],-1),g=Object(a["h"])("span",{class:"icon"},[Object(a["h"])("i",{class:"fas fa-home"})],-1),k=Object(a["h"])("span",{class:"icon"},[Object(a["h"])("i",{class:"fas fa-search"})],-1),y=Object(a["h"])("span",{class:"icon"},[Object(a["h"])("i",{class:"fas fa-comment-alt"})],-1),x={class:"navbar-item has-dropdown is-hoverable"},_=Object(a["h"])("a",{class:"navbar-link"}," More ",-1),w={class:"navbar-dropdown"},P=Object(a["j"])(" About "),L=Object(a["j"])(" Contact "),S={class:"navbar-end"},I={class:"navbar-item"};function C(e,t,s,c,n,i){var r=Object(a["B"])("router-link"),l=Object(a["B"])("LoginBadge");return Object(a["v"])(),Object(a["g"])("nav",d,[Object(a["h"])("div",b,[Object(a["k"])(r,{class:"navbar-item",to:"/"},{default:Object(a["K"])((function(){return[v]})),_:1}),Object(a["h"])("a",{role:"button",class:Object(a["r"])(["navbar-burger",{"is-active":n.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(e){return n.isActive=!n.isActive})},j,2)]),Object(a["h"])("div",{class:Object(a["r"])(["navbar-menu",{"is-active":n.isActive}])},[Object(a["h"])("div",O,[Object(a["k"])(r,{class:"navbar-item",to:"/profile","active-class":"is-active"},{default:Object(a["K"])((function(){return[f]})),_:1}),Object(a["k"])(r,{class:"navbar-item",to:"/","active-class":"is-active",exact:""},{default:Object(a["K"])((function(){return[g]})),_:1}),Object(a["k"])(r,{class:"navbar-item",to:"/","active-class":"is-active"},{default:Object(a["K"])((function(){return[k]})),_:1}),Object(a["k"])(r,{class:"navbar-item",to:"/post","active-class":"is-active"},{default:Object(a["K"])((function(){return[y]})),_:1}),Object(a["h"])("div",x,[_,Object(a["h"])("div",w,[Object(a["k"])(r,{class:"navbar-item",to:"/","active-class":"is-active"},{default:Object(a["K"])((function(){return[P]})),_:1}),Object(a["k"])(r,{class:"navbar-item",to:"/","active-class":"is-active"},{default:Object(a["K"])((function(){return[L]})),_:1})])])]),Object(a["h"])("div",S,[Object(a["h"])("div",I,[Object(a["k"])(l)])])],2)])}s("b0c0");var A={key:0,class:"buttons"},U=Object(a["h"])("strong",null,"Sign up",-1),B=Object(a["j"])(" Log in "),R={key:1};function T(e,t,s,c,n,i){var r=Object(a["B"])("router-link");return n.Session.user?(Object(a["v"])(),Object(a["g"])("div",R," Hello "+Object(a["E"])(i.name),1)):(Object(a["v"])(),Object(a["g"])("div",A,[Object(a["k"])(r,{class:"button is-primary",to:"/signup"},{default:Object(a["K"])((function(){return[U]})),_:1}),Object(a["k"])(r,{class:"button is-primary",to:"/login"},{default:Object(a["K"])((function(){return[B]})),_:1})]))}var E=s("1da1"),H=(s("96cf"),s("d3b7"),s("3ca3"),s("ddb0"),s("6c02")),K={class:"section"};function M(e,t,s,c,n,i){var r=Object(a["B"])("UserPostCard");return Object(a["v"])(),Object(a["g"])("div",K,[Object(a["k"])(r),Object(a["k"])(r),Object(a["k"])(r),Object(a["k"])(r)])}var N={class:"card"},q=Object(a["h"])("div",{class:"columns"},[Object(a["h"])("div",{class:"column is-half"},[Object(a["h"])("div",{class:"card-content has-background-black",id:"outfitArea"},[Object(a["h"])("div",{class:"card-image"},[Object(a["h"])("figure",{class:"image",id:"topImg"},[Object(a["h"])("img",{src:"https://images-na.ssl-images-amazon.com/images/I/519pr6HAytL._AC_UL550_SR423,550_QL65_.jpg",alt:"Placeholder image"})])]),Object(a["h"])("div",{class:"card-image",id:"pantImg"},[Object(a["h"])("figure",{class:"image"},[Object(a["h"])("img",{src:"https://images-na.ssl-images-amazon.com/images/I/41qve4wrPYL._AC_UL550_SR423,550_QL65_.jpg",alt:"Placeholder image"})])]),Object(a["h"])("div",{class:"card-image",id:"shoeImg"},[Object(a["h"])("figure",{class:"image"},[Object(a["h"])("img",{src:"https://m.media-amazon.com/images/I/81-YIHCJZ8L._AC_SX255_.jpg",alt:"Placeholder image"})])])])]),Object(a["h"])("div",{class:"column is-half"},[Object(a["h"])("div",{class:"card-content"},[Object(a["h"])("div",{class:"media"},[Object(a["h"])("p",{class:"title is-2"},"OUTFIT TITLE")]),Object(a["h"])("div",{class:"media"},[Object(a["h"])("div",{class:"media-content"},[Object(a["h"])("div",{class:"columns"},[Object(a["h"])("div",{class:"column is-2"},[Object(a["h"])("span",{class:"icon"},[Object(a["h"])("i",{class:"fas fa-heart"})])]),Object(a["h"])("div",{class:"column is-2"},[Object(a["h"])("p",{class:"title is-6"},"4455")]),Object(a["h"])("div",{class:"column is-3",style:{"margin-left":"auto"}},[Object(a["h"])("span",{class:"icon"},[Object(a["h"])("i",{class:"fas fa-share"})])])])])]),Object(a["h"])("div",{class:"media"},[Object(a["h"])("div",{class:"media-left"},[Object(a["h"])("figure",{class:"image is-48x48"},[Object(a["h"])("img",{src:u.a,alt:"Placeholder image"})])]),Object(a["h"])("div",{class:"media-content"},[Object(a["h"])("p",{class:"title is-4"},"John Smith"),Object(a["h"])("p",{class:"subtitle is-6"},"@johnsmith")])]),Object(a["h"])("div",{class:"content"},[Object(a["j"])(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "),Object(a["h"])("a",null,"@bulmaio"),Object(a["j"])(". "),Object(a["h"])("a",{href:"#"},"#css"),Object(a["h"])("a",{href:"#"},"#responsive"),Object(a["h"])("br"),Object(a["h"])("time",{datetime:"2016-1-1"},"11:09 PM - 1 Jan 2016")])])])],-1),z=[q];function J(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("div",N,z)}var Q={},Y=(s("aa62"),s("6b0d")),F=s.n(Y);const V=F()(Q,[["render",J]]);var X=V,Z={name:"Home",components:{UserPostCard:X}};const D=F()(Z,[["render",M]]);var W=D,$={class:"box",id:"postBox"},G=Object(a["h"])("div",{class:"columns"},[Object(a["h"])("div",{class:"column"},[Object(a["h"])("input",{class:"input is-primary",type:"text",placeholder:"Outfit Title"})])],-1),ee=Object(a["h"])("hr",null,null,-1),te=Object(a["h"])("hr",null,null,-1),se=Object(a["h"])("textarea",{class:"textarea",placeholder:"Caption"},null,-1),ae=Object(a["h"])("br",null,null,-1),ce=Object(a["h"])("button",{class:"button"},"Post",-1);function ne(e,t,s,c,n,i){var r=Object(a["B"])("PostItemSelect");return Object(a["v"])(),Object(a["g"])("div",$,[G,ee,Object(a["k"])(r),Object(a["k"])(r),Object(a["k"])(r),te,se,ae,ce])}var ie={class:"block"},re=Object(a["i"])('<div class="columns"><div class="column is-3" id="clothingItemImg"><figure class="image is-square"><img src="https://images-na.ssl-images-amazon.com/images/I/41jS2lfDYzL._AC_UL650_SR500,650_QL65_.jpg" style="border-radius:10px;"></figure></div><div class="column is-3" id="searchOrUpload"><input class="input is-primary" type="text" name="search" placeholder="Search tops..."><button class="button" id="shirtSearchButton">Search</button><br><br> Or choose custom pic: <div class="file"><label class="file-label"><input class="file-input" type="file" name="example"><span class="file-cta"><span class="file-icon"><i class="fas fa-upload"></i></span><span class="file-label"> Choose file… </span></span></label></div></div><div class="column is-6" id="searchResultsArea"><div class="box" id="resultsWindow"><ul id="results"><li>Search result</li><li>Search result</li><li>Search result</li></ul></div></div></div>',1),le=[re];function oe(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("div",ie,le)}var ue={name:"PostItemSelect",components:{}};const de=F()(ue,[["render",oe]]);var be=de,ve={name:"Post",components:{PostItemSelect:be}};const he=F()(ve,[["render",ne]]);var me=he,pe={class:"box mx-6 my-6 p-6",id:"loginBox"},je={class:"field"},Oe=Object(a["h"])("label",{class:"label"},"Email:",-1),fe={class:"control"},ge={class:"field"},ke=Object(a["h"])("label",{class:"label"},"Password:",-1),ye={class:"control"},xe=Object(a["h"])("div",{class:"field"},[Object(a["h"])("p",{class:"control"},[Object(a["h"])("button",{class:"button is-success",id:"loginButton"},"Login")])],-1);function _e(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("form",{class:"section",onSubmit:t[2]||(t[2]=Object(a["M"])((function(e){return i.login()}),["prevent"]))},[Object(a["h"])("div",pe,[Object(a["h"])("div",je,[Oe,Object(a["h"])("div",fe,[Object(a["L"])(Object(a["h"])("input",{class:"input",type:"text",placeholder:"example@ex.com","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.handle=t})},null,512),[[a["H"],e.handle]])])]),Object(a["h"])("div",ge,[ke,Object(a["h"])("div",ye,[Object(a["L"])(Object(a["h"])("input",{class:"input",type:"password",placeholder:"*******","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[a["H"],e.password]])])]),xe])],32)}var we={Name:"Login",data:function(){return{handle:null,password:null,Session:mt}},Components:{},methods:{login:function(){this.Session.Login(this.handle,this.password)}}};const Pe=F()(we,[["render",_e]]);var Le=Pe,Se={class:"container"},Ie=Object(a["i"])('<div class="box mx-6 my-6 p-6" id="loginBox"><div class="field"><label class="label">Pick a Username:</label><div class="control"><input class="input" type="text" placeholder="ex: doctor_evil_1999"></div></div><div class="field"><label class="label">Pick a Password:</label><div class="control"><input class="input" type="password" placeholder="*******"></div></div><div class="field"><label class="label">Enter Email:</label><div class="control"><input class="input" type="email" placeholder="example@ex.com"></div></div><div class="field"><label class="label">Enter Phone Number:</label><div class="control"><input class="input" type="text" placeholder="666-666-6666"></div></div></div>',1),Ce=[Ie];function Ae(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("div",Se,Ce)}var Ue={Name:"Signup",components:{}};const Be=F()(Ue,[["render",Ae]]);var Re=Be,Te={class:"section"},Ee={class:"columns"},He={class:"column is-half"},Ke={class:"column is-half"};function Me(e,t,s,c,n,i){var r=Object(a["B"])("UserProfileCard"),l=Object(a["B"])("UserPostMinimal");return Object(a["v"])(),Object(a["g"])("div",Te,[Object(a["h"])("div",Ee,[Object(a["h"])("div",He,[Object(a["k"])(r)]),Object(a["h"])("div",Ke,[Object(a["k"])(l)])])])}var Ne={class:"card"},qe=Object(a["h"])("div",{class:"card-content"},[Object(a["h"])("div",{class:"columns"},[Object(a["h"])("div",{class:"column is-3"},[Object(a["h"])("figure",{class:"image is-64x64"},[Object(a["h"])("img",{src:u.a,alt:"Placeholder image"})])]),Object(a["h"])("div",{class:"column"},[Object(a["h"])("div",{class:"media-content"},[Object(a["h"])("p",{class:"title"},"Uruhara Kisuke"),Object(a["h"])("p",{class:"subtitle"},"@uruhara_kisuke")])])])],-1),ze=Object(a["h"])("hr",null,null,-1),Je=Object(a["h"])("div",{class:"card-content"},[Object(a["h"])("div",{class:"columns"},[Object(a["h"])("div",{class:"column is-2"},[Object(a["h"])("span",{class:"icon"},[Object(a["h"])("i",{class:"fas fa-users"})])]),Object(a["h"])("div",{class:"column is-3"},[Object(a["h"])("p",null,"Followers:")]),Object(a["h"])("div",{class:"column is-"},[Object(a["h"])("p",null,"217")])]),Object(a["h"])("div",{class:"columns"},[Object(a["h"])("div",{class:"column is-2"},[Object(a["h"])("span",{class:"icon"},[Object(a["h"])("i",{class:"fas fa-users"})])]),Object(a["h"])("div",{class:"column is-3"},[Object(a["h"])("p",null,"Following:")]),Object(a["h"])("div",{class:"column is-"},[Object(a["h"])("p",null,"198")])]),Object(a["h"])("hr")],-1),Qe=[qe,ze,Je];function Ye(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("div",Ne,Qe)}var Fe={};const Ve=F()(Fe,[["render",Ye]]);var Xe=Ve,Ze={class:"card"},De=Object(a["i"])('<div class="card-content"><div class="columns"><div class="column is-3"><span class="icon"><i class="fas fa-crown fa-2x"></i></span></div><div class="column"><p class="title is-3">OUTFIT TITLE</p></div></div></div><div class="card-content has-background-black"><div class="card-image"><figure class="image" id="topImg"><img src="https://images-na.ssl-images-amazon.com/images/I/519pr6HAytL._AC_UL550_SR423,550_QL65_.jpg" alt="Placeholder image"></figure></div><div class="card-image"><figure class="image"><img src="https://images-na.ssl-images-amazon.com/images/I/41qve4wrPYL._AC_UL550_SR423,550_QL65_.jpg" alt="Placeholder image"></figure></div><div class="card-image"><figure class="image"><img src="https://m.media-amazon.com/images/I/81-YIHCJZ8L._AC_SX255_.jpg" alt="Placeholder image"></figure></div></div><div class="card-content"><div class="columns"><div class="column is-2"><span class="icon"><i class="fas fa-heart"></i></span></div><div class="column is-2"><p class="title is-6">4455</p></div><div class="column is-5" style="margin-left:auto;"><p class="card-subtitle">11:09 PM - 1 Jan 2016</p></div></div></div>',3),We=[De];function $e(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("div",Ze,We)}var Ge={};s("f03f");const et=F()(Ge,[["render",$e]]);var tt,st=et,at=null!==(tt="/")&&void 0!==tt?tt:"http://localhost:3100/";function ct(e){return nt.apply(this,arguments)}function nt(){return nt=Object(E["a"])(regeneratorRuntime.mark((function e(t){var s,a,c,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=n.length>1&&void 0!==n[1]?n[1]:null,a=n.length>2&&void 0!==n[2]?n[2]:null,e.prev=2,!s){e.next=9;break}return e.next=6,fetch(at+t,{method:null!==a&&void 0!==a?a:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 6:c=e.sent,e.next=12;break;case 9:return e.next=11,fetch(at);case 11:c=e.sent;case 12:if(c.ok){e.next=16;break}return e.next=15,c.json();case 15:throw e.sent;case 16:return e.next=18,c.json();case 18:return e.abrupt("return",e.sent);case 21:e.prev=21,e.t0=e["catch"](2),mt.Error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),nt.apply(this,arguments)}function it(e){return ct("posts/wall/"+e)}var rt={Name:"Profile",components:{UserProfileCard:Xe,UserPostMinimal:st},data:function(){return{posts:[]}},mounted:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(mt.user),t.next=3,it(mt.user.userHandle);case 3:e.posts=t.sent;case 4:case"end":return t.stop()}}),t)})))()}};const lt=F()(rt,[["render",Me]]);var ot=lt,ut=[{path:"/",name:"Home",component:W,meta:{requiresLogin:!0}},{path:"/login",name:"Login",component:Le},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/post",name:"Post",component:me,meta:{requiresLogin:!0}},{path:"/signup",name:"Signup",component:Re},{path:"/profile",name:"Profile",component:ot,meta:{requiresLogin:!0}}],dt=Object(H["a"])({history:Object(H["b"])(""),routes:ut});dt.beforeEach((function(e,t,s){e.meta.requiresLogin&&!mt.user?s("/login"):s()}));var bt=dt;function vt(e,t){return console.log("In users service logging in with: "+e+" "+t),ct("users/login",{handle:e,password:t})}var ht={user:null,messages:[],toRoute:"/",Login:function(e,t){var s=this;return Object(E["a"])(regeneratorRuntime.mark((function a(){var c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,vt(e,t);case 3:c=a.sent,console.log("Returned from users service"),s.user=c.user,bt.push(s.toRoute),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),s.Error(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},Error:function(e){var t;console.log(e);var s=null!==(t=e.msg)&&void 0!==t?t:e;c["a"].open({duration:7500,message:s,variant:"danger",type:"danger",closable:!0})}},mt=ht,pt={data:function(){return{Session:mt}},methods:{login:function(){this.$router.push("/login")}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName}}};const jt=F()(pt,[["render",T]]);var Ot=jt,ft={data:function(){return{isActive:!1}},components:{LoginBadge:Ot}};const gt=F()(ft,[["render",C]]);var kt=gt,yt={components:{Nav:kt}};const xt=F()(yt,[["render",i]]);var _t=xt;Object(a["d"])(_t).use(bt).use(c["b"]).use(n["a"],{iconPack:"fas"}).mount("#app")},aa62:function(e,t,s){"use strict";s("fb5f")},f03f:function(e,t,s){"use strict";s("fb2b")},fb2b:function(e,t,s){},fb5f:function(e,t,s){}});
//# sourceMappingURL=app.e3e9a386.js.map