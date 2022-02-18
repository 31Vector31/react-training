import styles from "./ReviewCard.module.css";

function ReviewCard({review}) {
    const {author_details: {username}, content, urlPicture} = review;

    return (
        <div className={styles.review}>
            <div className={styles.user}>
                <img height="50" width="50" src={urlPicture} alt=""/>
                <div className={styles.username}>{username}</div>
            </div>
            <div>{content}</div>
            <hr/>
        </div>
    );
}

export default ReviewCard;