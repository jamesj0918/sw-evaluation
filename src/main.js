import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import Trend from 'vuetrend';

Vue.use(VueRouter);
Vue.use(Trend);

Vue.config.productionTip = false

const router = new VueRouter({
    routes
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
