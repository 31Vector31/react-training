import React from "react";

function Statistics({reviews}) {
    const numberGoodReviews = reviews.filter(el => el > 3).length;
    const numberNeutralReviews = reviews.filter(el => el === 3).length;
    const numberBadReviews = reviews.filter(el => el < 3).length;
    return (
        <div>
            <div>Общее кол-во отзывов: {reviews.length}, процент
                хороших: {reviews.length > 0 ? numberGoodReviews / (reviews.length / 100) : 0}%
            </div>
            <div>Кол-во хороших отзывов: {numberGoodReviews}</div>
            <div>Кол-во нейтральных отзывов: {numberNeutralReviews}</div>
            <div>Кол-во плохих отзывов: {numberBadReviews}</div>
        </div>
    );
}

export default Statistics;
