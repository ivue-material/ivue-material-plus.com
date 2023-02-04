<template>
  <h4>25% 高度为 20</h4>
  <ivue-progress :percent="25" :stroke-width="20" text-inside></ivue-progress>
  <h4>45% 高度为 25</h4>
  <ivue-progress
    :percent="45"
    :stroke-width="25"
    status="active"
    text-inside
  ></ivue-progress>
  <h4>65% 高度为 30</h4>
  <ivue-progress
    :percent="65"
    :stroke-width="30"
    status="wrong"
    text-inside
  ></ivue-progress>
  <h4>70% 高度为 35</h4>
  <ivue-progress
    :percent="70"
    :stroke-width="35"
    status="warning"
    text-inside
  ></ivue-progress>
  <h4>100% 高度为 40</h4>
  <ivue-progress :percent="100" :stroke-width="40" text-inside></ivue-progress>
</template>
