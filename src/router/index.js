import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPageView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/users/:id', 
    component: () => import('../components/UserPage.vue'),
    props: true
    // children : [
    //   {
    //     path: '/albums/:id',
    //     name: 'albums',
    //     component: () => import('../views/AlbumView.vue'),
    //     props: route =>({...route.params, id:parseInt(route.params.id)}),
    //     children : [
    //       {
    //         path: '/photos',
    //         name: 'photo',
    //         component: () => import('../views/PhotoView.vue')
    //       }
    //     ]
    //   }
    // ]
  },
  {
    path: '/users/:id/albums/:id', 
    component: () => import('../views/AlbumView.vue'),
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
