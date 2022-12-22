<template>
    <h4>默认</h4>
    <ivue-table :data="tableData" show-summary>
        <ivue-table-column prop="movie" label="剧场版" width="250"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="180"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
        <ivue-table-column prop="amount" label="票房"></ivue-table-column>
    </ivue-table>
    <h4>自定义合并逻辑</h4>
    <ivue-table :data="tableData" show-summary :summary-method="summaryMethod">
        <ivue-table-column prop="movie" label="剧场版" width="250"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="180"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
        <ivue-table-column prop="amount" label="票房"></ivue-table-column>
    </ivue-table>
</template>

<script setup>
const tableData = [
    {
        movie: '哆啦A梦：大雄的恐龙',
        song: 'ポケットの中に',
        name: '大山羡代',
        amount: 300,
    },
    {
        movie: '哆啦A梦：大雄的宇宙开拓史',
        song: '心をゆらして',
        name: '岩渕まこと',
        amount: 200,
    },
    {
        movie: '哆啦A梦：大雄的大魔境',
        song: 'だからみんなで',
        name: '岩渕まこと',
        amount: 230,
    },
    {
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        name: '大山羡代',
        amount: 310,
    },
];

const summaryMethod = (param) => {
    const { columns, data } = param;
    const sums = [];

    columns.forEach((column, index) => {
        if (index === 0) {
            sums[index] = '票房记录';

            return;
        }

        const values = data.map((item) => Number(item[column.property]));

        if (!values.every((value) => Number.isNaN(value))) {
            sums[index] = `$ ${values.reduce((prev, curr) => {
                const value = Number(curr);
                if (!Number.isNaN(value)) {
                    return prev + curr;
                } else {
                    return prev;
                }
            }, 0)}`;
        } else {
            sums[index] = '不统计';
        }
    });

    return sums;
};
</script>
