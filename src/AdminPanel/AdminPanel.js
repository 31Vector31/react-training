import React from 'react';
import Table from './Table';
import Form from './Form';

const localStorageKey = "users";

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            idEditElement: null,
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

    saveUser = (username, department) => {
        const {users, idEditElement} = this.state;
        let currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        let newUsers = [];
        if (idEditElement !== null) {
            newUsers = users.map(user => {
                if (user.id === idEditElement) {
                    const {id, creationDate} = user;
                    return {
                        username,
                        department,
                        updateDate: currentDate,
                        creationDate,
                        id
                    };
                }
                return user;
            });
        } else {
            let user = {
                username: username,
                department: department,
                creationDate: currentDate,
                updateDate: currentDate,
                id: users.length > 0 ? users[users.length - 1].id + 1 : 1
            };
            newUsers = users.concat(user);
        }
        this.setState({users: newUsers, idEditElement: null});
        this.localStorageSetItem(localStorageKey, newUsers);
    }

    deleteUser = (id, username) => {
        const {users, idEditElement} = this.state;
        if (!window.confirm(`Вы уверенны, что хотите удалить пользователя ${username}?`)) return;
        let newUsers = users.filter(user => user.id !== id);
        if (idEditElement === id) this.setState({idEditElement: null, users: newUsers});
        else this.setState({users: newUsers});
        this.localStorageSetItem(localStorageKey, newUsers);
    }

    editUser = (idEditElement) => {
        this.setState({idEditElement});
    }

    render() {
        const {users, idEditElement} = this.state;
        let user = {};
        if (idEditElement != null) user = users.find(user => user.id === idEditElement);
        const {username, department} = user;
        return (
            <div>
                <Form
                    idEditElement={idEditElement}
                    username={username}
                    department={department}
                    saveUser={this.saveUser}
                />
                <Table
                    users={users}
                    deleteUser={this.deleteUser}
                    editUser={this.editUser}
                />
            </div>
        );
    }
}

export default AdminPanel;