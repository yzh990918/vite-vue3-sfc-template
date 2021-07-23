import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Pinia from '@/views/pinia.vue';
import VueRouter from '@/views/vue-router.vue';
import Axios from '@/views/Axios.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: Pinia,
  },
  {
    path: '/vue-router',
    name: 'VueRouter',
    component: VueRouter,
  },
  {
    path: '/axios',
    name: 'axios',
    component: Axios,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
