import React from 'react'

export default function MovieCard({movie}) {
  return (
    <div>
        <div className="movie"> 
        <div>
            <p>{movie.Year}</p>
          </div>

          <div>
            <img src={movie.Poster} alt="" />
          </div>
          
          <div>
            <span>{movie.Type} </span>
            <h3>{movie.Title}</h3>
          </div>
          
          </div>
    </div>
  )
}
