const code = {};

code.default = `<template>
    <div>
        <h3>圆形</h3>
        <ivue-avatar class="avatar" icon="face"></ivue-avatar>
        <ivue-avatar class="avatar" icon="face" size="50"></ivue-avatar>
        <h3>方形</h3>
        <ivue-avatar class="avatar" icon="face" shape="square"></ivue-avatar>
        <ivue-avatar class="avatar" icon="face" size="50" shape="square"></ivue-avatar>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.avatar {
    margin: 10px;
}
</style>
`;

code.type = `<template>
    <div>
        <ivue-avatar class="avatar" icon="sentiment_very_satisfied" />
        <ivue-avatar class="avatar">A</ivue-avatar>
        <ivue-avatar class="avatar">name</ivue-avatar>
        <ivue-avatar class="avatar" src="https://github.com/qq282126990/ivue-plus.com/blob/main/src/static/logo.png?raw=true"></ivue-avatar>
        <ivue-avatar class="avatar" color="#F41D74">#F41D74</ivue-avatar>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.avatar{
  margin: 0 10px;
}
</style>
`;

code.badge = `<template>
    <div>
        <ivue-badge :count="1" class="avatar">
            <ivue-avatar shape="square" icon="face"></ivue-avatar>
        </ivue-badge>
        <ivue-badge dot class="avatar">
            <ivue-avatar shape="square" icon="face"></ivue-avatar>
        </ivue-badge>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.avatar {
    margin: 10px;
}
</style>
`;

export default code;
