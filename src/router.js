import Vue from "vue";
import Router from "vue-router"; 

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path:'/',
      component: () => import('@/layouts/Default.vue'),
      children: [ 
        { path: '', name: 'login', component: () => import('@/views/Login.vue') },
        { path: 'landing', name: 'landing', component: () => import('@/views/Landing.vue') }, 
        { path: 'not-found', name: 'not-found', component: () => import('@/views/NotFound.vue') },
        { path: 'alert', name: 'alert', component: () => import('@/views/Alert.vue') },
        { path: 'welcome', name: 'welcome', component: () => import('@/views/Welcome.vue') },
        { path: 'register', name: 'register', component: () => import('@/views/Register.vue') },
        { path: 'verify', name: 'verify', component: () => import('@/views/Verifyaccount.vue') },
      ]
    },
    
    {
      path: "/dashboard",
      component: () => import('@/layouts/UserDashboard.vue'),
      meta: {
        requiresAuth: true
      },
      children: [ 
        { path: '', name: 'dashboard', component: () => import('@/views/dashboard/Dashboard.vue') },
        { path: 'results', name: 'dashboard-result', component: () => import('@/views/dashboard/DashboardResult.vue') }
      ]
    },
    {
      path: "*",
      component: () => import('@/views/NotFound.vue'),
    },


  ]
});
