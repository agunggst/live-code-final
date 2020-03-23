<template>
    <div>
        <h4>{{ country.name }}</h4>
        <p>
            Cases: {{ country.cases }} Death: {{ country.deaths }} Recovered:
            {{ country.recovered }}
        </p>
    </div>
</template>
<script>
export default {
    name: 'CountryCard',
    props: ['country']
};
</script>
