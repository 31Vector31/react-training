import React, {useState} from 'react';
import PopupConfirm from "../PopupConfirm/PopupConfirm";
import {Button, IconButton} from '@mui/material';
import {ArrowBack, Phone, Edit, Delete} from '@mui/icons-material';
import styles from "./ContactInfo.module.css";

function ContactInfo({contact, back, deleteContact, showPopupForm}) {
    const {name, surname, telephone} = contact;
    const [popupConfirm, setPopupConfirm] = useState(false);

    return (
        <div>
            <div className={styles.header}>
                <IconButton onClick={back} size="small" variant="contained">
                    <ArrowBack fontSize="small"/>
                </IconButton>
                <IconButton color="error" onClick={() => setPopupConfirm(true)} size="small" variant="contained">
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
            {popupConfirm &&
                <PopupConfirm
                    contact={contact}
                    deleteContact={deleteContact}
                    hide={() => setPopupConfirm(false)}
                />}
        </div>
    );
}

export default ContactInfo;