import React, {useState, useCallback} from 'react';
import Table from './Table';
import Form from './Form';

const localStorageKey = "users";

function AdminPanel() {
    const localStorageGetItem = () => {
        try {
            let value = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
            return Array.isArray(value) ? value : [];
        } catch (e) {
            alert(e);
            return [];
        }
    }

    const localStorageSetItem = (value) => {
        try {
            localStorage.setItem(localStorageKey, JSON.stringify(value));
        } catch (e) {
            alert(e);
        }
    }

    const [users, setUsers] = useState(() => localStorageGetItem());
    const [idEditElement, setIdEditElement] = useState(null);

    const updateUsers = (users) => {
        setUsers(users);
        setIdEditElement(null);
        localStorageSetItem(users);
    }

    const saveUser = useCallback((username, department) => {
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
                username,
                department,
                creationDate: currentDate,
                updateDate: currentDate,
                id: users.length > 0 ? users[users.length - 1].id + 1 : 1
            };
            newUsers = [...users, user];
        }
        updateUsers(newUsers);
    });

    const deleteUser = useCallback((id, username) => {
            if (!window.confirm(`Вы уверенны, что хотите удалить пользователя ${username}?`)) return;
            let newUsers = users.filter(user => user.id !== id);
            updateUsers(newUsers);
        }
    );

    const editUser = useCallback((id) => {
            setIdEditElement(id);
        }
    );

    let user = {};
    if (idEditElement != null) user = users.find(user => user.id === idEditElement);
    const {username, department} = user;
    return (
        <div>
            <Form
                username={username}
                department={department}
                saveUser={saveUser}
            />
            <Table
                users={users}
                deleteUser={deleteUser}
                editUser={editUser}
            />
        </div>
    );

}

export default AdminPanel;