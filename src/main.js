import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store/main_store'

import VueRouter from 'vue-router'
import router from './router'
import Trend from 'vuetrend'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Trend);
Vue.use(VueApexCharts);

axios.defaults.baseURL = "https://evaluator-api.herokuapp.com/api/";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
