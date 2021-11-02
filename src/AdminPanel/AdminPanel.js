import React from 'react';
import Table from './Table';
import Form from './Form';

const localStorageKey = "users";

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            department: "Разработка",
            users: [],
            indexEditElement: null,
            search: "",
        };
    }

    componentDidMount() {
        this.setState({users: this.localStorageGetItem(localStorageKey)});
    }

    localStorageSetItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            alert(e);
        }
    }

    localStorageGetItem(key) {
        try {
            let value = JSON.parse(localStorage.getItem(key) || "[]");
            return Array.isArray(value) ? value : [];
        } catch (e) {
            alert(e);
            return [];
        }
    }

    saveUser = () => {
        let users = this.state.users;
        let currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        let indexEditElement = this.state.indexEditElement;
        let username = this.state.username;
        let department = this.state.department;

        if (indexEditElement !== null) {
            users[indexEditElement].username = username;
            users[indexEditElement].department = department;
            users[indexEditElement].updateDate = currentDate;
            this.setState({indexEditElement: null});
        } else {
            let user = {
                username: username,
                department: department,
                creationDate: currentDate,
                updateDate: currentDate
            };
            users.push(user);
        }

        this.setState({users: users, username: "", department: "Разработка"});
        this.localStorageSetItem(localStorageKey, users);
    }

    changeUsername = (event) => {
        this.setState({username: event.target.value});
    }

    changeDepartment = (event) => {
        this.setState({department: event.target.value});
    }

    changeSearch = (event) => {
        this.setState({search: event.target.value});
    }

    deleteUser = (index) => {
        let users = this.state.users;
        if (!window.confirm(`Вы уверенны, что хотите удалить пользователя ${users[index].username}?`)) {
            return;
        }
        if (this.state.indexEditElement === index) {
            this.setState({username: "", department: "Разработка", indexEditElement: null});
        }
        users.splice(index, 1);
        this.setState({users: users});
        this.localStorageSetItem(localStorageKey, users);
    }

    editUser = (index) => {
        let users = this.state.users;
        this.setState({username: users[index].username, department: users[index].department, indexEditElement: index});
    }

    findUser = () => {
        let users = this.state.users;
        users = users.filter(user => user.username == this.state.search);
        this.setState({users: users});
    }

    render() {
        return (
            <div>
                <Form
                    username={this.state.username}
                    department={this.state.department}
                    search={this.state.search}
                    saveUser={this.saveUser}
                    findUser={this.findUser}
                    changeUsername={this.changeUsername}
                    changeDepartment={this.changeDepartment}
                    changeSearch={this.changeSearch}/>
                <Table
                    users={this.state.users}
                    deleteUser={this.deleteUser}
                    editUser={this.editUser}/>
            </div>
        );
    }
}

export default AdminPanel;