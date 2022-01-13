const contacts = (state = [], action) => {
    switch (action.type) {
        case 'GET_CONTACTS': {
            const {contacts} = action;
            return [...state, ...contacts];
        }
        case 'ADD_CONTACT': {
            const {contact} = action;
            return [...state, contact];
        }
        case 'DEL_CONTACT': {
            const {id} = action;
            return state.filter(contact => {
                const {id: contactId} = contact;
                return contactId !== id;
            });
        }
        case 'EDIT_CONTACT': {
            const {contact} = action;
            const {id} = contact;
            return state.map(el => {
                const {id: elId} = el;
                return elId === id ? contact : el;
            });
        }
        default:
            return state;
    }
}

export default contacts;
