import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}
// Step 2- In movieReducer.js, make sure that we are setting our state by default to initialState.** Otherwise your state will not have the original structure it needs to function!
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
// Step 8- Add in an ADD_MOVIE case to movieReducer.js.
        case ADD_MOVIE:
            /* Create a const called newMovie set it equal to action.payload (so that it can return a movie) give it an id of Date.now() */
            const newMovie = {
            ...action.payload,
            id: Date.now()
            };
// Step 9- Make this new case return a version of state with new movie values passed in through the payload.
        return {
            ...state,
            movies: [...state.movies, newMovie]
            }
        default:
            return state;
    }
}

export default reducer;