import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors page</h1>
      {actors.map(actor => {
            return <div>
              <h2> {actor.name} </h2>
              <ul>
               { actor.movies.map((movie, index) => <li id={index}> {movie} </li> )}
                
                </ul> </div>
        })}
    </div>
  );
};

export default Actors;
