import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

function MovieReviews({reviews, getMovieReviews}) {
    const {id} = useParams();

    useEffect(() => {
        getMovieReviews(id);
    }, []);

    return (
        <div>
            {reviews.map((review, index) =>
                <ReviewCard review={review} key={index}/>
            )}
        </div>
    );
}

export default MovieReviews;