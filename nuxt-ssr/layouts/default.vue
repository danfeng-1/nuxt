<template>
  <div>
    <!-- 跳转 声明式跳转 router-link 拆分到app-header中了 -->
    <!-- <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/goods">商品</nuxt-link>
    <nuxt-link to="/user">用户</nuxt-link>
    <nuxt-link to="/login">注册</nuxt-link> -->

    <!-- 导航 -->
    <AppHeader v-if="bNav"></AppHeader>
    
    <!-- 展示区 ~~ router-view -->
    <nuxt/>
  </div>

</template>
<script>
import AppHeader from './app-header.vue'

/*
// TS 写法
script 标签加 lang="ts"

import {Vue, Component, Watch} from 'vue-property-decorator'
import {Route} from 'vue-router'


@Component({
  middleware({store, route,redirect, params, query, req, res}) {
    // 也可以定义在页面内部，这样写的auth运行在nuxt之后了
    console.log('middleware2.2 layout inside')
    // redirect('/goods')
  },
  components: {AppHeader}
})

export default class Default extends Vue{
  bNav:boolean = true
  @Watch('$route', {immediate: true})
  onRouteChange(route: Route) {
    if(/login|reg/.test(route.path)) {
      this.bNav = false
    } else {
      this.bNav = true
    }
  }
}
*/

// JS写法
export default {

  // 第二种方法：页面层级中间件的定义
  // middleware: 'auth', // 直接指向外面的auth
  middleware({store, route,redirect, params, query, req, res}) {
    // 也可以定义在页面内部，这样写的auth运行在nuxt之后了
    console.log('middleware2.2 layout inside')
    // redirect('/goods')
  },
  components: {
    AppHeader
  },
  data() {
    return {
      bNav: true
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        // 如果是登录或者注册，就不会显示导航
        if(/login|reg/.test(route.path)) {
          this.bNav = false
        } else {
          this.bNav = true
        }
      }
    }
  }
}
</script>