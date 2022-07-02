<template>
  <main>
    <div class="container">
        <section class="section-recipes-header mt-6">
            <div class="row">
                <h1 class="header-title">BROWSE RECIPES</h1>
                <p>All these healthy recipes are gluten-free and prioritize fresh, seasonal and wholesome ingredients. Enjoy! </p>
            </div>   
        </section>

        <section class="section-recipes-main py-0">
            <div class="row">
                <aside class="col-lg-3 pe-4">
                    <div class="row recipes-sidebar sidebar-categories">
                        <button class="btn btn-dark btn-filter" @click="clearAllCheckboxes">
                            <p>Clear all filters</p>
                        </button> 
                        <h2 :class="{unselectable: catDisabled, 'mt-2': true }">CATEGORIES</h2>
                        <ul class="mt-2">
                            <li 
                                v-for="(value, key) in allCats" 
                                :key=key
                                :class="{ 'checkbox-container': true, 'unselectable': catDisabled }"
                            >
                                <label :for="'category'+ key"><p> {{ value.strCategory }}</p>
                                    <input 
                                        type="radio" 
                                        :id="'category'+ key" 
                                        :value="value.strCategory" 
                                        v-model="selectedCategory" 
                                        :disabled="catDisabled"
                                        @click="checkCategory(value.strCategory)" 
                                    />
                                    <span class="checkmark"></span>
                                </label>    
                            </li>
                        </ul>
                    </div>
                    <div class="row recipes-sidebar sidebar-ingredients">
                        <h2 :class="{unselectable: ingDisabled }">INGREDIENTS</h2>
                        <ul class="mt-2">
                            <li 
                                v-for="(value, key) in allIngredients" 
                                :key=key
                                :class="{ 'checkbox-container': true, 'unselectable': ingDisabled }"
                            >
                                <label :for="'ing'+ key"><p> {{ value.strIngredient }}</p>
                                    <input 
                                        type="checkbox" 
                                        :id="'ing'+ key"
                                        :value="value.strIngredient" 
                                        v-model="selectedIngredients"  
                                        :disabled="ingDisabled" 
                                        @change="filterByIngredients"
                                    />
                                    <span class="checkmark"></span>
                                </label>    
                            </li>
                        </ul>
                    </div>
                    <div class="row recipes-sidebar search-container pb-5">
                        <div class="container">
                            <h2 class="newsletter-title mb-3">search</h2>
                            <search-bar></search-bar>
                        </div>      
                    </div>
                </aside>
                <div class="col-lg-9">
                    <div class="row">
                        <recipe-card
                            v-for= "r in allRecipes"
                            :key="r.idMeal"
                            :recipe= r
                            :random = true
                        >    
                        </recipe-card>
                    </div>
                </div>
            </div>
        </section>
    </div>    
    <find-recipe></find-recipe>
  </main>
</template>

<script>

    import api from '../db/api'
    import RecipeCard from '../components/RecipeCard.vue'
    import SearchBar from '../components/SearchBar.vue'
    import FindRecipe from '../components/FindRecipe.vue'

    export default {
        name: 'Recipes',
        components: {
            RecipeCard,
            SearchBar,
            FindRecipe
        },
        data() {
            return {
                allRecipes: [],
                allCats: [],
                allIngredients: [],
                selectedCategory: '',
                prevSelectedCategory: '',
                selectedIngredients: [],
                popularIngredients: ['224','227','253','268','281','483'],
            }
        },

        computed: {
            catDisabled() {
                return this.selectedIngredients.length
            },
            ingDisabled() {
                return this.selectedCategory.length
            }
        },

        methods: {
            // método para controlar el comportamiento de los checkboxes como radio buttons deselectables
            checkCategory(c) {
                this.prevSelectedCategory = this.selectedCategory
                if (c === this.prevSelectedCategory) { 
                        this.selectedCategory = ''
                        this.getAllRecipes()
                    }
                else this.filterByCategory(c)
            },
            // método para reducir la lista de ingredientes atendiendo a criterios subjetivos que 
            // permitan un filtrado combinado con respuestas desde la api
            getReducedIngredients(array) {
                return array.filter(i => (this.popularIngredients.includes(i.idIngredient) || (!i.strIngredient.includes(" ") && i.strDescription))).slice(0,22)
            },
            clearAllCheckboxes() {
                this.selectedCategory = ''
                this.prevSelectedCategory = ''
                this.selectedIngredients = []
                this.getAllRecipes()
            },
            async getAllRecipes() {
                const data = await api.getAllRecipes()
                this.allRecipes = data.meals
            },
            async listCategories() {
                const data = await api.listCategories()
                this.allCats = data.meals
            },
            async listIngredients() {
                const data = await api.listIngredients()
                this.allIngredients = this.getReducedIngredients(data.meals)
            },
            async filterByCategory(cat) {
                const data = await api.filterByCategory(cat)
                this.allRecipes = data.meals
            },
            async filterByIngredients() {
                if (this.selectedIngredients.length) {
                    let allIngredients=''
                    for (let i of this.selectedIngredients) {
                        allIngredients = allIngredients+i+(',') 
                    }    
                    const data = await api.filterByIngredients(allIngredients.slice(0,-1))
                    this.allRecipes = data.meals
                }
            }
        },

        watch: {
            // observador para recargar las recetas cuando se vacía el filtrado
            selectedIngredients(n,o) {
                if (o.length >= 1 && n.length === 0) this.getAllRecipes()
            }
        },
        
        created(){
            document.body.scrollTop = 0
            this.getAllRecipes()
            this.listCategories()
            this.listIngredients()
        }

    }
    


</script>

<style>

    /* CUSTOM CHECKBOX */
    .checkbox-container {
        display: block;
        position: relative;
        padding-left: 26px;
        margin-bottom: 3px;
        font-size: 18px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .checkmark {
        position: absolute;
        top: 3px;
        left: 0;
        height: 18px;
        width: 18px;
        border: 2px solid #fff;
        border-radius: 3px;
        background-color: transparent;
        cursor: pointer;
    }
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    .checkbox-container input:checked ~ .checkmark:after {
        display: block;
    }
    .checkbox-container .checkmark:after {
        left: 5px;
        top: 1px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .unselectable {
        color: gray;
    }

    .unselectable .checkmark {
        border: solid gray;
    }

    .btn-filter {
        max-width: 160px;
        padding: 5px 10px;
        margin: 10px 0 20px 12px;
    }

    .search-container .form-control {
        background: #fff url(../assets/icons/icon-search.svg) no-repeat 15px 50%;
        padding: 15px 15px 15px 50px;
        border-radius: 5px;
        border: 1px solid var(--accent-color);
    }        
</style>
