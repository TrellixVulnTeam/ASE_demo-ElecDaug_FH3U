(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9777f466"],{2017:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-picture-outline"}),e._v(" SAR雷达对抗 ")]),r("el-breadcrumb-item",[e._v("添加生成任务")])],1)],1),r("div",{staticClass:"container"},[r("div",{staticClass:"form-box"},[r("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.rulesList,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"任务名称",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"任务类型"}},[r("el-cascader",{attrs:{options:e.methods,props:{expandTrigger:"hover"}},on:{change:e.methodChanged},model:{value:e.params_id,callback:function(t){e.params_id=t},expression:"params_id"}})],1),7==e.params_id[1]||4==e.params_id[1]||5==e.params_id[1]||6==e.params_id[1]?r("el-form-item",{attrs:{label:"紧急等级"}},[r("div",{staticStyle:{float:"left","margin-right":"5px",width:"300px"}},[r("el-slider",{attrs:{min:1,max:5,step:1,marks:e.mark_group.marks1_5},model:{value:e.form.urgency_level,callback:function(t){e.$set(e.form,"urgency_level",t)},expression:"form.urgency_level"}})],1),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"紧急等级:",width:"200",trigger:"hover",content:"任务的紧急程度，系统会根据紧急等级对任务进行调度"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)]):e._e(),4==e.params_id[1]?r("el-form-item",{attrs:{label:"扰动幅度"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}}),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"扰动幅度:",width:"200",trigger:"hover",content:"表示攻击中对图像的扰动值，可批量设置"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1),r("el-radio",{attrs:{label:"1"},model:{value:e.radio_epsilon_4,callback:function(t){e.radio_epsilon_4=t},expression:"radio_epsilon_4"}},[e._v("列表")]),r("el-radio",{attrs:{label:"2"},model:{value:e.radio_epsilon_4,callback:function(t){e.radio_epsilon_4=t},expression:"radio_epsilon_4"}},[e._v("范围")]),"1"==e.radio_epsilon_4?r("div",{staticStyle:{"margin-right":"5px"}},[e._l(e.form.domain_4,(function(t,i){return r("el-form-item",{key:t.key,attrs:{label:"幅度"+(i+1),"label-width":"50px"}},[r("el-slider",{attrs:{"show-input":"",min:.1,max:255,step:.1,marks:e.mark_group.mark01_255},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"domain.value"}}),r("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(r){return r.preventDefault(),e.removeDomain(t,4)}}},[e._v("删除")])],1)})),r("el-form-item",[r("el-button",{on:{click:function(t){return e.addDomain(4)}}},[e._v("新增幅度")]),r("el-button",{on:{click:function(t){return e.resetForm("form",4)}}},[e._v("重置")])],1)],2):e._e(),"2"==e.radio_epsilon_4?r("el-slider",{attrs:{range:"",min:.1,max:255,step:.1,marks:e.mark_group.mark01_255},model:{value:e.form.range_epsilon_4,callback:function(t){e.$set(e.form,"range_epsilon_4",t)},expression:"form.range_epsilon_4"}}):e._e()],1):e._e(),7==e.params_id[1]?r("el-form-item",{attrs:{label:"单步扰动幅度"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}}),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"单步扰动幅度:",width:"200",trigger:"hover",content:"表示迭代攻击中每步对图像的扰动值，可批量设置"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1),r("el-radio",{attrs:{label:"1"},model:{value:e.radio_epsilon_7,callback:function(t){e.radio_epsilon_7=t},expression:"radio_epsilon_7"}},[e._v("列表")]),r("el-radio",{attrs:{label:"2"},model:{value:e.radio_epsilon_7,callback:function(t){e.radio_epsilon_7=t},expression:"radio_epsilon_7"}},[e._v("范围")]),"1"==e.radio_epsilon_7?r("div",{staticStyle:{"margin-right":"5px"}},[e._l(e.form.domain_7,(function(t,i){return r("el-form-item",{key:t.key,attrs:{label:"幅度"+(i+1),"label-width":"50px"}},[r("el-slider",{attrs:{"show-input":"",min:.1,max:255,step:.1,marks:e.mark_group.mark01_255},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"domain.value"}}),r("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(r){return r.preventDefault(),e.removeDomain(t,7)}}},[e._v("删除")])],1)})),r("el-form-item",[r("el-button",{on:{click:function(t){return e.addDomain(7)}}},[e._v("新增幅度")]),r("el-button",{on:{click:function(t){return e.resetForm("form",7)}}},[e._v("重置")])],1)],2):e._e(),"2"==e.radio_epsilon_7?r("el-slider",{attrs:{range:"",min:.1,max:255,step:.1,marks:e.mark_group.mark01_255},model:{value:e.form.range_epsilon_7,callback:function(t){e.$set(e.form,"range_epsilon_7",t)},expression:"form.range_epsilon_7"}}):e._e()],1):e._e(),5==e.params_id[1]?r("el-form-item",{attrs:{label:"单步扰动幅度"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}}),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"单步扰动幅度:",width:"200",trigger:"hover",content:"表示迭代攻击中每步对图像的扰动值，可批量设置"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1),r("el-radio",{attrs:{label:"1"},model:{value:e.radio_epsilon_5,callback:function(t){e.radio_epsilon_5=t},expression:"radio_epsilon_5"}},[e._v("列表")]),r("el-radio",{attrs:{label:"2"},model:{value:e.radio_epsilon_5,callback:function(t){e.radio_epsilon_5=t},expression:"radio_epsilon_5"}},[e._v("范围")]),"1"==e.radio_epsilon_5?r("div",{staticStyle:{"margin-right":"5px"}},[e._l(e.form.domain_5,(function(t,i){return r("el-form-item",{key:t.key,attrs:{label:"幅度"+(i+1),"label-width":"50px"}},[r("el-slider",{attrs:{"show-input":"",min:.1,max:255,step:.1,marks:e.mark_group.mark01_255},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"domain.value"}}),r("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(r){return r.preventDefault(),e.removeDomain(t,5)}}},[e._v("删除")])],1)})),r("el-form-item",[r("el-button",{on:{click:function(t){return e.addDomain(5)}}},[e._v("新增幅度")]),r("el-button",{on:{click:function(t){return e.resetForm("form",5)}}},[e._v("重置")])],1)],2):e._e(),"2"==e.radio_epsilon_5?r("el-slider",{attrs:{range:"",min:.1,max:255,step:.1,marks:e.mark_group.mark01_255},model:{value:e.form.range_epsilon_5,callback:function(t){e.$set(e.form,"range_epsilon_5",t)},expression:"form.range_epsilon_5"}}):e._e()],1):e._e(),6==e.params_id[1]?r("el-form-item",{attrs:{label:"单步扰动幅度"}},[r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"单步扰动幅度:",width:"200",trigger:"hover",content:"表示迭代攻击中每步对图像的扰动值【推荐取值0.5以上】，可批量设置"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1),r("el-radio",{attrs:{label:"1"},model:{value:e.radio_epsilon_6,callback:function(t){e.radio_epsilon_6=t},expression:"radio_epsilon_6"}},[e._v("列表")]),r("el-radio",{attrs:{label:"2"},model:{value:e.radio_epsilon_6,callback:function(t){e.radio_epsilon_6=t},expression:"radio_epsilon_6"}},[e._v("范围")]),"1"==e.radio_epsilon_6?r("div",{staticStyle:{"margin-right":"5px"}},[e._l(e.form.domain_6,(function(t,i){return r("el-form-item",{key:t.key,attrs:{label:"幅度"+(i+1),"label-width":"50px"}},[r("el-slider",{attrs:{"show-input":"",min:.1,max:255,step:.1,marks:e.mark_group.mark01_255},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"domain.value"}}),r("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(r){return r.preventDefault(),e.removeDomain(t,6)}}},[e._v("删除")])],1)})),r("el-form-item",[r("el-button",{on:{click:function(t){return e.addDomain(6)}}},[e._v("新增幅度")]),r("el-button",{on:{click:function(t){return e.resetForm("form",6)}}},[e._v("重置")])],1)],2):e._e(),"2"==e.radio_epsilon_6?r("el-slider",{attrs:{range:"",min:.1,max:255,step:.1,marks:e.mark_group.mark01_255},model:{value:e.form.range_epsilon_6,callback:function(t){e.$set(e.form,"range_epsilon_6",t)},expression:"form.range_epsilon_6"}}):e._e()],1):e._e(),"2"==e.radio_epsilon_7&&7==e.params_id[1]?r("el-form-item",{attrs:{label:"单文件生成数量",prop:"generate_per_file"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}},[r("el-slider",{attrs:{min:1,max:50,marks:e.marks},model:{value:e.form.generate_per_file,callback:function(t){e.$set(e.form,"generate_per_file",t)},expression:"form.generate_per_file"}})],1),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"单文件生成数量及参数:",width:"200",trigger:"hover",content:"表示所期望生成的图像数量"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)]):e._e(),"2"==e.radio_epsilon_4&&4==e.params_id[1]?r("el-form-item",{attrs:{label:"单文件生成数量",prop:"generate_per_file"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}},[r("el-slider",{attrs:{min:1,max:50,marks:e.marks},model:{value:e.form.generate_per_file,callback:function(t){e.$set(e.form,"generate_per_file",t)},expression:"form.generate_per_file"}})],1),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"单文件生成数量及参数:",width:"200",trigger:"hover",content:"表示所期望生成的图像数量"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)]):e._e(),"2"==e.radio_epsilon_5&&5==e.params_id[1]?r("el-form-item",{attrs:{label:"单文件生成数量",prop:"generate_per_file"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}},[r("el-slider",{attrs:{min:1,max:50,marks:e.marks},model:{value:e.form.generate_per_file,callback:function(t){e.$set(e.form,"generate_per_file",t)},expression:"form.generate_per_file"}})],1),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"单文件生成数量及参数:",width:"200",trigger:"hover",content:"表示所期望生成的图像数量"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)]):e._e(),"2"==e.radio_epsilon_6&&6==e.params_id[1]?r("el-form-item",{attrs:{label:"单文件生成数量",prop:"generate_per_file"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}},[r("el-slider",{attrs:{min:1,max:50,marks:e.marks},model:{value:e.form.generate_per_file,callback:function(t){e.$set(e.form,"generate_per_file",t)},expression:"form.generate_per_file"}})],1),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"单文件生成数量及参数:",width:"200",trigger:"hover",content:"表示所期望生成的图像数量"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)]):e._e(),5==e.params_id[1]?r("el-form-item",{attrs:{label:"迭代次数上限"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}},[r("el-slider",{attrs:{min:1,max:50,marks:e.marks},model:{value:e.form.ite_limit,callback:function(t){e.$set(e.form,"ite_limit",t)},expression:"form.ite_limit"}})],1),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"迭代次数上限:",width:"200",trigger:"hover",content:"表示可对图像单步扰动的最大次数"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)]):e._e(),7==e.params_id[1]?r("el-form-item",{attrs:{label:"迭代次数",prop:"num_iters"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}},[r("el-slider",{attrs:{min:1,max:50,marks:e.marks},model:{value:e.form.num_iters,callback:function(t){e.$set(e.form,"num_iters",t)},expression:"form.num_iters"}})],1),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"迭代次数:",width:"200",trigger:"hover",content:"表示可扰动的最大次数"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)]):e._e(),6==e.params_id[1]?r("el-form-item",{attrs:{label:"最多扰动特征数比例",prop:"gamma"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}},[r("el-slider",{attrs:{min:1,max:100,marks:e.ite_limit_bili_marks},model:{value:e.form.gamma,callback:function(t){e.$set(e.form,"gamma",t)},expression:"form.gamma"}})],1),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"最多扰动特征数比例:",width:"200",trigger:"hover",content:"【推荐取值50%-100%】"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)]):e._e(),6==e.params_id[1]?r("el-form-item",{attrs:{label:"定向攻击标签",prop:"target"}},[r("div",{staticClass:"block",staticStyle:{float:"left","margin-right":"20px",width:"200px"}},[r("el-cascader",{attrs:{options:e.directional,props:{expandTrigger:"hover"}},on:{change:e.handleChange},model:{value:e.directional_id,callback:function(t){e.directional_id=t},expression:"directional_id"}})],1),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"定向攻击标签:",width:"200",trigger:"hover",content:"选择定向攻击的方式"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)]):e._e(),6==e.params_id[1]?r("el-form-item",{attrs:{label:"攻击方向",prop:"positive"}},[r("el-radio",{attrs:{label:"1"},model:{value:e.form.positive,callback:function(t){e.$set(e.form,"positive",t)},expression:"form.positive"}},[e._v("正向")]),r("el-radio",{attrs:{label:"0"},model:{value:e.form.positive,callback:function(t){e.$set(e.form,"positive",t)},expression:"form.positive"}},[e._v("负向")]),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"攻击方向:",width:"200",trigger:"hover",content:"对抗方向可分为正向或者负向"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)],1):e._e(),4==e.params_id[1]||5==e.params_id[1]||6==e.params_id[1]||7==e.params_id[1]?r("el-form-item",{attrs:{label:"严格模式"}},[r("div",{staticStyle:{float:"left","margin-right":"5px"}},[r("el-switch",{attrs:{"active-text":"是","inactive-text":"否"},model:{value:e.form.strict_mode,callback:function(t){e.$set(e.form,"strict_mode",t)},expression:"form.strict_mode"}})],1),r("div",{staticStyle:{float:"left"}},[r("el-popover",{staticStyle:{float:"left"},attrs:{placement:"right-start",title:"严格模式:",width:"200",trigger:"hover",content:"表示是否是严格模式(“是”，表示生成结果必须使得模型做出错误判断才算扩增数据；“否”，表示直接经过参数设定生成的数据即视为扩增数据)"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})])],1)]):e._e(),7==e.params_id[1]||4==e.params_id[1]||5==e.params_id[1]||6==e.params_id[1]?r("el-form-item",{attrs:{label:"上传文件"}},[r("input",{ref:"image_a_file_ref",attrs:{type:"file",id:"filetemp",prop:"form.file"},on:{change:e.fileLoad}}),r("el-popover",{attrs:{placement:"right-start",title:"上传文件:",width:"200",trigger:"hover",content:"该方法所需上传文件类型限制为 .jpg/.jpeg/.zip 类型"}},[r("i",{staticClass:"el-icon-info",attrs:{slot:"reference"},slot:"reference"})]),r("br")],1):e._e(),r("el-form-item",[r("el-button",{attrs:{type:"primary",disabled:e.is_available_to_submit,loading:e.loading,"element-loading-spinner":"el-icon-loading","element-loading-text":"提交中"},on:{click:e.onSubmit}},[e._v("表单提交")])],1)],1)],1)])])},a=[],l=(r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("768b")),o=(r("ac6a"),r("6b54"),r("7f7f"),r("96cf"),r("3b8d")),n=(r("a481"),r("7618"));r("28a5"),r("3b2b"),r("4328");function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=m(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,n=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){n=!0,l=e},f:function(){try{o||null==r.return||r.return()}finally{if(n)throw l}}}}function m(e,t){if(e){if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var c={name:"baseform",inject:["reload"],data:function(){var e=function(e,t,r){var i=new RegExp("^[1-9][0-9]*$").test(t);"0"===t||i?r():r(new Error("请输入非负整数"))},t=function(e,t,r){t<1?r(new Error("只能为大于等于1整数")):r()},r=function(e,t,r){var i=/^[0-9]*$/;i.test(t)?r():r(new Error("只能为非负数字"))},i=function(e,t,r){t<0?r(new Error("只能为非负数")):r()},a=function(e,t,r){var i=t.split(",");for(var a in i)"number"===!Object(n["a"])(parseFloat(i[a]))&&!isNaN(parseFloat(i[a]))&&parseFloat(i[a])<0?r(new Error("请填写合理的非负数字列表")):r()};return{mark_group:{mark0:{0:"0"},mark01_255:{.1:"0.1",255:"255"},marks0_5:{0:"0",5:"5"},marks1_5:{1:"1",5:"5"}},radio_epsilon_4:"1",radio_epsilon_5:"1",radio_epsilon_6:"1",radio_epsilon_7:"1",loading:!1,form:{domain_4:[{value:0}],domain_5:[{value:0}],domain_6:[{value:0}],domain_7:[{value:0}],target:null,positive:"1",name:"",augmentation_method:null,epsilon:"",range_epsilon_7:[.1,.1],range_epsilon_4:[.1,.1],range_epsilon_5:[.1,.1],range_epsilon_6:[.1,.1],ite_limit:null,num_iters:[1,1],gamma:[1,1],whether_to_rotate:!1,generate_per_file_and_params:1,generate_per_file:1,boundary_constraint:null,strict_mode:!1,master:this.$store.state.userId,urgency_level:0,file:{},epsilon_7:null,epsilon_4:null,epsilon_5:null,epsilon_6:null},marks:{1:"1",50:"50"},range_epsilon_6_marks:{.1:"0.1",10:"10"},ite_limit_bili_marks:{1:"1%",100:"100%"},methods:[{value:"0",label:"黑盒对抗",children:[{value:"7",label:"SIMBA"}]},{value:"1",label:"白盒对抗",children:[{value:"4",label:"FGSM"},{value:"5",label:"I-FGSM(BIM)"},{value:"6",label:"JSMA"}]}],directional:[{value:"0",label:"定向",children:[{value:"0",label:"2S1"},{value:"1",label:"BMP2"},{value:"2",label:"BRDM_2"},{value:"3",label:"BTR60"},{value:"4",label:"BTR70"},{value:"5",label:"D7"},{value:"6",label:"T62"},{value:"7",label:"T72"},{value:"8",label:"ZIL131"},{value:"9",label:"ZSU_23_4"}]},{value:"10",label:"非定向",children:[{value:"10",label:"随机"}]}],fileList:[],typeList:[],params_id:[null,null],directional_id:["10","10"],is_available_to_submit:!0,rules1:{epsilon:[{required:!0,message:"不能为空",trigger:"blur"},{validator:a,trigger:"blur"}],generate_per_file_and_params:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:t,trigger:"blur"},{validator:r,trigger:"blur"}],urgency_level:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:e,trigger:"blur"}]},rules2:{range_epsilon_5:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:i,trigger:"blur"}],ite_limit:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:r,trigger:"blur"}],generate_per_file:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:t,trigger:"blur"},{validator:r,trigger:"blur"}]},rules3:{range_epsilon_6:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:i,trigger:"blur"}],ite_limit:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:r,trigger:"blur"}],generate_per_file:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:t,trigger:"blur"},{validator:r,trigger:"blur"}],boundary_constraint:[{required:!0,message:"请输入数字",trigger:"blur"},{validator:i,trigger:"blur"}]}}},computed:{rulesList:function(){return 1===this.params_id?this.rules1:2===this.params_id?this.rules2:this.rules3}},methods:{resetForm:function(e,t){console.log("formName:",e),4==t?this.form.domain_4=[{value:0}]:5==t?this.form.domain_5=[{value:0}]:6==t?this.form.domain_6=[{value:0}]:7==t&&(this.form.domain_7=[{value:0}])},removeDomain:function(e,t){if(4==t)if(1==this.form.domain_4.length)this.$message.error("扰动幅度不可为空!");else{var r=this.form.domain_4.indexOf(e);-1!==r&&this.form.domain_4.splice(r,1)}else if(5==t)if(1==this.form.domain_5.length)this.$message.error("单步扰动幅度不可为空!");else{r=this.form.domain_5.indexOf(e);-1!==r&&this.form.domain_5.splice(r,1)}else if(6==t)if(1==this.form.domain_6.length)this.$message.error("单步扰动幅度不可为空!");else{r=this.form.domain_6.indexOf(e);-1!==r&&this.form.domain_6.splice(r,1)}else if(7==t)if(1==this.form.domain_7.length)this.$message.error("单步扰动幅度不可为空!");else{r=this.form.domain_7.indexOf(e);-1!==r&&this.form.domain_7.splice(r,1)}},addDomain:function(e){4==e?this.form.domain_4.push({value:0,key:Date.now()}):5==e?this.form.domain_5.push({value:0,key:Date.now()}):6==e?this.form.domain_6.push({value:0,key:Date.now()}):7==e&&this.form.domain_7.push({value:0,key:Date.now()})},handleChange:function(){console.log("this.params_id:",this.params_id)},trim:function(e){return e.replace(/(^s*)|(s*$)/g,"")},onSubmit:function(){var e=this;this.loading=!0,this.form.master=this.$store.state.userId,this.$refs.formRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var i,a,o,n,m,f,c,_,p,d,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("this.form.augmentation_method[1]:",e.form.augmentation_method[1]),""!==e.form.augmentation_method[1]){t.next=5;break}return e.loading=!1,t.abrupt("return",e.$message.error("请选择生成方法!"));case 5:if(i=new FormData,e.form.name&&i.append("name",e.form.name),i.append("augmentation_method",e.form.augmentation_method[1]),i.append("master",e.form.master),i.append("urgency_level",e.form.urgency_level+""),a={},4==e.form.augmentation_method[1])if(a={strict_mode:e.form.strict_mode},a.strict_mode=e.form.strict_mode?"1":"0","1"==e.radio_epsilon_4){for(n in o=[],e.form.domain_4)console.log('this.form.domain_4[x]["value"]:',e.form.domain_4[n]["value"]),o.push(e.form.domain_4[n]["value"]);a.epsilon="["+o.toString()+"]",console.log("temp_params.epsilon:",a.epsilon)}else"2"==e.radio_epsilon_4&&(a.epsilon_upper_limit=e.form.range_epsilon_4[1]+"",a.epsilon_lower_limit=e.form.range_epsilon_4[0]+"",a.generate_per_file=e.form.generate_per_file+"");else if(5==e.form.augmentation_method[1])if(a={ite_limit:e.form.ite_limit+"",strict_mode:e.form.strict_mode},a.strict_mode=e.form.strict_mode?"1":"0","1"==e.radio_epsilon_5){for(n in o=[],e.form.domain_5)console.log('this.form.domain_5[x]["value"]:',e.form.domain_5[n]["value"]),o.push(e.form.domain_5[n]["value"]);a.epsilon="["+o.toString()+"]",console.log("temp:",o),console.log("temp_params.epsilon:",a.epsilon)}else"2"==e.radio_epsilon_5&&(a.epsilon_upper_limit=e.form.range_epsilon_5[1]+"",a.epsilon_lower_limit=e.form.range_epsilon_5[0]+"",a.generate_per_file=e.form.generate_per_file+"");else if(6==e.form.augmentation_method[1]){if(a={gamma:e.form.gamma/100,positive:e.form.positive,strict_mode:e.form.strict_mode},a.strict_mode=e.form.strict_mode?"1":"0","1"==e.radio_epsilon_6){for(n in o=[],e.form.domain_6)console.log('this.form.domain_6[x]["value"]:',e.form.domain_6[n]["value"]),o.push(e.form.domain_6[n]["value"]);a.epsilon="["+o.toString()+"]",console.log("temp:",o),console.log("temp_params.epsilon:",a.epsilon)}else"2"==e.radio_epsilon_6&&(a.epsilon_upper_limit=e.form.range_epsilon_6[1]+"",a.epsilon_lower_limit=e.form.range_epsilon_6[0]+"",a.generate_per_file=e.form.generate_per_file+"");10!=e.directional_id[1]&&(a.target=e.directional_id[1])}else if(7==e.form.augmentation_method[1])if(a={num_iters:e.form.num_iters+"",strict_mode:e.form.strict_mode},a.strict_mode=e.form.strict_mode?"1":"0","1"==e.radio_epsilon_7){for(n in o=[],e.form.domain_7)console.log('this.form.domain_7[x]["value"]:',e.form.domain_7[n]["value"]),o.push(e.form.domain_7[n]["value"]);a.epsilon="["+o.toString()+"]",console.log("temp:",o),console.log("temp_params.epsilon:",a.epsilon)}else"2"==e.radio_epsilon_7&&(a.epsilon_upper_limit=e.form.range_epsilon_7[1]+"",a.epsilon_lower_limit=e.form.range_epsilon_7[0]+"",a.generate_per_file=e.form.generate_per_file+"");if(a=JSON.stringify(a),i.append("params",a),e.form.file=document.getElementById("filetemp").files[0],!e.form.file){t.next=19;break}i.append("file",e.form.file),t.next=21;break;case 19:return e.loading=!1,t.abrupt("return",e.$message.error("请上传文件！"));case 21:m=s(i.entries());try{for(m.s();!(f=m.n()).done;)c=Object(l["a"])(f.value,2),_=c[0],p=c[1],console.log(_,p)}catch(r){m.e(r)}finally{m.f()}return t.next=25,e.$http({url:"/task/",data:i,method:"post"});case 25:if(d=t.sent,u=d.data,console.log("data:",u),2e4===u.code){t.next=31;break}return e.loading=!1,t.abrupt("return",e.$message.error("添加生成任务失败！错误原因："+u.msg));case 31:e.$message.success("提交成功！"),e.reload(),t.next=36;break;case 35:e.loading=!1;case 36:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},methodChanged:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.params_id=t,this.form.augmentation_method=this.params_id,this.is_available_to_submit=!1;case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),fileLoad:function(){var e=this.$refs.image_a_file_ref.files[0],t=e.name,r=t.lastIndexOf("."),i=t.substring(r,t.length);console.log(i,i.toLowerCase()),console.log("lastName:",i),".jpg"!==i.toLowerCase()&&".jpeg"!==i.toLowerCase()&&".zip"!==i.toLowerCase()?(this.$message.error("文件必须为 .jpg/.jpeg/.zip 类型"),this.$refs.image_a_file_ref.value=""):this.form.file=e},clickLoad:function(){this.$refs.refFile.dispatchEvent(new MouseEvent("click"))},getTypeList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/augmentation_type/");case 2:if(t=e.sent,r=t.data,2e4===r.code){e.next=6;break}return e.abrupt("return",this.$message.error("获取任务列表失败！错误原因："+r.msg));case 6:this.typeList=r.data;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.commit("setUserId",sessionStorage.getItem("userId")),1;case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),created:function(){this.getTypeList()}},_=c,p=(r("918b"),r("2877")),d=Object(p["a"])(_,i,a,!1,null,"4ac38664",null);t["default"]=d.exports},"866b":function(e,t,r){},"918b":function(e,t,r){"use strict";r("866b")}}]);