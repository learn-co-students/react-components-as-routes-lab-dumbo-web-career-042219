import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (
    
    <div>
       <h1>Movies Page</h1>
       {movies.map(movie => {
            return <div>
              <h2> {movie.title}, {movie.time}</h2>
              <ul>
               { movie.genres.map((genre, index) => <li id={index}> {genre} </li> )}
                
                </ul> </div>
        })}
    </div>
  );
};

export default Movies;
