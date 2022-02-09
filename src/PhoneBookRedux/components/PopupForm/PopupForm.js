import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import {IconButton, TextField, Button} from '@mui/material';
import {Clear} from "@mui/icons-material";
import styles from "./PopupForm.module.css";

const defaultValueName = "";
const defaultValueSurname = "";
const defaultValueTelephone = "";

function PopupForm({contact, popupForm, hide, save, setName, setSurname, setTelephone}) {
    const {id, name, surname, telephone} = contact || {};

    useEffect(() => {
        setName(name || defaultValueName);
        setSurname(surname || defaultValueSurname);
        setTelephone(telephone || defaultValueTelephone);
    }, []);

    const {
        name: {value: nameForm, isInvalid: isNameInvalid},
        surname: {value: surnameForm, isInvalid: isSurnameInvalid},
        telephone: {value: telephoneForm, isInvalid: isTelephoneInvalid},
    } = popupForm;

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
                            <IconButton onClick={hide}>
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
                    <Button onClick={() => save(popupForm, id)} variant="contained" color="success">
                        Сохранить
                    </Button>
                </div>
            </div>
            , document.getElementById('popup'))
    );
}

export default PopupForm;