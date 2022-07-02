<template>
    <main>
        <info-dialog 
          v-if = "showModal"
          :bodyText="modalText"
          @close-dialog="showModal=false"
        >
        </info-dialog>
        <section class="section-featured">
          <div class="row m-5">
            <div class="col-lg-6">
              <img :src=meal.strMealThumb class="recipe-img img-thumbnail" :alt= meal.strMeal >
            </div>
            <div class="col-lg-6">
              <div class="row py-3 pb-5 mx-0 px-0">
                <h3 class="recipe-title px-0">{{ meal.strCategory }}</h3>
                <h2 class="newsletter-title px-0" v-if="meal.strMeal">{{ meal.strMeal.toUpperCase() }}</h2>
                <div class="px-0" v-if="mealTags">
                  <span v-for="(value, key) in mealTags" :key="key" class="badge bg-light text-dark custom-badge me-2">{{ value.toUpperCase() }}</span>
                </div>
                <ul class="mt-4 ingredients-list">
                  <li v-for="(value, key) in mealIngredients" :key="key">
                    <span v-if="value.measure.trim().length" class="fw-bolder me-1">{{ value.measure }} </span> 
                    <span>{{ value.name }} </span>
                  </li>
                </ul>
              </div>
              <button 
                class="btn btn-outline-secondary btn-favorite px-3" 
                type="button" 
                @click="addFavMeal"
              >
                  <img src="../assets/icon_favorite_empty.svg" class="me-2"/> Add to favorites
              </button>  
            </div>              
          </div>
        </section>

        <section class="section-ingredients">
          <div class="container">
            <h2 class="title-lined title-lined-dark"><span>Ingredients</span></h2>
            <div class="row row-cols-lg-5">
              <article v-for="(value, key) in imageLinks" :key="key" class="recipe col-6 col-md-4">
                <img :src="value" class="recipe-img" alt="ingredient image">
              </article>
            </div>
          </div>    
        </section>

        <section class="section-instructions">
          <div class="instructions-box">
            <h2 class="newsletter-title text-uppercase"><span>Instructions</span></h2>
            <ol class="mt-5">
              <li v-for="(value,key) in mealInstructions" :key="key">
                {{ value }}
              </li>
            </ol>          
          </div>
        </section>

        <section v-if="mealVideoLink" class="section-video">
          <div class="container">
            <h2 class="title-lined"><span>Video</span></h2>
            <iframe
              width="100%"
              height="600px"
              :src="mealVideoLink"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        <section class="section-random-recipes">
            <recipe-list
              title = "Related Recipes"
              :random = true
              :recipes = randomMeals.slice(0,5) 
              @update ="launchUpdate"
            >
            </recipe-list>
        </section>

        <find-recipe></find-recipe>     

    </main>     
</template>

<script>

import api from '../db/api'
import { addFav } from '../db/firestore.js'
import RecipeList from '../components/RecipeList.vue'
import FindRecipe from '../components/FindRecipe.vue'
import InfoDialog from '../components/InfoDialog.vue'

export default {
    name:"RecipeDetail",
    components:{
      RecipeList,
      FindRecipe,
      InfoDialog
    },    
    data() {
      return {
        meal: { },
        randomMeals: [ ],
        imageLinks: [ ],
        showModal: false,
        modalText: ''
      }
    },

    computed: {
      mealTags() {
        return this.meal.strTags 
          ? this.meal.strTags.split(',')
          : null
      },
      mealIngredients() {
          let ingredientsArray = [];
          for (let i = 1; i <= 20; i++) {
            if (this.meal[`strIngredient${i}`])
              ingredientsArray.push({ name: this.meal[`strIngredient${i}`], measure: this.meal[`strMeasure${i}`]});
            }
          return ingredientsArray;
      },
      mealInstructions() {
        return this.meal.strInstructions
          ? this.meal.strInstructions.split('\r\n').filter(e => e.length > 6)
          : [ ]
      },
      mealVideoLink() {   
          if (this.meal && this.meal.strYoutube) {
            const youtube_code = this.meal.strYoutube.split('=')[1].split('&')[0]
            return "https://www.youtube.com/embed/"+ youtube_code
          }
          else 
            return null
      }  
    },

    methods: {
      launchUpdate(idMeal) {
        this.getMealById(idMeal)
        this.getRandomMeals()
      },
      getImageFile(n) {
        return `../assets/ingredients/${n}.png`
      },

      async getMealById(id) {
        const data = await api.getMealById(id)
        this.meal = data.meals[0]
        
      },
      async getRandomMeals() {
        const data = await api.getRandomMeals()
        this.randomMeals = data.meals
      },

      async addFavMeal() {
        const res = await addFav(this.meal)
        this.modalText = res 
          ? `${this.meal.strMeal} se ha añadido a favoritos` 
          : `${this.meal.strMeal} no se ha podido añadir a favoritos`
        this.showModal = true
      } 
    },

    created() {
        document.body.scrollTop = 0;
        this.imageLinks = [          
          require('@/assets/ingredients/marshmallows.png'),
          require('@/assets/ingredients/chocolate-chips.png'),
          require('@/assets/ingredients/peanut-butter.png'),
          require('@/assets/ingredients/vanilla-extract.png'),
          require('@/assets/ingredients/peanuts.png')
        ];

        this.getMealById(this.$route.params.idMeal)
        this.getRandomMeals()

    }
}
</script>
