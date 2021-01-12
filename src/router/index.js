import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Default = {
  path: '/',
  redirect: '/home'
};

const Home = {
  component: () => import('../views/Home'),
  path: '/home'
};

const routes = [
  Default,
  Home,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
