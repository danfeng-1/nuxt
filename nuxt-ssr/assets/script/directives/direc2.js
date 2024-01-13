
function direc2(el, binding, vnode) {
  console.log('全局指令2', el, binding, vnode)
}

export default {
  // 希望插入dom的时候再触发
  inserted(el, binding, vnode) {
    direc2(el, binding, vnode)
  },
  // 希望组件更新的时候也触发
  componentUpdated() {
    derec2(el, binding, vnode)
  }
}
