import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import {IconButton, TextField, Button} from '@mui/material';
import {Clear} from "@mui/icons-material";
import styles from "./PopupForm.module.css";

const initialStateName = (contact) => contact ? contact.name : null;
const initialStateSurname = (contact) => contact ? contact.surname : null;
const initialStateTelephone = (contact) => contact ? contact.telephone : null;

function PopupForm({contact, hide, addContact, editContact}) {
    const [name, setName] = useState(() => initialStateName(contact));
    const [surname, setSurname] = useState(() => initialStateSurname(contact));
    const [telephone, setTelephone] = useState(() => initialStateTelephone(contact));

    const [isNameError, setIsNameError] = useState(false);
    const [isSurnameError, setIsSurnameError] = useState(false);
    const [isTelephoneError, setIsTelephoneError] = useState(false);

    const defaultValueName = "";
    const defaultValueSurname = "";
    const defaultValueTelephone = "";

    const changeValue = (state) => event => {
        state(event.target.value);
    }

    useEffect(() => {
        setIsNameError((name || defaultValueName).length > 10);
    }, [name]);

    useEffect(() => {
        setIsSurnameError((surname || defaultValueSurname).length > 20);
    }, [surname]);

    useEffect(() => {
        if (telephone === null) return;
        setIsTelephoneError(!(/^\+\d{12}$/.test(telephone || defaultValueTelephone)));
    }, [telephone]);

    const save = () => {
        if (isNameError || isSurnameError || isTelephoneError) return;
        if (contact) editContact({id: contact.id, name, surname, telephone});
        else addContact({name, surname, telephone});
        hide();
    }

    return (
        ReactDOM.createPortal(
            <div className={styles.popupBg}>
                <div className={styles.popup}>
                    <div className={styles.header}>
                        <h3>{contact ? "Редактировать контакт" : "Создать контакт"}</h3>
                        <div>
                            <IconButton onClick={hide}>
                                <Clear/>
                            </IconButton>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <TextField
                            error={isNameError}
                            helperText={isNameError && "Неправильная запись"}
                            onChange={changeValue(setName)}
                            value={name || defaultValueName}
                            label="Имя"
                            variant="outlined"/>
                    </div>
                    <div className={styles.item}>
                        <TextField
                            error={isSurnameError}
                            helperText={isSurnameError && "Неправильная запись"}
                            className={styles.item}
                            onChange={changeValue(setSurname)}
                            value={surname || defaultValueSurname}
                            label="Фамилия"
                            variant="outlined"/>
                    </div>
                    <div className={styles.item}>
                        <TextField
                            error={isTelephoneError}
                            helperText={isTelephoneError && "Неправильная запись"}
                            className={styles.item}
                            onChange={changeValue(setTelephone)}
                            value={telephone || defaultValueTelephone}
                            label="Номер телефона"
                            variant="outlined"/>
                    </div>
                    <Button onClick={save} variant="contained" color="success">
                        Сохранить
                    </Button>
                </div>
            </div>
            , document.getElementById('popup'))
    );
}

export default PopupForm;