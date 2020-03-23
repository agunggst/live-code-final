<template>
    <div class="user-access">
        <div>
            <h4 class="login-title">Login</h4>
        </div>
        <form v-on:submit.prevent="login">
            <div class="textbox">
                <input type="text" placeholder="username" v-model="username" />
            </div>
            <div class="textbox">
                <input
                    type="password"
                    placeholder="password"
                    v-model="password"
                />
            </div>
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            axios({
                method: 'post',
                url: `${this.$store.state.rootURL}/login`,
                data: {
                    username: this.username,
                    password: this.password
                }
            })
                .then(result => {
                    localStorage.setItem('token', result.data.token);
                    this.username = '';
                    this.password = '';
                    this.$store.commit('setLogin');
                    this.$router.push({path: '/'});
                })
                .catch(err => {
                    this.$store.dispatch('errorHandler', err.response);
                });
        }
    }
};
</script>
