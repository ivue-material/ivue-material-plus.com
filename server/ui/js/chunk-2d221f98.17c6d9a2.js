(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221f98"],{cd45:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e._self._c;return n("div",[n("h1",[e._v("StartUse 开始使用")]),n("h2",[e._v("引入 IVue Material")]),e._m(0),n("pre",[n("code",{ref:"main"},[e._v(e._s(e.code.main))])]),n("h2",[e._v("按需引入")]),e._m(1),n("pre",[n("code",{ref:"plugins"},[e._v(e._s(e.code.plugins))])]),n("p",[e._v("然后按需引入组件，减少项目体积：")]),n("pre",[n("code",{ref:"import"},[e._v(e._s(e.code.import))])]),n("h2",[e._v("引入样式")]),n("pre",[n("code",{ref:"styles"},[e._v(e._s(e.code.styles))])])])},r=[function(){var e=this,n=e._self._c;return n("p",[e._v(" 在 "),n("code",[e._v("webpack")]),e._v(" 入口页面 "),n("code",[e._v("main.js")]),e._v(" 中如下配置： ")])},function(){var e=this,n=e._self._c;return n("p",[e._v(" 需要加入插件 "),n("a",{attrs:{target:"_blank",href:"https://github.com/ant-design/babel-plugin-import"}},[e._v("babel-plugin-import")]),e._v(" 即可实现按需加载组件，减少文件体积。 安装并配置文件 "),n("code",[e._v(".babelrc")]),e._v("： ")])}],o=t("e2cb"),a=t.n(o);let s={main:"import Vue from 'vue';\nimport App from './App.vue';\nimport IvueMaterial from 'ivue-material';\n\nVue.use(IvueMaterial);\nVue.config.productionTip = false;\n\nnew Vue({\n  router,\n  render: h => h(App)\n}).$mount('#app');\n",plugins:'npm install babel-plugin-import \n\n\x3c!-- .babelrc --\x3e\n\n"plugins": [\n      [\n            "import",\n            {\n                  "libraryName": "ivue-material",\n                  "libraryDirectory": "src/components"\n            }\n      ]\n]\n',import:"import {IvueButton} from 'ivue-material';\n\nVue.component('IvueButton',IvueButton);\n",styles:"import 'ivue-material/dist/styles/ivue.css';"};var u=s,l={name:"start-use",data(){return{code:u}},mounted(){a.a.highlightBlock(this.$refs.main),a.a.highlightBlock(this.$refs.plugins),a.a.highlightBlock(this.$refs.import),a.a.highlightBlock(this.$refs.styles)}},p=l,c=t("8619"),v=Object(c["a"])(p,i,r,!1,null,null,null);n["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d221f98.17c6d9a2.js.map