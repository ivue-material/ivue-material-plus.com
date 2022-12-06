<template>
    <div class="card">
        <ivue-card class="dis-hover" disHover>
            <template #title>The standard card</template>
            Content of card
            Content of card
            Content of card
        </ivue-card>
        <ivue-card class="no-dis-hover">
            <template #title>Disable card with hover shadows</template>
            Content of card
            Content of card
            Content of card
        </ivue-card>
    </div>
</template>

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
