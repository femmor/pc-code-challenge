import express from 'express'
import {getMovies, createMovie} from "../controllers/movies.js"

const router = express.Router()

// Get Movies Route
router.get('/', getMovies)
router.post('/', createMovie)

export default router