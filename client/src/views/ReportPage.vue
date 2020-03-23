<template>
    <div>
        <h4>Add Report</h4>
        <form v-on:click.prevent="addReport">
            <select v-model="countryIdSelected" style="width: 200px;">
                <option
                    v-for="country in $store.state.countries"
                    v-bind:key="country.id"
                    v-bind:value="country.id"
                    >{{ country.name }}</option
                >
            </select>
            <input type="number" v-model="numberCases" />
            <button type="submit">Add</button>
        </form>
        <div class="card-container">
            <div v-for="report in reports" v-bind:key="report.id">
                <ReportCord
                    v-bind:report="report"
                    v-on:listAllReport="listAllReport"
                ></ReportCord>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import ReportCord from '../components/ReportCard.vue';

export default {
    name: 'ReportPage',
    components: {
        ReportCord
    },
    data() {
        return {
            reports: [],
            numberCases: 0,
            countryIdSelected: ''
        };
    },
    methods: {
        listAllReport() {
            console.log('masuk');
            axios({
                method: 'get',
                url: `${this.$store.state.rootURL}/reports`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(result => {
                    this.reports = result.data;
                })
                .catch(err => {
                    this.$store.dispatch('errorHandler', err.response);
                });
        },
        addReport() {
            axios({
                method: 'post',
                url: `${this.$store.state.rootURL}/reports`,
                headers: {
                    token: localStorage.getItem('token')
                },
                data: {
                    cases: numberCases,
                    countryId: countryIdSelected
                }
            });
        }
    },
    created() {
        this.listAllReport();
    }
};
</script>
