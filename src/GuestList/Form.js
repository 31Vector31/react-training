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
        let {name, sex} = this.state;
        if (name.trim() == "" || sex == "Выберите") return;
        this.setState({name: "", sex: "Выберите", age: 1});
        return this.props.saveGuest(this.state);
    }

    render() {
        return (
            <div className={styles.form}>
                <div>
                    <div>
                        Имя:<br/>
                        <input type="text" onChange={this.changeValue("name")} value={this.state.name}/>
                    </div>
                    <div>
                        Пол:<br/>
                        <select onChange={this.changeValue("sex")} value={this.state.sex}>
                            <option disabled value="Выберите">Выберите</option>
                            <option value="Мужчина">Мужчина</option>
                            <option value="Женщина">Женщина</option>
                        </select>
                    </div>
                    <div>
                        Возраст:<br/>
                        <input min="1" type="number" onChange={this.changeValue("age")} value={this.state.age}/>
                    </div>
                </div>
                <button onClick={this.saveGuest}>Добавить</button>
            </div>
        );
    }
}

export default Form;
