const code = {};

code.default = `<template>
    <ivue-popover
        trigger="hover"
        title="哆啦A梦"
        content="漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事"
    >
        <ivue-button class="popover-button">鼠标Hover显示</ivue-button>
    </ivue-popover>
    <ivue-popover
        trigger="click"
        title="哆啦A梦"
        content="漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事"
    >
        <ivue-button class="popover-button">鼠标Click显示</ivue-button>
    </ivue-popover>
    <ivue-popover
        trigger="focus"
        title="哆啦A梦"
        content="漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事"
    >
        <ivue-button class="popover-button">鼠标Focus显示</ivue-button>
    </ivue-popover>
    <ivue-popover
        v-model="visible"
        title="哆啦A梦"
        content="漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事"
    >
        <ivue-button class="popover-button">visible控制显示</ivue-button>
    </ivue-popover>
    <ivue-popover
        theme="dark"
        title="哆啦A梦"
        content="漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事"
    >
        <ivue-button class="popover-button">暗色主题</ivue-button>
    </ivue-popover>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<style scoped>
.popover-button {
    margin-right: 20px;
}
</style>
`;

code.placement = `<template>
    <div class="popover-wrapper">
        <div>
            <ivue-popover class="popover" content="Top Left text" placement="top-start">
                <ivue-button>Top Left</ivue-button>
            </ivue-popover>

            <ivue-popover class="popover" content="Top Center text" placement="top">
                <ivue-button>Top Center</ivue-button>
            </ivue-popover>

            <ivue-popover class="popover" content="Top Right text" placement="top-end">
                <ivue-button>Top Right</ivue-button>
            </ivue-popover>
        </div>

        <div class="popover-flex">
            <div class="popover-left">
                <ivue-popover class="popover" content="Left Right text" placement="left-start">
                    <ivue-button>Left Top</ivue-button>
                </ivue-popover>

                <ivue-popover class="popover" content="Left Center text" placement="left">
                    <ivue-button>Left Center</ivue-button>
                </ivue-popover>

                <ivue-popover class="popover" content="Left Bottom text" placement="left-end">
                    <ivue-button>Left Bottom</ivue-button>
                </ivue-popover>
            </div>

            <div class="popover-left">
                <ivue-popover class="popover" content="Right Top text" placement="right-start">
                    <ivue-button>Right Top</ivue-button>
                </ivue-popover>

                <ivue-popover class="popover" content="Right Center text" placement="right">
                    <ivue-button>Right Center</ivue-button>
                </ivue-popover>

                <ivue-popover class="popover" content="Right Bottom text" placement="right-end">
                    <ivue-button>Right Bottom</ivue-button>
                </ivue-popover>
            </div>
        </div>

        <div>
            <ivue-popover class="popover" content="Bottom Left text" placement="bottom-start">
                <ivue-button>Bottom Left</ivue-button>
            </ivue-popover>

            <ivue-popover class="popover" content="Bottom Center text" placement="bottom">
                <ivue-button>Bottom Center</ivue-button>
            </ivue-popover>

            <ivue-popover class="popover" content="Bottom Right text" placement="bottom-end">
                <ivue-button>Bottom Right</ivue-button>
            </ivue-popover>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.popover-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin: auto;
}

.popover {
    margin: 10px;
}

.popover-left {
    display: flex;
    flex-direction: column;
}

.popover-flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>
`;

code.model = `<template>
    <ivue-popover
        v-model="visible"
        title="哆啦A梦"
        content="漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事"
    >
        <template #title>
            <div>
                <i>Custom title</i>
            </div>
        </template>
        <template #content>
            <ivue-button @click="handleClose">close</ivue-button>
        </template>

        <ivue-button class="popover-button">visible控制显示</ivue-button>
    </ivue-popover>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);

const handleClose = () => {
    visible.value = false;
};
</script>

<style scoped>
.popover-button {
    margin-right: 20px;
}
</style>
`;

code.confirm = `<template>
    <ivue-popover
        title="漫画叙述了一只来自22世纪的猫型机器人——哆啦A梦，受主人野比世修的托付，回到20世纪，借助从四维口袋里拿出来的各种未来道具，来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题，以及生活中和妈妈野比玉子、身边的小伙伴静香、胖虎、小夫发生的轻松幽默搞笑感人的故事"
        confirm
        @on-confirm="handleConfirm"
        @on-cancel="handleCancel"
    >
        <ivue-button class="popover-button">确认框</ivue-button>
    </ivue-popover>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const handleConfirm = () => {
    proxy.$message.info('确认');
};

const handleCancel = () => {
    proxy.$message.info('取消');
};
</script>

<style scoped>
.popover-button {
    margin-right: 20px;
}
</style>
`;

export default code;
