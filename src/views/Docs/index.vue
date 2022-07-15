<template>
    <div class="docs">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script>
export default {
    name: 'docs',
};
</script>

<style lang="scss">
.docs {
    position: relative;
    top: 80px;
    height: auto;
    zoom: 1;
    display: block;
    z-index: 50;
    background: #fff;
}
</style>
