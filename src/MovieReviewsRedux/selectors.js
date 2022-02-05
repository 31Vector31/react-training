const baseUrl = "https://image.tmdb.org/t/p/original";
const basePicture = "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png";

export const moviesSelector = state => {
    const {movies} = state;
    return movies.map(el => {
        const {poster_path} = el;
        const urlPicture = baseUrl + poster_path;
        return {...el, urlPicture};
    });
}

export const movieInfoSelector = state => {
    const {movieInfo} = state;
    if (!movieInfo) return movieInfo;
    const {poster_path} = movieInfo;
    const urlPicture = baseUrl + poster_path;
    return {...movieInfo, urlPicture};
}

export const movieCastSelector = state => {
    const {movieCast} = state;
    return movieCast.map(el => {
        const {profile_path} = el;
        const urlPicture = profile_path ? baseUrl + profile_path : basePicture;
        return {...el, urlPicture};
    });
}

export const movieReviewsSelector = state => {
    const {movieReviews} = state;
    return movieReviews.map(el => {
        const {author_details: {avatar_path}} = el;

        let urlPicture = basePicture;
        if (avatar_path) {
            if (new RegExp("^/https:").test(avatar_path)) urlPicture = avatar_path.slice(1);
            else urlPicture = baseUrl + avatar_path;
        }

        return {...el, urlPicture};
    });
}