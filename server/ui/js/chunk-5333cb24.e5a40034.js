(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5333cb24"],{"18f5":function(e,t,r){"use strict";r("2abf")},"2abf":function(e,t,r){},"97e5":function(e,t,r){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{ref:"docMarkdown",staticClass:"doc-markdown ivue-elevation-2"},[t("nav",{staticClass:"doc-markdown-header"},[t("div",{staticClass:"doc-markdown-header--content"},[t("ivue-button",{attrs:{icon:"",flat:""},on:{click:e.clickJsfiddle}},[t("svg",{attrs:{width:"25px",height:"25px",viewBox:"0 0 46 33"}},[t("g",{attrs:{"stroke-width":"3",fill:"none","fill-rule":"evenodd",stroke:"#000"}},[t("path",{attrs:{d:"M23.4888889,20.543316 C21.4404656,18.4187374 19.0750303,15.6666667 16.4832014,15.6666667 C13.8721947,15.6666667 11.7555556,17.6366138 11.7555556,20.0666667 C11.7555556,22.4967196 13.8721947,24.4666667 16.4832014,24.4666667 C18.8347252,24.4666667 19.9845474,23.0125628 20.6429148,22.312473",id:"Oval-1","stroke-linecap":"round"}}),t("path",{attrs:{d:"M22.5111111,19.5900174 C24.5595344,21.7145959 26.9249697,24.4666667 29.5167986,24.4666667 C32.1278053,24.4666667 34.2444444,22.4967196 34.2444444,20.0666667 C34.2444444,17.6366138 32.1278053,15.6666667 29.5167986,15.6666667 C27.1652748,15.6666667 26.0154526,17.1207706 25.3570852,17.8208603",id:"Oval-1-Copy","stroke-linecap":"round"}}),t("path",{attrs:{d:"M45,22.7331459 C45,19.1499462 42.7950446,16.079593 39.6628004,14.7835315 C39.6774469,14.5246474 39.7003932,14.2674038 39.7003932,14.0035978 C39.7003932,6.82243304 33.8412885,1 26.611593,1 C21.3985635,1 16.9102123,4.03409627 14.8051788,8.41527616 C13.7828502,7.62878013 12.503719,7.15547161 11.1134367,7.15547161 C7.77825654,7.15547161 5.07450503,9.84159999 5.07450503,13.1544315 C5.07450503,13.7760488 5.16938207,14.3779791 5.3477444,14.9418479 C2.74863428,16.4787471 1,19.2867709 1,22.5105187 C1,27.3287502 4.89630545,31.2367856 9.72803666,31.31094 L36.3341301,31.3109406 C41.1201312,31.3406346 45,27.4870665 45,22.7331459 L45,22.7331459 Z","stroke-linejoin":"round"}})])])]),t("ivue-button",{attrs:{icon:"",flat:""},on:{click:e.clickGithub}},[t("svg",{staticClass:"octicon octicon-mark-github",attrs:{width:"20px",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),t("ivue-button",{attrs:{icon:"",flat:""},on:{click:function(t){e.showCode=!e.showCode}}},[t("ivue-icon",[e._v("code")])],1)],1)]),t("transition",{attrs:{name:"code"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],staticClass:"doc-markdown-code"},[t("div",{staticClass:"doc-markdown-code--content"},[t("pre",[t("code",{ref:"code",staticClass:"hljs xml"},[e._v(e._s(e.code))])])])])]),t("div",{staticClass:"doc-markdown-content"},[e._t("demo")],2)],1)},n=[],o=r("e2cb"),i=r.n(o),a={props:{jsfiddle:String,github:String,code:String},data(){return{showCode:!1}},mounted(){i.a.highlightBlock(this.$refs.code)},methods:{clickJsfiddle(){window.open(this.jsfiddle)},clickGithub(){window.open(this.github)}}},c=a,v=(r("18f5"),r("8619")),d=Object(v["a"])(c,s,n,!1,null,"175dae70",null);t["a"]=d.exports},e65a:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Progress 进度条")]),e._m(0),t("h2",[e._v("直线进度条")]),e._m(1),t("DocMarkdown",{attrs:{code:e.code.linear,jsfiddle:"//jsfiddle.net/qq282126990/7xqoye2d/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/progress/Linear.vue"}},[t("Linear",{attrs:{slot:"demo"},slot:"demo"})],1),t("h2",[e._v("圆形进度条")]),e._m(2),t("DocMarkdown",{attrs:{code:e.code.circular,jsfiddle:"//jsfiddle.net/qq282126990/ow72mug6/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/progress/Circular.vue"}},[t("Circular",{attrs:{slot:"demo"},slot:"demo"})],1),t("h2",[e._v("旋转")]),e._m(3),t("DocMarkdown",{attrs:{code:e.code.indeterminate,jsfiddle:"//jsfiddle.net/qq282126990/ztrpho7e/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/progress/Indeterminate.vue"}},[t("Indeterminate",{attrs:{slot:"demo"},slot:"demo"})],1),t("h2",[e._v("自定义样式")]),e._m(4),t("DocMarkdown",{attrs:{code:e.code.customize,jsfiddle:"//jsfiddle.net/qq282126990/bvax6eh3/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/progress/Customize.vue"}},[t("Customize",{attrs:{slot:"demo"},slot:"demo"})],1),t("h2",[e._v("ivue-progress-linear")]),t("h3",[e._v("props")]),e._m(5),t("h2",[e._v("ivue-progress-circular")]),t("h3",[e._v("props")]),e._m(6)],1)},n=[function(){var e=this,t=e._self._c;return t("p",[e._v(" 展示操作或任务的当前进度，比如上传文件。使用 "),t("code",[e._v("ivue-progress-linear")]),e._v(" 或者 "),t("code",[e._v("ivue-progress-circular")]),e._v(" 可把进度条变成直线或者圆形。 ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" 基本用法，处在不同状态下的进度条，当 "),t("code",[e._v("percent")]),e._v(" 为 "),t("code",[e._v("100")]),e._v(" 时，自动将状态置为 "),t("code",[e._v("success")]),e._v("。 ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" 基本用法，使用 "),t("code",[e._v("ivue-progress-circular")]),e._v(" 组件可以把进度条变为圆形。 ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" 通过设置属性 "),t("code",[e._v("indeterminate")]),e._v(" 使圆形进度条永久旋转。 ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" 通过自定义 "),t("code",[e._v("slot")]),e._v(" 和属性 "),t("code",[e._v("height")]),e._v(" 改变进度条效果。 ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"table"},[t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("status")]),t("td",[e._v("状态，可选值为normal、active、wrong、success")]),t("td",[e._v("String")]),t("td",[e._v("normal")])]),t("tr",[t("td",[e._v("height")]),t("td",[e._v("进度条的高度，单位 px")]),t("td",[e._v("Number")]),t("td",[e._v("10")])]),t("tr",[t("td",[e._v("percent")]),t("td",[e._v("百分比")]),t("td",[e._v("Number")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("success-percent")]),t("td",[e._v("已完成的分段百分比")]),t("td",[e._v("Number")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("hide-text")]),t("td",[e._v("隐藏文字")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"table"},[t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("status")]),t("td",[e._v("状态，可选值为normal、active、wrong、success")]),t("td",[e._v("String")]),t("td",[e._v("normal")])]),t("tr",[t("td",[e._v("rotate")]),t("td",[e._v("旋转角度")]),t("td",[e._v("Number")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("圆圈大小，单位 px")]),t("td",[e._v("Number")]),t("td",[e._v("50")])]),t("tr",[t("td",[e._v("width")]),t("td",[e._v("圆圈的宽度")]),t("td",[e._v("Number")]),t("td",[e._v("4")])]),t("tr",[t("td",[e._v("percent")]),t("td",[e._v("百分比")]),t("td",[e._v("Number")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("hide-text")]),t("td",[e._v("隐藏文字")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("indeterminate")]),t("td",[e._v("一个不确定的进度圆环永远循环动画")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])])])])])}],o=r("97e5");let i={linear:'\n<template>\n      <div>\n            <IvueProgressLinear :percent="40" status="active"></IvueProgressLinear>\n            <IvueProgressLinear :percent="65" status="wrong"></IvueProgressLinear>\n            <IvueProgressLinear :percent="100"></IvueProgressLinear>\n            <IvueProgressLinear :percent="80" hideText></IvueProgressLinear>\n            <IvueProgressLinear :percent="100">\n                  <span>成功</span>\n            </IvueProgressLinear>\n      </div>\n</template>\n\n<script>\n      export default {\n      }\n<\/script>\n',circular:'\n<template>\n      <div>\n            <IvueProgressCircular :percent="20"></IvueProgressCircular>\n            <IvueProgressCircular :percent="60" status="wrong"></IvueProgressCircular>\n            <IvueProgressCircular :percent="80"></IvueProgressCircular>\n            <IvueProgressCircular :percent="100"></IvueProgressCircular>\n      </div>\n</template>\n\n<script>\n      export default {\n      }\n<\/script>\n',indeterminate:'\n<template>\n      <div>\n            <IvueProgressCircular :percent="20" indeterminate></IvueProgressCircular>\n      </div>\n</template>\n\n<script>\n      export default {\n      }\n<\/script>\n',customize:'\n<template>\n      <div>\n            <IvueProgressLinear :percent="50" height="5">\n                  <span>成功</span>\n            </IvueProgressLinear>\n\n            <IvueProgressLinear :percent="50" height="5">\n                  <span>成功</span>\n            </IvueProgressLinear>\n      </div>\n</template>\n\n<script>\n      export default {\n      }\n<\/script>\n'};var a=i,c=function(){var e=this,t=e._self._c;return t("div",[t("IvueProgressLinear",{attrs:{percent:40,status:"active"}}),t("IvueProgressLinear",{attrs:{percent:65,status:"wrong"}}),t("IvueProgressLinear",{attrs:{percent:100}}),t("IvueProgressLinear",{attrs:{percent:80,hideText:""}}),t("IvueProgressLinear",{attrs:{percent:100}},[t("span",[e._v("成功")])])],1)},v=[],d={},u=d,l=r("8619"),_=Object(l["a"])(u,c,v,!1,null,null,null),p=_.exports,h=function(){var e=this,t=e._self._c;return t("div",[t("IvueProgressCircular",{attrs:{percent:20}}),t("IvueProgressCircular",{attrs:{percent:60,status:"wrong"}}),t("IvueProgressCircular",{attrs:{percent:80}}),t("IvueProgressCircular",{attrs:{percent:100}})],1)},g=[],m={},f=m,C=Object(l["a"])(f,h,g,!1,null,null,null),b=C.exports,w=function(){var e=this,t=e._self._c;return t("div",[t("IvueProgressCircular",{attrs:{percent:20,indeterminate:""}})],1)},I=[],P={},k=P,x=Object(l["a"])(k,w,I,!1,null,null,null),L=x.exports,j=function(){var e=this,t=e._self._c;return t("div",[t("IvueProgressLinear",{attrs:{percent:50,height:5}},[t("span",[e._v("成功")])]),t("IvueProgressCircular",{attrs:{percent:50,height:5}},[t("span",[e._v("成功")])])],1)},q=[],M={},z=M,N=Object(l["a"])(z,j,q,!1,null,null,null),O=N.exports,B={name:"ivue-progress",data(){return{code:a}},components:{DocMarkdown:o["a"],Linear:p,Circular:b,Indeterminate:L,Customize:O}},D=B,S=Object(l["a"])(D,s,n,!1,null,null,null);t["default"]=S.exports}}]);
//# sourceMappingURL=chunk-5333cb24.e5a40034.js.map