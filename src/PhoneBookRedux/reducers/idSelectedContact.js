const idSelectedContact = (state = null, action) => {
    switch (action.type) {
        case 'SELECT_CONTACT':
            return action.id;
        default:
            return state;
    }
}

export default idSelectedContact;