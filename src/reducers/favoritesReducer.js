// Step 13 - Create a reducer file for handling business logic for favorites. Include the following state values in your initialState setup:
//   -  favorites: an array of movie objects
//   -  displayFavorites: a boolean that holds if favorite elements should be displayed in app

// Step 14 - **Import your new reducer file into the ./reducers/index.js file.** As a start, only add a default case to the switch statement.
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE}  from './../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: true
}
// Step 18-  Add in reducer cases, action creators and event handler code for the following actions:
//   - toggleFavorites : Switches the displayFavorites state value between true and false. When displayFavorites is true, the favorite button does not show on the Movie page.
const favoritesReducer = (state = initialState, action)=> {
    switch(action.type) {
        case(TOGGLE_FAVORITES): {
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
    /*- addFavorites: Adds in a new movie object into the favorites list.*/
        case(ADD_FAVORITE): {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
    /*- removeFavorite: Removes a movie Object from the favorites list with an id passed in.*/
        case(REMOVE_FAVORITE): {
            return {
                ...state,
                favorites: state.favorites.filter(item=>(item.id !== action.payload))
            }
        }
        default:
            return(state);
    }
}

export default favoritesReducer;