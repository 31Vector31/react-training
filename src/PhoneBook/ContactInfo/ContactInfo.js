import React, {useState} from 'react';
import ReactDOM from "react-dom";
import PopupForm from "../PopupForm/PopupForm";
import PopupConfirm from "../PopupConfirm/PopupConfirm";
import {Button, IconButton} from '@mui/material';
import {ArrowBack, Phone, Edit, Delete} from '@mui/icons-material';
import styles from "./ContactInfo.module.css";

function ContactInfo({contact, setIdSelectedContact, deleteContact, editContact}) {
    const {name, surname, telephone} = contact;
    const [popup, setPopup] = useState(false);
    const [popupConfirm, setPopupConfirm] = useState(false);

    return (
        <div>
            <div className={styles.header}>
                <IconButton onClick={() => setIdSelectedContact(null)} size="small" variant="contained">
                    <ArrowBack fontSize="small"/>
                </IconButton>
                <IconButton color="error" onClick={() => setPopupConfirm(true)} size="small" variant="contained">
                    <Delete fontSize="small"/>
                </IconButton>
            </div>
            <div className={styles.item}>Имя: {name}</div>
            <div className={styles.item}>Фамилия: {surname}</div>
            <div className={styles.item}><Phone fontSize="small"/> {telephone}</div>
            <div className={styles.item}>
                <Button startIcon={<Edit/>} onClick={() => setPopup(true)} variant="outlined" size="small">
                    Редактировать
                </Button>
            </div>
            <div className={styles.item}>
            </div>
            {popup && ReactDOM.createPortal(<PopupForm contact={contact}
                                                       isEdit={true}
                                                       editContact={editContact}
                                                       hide={() => setPopup(false)}/>,
                document.getElementById('popup'))}
            {popupConfirm && ReactDOM.createPortal(<PopupConfirm
                                                        contact={contact}
                                                        deleteContact={deleteContact}
                                                        hide={() => setPopupConfirm(false)}/>,
                document.getElementById('popup'))}
        </div>
    );
}

export default ContactInfo;