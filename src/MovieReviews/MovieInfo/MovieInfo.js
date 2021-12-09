import React, {useEffect, useState} from 'react';
import {useParams, NavLink} from "react-router-dom";
import {getMovieDetails} from '../APIRequests';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import styles from "./MovieInfo.module.css";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function MovieInfo() {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const baseUrl = "https://image.tmdb.org/t/p/w300";
    useEffect(() => {
        getMovieDetails(id).then(res => {
            setMovie(res);
        });
    }, []);

    const {
        poster_path,
        title,
        overview,
        genres,
        release_date,
        runtime,
        budget,
        revenue,
        vote_average,
        vote_count
    } = movie || {};

    return (
        <div>
            {movie &&
                <div>
                    <div className={styles.info}>
                        <img src={baseUrl + poster_path} alt=""/>
                        <div>
                            <Table aria-label="customized table">
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Title</StyledTableCell>
                                        <StyledTableCell align="left">{title}</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Release date</StyledTableCell>
                                        <StyledTableCell align="left">{release_date}</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Genre</StyledTableCell>
                                        <StyledTableCell align="left">{genres.map((genre, index) => {
                                                const {name} = genre;
                                                return (
                                                    <span key={index}>{name} </span>);
                                            }
                                        )}</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Runtime</StyledTableCell>
                                        <StyledTableCell align="left">{runtime}m</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Vote</StyledTableCell>
                                        <StyledTableCell align="left">{vote_average} ({vote_count})</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Budget</StyledTableCell>
                                        <StyledTableCell align="left">{budget}$</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell align="left">Revenue</StyledTableCell>
                                        <StyledTableCell align="left">{revenue}$</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                            <h3 className={styles.item}>Overview</h3>
                            <div className={styles.item}>{overview}</div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.navigation}>
                            <div className={styles.item}>
                                <h3>
                                    <NavLink to={`/movies/${id}/cast`}>
                                        Cast
                                    </NavLink>
                                </h3>
                            </div>
                            <div className={styles.item}>
                                <h3>
                                    <NavLink to={`/movies/${id}/review`}>
                                        Reviews
                                    </NavLink>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default MovieInfo;