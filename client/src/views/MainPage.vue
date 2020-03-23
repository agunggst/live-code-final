<template>
    <div>
        <div>
            <input type="text" v-model="filter" />
        </div>
        <div class="card-container">
            <div v-for="country in countries" v-bind:key="country.id">
                <CountryCard v-bind:country="country"></CountryCard>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import CountryCard from '../components/CountryCard.vue';

export default {
    name: 'MainPage',
    components: {
        CountryCard
    },
    data() {
        return {
            filter: '',
            countries: []
        };
    },
    methods: {
        listAllCountry() {
            axios({
                method: 'get',
                url: `${this.$store.state.rootURL}/countries`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(result => {
                    this.$store.state.countries = result.data;
                    this.countries = result.data;
                })
                .catch(err => {
                    this.$store.dispatch('errorHandler', err.response);
                });
        }
    },
    created() {
        this.listAllCountry();
    }
};
</script>
