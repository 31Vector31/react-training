const initialState = {
    contacts: [],
    idSelectedContact: null,
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACTS': {
            const {contacts} = action;
            return {...state, contacts};
        }
        case 'ADD_CONTACT': {
            const {contact} = action;
            const {contacts: stateContacts} = state;
            return {...state, contacts: [...stateContacts, contact]};
        }
        case 'DEL_CONTACT': {
            const {id} = action;
            const {contacts: stateContacts} = state;
            return {
                ...state, contacts: stateContacts.filter(contact => {
                    const {id: contactId} = contact;
                    return contactId !== id;
                })
            };
        }
        case 'EDIT_CONTACT': {
            const {contact} = action;
            const {id} = contact;
            const {contacts: stateContacts} = state;
            return {
                ...state, contacts: stateContacts.map(el => {
                    const {id: elId} = el;
                    return elId === id ? contact : el;
                })
            };
        }
        case 'SELECT_CONTACT': {
            const {id} = action;
            return {...state, idSelectedContact: id};
        }
        default:
            return state;
    }
}

export default contactsReducer;
