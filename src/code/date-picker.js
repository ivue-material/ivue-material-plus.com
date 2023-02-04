const code = {};

code.default = `<template>
    <ivue-date-picker v-model="date" no-title @on-change="handleChange"></ivue-date-picker>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const date = ref(new Date().toISOString().substr(0, 10));

const handleChange = (value) => {
    proxy.$message.info(\`select:\${value}\`);
};
</script>
`;

code.month = `<template>
    <ivue-date-picker v-model="date" type="month"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
`;

code.landscape = `<template>
    <h4>纵向</h4>
    <ivue-date-picker v-model="date"></ivue-date-picker>
    <h4>横向</h4>
    <ivue-date-picker v-model="date" landscape></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
`;

code.color = `<template>
    <h4>只设置color</h4>
    <ivue-date-picker v-model="date" color="#FFBD3C"></ivue-date-picker>
    <h4>设置color和header-color</h4>
    <ivue-date-picker v-model="date" color="#FF617F" header-color="#27E2B2"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
`;

code.allowedDates = `<template>
    <ivue-date-picker v-model="date" :allowed-dates="allowedDates"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));

const allowedDates = (value) => {
    return parseInt(value.split('-')[2], 10) % 2 === 0;
};
</script>
`;

code.multiple = `<template>
    <ivue-date-picker v-model="date" multiple></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(['2022-12-19', '2022-12-20']);
</script>
`;

code.fullWidth = `<template>
    <h2>纵向</h2>
    <ivue-date-picker v-model="date" full-width></ivue-date-picker>
    <h2>横向</h2>
    <ivue-date-picker v-model="date" landscape full-width></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
`;

code.note = `<template>
    <h4>未自定义note颜色</h4>
    <ivue-date-picker v-model="date" :note="note"></ivue-date-picker>
    <h4>自定义note颜色 Array</h4>
    <ivue-date-picker v-model="date" :note="note" :note-color="noteColor1"></ivue-date-picker>
    <h4>自定义note颜色 Object</h4>
    <ivue-date-picker v-model="date" :note="[date]" :note-color="noteColor2"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));

const note = ref(
    [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30);
        const d = new Date();
        d.setDate(day);

        return d.toISOString().substr(0, 10);
    })
);

const noteColor2 = ref({
    [date.value]: '#27E2B2'
});

const noteColor1 = (date) => (date[9] % 2 ? '#27E2B2' : '#FF617F');
</script>
`;

code.locale = `<template>
    <ivue-date-picker v-model="date" locale="zh-CN"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
`;

code.icon = `<template>
    <ivue-date-picker
        v-model="date"
        prev-icon="arrow_back"
        next-icon="arrow_forward"
        year-icon="favorite"
    ></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
`;

code.readonly = `<template>
  <ivue-date-picker v-model="date" readonly></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
`;

code.reactive = `<template>
  <ivue-date-picker v-model="date" reactive></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
`;

code.maxAndMin = `<template>
    <ivue-date-picker v-model="date" :min="\`\${year}-01-01\`" :max="\`\${year + 1}-01-01\`"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const year = Number(new Date().toISOString().substr(0, 4));

const date = ref(new Date().toISOString().substr(0, 10));
</script>
`;

code.titleDateFormat = `<template>
    <ivue-date-picker v-model="date" :title-date-format="titleDateFormat"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));

const padStart = (string, targetLength, padString) => {
    targetLength = targetLength >> 0;
    string = String(string);
    padString = String(padString);

    if (string.length > targetLength) {
        return String(string);
    }

    targetLength = targetLength - string.length;

    if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
    }

    return padString.slice(0, targetLength) + String(string);
};

const format = (locale, options) => {
    // 适配IOS
    const makeIsoString = (dateString) => {
        const [year, month, date] = dateString.trim().split(' ')[0].split('-');

        return [year, padStart(month || 1, 2, 0), padStart(date || 1, 2, 0)].join('-');
    };

    // 初始化 根据语言来格式化日期和时间的对象
    const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);

    return (dateString) => {
        return intlFormatter.format(
            new Date(\`\${makeIsoString(dateString)}T00:00:00+00:00\`)
        );
    };
};

const titleDateFormat = format('zh-CN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
});
</script>
`;

code.titleYearFormat = `<template>
    <ivue-date-picker v-model="date" :title-year-format="titleYearFormat"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));

const format = () => {
    return (dateString) => {
        return \`\${dateString}年\`;
    };
};

const titleYearFormat = format();
</script>
`;

code.dayFormat = `<template>
    <ivue-date-picker
        v-model="date"
        :day-format="format('zh-CN',{ day: 'numeric', timeZone: 'UTC' })"
    ></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));

const padStart = (string, targetLength, padString) => {
    targetLength = targetLength >> 0;
    string = String(string);
    padString = String(padString);

    if (string.length > targetLength) {
        return String(string);
    }

    targetLength = targetLength - string.length;

    if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
    }

    return padString.slice(0, targetLength) + String(string);
};

const format = (locale, options) => {
    // 适配IOS
    const makeIsoString = (dateString) => {
        const [year, month, date] = dateString.trim().split(' ')[0].split('-');
        return [year, padStart(month || 1, 2, 0), padStart(date || 1, 2, 0)].join('-');
    };
    // 初始化 根据语言来格式化日期和时间的对象
    const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);
    return (dateString) => {
        return intlFormatter.format(
            new Date(\`\${makeIsoString(dateString)}T00:00:00+00:00\`)
        );
    };
};
</script>
`;

code.headerDateFormat = `<template>
    <ivue-date-picker
        v-model="date"
        :header-date-format="format('zh-CN',{  year: 'numeric', timeZone: 'UTC' })"
    ></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));

const padStart = (string, targetLength, padString) => {
    targetLength = targetLength >> 0;
    string = String(string);
    padString = String(padString);

    if (string.length > targetLength) {
        return String(string);
    }

    targetLength = targetLength - string.length;

    if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
    }

    return padString.slice(0, targetLength) + String(string);
};

const format = (locale, options) => {
    // 适配IOS
    const makeIsoString = (dateString) => {
        const [year, month, date] = dateString.trim().split(' ')[0].split('-');

        let arr = [year];

        if (month) {
            arr.push(padStart(month || 1, 2, 0));
        }

        if (date) {
            arr.push(padStart(date || 1, 2, 0));
        }

        return arr.join('-');
    };

    // 初始化 根据语言来格式化日期和时间的对象
    const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);

    return (dateString) => {
        return intlFormatter.format(
            new Date(\`\${makeIsoString(dateString)}T00:00:00+00:00\`)
        );
    };
};
</script>
`;

code.monthFormat = `<template>
    <ivue-date-picker
        v-model="date"
        type="month"
        :month-format="format('zh-CN',{ month: 'short', timeZone: 'UTC' })"
    ></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 7));

const padStart = (string, targetLength, padString) => {
    targetLength = targetLength >> 0;
    string = String(string);
    padString = String(padString);

    if (string.length > targetLength) {
        return String(string);
    }

    targetLength = targetLength - string.length;

    if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
    }

    return padString.slice(0, targetLength) + String(string);
};

const format = (locale, options) => {
    // 适配IOS
    const makeIsoString = (dateString) => {
        const [year, month, date] = dateString.trim().split(' ')[0].split('-');

        return [
            year,
            padStart(month || 1, 2, 0),
            padStart(date || 1, 2, 0),
        ].join('-');
    };
    // 初始化 根据语言来格式化日期和时间的对象
    const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);

    return (dateString) => {
        return intlFormatter.format(
            new Date(\`\${makeIsoString(dateString)}T00:00:00+00:00\`)
        );
    };
};
</script>
`;

code.firstDayOfWeek = `<template>
    <ivue-date-picker v-model="date" firstDayOfWeek="1" locale="zh-CN"></ivue-date-picker>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().toISOString().substr(0, 10));
</script>
`;

code.pickerDate = `<template>
    <ivue-date-picker v-model="date" v-model:pickerDate="pickerDate"></ivue-date-picker>
</template>

<script setup>
import { getCurrentInstance, ref, watch } from 'vue';

const { proxy } = getCurrentInstance();

const date = ref(new Date().toISOString().substr(0, 10));
const pickerDate = ref('');

watch(
    () => pickerDate.value,
    (value) => {
        proxy.$message.info(\`select:\${value}\`);
    }
);
</script>
`;

export default code;
