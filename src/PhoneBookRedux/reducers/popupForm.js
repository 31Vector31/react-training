const popupForm = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NAME': {
            return {...state, name: action.name};
        }
        case 'SET_SURNAME': {
            return {...state, surname: action.surname};
        }
        case 'SET_TELEPHONE': {
            return {...state, telephone: action.telephone};
        }
        default:
            return state;
    }
}

export default popupForm;
