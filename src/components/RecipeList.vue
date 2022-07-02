<template>
    <div class="container">
        <h2 class="title-lined"><span>{{ title }}</span></h2>
        <div :class="{ row: true, 'row-cols-lg-5': random }">
            <recipe-card
                v-for= "r in recipes"
                :key="r.idMeal"
                :recipe= r
                :random = random
                @update = "this.$emit('update',r.idMeal)" 
            >
            </recipe-card>  
        </div>
    </div>
</template>

<script>
import RecipeCard from '../components/RecipeCard.vue'
export default {
    name: 'RecipeList',
    components: {
        RecipeCard
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        random: {
            type: Boolean,
            default: false
        },
        recipes: {
            type: Array
        }
    }   
}
</script>

<style>

</style>