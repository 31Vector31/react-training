import {createContact, readContacts, delContact, updateContact} from '../APIRequests';

export const getContacts = () => (dispatch) => {
    readContacts().then(contacts => {
        dispatch({
            type: 'GET_CONTACTS',
            contacts
        });
    });
};

export const addContact = contact => {
    const newContact = {...contact, id: new Date().getTime()};
    createContact(newContact);
    return {
        type: 'ADD_CONTACT',
        contact: newContact
    };
};

export const deleteContact = id => {
    delContact(id);
    return {
        type: 'DEL_CONTACT',
        id
    }
};

export const editContact = contact => {
    updateContact(contact);
    return {
        type: 'EDIT_CONTACT',
        contact
    }
};

export const setIdSelectedContact = id => ({
    type: 'SELECT_CONTACT',
    id
});

export const setVisibilityPopupForm = status => ({
    type: 'VISIBILITY_POPUP_FORM',
    status
});