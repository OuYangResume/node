import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router1={
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
}

const router2 ={
  routes:[
    {
      path:"/",
      name:"resume",
      component:() =>import("@/views/home/index")
    }
  ]
}
const router3 ={
  routes:[
    {
      path:"/",
      name:"resume",
      component:() =>import("@/views/home1/index")
    }
  ]
}

export default new Router(router3)
