import React, {useState, useCallback, useEffect} from 'react';
import ContactsList from './ContactsList';
import ContactInfo from './ContactInfo';
import {createContact, readContacts, deleteContact, updateContact} from './APIRequests';
import styles from "./PhoneBook.module.css";

function PhoneBook() {
    const [contacts, setContacts] = useState([]);
    const [idSelectedContact, setIdSelectedContact] = useState(null);

    useEffect(() => {
        readContacts().then(res => {
            setContacts(res);
        });
    }, []);

    const addContact = useCallback((contact) => {
        const newContact = {...contact, id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1};
        setContacts((prevContacts => [...prevContacts, newContact]));
        createContact(newContact);
    }, [contacts]);

    const editContact = useCallback((contact, id) => {
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

    const selectedContact = contacts.find(contact => contact.id === idSelectedContact);

    return (
        <div className={styles.container}>
            <div className={styles.phoneBook}>
                {idSelectedContact === null ?
                    <ContactsList
                        contacts={contacts}
                        setIdSelectedContact={setIdSelectedContact}
                        addContact={addContact}
                    />
                    :
                    <ContactInfo
                        contact={selectedContact}
                        setIdSelectedContact={setIdSelectedContact}
                        deleteContact={() => handleDeleteContact(idSelectedContact)}
                        editContact={editContact}
                    />}
            </div>
        </div>
    );
}

export default PhoneBook;

