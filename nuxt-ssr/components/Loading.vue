<template>
  <div v-if="loading">
    loding...
  </div>
</template>


<script>
/*
// lang="ts"

import {Vue, Component} from 'vue-property-decorator'
@Component
export default class Loading extends Vue{
  // data 原数据 == 实例属性
  loading: boolean = false
  // methods的方法 == 类内的实例方法
  start():void {
    this.loading = true
  }
  finish():void {
    this.loading = false
  }
}
*/

// JS 写法

export default {
  // nuxt默认数据预载完再去向目标组件，先loading再去组件
  data: () =>  ({loading: false}),
  methods: {
    // 组件开始时
    start(){
      this.loading = true
    },
    finish(){
      this.loading = false
    }
  },
}

</script>


<style scoped>

</style>