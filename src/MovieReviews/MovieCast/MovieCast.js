import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getMovieCast} from '../APIRequests';
import {Grid} from "@mui/material";
import CastCard from "../CastCard/CastCard";

function MovieCast() {
    const {id} = useParams();
    const [cast, setCast] = useState([]);
    useEffect(() => {
        getMovieCast(id).then(res => {
            setCast(res);
        });
    }, []);

    return (
        <div>
            <h2>Cast</h2>
            <Grid container spacing={2}>
                {cast.map((actor, index) =>
                    <Grid
                        key={index}
                        item xs>
                        <CastCard actor={actor}/>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default MovieCast;