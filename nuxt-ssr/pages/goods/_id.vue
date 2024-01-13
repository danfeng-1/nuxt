<template>
  <div class="detail">
    <h2>
      详情页
    </h2>
  </div>
</template>
<script>
/*
script 标签加 lang="ts"

import {Vue, Component, Prop} from 'vue-property-decorator'
@Component({ // 服务端钩子定义在装饰器里面
  validate({params, query}) {
    console.log('query',query)
    console.log('params',params)
    return typeof params.id === 'number'
  },
  asyncData({params, app, error}) {
    return app.$axios({ // ts中$axios在app.$axios中
      url: `/api/goods/${params.id}`
    }).then((res:any) => ({
      data: res.data.data})
    )
  },
  transition: 'test',
  head() {
    return this.$seo(this.data.title, this.data.des, [{}])
  }

})
export default class GoodsDetail extends Vue {
}
*/


// JS写法
export default {
  name: 'goods-detail',
  validate({params, query}) {
    console.log('query',query)
    console.log('params',params)
    return typeof params.id === 'number'
  },
  // transition: '动画名'
  transition: 'test',
  asyncData({params, query, req, res, redirect, error}) {
    return $axios({
      url: `/api/goods/${params.id}`
    }).then(res => ({
      data: res.data.data
    })
    )    
  },
  // 封装从mixin获取
  head() {
    return this.$seo(this.data.title, this.data.des, [{}])
  }
}

</script>

<style scoped>
  /* 写外面transiton.css去了 */

  /* .test-enter-active, .test-leave-active{
    transition: .5s ease all
  }
  .test-enter, .test-leave-active{
    margin-left: -1000px;
  } */
</style>
