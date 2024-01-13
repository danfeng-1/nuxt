
// 中间件函数可以得到上下文的信息context 或者 {store, route,redirect, params, query, req, res }
/**
 * store: 状态管理树实例
 * route: 单条路由的信息
 * redirect: 后端的跳转
 * params: 客户端携带来的一些参数
 * query: 请求头
 * req 和 res: 响应体
 */

export default ({store, route,redirect, params, query, req, res }) => {
  // 全局守卫业务
  console.log('middleware nuxt.config outside ') // 第一种定义在服务器的方式,且是外部定义
  // redirect('/login')
}