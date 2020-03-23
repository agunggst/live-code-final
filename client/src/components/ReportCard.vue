<template>
    <div>
        <h4>{{ report.countryName }}</h4>
        <p>Report Cases: {{ report.cases }}</p>
        <p v-on:click="deleteReport(report.id)">delete</p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'ReportCard',
    props: ['report'],
    methods: {
        deleteReport(id) {
            axios({
                method: 'delete',
                url: `${this.$store.state.rootURL}/reports/${id}`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(result => {
                    this.$emit('listAllReport');
                })
                .catch(err => {
                    this.$store.dispatch('errorHandler', err.response);
                });
        }
    }
};
</script>
