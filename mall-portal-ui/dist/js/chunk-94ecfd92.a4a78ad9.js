(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94ecfd92"],{5924:function(t,e,a){"use strict";var s=a("5cc2"),r=a.n(s);r.a},"5cc2":function(t,e,a){},"7f7f":function(t,e,a){var s=a("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in r||a("9e1e")&&s(r,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"86f0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.address,(function(e,s){return a("div",{key:s,staticClass:"address-box"},[a("div",{staticClass:"address-header"},[a("span",[t._v(t._s(e.name))]),a("div",{staticClass:"address-action"},[a("span",{on:{click:function(e){return t.edit(s)}}},[a("Icon",{attrs:{type:"edit"}}),t._v(" 修改")],1),a("span",{on:{click:function(e){return t.del(s)}}},[a("Icon",{attrs:{type:"trash-a"}}),t._v(" 删除")],1)])]),a("div",{staticClass:"address-content"},[a("p",[a("span",{staticClass:"address-content-title"},[t._v(" 收 货 人 :")]),t._v(" "+t._s(e.name))]),a("p",[a("span",{staticClass:"address-content-title"},[t._v("收货地区:")]),t._v(" "+t._s(e.province)+" "+t._s(e.city)+" "+t._s(e.area))]),a("p",[a("span",{staticClass:"address-content-title"},[t._v("收货地址:")]),t._v(" "+t._s(e.address))]),a("p",[a("span",{staticClass:"address-content-title"},[t._v("邮政编码:")]),t._v(" "+t._s(e.postalcode))])])])})),a("Modal",{attrs:{width:"530"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("p",{attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"edit"}}),a("span",[t._v("修改地址")])],1),a("div",[a("Form",{attrs:{model:t.formData,"label-position":"left","label-width":100,rules:t.ruleInline}},[a("FormItem",{attrs:{label:"收件人",prop:"name"}},[a("i-input",{attrs:{size:"large"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("FormItem",{attrs:{label:"收件地区",prop:"address"}},[a("Distpicker",{attrs:{province:t.formData.province,city:t.formData.city,area:t.formData.area},on:{province:t.getProvince,city:t.getCity,area:t.getArea}})],1),a("FormItem",{attrs:{label:"收件地址",prop:"address"}},[a("i-input",{attrs:{size:"large"},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1),a("FormItem",{attrs:{label:"手机号码",prop:"phone"}},[a("i-input",{attrs:{size:"large"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1),a("FormItem",{attrs:{label:"邮政编码",prop:"postalcode"}},[a("i-input",{attrs:{size:"large"},model:{value:t.formData.postalcode,callback:function(e){t.$set(t.formData,"postalcode",e)},expression:"formData.postalcode"}})],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:t.editAction}},[t._v("修改")])],1)])],2)},r=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),n=a("653a"),i=a("2f62"),c=a("784f"),d=a.n(c);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"MyAddress",data:function(){return{modal:!1,formData:{name:"",address:"",phone:"",postalcode:"",province:"广东省",city:"广州市",area:"天河区"},ruleInline:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],postalcode:[{required:!0,message:"请输入邮政编码",trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{type:"string",pattern:/^1[3|4|5|7|8][0-9]{9}$/,message:"手机号格式出错",trigger:"blur"}]}}},created:function(){this.loadAddress()},computed:p({},Object(i["e"])(["address"])),methods:p({},Object(i["b"])(["loadAddress"]),{edit:function(t){this.modal=!0,this.formData.province=this.address[t].province,this.formData.city=this.address[t].city,this.formData.area=this.address[t].area,this.formData.address=this.address[t].address,this.formData.name=this.address[t].name,this.formData.phone=this.address[t].phone,this.formData.postalcode=this.address[t].postalcode},editAction:function(){this.modal=!1,this.$Message.success("修改成功")},del:function(t){var e=this;this.$Modal.confirm({title:"信息提醒",content:"你确定删除这个收货地址",onOk:function(){e.$Message.success("删除成功")},onCancel:function(){e.$Message.info("取消删除")}})}}),components:{Distpicker:d.a},store:n["a"]},m=f,u=(a("5924"),a("2877")),h=Object(u["a"])(m,s,r,!1,null,"1fdc39c0",null);e["default"]=h.exports}}]);