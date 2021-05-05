import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import Select from 'react-select'
import RatingStars from 'react-rating-stars-component';

import {category} from '../../helpers/category'
import { postMovie } from '../../actions/movies';


const INITIAL_MOVIE = {
  name:'',
  category: null,
  rating: 0
}

const Form = () => {
  const [movieData, setMovieData] = useState(INITIAL_MOVIE)

  // Handle Selected Value
  const handleSlectedValue = (obj) => {
    setMovieData({ ...movieData, category: obj})
  }

  // Ratings
  const ratings = {
    size: 20,
    count: 5,
    color: "#cccccc",
    activeColor: "#FFC93D",
    value: movieData.rating,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      setMovieData({ ...movieData, rating: newValue });
    }
  };

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postMovie(movieData))
    setMovieData(INITIAL_MOVIE)
  }

  return (
    <div className="movie-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                value={movieData.name} 
                className="form-control" 
                placeholder="Name of the movie" 
                onChange={(e) => setMovieData({ ...movieData, name: e.target.value})}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
            <div className="col-sm-10">
              <Select
                value={movieData.category}
                options={category}
                onChange={handleSlectedValue}
              />
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label htmlFor="rating" className="col-sm-2 col-form-label">Rating</label>
            <div className="col-sm-10">
              <div className="d-flex flex-row-reverse">
                <RatingStars {...ratings}/>
              </div>
            </div>
          </div>
          <button className="btn btn-grad btn-block">Add Movie</button>
        </form>
      </div>
  )
}

export default Form
