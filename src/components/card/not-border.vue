<template>
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

<style lang="scss" scoped>
.card {
    background-color: #ccc;
    padding: 20px;
}
</style>
