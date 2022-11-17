<template>
    <h3>单选</h3>
    <ivue-select v-model="model1" filterable style="width:400px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
    <h3>多选</h3>
    <ivue-select v-model="model2" filterable multiple style="width:400px">
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>
<script>
export default {
    data() {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York',
                },
                {
                    value: 'London',
                    label: 'London',
                },
                {
                    value: 'Sydney',
                    label: 'Sydney',
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa',
                },
                {
                    value: 'Paris',
                    label: 'Paris',
                },
                {
                    value: 'Canberra',
                    label: 'Canberra',
                },
            ],
            model1: '',
            model2: [],
        };
    },
};
</script>
