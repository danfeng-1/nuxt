import Vue from 'vue'

let show = () => console.log('全局方法')
Vue.prototype.$show = show

// 引入过滤器作为全局的工具
import * as filters from '../assets/script/filters'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// 全局指令
import direc1 from '../assets/script/directives/direc1'
import direc2 from '../assets/script/directives/direc2'
Vue.directive('direc1', direc1)
Vue.directive('direc2', direc2)

// 引入自定义的全局组件
import UcButton from '../components/global/uc-button.vue'
Vue.component('uc-button', UcButton)

// 混入 mixins
Vue.mixin({
  methods: {
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [{
          hid: 'description',
          name: 'keywords',
          content
        }].concat(payload)
      }
    }
  }
})
