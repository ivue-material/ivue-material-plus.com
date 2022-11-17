<template>
    <h3>普通</h3>
    <ivue-select
        v-model="model"
        :selected-color="['#E91E63', '#9C27B0']"
        :hover-color="['#673AB7', '#2196F3']"
        style="width:200px"
    >
        <ivue-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</ivue-option>
    </ivue-select>
    <h3>渐变颜色</h3>
    <ivue-select
        v-model="model"
        :selected-color="['#E91E63', '#9C27B0']"
        :hover-color="['#673AB7', '#2196F3']"
        style="width:200px"
    >
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
            model: '',
        };
    },
};
</script>
