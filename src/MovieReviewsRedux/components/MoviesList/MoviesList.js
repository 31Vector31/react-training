import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import MovieCard from "../MovieCard/MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../actions";
import {moviesSelector} from "../../selectors";

function MoviesList() {
    const dispatch = useDispatch();
    const movies = useSelector(moviesSelector);
    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div>
            <h2>Popular films</h2>
            <Grid container spacing={2}>
                {movies.map((movie, index) => {
                    return (
                        <Grid
                            key={index}
                            item xs>
                            <MovieCard movie={movie}/>
                        </Grid>);
                })}
            </Grid>
        </div>
    );
}

export default MoviesList;