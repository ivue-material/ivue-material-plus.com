<template>
  <ivue-table :data="tableData">
    <ivue-table-column type="expand">
      <template #default="props">
        <div>第{{ props.$index + 1 }}行</div>
        <div>
          哆啦A梦剧场版，是由日本漫画家藤子·F·不二雄创作的同名漫画改编的动画《哆啦A梦》的剧场版（电影版）（日语：映画ドラえもん，英语：Doraemon
          The
          Movie）系列，由东宝株式会社制作。2D剧场版自1980年开始（除2005年、2021年），固定于每年3月在日本上映（2020年、2021年因新型冠状病毒肺炎疫情分别延期至2020年8月、2022年3月上映
          [1-2] [9-10]
          ），截至2022年3月已上映41部。另有2部3D剧场版《哆啦A梦：伴我同行》
          、《哆啦A梦：伴我同行2》
        </div>

        <ivue-table :data="tableData">
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
    </ivue-table-column>
    <ivue-table-column prop="movie" label="剧场版"></ivue-table-column>
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
</script>
