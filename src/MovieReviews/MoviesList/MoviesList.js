import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import MovieCard from "../MovieCard/MovieCard";
import {getMovies} from "../APIRequests";

function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then(res => {
            setMovies(res);
        });
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