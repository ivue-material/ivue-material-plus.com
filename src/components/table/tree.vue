<template>
    <h4>树形数据</h4>
    <ivue-table :data="tableData1" row-key="index">
        <ivue-table-column prop="movie" label="剧场版" default-expand-all></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>懒加载</h4>
    <ivue-table :data="tableData2" row-key="index" lazy :load="load">
        <ivue-table-column prop="movie" label="剧场版" default-expand-all></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>自定义 tree-props</h4>
    <ivue-table
        :data="tableData3"
        row-key="index"
        lazy
        :load="load"
        :tree-props="{ children: 'list', hasChildren: 'loading' }"
    >
        <ivue-table-column prop="movie" label="剧场版" default-expand-all></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
</template>

<script setup>
const tableData1 = [
    {
        index: '1',
        movie: '哆啦A梦：大雄的恐龙',
        song: 'ポケットの中に',
        name: '大山羡代',
    },
    {
        index: '2',
        movie: '哆啦A梦：大雄的宇宙开拓史',
        song: '心をゆらして',
        name: '岩渕まこと',
        children: [
            {
                movie: '哆啦A梦：大雄的创世日记',
                song: 'さよならにさよなら',
                name: '海援队',
            },
            {
                movie: '哆啦A梦：大雄与机器人王国',
                song: 'いっしょに歩こう',
                name: 'KONISHIKI',
            },
            {
                movie: '哆啦A梦：新·大雄的宇宙开拓史',
                song: '大切にするよ',
                name: '柴崎幸',
            },
        ],
    },
    {
        index: '3',
        movie: '哆啦A梦：大雄的大魔境',
        song: 'だからみんなで',
        name: '岩渕まこと',
    },
    {
        index: '4',
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        name: '大山羡代',
    },
];

const tableData2 = [
    {
        index: '1',
        movie: '哆啦A梦：大雄的恐龙',
        song: 'ポケットの中に',
        name: '大山羡代',
    },
    {
        index: '2',
        movie: '哆啦A梦：大雄的宇宙开拓史',
        song: '心をゆらして',
        name: '岩渕まこと',
        hasChildren: true,
    },
    {
        index: '3',
        movie: '哆啦A梦：大雄的大魔境',
        song: 'だからみんなで',
        name: '岩渕まこと',
    },
    {
        index: '4',
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        name: '大山羡代',
    },
];

const tableData3 = [
    {
        index: '1',
        movie: '哆啦A梦：大雄的恐龙',
        song: 'ポケットの中に',
        name: '大山羡代',
    },
    {
        index: '2',
        movie: '哆啦A梦：大雄的宇宙开拓史',
        song: '心をゆらして',
        name: '岩渕まこと',
        loading: true,
    },
    {
        index: '3',
        movie: '哆啦A梦：大雄的大魔境',
        song: 'だからみんなで',
        name: '岩渕まこと',
        list: [
            {
                movie: '哆啦A梦：大雄的创世日记',
                song: 'さよならにさよなら',
                name: '海援队',
            },
        ],
    },
    {
        index: '4',
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        name: '大山羡代',
    },
];

const load = (row, treeNode, resolve) => {
    setTimeout(() => {
        resolve([
            {
                movie: '哆啦A梦：大雄与机器人王国',
                song: 'いっしょに歩こう',
                name: 'KONISHIKI',
            },
            {
                movie: '哆啦A梦：新·大雄的宇宙开拓史',
                song: '大切にするよ',
                name: '柴崎幸',
            },
        ]);
    }, 1000);
};
</script>
