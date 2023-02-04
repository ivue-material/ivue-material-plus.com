const code = {};

code.default = `<template>
    <ivue-button @click="modal = true">点击显示对话框</ivue-button>
    <ivue-modal
        v-model="modal"
        title="哆啦A梦"
        transfer
        @on-cancel="handleCancel"
        @on-confirm="handleConfirm"
    >
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const modal = ref(false);

const handleCancel = () => {
    proxy.$message.info('取消');
};

const handleConfirm = () => {
    proxy.$message.info('确认');
};
</script>
`;

code.styles = `<template>
    <ivue-button class="modal-button" @click="modal1 = true">自定义头部和底部</ivue-button>
    <ivue-modal v-model="modal1" transfer>
        <template #header>
            <h1>哆啦A梦</h1>
        </template>
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
        <template #footer>
            <ivue-button status="error" :loading="loading" @click="handleClose">Close</ivue-button>
        </template>
    </ivue-modal>

    <ivue-button class="modal-button" @click="modal2 = true">不显示标题</ivue-button>
    <ivue-modal v-model="modal2" transfer>
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>

    <ivue-button class="modal-button" @click="modal3 = true">自定义按钮文案和关闭图标</ivue-button>
    <ivue-modal
        v-model="modal3"
        close-icon="cancel_presentation"
        cancel-text="Cancel"
        confirm-text="Confirm"
        transfer
    >
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>

    <ivue-button class="modal-button" @click="modal4 = true">自定义宽度</ivue-button>
    <ivue-modal v-model="modal4" width="300" title="哆啦A梦" transfer>
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const modal1 = ref(false);
const modal2 = ref(false);
const modal3 = ref(false);
const modal4 = ref(false);

const loading = ref(false);

const handleClose = () => {
    loading.value = true;

    setTimeout(() => {
        loading.value = false;
        modal1.value = false;

        proxy.$message.info('取消');
    }, 2000);
};
</script>

<style scoped>
.modal-button {
    margin-right: 20px;
}
</style>
`;

code.loading = `<template>
    <h4>loading类型默认 spin</h4>
    <ivue-button @click="modal1 = true">异步关闭 spin</ivue-button>
    <ivue-modal
        v-model="modal1"
        title="哆啦A梦"
        transfer
        :loading="loading"
        @on-confirm="handleConfirm1"
    >
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>

    <h4>loading类型 button</h4>
    <ivue-button @click="modal2 = true">异步关闭 button</ivue-button>
    <ivue-modal
        v-model="modal2"
        title="哆啦A梦"
        loadingType="button"
        transfer
        :loading="loading"
        @on-confirm="handleConfirm2"
    >
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>
</template>

<script setup>
import { ref } from 'vue';

const modal1 = ref(false);
const modal2 = ref(false);

const loading = ref(true);

const handleConfirm1 = () => {
    setTimeout(() => {
        modal1.value = false;
    }, 2000);
};

const handleConfirm2 = () => {
    setTimeout(() => {
        modal2.value = false;
    }, 2000);
};
</script>
`;

code.closable = `<template>
    <ivue-button class="modal-button" @click="modal1 = true">禁用关闭按钮</ivue-button>
    <ivue-modal v-model="modal1" title="哆啦A梦" transfer :closable="false">
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>

    <ivue-button class="modal-button" @click="modal2 = true">禁用点击遮罩层关闭</ivue-button>
    <ivue-modal v-model="modal2" title="哆啦A梦" transfer :mask-closable="false">
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>
</template>

<script setup>
import { ref } from 'vue';

const modal1 = ref(false);
const modal2 = ref(false);
</script>

<style scoped>
.modal-button {
    margin-right: 20px;
}
</style>
`;

code.classes = `<template>
    <h4>通过 styles 设置外层 style 样式</h4>
    <ivue-button @click="modal1 = true">对话框距离顶部 20px</ivue-button>
    <ivue-modal v-model="modal1" title="哆啦A梦" transfer :styles="{top: '20px'}">
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>

    <h4>通过 modal-wrapper-classes 设置外层 class 样式</h4>
    <ivue-button @click="modal2 = true">居中对话框</ivue-button>
    <ivue-modal
        v-model="modal2"
        title="哆啦A梦"
        transfer
        modal-wrapper-classes="modal-vertical-center"
    >
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>
</template>

<script setup>
import { ref } from 'vue';

const modal1 = ref(false);
const modal2 = ref(false);
</script>

<style>
.modal-vertical-center:not(.ivue-modal-hidden) {
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-vertical-center .ivue-modal {
    top: 0 !important;
}
</style>
`;

code.fullscreen = `<template>
    <ivue-button @click="modal = true">点击全屏显示</ivue-button>
    <ivue-modal v-model="modal" title="哆啦A梦" transfer fullscreen footer-hide>
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>
</template>

<script setup>
import { ref } from 'vue';

const modal = ref(false);
</script>
`;

code.draggable = `<template>
    <ivue-button class="modal-button" @click="modal1 = true">默认拖拽</ivue-button>
    <ivue-modal v-model="modal1" title="哆啦A梦" transfer draggable>
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>

    <ivue-button class="modal-button" @click="modal2 = true">拖拽不会拖出屏幕边缘</ivue-button>
    <ivue-modal v-model="modal2" title="哆啦A梦" transfer draggable sticky>
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>

    <ivue-button class="modal-button" @click="modal3 = true">拖拽调整自动吸附的临界距离为 100</ivue-button>
    <ivue-modal v-model="modal3" title="哆啦A梦" transfer draggable sticky :sticky-distance="100">
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>

    <ivue-button class="modal-button" @click="modal4 = true">再次打开时，会重置拖拽的位置</ivue-button>
    <ivue-modal v-model="modal4" title="哆啦A梦" transfer draggable reset-drag-position>
        <span>漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事</span>
    </ivue-modal>
</template>

<script setup>
import { ref } from 'vue';

const modal1 = ref(false);
const modal2 = ref(false);
const modal3 = ref(false);
const modal4 = ref(false);
</script>

<style scoped>
.modal-button {
    margin-right: 20px;
}
</style>
`;

code.resetBody = `<template>
    <ivue-button class="modal-button" @click="modal1 = true">重新渲染内容</ivue-button>
    <ivue-modal v-model="modal1" title="哆啦A梦" transfer reset-body>
        <template #default>
            <reset-body-content></reset-body-content>
        </template>
    </ivue-modal>

    <ivue-button class="modal-button" @click="modal2 = true">不重新渲染内容</ivue-button>
    <ivue-modal v-model="modal2" title="哆啦A梦" transfer>
        <reset-body-content></reset-body-content>
    </ivue-modal>
</template>

<script setup>
import { ref } from 'vue';
import ResetBodyContent from './reset-body-content.vue';

const modal1 = ref(false);
const modal2 = ref(false);
</script>

<style scoped>
.modal-button {
    margin-right: 20px;
}
</style>
`;

code.instance = `<template>
    <ivue-button class="modal-button" @click="handleInstance('info')">info 对话框</ivue-button>
    <ivue-button class="modal-button" @click="handleInstance('success')">success 对话框</ivue-button>
    <ivue-button class="modal-button" @click="handleInstance('warning')">warning 对话框</ivue-button>
    <ivue-button class="modal-button" @click="handleInstance('error')">error 对话框</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleInstance = (type) => {
    proxy.$IvueModal[type]({
        title: '哆啦A梦',
        content:
            '漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事',
    });
};
</script>

<style scoped>
.modal-button {
    margin-right: 20px;
}
</style>
`;

code.confirm = `<template>
    <ivue-button class="modal-button" @click="handleConfirm">普通对话框</ivue-button>
    <ivue-button class="modal-button" @click="handleText">自定义按钮文案</ivue-button>
    <ivue-button class="modal-button" @click="handleAsync">异步对话框</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleConfirm = () => {
    proxy.$IvueModal.confirm({
        title: '哆啦A梦',
        content:
            '漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事',
        onCancel: () => {
            proxy.$message.info('取消');
        },
        onConfirm: () => {
            proxy.$message.info('确认');
        },
    });
};

const handleText = () => {
    proxy.$IvueModal.confirm({
        title: '哆啦A梦',
        content:
            '漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事',
        cancelText: 'Cancel',
        confirmText: 'Confirm',
    });
};

const handleAsync = () => {
    proxy.$IvueModal.confirm({
        title: '哆啦A梦',
        content:
            '漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事',
        loading: true,
        onConfirm: () => {
            setTimeout(() => {
                proxy.$IvueModal.remove();
            }, 2000);
        },
    });
};
</script>

<style scoped>
.modal-button {
    margin-right: 20px;
}
</style>
`;

code.render = `<template>
    <ivue-button @click="handleRender">自定义render</ivue-button>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleRender = () => {
    proxy.$IvueModal.confirm({
        render: (h) => {
            return h('div', [
                h('h1', '哆啦A梦'),
                h(
                    'div',
                    '漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事'
                ),
            ]);
        },
    });
};
</script>
`;

export default code;
