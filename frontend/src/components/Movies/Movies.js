import React from 'react'
import { useSelector } from 'react-redux'
import Movie from './Movie/Movie'
import Loader from "react-loader-spinner"

const Movies = () => {
  const movies = useSelector((state) => state.movies)

  return (
    <>
      {!movies.length ? 
      (
        <div className="loader">
            <Loader
            type="Puff"
            color="#61A0FF"
            height={70}
            width={70}
          />
        </div>
      ) 
        : 
      (
        movies.map(movie => (
          <Movie movie={movie} key={movie._id}/>
        ))
      )
        }
    </>
  )
}

export default Movies
