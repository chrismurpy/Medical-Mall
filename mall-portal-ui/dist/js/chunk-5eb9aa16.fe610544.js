(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5eb9aa16"],{6533:function(e,t,r){},"7f7f":function(e,t,r){var n=r("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,c="name";c in a||r("9e1e")&&n(a,c,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},8735:function(e,t,r){"use strict";var n=r("6533"),a=r.n(n);a.a},ca02:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"info-form"},[r("Form",{ref:"formValidate",attrs:{model:e.formValidate,"label-width":80,rules:e.ruleValidate}},[r("FormItem",{attrs:{label:"手机号",prop:"phone"}},[r("i-input",{attrs:{clearable:"",size:"large",placeholder:"请输入手机号"},model:{value:e.formValidate.phone,callback:function(t){e.$set(e.formValidate,"phone",t)},expression:"formValidate.phone"}})],1),r("FormItem",{attrs:{label:"验证码",prop:"checkNum"}},[r("i-input",{attrs:{size:"large",placeholder:"请输入验证码"},model:{value:e.formValidate.checkNum,callback:function(t){e.$set(e.formValidate,"checkNum",t)},expression:"formValidate.checkNum"}},[r("Button",{attrs:{slot:"append"},on:{click:e.getcheckNum},slot:"append"},[e._v("获取验证码")])],1)],1),r("Button",{attrs:{type:"error",size:"large",long:""},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("验证手机号")])],1)],1)},a=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("bd86")),c=r("653a"),i=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={name:"CheckPhone",data:function(){return{formValidate:{phone:"",checkNum:""},ruleValidate:{phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{type:"string",pattern:/^1[3|4|5|7|8][0-9]{9}$/,message:"手机号格式出错",trigger:"blur"}],checkNum:[{required:!0,message:"必须填写验证码",trigger:"blur"},{type:"string",min:4,max:4,message:"验证码长度错误",trigger:"blur"}]}}},methods:s({},Object(i["d"])(["SET_SIGN_UP_SETP"]),{getcheckNum:function(){11===this.formValidate.phone.length?this.$Message.success({content:"验证码为: 1234",duration:6,closable:!0}):this.$Message.error({content:"请输入正确的手机号",duration:6,closable:!0})},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e?(t.$router.push({path:"/SignUp/inputInfo",query:{phone:t.formValidate.phone}}),t.SET_SIGN_UP_SETP(1)):t.$Message.error({content:"请填写正确的信息",duration:6,closable:!0})}))}}),store:c["a"]},p=u,f=(r("8735"),r("2877")),m=Object(f["a"])(p,n,a,!1,null,"a046564c",null);t["default"]=m.exports}}]);