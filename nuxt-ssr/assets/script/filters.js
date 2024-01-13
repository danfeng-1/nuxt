// 各种小工具过滤器

// 补0
export function fillzero(n) {
  return n < 10 ? '0' + n : '' + n
}

// 获取时间
export const date = time => {
  let d = new Date()
  d.setTime(time)
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let date = d.getDate()
  let hour = d.getHours()
  let min = d.getMinutes()
  let sec = d.getSeconds()
  return `${year}年${fillzero(month)}月${fillzero(date)}日${fillzero(hour)}时${fillzero(min)}分${fillzero(sec)}秒`
  
}