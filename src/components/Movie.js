import React from 'react';
// Step 4- The Movie component needs to access our list of movies to function.** Map movies to props here as well.
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

// Step 6 -Connect the deleteMovie action through the connect method.
import { deleteMovie } from '../actions/movieActions';
import { addFavorite } from '../actions/favoritesActions';


const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

// Step 4- Map movies to props here as well.
    const { movies, displayFavorites, deleteMovie, addFavorite } = props;
    const movie = movies.find(movie=>movie.id===Number(id));

// Step 7- Create deleteMovie on the current movie's id. After setting the state, redirect the user using the push('/movies') command.
    const handleDeleteClick = () => {
       deleteMovie(movie.id);
       push('/movies');
    }

    const handleFavoriteClick = () => {
        addFavorite(movie);
    }
 
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {displayFavorites && <span onClick={handleFavoriteClick} className="m-2 btn btn-dark">Favorite</span>}
                            
                            <span className="delete" onClick={handleDeleteClick}/* Step 7- Create and connect the necessary event handlers to call deleteMovie on the current movie's id.*/><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

// Step 4- Map movies to props here as well.
const mapStateToProps = (state) => {
    return ({
        /* Step 17- Connect the displayFavorites state to the Movie and MovieHeader component.*/
        displayFavorites: state.favoritesReducer.displayFavorites,
        movies: state.movieReducer.movies
    })
}
// Step 6 -Connect the deleteMovie action through the connect method. Pass through connector
export default connect(mapStateToProps, {deleteMovie, addFavorite})(Movie);