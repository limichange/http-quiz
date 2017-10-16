// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import { Button } from 'element-ui'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import 'normalize.css'

// Vue.component(Button.name, Button)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

FastClick.attach(document.body)
