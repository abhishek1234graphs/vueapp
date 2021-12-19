
import coachesModule from './modules/coaches/index.js';
import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        coaches:coachesModule
    }
});

export default store;