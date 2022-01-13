import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'
import ReactDOM from "react-dom";
import {IconButton, TextField, Button} from '@mui/material';
import {Clear} from "@mui/icons-material";
import styles from "./PopupForm.module.css";

const defaultValueName = "";
const defaultValueSurname = "";
const defaultValueTelephone = "";

function PopupForm({contact, hide, addContact, editContact, setName, setSurname, setTelephone}) {

    const {id, name, surname, telephone} = contact;

    useEffect(() => {
        setName(name || defaultValueName);
        setSurname(surname || defaultValueSurname);
        setTelephone(telephone || defaultValueTelephone);
    }, []);

    const popupForm = useSelector((state) => state.popupForm);
    const {name: nameForm, surname: surnameForm, telephone: telephoneForm} = popupForm;
    const popupFormInvalid = useSelector((state) => state.popupFormInvalid);
    const {isNameInvalid, isSurnameInvalid, isTelephoneInvalid} = popupFormInvalid;

    const hideClick = () => {
        hide();
        setName(defaultValueName);
        setSurname(defaultValueSurname);
        setTelephone(defaultValueTelephone);
    }

    const save = () => {
        if (isNameInvalid || isSurnameInvalid || isTelephoneInvalid) return;
        if (id) editContact({...popupForm, id});
        else addContact(popupForm);
        hideClick();
    }

    const changeValue = (state) => event => {
        state(event.target.value);
    }

    return (
        ReactDOM.createPortal(
            <div className={styles.popupBg}>
                <div className={styles.popup}>
                    <div className={styles.header}>
                        <h3>{id ? "Редактировать контакт" : "Создать контакт"}</h3>
                        <div>
                            <IconButton onClick={hideClick}>
                                <Clear/>
                            </IconButton>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <TextField
                            error={isNameInvalid}
                            helperText={isNameInvalid && "Неправильная запись"}
                            onChange={changeValue(setName)}
                            value={nameForm || defaultValueName}
                            label="Имя"
                            variant="outlined"/>
                    </div>
                    <div className={styles.item}>
                        <TextField
                            error={isSurnameInvalid}
                            helperText={isSurnameInvalid && "Неправильная запись"}
                            className={styles.item}
                            onChange={changeValue(setSurname)}
                            value={surnameForm || defaultValueSurname}
                            label="Фамилия"
                            variant="outlined"/>
                    </div>
                    <div className={styles.item}>
                        <TextField
                            error={isTelephoneInvalid}
                            helperText={isTelephoneInvalid && "Неправильная запись"}
                            className={styles.item}
                            onChange={changeValue(setTelephone)}
                            value={telephoneForm || defaultValueTelephone}
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