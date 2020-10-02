import React from 'react';
import movies from './movie.json'

class MovieService extends React.Component{
  static getMovies() {
    return movies ? movies : [];
  }
}

export default MovieService;
