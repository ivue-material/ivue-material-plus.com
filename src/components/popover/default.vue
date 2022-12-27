<template>
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
