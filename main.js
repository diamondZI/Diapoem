import App from './App'
import { createPinia } from "pinia"
const pinia=createPinia()
// #ifndef VUE3
import Vue from 'vue'

import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
app.use(pinia)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
	
  const app = createSSRApp(App)
   app.use(pinia)
  return {
    app
  }
}
// #endif