import VueRouter ,{createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetailRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const routes = [
        {   path: '/coaches/:id',
            component:CoachDetail,
            props:true,
            children:[
                {path:'contact',component:ContactCoach} // /contact/c1/contact
            ]
        },
        { path: '/coaches',component:CoachesList},
        
        { path: '/register',component:CoachDetailRegistration, meta:{ requiresAuth :true} },
        { path: '/requests',component:RequestsReceived , meta:{ requiresAuth :true}},
        { path: '/auth',component: UserAuth , meta:{ requiresUnauth :true}},
        { path:'/',redirect:'/coaches'},
        { path: '/:notFound(.*)',component:NotFound},
    
];


export default routes;