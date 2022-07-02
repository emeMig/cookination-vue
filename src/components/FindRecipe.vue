<template>
    <section class="section-newsletter">
        <div class="container">
            <h2 class="newsletter-title mb-4">Find your recipe</h2>
            <search-bar></search-bar>
            <ul class="search-menu">
            <li v-for="(value,key) in alphabet" :key="key" >
                <router-link :to="'/search/'+value">{{ value }}</router-link>
            </li>
            </ul>
        </div>
    </section>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
export default {
    name: 'FindRecipe',
    components: {
        SearchBar
    },
    data() {
        return {
            alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Z']
        }
    }
}
</script>

<style>

</style>