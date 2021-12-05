import React, {useEffect, useState} from 'react';
import {IconButton, TextField, Button} from '@mui/material';
import {Clear} from "@mui/icons-material";
import styles from "./PopupForm.module.css";

function PopupForm({contact, hide, addContact, editContact, isEdit}) {
    const [name, setName] = useState(contact ? contact.name : null);
    const [surname, setSurname] = useState(contact ? contact.surname : null);
    const [telephone, setTelephone] = useState(contact ? contact.telephone : null);

    const [isNameError, setIsNameError] = useState(false);
    const [isSurnameError, setIsSurnameError] = useState(false);
    const [isTelephoneError, setIsTelephoneError] = useState(false);

    const changeValue = (state) => event => {
        state(event.target.value);
    }

    useEffect(() => {
        setIsNameError((name || "").length > 10);
    }, [name]);

    useEffect(() => {
        setIsSurnameError((surname || "").length > 20);
    }, [surname]);

    useEffect(() => {
        if (telephone === null) return;
        setIsTelephoneError(!(/^\+\d{12}$/.test(telephone || "")));
    }, [telephone]);

    const save = () => {
        if (isNameError || isSurnameError || isTelephoneError) return;
        isEdit ? editContact({id: contact.id, name, surname, telephone}, contact.id) : addContact({
            name,
            surname,
            telephone
        });
        hide();
    }

    return (
        <div className={styles.popupBg}>
            <div className={styles.popup}>
                <div className={styles.header}>
                    <h3>{isEdit ? "Редактировать контакт" : "Создать контакт"}</h3>
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
                        value={name || ""}
                        label="Имя"
                        variant="outlined"/>
                </div>
                <div className={styles.item}>
                    <TextField
                        error={isSurnameError}
                        helperText={isSurnameError && "Неправильная запись"}
                        className={styles.item}
                        onChange={changeValue(setSurname)}
                        value={surname || ""}
                        label="Фамилия"
                        variant="outlined"/>
                </div>
                <div className={styles.item}>
                    <TextField
                        error={isTelephoneError}
                        helperText={isTelephoneError && "Неправильная запись"}
                        className={styles.item}
                        onChange={changeValue(setTelephone)}
                        value={telephone || ""}
                        label="Номер телефона"
                        variant="outlined"/>
                </div>
                <Button onClick={save} variant="contained" color="success">
                    Сохранить
                </Button>
            </div>
        </div>
    );
}

export default PopupForm;