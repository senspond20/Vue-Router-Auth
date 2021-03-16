import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)
const route = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
        guest: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
];

const router = new Router({
  mode:"history",
  base: process.env.BASE_URL,
  routes: route
})

router.beforeEach((to, from, next) => {

  // 1번 해결 로컬스토리지 체크
  const loggedIn = localStorage.getItem("user");
  
  console.log("accessToken : ", loggedIn)
  // 2번 해결 requiresAuth 체크
  // if (to.matched.some(record => record.meta.requiresAuth)) {
    // if (loggedIn === null) {
    //   next("/login");
    //   return;
    // }
    
    next();
  // }
  // requiresAuth가 false일때 즉, 권한이 필요 없는 페이지 일때
  // next();
});

export default router;
