import Vue from 'vue';
import VueRouter from 'vue-router'

import '../../styles/index.scss'
import 'themify-icons-scss/scss/themify-icons.scss'

import store from '../../store/pages/home/about.store.js'

Vue.use(VueRouter)

// const routes = [
//     { path: '/', component: require('../../components/home/Home.vue').default }
//   // { path: '/home/contact', component: require('./components/counter/counter.vue.html') },
//   // { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') }
// ]

const app = new Vue({
    el: '#app-template',
    // router: new VueRouter({ routes: routes }),
    store,
    render: h => h(require('../../app/home/about.app.vue').default)
})