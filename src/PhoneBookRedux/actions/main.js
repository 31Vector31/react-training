import {createContact, readContacts, delContact, updateContact} from '../APIRequests';
import {setVisibilityPopupConfirm} from "./popupConfirm";

export const getContacts = () => dispatch => {
    readContacts().then(contacts => {
        dispatch({
            type: 'GET_CONTACTS',
            contacts
        });
    });
};

export const addContact = contact => dispatch => {
    const newContact = {...contact, id: new Date().getTime()};
    createContact(newContact).then(
        dispatch({
            type: 'ADD_CONTACT',
            contact: newContact
        })
    );
};

export const deleteContact = id => dispatch => {
    delContact(id).then(
        dispatch({
            type: 'DEL_CONTACT',
            id
        }),
        dispatch(setVisibilityPopupConfirm(false)),
        dispatch(setIdSelectedContact(null))
    );
};

export const editContact = contact => dispatch => {
    updateContact(contact).then(
        dispatch({
            type: 'EDIT_CONTACT',
            contact
        })
    );
};

export const setIdSelectedContact = id => ({
    type: 'SELECT_CONTACT',
    id
});