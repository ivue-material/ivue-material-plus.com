<template>
  <h4>默认</h4>
  <ivue-table :data="tableData">
    <ivue-table-column
      prop="index"
      label="序号"
      sortable
      width="100"
    ></ivue-table-column>
    <ivue-table-column prop="date" label="上映日期"></ivue-table-column>
    <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
    <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
    <ivue-table-column prop="name" label="演唱"></ivue-table-column>
  </ivue-table>
  <h4>通过 default-sort 设置默认的排序列和排序顺序</h4>
  <ivue-table
    :data="tableData"
    :default-sort="{ prop: 'index', order: 'ascending' }"
  >
    <ivue-table-column
      prop="index"
      label="序号"
      sortable
      width="100"
    ></ivue-table-column>
    <ivue-table-column prop="date" label="上映日期"></ivue-table-column>
    <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
    <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
    <ivue-table-column prop="name" label="演唱"></ivue-table-column>
  </ivue-table>
  <h4>通过 sort-method 自定义的排序规则</h4>
  <p>根据 date 排序</p>
  <ivue-table :data="tableData">
    <ivue-table-column
      prop="index"
      label="序号"
      width="100"
    ></ivue-table-column>
    <ivue-table-column
      prop="date"
      label="上映日期"
      sortable
      :sort-method="sortMethod"
    ></ivue-table-column>
    <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
    <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
    <ivue-table-column prop="name" label="演唱"></ivue-table-column>
  </ivue-table>
  <h4>通过 sort-by 自定义的排序规则</h4>
  <p>根据 index 排序完成后，index 相同，紧接着 date 排序</p>
  <ivue-table :data="tableData">
    <ivue-table-column
      prop="index"
      label="序号"
      width="100"
    ></ivue-table-column>
    <ivue-table-column
      prop="date"
      label="上映日期"
      sortable
      :sort-by="['index', 'date']"
    ></ivue-table-column>
    <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
    <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
    <ivue-table-column prop="name" label="演唱"></ivue-table-column>
  </ivue-table>
  <h4>sortable 为 custom 监听 on-sort-change 事件</h4>
  <p>当前列label:{{ sortChange.column && sortChange.column.label }}</p>
  <p>当前列prop:{{ sortChange.prop }}</p>
  <p>当前列排序顺序:{{ sortChange.order }}</p>
  <ivue-table :data="tableData" @on-sort-change="handleSortChange">
    <ivue-table-column
      prop="index"
      label="序号"
      width="100"
      sortable="custom"
    ></ivue-table-column>
    <ivue-table-column prop="date" label="上映日期"></ivue-table-column>
    <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
    <ivue-table-column prop="song" label="歌曲名"></ivue-table-column>
    <ivue-table-column prop="name" label="演唱"></ivue-table-column>
  </ivue-table>
  <h4>formatter 格式化列数据</h4>
  <ivue-table :data="tableData">
    <ivue-table-column
      prop="index"
      label="序号"
      width="100"
      :formatter="formatter"
    ></ivue-table-column>
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
