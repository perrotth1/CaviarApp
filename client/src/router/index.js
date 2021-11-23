import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Post from '../views/Post.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Profile from '../views/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/post',
    name: 'Post',
    component: Post,
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
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  //If "to" (page you are going to) requires login AND session doesn't have user object defined (not logged in), take user to login page
  if(to.meta.requiresLogin && !sessionStorage.user) {
    next('/login');
  }
  else {
    next();
  }
})

export default router;
