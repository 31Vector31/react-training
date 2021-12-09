import {Button, Paper} from '@mui/material';
import styles from "./ContactsList.module.css";

function ContactsList({contacts, setIdSelectedContact, showPopupForm}) {
    return (
        <div className={styles.contactsList}>
            <div>
                <Button
                    variant="contained"
                    onClick={showPopupForm}>
                    Добавить контакт
                </Button></div>
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
        </div>
    );
}

export default ContactsList;