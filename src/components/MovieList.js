import React from 'react';
// Step 3- The MovieList component prints all of our movies to the screen.** Use the connect method here to map the movies state value into props. Replace our static movie variable with that prop.
import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    const { movies } = props;

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}
// Step 3- Use the connect method here to map the movies state value into props.
const mapStateToProps = (state) => {
    return ({
        movies: state.movieReducer.movies
    })
}
export default connect(mapStateToProps)(MovieList);