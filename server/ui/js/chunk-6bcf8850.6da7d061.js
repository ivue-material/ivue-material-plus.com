(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bcf8850"],{"02d0":function(t,e,n){},"18f5":function(t,e,n){"use strict";n("2abf")},"29ff":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Content 内容")]),e("p",[t._v("内容组件通常用于类似一张纸。")]),e("h2",[t._v("基本用法")]),e("p",[t._v("基本用法，最普通的显示。")]),e("DocMarkdown",{attrs:{code:t.code.base,jsfiddle:"//jsfiddle.net/qq282126990/dkwLf2m0/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/content/Default.vue"}},[e("Default",{attrs:{slot:"demo"},slot:"demo"})],1),e("h2",[t._v("标签")]),t._m(0),e("DocMarkdown",{attrs:{code:t.code.tag,jsfiddle:"//jsfiddle.net/qq282126990/uy0eorLb/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/content/Tag.vue"}},[e("Tag",{attrs:{slot:"demo"},slot:"demo"})],1),e("h2",[t._v("API")]),e("h3",[t._v("props")]),t._m(1)],1)},i=[function(){var t=this,e=t._self._c;return e("p",[t._v(" 通过设置属性 "),e("code",[t._v("ivue-tag")]),t._v("，让组件输出其他标签，如：a标签 ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table"},[e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认")])])]),e("tbody",[e("tr",[e("td",[t._v("ivue-tag")]),e("td",[t._v("输出标签。例如，当你想创建一个部分而不是div时很有用")]),e("td",[t._v("String")]),e("td",[t._v("div")])])])])])}],a=n("97e5");let s={base:"\n<template>\n      <IvueContent>默认渲染为div</IvueContent>\n</template>\n\n<script>\n      export default {\n      }\n<\/script>\n",tag:'\n<template>\n      <IvueContent ivueTag="a">标签输出为a</IvueContent>\n</template>\n\n<script>\n      export default {\n      }\n<\/script>\n'};var c=s,d=function(){var t=this,e=t._self._c;return e("div",[e("IvueContent",[t._v("默认渲染为div")])],1)},r=[],l={},u=l,v=(n("94fe"),n("8619")),f=Object(v["a"])(u,d,r,!1,null,"316eeae9",null),h=f.exports,p=function(){var t=this,e=t._self._c;return e("div",[e("IvueContent",{attrs:{ivueTag:"a"}},[t._v("标签输出为a")])],1)},C=[],_={},w=_,m=(n("c380"),Object(v["a"])(w,p,C,!1,null,"1bc8820a",null)),b=m.exports,k={name:"ivue-content",data(){return{code:c}},components:{DocMarkdown:a["a"],Default:h,Tag:b}},g=k,x=Object(v["a"])(g,o,i,!1,null,null,null);e["default"]=x.exports},"2abf":function(t,e,n){},"94fe":function(t,e,n){"use strict";n("dfce")},"97e5":function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",{ref:"docMarkdown",staticClass:"doc-markdown ivue-elevation-2"},[e("nav",{staticClass:"doc-markdown-header"},[e("div",{staticClass:"doc-markdown-header--content"},[e("ivue-button",{attrs:{icon:"",flat:""},on:{click:t.clickJsfiddle}},[e("svg",{attrs:{width:"25px",height:"25px",viewBox:"0 0 46 33"}},[e("g",{attrs:{"stroke-width":"3",fill:"none","fill-rule":"evenodd",stroke:"#000"}},[e("path",{attrs:{d:"M23.4888889,20.543316 C21.4404656,18.4187374 19.0750303,15.6666667 16.4832014,15.6666667 C13.8721947,15.6666667 11.7555556,17.6366138 11.7555556,20.0666667 C11.7555556,22.4967196 13.8721947,24.4666667 16.4832014,24.4666667 C18.8347252,24.4666667 19.9845474,23.0125628 20.6429148,22.312473",id:"Oval-1","stroke-linecap":"round"}}),e("path",{attrs:{d:"M22.5111111,19.5900174 C24.5595344,21.7145959 26.9249697,24.4666667 29.5167986,24.4666667 C32.1278053,24.4666667 34.2444444,22.4967196 34.2444444,20.0666667 C34.2444444,17.6366138 32.1278053,15.6666667 29.5167986,15.6666667 C27.1652748,15.6666667 26.0154526,17.1207706 25.3570852,17.8208603",id:"Oval-1-Copy","stroke-linecap":"round"}}),e("path",{attrs:{d:"M45,22.7331459 C45,19.1499462 42.7950446,16.079593 39.6628004,14.7835315 C39.6774469,14.5246474 39.7003932,14.2674038 39.7003932,14.0035978 C39.7003932,6.82243304 33.8412885,1 26.611593,1 C21.3985635,1 16.9102123,4.03409627 14.8051788,8.41527616 C13.7828502,7.62878013 12.503719,7.15547161 11.1134367,7.15547161 C7.77825654,7.15547161 5.07450503,9.84159999 5.07450503,13.1544315 C5.07450503,13.7760488 5.16938207,14.3779791 5.3477444,14.9418479 C2.74863428,16.4787471 1,19.2867709 1,22.5105187 C1,27.3287502 4.89630545,31.2367856 9.72803666,31.31094 L36.3341301,31.3109406 C41.1201312,31.3406346 45,27.4870665 45,22.7331459 L45,22.7331459 Z","stroke-linejoin":"round"}})])])]),e("ivue-button",{attrs:{icon:"",flat:""},on:{click:t.clickGithub}},[e("svg",{staticClass:"octicon octicon-mark-github",attrs:{width:"20px",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),e("ivue-button",{attrs:{icon:"",flat:""},on:{click:function(e){t.showCode=!t.showCode}}},[e("ivue-icon",[t._v("code")])],1)],1)]),e("transition",{attrs:{name:"code"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"doc-markdown-code"},[e("div",{staticClass:"doc-markdown-code--content"},[e("pre",[e("code",{ref:"code",staticClass:"hljs xml"},[t._v(t._s(t.code))])])])])]),e("div",{staticClass:"doc-markdown-content"},[t._t("demo")],2)],1)},i=[],a=n("e2cb"),s=n.n(a),c={props:{jsfiddle:String,github:String,code:String},data(){return{showCode:!1}},mounted(){s.a.highlightBlock(this.$refs.code)},methods:{clickJsfiddle(){window.open(this.jsfiddle)},clickGithub(){window.open(this.github)}}},d=c,r=(n("18f5"),n("8619")),l=Object(r["a"])(d,o,i,!1,null,"175dae70",null);e["a"]=l.exports},c380:function(t,e,n){"use strict";n("02d0")},dfce:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6bcf8850.6da7d061.js.map