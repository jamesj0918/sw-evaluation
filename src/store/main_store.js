import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user_module'


Vue.use(Vuex)

Vue.prototype.$bus = new Vue();

const main_store = new Vuex.Store({
    modules: {
        user
    }
});

export default main_store
