<template>
      <main>
         
        <section class="section-featured">
            <div class="container-sm">
                <h1>What are we cooking today?</h1>
                <search-bar></search-bar>
            </div>
        </section>

        <section>

        </section>

        <section class="section-latest-meals">
            <recipe-list
              title = "Latest meals"
              :random = false
              :recipes = latestMeals.slice(0,4) 
            >
            </recipe-list>
        </section>

        <section class="section-categories">
            <category-list 
              title = "Categories"
              :categories = categories
            >
            </category-list>
        </section>

        <section class="section-random-recipes">
            <recipe-list
              title = "Random Recipes"
              :random = true
              :recipes = randomMeals
            >
            </recipe-list>
        </section>

        <section class="section-newsletter">
            <div class="container">
                <h2 class="newsletter-title">Newsletter</h2>
                <p>Receive a weekly email with new recipes and recommendations for your cooking</p>
                <form>
                    <input class="form-control" type="email" placeholder="Your email address" />
                    <button class="btn btn-secondary" type="button">
                        Suscribe
                    </button>
                </form>
            </div>
        </section>

        <section class="section-pic-week container">
            <div class="row justify-content-space-between">
                <div class="main-content col-lg-6">
                    <span class="upper-title">Pick of the week</span>
                    <h2>Mini chicken pot pies</h2>
                    <p>When it’s cold and rainy outside there’s nothing better than a chicken pot
                        pie. But if you’re gluten-free or paleo it can be hard to find a delicious recipe that gets
                        you excited and tastes as good as the traditional version. Well, I think this recipe is
                        gonna get you excited.</p>
                    <router-link to="/recipe" class="btn btn-outline-primary">View recipe</router-link>
                </div>
                <div class="col-lg-6">
                    <img src="../assets/pick-week.jpg" class="img-fluid" alt="mini chicken pot pies" />
                </div>
            </div>
        </section>

        <section class="section-shop">
            <div class="shop-box">
                <h2 class="title-lined"><span>Shop</span></h2>
                <p>Curious what equipment and pantry staples we love?</p>
                <p>Check out our shop, where we share our go-to and recommend appliances,
                    ingredients, tools, and more!</p>
                <p class="cta-text"><router-link to="" title="Visit our shop">Shop our recomendations</router-link></p>
            </div>
        </section>
    </main>
</template>

<script>
import RecipeList from '../components/RecipeList.vue'
import CategoryList from '../components/CategoryList.vue'
import SearchBar from '../components/SearchBar.vue'
import api from '../db/api'

export default {
  name: "Home",
  components:{
    RecipeList,
    CategoryList,
    SearchBar
  },
  data() {
    return {
      latestMeals: [],
      randomMeals: [],
      categories: []
    }
  },
  methods: {
    async getLatestMeals() {
        const data = await api.getLatestMeals()
        this.latestMeals = data.meals
    }, 
    async getRandomMeals() {
        const data = await api.getRandomMeals()
        this.randomMeals = data.meals
    }, 
    async getCategories() {
        const data = await api.getCategories()
        this.categories = data.categories
    }, 
  },
  created() {
    document.body.scrollTop = 0
    this.getCategories()
    this.getLatestMeals()
    this.getRandomMeals()

  }
};
</script>

<style scoped>

</style>