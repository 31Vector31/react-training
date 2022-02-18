import {getMovieCastAPI, getMovieInfoAPI, getMovieReviewsAPI, getMoviesAPI} from "../APIRequests";

export const getMovies = () => dispatch => {
    getMoviesAPI().then(movies => {
        dispatch({
            type: 'GET_MOVIES',
            movies
        });
    });
};

export const getMovieInfo = (id) => dispatch => {
    getMovieInfoAPI(id).then(info => {
        dispatch({
            type: 'GET_MOVIE_INFO',
            info
        });
    });
};

export const getMovieCast = (id) => dispatch => {
    getMovieCastAPI(id).then(cast => {
        dispatch({
            type: 'GET_MOVIE_CAST',
            cast
        });
    });
};

export const getMovieReviews = (id) => dispatch => {
    getMovieReviewsAPI(id).then(reviews => {
        dispatch({
            type: 'GET_MOVIE_REVIEWS',
            reviews
        });
    });
};