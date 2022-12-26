<template>
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
