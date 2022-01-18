import {combineReducers} from 'redux'
import movies from "./movies";
import movieInfo from "./movieInfo";
import movieCast from "./movieCast";
import movieReviews from "./movieReviews";

export default combineReducers({
    movies,
    movieInfo,
    movieCast,
    movieReviews
})
