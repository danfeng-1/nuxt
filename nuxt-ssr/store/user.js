import { IStoreUser } from "~/types"

/* TS
type TAction = {
  user: IStoreUser
  commit: (type:String, payload:object) => void
}
*/

export const state = () => ({
  err: 1, 
  msg: '未登录',
  token: '',
  data: {}
})
/** TS
export const state = function(): IStoreUser{
  return{
    err: 1, 
    msg: '未登录',
    token: '',
    data: {}
  }
}
*/

export const mutations = {
  M_UPDATE_USER(user, payload) {
    user.err = payload.err
    user.msg = payload.msg
    user.token = payload.token
    user.data = payload.data
  }
}
/* TS
export const mutations = {
  M_UPDATE_USER(user:IStoreUser, payload:IStoreUser) {
    user.err = payload.err
    user.msg = payload.msg
    user.token = payload.token
    user.data = payload.data
  }
}

*/


export const actions = {
  // 其中的第一个参数 store 被解构成了commit提交工具和state数据 {commit, state}
  A_UPDATE_USER({commit, user}, payload) {
    // 异步处理
    commit('M_UPDATE_USER', payload)
  }
}

/* TS
export const actions = {
  // 其中的第一个参数 store 被解构成了commit提交工具和state数据 {commit, state}
  A_UPDATE_USER({commit, user}:TAction, payload:{}}) { // payload没有约定类型就拿不到一些语法约定
    // 异步处理
    commit('M_UPDATE_USER', payload)
  }
}

*/