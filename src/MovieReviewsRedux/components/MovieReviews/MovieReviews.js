import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import {useDispatch, useSelector} from "react-redux";
import {getMovieReviews} from "../../actions";
import {movieReviewsSelector} from "../../selectors";

function MovieReviews() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const reviews = useSelector(movieReviewsSelector);
    useEffect(() => {
        dispatch(getMovieReviews(id));
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