// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ddSet from './assets/js/ddSet'
import store from "./store";
// import VConsole from 'vconsole'

// new VConsole()
//控制字体
import './assets/js/fontSize'
//钉钉方法调用
Vue.prototype.ddSet = ddSet

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
