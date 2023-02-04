<template>
  <ivue-table :data="tableData" height="250">
    <ivue-table-column
      prop="movie"
      label="剧场版"
      fixed
      width="250"
    ></ivue-table-column>
    <ivue-table-column
      prop="song"
      label="歌曲名"
      width="800"
    ></ivue-table-column>
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
