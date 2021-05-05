import axios from 'axios'

const url = 'https://pc-code-challenge.herokuapp.com/movies'

// Fetch Movies
export const fetchMovies = () => axios.get(url)
export const createMovie = (newMovie) => axios.post(url, newMovie)