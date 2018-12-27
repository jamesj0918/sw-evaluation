import MainLayout from './components/MainLayout'
import TrendView from './components/body/trend/TrendView'
import TrendAll from './components/body/trend/TrendAll'
import TrendLayout from './components/body/trend/TrendLayout'
import StudentMain from './components/body/main/StudentMain'
import StudentLectureList from './components/body/main/StudentLectureList'
import UserSelect from './components/body/main/UserSelect'

import ProfessorMain from './components/body/main/ProfessorMain'
import ProfessorLectureList from './components/body/main/ProfessorLectureList'
import ProfessorTrendTable from './components/body/professor_trend/ProfessorTrendTable'
import ProfessorTrendGraph from './components/body/professor_trend/ProfessorTrendGraph'
import ProfessorTrendLayout from './components/body/professor_trend/ProfessorTrendLayout'
import ProfessorTrendView from './components/body/professor_trend/ProfessorTrendView'

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainLayout',
            component: MainLayout,
            children: [
                {
                    path: '/',
                    name: 'UserSelect',
                    component: UserSelect,
                },
                {
                    path: '/student/:student_id',
                    name: 'StudentMain',
                    component: StudentMain,
                    children:[
                        {
                            path: '',
                            name: 'StudentLectureList',
                            component: StudentLectureList,
                            children:[
                            ]
                        },
                        {
                            path:'trend',
                            name: 'TrendLayout',
                            component: TrendLayout,
                            children:[
                                {
                                    path:'',
                                    name: 'TrendAll',
                                    component: TrendAll,
                                },
                                {
                                    path: ':test',
                                    name: 'TrendView',
                                    component: TrendView,
                                }
                            ]
                        }
                    ]
                },
                {
                    path:'professor',
                    name:'ProfessorMain',
                    component: ProfessorMain,
                    children:[
                        {
                            path: '',
                            name: 'ProfessorLectureList',
                            component: ProfessorLectureList,
                        },
                        {
                            path: 'trend',
                            name: 'ProfessorTrendLayout',
                            component: ProfessorTrendLayout,
                            children:[
                                {
                                    path:':test',
                                    name: 'ProfessorTrendView',
                                    component: ProfessorTrendView,
                                    children:[
                                        {
                                            path:'/',
                                            name:'ProfessorTrendTable',
                                            component: ProfessorTrendTable,
                                        },
                                        {
                                            path:':num',
                                            name:'ProfessorTrendGraph',
                                            component: ProfessorTrendGraph,
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }

            ]
        },
    ]
})


