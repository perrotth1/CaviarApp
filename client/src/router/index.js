import { createRouter, createWebHistory } from 'vue-router';
import Session from '../services/session';


import Home from '../views/Home.vue';
import MakePost from '../views/MakePost.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Profile from '../views/Profile.vue';
import Discover from '../views/Discover.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresLogin: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/makepost',
    name: 'MakePost',
    component: MakePost,
    meta: { requiresLogin: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresLogin: true }
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  //If "to" (page you are going to) requires login AND session doesn't have user object defined (not logged in), take user to login page
  if(to.meta.requiresLogin && !Session.user) {
    next('/login');
  }
  else {
    next();
  }
})

export default router;
