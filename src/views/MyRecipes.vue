<template>
    <main>
        <div class="container">
            <section class="section-recipes-header mt-6">
                <div class="row">
                    <h1 class="header-title">MY FAVORITE RECIPES</h1>                    
                    <p>This is your selection of recipes:</p>
                </div>   
            </section>
                    
            <section class="section-recipes-main my-recipes-list py-0">
                <div v-for="(value,key) in computedRecipes" :key="key" class="row">
                    <div class="col-md-4 px-0 fav-img-col">
                        <router-link :to="`/recipe/${value.idMeal}`">
                            <img :src="value.strMealThumb" class="recipe-img img-thumbnail" width="50px" :alt= "value.strMeal" />
                        </router-link>    
                    </div>
                    <div class="col-md-8 px-4 py-4 fav-column">
                        <header>
                            <h3 class="recipe-title px-0">{{ value.strCategory }}</h3>
                            <h2 class="newsletter-title px-0" v-if="value.strMeal">{{ value.strMeal.toUpperCase() }}</h2>
                        </header>    
                        <button class="btn btn-outline-secondary btn-favorite px-3 btn-fav" type="button" @click="removeFavMeal(value.idMeal)">
                            Remove from favorites
                        </button> 
                    </div>    
                </div>
            </section>    
        </div>
        <find-recipe></find-recipe>
    </main>    
</template>

<script>

import { getAllFavs, removeFav } from '../db/firestore.js'
import FindRecipe from '../components/FindRecipe.vue'
export default {
    name: "MyRecipes",
    components: {
        FindRecipe
    },
    data() {
        return {
            favoriteRecipes: []
        }
    },
    computed: {
        computedRecipes() {
            return this.favoriteRecipes
        }
    },
    methods: {
        async mapMyRecipes() {
            const query = await getAllFavs()
            query.forEach((doc) => this.favoriteRecipes.push(doc.data())) 
        },
        async removeFavMeal(id){
            await removeFav(id)
            this.favoriteRecipes = []
            this.mapMyRecipes()          
        }
    },
    async mounted() {
        this.mapMyRecipes()

    }
}
</script>

<style>
    .my-recipes-list .row {
        padding: 20px 0 10px 0;
    }
    .my-recipes-list .row:nth-child(odd){
        background: #eaeaea;
    }
    .fav-column {
        display: flex;
		flex-direction: column;
		justify-content: space-between;
    }
    .fav-img-col {
        display: flex;
        text-align: center;
    }
    .fav-img-col img {
        width: 85% !important;
    }
    .btn-fav {
        max-width: 260px;
    }
</style>