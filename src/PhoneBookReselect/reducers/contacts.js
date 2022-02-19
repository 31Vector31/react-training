const initialState = {
    contacts: [],
    idSelectedContact: null,
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACTS': {
            const {payload} = action;
            return {...state, contacts: payload};
        }
        case 'ADD_CONTACT': {
            const {payload} = action;
            const {contacts: stateContacts} = state;
            return {...state, contacts: [...stateContacts, payload]};
        }
        case 'DEL_CONTACT': {
            const {payload} = action;
            const {contacts: stateContacts} = state;
            return {
                ...state, contacts: stateContacts.filter(contact => {
                    const {id: contactId} = contact;
                    return contactId !== payload;
                })
            };
        }
        case 'EDIT_CONTACT': {
            const {payload} = action;
            const {id} = payload;
            const {contacts: stateContacts} = state;
            return {
                ...state, contacts: stateContacts.map(el => {
                    const {id: elId} = el;
                    return elId === id ? payload : el;
                })
            };
        }
        case 'SELECT_CONTACT': {
            const {payload} = action;
            return {...state, idSelectedContact: payload};
        }
        default:
            return state;
    }
}

export default contactsReducer;
