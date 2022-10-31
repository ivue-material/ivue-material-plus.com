const code = {};

code.import = '';

code.default = `
<template>
    <div>
        <ivue-card style="width:100%" :padding="50" :radius="10">
            <template #title>title</template>
            <template #extra>extra</template>
            212112
            <!-- <p class="rate-demo" v-for="item in randomMovieList">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>
                    <Rate disabled v-model="item.rate" />
                    {{ item.rate }}
                </span>
            </p>-->
        </ivue-card>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
`;

code.explanation = `<template>
    <div>
        <ivue-card style="width:100%" title="标题">
            212112
            <!-- <p class="rate-demo" v-for="item in randomMovieList">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>
                    <Rate disabled v-model="item.rate" />
                    {{ item.rate }}
                </span>
            </p>-->
        </ivue-card>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
`;

code.notborder = `<template>
<div>
    <ivue-card :border="false">
        <template #title>No border title</template>
        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type.</p>
    </ivue-card>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
`;

code.umbra = `<template>
<div>
    <ivue-card disHover>
        <template #title>No border title</template>
        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type.</p>
    </ivue-card>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
`;

code.simple = `<template>
<div>
    <ivue-card padding="1rem" to="/count-down">
        <div style="text-align:center">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
    </ivue-card>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
`;
export default code;
