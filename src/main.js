import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router';
import store from './store/index.js';
import Vuex from 'vuex';
Vue.use(VueRouter)
Vue.use(Vuex);
const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    router,
    template: '<App />',
    components: {
        App
    },
    store: store
}).$mount('#app')