(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"3a58":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"800px"}},[a("SectionText",{attrs:{listId:e.listId,page:e.page,rowsPerPage:e.rowsPerPage}})],1)])},n=[],l=a("e4fd"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("q-space"),a("q-btn",{attrs:{flat:"",label:e.state.mode,color:"primary"},on:{click:e.toggleMode}})],1),a("div",{staticClass:"row justify-center q-mt-md"},[a("q-pagination",{attrs:{color:"grey-8",max:e.pagesNumber,size:"sm"},on:{input:function(t){return e.updatePagination(t)}},model:{value:e.state.page,callback:function(t){e.$set(e.state,"page",t)},expression:"state.page"}})],1),a("q-table",{attrs:{title:e.state.label,data:e.state.items,columns:e.columns,"row-key":"_id","visible-columns":e.state.visibleColumns,"hide-header":"",loading:e.state.loading,pagination:e.state.pagination,"hide-pagination":""},on:{"row-click":e.onclick,request:e.loadData,"update:pagination":function(t){return e.$set(e.state,"pagination",t)}}})],1)},s=[],r=(a("a434"),a("5319"),{name:"SectionText",components:{},props:{listId:{type:String,required:!0},page:{type:Number,required:!1,default:0}},data(){return{columns:[{name:"number",align:"right",label:"",field:"number",style:"width: 100px",sortable:!1},{name:"original",align:"left",label:"",field:"original",sortable:!1},{name:"transliteration",align:"left",label:"",field:"transliteration",sortable:!1}]}},setup(e,t){const{ListV:a}=t.root.$FeathersVuex.api,{$route:i,$router:n}=t.root,o=Object(l["computed"])((()=>e.listId)),s=Object(l["computed"])((()=>e.page)),r=Object(l["computed"])((()=>10)),c=Object(l["reactive"])({mode:"transliteration",visibleColumns:["number","transliteration"],loading:!1,label:"",items:[],page:s.value,total:0,pagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:r.value}}),u=Object(l["computed"])((()=>Math.ceil(c.total/r.value))),p=()=>{"original"===c.mode?(c.mode="transliteration",c.visibleColumns=["number","transliteration"]):(c.mode="original",c.visibleColumns=["number","original"])},d=function(e,t,a){const i=t.id;n.push({path:`/sumerian/line/${i}`})},g=function(e){const t=o.value;if(t){const a=`/sumerian/text/${t}/${r.value}/${e}`;i.path!==a&&n.replace({path:a})}},m=e=>{const t=c.page||1,i=r.value,n=i*(t-1);t>0&&(c.loading=!0,a.find({query:{listId:o.value,$limit:i,$skip:n}}).then((e=>{const t=(e||{}).data||[];c.items.splice(0,c.items.length),t.forEach(((e,t)=>{c.items.push(e)})),c.total=e.total,c.loading=!1})).catch((e=>{console.log("err",e),c.loading=!1})))};return m(),Object(l["watch"])((()=>e.page),((e,t)=>m())),Object(l["watch"])((()=>e.listId),((e,t)=>m())),{state:c,toggleMode:p,onclick:d,updatePagination:g,pagesNumber:u,loadData:m}}}),c=r,u=a("2877"),p=a("2c91"),d=a("9c40"),g=a("3b16"),m=a("eaac"),b=a("eebe"),f=a.n(b),h=Object(u["a"])(c,o,s,!1,null,null,null),v=h.exports;f()(h,"components",{QSpace:p["a"],QBtn:d["a"],QPagination:g["a"],QTable:m["a"]});var w={name:"PageCatalog",components:{SectionText:v},props:{id:{type:String,required:!0},page:{type:Number,required:!1,default:0},rowsPerPage:{type:Number,required:!1,default:10}},setup(e,t){const a=Object(l["computed"])((()=>e.id));return{listId:a}}},q=w,y=a("9989"),P=Object(u["a"])(q,i,n,!1,null,null,null);t["default"]=P.exports;f()(P,"components",{QPage:y["a"]})}}]);