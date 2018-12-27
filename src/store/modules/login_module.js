import axios from "axios";
import router from '../../router'

/* TODO add logout sequence */

const LOGIN = "LOGIN";

const state = {
    logged_in: false
};

const mutations = {
    LOGIN (state) {
        state.logged_in = true
    }
};

const actions = {
    LOGIN ({commit}, user_data){
        axios.post('user/signin/',  user_data)
            .then(({data}) => {
                commit(LOGIN);
                axios.defaults.headers.common['Authorization'] = 'JWT ' + data.token;
                axios.get('profile/',
                    {
                        headers: {
                            'Authorization': 'JWT ' + data.token
                        }
                    })
                    .then((response) => {
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("user_pk", response.data.id);
                        router.push('/');
                    })
            })
            .catch(() => {
                alert('로그인 정보를 확인해 주세요');
            });
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
