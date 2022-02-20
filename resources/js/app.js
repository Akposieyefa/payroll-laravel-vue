require('./bootstrap');

const Vue = require("vue").default;

import router from './router';
import store from './store';
import Toasted from 'vue-toasted';
import  './axios';

Vue.mixin(require('./asset'));
Vue.component('app', require('./App.vue').default);

Vue.use(Toasted, {
    duration: 2500,
    position: 'top-right',
    iconPack: 'material'
})

const app = new Vue({
    router,
    store,
    el: '#app',
});
