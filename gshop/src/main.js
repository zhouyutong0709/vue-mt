/** 入口文件*/
import Vue from 'vue'
import App from './App'

// 新添加部分
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})

