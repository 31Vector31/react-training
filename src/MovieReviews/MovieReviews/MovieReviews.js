import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getMovieReviews} from "../APIRequests";
import ReviewCard from "../ReviewCard/ReviewCard";

function MovieReviews() {
    const {id} = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        getMovieReviews(id).then(res => {
            setReviews(res);
        });
    }, []);

    return (
        <div>
            <h2>Review</h2>
            {reviews.map((review, index) =>
                <ReviewCard review={review} key={index}/>
            )}
        </div>
    );
}

export default MovieReviews;