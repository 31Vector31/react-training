import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";
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
                    <Route path="/" element={<MoviesList/>}/>
                    <Route path="/movies/:id" element={<><MovieInfo/><Outlet/></>}>
                        <Route path="cast" element={<MovieCast/>}/>
                        <Route path="review" element={<MovieReviews/>}/>
                    </Route>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Reviews;