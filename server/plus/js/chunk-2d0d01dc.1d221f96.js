(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d01dc"],{6738:function(e,t,c){"use strict";c.r(t);var r=c("7a23");const n=Object(r["createElementVNode"])("h1",null,"Progress 进度条",-1),o=Object(r["createElementVNode"])("p",null,"展示操作或任务的当前进度，比如上传文件。",-1),a=Object(r["createElementVNode"])("h2",null,"基本用法",-1),d=Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("code",null,"progress"),Object(r["createTextVNode"])("处在不同状态下的进度条，当 "),Object(r["createElementVNode"])("code",null,"percent"),Object(r["createTextVNode"])(" 为 "),Object(r["createElementVNode"])("code",null,"100"),Object(r["createTextVNode"])(" 时，自动将状态置为 "),Object(r["createElementVNode"])("code",null,"success")],-1),l=Object(r["createElementVNode"])("h2",null,"动画进度条",-1),s=Object(r["createElementVNode"])("p",null,[Object(r["createTextVNode"])(" 使用 "),Object(r["createElementVNode"])("code",null,"indeterminate"),Object(r["createTextVNode"])(" 属性来设置不确定的进度， "),Object(r["createElementVNode"])("code",null,"duration"),Object(r["createTextVNode"])(" 来控制动画持续时间 ")],-1),i=Object(r["createElementVNode"])("h2",null,"百分比内显",-1),u=Object(r["createElementVNode"])("p",null,[Object(r["createTextVNode"])(" 设置属性 "),Object(r["createElementVNode"])("code",null,"text-inside"),Object(r["createTextVNode"])(" 可以将百分比显示在进度条内部 ")],-1),b=Object(r["createElementVNode"])("p",null,[Object(r["createTextVNode"])(" 设置属性 "),Object(r["createElementVNode"])("code",null,"stroke-width"),Object(r["createTextVNode"])(" 可以设置一个足够的高度。 ")],-1),p=Object(r["createElementVNode"])("h2",null,"垂直方向",-1),j=Object(r["createElementVNode"])("p",null,[Object(r["createTextVNode"])(" 设置属性 "),Object(r["createElementVNode"])("code",null,"vertical"),Object(r["createTextVNode"])(" 将以垂直方向显示 ")],-1);function O(e,t,c,O,V,v){const N=Object(r["resolveComponent"])("default"),m=Object(r["resolveComponent"])("doc-markdown"),g=Object(r["resolveComponent"])("animation"),E=Object(r["resolveComponent"])("percentage"),h=Object(r["resolveComponent"])("vertical");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[n,o,a,d,Object(r["createVNode"])(m,{code:V.code.default},{demo:Object(r["withCtx"])(()=>[Object(r["createVNode"])(N)]),_:1},8,["code"]),l,s,Object(r["createVNode"])(m,{code:V.code.animation},{demo:Object(r["withCtx"])(()=>[Object(r["createVNode"])(g)]),_:1},8,["code"]),i,u,b,Object(r["createVNode"])(m,{code:V.code.percentage},{demo:Object(r["withCtx"])(()=>[Object(r["createVNode"])(E)]),_:1},8,["code"]),p,j,Object(r["createVNode"])(m,{code:V.code.vertical},{demo:Object(r["withCtx"])(()=>[Object(r["createVNode"])(h)]),_:1},8,["code"])])}const V={default:'<template>\n        <ivue-progress\n        :percent="25"\n        :strokeColor="[\'#5AB2FF\', \'#5B8EFF\']"\n        boxShadowColor="#5B8EFF"\n    ></ivue-progress>\n        <ivue-progress :percent="25" />\n        <ivue-progress :percent="45" status="active" />\n        <ivue-progress :percent="65" status="wrong" />\n        <ivue-progress :percent="100" />\n        <ivue-progress :percent="25" hide-info />\n</template>\n<script>\n    export default {\n\n    }\n<\/script>\n',animation:'<template>\n    <h4>动画进度条</h4>\n    <div>\n        <ivue-progress :percent="45" indeterminate></ivue-progress>\n        <ivue-progress :percent="100" indeterminate :duration="5"></ivue-progress>\n\n        <ivue-progress\n            indeterminate\n            :duration="10"\n            :percent="25"\n            :strokeColor="[\'#5AB2FF\', \'#5B8EFF\']"\n            boxShadowColor="#5B8EFF"\n        ></ivue-progress>\n    </div>\n</template>\n',percentage:'<template>\n    <h4>百分比内显</h4>\n    <div>\n        <ivue-progress :percent="25" :stroke-width="20" text-inside></ivue-progress>\n        <ivue-progress :percent="45" :stroke-width="20" status="active" text-inside></ivue-progress>\n        <ivue-progress :percent="65" :stroke-width="20" status="wrong" text-inside></ivue-progress>\n        <ivue-progress :percent="25" :stroke-width="20" status="warning" text-inside></ivue-progress>\n        <ivue-progress :percent="100" :stroke-width="20" text-inside></ivue-progress>\n    </div>\n</template>\n',vertical:'<template>\n    <h4>垂直方向</h4>\n    <div class="content">\n        <ivue-progress :percent="50" vertical></ivue-progress>\n        <ivue-progress :percent="45" status="active" vertical></ivue-progress>\n        <ivue-progress :percent="25" status="wrong" vertical></ivue-progress>\n        <ivue-progress :percent="25" status="warning" vertical></ivue-progress>\n        <ivue-progress :percent="100" vertical></ivue-progress>\n        <ivue-progress :percent="25" hide-info vertical></ivue-progress>\n    </div>\n</template>\n'};var v=V;const N=Object(r["createElementVNode"])("h4",null,"基本状态",-1),m=Object(r["createElementVNode"])("h4",null,"百分百状态",-1),g=Object(r["createElementVNode"])("h4",null,[Object(r["createElementVNode"])("div",null,[Object(r["createTextVNode"])("设置"),Object(r["createElementVNode"])("code",null,"stroke-color"),Object(r["createTextVNode"])("属性,可以设置进度条颜色,如传入"),Object(r["createElementVNode"])("code",null,"Array"),Object(r["createTextVNode"])("时为渐变,")]),Object(r["createElementVNode"])("div",null,[Object(r["createTextVNode"])("设置"),Object(r["createElementVNode"])("code",null,"box-shadow-color"),Object(r["createTextVNode"])("属性,可设置进度条阴影颜色")])],-1),E=Object(r["createElementVNode"])("h4",null,[Object(r["createElementVNode"])("div",null,[Object(r["createTextVNode"])("设置"),Object(r["createElementVNode"])("code",null,"active"),Object(r["createTextVNode"])("属性,可设置进度条激活效果")])],-1),h=Object(r["createElementVNode"])("h4",null,[Object(r["createElementVNode"])("div",null,[Object(r["createTextVNode"])("设置"),Object(r["createElementVNode"])("code",null,"wrong"),Object(r["createTextVNode"])("属性,可设置进度条失败状态")])],-1),x=Object(r["createElementVNode"])("h4",null,[Object(r["createElementVNode"])("div",null,[Object(r["createTextVNode"])("设置"),Object(r["createElementVNode"])("code",null,"hide-info"),Object(r["createTextVNode"])("属性,可隐藏进度条图标")])],-1);function w(e,t){const c=Object(r["resolveComponent"])("ivue-progress");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[N,Object(r["createVNode"])(c,{percent:25}),m,Object(r["createVNode"])(c,{percent:100}),g,Object(r["createVNode"])(c,{percent:25,"stroke-color":["#5AB2FF","#5B8EFF"],"box-shadow-color":"#5B8EFF"}),E,Object(r["createVNode"])(c,{percent:45,status:"active"}),h,Object(r["createVNode"])(c,{percent:65,status:"wrong"}),x,Object(r["createVNode"])(c,{percent:25,"hide-info":""})],64)}var k=c("6b0d"),F=c.n(k);const T={},B=F()(T,[["render",w]]);var C=B;const f=Object(r["createElementVNode"])("h4",null,"动画进度条",-1);function A(e,t){const c=Object(r["resolveComponent"])("ivue-progress");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[f,Object(r["createElementVNode"])("div",null,[Object(r["createVNode"])(c,{percent:45,indeterminate:""}),Object(r["createVNode"])(c,{percent:100,indeterminate:"",duration:5}),Object(r["createVNode"])(c,{indeterminate:"",duration:10,percent:25,strokeColor:["#5AB2FF","#5B8EFF"],boxShadowColor:"#5B8EFF"})])],64)}const _={},S=F()(_,[["render",A]]);var J=S;const P=Object(r["createElementVNode"])("h4",null,"百分比内显",-1);function y(e,t){const c=Object(r["resolveComponent"])("ivue-progress");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[P,Object(r["createElementVNode"])("div",null,[Object(r["createVNode"])(c,{percent:25,"stroke-width":20,"text-inside":""}),Object(r["createVNode"])(c,{percent:45,"stroke-width":20,status:"active","text-inside":""}),Object(r["createVNode"])(c,{percent:65,"stroke-width":20,status:"wrong","text-inside":""}),Object(r["createVNode"])(c,{percent:25,"stroke-width":20,status:"warning","text-inside":""}),Object(r["createVNode"])(c,{percent:100,"stroke-width":20,"text-inside":""})])],64)}const D={},q=F()(D,[["render",y]]);var z=q;function G(e,t){const c=Object(r["resolveComponent"])("ivue-progress");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(c,{percent:50,vertical:""}),Object(r["createVNode"])(c,{percent:45,status:"active",vertical:""}),Object(r["createVNode"])(c,{percent:25,status:"wrong",vertical:""}),Object(r["createVNode"])(c,{percent:25,status:"warning",vertical:""}),Object(r["createVNode"])(c,{percent:100,vertical:""}),Object(r["createVNode"])(c,{percent:25,"hide-info":"",vertical:""})],64)}const H={},I=F()(H,[["render",G]]);var K=I,L={data(){return{code:v}},components:{Default:C,Animation:J,Percentage:z,Vertical:K}};const M=F()(L,[["render",O]]);t["default"]=M}}]);
//# sourceMappingURL=chunk-2d0d01dc.1d221f96.js.map