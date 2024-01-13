// get /api/video

import video from '@/database/video'
// 通过 defineEventHandler 
// see https://nuxt.com.cn/docs/getting-started/server
export default defineEventHandler(() => {
  return video
})