(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"14a5cb41"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"0816b743"}[t]+".css",r=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[t],p.parentNode.removeChild(p),n(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){s[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}r[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"16a2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"song",on:{click:function(e){return t.setCurrentSongId(t.songItem.id)}}},[t.index?n("div",{staticClass:"left"},[t._v(t._s(t.index))]):t._e(),n("div",{staticClass:"right"},[n("div",{staticClass:"content"},[n("div",{staticClass:"songname"},[t._v(t._s(t.songItem.name))]),t.index?t._e():n("span",{staticClass:"sq"},[t._v("SQ")]),t.songItem.song?n("span",{staticClass:"singer"},[t._v(t._s(t.songItem.song.artists[0].name)+"-"+t._s(t.songItem.song.album.name))]):t.songItem.ar?n("span",{staticClass:"singer"},[t._v(t._s(t.songItem.ar[0].name)+"-"+t._s(t.songItem.al.name))]):n("span",{staticClass:"singer"},[t._v(t._s(t.songItem.name)+"-"+t._s(t.songItem.album.name))])]),t._m(0)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"play"},[n("i",{staticClass:"fa fa-play",attrs:{"aria-hidden":"true"}})])}],r={props:["songItem","index"],methods:{setCurrentSongId:function(t){this.$emit("translate-currentid",t)}}},i=r,o=(n("a462"),n("2877")),c=Object(o["a"])(i,a,s,!1,null,null,null);e["a"]=c.exports},"4b69":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=(n("d3b7"),n("bc3a")),r=n.n(s),i={},o=r.a.create(i);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},a["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view",{on:{"translate-currentid":function(e){t.currentSongId=e}}})],1),t.currentSongId?n("PlayMusic",{attrs:{"current-song-id":t.currentSongId}}):t._e()],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.currentSongDetail?n("div",{staticClass:"playmusic",class:{paused:t.isPaused}},[n("audio",{attrs:{src:t.currentSongUrl,controls:"",autoplay:""}}),n("div",{staticClass:"player-bar",on:{click:function(e){t.isShowFullScreen=!0}}},[n("img",{attrs:{src:t.currentSongDetail.al.picUrl,alt:""}}),n("h3",[t._v(t._s(t.currentSongDetail.name))]),n("div",{staticClass:"play",on:{click:function(e){return e.stopPropagation(),t.pausedAudio(e)}}},[n("i",{staticClass:"fa fa-play-circle play",class:{playing:t.isPaused},attrs:{"aria-hidden":"true"},on:{click:t.pausedAudio}}),n("i",{staticClass:"fa fa-pause-circle pause",class:{pausing:!t.isPaused},attrs:{"aria-hidden":"true"},on:{click:t.pausedAudio}}),n("canvas",{attrs:{width:"50",height:"50"}})])]),t.isShowFullScreen?[n("div",{staticClass:"fulscreen",style:{"background-image":"url("+t.currentSongDetail.al.picUrl+")"}}),n("div",{staticClass:"full"},[n("div",{staticClass:"back",on:{click:function(e){t.isShowFullScreen=!1}}},[n("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})]),n("div",{staticClass:"round",class:{pausedMove:t.isPaused}},[n("img",{class:{paused:t.isPaused},attrs:{src:t.currentSongDetail.al.picUrl}})]),n("div")]),n("div",{staticClass:"contral"},[t._m(0),t._m(1),n("span",{staticClass:"playAndPause"},[n("i",{staticClass:"fa fa-play-circle play",class:{playing:t.isPaused},attrs:{"aria-hidden":"true"},on:{click:t.pausedAudio}}),n("i",{staticClass:"fa fa-pause-circle pause",class:{pausing:!t.isPaused},attrs:{"aria-hidden":"true"},on:{click:t.pausedAudio}})]),t._m(2),t._m(3)])]:t._e()],2):t._e()},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fa fa-random",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fa fa-step-backward",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fa fa-step-forward",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])}],p={props:["currentSongId"],data:function(){return{currentSongDetail:null,isPaused:!1,isShowFullScreen:!1,currentTime:0,animationId:null}},computed:{currentSongUrl:function(){return"https://music.163.com/song/media/outer/url?id="+this.currentSongId+".mp3"}},methods:{getSongDetail:function(){var t=this;this.axios.get("https://musicapi.leanapp.cn/song/detail?",{params:{ids:this.currentSongId}}).then((function(e){t.currentSongDetail=e.data.songs[0],window.console.log(t.currentSongDetail)}))},pausedAudio:function(){var t=this.$el.querySelector("audio");this.isPaused?t.play():t.pause(),this.isPaused=t.paused},drawcricle:function(){var t=this,e=this.$el.querySelector("canvas"),n=e.getContext("2d"),a=this.$el.querySelector("audio");this.animationId=setInterval((function(){t.currentTime=1e3*a.currentTime,n.clearRect(0,0,50,50),n.beginPath(),n.arc(14.5,18,12.5,0,2*Math.PI),n.closePath(),n.strokeStyle="black",n.stroke(),n.beginPath(),n.arc(14.5,18,12.5,-.5*Math.PI,2*Math.PI*(t.currentTime/t.currentSongDetail.dt)-.5*Math.PI),n.strokeStyle="red",n.stroke()}),500)}},created:function(){this.getSongDetail()},watch:{currentSongId:function(){this.getSongDetail()}},updated:function(){window.clearInterval(this.animationId),this.drawcricle()}},f=p,m=(n("94f2"),n("2877")),h=Object(m["a"])(f,l,d,!1,null,null,null),g=h.exports,v={data:function(){return{currentSongId:null}},components:{PlayMusic:g}},_=v,y=(n("034f"),Object(m["a"])(_,c,u,!1,null,null,null)),C=y.exports,b=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("ul",{staticClass:"nav"},[n("li",[n("router-link",{attrs:{to:"/recommend"}},[t._v("推荐音乐")])],1),n("li",[n("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),n("li",[n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)]),n("keep-alive",[n("router-view",{on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})],1)],1)},S=[],k={name:"home",components:{}},P=k,x=(n("de16"),Object(m["a"])(P,w,S,!1,null,null,null)),I=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"commend"},[n("HomeTitle",[t._v("推荐菜单")]),n("ul",{staticClass:"list"},t._l(t.personalized,(function(t,e){return n("SongListCard",{key:e,attrs:{item:t}})})),1),n("HomeTitle",[t._v("最新音乐")]),n("ul",t._l(t.newsong,(function(e,a){return n("SongListItem",{key:a,attrs:{"song-item":e,index:0},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})})),1)],1)},O=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"title"},[t._t("default")],2)},E=[],A={},T=A,D=(n("9143"),Object(m["a"])(T,$,E,!1,null,null,null)),L=D.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"card",on:{click:function(e){return t.handlerCardClick(t.item)}}},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.item.picUrl}}),n("span",[n("i",{staticClass:"fa fa-headphones",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.comPlayCount(t.item.playCount)))])]),n("div",{staticClass:"name"},[t._v(" "+t._s(t.item.name)+" ")])])},H=[],N=(n("b680"),{props:{item:Object},methods:{comPlayCount:function(t){return t>99999999?(t/1e8).toFixed(2)+"亿":t>9999?(t/1e4).toFixed(1)+"万":void 0},handlerCardClick:function(t){window.console.log(t),this.$router.push({path:"playlist",query:{carditem:t}})}}}),q=N,z=(n("ac5a"),Object(m["a"])(q,M,H,!1,null,null,null)),U=z.exports,F=n("16a2"),B={name:"HomeRecommend",data:function(){return{personalized:[],newsong:[]}},components:{HomeTitle:L,SongListCard:U,SongListItem:F["a"]},methods:{getPersonalized:function(){var t=this;this.axios.get("http://musicapi.leanapp.cn/personalized?limit=6").then((function(e){t.personalized=e.data.result}))},getNewsong:function(){var t=this;this.axios.get("https:api.kele8.cn/agent/musicapi.leanapp.cn/personalized/newsong").then((function(e){t.newsong=e.data.result}))}},created:function(){this.getPersonalized(),this.getNewsong()}},J=B,R=(n("cfa8"),Object(m["a"])(J,j,O,!1,null,null,null)),K=R.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.hotsong,(function(e,a){return n("SongListItem",{key:a,attrs:{"song-item":e,index:a+1},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})})),1)},V=[],G={data:function(){return{hotsong:[]}},components:{SongListItem:F["a"]},methods:{getHotsong:function(){var t=this;this.axios.get("https:API.kele8.cn/agent/musicapi.leanapp.cn/top/list?idx=1").then((function(e){t.hotsong=e.data.playlist.tracks,window.console.log(t.hotsong)}))}},created:function(){this.getHotsong(),window.console.log("xxz")}},W=G,X=Object(m["a"])(W,Q,V,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot"},[n("label",{staticClass:"searchm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputsearch,expression:"inputsearch"}],attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.inputsearch},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getmultimatch(),t.inputsearch()},input:function(e){e.target.composing||(t.inputsearch=e.target.value)}}}),n("span",{staticClass:"reset",on:{click:function(e){t.inputsearch=null}}})]),t.orders?n("div",{staticClass:"multimatch"},[t.orders.artist?t._l(t.orders.artist,(function(e){return n("div",{key:e.id,staticClass:"artist",on:{click:function(n){return t.$router.push("/artist?id="+e.id)}}},[n("img",{attrs:{src:e.picUrl,alt:""}}),n("h5",[t._v("歌手: "+t._s(e.name))]),n("span",[t._v(">")])])})):t._e(),t.orders.mv?t._l(t.orders.mv,(function(e){return n("div",{key:e.id,staticClass:"mv"},[n("img",{attrs:{src:e.cover,alt:""}}),n("h5",[n("p",[t._v("MV: "+t._s(e.name))]),n("p",[t._v(t._s(e.artistName))])]),n("span",[t._v(">")])])})):t._e()],2):t._e(),t.orders?n("ul",t._l(t.answers.songs,(function(e){return n("SongListItem",{key:e.id,attrs:{songItem:e},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})})),1):t._e(),t.answers&&!t.orders?n("ul",{staticClass:"answer"},[n("p",{staticClass:"searchletter"},[t._v(" 搜索 "),n("span",[t._v('"'+t._s(this.inputsearch)+'"')])]),t._l(t.answers.artists,(function(e,a){return n("SearchAnswer",{key:a,attrs:{type:t.answers.artists,item:e}})})),t._l(t.answers.songs,(function(t){return n("SearchAnswer",{key:t.id,attrs:{item:t}})}))],2):t._e(),t.inputsearch||t.orders?t._e():n("ul",{staticClass:"hot"},[n("P",[t._v("热门搜索")]),t._l(t.hotmusic,(function(t,e){return n("HotSearch",{key:e,attrs:{item:t}})}))],2)])},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"hotsearch"},[t._v(t._s(t.item.first))])},nt=[],at={props:{item:Object}},st=at,rt=(n("b440"),Object(m["a"])(st,et,nt,!1,null,null,null)),it=rt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.type?n("li",{staticClass:"answer"},[n("span",{staticClass:"searchpic"}),n("span",{staticClass:"message"},[t._v(t._s(t.item.name))])]):n("li",{staticClass:"answer"},[n("span",{staticClass:"searchpic"}),n("span",{staticClass:"message"},[t._v(t._s(t.item.name)+"--"+t._s(t.item.artists[0].name))])])])},ct=[],ut={props:{item:Object,type:null}},lt=ut,dt=(n("eb37"),Object(m["a"])(lt,ot,ct,!1,null,null,null)),pt=dt.exports,ft={components:{HotSearch:it,SearchAnswer:pt,SongListItem:F["a"]},data:function(){return{hotmusic:[],inputsearch:null,orders:null,answers:null}},methods:{getHomeSearch:function(){var t=this;this.axios.get("http://musicapi.leanapp.cn/search/hot").then((function(e){t.hotmusic=e.data.result.hots}))},getmultimatch:function(){var t=this;this.axios.get("https:API.kele8.cn/agent/music.kele8.cn/search/multimatch",{params:{keywords:this.inputsearch}}).then((function(e){t.orders=e.data.result}))}},watch:{inputsearch:function(){var t=this;this.axios.get("http://musicapi.leanapp.cn/search/suggest",{params:{keywords:this.inputsearch,type:"mobile"}}).then((function(e){t.answers=e.data.result,window.console.log(t.answers.songs)})),this.answers=null}},created:function(){this.getHomeSearch()}},mt=ft,ht=(n("8172"),Object(m["a"])(mt,Z,tt,!1,null,null,null)),gt=ht.exports;a["a"].use(b["a"]);var vt=[{path:"/",name:"home",component:I,redirect:"/recommend",children:[{path:"/recommend",name:"recommend",component:K},{path:"/hot",name:"homehot",component:Y},{path:"/search",name:"homesearch",component:gt}]},{path:"/Playlist",name:"Playlist",component:function(){return n.e("about").then(n.bind(null,"2059"))}}],_t=new b["a"]({routes:vt}),yt=_t;a["a"].config.productionTip=!1,new a["a"]({router:yt,render:function(t){return t(C)}}).$mount("#app")},"7ddb":function(t,e,n){},8172:function(t,e,n){"use strict";var a=n("8a64"),s=n.n(a);s.a},8580:function(t,e,n){},"85ec":function(t,e,n){},"8a64":function(t,e,n){},"8d91":function(t,e,n){},9143:function(t,e,n){"use strict";var a=n("ea77"),s=n.n(a);s.a},"94f2":function(t,e,n){"use strict";var a=n("eaf7"),s=n.n(a);s.a},"977f":function(t,e,n){},a462:function(t,e,n){"use strict";var a=n("8580"),s=n.n(a);s.a},ac5a:function(t,e,n){"use strict";var a=n("e271"),s=n.n(a);s.a},b440:function(t,e,n){"use strict";var a=n("4b69"),s=n.n(a);s.a},cfa8:function(t,e,n){"use strict";var a=n("977f"),s=n.n(a);s.a},de16:function(t,e,n){"use strict";var a=n("8d91"),s=n.n(a);s.a},e271:function(t,e,n){},ea77:function(t,e,n){},eaf7:function(t,e,n){},eb37:function(t,e,n){"use strict";var a=n("7ddb"),s=n.n(a);s.a}});
//# sourceMappingURL=app.1a7645c1.js.map