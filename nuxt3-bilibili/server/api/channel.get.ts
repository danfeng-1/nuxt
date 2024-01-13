// get /api/channel

import channel from '@/database/channel'
// 通过 defineEventHandler 
// see https://nuxt.com.cn/docs/getting-started/server
export default defineEventHandler(() => {
  return channel
})