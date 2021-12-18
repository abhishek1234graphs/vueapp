import { createRouter,createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetailRegistration from './pages/coaches/CoachDetailRegistration.vue';
import ContactCoach from './pages/requests/CoachDetail.vue';
import RequestsReceived from './pages/requests/CoachDetail.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        { path:'/',redirect:'/coaches'},
        { path: '/coaches',component:CoachesList},
        { path: '/coaches/:id',component:CoachDetail,children:[
            {path:'contact',component:ContactCoach} // /contact/c1/contact
        ]},
        { path: '/register',component:CoachDetailRegistration},
        { path: '/requests',component:RequestsReceived},
        { path: '/:notFound(.*)',component:NotFound}
    ]
});

export default router;