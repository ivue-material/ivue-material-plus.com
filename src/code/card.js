const code = {};

code.import = '';

code.default = `<template>
    <div>
        <ivue-card>
            <template #title>title</template>
            <template #extra>extra</template>
            Content of card
            Content of card
            Content of card
        </ivue-card>
    </div>
</template>
`;

code.notBorder = `<template>
    <div class="card">
        <ivue-card :border="false">
            <template #title>No border title</template>
            <p>
                Content of card
                Content of card
                Content of card
            </p>
        </ivue-card>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
    background-color: #ccc;
    padding: 20px;
}
</style>
`;

code.umbra = `<template>
    <div class="card">
        <ivue-card class="dis-hover" disHover>
            <template #title>The standard card</template>
            <p>
                Content of card
                Content of card
                Content of card
            </p>
        </ivue-card>
        <ivue-card class="no-dis-hover">
            <template #title>Disable card with hover shadows</template>
            <p>
                Content of card
                Content of card
                Content of card
            </p>
        </ivue-card>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
    display: flex;
    justify-content: center;
}

.dis-hover {
    margin: 0 20px;
}

.not-dis-hover {
    margin: 0 20px;
}
</style>
`;

code.shadow = `<template>
    <div class="card">
        <ivue-card class="card-content" shadow :border="false">
            <template #title>shadow title</template>
            <p>
                Content of card
                Content of card
                Content of card
            </p>
        </ivue-card>

        <ivue-card class="card-content" :shadow="false" :border="false">
            <template #title>shadow title</template>
            <p>
                Content of card
                Content of card
                Content of card
            </p>
        </ivue-card>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
    display: flex;
    justify-content: center;
    background-color: #ccc;
    padding: 20px;
}

.card-content {
    margin: 20px;
}
</style>
`;

code.simple = `<template>
<div class="card">
    <ivue-card>
        Content of card
        Content of card
        Content of card
    </ivue-card>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
    padding: 20px;
}
</style>
`;

code.padding = `<template>
    <div class="card">
        <ivue-card :padding="50" :radius="10" :padding-styles-linkage="false" :title-padding="30">
            <template #title>title</template>
            Content of card
            Content of card
            Content of card
        </ivue-card>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
    padding: 20px;
}
</style>
`;

export default code;
