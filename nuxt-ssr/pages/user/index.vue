<template>
  <div class="user">
    <h3>用户</h3>
    <el-button onclick="logout">注销</el-button>
    <el-button onclick="alert($)">组件引入的外部脚本</el-button>
  </div>
</template>

<script>
export default {
  // 脚本引入的第三种方式，在组件内部引入
  head: {
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'}
    ]
  },
  methods: {
    logout() {
      // 删除vuex缓存，清除 cookie，与登录的相反
      this.$store.commit('user/M_UPDATE_USER', {
        err: 1, 
        msg: '未登录',
        token: '',
        data: {}
      })
      this.$cookies.clear('user')
      this.$router.push('/login')
    }
  },
}
</script>