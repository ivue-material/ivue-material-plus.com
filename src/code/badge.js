const code = {};

code.default = `<template>
    <h4>定义消息数量</h4>
    <ivue-badge class="badge-wrapper" :count="3">
        <div class="badge"></div>
    </ivue-badge>
    <h4>自定义消息内容</h4>
    <ivue-badge class="badge-wrapper">
        <div class="badge"></div>
        <!-- 消息图标 -->
        <template #count>
            <ivue-icon class="icon badge-icon">military_tech</ivue-icon>
        </template>
    </ivue-badge>
</template>

<style>
.badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: #f3f3f3;
    border-radius: 6px;
}

.badge-icon {
    color: #ffbd3c;
    background: #fff;
    box-shadow: 0 0 3px #cccccc;
    border-radius: 100%;
    width: 25px;
    height: 25px;
}

.badge-wrapper {
    margin-right: 20px;
}
</style>
`;

code.dot = `<template>
    <h4>自定义颜色小红点</h4>
    <ivue-badge dot color="#0DDECE">
        <div class="badge"></div>
    </ivue-badge>
    <h4>自定义插槽小红点</h4>
    <ivue-badge class="badge" dot>
        <ivue-icon>local_police</ivue-icon>
    </ivue-badge>
</template>

<style>
.badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: #f3f3f3;
    border-radius: 6px;
}

.badge-icon {
    color: #ffbd3c;
    background: #fff;
    box-shadow: 0 0 3px #cccccc;
    border-radius: 100%;
    width: 25px;
    height: 25px;
}

.badge-wrapper {
    margin-right: 20px;
}
</style>
`;


code.overflowCount = `<template>
    <ivue-badge class="badge-wrapper" :count="100" color="#0DDECE">
        <div class="badge"></div>
    </ivue-badge>
    <ivue-badge class="badge-wrapper" :count="1000" overflowCount="999">
        <div class="badge"></div>
    </ivue-badge>
</template>

<script setup>
</script>

<style>
.badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: #f3f3f3;
    border-radius: 6px;
}

.badge-icon {
    color: #ffbd3c;
    background: #fff;
    box-shadow: 0 0 3px #cccccc;
    border-radius: 100%;
    width: 25px;
    height: 25px;
}

.badge-wrapper {
    margin-right: 20px;
}
</style>
`;


code.alone = `<template>
    <ivue-badge class="alone" :count="10"></ivue-badge>
    <ivue-badge class="alone" :count="20" color="#FFBD3C"></ivue-badge>
</template>

<script setup>
</script>

<style>
.alone {
  margin-right: 10px;
}
</style>
`;

code.setText = `<template>
    <ivue-badge class="badge-wrapper" text="new">
        <div class="badge"></div>
    </ivue-badge>
    <ivue-badge class="badge-wrapper" text="9999">
        <div class="badge"></div>
    </ivue-badge>
</template>

<style>
.badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: #f3f3f3;
    border-radius: 6px;
}

.badge-wrapper {
    margin-right: 20px;
}
</style>
`;


code.status = `<template>
    <h2>常规颜色</h2>
    <ivue-badge status="success" text="success"></ivue-badge>
    <ivue-badge status="error" text="error"></ivue-badge>
    <ivue-badge status="default" text="default"></ivue-badge>
    <ivue-badge status="processing" text="processing"></ivue-badge>
    <ivue-badge status="warning" text="warning"></ivue-badge>
    <h2>预设颜色</h2>
    <ivue-badge status="blue" text="blue"></ivue-badge>
    <ivue-badge status="green" text="green"></ivue-badge>
    <ivue-badge status="red" text="red"></ivue-badge>
    <ivue-badge status="yellow" text="yellow"></ivue-badge>
    <ivue-badge status="pink" text="pink"></ivue-badge>
    <ivue-badge status="orange" text="orange"></ivue-badge>
    <ivue-badge status="gold" text="gold"></ivue-badge>
    <ivue-badge status="lime" text="lime"></ivue-badge>
    <ivue-badge status="cyan" text="cyan"></ivue-badge>
    <ivue-badge status="purple" text="purple"></ivue-badge>
    <h2>自定义颜色</h2>
    <ivue-badge status="#FF80AB" text="#FF80AB"></ivue-badge>
    <ivue-badge status="#EA80FC" text="#EA80FC"></ivue-badge>
</template>
`;


code.customize = `<template>
    <h4>设置show-zero时，当数值为0时显示</h4>
    <ivue-badge class="badge-wrapper" :count="0" show-zero>
        <div class="badge"></div>
    </ivue-badge>
    <h4>设置offset,自定义数字偏移位置,单位为px</h4>
    <ivue-badge class="badge-wrapper" className="green" :count="90" :offset="[0,20]">
        <div class="badge"></div>
    </ivue-badge>
</template>

<style>
.badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: #f3f3f3;
    border-radius: 6px;
}

.badge-wrapper {
    margin-right: 20px;
}
</style>
`;

export default code;
