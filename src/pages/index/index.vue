<template>
  <view class="index">
    <text>2333</text>
    <IconFont name="dongdong"></IconFont>
    <nut-button type="primary" @click="onClick">按钮</nut-button>
    <nut-toast v-model:visible="show" msg="你成功了" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { IconFont } from '@nutui/icons-vue-taro'

const show = ref(false)
const onClick = () => {
  show.value = true
}

</script>
