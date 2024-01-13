
// 这样解析出来的是磁盘，我们还是要读内存，因为拦截器会调用读取内存，所以我们还是用的store直接获取
export default function({$axios, redirect, route, store, app: {$cookies}}) {
  // 基本配置
  $axios.defaults.timeout = 10000;

  // 请求拦截
  $axios.onRequest(config => {
    console.log('请求拦截')

    // 如果这里内存里面没有token 没有关系，响应拦截器就会返回错误走else
    // 然后跳转登录，然后接着登录继续
    // config.headers.token = store.state.user.token
    

    return config
  })


  // 响应拦截
  $axios.onResponse(res => {
    console.log('响应拦截', res)

    // if(res.data.err === 2 && route.fullPath !== '/login') {
    //   redirect('/login?path' + route.fullPath) // 跳转到登录页并拼接当前所在的位置
    // }

    return res
  })


  // 错误处理
  $axios.onError(error => {
    return error
  })

}