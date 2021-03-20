import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home/index.vue'
import add from '../views/add/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/add',
    name: 'add',
    component: add
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes: routes
})