<template>
  <div>
    <h1 v-if="error.statusCode">{{error.message}}</h1>
    <h1 v-else>应用发送异常</h1>
    <button @click="$router.replace('/index')">跳转到首页</button>
  </div>
</template>
<script lang="ts">
/*
import {Vue, Component, Prop} from 'vue-property-decorator'
// TS写法
@Component
export default class Error extends Vue{
  @Prop() readonly error:string | undefined
}
*/


// JS写法
export default {
  // 接收错误信息 error: {statusCode, message}
  props: ['error']
}
</script>