import {addContact, editContact} from "./main";
import {defaultValueName, defaultValueSurname, defaultValueTelephone} from "../components/PopupForm/PopupForm";
import {selectedContactSelector} from "../selectors";

export const setName = name => ({
    type: 'SET_NAME',
    payload: {value: name, isInvalid: name.length > 10}
});

export const setSurname = surname => ({
    type: 'SET_SURNAME',
    payload: {value: surname, isInvalid: surname.length > 20}
});

export const setTelephone = telephone => ({
    type: 'SET_TELEPHONE',
    payload: {value: telephone, isInvalid: !(/^\+\d{12}$/.test(telephone))}
});

export const openPopup = () => (dispatch, getState) => {
    dispatch(setVisibilityPopupForm(true));
    dispatch(formInitialization(selectedContactSelector(getState())));
};

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

const formInitialization = (contact) => dispatch => {
    const {name, surname, telephone} = contact || {};
    dispatch(setName(name || defaultValueName));
    dispatch(setSurname(surname || defaultValueSurname));
    dispatch(setTelephone(telephone || defaultValueTelephone));
};

const setVisibilityPopupForm = status => ({
    type: 'VISIBILITY_POPUP_FORM',
    payload: status
});