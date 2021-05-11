// import Vue from 'vue'
// import Router from 'vue-router'
import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'     //注册组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


// export default new Router({
//   routes:[{
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }]
// })