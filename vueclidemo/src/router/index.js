import Vue from 'vue'
import Router from 'vue-router'
import mapRouter from './map'
import uploadRouter from './upload'
Vue.use(Router)

const routes= [...mapRouter,...uploadRouter];

export default new Router({
  mode: 'history',
  routes:routes
})
