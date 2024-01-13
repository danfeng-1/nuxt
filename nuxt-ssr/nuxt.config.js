// import { extend } from "vue/types/umd"

export default {
  mode: 'universal',
  server: {
    port: 3000, // default 3000
    host: '0.0.0.0'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // 去 package.json中取，没有就用后面的
    title: process.env.npm_package_name || 'nuxt-ssr', // 网站的统一标题
    htmlAttrs: {
      lang: 'en'
    },
    // 整个页面的描述信息，也可以在某个页面中写！！例如在goods/index.vue中
    meta: [
      { charset: 'utf-8' }, // 网站编码形式
      // 移动端需要设置网页的视口viewport，移动设备的宽度width=device-width，初始缩放比initial-scale=1
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // hid 为同一个标识，content是描述信息
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '自定义的描述信息' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      // {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'}
    ],
    // 整个网站名称插入什么，这里是图标
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'} // 载入谷歌的字体
    ]
  },

  // middleware运行时配置一个中间件的函数运行他，中间件名叫auth
  // 路由每次跳转都会找名叫auth的模块然后运行，看起来像个全局守卫
  router: {
    middleware: 'auth',
    // 扩展路由
    extendRoutes(routes, resolve) {
      console.log(routes)
      routes.push({
        name: 'home', // 路由的别名
        path: '/index', // 所以/index可以访问到这个路由页面
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  // 定义系统默认loading条效果更改，
  // 或者自定义指定一loading组件
  // loading: {
  //   color: '#399', height: '3px'
  // },
  loading: '~/components/Loading.vue',


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/transition.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/base.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/router.js',
    {
      src: '~/plugins/axios',
      ssr: true // 开启服务端渲染
    },
    {
      src: '~/plugins/element-ui', // 引入插件相关的配置
      ssr: true
    },
    '~/plugins/mixins'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build' // 配置TS
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // 把相应的模块添加进来
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '~assets/scss/global.scss'
    ]
  },

  // 跨域的配置
  axios: {
    proxy: true, // 开启axios跨域
    // prefix: '/api', // baseURL 地址前缀
  },
  // // 需要跨域时代理转发的api名称以什么前缀开头，并且代理到哪一个服务器的地址
  // proxy: {
  //   '/api/': {
  //     target: 'http://localhost:3001', //代理转发的地址
  //     changeOrigin: true,
  //     pathRewrite: {
  //       // '^api': ''
  //     }

  //   }

  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/], // 打包的时候展示出来
    // You can extend webpack config here
    extend(config, ctx){}
  }
}
