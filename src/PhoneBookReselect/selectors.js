import {createSelector} from "reselect";

export const idSelectedContactSelector = state => state.contactsReducer.idSelectedContact;
export const contactsSelector = state => state.contactsReducer.contacts;
export const selectedContactSelector = createSelector(contactsSelector, idSelectedContactSelector, (contacts, idSelectedContact) => contacts.find(contact => contact.id === idSelectedContact));
export const visibilityPopupConfirmSelector = state => state.visibilityPopupConfirm;
export const visibilityPopupFormSelector = state => state.popupFormReducer.visibilityPopupForm;
export const popupFormSelector = state => state.popupFormReducer.popupForm;