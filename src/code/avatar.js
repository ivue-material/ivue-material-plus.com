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

<style scoped>
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

<style scoped>
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

<style scoped>
.avatar {
    margin: 10px;
}
</style>
`;

code.size = `<template>
    <div>
        <ivue-avatar class="avatar" :color="color">{{ user }}</ivue-avatar>
        <ivue-button size="small" @click="handleChange">Change</ivue-button>
    </div>
</template>
<script>
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

export default {
    data() {
        return {
            user: UserList[0],
            color: ColorList[0],
        };
    },
    methods: {
        handleChange() {
            const index = UserList.indexOf(this.user);
            this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
            this.color = index < ColorList.length - 1
                ? ColorList[index + 1]
                : ColorList[0];
        },
    },
};
</script>

<style scoped>
.avatar {
    margin-right: 20px;
}
</style>
`;

export default code;
