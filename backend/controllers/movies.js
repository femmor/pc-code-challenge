import Movie from '../models/movie.js'

// GetMovies Function
export const getMovies = async (req, res) => {
  try {
    const movie = await Movie.find({})
    res.status(200).json(movie)

  } catch (error) {
    console.log(error)
  }
}

// CreateMovie Function
export const createMovie = async (req, res) => {
  const movie = req.body
  const newMovie = new Movie(movie)
  try {
    await newMovie.save()
    res.status(201).json(newMovie)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}