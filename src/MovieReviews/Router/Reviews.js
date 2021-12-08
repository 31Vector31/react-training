import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import MoviesList from "../MoviesList/MoviesList";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";
import styles from "./Reviews.module.css";

function Reviews() {
    return (
        <div className={styles.container}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<MoviesList/>}/>
                    <Route exact path="/movies/:id" element={<MovieInfo/>}/>
                    <Route path="/movies/:id/cast" element={<MovieCast/>}/>
                    <Route path="/movies/:id/review" element={<MovieReviews/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Reviews;