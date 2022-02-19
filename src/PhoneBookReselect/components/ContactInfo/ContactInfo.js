import React from 'react';
import {Button, IconButton} from '@mui/material';
import {ArrowBack, Phone, Edit, Delete} from '@mui/icons-material';
import styles from "./ContactInfo.module.css";
import PopupConfirm from "../../containers/PopupConfirm";

function ContactInfo({contact, back, showPopupConfirm, showPopupForm, popupConfirm}) {
    const {name, surname, telephone} = contact;
    return (
        <div>
            <div className={styles.header}>
                <IconButton onClick={back} size="small" variant="contained">
                    <ArrowBack fontSize="small"/>
                </IconButton>
                <IconButton color="error" onClick={showPopupConfirm} size="small" variant="contained">
                    <Delete fontSize="small"/>
                </IconButton>
            </div>
            <div className={styles.content}>
                <div>
                    <div className={styles.item}>Имя: {name}</div>
                    <div className={styles.item}>Фамилия: {surname}</div>
                    <div className={styles.item}><Phone fontSize="small"/> {telephone}</div>
                    <div className={styles.item}>
                        <Button startIcon={<Edit/>} onClick={showPopupForm} variant="outlined" size="small">
                            Редактировать
                        </Button>
                    </div>
                </div>
            </div>
            {popupConfirm && <PopupConfirm/>}
        </div>
    );
}

export default ContactInfo;