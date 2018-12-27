const SET_STUDENT_ID = "SET_STUDENT_ID";

const state = {
    student_id : ""
};

const mutations = {
    SET_STUDENT_ID (state, student_id) {
        state.student_id = student_id
    }
};
const actions = {
    SET_STUDENT_ID ({commit}, student_id) {
        commit(SET_STUDENT_ID, student_id)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}