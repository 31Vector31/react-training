import React, {useState} from 'react';
import {Grid, Button, Box, IconButton} from '@mui/material';
import {Clear,ArrowForwardIos,ArrowBackIosNew} from '@mui/icons-material';
import styles from "./Pictures.module.css";

function Pictures({pictures, editPage}) {
    const [popup, setPopup] = useState(null);

    const forward = () =>{
        if(popup===pictures.length-1) return;
        setPopup(prevIndex => prevIndex+1);
    }

    const back = () =>{
        if(popup===0) return;
        setPopup(prevIndex => prevIndex-1);
    }
    return (
        <div>
            <Grid container spacing={2}>
                {pictures.map((picture, index) =>
                    <Grid
                        key={index}
                        item xs
                        container
                        justifyContent="center"
                        alignItems="center">
                        <img onClick={() => setPopup(index)} src={picture.previewURL} alt=""/>
                    </Grid>)}
            </Grid>
            {pictures.length !== 0 &&
            <Box textAlign='center'>
                <br/>
                <Button
                    variant="contained"
                    onClick={() => editPage()}>
                    Загрузить еще
                </Button>
            </Box>}

            {popup!==null &&
            <div className={styles.popupBg}>
                <div className={styles.popup}>
                    <IconButton onClick={() => setPopup(null)}>
                        <Clear />
                    </IconButton>
                    <div className={styles.content}>
                        <IconButton onClick={back}>
                            <ArrowBackIosNew/>
                        </IconButton>
                    <img src={pictures[popup].webformatURL} alt=""/>
                        <IconButton onClick={forward}>
                            <ArrowForwardIos/>
                        </IconButton>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Pictures;