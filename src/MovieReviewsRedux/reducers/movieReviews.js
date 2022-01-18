const movieReviews = (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIE_REVIEWS': {
            const {reviews} = action;
            return [...state, ...reviews];
        }
        default:
            return state;
    }
}

export default movieReviews;
