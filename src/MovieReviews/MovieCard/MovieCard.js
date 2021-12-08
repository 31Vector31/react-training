import styles from "./MovieCard.module.css";
import {NavLink} from "react-router-dom";

function MovieCard({movie}) {
    const {id, title, poster_path, release_date} = movie;
    const baseUrl = "https://image.tmdb.org/t/p/w200";
    return (
        <div>
            <NavLink to={`/movies/${id}`}>
                <div className={styles.card}>
                    <img src={baseUrl + poster_path} alt=""/>
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