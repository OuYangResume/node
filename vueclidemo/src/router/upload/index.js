export default [
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