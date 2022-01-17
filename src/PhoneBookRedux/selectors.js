export const popupFormSelector = state => state.popupForm;
export const selectedContactSelector = state => state.contacts.find(contact => contact.id === state.idSelectedContact);