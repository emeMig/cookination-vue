<template>
  <main>
    <div class="container search-container">      
      <section class="section-search-header mt-6">
          <div class="row">
              <h1 class="header-title">SEARCH RESULTS</h1>
              <p>Your search for "{{ this.$route.params.text }}" returned {{ totalResults }} results. 
                <span v-if="totalResults === 0">
                  Please try a different search or browse <router-link to="/recipes" class="linkText">the recipe index</router-link> to find exactly what you are looking for.
                </span>
              </p>
          </div>   
      </section>
      <recipe-list
        title = "Results"
        :random = false
        :recipes = results
      >
      </recipe-list>
    </div>
    <find-recipe></find-recipe>
  </main>    
</template>

<script>
import api from '../db/api'
import RecipeList from '../components/RecipeList.vue'
import FindRecipe from '../components/FindRecipe.vue'

export default {
    name: "SearchResults",
    components: {
        RecipeList,
        FindRecipe
    },
    data() {
      return {
        results: []
      }
    },
    computed:{
      totalResults() {
        return this.results ? this.results.length : 0
      }
    },
    methods: {
      async getSearchResults (toSearch){
        const data = await api.getSearchResults(`s=${toSearch}`)
        this.results = data.meals
      },
      async getSearchResultsByFirstLetter (toSearch){
        const data = await api.getSearchResults(`f=${toSearch}`)
        this.results = data.meals
      },
      switchSearch() {
        this.$route.params.text.length !== 1 
          ? this.getSearchResults(this.$route.params.text)
          : this.getSearchResultsByFirstLetter(this.$route.params.text)
      }
    },
    mounted(){
      this.switchSearch()  
      this.$watch(
        () => this.$route.params,
        (to) => {
          if (this.$route.params.text) {
            this.clearTerm = true;
            this.switchSearch()   
            this.$router.push({ name: 'search', params: {to} })
          }
        }
      )
    }
}
</script>

<style>
    .section-search-header h1 {
        font-size: 42px;
        text-transform: uppercase;
        letter-spacing: 1.4px;
    }
    .section-search-header p {
        font-size: 17px;
    }

    /* hide title */
    .search-container .title-lined {
      display: none;
    }
    .linkText {
      text-decoration: underline !important;
    }

</style>