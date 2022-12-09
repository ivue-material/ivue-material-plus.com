(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2854d162"],{2002:function(e,t,c){"use strict";c("42ae")},"42ae":function(e,t,c){},6013:function(e,t,c){"use strict";c.r(t);var n=c("7a23");const o={default:'<template>\n    <ivue-steps :current-step="currentStep">\n        <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>\n    </ivue-steps>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentStep = ref(0);\n<\/script>\n',icon:'<template>\n    <ivue-steps :current-step="currentStep">\n        <ivue-step title="已完成" content="这里是该步骤的描述信息" icon="sentiment_satisfied"></ivue-step>\n        <ivue-step title="进行中" content="这里是该步骤的描述信息" icon="sentiment_very_satisfied"></ivue-step>\n        <ivue-step title="待进行" content="这里是该步骤的描述信息" icon="sentiment_dissatisfied"></ivue-step>\n        <ivue-step title="待进行1" content="这里是该步骤的描述信息" icon="sentiment_very_dissatisfied"></ivue-step>\n    </ivue-steps>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentStep = ref(0);\n<\/script>\n',nextSwitch:'<template>\n    <div>\n        <h3>当前正在进行第 {{ currentStep }} 步</h3>\n        <ivue-steps class="steps" :current-step="currentStep">\n            <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>\n        </ivue-steps>\n\n        <ivue-button class="button" @click="handleNext">Next step</ivue-button>\n    </div>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentStep = ref(0);\n\nconst handleNext = () => {\n    if (currentStep.value == 3) {\n        currentStep.value = 0;\n    } else {\n        currentStep.value += 1;\n    }\n};\n<\/script>\n\n<style>\n.steps {\n    margin: 20px 0;\n}\n</style>\n',status:'<template>\n    <ivue-steps :current-step="currentStep" status="error">\n        <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>\n    </ivue-steps>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentStep = ref(1);\n<\/script>\n',direction:'<template>\n    <ivue-steps :current-step="currentStep" direction="vertical">\n        <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>\n    </ivue-steps>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentStep = ref(2);\n<\/script>\n',space:'<template>\n    <h3>横向</h3>\n    <ivue-steps :current-step="currentStep" :space="100">\n        <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>\n    </ivue-steps>\n    <h3>垂直</h3>\n    <ivue-steps :current-step="currentStep" space="10%" direction="vertical">\n        <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>\n        <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>\n    </ivue-steps>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentStep = ref(0);\n<\/script>\n',textDirection:'<template>\n    <div>\n        <h3>文字方向向右</h3>\n        <ivue-steps :current-step="currentStep">\n            <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>\n        </ivue-steps>\n\n        <h3>文字方向向下</h3>\n        <ivue-steps :current-step="currentStep" text-direction="bottom">\n            <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>\n        </ivue-steps>\n\n        <h3>文字方向向下居中</h3>\n        <ivue-steps :current-step="currentStep" text-direction="bottom-center">\n            <ivue-step title="已完成" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="进行中" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="待进行1" content="这里是该步骤的描述信息"></ivue-step>\n            <ivue-step title="待进行2" content="这里是该步骤的描述信息"></ivue-step>\n        </ivue-steps>\n    </div>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentStep = ref(0);\n<\/script>\n'};var r=o,l={__name:"default",setup(e){const t=Object(n["ref"])(0);return(e,c)=>{const o=Object(n["resolveComponent"])("ivue-step"),r=Object(n["resolveComponent"])("ivue-steps");return Object(n["openBlock"])(),Object(n["createBlock"])(r,{"current-step":t.value},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{title:"已完成",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"进行中",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行1",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行2",content:"这里是该步骤的描述信息"})]),_:1},8,["current-step"])}}};const i=l;var s=i,u={__name:"icon",setup(e){const t=Object(n["ref"])(0);return(e,c)=>{const o=Object(n["resolveComponent"])("ivue-step"),r=Object(n["resolveComponent"])("ivue-steps");return Object(n["openBlock"])(),Object(n["createBlock"])(r,{"current-step":t.value},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{title:"已完成",content:"这里是该步骤的描述信息",icon:"sentiment_satisfied"}),Object(n["createVNode"])(o,{title:"进行中",content:"这里是该步骤的描述信息",icon:"sentiment_very_satisfied"}),Object(n["createVNode"])(o,{title:"待进行",content:"这里是该步骤的描述信息",icon:"sentiment_dissatisfied"}),Object(n["createVNode"])(o,{title:"待进行1",content:"这里是该步骤的描述信息",icon:"sentiment_very_dissatisfied"})]),_:1},8,["current-step"])}}};const a=u;var p=a,d={__name:"next-switch",setup(e){const t=Object(n["ref"])(0),c=()=>{3==t.value?t.value=0:t.value+=1};return(e,o)=>{const r=Object(n["resolveComponent"])("ivue-step"),l=Object(n["resolveComponent"])("ivue-steps"),i=Object(n["resolveComponent"])("ivue-button");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("h3",null,"当前正在进行第 "+Object(n["toDisplayString"])(t.value)+" 步",1),Object(n["createVNode"])(l,{class:"steps","current-step":t.value},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(r,{title:"已完成",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(r,{title:"进行中",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(r,{title:"待进行1",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(r,{title:"待进行2",content:"这里是该步骤的描述信息"})]),_:1},8,["current-step"]),Object(n["createVNode"])(i,{class:"button",onClick:c},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Next step")]),_:1})])}}};c("2002");const b=d;var v=b,j={__name:"status",setup(e){const t=Object(n["ref"])(1);return(e,c)=>{const o=Object(n["resolveComponent"])("ivue-step"),r=Object(n["resolveComponent"])("ivue-steps");return Object(n["openBlock"])(),Object(n["createBlock"])(r,{"current-step":t.value,status:"error"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{title:"已完成",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"进行中",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行1",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行2",content:"这里是该步骤的描述信息"})]),_:1},8,["current-step"])}}};const O=j;var m=O,N={__name:"direction",setup(e){const t=Object(n["ref"])(2);return(e,c)=>{const o=Object(n["resolveComponent"])("ivue-step"),r=Object(n["resolveComponent"])("ivue-steps");return Object(n["openBlock"])(),Object(n["createBlock"])(r,{"current-step":t.value,direction:"vertical"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{title:"已完成",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"进行中",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行1",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行2",content:"这里是该步骤的描述信息"})]),_:1},8,["current-step"])}}};const V=N;var f=V;const h=Object(n["createElementVNode"])("h3",null,"横向",-1),x=Object(n["createElementVNode"])("h3",null,"垂直",-1);var w={__name:"space",setup(e){const t=Object(n["ref"])(0);return(e,c)=>{const o=Object(n["resolveComponent"])("ivue-step"),r=Object(n["resolveComponent"])("ivue-steps");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[h,Object(n["createVNode"])(r,{"current-step":t.value,space:100},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{title:"已完成",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"进行中",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行1",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行2",content:"这里是该步骤的描述信息"})]),_:1},8,["current-step"]),x,Object(n["createVNode"])(r,{"current-step":t.value,space:"10%",direction:"vertical"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{title:"已完成",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"进行中",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行1",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行2",content:"这里是该步骤的描述信息"})]),_:1},8,["current-step"])],64)}}};const _=w;var E=_;const C=Object(n["createElementVNode"])("h3",null,"文字方向向右",-1),S=Object(n["createElementVNode"])("h3",null,"文字方向向下",-1),T=Object(n["createElementVNode"])("h3",null,"文字方向向下居中",-1);var k={__name:"text-direction",setup(e){const t=Object(n["ref"])(0);return(e,c)=>{const o=Object(n["resolveComponent"])("ivue-step"),r=Object(n["resolveComponent"])("ivue-steps");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[C,Object(n["createVNode"])(r,{"current-step":t.value},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{title:"已完成",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"进行中",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行1",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行2",content:"这里是该步骤的描述信息"})]),_:1},8,["current-step"]),S,Object(n["createVNode"])(r,{"current-step":t.value,"text-direction":"bottom"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{title:"已完成",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"进行中",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行1",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行2",content:"这里是该步骤的描述信息"})]),_:1},8,["current-step"]),T,Object(n["createVNode"])(r,{"current-step":t.value,"text-direction":"bottom-center"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(o,{title:"已完成",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"进行中",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行1",content:"这里是该步骤的描述信息"}),Object(n["createVNode"])(o,{title:"待进行2",content:"这里是该步骤的描述信息"})]),_:1},8,["current-step"])])}}};const y=k;var B=y;const g=Object(n["createElementVNode"])("h1",null,"Steps 步骤条",-1),H=Object(n["createElementVNode"])("p",null,"组件用于显示步骤进度，引导用户按流程完成任务",-1),L=Object(n["createElementVNode"])("h2",null,"基本用法",-1),M=Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(" 基本用法，组件会根据 "),Object(n["createElementVNode"])("code",null,"currentStep"),Object(n["createTextVNode"])("自动判断各步骤状态 ")],-1),z=Object(n["createElementVNode"])("h2",null,"带图标的步骤条",-1),D=Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(" 通过设置 "),Object(n["createElementVNode"])("code",null,"Step"),Object(n["createTextVNode"])(" 的 "),Object(n["createElementVNode"])("code",null,"icon"),Object(n["createTextVNode"])(" 属性可以自定义图标 ")],-1),J=Object(n["createElementVNode"])("h2",null,"切换步骤",-1),P=Object(n["createElementVNode"])("p",null,"点击下一步按钮可以切换当前进度状态",-1),F=Object(n["createElementVNode"])("h2",null,"步骤运行错误",-1),q=Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(" 设置 "),Object(n["createElementVNode"])("code",null,"Steps"),Object(n["createTextVNode"])(" 的属性 "),Object(n["createElementVNode"])("code",null,"status"),Object(n["createTextVNode"])(" 为 "),Object(n["createElementVNode"])("code",null,"error"),Object(n["createTextVNode"])(" 指定当前步骤状态 ")],-1),A=Object(n["createElementVNode"])("h2",null,"垂直方向",-1),G=Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(" 设置属性 "),Object(n["createElementVNode"])("code",null,"direction"),Object(n["createTextVNode"])(" 为 "),Object(n["createElementVNode"])("code",null,"vertical"),Object(n["createTextVNode"])(" 在垂直方向展示 ")],-1),I=Object(n["createElementVNode"])("h2",null,"自定义 Step 的间距",-1),K=Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(" 设置属性 "),Object(n["createElementVNode"])("code",null,"space"),Object(n["createTextVNode"])(" 自定义每个 "),Object(n["createElementVNode"])("code",null,"step"),Object(n["createTextVNode"])(" 的间距，不填写将自适应间距。支持百分比 ")],-1),Q=Object(n["createElementVNode"])("h2",null,"控制文字方向",-1),R=Object(n["createElementVNode"])("p",null,[Object(n["createTextVNode"])(" 自定义内容对其方式， "),Object(n["createElementVNode"])("code",null,"right"),Object(n["createTextVNode"])("文字向右, "),Object(n["createElementVNode"])("code",null,"bottom-center"),Object(n["createTextVNode"])("底部居中, "),Object(n["createElementVNode"])("code",null,"bottom"),Object(n["createTextVNode"])("底部 ")],-1),U=Object(n["createElementVNode"])("h3",null,"Steps Props",-1),W=["innerHTML"],X=["innerHTML"],Y=Object(n["createElementVNode"])("h3",null,"Step Props",-1),Z=["innerHTML"],$=["innerHTML"],ee=Object(n["createElementVNode"])("h3",null,"Step Slots",-1),te=["innerHTML"];var ce={__name:"index",setup(e){const t=Object(n["ref"])(r),c=Object(n["ref"])([{name:"current-step",illustrate:"当前步骤，从 0 开始计数",type:"Number",value:"-",default:"0"},{name:"direction",illustrate:"步骤条的方向，可选值为 <code>horizontal</code>（水平）或 <code>vertical</code>（垂直)",type:"String",value:"<code>horizontal</code> | <code>vertical</code>",default:"horizontal"},{name:"status",illustrate:"当前步骤的状态",type:"String",value:"<code>wait</code> | <code>process</code> | <code>finish</code> | <code>error</code>",default:"process"},{name:"space",illustrate:"每个 step 的间距，不填写将自适应间距。支持百分比，如：<code>flex-basis: 10%</code>",type:"Number | String",value:"-",default:"-"},{name:"text-direction",illustrate:"文字方向",type:"String",value:"<code>right</code> | <code>bottom-center</code> | <code>bottom</code>",default:"-"}]),o=Object(n["ref"])([{name:"status",illustrate:"当前步骤的状态",type:"String",value:"<code>wait</code> | <code>process</code> | <code>finish</code> | <code>error</code>",default:"process"},{name:"title",illustrate:"标题",type:"String",value:"-",default:"-"},{name:"content",illustrate:"步骤的详细描述，可选",type:"String",value:"-",default:"-"},{name:"icon",illustrate:"步骤的图标，可选",type:"String",value:"-",default:"-"}]),l=Object(n["ref"])([{name:"title",illustrate:"自定义 title"},{name:"content",illustrate:"自定义 content"},{name:"icon",illustrate:"自定义 icon"}]);return(e,r)=>{const i=Object(n["resolveComponent"])("doc-markdown"),u=Object(n["resolveComponent"])("ivue-table-column"),a=Object(n["resolveComponent"])("ivue-table");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[g,H,L,M,Object(n["createVNode"])(i,{code:t.value.default},{demo:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s)]),_:1},8,["code"]),z,D,Object(n["createVNode"])(i,{code:t.value.default},{demo:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p)]),_:1},8,["code"]),J,P,Object(n["createVNode"])(i,{code:t.value.nextSwitch},{demo:Object(n["withCtx"])(()=>[Object(n["createVNode"])(v)]),_:1},8,["code"]),F,q,Object(n["createVNode"])(i,{code:t.value.status},{demo:Object(n["withCtx"])(()=>[Object(n["createVNode"])(m)]),_:1},8,["code"]),A,G,Object(n["createVNode"])(i,{code:t.value.direction},{demo:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f)]),_:1},8,["code"]),I,K,Object(n["createVNode"])(i,{code:t.value.space},{demo:Object(n["withCtx"])(()=>[Object(n["createVNode"])(E)]),_:1},8,["code"]),Q,R,Object(n["createVNode"])(i,{code:t.value.textDirection},{demo:Object(n["withCtx"])(()=>[Object(n["createVNode"])(B)]),_:1},8,["code"]),U,Object(n["createVNode"])(a,{data:c.value,border:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{prop:"name",label:"名称",width:"150"}),Object(n["createVNode"])(u,{prop:"illustrate",label:"说明","min-width":"3200"},{default:Object(n["withCtx"])(e=>[Object(n["createElementVNode"])("p",{innerHTML:e.row.illustrate},null,8,W)]),_:1}),Object(n["createVNode"])(u,{prop:"type",label:"类型",width:"150"}),Object(n["createVNode"])(u,{prop:"value",label:"可选值",width:"200"},{default:Object(n["withCtx"])(e=>[Object(n["createElementVNode"])("p",{innerHTML:e.row.value},null,8,X)]),_:1}),Object(n["createVNode"])(u,{prop:"default",label:"默认",width:"100"})]),_:1},8,["data"]),Y,Object(n["createVNode"])(a,{data:o.value,border:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{prop:"name",label:"名称",width:"100"}),Object(n["createVNode"])(u,{prop:"illustrate",label:"说明","min-width":"300"},{default:Object(n["withCtx"])(e=>[Object(n["createElementVNode"])("p",{innerHTML:e.row.illustrate},null,8,Z)]),_:1}),Object(n["createVNode"])(u,{prop:"type",label:"类型",width:"100"}),Object(n["createVNode"])(u,{prop:"value",label:"可选值",width:"200"},{default:Object(n["withCtx"])(e=>[Object(n["createElementVNode"])("p",{innerHTML:e.row.value},null,8,$)]),_:1}),Object(n["createVNode"])(u,{prop:"default",label:"默认",width:"100"})]),_:1},8,["data"]),ee,Object(n["createVNode"])(a,{data:l.value,border:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{prop:"name",label:"名称",width:"100"}),Object(n["createVNode"])(u,{prop:"illustrate",label:"说明","min-width":"300"},{default:Object(n["withCtx"])(e=>[Object(n["createElementVNode"])("p",{innerHTML:e.row.illustrate},null,8,te)]),_:1})]),_:1},8,["data"])])}}};const ne=ce;t["default"]=ne}}]);
//# sourceMappingURL=chunk-2854d162.756bb6ce.js.map