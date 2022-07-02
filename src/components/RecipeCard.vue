<template>
    <article :class=" {recipe: true, 'col-6': true, 'col-lg-3': !random, 'col-md-4': random }">
        <router-link :to="recipeLink" @click="this.$emit('update')">
            <img :src= "recipe.strMealThumb" class="recipe-img" :alt="recipe.strMeal">
            <h3 class="recipe-title">{{ recipe.strMeal }}</h3>
        </router-link>
    </article>
</template>

<script>
export default {
    name:'RecipeCard',
    props: {
        recipe: {
            type: Object,
        },
        random: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        recipeLink() {
            return `/recipe/${this.recipe.idMeal}`
        }
    }

}
</script>

<style>

</style>