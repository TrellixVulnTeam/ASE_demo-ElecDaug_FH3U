(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47c30046"],{1173:function(e,t){e.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},"13e1":function(e,t,r){},"24c5":function(e,t,r){"use strict";var n,i,o,a,s=r("b8e3"),c=r("e53d"),l=r("d864"),u=r("40c3"),d=r("63b6"),f=r("f772"),h=r("79aa"),m=r("1173"),p=r("a22a"),g=r("f201"),v=r("4178").set,b=r("aba2")(),y=r("656e"),_=r("4439"),w=r("bc13"),x=r("cd78"),F="Promise",k=c.TypeError,M=c.process,$=M&&M.versions,R=$&&$.v8||"",D=c[F],A="process"==u(M),L=function(){},V=i=y.f,j=!!function(){try{var e=D.resolve(1),t=(e.constructor={})[r("5168")("species")]=function(e){e(L,L)};return(A||"function"==typeof PromiseRejectionEvent)&&e.then(L)instanceof t&&0!==R.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(n){}}(),I=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},T=function(e,t){if(!e._n){e._n=!0;var r=e._c;b((function(){var n=e._v,i=1==e._s,o=0,a=function(t){var r,o,a,s=i?t.ok:t.fail,c=t.resolve,l=t.reject,u=t.domain;try{s?(i||(2==e._h&&N(e),e._h=1),!0===s?r=n:(u&&u.enter(),r=s(n),u&&(u.exit(),a=!0)),r===t.promise?l(k("Promise-chain cycle")):(o=I(r))?o.call(r,c,l):c(r)):l(n)}catch(d){u&&!a&&u.exit(),l(d)}};while(r.length>o)a(r[o++]);e._c=[],e._n=!1,t&&!e._h&&C(e)}))}},C=function(e){v.call(c,(function(){var t,r,n,i=e._v,o=O(e);if(o&&(t=_((function(){A?M.emit("unhandledRejection",i,e):(r=c.onunhandledrejection)?r({promise:e,reason:i}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",i)})),e._h=A||O(e)?2:1),e._a=void 0,o&&t.e)throw t.v}))},O=function(e){return 1!==e._h&&0===(e._a||e._c).length},N=function(e){v.call(c,(function(){var t;A?M.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})}))},P=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),T(t,!0))},S=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw k("Promise can't be resolved itself");(t=I(e))?b((function(){var n={_w:r,_d:!1};try{t.call(e,l(S,n,1),l(P,n,1))}catch(i){P.call(n,i)}})):(r._v=e,r._s=1,T(r,!1))}catch(n){P.call({_w:r,_d:!1},n)}}};j||(D=function(e){m(this,D,F,"_h"),h(e),n.call(this);try{e(l(S,this,1),l(P,this,1))}catch(t){P.call(this,t)}},n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=r("5c95")(D.prototype,{then:function(e,t){var r=V(g(this,D));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=A?M.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&T(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new n;this.promise=e,this.resolve=l(S,e,1),this.reject=l(P,e,1)},y.f=V=function(e){return e===D||e===a?new o(e):i(e)}),d(d.G+d.W+d.F*!j,{Promise:D}),r("45f2")(D,F),r("4c95")(F),a=r("584a")[F],d(d.S+d.F*!j,F,{reject:function(e){var t=V(this),r=t.reject;return r(e),t.promise}}),d(d.S+d.F*(s||!j),F,{resolve:function(e){return x(s&&this===a?D:this,e)}}),d(d.S+d.F*!(j&&r("4ee1")((function(e){D.all(e)["catch"](L)}))),F,{all:function(e){var t=this,r=V(t),n=r.resolve,i=r.reject,o=_((function(){var r=[],o=0,a=1;p(e,!1,(function(e){var s=o++,c=!1;r.push(void 0),a++,t.resolve(e).then((function(e){c||(c=!0,r[s]=e,--a||n(r))}),i)})),--a||n(r)}));return o.e&&i(o.v),r.promise},race:function(e){var t=this,r=V(t),n=r.reject,i=_((function(){p(e,!1,(function(e){t.resolve(e).then(r.resolve,n)}))}));return i.e&&n(i.v),r.promise}})},3024:function(e,t){e.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},3702:function(e,t,r){var n=r("481b"),i=r("5168")("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||o[i]===e)}},"3b8d":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("795b"),i=r.n(n);function o(e,t,r,n,o,a,s){try{var c=e[a](s),l=c.value}catch(u){return void r(u)}c.done?t(l):i.a.resolve(l).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new i.a((function(n,i){var a=e.apply(t,r);function s(e){o(a,n,i,s,c,"next",e)}function c(e){o(a,n,i,s,c,"throw",e)}s(void 0)}))}}},"3c11":function(e,t,r){"use strict";var n=r("63b6"),i=r("584a"),o=r("e53d"),a=r("f201"),s=r("cd78");n(n.P+n.R,"Promise",{finally:function(e){var t=a(this,i.Promise||o.Promise),r="function"==typeof e;return this.then(r?function(r){return s(t,e()).then((function(){return r}))}:e,r?function(r){return s(t,e()).then((function(){throw r}))}:e)}})},"40c3":function(e,t,r){var n=r("6b4c"),i=r("5168")("toStringTag"),o="Arguments"==n(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(r){}};e.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=a(t=Object(e),i))?r:o?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},4178:function(e,t,r){var n,i,o,a=r("d864"),s=r("3024"),c=r("32fc"),l=r("1ec9"),u=r("e53d"),d=u.process,f=u.setImmediate,h=u.clearImmediate,m=u.MessageChannel,p=u.Dispatch,g=0,v={},b="onreadystatechange",y=function(){var e=+this;if(v.hasOwnProperty(e)){var t=v[e];delete v[e],t()}},_=function(e){y.call(e.data)};f&&h||(f=function(e){var t=[],r=1;while(arguments.length>r)t.push(arguments[r++]);return v[++g]=function(){s("function"==typeof e?e:Function(e),t)},n(g),g},h=function(e){delete v[e]},"process"==r("6b4c")(d)?n=function(e){d.nextTick(a(y,e,1))}:p&&p.now?n=function(e){p.now(a(y,e,1))}:m?(i=new m,o=i.port2,i.port1.onmessage=_,n=a(o.postMessage,o,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(n=function(e){u.postMessage(e+"","*")},u.addEventListener("message",_,!1)):n=b in l("script")?function(e){c.appendChild(l("script"))[b]=function(){c.removeChild(this),y.call(e)}}:function(e){setTimeout(a(y,e,1),0)}),e.exports={set:f,clear:h}},"42a3":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",[r("el-row",{staticClass:"search",attrs:{gutter:20}},[r("el-col",{attrs:{span:4}},[r("el-input",{attrs:{placeholder:"请输入扩增类型id",clearable:""},on:{clear:e.getAugList},model:{value:e.searchAugId,callback:function(t){e.searchAugId=t},expression:"searchAugId"}})],1),r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入扩增类型名称",clearable:""},on:{clear:e.getAugList},model:{value:e.searchAugName,callback:function(t){e.searchAugName=t},expression:"searchAugName"}},[r("el-button",{attrs:{slot:"append",size:"mini"},on:{click:e.PreciseSearchAug},slot:"append"},[e._v("精确"),r("i",{staticClass:"el-icon-search el-icon--right"})])],1)],1),r("el-col",{attrs:{span:4}}),r("el-col",{attrs:{span:4}},["超级管理员"===this.userRight?r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加生成类型")]):e._e()],1)],1),r("el-table",{attrs:{data:e.augTypeList,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"id",prop:"id",width:"50px"}}),r("el-table-column",{attrs:{label:"生成类型名称",prop:"name"}}),r("el-table-column",{attrs:{label:"生成类型描述",prop:"details"}}),r("el-table-column",{attrs:{label:"数据更新时间",prop:"update_datetime"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e._f("dateFormat")(t.row.update_datetime))+"\n                ")]}}])}),"超级管理员"===this.userRight?r("el-table-column",{attrs:{label:"操作",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{attrs:{effect:"dark",content:"编辑",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id,t.row.name,t.row.details)}}})],1)]}}],null,!1,1181641689)}):e._e(),r("el-table-column",{attrs:{label:"详情",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{attrs:{effect:"dark",content:"查看方法",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"info",icon:"el-icon-more-outline",size:"mini"},on:{click:function(r){return e.augMethodsById(t.row.id)}}})],1)]}}])})],1)],1),r("el-dialog",{attrs:{title:"添加生成类型",visible:e.addDialogVisible,width:"30%"},on:{"update:visible":function(t){e.addDialogVisible=t},closed:e.addDialogClosed}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"生成类型名称",prop:"name"}},[r("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),r("el-form-item",{attrs:{label:"生成类型描述",prop:"details"}},[r("el-input",{model:{value:e.addForm.details,callback:function(t){e.$set(e.addForm,"details",t)},expression:"addForm.details"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.addAugType}},[e._v("确 定")])],1)],1),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.fullscreenLoading,expression:"fullscreenLoading"}],attrs:{title:"编辑生成类型信息",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},closed:e.editDialogClosed}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"110px"}},[r("el-form-item",{attrs:{label:"生成类型id"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editForm.id,callback:function(t){e.$set(e.editForm,"id",t)},expression:"editForm.id"}})],1),r("el-form-item",{attrs:{label:"生成类型名称",prop:"new_password"}},[r("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),r("el-form-item",{attrs:{label:"生成类型描述",prop:"new_nickname"}},[r("el-input",{model:{value:e.editForm.details,callback:function(t){e.$set(e.editForm,"details",t)},expression:"editForm.details"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.editAugTypeInfo}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"生成方法详情",visible:e.methodDialogVisible,width:"90%"},on:{"update:visible":function(t){e.methodDialogVisible=t},closed:e.MethodsDialogClosed}},[r("el-row",{staticClass:"search",attrs:{gutter:20}},[r("el-col",{attrs:{span:4}},["超级管理员"===this.userRight?r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addMethodDialogVisible=!0}}},[e._v("添加生成方法")]):e._e()],1)],1),r("el-table",{attrs:{data:e.augMethodList,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"id",prop:"id",width:"50px"}}),r("el-table-column",{attrs:{label:"生成方法名称",prop:"name"}}),r("el-table-column",{attrs:{label:"生成方法描述",prop:"details"}}),r("el-table-column",{attrs:{label:"数据更新时间",prop:"update_datetime"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e._f("dateFormat")(t.row.update_datetime))+"\n                ")]}}])}),"超级管理员"===this.userRight?r("el-table-column",{attrs:{label:"操作",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{attrs:{effect:"dark",content:"编辑",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showMethodEditDialog(t.row.id,t.row.name,t.row.details)}}})],1)]}}],null,!1,15001702)}):e._e()],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.methodDialogVisible=!1}}},[e._v("关 闭")])],1)],1),r("el-dialog",{attrs:{title:"添加生成方法",visible:e.addMethodDialogVisible,width:"30%"},on:{"update:visible":function(t){e.addMethodDialogVisible=t},closed:e.addMethodDialogClosed}},[r("el-form",{ref:"addMethodFormRef",attrs:{model:e.addMethodForm,rules:e.addMethodFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"生成方法名称",prop:"name"}},[r("el-input",{model:{value:e.addMethodForm.name,callback:function(t){e.$set(e.addMethodForm,"name",t)},expression:"addMethodForm.name"}})],1),r("el-form-item",{attrs:{label:"生成方法描述",prop:"details"}},[r("el-input",{model:{value:e.addMethodForm.details,callback:function(t){e.$set(e.addMethodForm,"details",t)},expression:"addMethodForm.details"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addMethodDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.addAugMethod}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"编辑生成方法信息",visible:e.editMethodDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editMethodDialogVisible=t},closed:e.editMethodDialogClosed}},[r("el-form",{ref:"editMethodFormRef",attrs:{model:e.editMethodForm,rules:e.editMethodFormRules,"label-width":"110px"}},[r("el-form-item",{attrs:{label:"生成方法id"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editMethodForm.id,callback:function(t){e.$set(e.editMethodForm,"id",t)},expression:"editMethodForm.id"}})],1),r("el-form-item",{attrs:{label:"生成方法名称",prop:"new_password"}},[r("el-input",{model:{value:e.editMethodForm.name,callback:function(t){e.$set(e.editMethodForm,"name",t)},expression:"editMethodForm.name"}})],1),r("el-form-item",{attrs:{label:"生成方法描述",prop:"new_nickname"}},[r("el-input",{model:{value:e.editMethodForm.details,callback:function(t){e.$set(e.editMethodForm,"details",t)},expression:"editMethodForm.details"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editMethodDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.editAugMethodInfo}},[e._v("确 定")])],1)],1)],1)},i=[],o=(r("7f7f"),r("96cf"),r("3b8d")),a=r("4328"),s=r.n(a),c={data:function(){return{id:"",name:"",augTypeList:[],addDialogVisible:!1,addForm:{name:"",details:""},addFormRules:{name:[{required:!0,message:"请输入生成类型名",trigger:"blur"}]},editDialogVisible:!1,editForm:{id:"",name:"",details:""},editFormRules:{name:[{required:!0,message:"请输入生成类型名",trigger:"blur"}]},searchAugName:"",searchAugId:"",augMethodList:[],methodDialogVisible:!1,addMethodDialogVisible:!1,addMethodForm:{name:"",details:"",augmentation_type:0},addMethodFormRules:{name:[{required:!0,message:"请输入生成方法名",trigger:"blur"}]},editMethodDialogVisible:!1,editMethodForm:{id:"",name:"",details:"",augmentation_type:0},editMethodFormRules:{name:[{required:!0,message:"请输入生成类型名",trigger:"blur"}]},userRight:"",fullscreenLoading:!1}},created:function(){this.userRight=this.$store.state.user_group_name,this.getAugList()},methods:{getAugList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="",""!==this.name&&(t="?name="+this.name),e.next=4,this.$http.get("/augmentation_type/"+t);case 4:if(r=e.sent,n=r.data,console.log("data:",n),2e4===n.code){e.next=9;break}return e.abrupt("return",this.$message.error("获取生成类型失败！错误原因："+n.msg));case 9:this.augTypeList=n.data;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),PreciseSearchAug:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.searchAugName||""!==this.searchAugId){e.next=2;break}return e.abrupt("return",this.$message.error("请输入搜索内容！"));case 2:return t="",this.searchAugName&&this.searchAugId?t=t+"?name="+this.searchAugName+"&id="+this.searchAugId:this.searchAugName?t=t+"?name="+this.searchAugName:this.searchAugId&&(t=t+"?id="+this.searchAugId),e.next=6,this.$http.get("/augmentation_type/"+t);case 6:if(r=e.sent,n=r.data,2e4===n.code){e.next=10;break}return e.abrupt("return",this.$message.error("未精确搜索到该生成类型！"));case 10:this.augTypeList=[],this.augTypeList.push(n.data);case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),addAugType:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.$refs.addFormRef.validate(function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(n){var i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n){r.next=3;break}return t.close(),r.abrupt("return");case 3:return""===e.addForm.details&&(e.addForm.details="暂无"),r.next=6,e.$http.post("/augmentation_type/",s.a.stringify(e.addForm));case 6:if(i=r.sent,o=i.data,t.close(),2e4===o.code){r.next=11;break}return r.abrupt("return",e.$message.error("添加生成类型失败！请检查生成类型名是否重复"));case 11:e.$message.success("添加生成类型成功！"),e.addDialogVisible=!1,e.getAugList();case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},removeAugById:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$confirm("此操作将永久删除该生成类型, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(r=e.sent,"confirm"===r){e.next=5;break}return e.abrupt("return",this.$message.info("已取消删除"));case 5:if(1!=this.augTypeList.length){e.next=7;break}return e.abrupt("return",this.$message.error("删除生成类型失败！错误原因：系统至少需有一种生成类型"));case 7:return e.next=9,this.$http.delete("/augmentation_type/?id="+t);case 9:if(n=e.sent,i=n.data,2e4===i.code){e.next=13;break}return e.abrupt("return",this.$message.error("删除生成类型失败！错误原因："+i.msg));case 13:this.$message.success("删除生成类型成功！"),this.getAugList();case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),showEditDialog:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.editForm.id=t,this.editForm.name=r,this.editForm.details=n,this.editDialogVisible=!0;case 4:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}(),editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editAugTypeInfo:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.$refs.editFormRef.validate(function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(n){var i,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n){r.next=3;break}return t.close(),r.abrupt("return");case 3:return i={},i["id"]=e.editForm.id,e.editForm.name&&(i["name"]=e.editForm.name),e.editForm.details&&(i["details"]=e.editForm.details),console.log("temp_form:",i),console.log("this.editForm:",e.editForm),r.next=11,e.$http.put("/augmentation_type/",s.a.stringify(e.temp_form));case 11:if(o=r.sent,a=o.data,t.close(),console.log("data:",a),2e4===a.code){r.next=17;break}return r.abrupt("return",e.$message.error("修改生成类型失败！错误原因："+a.msg));case 17:e.$message.success("修改生成类型成功！"),e.editDialogVisible=!1,e.getAugList();case 20:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},augMethodsById:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.methodDialogVisible=!0,e.next=3,this.$http.get("/augmentation_method/?augmentation_type="+t);case 3:if(r=e.sent,n=r.data,45e3!==n.code){e.next=7;break}return e.abrupt("return",this.$message.error("该生成类型暂无方法！"));case 7:if(2e4===n.code){e.next=9;break}return e.abrupt("return",this.$message.error("查询生成方法失败！错误原因："+n.msg));case 9:this.augMethodList=n.data,JSON.stringify(this.augMethodList);case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addMethodDialogClosed:function(){this.$refs.addMethodFormRef.resetFields()},addAugMethod:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),this.$refs.addMethodFormRef.validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return t.close(),e.abrupt("return");case 3:return""===r.addMethodForm.details&&(r.addMethodForm.details="暂无"),r.addMethodForm.augmentation_type=r.augMethodList[0].augmentation_type_id,e.next=7,r.$http.post("/augmentation_method/",s.a.stringify(r.addMethodForm));case 7:if(i=e.sent,o=i.data,t.close(),2e4===o.code){e.next=12;break}return e.abrupt("return",r.$message.error("添加生成方法失败！请检查生成方法名是否重复"));case 12:r.$message.success("添加生成方法成功！"),r.addMethodDialogVisible=!1,r.augMethodsById(r.augMethodList[0].augmentation_type_id);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),showMethodEditDialog:function(e,t,r){this.editMethodForm.id=e,this.editMethodForm.name=t,this.editMethodForm.details=r||"暂无",this.editMethodForm.augmentation_type=this.augMethodList[0].augmentation_type_id,this.editMethodDialogVisible=!0},editAugMethodInfo:function(){var e=this,t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.$refs.editMethodFormRef.validate(function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(n){var i,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n){r.next=3;break}return t.close(),r.abrupt("return");case 3:return i={},i["id"]=e.editMethodForm.id,e.editMethodForm.name&&(i["name"]=e.editMethodForm.name),e.editMethodForm.details&&(i["details"]=e.editMethodForm.details),r.next=9,e.$http.put("/augmentation_method/",s.a.stringify(i));case 9:if(o=r.sent,a=o.data,t.close(),2e4===a.code){r.next=14;break}return r.abrupt("return",e.$message.error("修改生成方法失败，请添加修改！错误原因："+a.msg));case 14:e.$message.success("修改生成方法成功！"),e.editMethodDialogVisible=!1,e.augMethodsById(e.editMethodForm.augmentation_type);case 17:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},editMethodDialogClosed:function(){this.$refs.editMethodFormRef.resetFields()},removeAugMethodById:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$confirm("此操作将永久删除该生成方法, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(r=e.sent,"confirm"===r){e.next=5;break}return e.abrupt("return",this.$message.info("已取消删除"));case 5:if(1!=this.augMethodList.length){e.next=7;break}return e.abrupt("return",this.$message.error("删除生成方法失败！错误原因：生成类型至少需有一种生成方法"));case 7:return e.next=9,this.$http.delete("/augmentation_method/?id="+t);case 9:if(n=e.sent,i=n.data,2e4===i.code){e.next=13;break}return e.abrupt("return",this.$message.error("删除生成方法失败！错误原因："+i.msg));case 13:this.$message.success("删除生成方法成功！"),this.augMethodsById(this.augMethodList[0].augmentation_type_id);case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),MethodsDialogClosed:function(){this.augMethodList=[]}},mounted:function(){this.$store.commit("setUserId",sessionStorage.getItem("userId"))}},l=c,u=(r("749a"),r("2877")),d=Object(u["a"])(l,n,i,!1,null,"60e4f39c",null);t["default"]=d.exports},"43fc":function(e,t,r){"use strict";var n=r("63b6"),i=r("656e"),o=r("4439");n(n.S,"Promise",{try:function(e){var t=i.f(this),r=o(e);return(r.e?t.reject:t.resolve)(r.v),t.promise}})},4439:function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(t){return{e:!0,v:t}}}},"4c95":function(e,t,r){"use strict";var n=r("e53d"),i=r("584a"),o=r("d9f6"),a=r("8e60"),s=r("5168")("species");e.exports=function(e){var t="function"==typeof i[e]?i[e]:n[e];a&&t&&!t[s]&&o.f(t,s,{configurable:!0,get:function(){return this}})}},"4ee1":function(e,t,r){var n=r("5168")("iterator"),i=!1;try{var o=[7][n]();o["return"]=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(a){}e.exports=function(e,t){if(!t&&!i)return!1;var r=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:r=!0}},o[n]=function(){return s},e(o)}catch(a){}return r}},"5c95":function(e,t,r){var n=r("35e8");e.exports=function(e,t,r){for(var i in t)r&&e[i]?e[i]=t[i]:n(e,i,t[i]);return e}},"656e":function(e,t,r){"use strict";var n=r("79aa");function i(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n})),this.resolve=n(t),this.reject=n(r)}e.exports.f=function(e){return new i(e)}},"696e":function(e,t,r){r("c207"),r("1654"),r("6c1c"),r("24c5"),r("3c11"),r("43fc"),e.exports=r("584a").Promise},"749a":function(e,t,r){"use strict";r("13e1")},"795b":function(e,t,r){e.exports=r("696e")},"7cd6":function(e,t,r){var n=r("40c3"),i=r("5168")("iterator"),o=r("481b");e.exports=r("584a").getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[n(e)]}},a22a:function(e,t,r){var n=r("d864"),i=r("b0dc"),o=r("3702"),a=r("e4ae"),s=r("b447"),c=r("7cd6"),l={},u={};t=e.exports=function(e,t,r,d,f){var h,m,p,g,v=f?function(){return e}:c(e),b=n(r,d,t?2:1),y=0;if("function"!=typeof v)throw TypeError(e+" is not iterable!");if(o(v)){for(h=s(e.length);h>y;y++)if(g=t?b(a(m=e[y])[0],m[1]):b(e[y]),g===l||g===u)return g}else for(p=v.call(e);!(m=p.next()).done;)if(g=i(p,b,m.value,t),g===l||g===u)return g};t.BREAK=l,t.RETURN=u},aba2:function(e,t,r){var n=r("e53d"),i=r("4178").set,o=n.MutationObserver||n.WebKitMutationObserver,a=n.process,s=n.Promise,c="process"==r("6b4c")(a);e.exports=function(){var e,t,r,l=function(){var n,i;c&&(n=a.domain)&&n.exit();while(e){i=e.fn,e=e.next;try{i()}catch(o){throw e?r():t=void 0,o}}t=void 0,n&&n.enter()};if(c)r=function(){a.nextTick(l)};else if(!o||n.navigator&&n.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);r=function(){u.then(l)}}else r=function(){i.call(n,l)};else{var d=!0,f=document.createTextNode("");new o(l).observe(f,{characterData:!0}),r=function(){f.data=d=!d}}return function(n){var i={fn:n,next:void 0};t&&(t.next=i),e||(e=i,r()),t=i}}},b0dc:function(e,t,r){var n=r("e4ae");e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(a){var o=e["return"];throw void 0!==o&&n(o.call(e)),a}}},bc13:function(e,t,r){var n=r("e53d"),i=n.navigator;e.exports=i&&i.userAgent||""},cd78:function(e,t,r){var n=r("e4ae"),i=r("f772"),o=r("656e");e.exports=function(e,t){if(n(e),i(t)&&t.constructor===e)return t;var r=o.f(e),a=r.resolve;return a(t),r.promise}},f201:function(e,t,r){var n=r("e4ae"),i=r("79aa"),o=r("5168")("species");e.exports=function(e,t){var r,a=n(e).constructor;return void 0===a||void 0==(r=n(a)[o])?t:i(r)}}}]);