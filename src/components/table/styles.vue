<template>
  <h4>自定义列样式</h4>
  <ivue-table
    :data="tableData"
    :row-style="rowStyle"
    :row-class-name="rowClassName"
  >
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
  <ivue-table
    :data="tableData"
    :cell-style="cellStyle"
    :cell-class-name="cellClassName"
  >
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
