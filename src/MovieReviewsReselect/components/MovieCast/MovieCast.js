import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Grid} from "@mui/material";
import CastCard from "../CastCard/CastCard";
import {useDispatch, useSelector} from "react-redux";
import {getMovieCast} from "../../actions";
import {movieCastSelector} from "../../selectors";

function MovieCast() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const cast = useSelector(movieCastSelector);
    useEffect(() => {
        dispatch(getMovieCast(id));
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