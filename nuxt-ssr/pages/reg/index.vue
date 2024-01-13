<template>
  <div class="reg">
    <h3>注册</h3>
    <el-divider></el-divider>
    <el-input v-model="username" placeholder="请输入用户名" class="mb">
      <template slot="prepend">用户</template>
    </el-input>
    <el-input type="password" v-model="password" placeholder="请输入密码" class="mb">
      <template slot="prepend">密码</template>
    </el-input>
    <div class="error">{{message}}</div>
    <el-button type="primary" @click="reg">注册</el-button>
    <el-button @click="$router.push('/login')">登录</el-button>
    
  </div>
</template>
<script >
/*
// script 中lang='ts'

import {Component, Vue} from 'vue-property-decorator'
import {Route} from 'vue-router'
@Component({
  beforeRouteLeave (to:Route, from:Route, next:Function) {
    if(this.username || this.password) {
      let bl:boolean = window.confirm('是否要离开')
      next(bl)
    } else {
      next()
    }
  },
})
export default class Reg extends Vue{
  username: string = ''
  password: string = ''
  message: string = ''

  async reg() {
    let formData = new FormData()
    formData.append('username', this.username)
    formData.append('password', this.password)
    let res = await this.$axios({
      url: '/api/reg',
      method: 'post',
      data: formData
    })
    if(res.data.err == 0) {
      this.$router.push('/login')
    } else {
      // 报错信息提示
      this.message = res.data.msg
    }
  }
}
*/

export default {
  data: () => ({
    username: '',
    password: '',
    message: ''
  }),
  // 组件内独享后置守卫
  beforeRouteLeave (to, from, next) {
    if(this.username || this.password) {
      let bl = window.confirm('是否要离开')
      next(bl)
    } else {
      next()
    }
  },

  methods: {
    async reg() {
      let formData = new FormData()
      formData.append('username', this.username)
      formData.append('password', this.password)
      let res = await this.$axios({
        url: '/api/reg',
        method: 'post',
        data: formData
      })
      if(res.data.err == 0) {
        this.$router.push('/login')
      } else {
        // 报错信息提示
        this.message = res.data.msg
      }
    }
  },
}

</script>
<style scoped>
.reg{
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