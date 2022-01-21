const user = JSON.parse(localStorage.getItem('user'));


export const auth = {
    namespaced: true,
    state: {
        status: {
            loggedIn: user ? true : false
        },

        user: user
    },

    getters: {
        authState: state => state.status,
        user: state => state.user,
    },

    actions: {
        login({commit},user) {
            //localStorage.setItem('user', JSON.stringify(user));
            commit('login');
        },
        logout({ commit }) {
            localStorage.clear();
            commit('logout');
        },
    },
    mutations: {
        logout(state) {
            state.status.loggedIn = false;
            state.user = {};
        },
        login(state) {
            state.status.loggedIn = true;
            state.user = null;
        },
    }
};