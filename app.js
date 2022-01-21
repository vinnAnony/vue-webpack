import Vue from 'vue'
import router from './router/index'
import store from './store/index'

 require('./components');
 require('./assets/scss/app.scss');


const app = new Vue({
    el: '#app',
    router,
    store,
    data: {
        authorName: "Vinn Njeru"
    },

});