const mapRoutes=[
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

export default mapRoutes