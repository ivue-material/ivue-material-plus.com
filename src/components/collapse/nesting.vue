<template>
    <ivue-collapse v-model="value1">
        <ivue-collapse-panel name="1">
            <template #title>藤子·F·不二雄</template>

            <template #content>
                <span>藤本弘曾长期与安孫子素雄（笔名藤子不二雄Ⓐ）合作，兩人相识於高冈市立定塚小学校，并一起绘画漫画，投稿到报刊中以藤子不二雄笔名創作。後兩人於1987年正式分拆筆名，其中藤本弘稱為「藤子不二雄Ⓕ」，F即其本名姓氏開頭首字母，1989年2月，經過藤本友人石之森章太郎先生的建議，將筆名改為「藤子·F·不二雄」。目前藤子·F·不二雄的作品版權管理由藤子·F·不二雄創作株式會社負責</span>

                <ivue-collapse v-model="value2">
                    <ivue-collapse-panel name="1">
                        <template #title>源静香</template>

                        <template #content>
                            <span>通称静香。大雄的同学兼朋友，成年后因认可大雄而与之结为连理（后生下儿子雄助）。读书用功、性情温和、爱好和平。独立自主，不喜欢被女孩的身份束缚。有点洁癖（一般一天要洗三次澡，且经常被大雄有意无意看到），而且拉小提琴的琴声甚至比胖虎的歌还具有破坏力（最初设定并非如此）</span>
                        </template>
                    </ivue-collapse-panel>
                    <ivue-collapse-panel name="2">
                        <template #title>骨川小夫</template>

                        <template #content>
                            <span>通称小夫。家境富裕、笃信科学，喜爱艺术和洋货。喜好卖弄炫耀、耍小聪明、非常自恋，经常帮胖虎欺负大雄，但自己也常会被胖虎欺负。出于对父亲和表哥的崇拜，涉猎许多偏门知识。理性而现实，危机意识强，对于风险高的事易打退堂鼓</span>
                        </template>
                    </ivue-collapse-panel>
                </ivue-collapse>
            </template>
        </ivue-collapse-panel>
        <ivue-collapse-panel name="2">
            <template #title>哆啦A梦</template>

            <template #content>
                <span>主角——野比大雄是家中独子，住在日本东京都练马区月见台芒原（虚构的地名）的小学生（依照原作所刊载的杂志不同，年级也随之不同，单行本里基本上是四年级[7]；日本电视台版与大山版动画前期[8]也是四年级，而大山版后期和水田版动画则是设定五年级）。他和来自未来22世纪[注 6]机器猫哆啦A梦共同生活</span>
            </template>
        </ivue-collapse-panel>
        <ivue-collapse-panel name="3">
            <template #title>野比大雄</template>

            <template #content>
                <span>根据部分漫画所载，大雄于8月7日出生[7]，住所在日本东京都练马区月见台铃木原道，但时代虽然改变，却一直以居于东京小学生的身份出现，永远都是十岁（在漫画中，一直都是小学四年级生，在大山版动画早期是四年级生（而且常因“胖虎、狗跟水沟”而受苦），中后期与水田版动画变成五年级生），为家中独生子，与父母及多啦A梦同住</span>
            </template>
        </ivue-collapse-panel>
    </ivue-collapse>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('1');
const value2 = ref('');
</script>
