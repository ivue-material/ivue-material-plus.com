<template>
    <ivue-table :data="tableData" max-height="300">
        <ivue-table-column prop="movie" label="剧场版" width="250"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="180"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
        <ivue-table-column fixed="right" label="Operations" width="120">
            <template #default="scope">
                <ivue-button @click="handleDeleteRow(scope.$index)">删除</ivue-button>
            </template>
        </ivue-table-column>
    </ivue-table>
    <ivue-button class="ivue-table-button" @click="handleAdd">添加数据</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([
    {
        movie: '哆啦A梦：大雄的恐龙',
        song: 'ポケットの中に',
        name: '大山羡代',
    },
    {
        movie: '哆啦A梦：大雄的宇宙开拓史',
        song: '心をゆらして',
        name: '岩渕まこと',
    },
    {
        movie: '哆啦A梦：大雄的大魔境',
        song: 'だからみんなで',
        name: '岩渕まこと',
    },
    {
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        name: '大山羡代',
    },
]);

const handleAdd = () => {
    tableData.value.push({
        movie: '哆啦A梦：大雄与风之使者',
        song: 'またあえる日まで',
        name: 'ゆず',
    });
};

const handleDeleteRow = (index) => {
    tableData.value.splice(index, 1);
};
</script>

<style scoped>
.ivue-table-button {
    width: 100%;
    margin-top: 20px;
}
</style>
