<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- Nuxt基于文件的路由 -->
    <!-- <nuxt-link to="/">首页</nuxt-link> -->
    <!-- <nuxt-link to="/video">视频页</nuxt-link> -->
    <!-- Nuxt 页面路由，相当于RouterView -->

    <!-- 缓存10级页面，提升用户切换体验 -->
    <NuxtPage :keepalive="{ max: 10 }" />
    
  </div>
</template>


<script lang="ts">

// SEO 优化
useSeoMeta({
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  description: '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活',
  keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,追番',
  // 绕开 B 站图片防盗链
  referrer: 'no-referrer',
})
</script>

<style lang='scss'>
/* 基础样式 */
@import './assets/styles/base.scss';
/*  字体图标 */
@import './assets/styles/iconfont.scss';

:root{
  /* css 变量设置组件库主题色 */
  --van-primary-color: #FB7299
}
</style>