<template>
    <h4>默认</h4>
    <ivue-table :data="tableData">
        <ivue-table-column type="index"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版" width="250"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="180"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>index 传入数字将作为索引的起始值</h4>
    <ivue-table :data="tableData">
        <ivue-table-column type="index" :index="2"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版" width="250"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="180"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>index 传入一个方法</h4>
    <ivue-table :data="tableData">
        <ivue-table-column type="index" :index="indexMethod"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版" width="250"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="180"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
</template>

<script setup>
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

const indexMethod = (index) => {
    return index * 2;
};
</script>
