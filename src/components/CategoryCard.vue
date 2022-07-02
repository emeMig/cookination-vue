<template>
    <article class="category col-6 col-md-3 col-lg-2">
        <router-link to="">
            <img :src="category.strCategoryThumb" class="recipe-img" :alt="category.strCategory">
            <h3 class="recipe-title text-center">{{ category.strCategory }}</h3>
        </router-link>
    </article>
</template>

<script>
export default {
    name:'CategoryCard',
    props: {
        category: {
            type: Object
        }
    },
    
}
</script>

<style>

</style>