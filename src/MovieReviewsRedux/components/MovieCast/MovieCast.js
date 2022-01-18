import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Grid} from "@mui/material";
import CastCard from "../CastCard/CastCard";

function MovieCast({cast, getMovieCast}) {
    const {id} = useParams();
    useEffect(() => {
        getMovieCast(id);
    }, []);

    return (
        <div>
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