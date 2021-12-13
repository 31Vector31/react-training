import React, {useState, useCallback, useEffect, useMemo} from 'react';
import ContactsList from '../ContactsList/ContactsList';
import ContactInfo from '../ContactInfo/ContactInfo';
import {createContact, readContacts, deleteContact, updateContact} from '../APIRequests';
import styles from "./PhoneBook.module.css";
import PopupForm from "../PopupForm/PopupForm";

function PhoneBook() {
    const [contacts, setContacts] = useState([]);
    const [idSelectedContact, setIdSelectedContact] = useState(null);
    const [popupForm, setPopupForm] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body').style;
        body.maxWidth = "1024px";
        body.margin = "0 auto";
        body.height = "100vh";
        body.position = "relative";
        readContacts().then(res => {
            setContacts(res);
        });
    }, []);

    const addContact = useCallback((contact) => {
        const newContact = {...contact, id: new Date().getTime()};
        setContacts([...contacts, newContact]);
        createContact(newContact);
    }, [contacts]);

    const editContact = useCallback((contact) => {
        const {id} = contact;
        const newContacts = contacts.map(el => {
            if (el.id === id) {
                return contact;
            }
            return el;
        });
        setContacts(newContacts);
        updateContact(contact);
        setIdSelectedContact(null);
    }, [contacts]);

    const handleDeleteContact = useCallback((id) => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        setContacts(newContacts);
        deleteContact(id);
        setIdSelectedContact(null);
    }, [contacts]);

    const showPopupForm = useCallback(() => {
        setPopupForm(true);
    }, []);

    const hidePopupForm = useCallback(() => {
        setPopupForm(false);
    }, []);

    const nullifySelectedContact = useCallback(() => {
        setIdSelectedContact(null);
    }, []);

    const removeContact = useCallback(() => {
        handleDeleteContact(idSelectedContact);
    }, [idSelectedContact]);

    const selectedContact = useMemo(() => contacts.find(contact => contact.id === idSelectedContact), [contacts, idSelectedContact]);

    return (
        <div className={styles.phoneBook}>
            {idSelectedContact === null ?
                <ContactsList
                    contacts={contacts}
                    setIdSelectedContact={setIdSelectedContact}
                    showPopupForm={showPopupForm}
                />
                :
                <ContactInfo
                    contact={selectedContact}
                    back={nullifySelectedContact}
                    deleteContact={removeContact}
                    showPopupForm={showPopupForm}
                />}
            {popupForm &&
                <PopupForm
                    contact={selectedContact}
                    editContact={editContact}
                    addContact={addContact}
                    hide={hidePopupForm}
                />}
        </div>
    );
}

export default PhoneBook;

