import React, {useState, useCallback} from 'react';
import {Box, Button, Grid} from '@mui/material';
import Popup from './Popup';
import styles from "./Pictures.module.css";

function Pictures({pictures, editPage}) {
    const [indexSelectedPicture, setIndexSelectedPicture] = useState(null);

    const forward = useCallback(() => {
        if (indexSelectedPicture === pictures.length - 1) return;
        setIndexSelectedPicture(prevIndex => prevIndex + 1);
    });

    const back = useCallback(() => {
        if (indexSelectedPicture === 0) return;
        setIndexSelectedPicture(prevIndex => prevIndex - 1);
    });

    return (
        <div className={styles.pictures}>
            <Grid container spacing={2}>
                {pictures.map((picture, index) => {
                    const {previewURL, tags} = picture;
                    return (
                        <Grid
                            key={index}
                            item xs
                            container
                            justifyContent="center"
                            alignItems="center">
                            <img onClick={() => setIndexSelectedPicture(index)} src={previewURL} alt={tags}/>
                        </Grid>);
                })}
            </Grid>
            <Box textAlign='center'>
                <Button
                    variant="contained"
                    onClick={() => editPage()}>
                    Загрузить еще
                </Button>
            </Box>
            {indexSelectedPicture !== null &&
                <Popup
                    picture={pictures[indexSelectedPicture]}
                    hide={() => setIndexSelectedPicture(null)}
                    back={back}
                    forward={forward}
                />}
        </div>
    );
}

export default Pictures;