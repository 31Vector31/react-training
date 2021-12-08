import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTk5MjE2ZjlmODJiYzAxNzM1MzBmZTlmZDkzZDIxMiIsInN1YiI6IjYxYWJmZDc4N2Y2YzhkMDAxOTAzMmJjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q_NbaR0vwlfk4QoehGEEXqu0uSYBY2hv_A7xLwxr7og",
    }
});

export function getMovies() {
    return axiosInstance.get("/trending/movie/week")
        .then(res => res.data.results);
}

export function getMovieDetails(id) {
    return axiosInstance.get("/movie/" + id)
        .then(res => res.data);
}

export function getMovieCast(id) {
    return axiosInstance.get(`/movie/${id}/credits`)
        .then(res => res.data.cast);
}

export function getMovieReviews(id) {
    return axiosInstance.get(`/movie/${id}/reviews`)
        .then(res => res.data.results);
}

