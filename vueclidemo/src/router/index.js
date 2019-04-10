import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

let demoRouter =new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import("@/components/HelloWorld")
    },
    {
      path: '/index',
      name: 'Index',
      // 控制菜单的显示隐藏
      hidden: true,
      component: () => import("@/views/index"),
      redirect: '/index/welcome',//默认进入子路由路径
      children: [
        {
          path: 'welcome',
          name: '欢迎页',
          component: () => import("@/views/welcome"),
          meta: { title: 'leaflet', icon: 'example' },
        },
        {
          path: 'lol',
          name: 'lol',
          component: () => import("@/views/lol/index")
        },
        {
          path: 'map',
          name: 'map',
          component: () => import("@/views/map/index"),
          redirect: '/index/map/addWMS',
          children: [
            {
              path: 'addWMS',
              name: 'addwms',
              component: () => import("@/views/map/addWMS.vue")
            }
          ]
        },
      ]
    }
  ]
})

let photoRouter =new Router({
  routes:[
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import("@/views/welcome")
    },
    {
      path:'/upload',
      name:'upload',
      component:() =>import("@/views/photo/upload")
    },
    {
      path:'/scroll',
      name:'Scroll',
      component:() =>import("@/views/photo/scroll")
    }
  ]
})
export default demoRouter
