
// 插件里面也可以拿到context上下文
export default ({app, redirect, params, query, store}) => {
  // app：从context中解析出 vue的app实例
  // redirect：服务端跳转函数 √

  console.log('插件')
  app.router.beforeEach((to, from, next) => {
    // 插件是路由前置全局的守卫
    // next(true) / next(false)     next('/login') ×
    console.log('插件配置 全局前置', to)

    if(to.name == 'login' || to.name == 'reg') {
      next()
    } else {
      // redirect({name: 'login'})
      next()
    }
  })

  // 全局后置守卫
  app.router.afterEach((to, from) => {
    console.log('插件全局后置守卫')
  })

}