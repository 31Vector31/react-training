import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";
import styles from "./Router.module.css";
import MoviesList from "../../components/MoviesList/MoviesList";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

function Router() {
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

export default Router;