import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

 require('./components');
 require('./assets/scss/app.scss');

import Home from "./components/views/Home";
import About from "./components/views/About";
import Archive from "./components/views/Archive";
import Account from "./components/views/Account";


const routes = [
    { path: '/', component: Vue.component("home-component",Home) },
    { path: '/home', component: Vue.component("home-component",Home) },
    { path: '/about', component: Vue.component("about-component",About) },
    { path: '/archive', component: Vue.component("archive-component",Archive) },
    { path: '/account', component: Vue.component("account-component",Account) },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});


const app = new Vue({
    el: '#app',
    router,
    data: {
        authorName: "Vinn Njeru"
    },

});