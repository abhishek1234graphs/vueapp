
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import Vue from 'vue'
import Vuex from 'vuex';
import authModule from './modules/auth/index.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        coaches:coachesModule,
        requests:requestsModule,
        auth:authModule
    },
    
    
});

export default store;