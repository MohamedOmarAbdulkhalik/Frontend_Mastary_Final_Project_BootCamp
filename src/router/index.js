import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Projects from '@/components/Projects.vue'
import Donate from '@/components/Donate.vue'
import Dashboard from '@/components/Dashboard.vue'
import AdminDonate from '@/components/AdminDonate.vue'
import AdminExpenses from '@/components/AdminExpenses.vue'
import AdminProjects from '@/components/AdminProjects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
    {
    path: '/Donate',
    name: 'Donate',
    component: Donate
  },
      {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
        {
    path: '/AdminDonate',
    name: 'AdminDonate',
    component: AdminDonate
  },
        {
    path: '/AdminExpenses',
    name: 'AdminExpenses',
    component: AdminExpenses
  },
        {
    path: '/AdminProjects',
    name: 'AdminProjects',
    component: AdminProjects
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router