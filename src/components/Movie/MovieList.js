import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component{

  render(){
    return(
      <div className="card-deck">
            {
                this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                //this.props.movies.map(movie => (<ol key={movie.id}>{movie.title}</ol>))
            }
        </div>
    )
  }
}

export default MovieList;
