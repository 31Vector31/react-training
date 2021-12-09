import {Button} from '@mui/material';
import styles from "./PopupConfirm.module.css";
import ReactDOM from "react-dom";

function PopupForm({contact, deleteContact, hide}) {
    const {name, surname} = contact;

    return (
        ReactDOM.createPortal(
            <div className={styles.popupBg}>
                <div className={styles.popup}>
                    <div>Вы уверенны, что хотите удалить контакт {name} {surname}?</div>
                    <div className={styles.buttons}>
                        <div className={styles.item}>
                            <Button onClick={deleteContact} variant="contained" size="small" color="error">
                                Удалить
                            </Button>
                        </div>
                        <div className={styles.item}>
                            <Button onClick={hide} variant="contained" size="small">
                                Отмена
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            , document.getElementById('popup'))
    );
}

export default PopupForm;