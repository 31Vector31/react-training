import {IconButton} from '@mui/material';
import {Clear, ArrowForwardIos, ArrowBackIosNew} from '@mui/icons-material';
import {grey} from '@mui/material/colors';
import styles from "./Popup.module.css";

function Popup({picture, hide, back, forward}) {
    const {webformatURL, tags} = picture;

    return (
        <div className={styles.popupBg}>
            <div className={styles.popup}>
                <IconButton onClick={hide}>
                    <Clear sx={{color: grey[50]}}/>
                </IconButton>
                <div className={styles.content}>
                    <IconButton onClick={back}>
                        <ArrowBackIosNew sx={{color: grey[50]}}/>
                    </IconButton>
                    <img className={styles.image} src={webformatURL} alt={tags}/>
                    <IconButton onClick={forward}>
                        <ArrowForwardIos sx={{color: grey[50]}}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Popup;