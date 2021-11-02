import React from 'react';
import styles from "./Form.module.css";

function Form(props) {
    return (
        <div className={styles.form}>
            <input value={props.username} onChange={props.changeUsername} className={styles.username}/>
            <select value={props.department} onChange={props.changeDepartment} className={styles.department}>
                <option value="Разработка">Разработка</option>
                <option value="Бухгалтерия">Бухгалтерия</option>
                <option value="Менеджмент">Менеджмент</option>
            </select>
            <button onClick={props.saveUser} className={styles.save}>Сохранить</button>
            <div>
                Поиск по имени:
                <input value={props.search} onChange={props.changeSearch}/>
                <button onClick={props.findUser}>Найти</button>
            </div>
        </div>
    );
}

export default Form;
