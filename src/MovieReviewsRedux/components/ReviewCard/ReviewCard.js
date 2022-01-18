import styles from "./ReviewCard.module.css";

function ReviewCard({review}) {
    const baseUrl = "https://image.tmdb.org/t/p/w200";
    const {author_details: {username, avatar_path}, content} = review;
    let url;
    if (avatar_path) {
        if (new RegExp("^/https:").test(avatar_path)) url = avatar_path.slice(1);
        else url = baseUrl + avatar_path;
    } else url = "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png";
    return (
        <div className={styles.review}>
            <div className={styles.user}>
                <img height="50" width="50" src={url} alt=""/>
                <div className={styles.username}>{username}</div>
            </div>
            <div>{content}</div>
            <hr/>
        </div>
    );
}

export default ReviewCard;