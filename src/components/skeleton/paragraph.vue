<template>
  <h4>段落传入 object</h4>
  <ivue-skeleton
    :paragraph="{ rows: 5, width: [100, 200, '300px', '50%', '62%'] }"
  ></ivue-skeleton>
  <h4>段落传入 object 宽度固定</h4>
  <ivue-skeleton :paragraph="{ rows: 5, width: [100] }"></ivue-skeleton>
  <h4>段落传入 number</h4>
  <ivue-skeleton :paragraph="2"></ivue-skeleton>
</template>
