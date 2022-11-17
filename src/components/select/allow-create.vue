<template>
    <h3>单选</h3>
    <ivue-select v-model="model1" filterable allow-create @on-create="handleCreate1">
        <ivue-option v-for="item in list1" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>

    <h3>多选</h3>
    <ivue-select v-model="model2" filterable multiple allow-create @on-create="handleCreate2">
        <ivue-option v-for="item in list2" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
</template>

<script>
export default {
    data() {
        return {
            list1: [
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
            list2: [
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
    methods: {
        handleCreate1(val) {
            this.list1.push({
                value: val,
                label: val,
            });
        },
        handleCreate2(val) {
            this.list2.push({
                value: val,
                label: val,
            });
        },
    },
};
</script>
