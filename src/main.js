import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router';
import store from './store/index.js';
import Vuex from 'vuex';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue'

Vue.use(VueRouter)
Vue.use(Vuex);

Vue.component('base-card',BaseCard);
Vue.component('base-button',BaseButton);
Vue.component('base-badge',BaseBadge);

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    router,
    template: '<App />',
    components: {
        App,
        BaseCard
    },
    store: store
}).$mount('#app')