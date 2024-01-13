// 类型主模块
// 定义三个接口，自定义数据类型

interface IStoreState{
  bNav: boolean
  bLoading: boolean
}
interface IStoreHome{
  err: number
  msg ?: string
  data: Array<{
    _id: string
    des: string
    time: number
    title: string
    detail ?: {
      auth: string
      auth_icon: string
      content: string
    }
  }>
}
interface IStoreUser{
  err: number
  msg: string
  token: string
  data ?: Partial<{
    _id: string
    nikename: string
    fans: number
    follow: number
    icon: string
  }> 
}


export {IStoreUser, IStoreState, IStoreHome}