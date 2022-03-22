import React from 'react';
import styles from "./NewsCard.module.css";

const defaultImage = "https://www.lapizza.lv/ru/assets/images/products/no-image.png";

function NewsCard({news}) {
    const {pubDate, image_url, title, description, link} = news;
    return (
        <div className={styles.news}>
            <img height="100" width="100" src={image_url || defaultImage} alt=""/>
            <div className={styles.text}>
                <div className={styles.title}><a href={link}>{title}</a></div>
                <div>{description}</div>
                <div>{pubDate}</div>
            </div>
        </div>
    );
}

export default NewsCard;

