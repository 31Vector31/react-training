const movieCast = (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIE_CAST': {
            const {cast} = action;
            return [...state, ...cast];
        }
        default:
            return state;
    }
}

export default movieCast;
