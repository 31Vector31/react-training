import React, {useState} from 'react';
import styles from "./Form.module.css";

function Form({saveGuest}) {
    const [name, setName] = useState(null);
    const [sex, setSex] = useState(null);
    const [age, setAge] = useState(null);

    const changeValue = (state) => event => {
        state(event.target.value);
    }

    const saveGuestClick = () => {
        const verifiedName = name ? name.trim() : "";
        if (verifiedName === "" || sex == null || age == null) return;
        setName(null);
        setSex(null);
        setAge(null);
        saveGuest({name: verifiedName, sex, age});
    }

    return (
        <div className={styles.form}>
            <div>
                <div>
                    Имя:<br/>
                    <input type="text" onChange={changeValue(setName)} value={name || ""}/>
                </div>
                <div>
                    Пол:<br/>
                    <select onChange={changeValue(setSex)} value={sex || ""}>
                        <option disabled value="">Выберите</option>
                        <option value="Мужчина">Мужчина</option>
                        <option value="Женщина">Женщина</option>
                    </select>
                </div>
                <div>
                    Возраст:<br/>
                    <input min="0" type="number" onChange={changeValue(setAge)} value={age || 0}/>
                </div>
            </div>
            <button onClick={saveGuestClick}>Добавить</button>
        </div>
    );
}

export default Form;
