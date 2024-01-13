<template>
  <div class="comment">
    <h2>
      评论
    </h2>
    <!-- <nuxt-link :to="{name: 'goods-comment-uid', params: {uid:1}, query:{a:1, b:2}}">评论01</nuxt-link> -->
    <!-- <nuxt-link to="/goods/comment/2?a=11&b=22">评论02</nuxt-link> -->
    <!-- <nuxt /> -->

    <hr>
    <div v-direc1="'red'">direc1</div>
    <!-- 指令管辖范围内数据发生改变指令会再次运行 -->
    <div v-direc2>direc2</div>

    <UcButton></UcButton>
  </div>
</template>
<script lang='ts'>
/*
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class Comment extends Vue{
  title: string = '数据'
  mounted() {
    this.$show()
  }
}
*/

export default {
  mounted() {
    this.$show()
  },
}
</script>