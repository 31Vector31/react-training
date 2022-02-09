import {addContact, editContact} from "./main";

export const setName = name => ({
    type: 'SET_NAME',
    name: {value: name, isInvalid: name.length > 10}
});

export const setSurname = surname => ({
    type: 'SET_SURNAME',
    surname: {value: surname, isInvalid: surname.length > 20}
});

export const setTelephone = telephone => ({
    type: 'SET_TELEPHONE',
    telephone: {value: telephone, isInvalid: !(/^\+\d{12}$/.test(telephone))}
});

export const hide = () => dispatch => {
    dispatch(setVisibilityPopupForm(false));
};

export const save = (popupForm, id) => dispatch => {
    const {
        name: {value: nameForm, isInvalid: isNameInvalid},
        surname: {value: surnameForm, isInvalid: isSurnameInvalid},
        telephone: {value: telephoneForm, isInvalid: isTelephoneInvalid},
    } = popupForm;

    if (isNameInvalid || isSurnameInvalid || isTelephoneInvalid) return;
    const form = {name: nameForm, surname: surnameForm, telephone: telephoneForm};

    if (id) dispatch(editContact({...form, id}));
    else dispatch(addContact(form));
    dispatch(hide());
};

export const setVisibilityPopupForm = status => ({
    type: 'VISIBILITY_POPUP_FORM',
    status
});
