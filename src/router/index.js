import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/components/Login'
// import Home from '@/components/Home'
import Supplies from '@/views/supplies/'
import Instorage from '@/views/instorage/'
import Outstorage from '@/views/outstorage/'
import Storages from '@/views/storages/'
import Permission from '@/views/permission/'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: '/login'
  },
  { 
    path: '/login', 
    component: () => import('@/components/Login')   // 赖加载
  },  
  { 
    path: '/home', 
    component: () => import('@/components/Home'),

    // 子路由
    children: [
      {
        path:'',  //为空，默认子路由
        component: () => import('@/components/Mian')
      },
      {
        path:'/supplies',
        name:'supplies',
        component: Supplies
      },
      {
        path:'/instorage',
        name:'instorage',
        component: Instorage
      },
      {
        path:'/outstorage',
        name:'outstorage',
        component: Outstorage
      },
      {
        path:'/storages',
        name:'storages',
        component: Storages
      },
      {
        path:'/permission',
        name:'permission',
        component: Permission
      }
    ]
  }
  
]

const router = new VueRouter({
  routes
})


//挂载路由导航守卫

export default router