import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Trend from 'vuetrend'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueRouter);
Vue.use(Trend);
Vue.use(VueApexCharts);


Vue.config.productionTip = false;


new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
