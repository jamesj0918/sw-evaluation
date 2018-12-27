import MainLayout from './components/MainLayout'
import TrendView from './components/body/trend/TrendView'
import TrendAll from './components/body/trend/TrendAll'
import TrendLayout from './components/body/trend/TrendLayout'
import Main from './components/body/main/Main'

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                {
                    path: '/',
                    component: Main,
                },
                {
                    path:'trend',
                    component: TrendLayout,
                    children:[
                        {
                            path: '/',
                            component: TrendAll,
                        },
                        {
                            path: ':test',
                            component: TrendView,
                        }
                    ]
                }
            ]
        },
    ]
})


