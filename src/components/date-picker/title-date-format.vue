<template>
  <ivue-date-picker
    v-model="date"
    :title-date-format="titleDateFormat"
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

    return [year, padStart(month || 1, 2, 0), padStart(date || 1, 2, 0)].join(
      '-'
    );
  };

  // 初始化 根据语言来格式化日期和时间的对象
  const intlFormatter = new Intl.DateTimeFormat(locale || undefined, options);

  return (dateString) => {
    return intlFormatter.format(
      new Date(`${makeIsoString(dateString)}T00:00:00+00:00`)
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
