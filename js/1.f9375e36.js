(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"128f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"q-px-md q-pt-md text-h6"},[t._v(t._s(t.$t("page6_title")))]),s("img",{staticClass:"cover q-pr-md gt-xs",attrs:{src:t.$t("book1"),align:"right"}}),s("div",{staticClass:"q-px-md q-pt-md text-body1"},[t._v(t._s(t.$t("page6_text1")))]),s("img",{staticClass:"q-pa-md cover-full lt-sm",attrs:{src:t.$t("book1")}}),s("div",{staticClass:"q-px-md q-pt-md text-body1"},[t._v(t._s(t.$t("page6_text2"))+" "),s("a",{attrs:{href:t.$t(t.$t("page6_link_ref"))},on:{click:function(e){return e.stopPropagation(),function(e){return t.goto(e,t.$t(t.$t("page6_link_ref")),"_blank")}(e)}}},[t._v(t._s(t.$t("page6_text3")))]),t._v(".")])])]),t.isSmall?s("div",{staticClass:"q-px-md q-pt-xl gt-xs",staticStyle:{width:"70%",margin:"auto"}},[s("YtVideo",{attrs:{videoId:t.$t("page6_videoId")}})],1):t._e(),t.isBig?s("div",{staticClass:"q-px-md q-pt-md lt-sm",staticStyle:{width:"90%",margin:"auto"}},[s("YtVideo",{attrs:{videoId:t.$t("page6_videoId")}})],1):t._e(),s("div",{staticStyle:{height:"25vh"}})])},a=[],o=s("d882"),r=s("d8de"),n={name:"PageBook",components:{YtVideo:r["a"]},data(){return{isSmall:!1,isBig:!0}},mounted(){this.$nextTick((()=>{this.isSmall=this.$q.screen.lt.sm,this.isBig=this.$q.screen.gt.xs}))},methods:{goto(t,e,s){window.open(e,s),o["d"].stopAndPrevent(t)}}},d=n,c=(s("3376"),s("2877")),l=s("9989"),p=s("eebe"),u=s.n(p),m=Object(c["a"])(d,i,a,!1,null,null,null);e["default"]=m.exports;u()(m,"components",{QPage:l["a"]})},3376:function(t,e,s){"use strict";s("bbc1")},bbc1:function(t,e,s){},d8de:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.posterUrl?s("div",{staticClass:"videoWrapper",staticStyle:{"--aspect-ratio":"16 / 9"}},[s("iframe",{staticClass:"video-frame",attrs:{width:"100%",height:"100%",src:t.videoUrl,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})]):t._e()},a=[],o=s("e4fd"),r={name:"YtVideo",props:{videoId:{type:String,required:!0}},setup(t,e){const s=Object(o["computed"])((()=>{const e=t.videoId;return e?"https://i.ytimg.com/vi_webp/"+e+"/maxresdefault.webp":""})),i=Object(o["computed"])((()=>{const e=t.videoId;return e?"https://www.youtube-nocookie.com/embed/"+e+"?rel=0&iv_load_policy=3&showinfo=0&controls=2&origin=https://meanings.farm":""}));return{posterUrl:s,videoUrl:i}}},n=r,d=(s("edcb"),s("2877")),c=Object(d["a"])(n,i,a,!1,null,null,null);e["a"]=c.exports},e2e6:function(t,e,s){},edcb:function(t,e,s){"use strict";s("e2e6")}}]);