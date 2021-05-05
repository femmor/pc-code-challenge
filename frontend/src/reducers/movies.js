import { CREATE, FETCH_ALL } from "../constants"

// Movies Reducer 
export default (movies = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case CREATE:
      return [...movies, action.payload]
    default:
      return movies
  }
}