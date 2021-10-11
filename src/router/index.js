import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import VueRouter from 'vue-router'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Forgetpassword from '../views/Forgetpassword.vue'
import Resetpassword from '../views/Resetpassword.vue'
// import Vue from 'vue'
require('dotenv').config()
// Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgetpassword',
    name: 'Forgetpassword',
    component: Forgetpassword
  },
  {
    path: '/resetpassword/:token',
    name: 'Resetpassword',
    component: Resetpassword
  },
  
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//     path: '/signup',
//     name: 'SignUp',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
//   }
//   ,
//   {
//      path: '/forgetpassword',
//      name: 'Forgetpassword',
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//      component: () => import(/* webpackChunkName: "login" */ '../views/Forgetpassword.vue')
//    },
//    {
//     path: '/resetpassword/:token',
//     name: 'Resetpassword',
//  //   // route level code-splitting
//  //   // this generates a separate chunk (about.[hash].js) for this route
//  //   // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "login" */ '../views/Resetpassword.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
