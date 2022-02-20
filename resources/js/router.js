import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new  VueRouter({

    routes: [

        { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
        { path: '/verify-email', name: 'Verify', component: () => import('./views/Verify.vue') },
        { path: '/forget-password', name: 'ForgetPassword', component: () => import('./views/ForgetPassword.vue') },

        { path: '/departments', name: 'Department', component: () => import('./views/backend/department/Departments.vue') },
        { path: '/levels', name: 'Levels', component: () => import('./views/backend/level/Levels.vue') },
        { path: '/steps', name: 'Steps', component: () => import('./views/backend/step/Steps.vue') },
        { path: '/staffs', name: 'Staffs', component: () => import('./views/backend/staff/Staffs.vue') },
        { path: '/staff-profile/:slug', name: 'StaffDetails', component: () => import('./views/backend/staff/StaffDetails.vue') },
        { path: '/create-staff', name: 'CreateStaff', component: () => import('./views/backend/staff/CreateStaff.vue') },
        { path: '/upload-payroll', name: 'UploadPayroll', component: () => import('./views/backend/payroll/UploadPayroll.vue') },
        { path: '/payrolls', name: 'Payrolls', component: () => import('./views/backend/payroll/Payrolls.vue') },
        { path: '/banks', name: 'Banks', component: () => import('./views/backend/bank/Banks.vue') },

        { path: '/profile', name: 'Profile', component: () => import('./views/backend/Profile.vue') },

        { path: '/dashboard', name: 'Dashboard', component: () => import('./views/backend/Dashboard.vue') },

        { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/','/verify-email', '/forget-password'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (authRequired && !loggedIn) {
        return next('/');
    }else {
        next();
    }
});

export default router;
