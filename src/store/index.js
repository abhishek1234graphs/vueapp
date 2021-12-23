
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        coaches:coachesModule,
        requests:requestsModule
    },
    state(){
        return{
            userId: 'c3'
        }
    },
    getters:{
        userId(state){
            return state.userId;
        }
    }
});

export default store;