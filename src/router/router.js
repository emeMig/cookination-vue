import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: () => import("../views/Home.vue")
    },
    { 
        path: '/recipe/:idMeal', 
        name: 'recipe',
        component: () => import("../views/RecipeDetail.vue")
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'notfound',
        component: () => import("../views/NotFound.vue")
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("../views/Login.vue")
    },
    {
        path: '/register',
        name: 'register',
        component: () => import("../views/Register.vue")
    },
    {
        path: '/recipes',
        name: 'recipes',
        component: () => import("../views/Recipes.vue")
    },
    {
        path:'/search/:text',
        name: 'search',
        component: () => import("../views/SearchResults.vue")
    },
    {
        path: '/myrecipes',
        name: 'myrecipes',
        component: () => import("../views/MyRecipes.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },
})

export default router


