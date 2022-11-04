<template>
    <ivue-list>
        <ivue-list-item v-for="item in items" :key="item.title">
            <ivue-icon :class="item.icon ? 'icon-color' : ''">star</ivue-icon>
            <p class="title">{{item.title}}</p>
            <ivue-icon>
                <img class="img" :src="item.avatar" />
            </ivue-icon>
        </ivue-list-item>
    </ivue-list>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    icon: true,
                    title: 'Jason Oner',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                },
                {
                    title: 'Travis Howard',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                },
                {
                    title: 'Ali Connors',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                },
                {
                    title: 'Cindy Baker',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                },
            ],
        };
    },
};
</script>

<style scoped>
.img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

.icon-color {
    color: #ff9900;
}

.title {
    flex: 1;
    padding-left: 10px;
}
</style>
