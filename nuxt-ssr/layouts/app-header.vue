<template>
  <nav>
    <!-- <el-button>按钮</el-button> -->
    <el-menu
    :default-active="activeIndex"
    @select="handleSelect"
    active-text-color="#399"
    mode="horizontal"
    >
      <el-menu-item 
      v-for="(item, index) of navs"
      :key="index"
      :index="index+''">{{item.title}}
      </el-menu-item>
    </el-menu>


    <!-- 跳转 声明式跳转 router-link ,active-class表示激活时的状态-->
    <!-- 假设我既希望/ 和 /index 都是指代这个路由，需要在nuxt.config.js中配置扩展式路由 -->
    
    <!-- 
    <nuxt-link to="/" active-class="app-header--active">首页</nuxt-link>
    <nuxt-link to="/goods" active-class="app-header--active">商品</nuxt-link>
    <nuxt-link to="/user" active-class="app-header--active">用户</nuxt-link>
    <nuxt-link to="/login" active-class="app-header--active">注册</nuxt-link>
    <nuxt-link to="/reg" active-class="app-header--active">登录</nuxt-link> 
    -->
  </nav>
</template>

<script >
/*
// lang="ts"

import {Vue, Component, Watch} from 'vue-property-decorator'
import {Route} from 'vue-router'

type Tnavs = {path: string, title: string}

@Component
export default class AppHeader extends Vue{
  activeIndex: string = '-1'
  navs: Tnavs[] = [
    {path: '/index', title: '首页'},
    {path: '/goods', title: '商品'},
    {path: '/user', title: '用户'}
  ]
  handleSelect(key:number, keyPath:string):void {
    this.$router.push(this.navs[key].path)
  }
  @Watch('$route', {immediate: true, deep:true})
  onRouteChangeroute(route:Route){
    let find = false
    this.navs.map((item, index) => { // 强刷也不会丢activeIndex
      if(item.path == '/') this.$router.push({name: 'index'})
      if(route.path == item.path) {
        this.activeIndex = index + ''
        find = true
      }
    })
    if(!find) this.activeIndex = "-1"
  }
}
*/
export default {
  data() {
    return {
      activeIndex: "-1", // 默认可能最开始在登录或者注册，初始没有导航信息
      navs: [
        {path: '/index', title: '首页'},
        {path: '/goods', title: '商品'},
        {path: '/user', title: '用户'}
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(this.navs[key].path)
    }
  },
  watch: {
    // 要进行路由监测，上述的路由一刷新activeIndex=-1了，nav选中样式就不在了
    $route: {
      immediate: true,
      handler(route) {
        let find = false
        this.navs.map((item, index) => { // 强刷也不会丢activeIndex
          if(item.path == '/') this.$router.push({name: 'index'})
          if(route.path == item.path) {
            this.activeIndex = index + ''
            find = true
          }
        })
        if(!find) this.activeIndex = "-1"
      }
    }
  }
}
</script>

<style scoped>
.app-header--active{
  background: #399;
  color: #fff;
}
</style>