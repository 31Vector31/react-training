import React, {useState, useEffect} from 'react';
import styles from "./Form.module.css";

function Form(props) {

    const [username, setUsername] = useState(null);
    const [department, setDepartment] = useState(null);
    const {idEditElement} = props;

    useEffect(() => {
        setUsername(props.username || "");
        setDepartment(props.department || "");
    }, [idEditElement]);

    const saveUser = () => {
        let verifiedUsername = username ? username.trim() : "";
        let verifiedDepartment = department ? department.trim() : "";
        if (verifiedUsername === "" || verifiedDepartment === "") return;
        setUsername(null);
        setDepartment(null);
        props.saveUser(username, department);
    }

    return (
        <div className={styles.form}>
            <div>{idEditElement ? "Редактировать пользователя:" : "Создать пользователя:"}</div>
            <input value={username || ""} onChange={(event) => setUsername(event.target.value)}/>
            <select value={department || ""} onChange={(event) => setDepartment(event.target.value)}>
                <option disabled value="">Выберите</option>
                <option value="Разработка">Разработка</option>
                <option value="Бухгалтерия">Бухгалтерия</option>
                <option value="Менеджмент">Менеджмент</option>
            </select>
            <button onClick={saveUser}>Сохранить</button>
        </div>
    );

}

export default Form;

