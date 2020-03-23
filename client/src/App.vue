<template>
    <div id="app">
        <header>
            <h4>COVID-19</h4>
            <ul class="middle-nav">
                <li v-if="$store.state.isLogin">
                    <router-link to="/">
                        Countries
                    </router-link>
                </li>
                <li v-if="$store.state.isLogin">
                    <router-link to="/report">
                        Reports
                    </router-link>
                </li>
            </ul>
            <ul class="right-nav">
                <li v-if="!$store.state.isLogin">
                    <router-link to="/login">
                        <button>Login</button>
                    </router-link>
                </li>
                <li v-if="$store.state.isLogin">
                    <button v-on:click="logout">Logout</button>
                </li>
            </ul>
        </header>
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'App',
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$store.commit('setLogout');
            this.$router.push({path: '/login'});
        }
    }
};
</script>
