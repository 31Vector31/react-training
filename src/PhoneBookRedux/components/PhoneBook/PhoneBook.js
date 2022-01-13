import React, {useEffect} from 'react';
import styles from "./PhoneBook.module.css";
import ContactsList from "../../containers/ContactsList";
import PopupForm from "../../containers/PopupForm";
import ContactInfo from "../../containers/ContactInfo";

function PhoneBook({visibilityPopupForm, idSelectedContact, getContacts}) {

    useEffect(() => {
        const body = document.querySelector('body').style;
        body.maxWidth = "1024px";
        body.margin = "0 auto";
        body.height = "100vh";
        body.position = "relative";
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

