import Vue from 'vue'
import {NuxtAxiosInstance} from '@nuxtjs/axios'
import {NuxtCookies} from 'cookie-universal-nuxt'
// 重写vue类型，让其具备类型
declare module 'vue/types/vue'{
  interface Vue{
    $axios: NuxtAxiosInstance;
    $seo: Function;
    detail: {title: string, des:string}
    $show: () => void
    $cookies: NuxtCookies
    username: string
    password: string

  }
}