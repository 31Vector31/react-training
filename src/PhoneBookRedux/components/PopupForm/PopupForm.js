import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import {IconButton, Button} from '@mui/material';
import {Clear} from "@mui/icons-material";
import styles from "./PopupForm.module.css";
import InputTextField from "../InputTextField";

export const defaultValueName = "";
export const defaultValueSurname = "";
export const defaultValueTelephone = "";

function PopupForm({contact, popupForm, hide, save, setName, setSurname, setTelephone, formInitialization}) {
    const {id} = contact || {};

    useEffect(() => {
        formInitialization(contact);
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
                        <InputTextField
                            isError={isNameInvalid}
                            value={nameForm || defaultValueName}
                            label="Имя"
                            onChange={changeValue(setName)}
                        />
                    </div>
                    <div className={styles.item}>
                        <InputTextField
                            isError={isSurnameInvalid}
                            value={surnameForm || defaultValueSurname}
                            label="Фамилия"
                            onChange={changeValue(setSurname)}
                        />
                    </div>
                    <div className={styles.item}>
                        <InputTextField
                            isError={isTelephoneInvalid}
                            value={telephoneForm || defaultValueTelephone}
                            label="Номер телефона"
                            onChange={changeValue(setTelephone)}
                        />
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