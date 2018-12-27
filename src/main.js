import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/main_store'

import VueRouter from 'vue-router'
import router from './router'
import Trend from 'vuetrend'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Trend);
Vue.use(VueApexCharts);


Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
