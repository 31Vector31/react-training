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

    const selectedContact = useMemo(() => contacts.find(contact => contact.id === idSelectedContact), [contacts, idSelectedContact]);

    return (
        <div className={styles.phoneBook}>
            {idSelectedContact === null ?
                <ContactsList
                    contacts={contacts}
                    setIdSelectedContact={setIdSelectedContact}
                    showPopupForm={() => setPopupForm(true)}
                />
                :
                <ContactInfo
                    contact={selectedContact}
                    back={() => setIdSelectedContact(null)}
                    deleteContact={() => handleDeleteContact(idSelectedContact)}
                    showPopupForm={() => setPopupForm(true)}
                />}
            {popupForm &&
                <PopupForm
                    contact={selectedContact}
                    editContact={editContact}
                    addContact={addContact}
                    hide={() => setPopupForm(false)}
                />}
        </div>
    );
}

export default PhoneBook;

