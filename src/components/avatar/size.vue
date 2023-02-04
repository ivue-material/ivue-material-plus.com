<template>
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
      this.user =
        index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
      this.color =
        index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
    },
  },
};
</script>

<style scoped>
.avatar {
  margin-right: 20px;
}
</style>
