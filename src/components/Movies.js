import React from 'react';
import { movies } from '../data';

const Movies = () => {
	
	const showTheMovies = () => {
		return movies.map((movie, index) => <div key={index}> 
			<strong> Name: {movie.title} </strong> 
			<p />{movie.time} minutes 
			<p />Genres:
			<ul>
			{movie.genres.map((genre, index) => <li key={index}> {genre} </li>)}
			</ul>
			</div> )
	}

  return (
    <div>
        <h1>Movies Page</h1>
        {showTheMovies()}
    </div>
  );
};

export default Movies;
