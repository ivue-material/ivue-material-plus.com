<template>
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
