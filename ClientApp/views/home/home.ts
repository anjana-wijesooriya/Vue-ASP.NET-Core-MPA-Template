import Vue from 'vue';

import 'bootstrap/scss/bootstrap.scss'
import 'themify-icons-scss/scss/themify-icons.scss'
import '../../styles/index.scss'

import store from '../../store/pages/home/homeStore.js'

import HomeApp from '../../components/home/Home.vue'

Vue.component('core-view', HomeApp)

const app = new Vue({
    el: '#app',
    store
})