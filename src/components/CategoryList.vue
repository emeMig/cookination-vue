<template>
    <div class="container">
        <h2 class="title-lined"><span>{{ title }}</span></h2>
        <div class="row">
            <category-card
                v-for= "c in categories"
                :key="c.idCategory"
                :category= c
            >
            </category-card>  
        </div>
    </div>
</template>

<script>
import CategoryCard from '../components/CategoryCard.vue'
export default {
    name: 'CategoryList',
    components: {
        CategoryCard
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        categories: {
            type: Array
        }
    }
    
}
</script>

<style>

</style>