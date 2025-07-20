import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "blank",
      component: () => import('@/components/views/BlankView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/views/LoginView.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/components/views/HomeMenu.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('@/components/views/MemberView.vue'),
      meta: { requiresAuth: true }
    }
  ],
})

router.beforeEach((to, from, next) => {
  const authInfo = JSON.parse(localStorage.getItem('auth'))
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !authInfo) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
