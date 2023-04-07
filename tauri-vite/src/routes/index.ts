import * as VueRouter from 'vue-router';
import App from '../App.vue';
import Helloworld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: Helloworld
  }
]
export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});