<template>
  <div class="login">
    <!-- <button @click="login">登录</button> -->
    <h3>登录</h3>
    <el-divider></el-divider>
    <el-input v-model="username" placeholder="请输入用户名" class="mb">
      <template slot="prepend">用户</template>
    </el-input>
    <el-input type="password" v-model="password" placeholder="请输入密码" class="mb">
      <template slot="prepend">密码</template>
    </el-input>
    <div class="error">{{message}}</div>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="$router.push('/reg')">注册</el-button>
  </div>
</template>
<script>
/*
// script标签里lang="ts"


import {Component, Vue} from 'vue-property-decorator'
@Component
export default class Login extends Vue{
  username: string = ''
  password: string = ''
  message: string = ''

  login() {
      this.$axios({
        url: '/api/login', // 数据请求接口
        method: 'post',
        data: {
          username: this.username,//'lan',
          password: this.password, //'123456'
        }
      }).then(res => {
        if(res.data.err == 0) { // 登录成功
          // 同步请求回来的数据到vuex && cookie
          this.$store.state('user/M_UPDATE_USER', res.data)
          this.$cookies.set('user', res.data)

          // 如果当前的路径没有query参数或者是登录注册页面，那就跳转到用户页面
          if(!this.$route.query.path || /login|reg/.test(this.$route.query.path as string)) { // 没法确定类型用类型扮演as
            this.$router.replace('/user')
          } else { // 否则就是有query的路径，往给定的路径跳转
            // 就像是首页，做完校验之后登录后那就跳转往首页来时的页面
            this.$router.replace(<string>this.$route.query.path)
          }
        } else { // 登录失败
          this.message = res.data.msg
        }
      })
    }

}
*/


export default {
  middleware() { // 或者也可以定义在页面内部的中间件，定义在页面内部，只有在这个页面被加载的时候会运行在这个页面实例化之前
    console.log('middleware 3.2 page inside')
  },
  data: () => ({
    username: '',
    password: '',
    message: ''
  }),
  methods: {
    login() {
      this.$axios({
        url: '/api/login', // 数据请求接口
        method: 'post',
        data: {
          username: this.username,//'lan',
          password: this.password, //'123456'
        }
      }).then(res => {
        if(res.data.err == 0) { // 登录成功
          // 同步请求回来的数据到vuex && cookie
          this.$store.state('user/M_UPDATE_USER', res.data)
          this.$cookies.set('user', res.data)

          // 如果当前的路径没有query参数或者是登录注册页面，那就跳转到用户页面
          if(!this.$route.query.path || /login|reg/.test(this.$route.query.path)) {
            this.$router.replace('/user')
          } else { // 否则就是有query的路径，往给定的路径跳转
            // 就像是首页，做完校验之后登录后那就跳转往首页来时的页面
            this.$router.replace(this.$route.query.path)
          }
        } else { // 登录失败
          this.message = res.data.msg
        }
      })
    }
  },
}

</script>

<style scoped>
.login{
  width: 35%;
  height: auto;
  position: absolute;
  left:50%;
  top:50%;
  margin-left: -17%; /* 上述宽度占比35%,居中减去自身宽度的一半 */
  transform: translateY(-50%); /*第二种方式Y方向*/
}
.mb{
  margin-bottom: 20px;
}
.error{
  color: red;
}
</style>