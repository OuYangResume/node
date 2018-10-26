import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import("@/components/HelloWorld")
    },
    {
      path: '/index',
      name: 'Index',
      component: ()=>import("@/views/index"),
      redirect: '/index/welcome',//默认进入子路由路径
      children:[
        {
          path:'welcome',
          name:'欢迎页',
          component:()=>import("@/views/welcome")
        },
        {
          path:'lol',
          name:'lol',
          component:()=>import("@/views/lol/index")
        },
      ]
    }
  ]
})
