<template>
  <div class="goods">
    <h3>商品</h3>
    <!-- 1号页面,下划线文件名表示变量，它指向了动态路由的子名称，接着是传递的参数query -->
    <nuxt-link to="/goods/1?a=1&b=2">商品01</nuxt-link>
    <nuxt-link to="/goods/2?a=11&b=22">商品02</nuxt-link>
    <!-- 路由的别名，路由的名字是目录的名字配上目录下面的文件名_id表示的动态路由 -->
    <nuxt-link :to="{name:'goods-id', params:{id:3}, query:{a:111, b:222}}">商品03</nuxt-link>
    <nuxt-link to="/goods/comment">评论</nuxt-link>

    <!-- 子路由的展示区 -->
    <nuxt/>


    <!-- 
      路由
         约定式
            展示区：</nuxt>
            声明式跳转：<nuxt-link :to="{name:'product-id', params:{id:3}, query:{a:111, b:222}}">商品03</nuxt-link>
              name: 路由名：目录名-其他目录-文件名
              params:key 要对等文件名（例如id)

            子路由：目录代表子路由，子路由由内部同级的文件，代表是同级一级路由
          配置
     -->
  </div>
</template>
<script>
export default {
  name: 'goods',
  // head选项，页面meta配置
  head() {
    return {
      meta: [
        {name: 'keywords', content: this.collectionName}
      ]
    }
  }

}
</script>
