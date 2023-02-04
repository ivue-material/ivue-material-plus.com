<template>
  <h4>默认</h4>
  <ivue-table :data="tableData" ref="table">
    <ivue-table-column
      prop="movie"
      label="剧场版"
      column-key="movie"
      :filters="[
        { text: '哆啦A梦：大雄的恐龙', value: '哆啦A梦：大雄的恐龙' },
        {
          text: '哆啦A梦：大雄的宇宙开拓史',
          value: '哆啦A梦：大雄的宇宙开拓史',
        },
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
  <ivue-button class="table-button" @click="handleResetFilter(tableData[2])"
    >重置movie过滤</ivue-button
  >
  <ivue-button class="table-button" @click="handleResetFilterAll()"
    >重置所有过滤</ivue-button
  >

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
        {
          text: '哆啦A梦：大雄的宇宙开拓史',
          value: '哆啦A梦：大雄的宇宙开拓史',
        },
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
        {
          text: '哆啦A梦：大雄的宇宙开拓史',
          value: '哆啦A梦：大雄的宇宙开拓史',
        },
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
