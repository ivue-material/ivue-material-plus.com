(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54dd40c2"],{"0494":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Select 选择器")]),t("p",[e._v("使用模拟的增强下拉选择器来代替浏览器原生的选择器。")]),e._m(0),t("h2",[e._v("基本用法")]),e._m(1),t("DocMarkdown",{attrs:{code:e.code.base,jsfiddle:"//jsfiddle.net/qq282126990/g4z3a2hv/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/select/Default.vue"}},[t("Default",{attrs:{slot:"demo"},slot:"demo"})],1),t("h2",[e._v("多选")]),e._m(2),t("DocMarkdown",{attrs:{code:e.code.mltiple,jsfiddle:"//jsfiddle.net/qq282126990/86ho4k03/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/select/Mltiple.vue"}},[t("Mltiple",{attrs:{slot:"demo"},slot:"demo"})],1),t("h2",[e._v("可搜索")]),e._m(3),t("DocMarkdown",{attrs:{code:e.code.filterable,jsfiddle:"//jsfiddle.net/qq282126990/dgay715v/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/select/Filterable.vue"}},[t("Filterable",{attrs:{slot:"demo"},slot:"demo"})],1),t("h2",[e._v("禁用")]),e._m(4),e._m(5),t("DocMarkdown",{attrs:{code:e.code.disabled,jsfiddle:"//jsfiddle.net/qq282126990/94ufpn6a/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/select/Disabled.vue"}},[t("Disabled",{attrs:{slot:"demo"},slot:"demo"})],1),t("h2",[e._v("分组")]),e._m(6),t("DocMarkdown",{attrs:{code:e.code.group,jsfiddle:"//jsfiddle.net/qq282126990/cf1r93wh/",github:"//github.com/qq282126990/ivue.com/blob/master/src/views/components/select/Group.vue"}},[t("Group",{attrs:{slot:"demo"},slot:"demo"})],1),t("h2",[e._v("API")]),t("h3",[e._v("props")]),e._m(7),t("h3",[e._v("event")]),e._m(8),t("h2",[e._v("ivue-option")]),t("h3",[e._v("props")]),e._m(9),t("h3",[e._v("event")]),e._m(10),t("h2",[e._v("ivue-option-group")]),t("h3",[e._v("props")]),e._m(11)],1)},n=[function(){var e=this,t=e._self._c;return t("p",[e._v(" 选择器支持单选、多选、搜索，以及键盘快捷操作。 "),t("code",[e._v("ivue-select")]),e._v("选择器应该与 "),t("code",[e._v("ivue-option")]),e._v("或者 "),t("code",[e._v("ivue-option-group")]),e._v("组件一起使用。\b选择将始终对 "),t("code",[e._v("v-model")]),e._v("的变化做出反应。 ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" 使用 "),t("code",[e._v("v-model")]),e._v("双向绑定数据，单选, value 只支持字符串或数字类型，多选，只支持数组类型，组件根据 "),t("code",[e._v("ivue-option")]),e._v("的 "),t("code",[e._v("value")]),e._v("返回数据。在展开选择器后，可以使用键盘的 "),t("code",[e._v("up")]),e._v("和 "),t("code",[e._v("down")]),e._v("快速上下选择，按下 "),t("code",[e._v("enter")]),e._v("选择选项，按下 "),t("code",[e._v("esc")]),e._v("收起选择器。 ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" 通过设置属性 "),t("code",[e._v("multiple")]),e._v("可以开启多选模式。多选模式下， "),t("code",[e._v("model")]),e._v("接受数组类型的数据，所返回的也是数组。 ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" 通过设置 "),t("code",[e._v("filterable")]),e._v("可以开启搜索框，单选和多选都支持搜索模式。 ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" 通过给 "),t("code",[e._v("ivue-select")]),e._v("设置属性 "),t("code",[e._v("disabled")]),e._v("禁用整个选项器。 ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" 通过给 "),t("code",[e._v("ivue-option")]),e._v("设置属性 "),t("code",[e._v("disabled")]),e._v("可以禁用某个选项。 ")])},function(){var e=this,t=e._self._c;return t("p",[e._v(" 使用 "),t("code",[e._v("ivue-option-group")]),e._v("可将选项进行分组。 ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"table"},[t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v(" 指定选中\b选项的 "),t("code",[e._v("value")]),e._v("值，可以使用 "),t("code",[e._v("v-modul")]),e._v("双向绑定数据。单项选择只接受 "),t("code",[e._v("String")]),e._v("和 "),t("code",[e._v("Number")]),e._v(",\b多选时只接受 "),t("code",[e._v("Array")])]),t("td",[e._v("String | Number | Array")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("输入提示")]),t("td",[e._v("String")]),t("td",[e._v("请选择")])]),t("tr",[t("td",[e._v("multiple")]),t("td",[e._v("是否开启多选")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("label-and-value")]),t("td",[e._v("在返回选项时，是否将label和value一起返回，默认只返回 value")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用该组件")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("clearable")]),t("td",[e._v("是否可以清空选项，只在单选时有效")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("not-find-text")]),t("td",[e._v("选项列表没有找到数据时的提示")]),t("td",[e._v("String")]),t("td",[e._v("无匹配数据")])]),t("tr",[t("td",[e._v("filterable")]),t("td",[e._v("是否开启搜索")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("arrow-down-icon")]),t("td",[e._v(" 下拉选项图标,通常与图标库 "),t("a",{attrs:{target:"_blank",href:"https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline"}},[e._v("material.io")]),e._v("一起使用 ")]),t("td",[e._v("String")]),t("td",[e._v("keyboard_arrow_down")])]),t("tr",[t("td",[e._v("reset-select-icon")]),t("td",[e._v(" 重置选择选项图标,通常与图标库 "),t("a",{attrs:{target:"_blank",href:"https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline"}},[e._v("material.io")]),e._v("一起使用 ")]),t("td",[e._v("String")]),t("td",[e._v("cancel")])]),t("tr",[t("td",[e._v("multiple-close-icon")]),t("td",[e._v(" 多项选择选项关闭图标,通常与图标库 "),t("a",{attrs:{target:"_blank",href:"https://material.io/tools/icons/?icon=keyboard_arrow_left&style=baseline"}},[e._v("material.io")]),e._v("一起使用 ")]),t("td",[e._v("String")]),t("td",[e._v("close")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"table"},[t("table",[t("thead",[t("tr",[t("th",[e._v("名称")]),t("th",[e._v("说明")]),t("th",[e._v("返回值")])])]),t("tbody",[t("tr",[t("td",[e._v("on-change")]),t("td",[e._v("当前选择的选项")]),t("td",[e._v(" 返回值为 "),t("code",[e._v("value")])])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"table"},[t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("disabled-ripple")]),t("td",[e._v("启用/禁用涟漪")]),t("td",[e._v("Booelan")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("value")]),t("td",[e._v("选项值，默认根据此属性值进行筛选，必填")]),t("td",[e._v("String | Number")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("\b选择\b显示的内容，默认会读取 slot,无 slot 时，优先读取该 label 的值,无 label 时，读取 value。")]),t("td",[e._v("String | Number")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用当前选项")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"table"},[t("table",[t("thead",[t("tr",[t("th",[e._v("名称")]),t("th",[e._v("说明")]),t("th",[e._v("返回值")])])]),t("tbody",[t("tr",[t("td",[e._v("on-select-option")]),t("td",[e._v("点击当前的选项")]),t("td",[e._v(" 返回值为 "),t("code",[e._v("value")]),e._v("、 "),t("code",[e._v("label")]),e._v("、 "),t("code",[e._v("keys")])])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"table"},[t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("label")]),t("td",[e._v("分组的组名")]),t("td",[e._v("String")]),t("td",[e._v("-")])])])])])}],v=l("97e5");let o={base:"\n<template>\n      <IvueSelect :value=\"value\">\n            <IvueOption v-for=\"item in data\" :value=\"item.value\" :key=\"item.value\">\n                  <span>{{ item.label }}</span>\n            </IvueOption>\n      </IvueSelect>\n</template>\n\n<script>\n      export default {\n            data () {\n                  return {\n                        value: '',\n                        data: [{\n                              value: 'Foo',\n                              label: 'Foo'\n                        },\n                        {\n                              value: 'Bar',\n                              label: 'Bar'\n                        },\n                        {\n                              value: 'Fizz',\n                              label: 'Fizz'\n                        },\n                        {\n                              value: 'Buzz',\n                              label: 'Buzz'\n                        }\n                        ]\n                  }\n            }\n      }\n<\/script>\n",mltiple:"\n<template>\n      <div>\n            {{value}}\n            <IvueSelect v-model=\"value\" multiple>\n                  <IvueOption v-for=\"item in data\" :value=\"item.value\" :key=\"item.value\">\n                        <span>{{ item.label }}</span>\n                  </IvueOption>\n            </IvueSelect>\n      </div>\n</template>\n\n<script>\n      export default {\n            data () {\n                  return {\n                        value: [],\n                        data: [{\n                              value: 'Foo',\n                              label: 'Foo'\n                        },\n                        {\n                              value: 'Bar',\n                              label: 'Bar'\n                        },\n                        {\n                              value: 'Fizz',\n                              label: 'Fizz'\n                        },\n                        {\n                              value: 'Buzz',\n                              label: 'Buzz'\n                        }\n                        ]\n                  }\n            }\n      }\n<\/script>\n",filterable:"\n<template>\n      <div>\n            <p>单项选择</p>\n            <IvueSelect :value=\"value1\" filterable>\n                  <IvueOption v-for=\"item in data\" :value=\"item.value\" :key=\"item.value\">\n                        <span>{{ item.label }}</span>\n                  </IvueOption>\n            </IvueSelect>\n            <p>多项选择</p>\n            <IvueSelect :value=\"value2\" filterable multiple>\n                  <IvueOption v-for=\"item in data\" :value=\"item.value\" :key=\"item.value\">\n                        <span>{{ item.label }}</span>\n                  </IvueOption>\n            </IvueSelect>\n      </div>\n</template>\n\n<script>\n      export default {\n            data () {\n                  return {\n                        value1: '',\n                        value2: [],\n                        data: [{\n                              value: 'Foo',\n                              label: 'Foo'\n                        },\n                        {\n                              value: 'Bar',\n                              label: 'Bar'\n                        },\n                        {\n                              value: 'Fizz',\n                              label: 'Fizz'\n                        },\n                        {\n                              value: 'Buzz',\n                              label: 'Buzz'\n                        }\n                        ]\n                  }\n            }\n      }\n<\/script>\n",disabled:"\n<template>\n      <div>\n            <p>禁用整个选项器</p>\n            <IvueSelect :value=\"value1\" disabled>\n                  <IvueOption v-for=\"item in data\" :value=\"item.value\" :key=\"item.value\">\n                        <span>{{ item.label }}</span>\n                  </IvueOption>\n            </IvueSelect>\n            <p>禁用某个选项</p>\n            <IvueSelect :value=\"value1\">\n                  <IvueOption\n                        v-for=\"(item,index) in data\"\n                        :value=\"item.value\"\n                        :key=\"item.value\"\n                        :disabled=\"index===0\"\n                  >\n                        <span>{{ item.label }}</span>\n                  </IvueOption>\n            </IvueSelect>\n      </div>\n</template>\n\n<script>\n      export default {\n            data () {\n                  return {\n                        value1: '',\n                        data: [{\n                              value: 'Foo',\n                              label: 'Foo'\n                        },\n                        {\n                              value: 'Bar',\n                              label: 'Bar'\n                        },\n                        {\n                              value: 'Fizz',\n                              label: 'Fizz'\n                        },\n                        {\n                              value: 'Buzz',\n                              label: 'Buzz'\n                        }\n                        ]\n                  }\n            }\n      }\n<\/script>\n",group:"\n<template>\n      <div>\n            <IvueSelect filterable>\n                  <IvueOptionGroup :label=\"'one'\">\n                        <IvueOption\n                              v-for=\"(item,index) in grop1\"\n                              :value=\"item.value\"\n                              :label=\"item.label\"\n                              :key=\"index\"\n                        >\n                              <span>{{ item.label }}</span>\n                        </IvueOption>\n                  </IvueOptionGroup>\n                  <IvueOptionGroup :label=\"'two'\">\n                        <IvueOption\n                              v-for=\"(item,index) in grop2\"\n                              :value=\"item.value\"\n                              :label=\"item.label\"\n                              :key=\"index\"\n                        >\n                              <span>{{ item.label }}</span>\n                        </IvueOption>\n                  </IvueOptionGroup>\n            </IvueSelect>\n      </div>\n</template>\n\n<script>\n      export default {\n            data () {\n                  return {\n                        value1: [],\n                        grop1: [{\n                              value: 'New York',\n                              label: 'New York'\n                        },\n                        {\n                              value: 'London',\n                              label: 'London'\n                        },\n                        {\n                              value: 'Sydney',\n                              label: 'Sydney'\n                        }\n                        ],\n                        grop2: [{\n                              value: 'Ottawa',\n                              label: 'Ottawa'\n                        },\n                        {\n                              value: 'Paris',\n                              label: 'Paris'\n                        },\n                        {\n                              value: 'Canberra',\n                              label: 'Canberra'\n                        }\n                        ]\n                  }\n            }\n      }\n<\/script>\n"};var u=o,i=function(){var e=this,t=e._self._c;return t("IvueSelect",{attrs:{value:e.value}},e._l(e.data,(function(l){return t("IvueOption",{key:l.value,attrs:{value:l.value}},[t("span",[e._v(e._s(l.label))])])})),1)},r=[],d={data(){return{value:"",data:[{value:"Foo",label:"Foo"},{value:"Bar",label:"Bar"},{value:"Fizz",label:"Fizz"},{value:"Buzz",label:"Buzz"}]}}},s=d,_=l("8619"),c=Object(_["a"])(s,i,r,!1,null,null,null),p=c.exports,b=function(){var e=this,t=e._self._c;return t("div",[e._v(" "+e._s(e.value)+" "),t("IvueSelect",{attrs:{multiple:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.data,(function(l){return t("IvueOption",{key:l.value,attrs:{value:l.value}},[t("span",[e._v(e._s(l.label))])])})),1)],1)},m=[],f={data(){return{value:[],data:[{value:"Foo",label:"Foo"},{value:"Bar",label:"Bar"},{value:"Fizz",label:"Fizz"},{value:"Buzz",label:"Buzz"}]}}},h=f,z=Object(_["a"])(h,b,m,!1,null,null,null),k=z.exports,w=function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v("单项选择")]),t("IvueSelect",{attrs:{value:e.value1,filterable:""}},e._l(e.data,(function(l){return t("IvueOption",{key:l.value,attrs:{value:l.value}},[t("span",[e._v(e._s(l.label))])])})),1),t("p",[e._v("多项选择")]),t("IvueSelect",{attrs:{value:e.value2,filterable:"",multiple:""}},e._l(e.data,(function(l){return t("IvueOption",{key:l.value,attrs:{value:l.value}},[t("span",[e._v(e._s(l.label))])])})),1)],1)},I=[],g={data(){return{value1:"",value2:[],data:[{value:"Foo",label:"Foo"},{value:"Bar",label:"Bar"},{value:"Fizz",label:"Fizz"},{value:"Buzz",label:"Buzz"}]}}},O=g,B=Object(_["a"])(O,w,I,!1,null,null,null),C=B.exports,y=function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v("禁用整个选项器")]),t("IvueSelect",{attrs:{value:e.value1,disabled:""}},e._l(e.data,(function(l){return t("IvueOption",{key:l.value,attrs:{value:l.value}},[t("span",[e._v(e._s(l.label))])])})),1),t("p",[e._v("禁用某个选项")]),t("IvueSelect",{attrs:{value:e.value1}},e._l(e.data,(function(l,a){return t("IvueOption",{key:l.value,attrs:{value:l.value,disabled:0===a}},[t("span",[e._v(e._s(l.label))])])})),1)],1)},S=[],F={data(){return{value1:"",data:[{value:"Foo",label:"Foo"},{value:"Bar",label:"Bar"},{value:"Fizz",label:"Fizz"},{value:"Buzz",label:"Buzz"}]}}},x=F,j=Object(_["a"])(x,y,S,!1,null,null,null),q=j.exports,M=function(){var e=this,t=e._self._c;return t("div",[t("IvueSelect",{attrs:{filterable:""}},[t("IvueOptionGroup",{attrs:{label:"one"}},e._l(e.grop1,(function(l,a){return t("IvueOption",{key:a,attrs:{value:l.value,label:l.label}},[t("span",[e._v(e._s(l.label))])])})),1),t("IvueOptionGroup",{attrs:{label:"two"}},e._l(e.grop2,(function(l,a){return t("IvueOption",{key:a,attrs:{value:l.value,label:l.label}},[t("span",[e._v(e._s(l.label))])])})),1)],1)],1)},D=[],G={data(){return{value1:[],grop1:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"}],grop2:[{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}]}}},N=G,L=Object(_["a"])(N,M,D,!1,null,null,null),P=L.exports,A={name:"ivue-select",data(){return{code:u}},components:{DocMarkdown:v["a"],Default:p,Mltiple:k,Filterable:C,Disabled:q,Group:P}},J=A,Y=Object(_["a"])(J,a,n,!1,null,null,null);t["default"]=Y.exports},"18f5":function(e,t,l){"use strict";l("2abf")},"2abf":function(e,t,l){},"97e5":function(e,t,l){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{ref:"docMarkdown",staticClass:"doc-markdown ivue-elevation-2"},[t("nav",{staticClass:"doc-markdown-header"},[t("div",{staticClass:"doc-markdown-header--content"},[t("ivue-button",{attrs:{icon:"",flat:""},on:{click:e.clickJsfiddle}},[t("svg",{attrs:{width:"25px",height:"25px",viewBox:"0 0 46 33"}},[t("g",{attrs:{"stroke-width":"3",fill:"none","fill-rule":"evenodd",stroke:"#000"}},[t("path",{attrs:{d:"M23.4888889,20.543316 C21.4404656,18.4187374 19.0750303,15.6666667 16.4832014,15.6666667 C13.8721947,15.6666667 11.7555556,17.6366138 11.7555556,20.0666667 C11.7555556,22.4967196 13.8721947,24.4666667 16.4832014,24.4666667 C18.8347252,24.4666667 19.9845474,23.0125628 20.6429148,22.312473",id:"Oval-1","stroke-linecap":"round"}}),t("path",{attrs:{d:"M22.5111111,19.5900174 C24.5595344,21.7145959 26.9249697,24.4666667 29.5167986,24.4666667 C32.1278053,24.4666667 34.2444444,22.4967196 34.2444444,20.0666667 C34.2444444,17.6366138 32.1278053,15.6666667 29.5167986,15.6666667 C27.1652748,15.6666667 26.0154526,17.1207706 25.3570852,17.8208603",id:"Oval-1-Copy","stroke-linecap":"round"}}),t("path",{attrs:{d:"M45,22.7331459 C45,19.1499462 42.7950446,16.079593 39.6628004,14.7835315 C39.6774469,14.5246474 39.7003932,14.2674038 39.7003932,14.0035978 C39.7003932,6.82243304 33.8412885,1 26.611593,1 C21.3985635,1 16.9102123,4.03409627 14.8051788,8.41527616 C13.7828502,7.62878013 12.503719,7.15547161 11.1134367,7.15547161 C7.77825654,7.15547161 5.07450503,9.84159999 5.07450503,13.1544315 C5.07450503,13.7760488 5.16938207,14.3779791 5.3477444,14.9418479 C2.74863428,16.4787471 1,19.2867709 1,22.5105187 C1,27.3287502 4.89630545,31.2367856 9.72803666,31.31094 L36.3341301,31.3109406 C41.1201312,31.3406346 45,27.4870665 45,22.7331459 L45,22.7331459 Z","stroke-linejoin":"round"}})])])]),t("ivue-button",{attrs:{icon:"",flat:""},on:{click:e.clickGithub}},[t("svg",{staticClass:"octicon octicon-mark-github",attrs:{width:"20px",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),t("ivue-button",{attrs:{icon:"",flat:""},on:{click:function(t){e.showCode=!e.showCode}}},[t("ivue-icon",[e._v("code")])],1)],1)]),t("transition",{attrs:{name:"code"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],staticClass:"doc-markdown-code"},[t("div",{staticClass:"doc-markdown-code--content"},[t("pre",[t("code",{ref:"code",staticClass:"hljs xml"},[e._v(e._s(e.code))])])])])]),t("div",{staticClass:"doc-markdown-content"},[e._t("demo")],2)],1)},n=[],v=l("e2cb"),o=l.n(v),u={props:{jsfiddle:String,github:String,code:String},data(){return{showCode:!1}},mounted(){o.a.highlightBlock(this.$refs.code)},methods:{clickJsfiddle(){window.open(this.jsfiddle)},clickGithub(){window.open(this.github)}}},i=u,r=(l("18f5"),l("8619")),d=Object(r["a"])(i,a,n,!1,null,"175dae70",null);t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-54dd40c2.84bcfcff.js.map