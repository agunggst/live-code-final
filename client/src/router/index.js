import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/LoginPage.vue';
import MainPage from '../views/MainPage.vue';
import ReportPage from '../views/ReportPage.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/report',
        name: 'ReportPage',
        // meta: {
        //     requireLogin: true
        // },
        component: ReportPage
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requireLogin)) {
//         if (localStorage.getItem('token')) {
//             next({
//                 path: '/login'
//             })
//         } else {
//             next()
//         }
//     } else {
//         next()
//     }
// })

export default router;