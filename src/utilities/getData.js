// strings needed for every query
const BASE_URL = `https://api.giphy.com/v1`
const API_STRING = `api_key=${process.env.REACT_APP_GIPHY_API_KEY}`

// get gif based on search parameters
async function getGif({ query, limit, offset, rating }) {
  const url = `${BASE_URL}/gifs/search?${API_STRING}`
  const searchUrl = `${url}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}`
  return await fetchData(searchUrl)
}

// get sticker based on search parameters
async function getSticker({ query, limit, offset, rating }) {
  const url = `${BASE_URL}/stickers/search?${API_STRING}`
  const searchUrl = `${url}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}`
  return await fetchData(searchUrl)
}

// get a collection of random gifs
async function getRandomGif() {
  const url = `${BASE_URL}/gifs/random?${API_STRING}`
  return await fetchData(url)
}

// get a collection of random stickers
async function getRandomSticker() {
  const url = `${BASE_URL}/stickers/random?${API_STRING}`
  return await fetchData(url)
}

// get search history
function getHistory() {
  return Object.keys(sessionStorage).reduce(function(obj, key) {
    obj[key] = sessionStorage.getItem(key)
    return obj
  }, {})
}

// get categories available on GIPHY
async function getCategories() {
  const url = `${BASE_URL}/gifs/categories?${API_STRING}`
  return await fetchData(url)
}

// get list of valid terms that completes a given tag
async function getAutocomplete({ searchTerm, limit, offset }) {
  const url = `${BASE_URL}/gifs/search/tags?${API_STRING}`
  const searchUrl = `${url}&q=${searchTerm}&limit=${limit}&offset=${offset}`
  return await fetchData(searchUrl)
}

// get trending gifs
async function getTrendingGifs({ limit, offset, rating }) {
  const url = `${BASE_URL}/gifs/trending?${API_STRING}`
  const searchUrl = `${url}&limit=${limit}&offset=${offset}&rating=${rating}`
  return await fetchData(searchUrl)
}

// get trending stickers
async function getTrendingStickers({ limit, offset, rating }) {
  const url = `${BASE_URL}/stickers/trending?${API_STRING}`
  const searchUrl = `${url}&limit=${limit}&offset=${offset}&rating=${rating}`
  return await fetchData(searchUrl)
}

// get translate gifs
async function getTranslateGifs({ query, weirdness }) {
  const base_url=`${BASE_URL}/gifs/translate?${API_STRING}`
  let url = `${base_url}&s=${query}`
  if (weirdness) url += `&weirdness=${weirdness}`
  return await fetchData(url)
}

// get translate stickers
async function getTranslateStickers({ query, weirdness }) {
  const url=`${BASE_URL}/stickers/translate?${API_STRING}`
  let searchUrl = `${url}&s=${query}`
  if (weirdness) searchUrl += `&weirdness=${weirdness}`
  return await fetchData(searchUrl)
}

// export functions
module.exports = {
  getGif,
  getSticker,
  getRandomGif,
  getRandomSticker,
  getHistory,
  getCategories,
  getAutocomplete,
  getTrendingGifs,
  getTrendingStickers,
  getTranslateGifs,
  getTranslateStickers
}

// helper functions
async function fetchData(url) {
  const res = await fetch(url)
  const json = await res.json()
  return { data: json.data, meta: json.meta }
}