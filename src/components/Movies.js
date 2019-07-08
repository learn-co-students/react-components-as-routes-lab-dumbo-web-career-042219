import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movieList = movies.map(movie => {
    return <div>
      {movie.title}
      <ul>
        {movie.genres.map(movieGenre => <li>{movieGenre}</li>)}
      </ul>
      {movie.time}
    </div>
  })

  return <div>
    <h1>Movies Page</h1>
        {movieList}
    </div>

};

export default Movies;
