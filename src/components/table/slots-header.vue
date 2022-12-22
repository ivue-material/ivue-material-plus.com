<template>
    <ivue-table :data="tableData">
        <ivue-table-column prop="movie" label="剧场版" width="250">
            <template #header>
                <ivue-input placeholder="请输入"></ivue-input>
            </template>
        </ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="180"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
        <ivue-table-column>
            <template #default>
                <ivue-button>详情</ivue-button>
            </template>
        </ivue-table-column>
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
</script>
