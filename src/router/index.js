import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewBlog from '@/components/NewBlog'
import EditBlog from '@/components/EditBlog'
import ViewBlog from '@/components/ViewBlog'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/new',
    name: 'new-blog',
    component: NewBlog
  },
  {
    path: '/edit/:blog_id',
    name: 'edit-blog',
    component: EditBlog
  },
  {
    path: '/:blog_id',
    name: 'view-blog',
    component: ViewBlog,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
