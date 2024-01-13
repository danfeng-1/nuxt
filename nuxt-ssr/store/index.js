// 主模块
import { IStoreState } from "@/types"

// state 返回的是一个函数，函数里面是对象，里面的每个角色都必须暴露
export const state = () => ({
  bNav: false, // 主模块的值
  bLoading: false
})

/* TS
export const state = function(): IStoreState{
  return {
    bNav: false, // 主模块的值
    bLoading: false
  }
}
*/

// mutations 返回的是一个对象
export const mutations = {
  M_UPDATE_NAV(state, payload) {
    state.bNav = payload
  },
  M_UPDATE_LOADING(state, payload) {
    state.bLoading = payload
  }
}

/* TS
export const mutations = {
  M_UPDATE_NAV(state:IStoreState, payload:boolean) {
    state.bNav = payload
  },
  M_UPDATE_LOADING(state:IStoreState, payload:boolean) {
    state.bLoading = payload
  }
}
*/

// actions 返回的是一个对象
export const actions = {
  // nuxtServerInit(store, context) {
    // 这里的context可以解构两层
    nuxtServerInit(store, {app: {$cookies}}) {
    // 初始化数据到store当中
    console.log('nuxtServerInit', store)
    // 初始化token到store中，取没取出来都要同步，登录的时候同步状态，强刷之后也要同步，拦截器里面要每次携带
    let user = $cookies.get('user') ? $cookies : {err:2, msg:'未登录', token: ''}
    store.commit('user/M_UPDATE_USER', user)
  }
}
/* TS
export const actions = {
  nuxtServerInit(store:any, context: any) {
  let user = context.app.$cookies.get('user') ? context.app.$cookies : {err:2, msg:'未登录', token: ''}
  store.commit('user/M_UPDATE_USER', user)
  }
}
*/

// getters 返回的是一个对象
export const getters = {
  getNav(state) {
    return state.bNav ? '显示' : '隐藏'
  },
}
/* TS
export const getters = {
  getNav(state:IStoreState) {
    return state.bNav ? '显示' : '隐藏'
  },
}
 */