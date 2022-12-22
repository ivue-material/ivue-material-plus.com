<template>
    <h4>
        当前选择行：
        {{ currentRow }}
    </h4>
    <ivue-table
        :data="tableData"
        highlight-current-row
        @on-current-change="handleCurrentChange"
        ref="table"
    >
        <ivue-table-column type="index" width="50"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <ivue-button class="table-button" @click="handleSetCurrent(tableData[2])">选择第三行</ivue-button>
    <ivue-button class="table-button" @click="handleClear()">清除选择</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const currentRow = ref({});
const table = ref();

const tableData = [
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
];

const handleCurrentChange = (value) => {
    currentRow.value = value;
};

const handleSetCurrent = (row) => {
    table.value.setCurrentRow(row);
};

const handleClear = () => {
    table.value.setCurrentRow();
};
</script>

<style scoped>
.table-button {
    margin-top: 20px;
    margin-right: 20px;
}
</style>
