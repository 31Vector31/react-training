const popupFormInvalid = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NAME_INVALID': {
            return {...state, isNameInvalid: action.name.length > 10};
        }
        case 'SET_SURNAME_INVALID': {
            return {...state, isSurnameInvalid: action.surname.length > 20};
        }
        case 'SET_TELEPHONE_INVALID': {
            return {...state, isTelephoneInvalid: !(/^\+\d{12}$/.test(action.telephone))};
        }
        default:
            return state;
    }
}

export default popupFormInvalid;
