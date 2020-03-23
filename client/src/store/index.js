import Vue from 'vue';
import Vuex from 'vuex';
// import Swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: localStorage.getItem('token') ? true : false,
        rootURL: 'http://localhost:3000',
        countries: []
    },
    mutations: {
        setLogin: state => {
            state.isLogin = true;
        },
        setLogout: state => {
            state.isLogin = false;
        }
    },
    actions: {
        errorHandler: (context, payload) => {
            console.log(payload.data);
        }
    }
});