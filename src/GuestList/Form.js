import React from 'react';
import styles from "./Form.module.css";

function Form(props) {
    return (
        <div className={styles.form}>
            <div>
                <div>
                    Имя:<br/>
                    <input type="text" onChange={props.changeName} value={props.name}/>
                </div>
                <div>
                    Пол:<br/>
                    <select onChange={props.changeSex} value={props.sex}>
                        <option value="Мужчина">Мужчина</option>
                        <option value="Женщина">Женщина</option>
                    </select>
                </div>
                <div>
                    Возраст:<br/>
                    <input type="number" onChange={props.changeAge} value={props.age}/>
                </div>
            </div>
            <button onClick={props.saveGuest}>Добавить</button>
        </div>
    );
}

export default Form;
