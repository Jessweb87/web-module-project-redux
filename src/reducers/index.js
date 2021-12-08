import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

// Step 15-  **In reducers/index.js, use the combineReducers method to connect both movies and favorite movies to redux.**

const rootReducer = combineReducers({
    movieReducer,
    favoritesReducer
})
export default rootReducer;