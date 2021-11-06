import React from "react";
import styles from "./Statistics.module.css";

function Statistics({reviews}) {
    const numberReviews = reviews.length;
    const numberGoodReviews = reviews.filter(el => el > 3).length;
    const numberNeutralReviews = reviews.filter(el => el === 3).length;
    const numberBadReviews = reviews.filter(el => el < 3).length;
    return (
        <div className={styles.container}>
            <ul>
                <li>Общее кол-во отзывов: {numberReviews}, процент
                    хороших: {numberReviews > 0 ? +(numberGoodReviews / (numberReviews / 100)).toFixed(2) : 0}%
                </li>
                <li>Кол-во хороших отзывов: {numberGoodReviews}</li>
                <li>Кол-во нейтральных отзывов: {numberNeutralReviews}</li>
                <li>Кол-во плохих отзывов: {numberBadReviews}</li>
            </ul>
        </div>
    );
}

export default Statistics;
