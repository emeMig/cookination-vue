<template>
    <form @submit.prevent class="form-search">
        <input class="form-control" type="search" placeholder="Search for a meal..." v-model="searchTerm" @change="sendTerm" />
    </form>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return {
            searchTerm: '',
        }
    },
    methods: {
        sendTerm(){
            this.$router.push(`/search/${this.searchTerm}`)
            this.searchTerm = ''
        }
    },
}
</script>
