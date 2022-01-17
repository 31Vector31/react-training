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
        case 'SET_NAME_INVALID': {
            return {...state, isNameInvalid: action.isNameInvalid};
        }
        case 'SET_SURNAME_INVALID': {
            return {...state, isSurnameInvalid: action.isSurnameInvalid};
        }
        case 'SET_TELEPHONE_INVALID': {
            return {...state, isTelephoneInvalid: action.isTelephoneInvalid};
        }
        default:
            return state;
    }
}

export default popupForm;
