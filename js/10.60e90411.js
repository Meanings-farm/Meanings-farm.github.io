(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{eb9c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{},[n("div",{staticClass:"row"},[e.state.editable&&0===(e.children||[]).length?n("q-btn",{attrs:{flat:"",round:"",icon:"create_new_folder",color:"primary"},on:{click:e.createList}}):e._e(),n("q-space"),n("q-btn",{attrs:{flat:"",round:"",icon:"edit",color:e.state.editable?"primary":"secondary"},on:{click:e.toggleEditable}})],1),n("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"800px"}},[n("SectionList",{attrs:{listId:e.listId,editable:e.state.editable,relationName:"eng"}})],1)])},i=[],l=(n("e6cf"),n("e4fd")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-infinite-scroll",{attrs:{offset:250},on:{load:e.loadData},scopedSlots:e._u([{key:"loading",fn:function(){return[n("div",{staticClass:"row justify-center q-my-md"},[n("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)]},proxy:!0}])},[n("Container",{on:{drop:e.onDrop}},e._l(e.state.items,(function(t){return n("Pass",{key:t._id,attrs:{label:t[e.relationName]},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.label;return n("Draggable",{},[n("div",[e.editable?n("FeathersVuexFormWrapper",{attrs:{item:t,watch:""},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.clone,l=a.save;return[n("q-item",[n("q-item-section",[n("q-markup-table",{attrs:{flat:"",bordered:""}},[n("tbody",[n("tr",[n("td",[n("sup",[e._v("label:")]),e._v(" "+e._s(i.eng)+"\n                          "),n("q-popup-edit",{on:{save:function(e,t){return l()}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.initialValue,l=t.value,o=t.validate,r=t.set,s=t.cancel;return[n("q-input",{attrs:{dense:"",autofocus:""},scopedSlots:e._u([{key:"before",fn:function(){return[n("q-btn",{attrs:{flat:"",dense:"",color:"negative",icon:"cancel"},on:{click:function(e){return e.stopPropagation(),s(e)}}}),n("q-btn",{attrs:{flat:"",dense:"",color:"positive",icon:"check_circle",disable:!1===o(l)||a===l},on:{click:function(e){return e.stopPropagation(),r(e)}}})]},proxy:!0}],null,!0),model:{value:i.eng,callback:function(t){e.$set(i,"eng",t)},expression:"clone.eng"}})]}}],null,!0),model:{value:i.eng,callback:function(t){e.$set(i,"eng",t)},expression:"clone.eng"}})],1)]),n("tr",[n("td",[n("sup",[e._v("link:")]),e._v(" "+e._s(i.link)+"\n                          "),n("q-popup-edit",{on:{save:function(e,t){return l()}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.initialValue,l=t.value,o=t.validate,r=t.set,s=t.cancel;return[n("q-input",{attrs:{dense:"",autofocus:""},scopedSlots:e._u([{key:"before",fn:function(){return[n("q-btn",{attrs:{flat:"",dense:"",color:"negative",icon:"cancel"},on:{click:function(e){return e.stopPropagation(),s(e)}}}),n("q-btn",{attrs:{flat:"",dense:"",color:"positive",icon:"check_circle",disable:!1===o(l)||a===l},on:{click:function(e){return e.stopPropagation(),r(e)}}})]},proxy:!0}],null,!0),model:{value:i.link,callback:function(t){e.$set(i,"link",t)},expression:"clone.link"}})]}}],null,!0),model:{value:i.link,callback:function(t){e.$set(i,"link",t)},expression:"clone.link"}})],1)])])])],1),n("q-item-section",{attrs:{top:"",side:""}},[n("div",{staticClass:"text-grey-8 q-gutter-xs"},[n("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete",click:function(){return e.deleteRelation(t,i)}}})],1)])],1)]}}],null,!0)}):n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:t.link}},[n("q-item-section",[e._v("\n              "+e._s(i)+"\n            ")])],1)],1)])}}],null,!0)})})),1),e.editable?n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.addItem(e.instance)}}},[n("q-item-section",[e._v("\n      +\n    ")])],1):e._e()],1)},r=[],s=(n("a434"),n("ddb0"),n("3f7d"));const c={render(){return this.$scopedSlots.default(this.$attrs)}},u=(e,t)=>{const{removedIndex:n,addedIndex:a,payload:i}=t;if(null===n&&null===a)return e;const l=[...e];let o=i;return null!==n&&(o=l.splice(n,1)[0]),null!==a&&l.splice(a,0,o),l};var d={name:"SectionList",components:{Container:s["Container"],Draggable:s["Draggable"],Pass:c},props:{listId:{type:String,required:!0},relationName:{type:String,required:!0},editable:{type:Boolean,required:!1,default:!1}},data:()=>({}),methods:{onDrop(e){const t=this.instance.clone();t.ids=u(t.ids,e),t.save()}},setup(e,t){const{Atom:n,Relation:a,ListV:i}=t.root.$FeathersVuex.api,o=Object(l["reactive"])({items:[],editable:!1}),r=()=>{o.editable=!o.editable},s=Object(l["computed"])((()=>({lang:["eng","rus"]}))),c=Object(l["computed"])((()=>[(s.lang||[])[0]||"eng"])),u=(t,n)=>{i.find({query:{listId:e.listId,$limit:50,$skip:o.items.length}}).then((e=>{const t=(e||{}).data||[];t.forEach((e=>o.items.push(e))),n(0===t.length)}))},d=async e=>{const t=new n({}),a=await t.create(),i=e.clone();i.ids.push(a._id),i.save()},p=(e,t)=>({query:{subject:e,relation:t}}),f=async(e,t)=>{const n=new a({subject:e._id,relation:t,object:""});return await n.create()},b=(e,t)=>{e.clone();const n=e.ids.filter((e=>e===t.subject));console.log("ids",n)};return{user:s,lang:c,state:o,toggleEditable:r,addItem:d,relationParams:p,createRelation:f,deleteRelation:b,loadData:u}}},p=d,f=n("2877"),b=n("ef35"),g=n("66e5"),m=n("4074"),v=n("2bb1"),k=n("42a1"),y=n("27f9"),q=n("9c40"),_=n("8380"),h=n("714f"),x=n("eebe"),S=n.n(x),w=Object(f["a"])(p,o,r,!1,null,null,null),I=w.exports;S()(w,"components",{QInfiniteScroll:b["a"],QItem:g["a"],QItemSection:m["a"],QMarkupTable:v["a"],QPopupEdit:k["a"],QInput:y["a"],QBtn:q["a"],QSpinnerDots:_["a"]}),S()(w,"directives",{Ripple:h["a"]});var j={name:"PageCatalog",components:{SectionList:I},props:{language:{type:String,required:!0},category:{type:String,required:!0}},setup(e,t){const{List:n}=t.root.$FeathersVuex.api,a=Object(l["computed"])((()=>e.language+"."+e.category)),i=async()=>{const e=new n({id:a.value}),t=await e.create();return console.log("createList",t),!0},o=async e=>{},r=Object(l["reactive"])({editable:!1}),s=()=>{r.editable=!r.editable};return{state:r,toggleEditable:s,listId:a,createList:i,addItem:o}}},$=j,Q=n("9989"),P=n("2c91"),C=Object(f["a"])($,a,i,!1,null,null,null);t["default"]=C.exports;S()(C,"components",{QPage:Q["a"],QBtn:q["a"],QSpace:P["a"]})}}]);