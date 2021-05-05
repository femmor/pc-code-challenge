import React from 'react'
import Rating from '../../Rating'

const Movie = ({movie}) => {
  const {category, name, rating} = movie
  
  const str = name;
  const matches = str.match(/\b(\w)/g);
  const acronym = matches.join('').toUpperCase()

  return (
    <div>
      <div className="movie d-flex justify-content-between align-items-center">
        <div className="left d-flex">
          <div className="ellipse avatar">
            <span className="avatar-title">
              {acronym}
            </span>
          </div>
          <div className="info d-flex flex-column ml-3">
            <span className="movie-title">{name}</span>
            <span className="category">{category.label}</span>
          </div>
        </div>
        <div className="right">
          <div className="stars d-flex flex-row-reverse align-items-center">
            <small className="small-text">{rating} star rating</small>
            <Rating value={rating} color="#FFC93D"/>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Movie
