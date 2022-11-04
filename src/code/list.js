const code = {};

code.default = `<template>
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
`;

code.combination = `<template>
    <ivue-list>
        <ivue-list-item v-for="item in items" :key="item.title">
            <ivue-icon>
                <img class="img" :src="item.avatar" />
            </ivue-icon>
            <div class="ivue-list-item-text">
                <span>Ali Connors</span>
                <span>Brunch this weekend?</span>
                <p>I'll be in your neighborhood doing errands this week. Do you want to meet?I'll be in your neighborhood doing errands this week. Do you want to meet?I'll be in your neighborhood doing errands this week. Do you want to meet?I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
            </div>
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

.ivue-list-item-text {
    padding-left: 10px;
    font-size: 12px;
}
</style>
`;

code.type = `<template>
    <ivue-list>
        <ivue-list-item>Plain Text</ivue-list-item>
        <ivue-list-item ripple-disabled>Plain Text RippleDisabled</ivue-list-item>
        <ivue-list-item type="button">button</ivue-list-item>
        <ivue-list-item type="a" href="https://lovevuerk.com/">a link</ivue-list-item>
    </ivue-list>
</template>

<script>
export default {
    data() {
        return {
            expandNews: false,
            expandSingle: false,
        };
    },
};
</script>

<style>
.ivue-list .ivue-list-item-container {
    margin: 0;
}
</style>
`;

code.expand = `<template>
    <div>
        <ivue-list ivue-expand-single>
            <ivue-list-item ivue-expand>
                <span class="ivue-list-item-text">News</span>
                <template #ivueExpand>
                    <ivue-list>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                    </ivue-list>
                </template>
            </ivue-list-item>

            <ivue-list-item ivue-expand>
                <span class="ivue-list-item-text">News</span>
                <template #ivueExpand>
                    <ivue-list>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                    </ivue-list>
                </template>
            </ivue-list-item>

            <ivue-list-item ivue-expand>
                <span class="ivue-list-item-text">News</span>
                <template #ivueExpand>
                    <ivue-list>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                        <ivue-list-item class="ivue-inset">World</ivue-list-item>
                    </ivue-list>
                </template>
            </ivue-list-item>
        </ivue-list>
    </div>
</template>
`;

export default code;
