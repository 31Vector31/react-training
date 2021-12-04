import {Button} from '@mui/material';
import styles from "./PopupConfirm.module.css";

function PopupForm({contact, deleteContact, hide}) {
    const {id, name, surname} = contact;

    return (
        <div className={styles.popupBg}>
            <div className={styles.popup}>
                <div>Вы уверенны, что хотите удалить контакт {name} {surname}?</div>
                <div className={styles.buttons}>
                    <div className={styles.item}>
                        <Button onClick={() => deleteContact(id)} variant="contained" size="small" color="error">
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
    );
}

export default PopupForm;