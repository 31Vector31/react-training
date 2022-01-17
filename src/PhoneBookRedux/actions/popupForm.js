export const setName = name => dispatch => {
    dispatch({
        type: 'SET_NAME',
        name
    });
    dispatch({
        type: 'SET_NAME_INVALID',
        isNameInvalid: name.length > 10
    });
};

export const setSurname = surname => dispatch => {
    dispatch({
        type: 'SET_SURNAME',
        surname
    });
    dispatch({
        type: 'SET_SURNAME_INVALID',
        isSurnameInvalid: surname.length > 20
    });
};

export const setTelephone = telephone => dispatch => {
    dispatch({
        type: 'SET_TELEPHONE',
        telephone
    });
    dispatch({
        type: 'SET_TELEPHONE_INVALID',
        isTelephoneInvalid: !(/^\+\d{12}$/.test(telephone))
    });
};