import express from "express"
import { getSearchHistory, removeItemFromHistory, searchMovie, searchPerson, searchTv } from "../controllers/search.controller.js"
const router = express.Router()

// To search for person, movies and tv 
router.get('/person/:query', searchPerson) 
router.get('/movie/:query', searchMovie)
router.get('/tv/:query', searchTv)

// To get Search History 
router.get('/history', getSearchHistory)
router.delete('/history/:id', removeItemFromHistory)

export default router 