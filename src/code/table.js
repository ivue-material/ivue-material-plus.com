const code = {};

code.default = `<template>
    <ivue-table :data="tableData">
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
</script>
`;

code.stripe = `<template>
    <ivue-table :data="tableData" stripe>
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
</script>
`;


code.border = `<template>
    <ivue-table :data="tableData" border>
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
</script>
`;

code.rowClassName = `<template>
    <ivue-table :data="tableData" :row-class-name="tableRowClassName">
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

const tableRowClassName = ({ row, rowIndex }) => {
    if (rowIndex === 1) {
        return 'warning';
    }

    if (row.song === '友达だから') {
        return 'primary';
    }
    return '';
};
</script>
`;

code.height = `<template>
    <ivue-table :data="tableData" height="250">
        <ivue-table-column prop="movie" label="剧场版" fixed width="250"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="800"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱" width="800"></ivue-table-column>
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
];
</script>
`;

code.fixed = `<template>
    <ivue-table :data="tableData" style="width: 100%">
        <ivue-table-column prop="index" label="序号" fixed width="100"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版" width="600"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="600"></ivue-table-column>
        <ivue-table-column prop="money" label="票房收入" width="600"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱" fixed="right" width="100"></ivue-table-column>
    </ivue-table>
</template>

<script setup>
const tableData = [
    {
        index: '1',
        movie: '哆啦A梦：大雄的恐龙',
        song: 'ポケットの中に',
        money: '320万',
        name: '大山羡代',
    },
    {
        index: '2',
        movie: '哆啦A梦：大雄的宇宙开拓史',
        song: '心をゆらして',
        money: '284万',
        name: '岩渕まこと',
    },
    {
        index: '3',
        movie: '哆啦A梦：大雄的大魔境',
        song: 'だからみんなで',
        money: '400万',
        name: '岩渕まこと',
    },
    {
        index: '4',
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        money: '380万',
        name: '大山羡代',
    },
];
</script>
`;

code.fixedHeight = `<template>
    <ivue-table :data="tableData" style="width: 100%" height="250">
        <ivue-table-column prop="index" label="序号" fixed width="100"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版" width="600"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="600"></ivue-table-column>
        <ivue-table-column prop="money" label="票房收入" width="600"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱" fixed="right" width="100"></ivue-table-column>
    </ivue-table>
</template>

<script setup>
const tableData = [
    {
        index: '1',
        movie: '哆啦A梦：大雄的恐龙',
        song: 'ポケットの中に',
        money: '320万',
        name: '大山羡代',
    },
    {
        index: '2',
        movie: '哆啦A梦：大雄的宇宙开拓史',
        song: '心をゆらして',
        money: '284万',
        name: '岩渕まこと',
    },
    {
        index: '3',
        movie: '哆啦A梦：大雄的大魔境',
        song: 'だからみんなで',
        money: '400万',
        name: '岩渕まこと',
    },
    {
        index: '4',
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        money: '380万',
        name: '大山羡代',
    },
    {
        index: '5',
        movie: '哆啦A梦：大雄的创世日记',
        song: 'さよならにさよなら',
        name: '海援队',
    },
    {
        index: '6',
        movie: '哆啦A梦：大雄与机器人王国',
        song: 'いっしょに歩こう',
        money: '480万',
        name: 'KONISHIKI',
    },
    {
        index: '7',
        movie: '哆啦A梦：新·大雄的宇宙开拓史',
        song: '大切にするよ',
        money: '380万',
        name: '柴崎幸',
    },
];
</script>
`;


code.maxHeight = `<template>
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
`;


code.multistage = `<template>
    <ivue-table :data="tableData" style="width: 100%">
        <ivue-table-column prop="index" label="序号" width="100"></ivue-table-column>
        <ivue-table-column label="多啦a梦">
            <ivue-table-column label="数据">
                <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
                <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
                <ivue-table-column prop="name" label="演唱"></ivue-table-column>
            </ivue-table-column>
            <ivue-table-column prop="money" label="票房收入"></ivue-table-column>
        </ivue-table-column>
    </ivue-table>
</template>

<script setup>
const tableData = [
    {
        index: '1',
        movie: '哆啦A梦：大雄的恐龙',
        song: 'ポケットの中に',
        money: '320万',
        name: '大山羡代',
    },
    {
        index: '2',
        movie: '哆啦A梦：大雄的宇宙开拓史',
        song: '心をゆらして',
        money: '284万',
        name: '岩渕まこと',
    },
    {
        index: '3',
        movie: '哆啦A梦：大雄的大魔境',
        song: 'だからみんなで',
        money: '400万',
        name: '岩渕まこと',
    },
    {
        index: '4',
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        money: '380万',
        name: '大山羡代',
    },
];
</script>
`;


code.highlightCurrentRow = `<template>
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
    <ivue-button class="table-button" @click="handleSetCurrent(tableData[2])">选择第二行</ivue-button>
    <ivue-button class="table-button" @click="handleClear()">清除选择</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const currentRow = ref();
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
`;


code.selection = `<template>
    <h4>
        当前选择行：
        {{ currentRow }}
    </h4>
    <ivue-table :data="tableData" @on-selection-change="handleSelectionChange" ref="table">
        <ivue-table-column type="selection" width="50"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" show-overflow-tooltip ></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <ivue-button class="table-button" @click="handleSetCurrent(tableData[2])">选择第三行</ivue-button>
    <ivue-button class="table-button" @click="handleClear()">清除选择</ivue-button>
</template>

<script setup>
import { ref } from 'vue';

const currentRow = ref([]);
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
        song: 'だからみんなでだからみんなでだからみんなでだからみんなで',
        name: '岩渕まこと',
    },
    {
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        name: '大山羡代',
    },
];

const handleSelectionChange = (value) => {
    currentRow.value = value;
};

const handleSetCurrent = (row) => {
    table.value.toggleRowSelection(row);
};

const handleClear = () => {
    table.value.clearSelection();
};
</script>

<style scoped>
.table-button {
    margin-top: 20px;
    margin-right: 20px;
}
</style>
`;

code.sortable = `<template>
    <h4>默认</h4>
    <ivue-table :data="tableData">
        <ivue-table-column prop="index" label="序号" sortable width="100"></ivue-table-column>
        <ivue-table-column prop="date" label="上映日期"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>通过 default-sort 设置默认的排序列和排序顺序</h4>
    <ivue-table :data="tableData" :default-sort="{ prop: 'index', order: 'ascending' }">
        <ivue-table-column prop="index" label="序号" sortable width="100"></ivue-table-column>
        <ivue-table-column prop="date" label="上映日期"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>通过 sort-method 自定义的排序规则</h4>
    <p>根据 date 排序</p>
    <ivue-table :data="tableData">
        <ivue-table-column prop="index" label="序号" width="100"></ivue-table-column>
        <ivue-table-column prop="date" label="上映日期" sortable :sort-method="sortMethod"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>通过 sort-by 自定义的排序规则</h4>
    <p>根据 index 排序完成后，index 相同，紧接着 date 排序</p>
    <ivue-table :data="tableData">
        <ivue-table-column prop="index" label="序号" width="100"></ivue-table-column>
        <ivue-table-column prop="date" label="上映日期" sortable :sort-by="['index', 'date']"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>sortable 为 custom 监听 on-sort-change 事件</h4>
    <p>当前列label:{{ sortChange.column && sortChange.column.label }}</p>
    <p>当前列prop:{{ sortChange.prop }}</p>
    <p>当前列排序顺序:{{ sortChange.order }}</p>
    <ivue-table :data="tableData" @on-sort-change="handleSortChange">
        <ivue-table-column prop="index" label="序号" width="100" sortable="custom"></ivue-table-column>
        <ivue-table-column prop="date" label="上映日期"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>formatter 格式化列数据</h4>
    <ivue-table :data="tableData">
        <ivue-table-column prop="index" label="序号" width="100" :formatter="formatter"></ivue-table-column>
        <ivue-table-column prop="date" label="上映日期"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
</template>

<script setup>
import { ref } from 'vue';

const sortChange = ref({
    column: {},
    prop: '',
    order: '',
});

const tableData = [
    {
        index: '3',
        date: '1980-3-15',
        movie: '哆啦A梦：大雄的恐龙',
        song: 'ポケットの中に',
        name: '大山羡代',
    },
    {
        index: '2',
        date: '1988-3-12',
        movie: '哆啦A梦：大雄的宇宙开拓史',
        song: '心をゆらして',
        name: '岩渕まこと',
    },
    {
        index: '1',
        date: '1982-3-15',
        movie: '哆啦A梦：大雄的大魔境',
        song: 'だからみんなで',
        name: '岩渕まこと',
    },
    {
        index: '4',
        date: '1994-3-12',
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        name: '大山羡代',
    },
    {
        index: '5',
        date: '2013-6-23',
        movie: '哆啦A梦：新·大雄的宇宙开拓史',
        song: '大切にするよ',
        name: '柴崎幸',
    },
    {
        index: '5',
        date: '2010-2-12',
        movie: '哆啦A梦：大雄与机器人王国',
        song: 'いっしょに歩こう',
        name: 'KONISHIKI',
    },
];

const sortMethod = (a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
};

const handleSortChange = ({ column, prop, order }) => {
    sortChange.value = { column, prop, order };
};

const formatter = (row, column, value, $index) => {
    return $index;
};
</script>
`;

code.filters = `<template>
    <h4>默认</h4>
    <ivue-table :data="tableData" ref="table">
        <ivue-table-column
            prop="movie"
            label="剧场版"
            column-key="movie"
            :filters="[
              { text: '哆啦A梦：大雄的恐龙', value: '哆啦A梦：大雄的恐龙' },
              { text: '哆啦A梦：大雄的宇宙开拓史', value: '哆啦A梦：大雄的宇宙开拓史' },
              { text: '哆啦A梦：大雄的大魔境', value: '哆啦A梦：大雄的大魔境' },
              { text: '哆啦A梦：大雄与龙骑士', value: '哆啦A梦：大雄与龙骑士' },
            ]"
            :filter-method="filterHandler"
        ></ivue-table-column>
        <ivue-table-column
            prop="song"
            label="歌曲名"
            column-key="song"
            :filters="[
              { text: 'ポケットの中に', value: 'ポケットの中に' },
              { text: '心をゆらして', value: '心をゆらして' },
              { text: 'だからみんなで', value: 'だからみんなで' },
              { text: '友达だから', value: '友达だから' },
            ]"
            :filter-method="filterHandler"
        ></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <ivue-button class="table-button" @click="handleResetFilter(tableData[2])">重置movie过滤</ivue-button>
    <ivue-button class="table-button" @click="handleResetFilterAll()">重置所有过滤</ivue-button>

    <h4>选中的数据过滤项，过滤弹出框的定位</h4>
    <ivue-table :data="tableData">
        <ivue-table-column
            prop="movie"
            label="剧场版"
            :filtered-value="['哆啦A梦：大雄的恐龙']"
            :filter-multiple="false"
            filter-placement="right"
            :filters="[
              { text: '哆啦A梦：大雄的恐龙', value: '哆啦A梦：大雄的恐龙' },
              { text: '哆啦A梦：大雄的宇宙开拓史', value: '哆啦A梦：大雄的宇宙开拓史' },
              { text: '哆啦A梦：大雄的大魔境', value: '哆啦A梦：大雄的大魔境' },
              { text: '哆啦A梦：大雄与龙骑士', value: '哆啦A梦：大雄与龙骑士' },
            ]"
            :filter-method="filterHandler"
        ></ivue-table-column>
        <ivue-table-column
            prop="song"
            label="歌曲名"
            :filters="[
              { text: 'ポケットの中に', value: 'ポケットの中に' },
              { text: '心をゆらして', value: '心をゆらして' },
              { text: 'だからみんなで', value: 'だからみんなで' },
              { text: '友达だから', value: '友达だから' },
            ]"
            :filter-method="filterHandler"
        ></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>tooltip点击阻止当前事件在捕获和冒泡阶段的进一步传播</h4>
    <ivue-table :data="tableData" tooltip-stop>
        <ivue-table-column
            prop="movie"
            label="剧场版"
            :filters="[
              { text: '哆啦A梦：大雄的恐龙', value: '哆啦A梦：大雄的恐龙' },
              { text: '哆啦A梦：大雄的宇宙开拓史', value: '哆啦A梦：大雄的宇宙开拓史' },
              { text: '哆啦A梦：大雄的大魔境', value: '哆啦A梦：大雄的大魔境' },
              { text: '哆啦A梦：大雄与龙骑士', value: '哆啦A梦：大雄与龙骑士' },
            ]"
            :filter-method="filterHandler"
        ></ivue-table-column>
        <ivue-table-column
            prop="song"
            label="歌曲名"
            :filters="[
              { text: 'ポケットの中に', value: 'ポケットの中に' },
              { text: '心をゆらして', value: '心をゆらして' },
              { text: 'だからみんなで', value: 'だからみんなで' },
              { text: '友达だから', value: '友达だから' },
            ]"
            :filter-method="filterHandler"
        ></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
</template>

<script setup>
import { ref } from 'vue';

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

const filterHandler = (value, row, column) => {
    const property = column['property'];

    return row[property] === value;
};

const handleResetFilter = () => {
    table.value.clearFilter(['movie']);
};

const handleResetFilterAll = () => {
    table.value.clearFilter();
};
</script>

<style scoped>
.table-button {
    margin-top: 20px;
    margin-right: 20px;
}
</style>
`;

code.slotsColumn = `
<template>
    <ivue-table :data="tableData">
        <ivue-table-column prop="movie" label="剧场版" width="250">
            <template #default="scope">
                <div>{{ \`剧场版-\${scope.row.movie}\` }}</div>
                <div>当前hover下标：{{ scope.store.states.hoverRow }}</div>
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
`;


code.slotsHeader = `<template>
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
`;

code.expand = `<template>
    <ivue-table :data="tableData">
        <ivue-table-column type="expand">
            <template #default="props">
                <div>第{{ props.$index + 1 }}行</div>
                <div>哆啦A梦剧场版，是由日本漫画家藤子·F·不二雄创作的同名漫画改编的动画《哆啦A梦》的剧场版（电影版）（日语：映画ドラえもん，英语：Doraemon The Movie）系列，由东宝株式会社制作。2D剧场版自1980年开始（除2005年、2021年），固定于每年3月在日本上映（2020年、2021年因新型冠状病毒肺炎疫情分别延期至2020年8月、2022年3月上映 [1-2] [9-10] ），截至2022年3月已上映41部。另有2部3D剧场版《哆啦A梦：伴我同行》 、《哆啦A梦：伴我同行2》</div>

                <ivue-table :data="tableData">
                    <ivue-table-column prop="movie" label="剧场版" width="250"></ivue-table-column>
                    <ivue-table-column prop="song" label="歌曲名" width="180"></ivue-table-column>
                    <ivue-table-column prop="name" label="演唱"></ivue-table-column>
                </ivue-table>
            </template>
        </ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
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
</script>
`;


code.tree = `<template>
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
`;

code.showSummary = `<template>
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
            sums[index] = \`$ \${values.reduce((prev, curr) => {
                const value = Number(curr);
                if (!Number.isNaN(value)) {
                    return prev + curr;
                } else {
                    return prev;
                }
            }, 0)}\`;
        } else {
            sums[index] = '不统计';
        }
    });

    return sums;
};
</script>
`;

code.spanMethod = `<template>
    <h4>合并行数组</h4>
    <ivue-table :data="tableData" :span-method="arraySpanMethod">
        <ivue-table-column prop="movie" label="剧场版" width="250"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名" width="180"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>合并行对象</h4>
    <ivue-table :data="tableData" :span-method="objectSpanMethod">
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

const arraySpanMethod = ({ row, column, rowIndex, columnIndex }) => {
    if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
            return [1, 2];
        } else if (columnIndex === 1) {
            return [0, 0];
        }
    }
};

const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
    if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
            return {
                rowspan: 2,
                colspan: 1,
            };
        } else {
            return {
                rowspan: 0,
                colspan: 0,
            };
        }
    }
};
</script>
`;

code.index = `<template>
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
`;

code.styles = `<template>
    <h4>自定义列样式</h4>
    <ivue-table :data="tableData" :row-style="rowStyle" :row-class-name="rowClassName">
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>自定义表头单元格样式</h4>
    <ivue-table
        :data="tableData"
        :header-cell-style="headerCellStyle"
        :header-cell-class-name="headerCellClassName"
    >
        <ivue-table-column type="index"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>自定义表头单元格样式</h4>
    <ivue-table
        :data="tableData"
        :header-row-style="headerRowStyle"
        :header-row-class-name="headerRowClassName"
    >
        <ivue-table-column prop="movie" label="剧场版">
            <ivue-table-column prop="song" label="歌曲名">
                <ivue-table-column prop="date" label="上映时间"></ivue-table-column>
            </ivue-table-column>
            <ivue-table-column prop="name" label="演唱"></ivue-table-column>
        </ivue-table-column>
    </ivue-table>
    <h4>自定义单元格样式</h4>
    <ivue-table :data="tableData" :cell-style="cellStyle" :cell-class-name="cellClassName">
        <ivue-table-column type="index"></ivue-table-column>
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
</template>

<script setup>
const tableData = [
    {
        index: '3',
        date: '1980-3-15',
        movie: '哆啦A梦：大雄的恐龙',
        song: 'ポケットの中に',
        name: '大山羡代',
    },
    {
        index: '2',
        date: '1988-3-12',
        movie: '哆啦A梦：大雄的宇宙开拓史',
        song: '心をゆらして',
        name: '岩渕まこと',
    },
    {
        index: '1',
        date: '1982-3-15',
        movie: '哆啦A梦：大雄的大魔境',
        song: 'だからみんなで',
        name: '岩渕まこと',
    },
    {
        index: '4',
        date: '1994-3-12',
        movie: '哆啦A梦：大雄与龙骑士',
        song: '友达だから',
        name: '大山羡代',
    },
    {
        index: '5',
        date: '2013-6-23',
        movie: '哆啦A梦：新·大雄的宇宙开拓史',
        song: '大切にするよ',
        name: '柴崎幸',
    },
    {
        index: '5',
        date: '2010-2-12',
        movie: '哆啦A梦：大雄与机器人王国',
        song: 'いっしょに歩こう',
        name: 'KONISHIKI',
    },
];

const rowStyle = ({ row, rowIndex }) => {
    if (rowIndex === 0) {
        return {
            color: '#5B8EFF',
        };
    }

    if (row.song === '友达だから') {
        return {
            color: '#27E2B2',
        };
    }
};

const rowClassName = ({ row, rowIndex }) => {
    if (rowIndex === 1) {
        return 'warning--text';
    }

    if (row.movie === '哆啦A梦：大雄的大魔境') {
        return 'indigo--text';
    }
};

const headerCellStyle = ({ rowIndex, columnIndex, row, column }) => {
    if (columnIndex === 1) {
        return {
            color: '#5B8EFF',
        };
    }

    if (column.property === 'song') {
        return {
            color: '#27E2B2',
        };
    }
};

const headerCellClassName = ({ rowIndex, columnIndex, row, column }) => {
    if (columnIndex === 0) {
        return 'warning--text';
    }

    if (column.property === 'name') {
        return 'indigo--text';
    }
};

const headerRowStyle = ({ rowIndex }) => {
    if (rowIndex === 0) {
        return {
            color: '#5B8EFF',
        };
    }

    if (rowIndex === 1) {
        return {
            color: '#27E2B2',
        };
    }
};

const headerRowClassName = ({ rowIndex }) => {
    if (rowIndex === 2) {
        return 'indigo--text';
    }
};

const cellStyle = ({ rowIndex, columnIndex, row, column }) => {
    if (rowIndex === 1) {
        return {
            color: '#5B8EFF',
        };
    }

    if (column.property === 'song') {
        return {
            color: '#27E2B2',
        };
    }
};

const cellClassName = ({ rowIndex, columnIndex, row, column }) => {
    if (rowIndex === 0) {
        return 'warning--text';
    }

    if (rowIndex === 3) {
        return 'teal--text';
    }

    if (rowIndex === 5) {
        return 'indigo--text';
    }
};
</script>
`;

code.tableLayout = `<template>
    <h4>fixed</h4>
    <ivue-table :data="tableData" table-layout="fixed">
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
        <ivue-table-column prop="name" label="演唱"></ivue-table-column>
    </ivue-table>
    <h4>auto</h4>
    <ivue-table :data="tableData" table-layout="auto">
        <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
        <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
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
</script>
`;


export default code;
