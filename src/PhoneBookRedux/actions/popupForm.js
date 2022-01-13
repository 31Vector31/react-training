export const setName = name => ({
    type: 'SET_NAME',
    name
});

export const setSurname = surname => ({
    type: 'SET_SURNAME',
    surname
});

export const setTelephone = telephone => ({
    type: 'SET_TELEPHONE',
    telephone
});

export const setNameInvalid = name => ({
    type: 'SET_NAME_INVALID',
    name
});

export const setSurnameInvalid = surname => ({
    type: 'SET_SURNAME_INVALID',
    surname
});

export const setTelephoneInvalid = telephone => ({
    type: 'SET_TELEPHONE_INVALID',
    telephone
});