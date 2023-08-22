import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/category',
    name: 'category',   
    component: () => import('@/views/category.vue')
  },
  {
    path: '/cart',
    name: 'cart',   
    component: () => import('@/views/cart.vue')
  },
  {
    path: '/profile',
    name: 'profile',   
    component: () => import('@/views/profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
