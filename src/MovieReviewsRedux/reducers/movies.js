const movies = (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIES': {
            const {movies} = action;
            return [...state, ...movies];
        }
        default:
            return state;
    }
}

export default movies;
