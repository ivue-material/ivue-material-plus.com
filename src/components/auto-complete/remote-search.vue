<template>
    <ivue-auto-complete
        v-model="value"
        filterable
        :remoteMethod="remoteMethod1"
        :loading="loading"
        placeholder="请输入"
        @on-select="handleSelect"
    >
        <ivue-option v-for="item in data" :value="item.value" :key="item.value">{{ item.value }}</ivue-option>
    </ivue-auto-complete>
</template>

<script setup>
import { ref } from 'vue';

const loadAll = [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
];

const value = ref('');
const data = ref(loadAll);
const loading = ref(false);
const select = ref('');

const remoteMethod1 = (queryString) => {
    if (select.value === queryString) {
        return;
    }

    const results = queryString
        ? loadAll.filter(
              (item) =>
                  item.value
                      .toLowerCase()
                      .indexOf(queryString.toLowerCase()) === 0
          )
        : loadAll;

    loading.value = true;

    setTimeout(() => {
        loading.value = false;
        data.value = results;
    }, 3000);
};

const handleSelect = (value) => {
    select.value = value;
};
</script>
