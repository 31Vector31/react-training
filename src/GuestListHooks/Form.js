import React, {useState} from 'react';
import styles from "./Form.module.css";

function Form(props) {
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState(1);

    const saveGuest = () => {
        if (name.trim() == "" || sex == "") return;
        setName("");
        setSex("");
        setAge(1);
        props.saveGuest({name, sex, age});
    }

    return (
        <div className={styles.form}>
            <div>
                <div>
                    Имя:<br/>
                    <input type="text" onChange={(event) => setName(event.target.value)} value={name}/>
                </div>
                <div>
                    Пол:<br/>
                    <select onChange={(event) => setSex(event.target.value)} value={sex}>
                        <option disabled value="">Выберите</option>
                        <option value="Мужчина">Мужчина</option>
                        <option value="Женщина">Женщина</option>
                    </select>
                </div>
                <div>
                    Возраст:<br/>
                    <input min="1" type="number" onChange={(event) => setAge(event.target.value)} value={age}/>
                </div>
            </div>
            <button onClick={saveGuest}>Добавить</button>
        </div>
    );
}

export default Form;
