import Vue from 'vue'
import dayjs from 'dayjs'
Vue.filter('day-js', (val, format = 'YYYY-MM-DD') => {
  return dayjs(val).format(format)
})
