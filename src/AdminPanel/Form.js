import React from 'react';
import styles from "./Form.module.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            department: "",
        };
    }

    componentDidUpdate(prevProps) {
        const {idEditElement: prevIdEditElement} = prevProps;
        const {idEditElement, username, department} = this.props;
        if (prevIdEditElement !== idEditElement) {
            this.setState({
                username: username || "",
                department: department || ""
            });
        }
    }

    changeValue = (state) => event => {
        this.setState({[state]: event.target.value});
    }

    saveUser = () => {
        let {username, department} = this.state;
        username = username.trim();
        if (username === "" || department === "") return;
        this.setState({
            username: "",
            department: ""
        });
        this.props.saveUser(username, department);
    }

    render() {
        const {username, department} = this.state;
        const {idEditElement} = this.props;
        return (
            <div className={styles.form}>
                <div>{idEditElement ? "Редактировать пользователя:" : "Создать пользователя:"}</div>
                <input value={username} onChange={this.changeValue("username")}/>
                <select value={department} onChange={this.changeValue("department")}>
                    <option disabled value="">Выберите</option>
                    <option value="Разработка">Разработка</option>
                    <option value="Бухгалтерия">Бухгалтерия</option>
                    <option value="Менеджмент">Менеджмент</option>
                </select>
                <button onClick={this.saveUser}>Сохранить</button>
            </div>
        );
    }
}

export default Form;

