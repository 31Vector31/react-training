import React, {useState, useEffect} from 'react';
import styles from "./Form.module.css";

function Form({saveUser, username: usernameProps, department: departmentProps}) {

    const [username, setUsername] = useState(null);
    const [department, setDepartment] = useState(null);

    useEffect(() => {
        setUsername(usernameProps || "");
        setDepartment(departmentProps || "");
    }, [usernameProps]);

    const saveUserClick = () => {
        const verifiedUsername = username ? username.trim() : "";
        const verifiedDepartment = department ? department.trim() : "";
        if (verifiedUsername === "" || verifiedDepartment === "") return;
        setUsername(null);
        setDepartment(null);
        saveUser(username, department);
    }

    return (
        <div className={styles.form}>
            <div>{usernameProps ? "Редактировать пользователя:" : "Создать пользователя:"}</div>
            <input value={username || ""} onChange={(event) => setUsername(event.target.value)}/>
            <select value={department || ""} onChange={(event) => setDepartment(event.target.value)}>
                <option disabled value="">Выберите</option>
                <option value="Разработка">Разработка</option>
                <option value="Бухгалтерия">Бухгалтерия</option>
                <option value="Менеджмент">Менеджмент</option>
            </select>
            <button onClick={saveUserClick}>Сохранить</button>
        </div>
    );

}

export default Form;

