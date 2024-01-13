import { IStoreHome } from "~/types"

/*
type TAction = {
  commit: (type:String, payload:object) => void
  state: IStoreHome
}
*/

export const state = () => ({
  err: 1, // 没有拿到数据1
  data: {} // 初始数据为空
})
/* TS
export const state = function: IStoreHome{
  return {
  err: 1, // 没有拿到数据1
  data: [] // 初始数据为空
  }
}
*/

export const mutations = {
  M_UPDATE_HOME(state, payload) {
    state.err = payload.err
    state.data = payload.data
  }
}
/* TS
export const mutations = {
  M_UPDATE_HOME(state:IStoreHome, payload:IStoreHome) {
    state.err = payload.err
    state.data = payload.data
  }
}
*/

export const actions = {
  // 其中的第一个参数 store 被解构成了commit提交工具和state数据 {commit, state}
  A_UPDATE_HOME({commit, state}, payload) {
    // 异步处理
    commit('M_UPDATE_HOME', {err:0, data:{title:"home 模块 actions所传递的新数据"}})
  }
}
/* TS
export const actions = {
  A_UPDATE_HOME({commit, state}:TAction, payload:IStoreHome) {
    // 异步处理
    commit('M_UPDATE_HOME', {err:0, data:{title:"home 模块 actions所传递的新数据"}})
  }
}
*/