<template>
  <!-- <Tutorial/> -->
  <div>
    <h3>首页</h3>

    <h4>同域资源</h4>
    <div>{{title}}</div>

    <!-- <h4>跨域资源</h4>
    <div>{{data2}}</div> -->

    <h4>vuex操作</h4>
    <button @click="getStore">编程式操作</button>
    <div>index getters:{{getNav}}</div>
    <div>index state:{{bNav}}</div>
    <div>user state:{{data}}</div>
    <div>home state:{{home}}</div>

    <h4>内部资源指向问题</h4>
    <!-- 相对路径找到一些需要压缩的资源 assets -->
    <img src="../assets/img/meal.png">
    <!-- 项目根目录~ 别名相对路径-->
    <img src="~assets/img/meal.png">

    <!-- 绝对路径找到无需压缩的资源 static -->
    <img src="/img/bg-login.png">
    <div class="bgimg">css指向需要压缩的资源</div>

    <h4>外部资源</h4>
    <el-button onclick="alert($)">测试外部js脚本--jquery</el-button>
    <!-- 1.可以通过nuxt.config.js中引入一些外部资源，例如添加脚本script，链接资源link -->
    <!-- 
    1.1 在nuxt.config.js的script中
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/lib/jquery/3.1.1/jquery.min.js'}
    ],

    1.2 在nuxt.config.js的link中
    {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'}
    -->

    <!-- 2.或者在app.html中以script引入<script scr="外部资源"></script> -->
    <!-- 3.指定某一个组件的head(){}中，例如pages/user/index.vue中 

    -->
  </div>
</template>

<script>
// 引入vuex的辅助函数
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'IndexPage',
  // 中间件第三种定义方式
  // middleware: 'auth', // 就像2.1一样直接指向外部的auth
  middleware() { // 或者也可以定义在页面内部的中间件，定义在页面内部，只有在这个页面被加载的时候会运行在这个页面实例化之前
    console.log('middleware 3.2 page inside')
  },

  // 参数有效性的校验
  validate(params, query) {
    // 校验业务
    console.log('validate')
    return true // return false
  },

  // 由于上面我们已经添加了axios模块，所以我们可以在钩子函数中获取上下文context的同时获取nuxt本身携带的axios模块。
  async asyncData({$axios}) {
    // 同域资源，读取 static/data/list.json的数据
    let res = await $axios({url: '/data/list.json'})
    console.log('读取到的静态资源', res)
    return {
      title: res.data.title
    }

    // 跨域资源服务器资源读取
    // 读取跨域数据会报跨域错，在nuxt.config.js中axios配置proxy
    let res2 = await $axios({url: 'http://localhost:3001/api/home'})
    console.log('res2跨域数据', res2)
    return {
      data2: res2.data.data2
    }

  },

  // 同域资源，读取 static/data/list.json的数据
  async fetch({$axios, store, error}) {
    let res2 = await $axios({url: '/data/list.json'})
    console.log('res2', res2.data.title)
    res2.data && store.commit('home/M_UPDATE_HOME', {err:0, msg: '登陆成功', token:'假token', data:{title:"fetch 789"}})
  },
  // vuex
  // **模块方式:** `store`目录下的每个`.js`文件会被转换成状态树[指定命名的子模块](http://vuex.vuejs.org/en/modules.html),当然(`index`是根模块)
  // **Classic(不建议使用):**`store/index.js`返回创建Vuex.Store实例的方法

  methods: {
    getStore() {
      // 编程式访问vuex
      // 发出actions请求给user模块
      // this.$store.dispatch('user/A_UPDATE_USER', {err:0, msg: '登陆成功', token:'假token', data:{title:"user 模块 actions所传递的新数据"}})
      this.A_UPDATE_USER({err:0, msg: '登陆成功', token:'假token', data:{title:"123"}})
      
      // 发出mutations请求给user模块
      // this.$store.commit('user/M_UPDATE_USER', {err:0, msg: '登陆成功', token:'假token', data:{title:"组件commit传递过去的数据"}})
      // this.M_UPDATE_USER({err:0, msg: '登陆成功', token:'假token', data:{title:"456"}})

    },

    ...mapActions('user', ['A_UPDATE_USER']),
    ...mapMutations('user', ['M_UPDATE_USER'])
  },

  // mapGetter在计算属性中
  computed: {
    xx(){}, // 某些计算属性
    // index主模块下的store才有getters
    ...mapGetters(['getNav']),
    ...mapState(['bNav']), // 或者直接获取state的bNav数据
    ...mapState('user', ['data']), // 获取user子模块的data数据
    // ...mapState('home', ['data']) // 这样的data就和其余store里面的重了，所以可以写成以下对象的格式
    ...mapState({home: state => state.home.data})
  }
  
}
</script>

<style scoped>
.bgimg{
  height: 50px;
  /* background: url('../assets/img/banner2.png') no-repeat; */
  background: url('~assets/img/banner2.png') no-repeat; /* 别名路径 */
}
</style>