// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
//import axios from 'axios'
import 'font-awesome/css/font-awesome.css'


Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
//Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//路由跳转前验证
router.beforeEach((to, from, next) => {
  //console.log('进入验证')
  if(to.path === '/login'){
    sessionStorage.removeItem('user');
  }
  var user = sessionStorage.getItem('user');
  if(!user && to.path !== '/login'){
    console.log('进入验证')
    next({
      path: '/login'
    })
  }else{
    next();
  }
})
