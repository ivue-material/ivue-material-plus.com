<template>
  <ivue-table :data="tableData" style="width: 100%" height="250">
    <ivue-table-column
      prop="index"
      label="序号"
      fixed
      width="100"
    ></ivue-table-column>
    <ivue-table-column
      prop="movie"
      label="剧场版"
      width="600"
    ></ivue-table-column>
    <ivue-table-column
      prop="song"
      label="歌曲名"
      width="600"
    ></ivue-table-column>
    <ivue-table-column
      prop="money"
      label="票房收入"
      width="600"
    ></ivue-table-column>
    <ivue-table-column
      prop="name"
      label="演唱"
      fixed="right"
      width="100"
    ></ivue-table-column>
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
