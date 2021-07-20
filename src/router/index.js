import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/app'
import Dashboard from '@/components/Dashboard'
import NewBlog from '@/components/NewBlog'
import EditBlog from '@/components/EditBlog'
import ViewBlog from '@/components/ViewBlog'
import Login from '@/components/Login'
import Register from '@/components/Register'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new',
    name: 'new-blog',
    component: NewBlog,
    meta: {
      requiresAuth: true
    }
    
  },
  {
    path: '/edit/:blog_id',
    name: 'edit-blog',
    component: EditBlog,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:blog_id',
    name: 'view-blog',
    component: ViewBlog,
    meta: {
      requiresAuth: true
    }
    // props: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiredAuth Guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NOT logged in
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
    else {
      // Proceed to toute
      next()
    }
  }
  else if(to.matched.some(record => record.meta.requiresGuest)){
    // Check if logged in
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }
    else {
      // Proceed to toute
      next()
    }
  }
  else {
    next()
  }
})


export default router
