<template>
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
