import VueRouter ,{createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetailRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
        { path: '/coaches/:id',component:CoachDetail,children:[
            {path:'contact',component:ContactCoach} // /contact/c1/contact
        ]},
        { path: '/coaches',component:CoachesList},
        
        { path: '/register',component:CoachDetailRegistration},
        { path: '/requests',component:RequestsReceived},
        { path:'/',redirect:'/coaches'},
        { path: '/:notFound(.*)',component:NotFound},
    
];

export default routes;