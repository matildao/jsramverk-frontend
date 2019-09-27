import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { validateToken } from './actions/authenticate';

Vue.use(Router);

function checkValidationOfToken(next) {
  const token = localStorage.getItem('token');

  validateToken(token).then(res => {
    if (res.status === 200) {
      next();
    } else {
      next('/notauthorized');
    }
  });
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/reports',
      name: 'report',
      component: () => import('./views/Report.vue'),
      beforeEnter: (to, from, next) => {
        checkValidationOfToken(next);
      },
    },
    {
      path: '/reports/week/:number',
      name: 'weekly reports',
      component: () => import('./views/WeeklyReports.vue'),
      beforeEnter: (to, from, next) => {
        checkValidationOfToken(next);
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/User.vue'),
      beforeEnter: (to, from, next) => {
        checkValidationOfToken(next);
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./views/ChatPage.vue'),
    },
    {
      path: '/notauthorized',
      name: 'notauthorized',
      component: () => import('./views/NotAuthorized.vue'),
    },
  ],
});
