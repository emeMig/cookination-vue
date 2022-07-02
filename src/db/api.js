const API_URL_FREE = "https://www.themealdb.com/api/json/v1/1/"
const API_URL = "https://www.themealdb.com/api/json/v2/9973533/"

const getMealById = async(id) => {
    const res = await fetch(`${API_URL_FREE}lookup.php?i=${id}`)
    return await res.json()
}

const getLatestMeals = async() => {
    const res = await fetch(`${API_URL}latest.php`)
    return await res.json()
}

const getRandomMeals = async() => {
    const res = await fetch(`${API_URL}randomselection.php`)
    return await res.json()
}

const getCategories = async() => {
    const res = await fetch(`${API_URL}categories.php`)
    return await res.json()
}

const getAllRecipes = async() => {
    const res = await fetch(`${API_URL_FREE}search.php?s=`)    
    return await res.json()
}

const listCategories = async() => {
    const res = await fetch(`${API_URL_FREE}list.php?c=list`)
    return await res.json()
}

const listIngredients = async() => {
    const res = await fetch(`${API_URL_FREE}list.php?i=list`)
    return await res.json()
}

const filterByCategory = async(cat) => {
    const res = await fetch(`${API_URL_FREE}filter.php?c=${cat}`)
    return await res.json()
}

const filterByIngredients = async(ing) => {
    const res = await fetch(`${API_URL}filter.php?i=${ing}`)
    return await res.json()
}

const getSearchResults = async(toSearch) => {
    const res = await fetch(`${API_URL_FREE}/search.php?${toSearch}`)
    return await res.json()
}

export default {
    getMealById,
    getLatestMeals,
    getRandomMeals,
    getCategories,
    getAllRecipes,
    listCategories,
    listIngredients,
    filterByCategory,
    filterByIngredients,
    getSearchResults
}