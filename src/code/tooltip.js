const code = {};

code.default = `<template>
    <ivue-tooltip
        content="hello world"
    >文字提示气泡框，在鼠标悬停时显示</ivue-tooltip>
</template>
`;

code.placement = `<template>
    <div class="tooltip-wrapper">
        <div>
            <ivue-tooltip class="tooltip" content="Top Left text" placement="top-start">
                <ivue-button>Top Left</ivue-button>
            </ivue-tooltip>

            <ivue-tooltip class="tooltip" content="Top Center text" placement="top">
                <ivue-button>Top Center</ivue-button>
            </ivue-tooltip>

            <ivue-tooltip class="tooltip" content="Top Right text" placement="top-end">
                <ivue-button>Top Right</ivue-button>
            </ivue-tooltip>
        </div>

        <div class="tooltip-flex">
            <div class="tooltip-left">
                <ivue-tooltip class="tooltip" content="Left Right text" placement="left-start">
                    <ivue-button>Left Top</ivue-button>
                </ivue-tooltip>

                <ivue-tooltip class="tooltip" content="Left Center text" placement="left">
                    <ivue-button>Left Center</ivue-button>
                </ivue-tooltip>

                <ivue-tooltip class="tooltip" content="Left Bottom text" placement="left-end">
                    <ivue-button>Left Bottom</ivue-button>
                </ivue-tooltip>
            </div>

            <div class="tooltip-left">
                <ivue-tooltip class="tooltip" content="Right Top text" placement="right-start">
                    <ivue-button>Right Top</ivue-button>
                </ivue-tooltip>

                <ivue-tooltip class="tooltip" content="Right Center text" placement="right">
                    <ivue-button>Right Center</ivue-button>
                </ivue-tooltip>

                <ivue-tooltip class="tooltip" content="Right Bottom text" placement="right-end">
                    <ivue-button>Right Bottom</ivue-button>
                </ivue-tooltip>
            </div>
        </div>

        <div>
            <ivue-tooltip class="tooltip" content="Bottom Left text" placement="bottom-start">
                <ivue-button>Bottom Left</ivue-button>
            </ivue-tooltip>

            <ivue-tooltip class="tooltip" content="Bottom Center text" placement="bottom">
                <ivue-button>Bottom Center</ivue-button>
            </ivue-tooltip>

            <ivue-tooltip class="tooltip" content="Bottom Right text" placement="bottom-end">
                <ivue-button>Bottom Right</ivue-button>
            </ivue-tooltip>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.tooltip-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 150px;
}

.tooltip {
    margin: 10px;
}

.tooltip-left {
    display: flex;
    flex-direction: column;
}

.tooltip-flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>
`;

code.slots = `
<template>
    <ivue-tooltip class="tooltip">
        <ivue-button>自定义内容</ivue-button>

        <template #content>
           <span>自定义内容</span>
           <ivue-icon style="color:#E91E63">favorite</ivue-icon>
        </template>
    </ivue-tooltip>
</template>
`;

code.disabled = `<template>
    <ivue-tooltip class="tooltip" content="通过设置属性disabled可以禁用文字提示" :disabled="disabled">
      <ivue-button @click="handleClick">{{ disabled ? '取消禁用' : '点击禁用' }}</ivue-button>
    </ivue-tooltip>
</template>

<script setup>
import { ref } from 'vue';

const disabled = ref(false);

const handleClick = () => {
  disabled.value = !disabled.value;
};

</script>

<style lang="scss" scoped>
</style>
`;


code.delay = `<template>
    <ivue-tooltip class="tooltip" content="延迟1秒显示" :delay="1000">
        <ivue-button>延迟显示</ivue-button>
    </ivue-tooltip>
</template>
`;

code.theme = `<template>
    <h4>深色主题</h4>
    <ivue-tooltip class="tooltip" content="深色主题" theme="dark">
        <ivue-button>深色主题</ivue-button>
    </ivue-tooltip>
    <h4>浅色主题</h4>
    <ivue-tooltip class="tooltip" content="浅色主题">
        <ivue-button>浅色主题(默认)</ivue-button>
    </ivue-tooltip>
</template>
`;

code.width = `<template>
    <ivue-tooltip
        content="HelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorld"
        max-width="300"
    >
        <ivue-button>最大宽度300px</ivue-button>
    </ivue-tooltip>
</template>
`;

code.beforeShowPopper = `<template>
    <ivue-tooltip class="tooltip" content="显示前执行" :before-show-popper="beforeShowPopper">
        <ivue-button>显示前执行</ivue-button>
    </ivue-tooltip>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const {proxy} = getCurrentInstance();

const beforeShowPopper = () => {
  proxy.$message.info('鼠标已进入');

  return true;
};
</script>
`;

code.controlled = `<template>
    <ivue-tooltip class="tooltip" content="鼠标离开时提示不隐藏" controlled>
        <ivue-button>鼠标离开时提示不隐藏</ivue-button>
    </ivue-tooltip>
</template>
`;

code.manual = '';

export default code;
