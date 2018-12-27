
const SET_SIDEBAR = "SET_SIDEBAR";
const OPEN_SIDEBAR = "OPEN_SIDEBAR";
const state = {
    home: true,
    open: false,
};

const mutations = {
    SET_SIDEBAR(state,path){
        if(path === '/' || path === '/subscription' || path === '/createchannel' || path === '/search'){
            state.home = true;
        }
        else{
            state.home = false;
        }
    },
    OPEN_SIDEBAR(state){
        state.open = !state.open;
    }
};

const actions = {
    SET_SIDEBAR ({commit}, path){
        commit(SET_SIDEBAR, path)
    },
    OPEN_SIDEBAR({commit}){
        commit(OPEN_SIDEBAR)
    }
};

export default {
    state,
    mutations,
    actions
}