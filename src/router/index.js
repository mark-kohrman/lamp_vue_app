import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LampsIndex from '../views/LampsIndex.vue';
import LampsShow from '../views/LampsShow.vue';
import LampsNew from '../views/LampsNew.vue';
import LampsEdit from '../views/LampsEdit.vue';



Vue.use(VueRouter);

const routes = [
  {
    path: '/lamps',
    name: 'LampsIndex',
    component: LampsIndex
  },
  {
    path: '/lamps/new',
    name: 'LampsNew',
    component: LampsNew
  },
  {
    path: '/lamps/:id',
    name: 'LampsShow',
    component: LampsShow
  },
  {
    path: '/lamps/:id/edit',
    name: 'LampsEdit',
    component: LampsEdit
  },
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
