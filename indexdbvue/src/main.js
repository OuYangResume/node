/*
 * @Author: your name
 * @Date: 2020-04-01 11:36:08
 * @LastEditTime: 2020-04-02 10:53:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import indexDB from './utils/indexDB/index.js'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(indexDB);

new Vue({
  router,
  store,
  render: h => h(App),
 
}).$mount('#app')
