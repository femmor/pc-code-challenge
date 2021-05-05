import * as api from "../api"

// Action creator for getMovie
export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMovies()
    dispatch({
      type: 'FETCH_ALL',
      payload: data
    })
  } catch (error) {
    console.log(error.message)
  }
}

// Action creator for postMovie
export const postMovie = (movie) => async (dispatch) => {
  try {
    const { data } = await api.createMovie(movie)
    dispatch({
      type: 'CREATE',
      payload: data
    })
  } catch (error) {
    console.log(error.message)
  }
}
  
  