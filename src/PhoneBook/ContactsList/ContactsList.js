import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PopupForm from '../PopupForm/PopupForm';
import {Button, Paper} from '@mui/material';
import styles from "./ContactsList.module.css";

function ContactsList({contacts, setIdSelectedContact, addContact}) {
    const [popup, setPopup] = useState(false);

    return (
        <div>
            <Button
                variant="contained"
                onClick={() => setPopup(true)}>
                Добавить контакт
            </Button>
            <div className={styles.container}>
                {contacts.map(contact => {
                        const {id, name, surname} = contact;
                        return (
                            <Paper
                                elevation={3}
                                className={styles.item}
                                key={id}
                                onClick={() => setIdSelectedContact(id)}>
                                {name} {surname}
                            </Paper>);
                    }
                )}
            </div>
            {popup && ReactDOM.createPortal(<PopupForm
                                                addContact={addContact}
                                                isEdit={false}
                                                hide={() => setPopup(false)}/>,
                document.getElementById('popup'))}
        </div>
    );
}

export default ContactsList;