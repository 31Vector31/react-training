import React, {useEffect} from 'react';
import styles from "./PhoneBook.module.css";
import ContactsList from "../../containers/ContactsList";
import PopupForm from "../../containers/PopupForm";
import ContactInfo from "../../containers/ContactInfo";

function PhoneBook({visibilityPopupForm, idSelectedContact, getContacts}) {

    useEffect(() => {
        document.body.classList.add(styles.bodyClass);
        getContacts();
    }, []);

    return (
        <div className={styles.phoneBook}>
            {idSelectedContact === null ? <ContactsList/> : <ContactInfo/>}
            {visibilityPopupForm && <PopupForm/>}
        </div>
    );
}

export default PhoneBook;

