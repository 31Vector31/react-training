import {createSelector} from "reselect";

const idSelectedContact = state => state.contactsReducer.idSelectedContact;
const contacts = state => state.contactsReducer.contacts;

export const selectedContactSelector = createSelector(contacts, idSelectedContact, (contacts, idSelectedContact) => contacts.find(contact => contact.id === idSelectedContact));