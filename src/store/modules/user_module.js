
const SET_STUDENT_ID = "SET_STUDENT_ID";
const SET_USER= "SET_USER";

const state = {
    student: true,
    student_id: '',
};

const mutations = {
    SET_USER(state, user){
        state.student = user;
    },
    SET_STUDENT_ID(state, student_id){
        state.student_id = student_id;
    }
};

const actions = {
    SET_USER({commit},user){
        commit(SET_USER, user);
    },
    SET_STUDENT_ID({commit},student_id){
        commit(SET_STUDENT_ID,student_id);
    }
};

export default {
    state,
    mutations,
    actions
}
