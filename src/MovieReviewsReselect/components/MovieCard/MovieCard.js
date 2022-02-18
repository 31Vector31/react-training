import styles from "./MovieCard.module.css";
import {NavLink} from "react-router-dom";

function MovieCard({movie}) {
    const {id, title, release_date, urlPicture} = movie;
    return (
        <div>
            <NavLink to={`/movies/${id}`}>
                <div className={styles.card}>
                    <img width="200" height="300" src={urlPicture} alt=""/>
                    <div className={styles.info}>
                        <div className={styles.item}>{title}</div>
                        <div className={styles.item}>{release_date}</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default MovieCard;