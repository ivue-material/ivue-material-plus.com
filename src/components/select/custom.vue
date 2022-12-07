<template>
    <ivue-select v-model="model" style="width:200px">
        <ivue-option value="New York" label="New York">
            <div class="select-custom">
                <span>New York</span>
                <span>America</span>
            </div>
        </ivue-option>
        <ivue-option value="London" label="London">
            <div class="select-custom">
                <span>London</span>
                <span>U.K.</span>
            </div>
        </ivue-option>
        <ivue-option value="Sydney" label="Sydney">
            <div class="select-custom">
                <span>Sydney</span>
                <span>Australian</span>
            </div>
        </ivue-option>
    </ivue-select>
</template>

<script setup>
import { ref } from 'vue';

const model = ref('');
</script>

<style scoped>
.select-custom {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
