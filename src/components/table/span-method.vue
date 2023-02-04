<template>
  <h4>合并行数组</h4>
  <ivue-table :data="tableData" :span-method="arraySpanMethod">
    <ivue-table-column
      prop="movie"
      label="剧场版"
      width="250"
    ></ivue-table-column>
    <ivue-table-column
      prop="song"
      label="歌曲名"
      width="180"
    ></ivue-table-column>
    <ivue-table-column prop="name" label="演唱"></ivue-table-column>
  </ivue-table>
  <h4>合并行对象</h4>
  <ivue-table :data="tableData" :span-method="objectSpanMethod">
    <ivue-table-column
      prop="movie"
      label="剧场版"
      width="250"
    ></ivue-table-column>
    <ivue-table-column
      prop="song"
      label="歌曲名"
      width="180"
    ></ivue-table-column>
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
