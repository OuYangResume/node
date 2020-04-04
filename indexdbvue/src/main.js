/*
 * @Author: your name
 * @Date: 2020-04-01 11:36:08
 * @LastEditTime: 2020-04-04 10:52:52
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
  mounted(){
    Vue.use(indexDB)
  },
}).$mount('#app')
