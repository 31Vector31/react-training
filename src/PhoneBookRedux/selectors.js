export const selectedContactSelector = state => state.contactsReducer.contacts.find(contact => contact.id === state.contactsReducer.idSelectedContact);
