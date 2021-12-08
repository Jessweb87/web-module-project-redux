export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE"; /* Step 9- Export ADD_MOVIE into movieAction.js file */




export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
// Step 10- Create an action creator for addMovie in movieActions.js.
export const addMovie = (movie) => {
    return ({type: ADD_MOVIE, payload:movie})
}