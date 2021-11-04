import React from 'react';
import styles from "./Form.module.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            sex: "Выберите",
            age: 1
        };
    }

    changeValue = (state) => event => {
        this.setState({[state]: event.target.value});
    }

    saveGuest = () => {
        let {name, sex, age} = this.state;
        if (name.trim() == "" || sex == "Выберите") return;
        this.setState({name: "", sex: "Выберите", age: 1});
        this.props.saveGuest({name, sex, age});
    }

    render() {
        const {name, sex, age} = this.state;
        return (
            <div className={styles.form}>
                <div>
                    <div>
                        Имя:<br/>
                        <input type="text" onChange={this.changeValue("name")} value={name}/>
                    </div>
                    <div>
                        Пол:<br/>
                        <select onChange={this.changeValue("sex")} value={sex}>
                            <option disabled value="Выберите">Выберите</option>
                            <option value="Мужчина">Мужчина</option>
                            <option value="Женщина">Женщина</option>
                        </select>
                    </div>
                    <div>
                        Возраст:<br/>
                        <input min="1" type="number" onChange={this.changeValue("age")} value={age}/>
                    </div>
                </div>
                <button onClick={this.saveGuest}>Добавить</button>
            </div>
        );
    }
}

export default Form;
