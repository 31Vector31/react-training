const movieInfo = (state = null, action) => {
    switch (action.type) {
        case 'GET_MOVIE_INFO': {
            const {info} = action;
            return info;
        }
        default:
            return state;
    }
}

export default movieInfo;
