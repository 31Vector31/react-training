import React, {useState} from 'react';
import RowTable from './RowTable';

function Table({users, editUser, deleteUser}) {
    const [search, setSearch] = useState(null);

    const changeSearch = event => {
        setSearch(event.target.value);
    }

    const searchLowerCase = search ? search.trim().toLowerCase() : "";
    const rows = users.filter(user => user.username.toLowerCase().includes(searchLowerCase)).map(user => {
        const {username, id} = user;
        return <RowTable
            editUser={() => editUser(id)}
            deleteUser={() => deleteUser(id, username)}
            user={user}
            key={id}
        />
    });
    return (
        <div align="center">
            <div>
                Поиск по имени:
                <input value={search || ""} onChange={changeSearch}/>
            </div>
            <table border="1">
                <thead>
                <tr>
                    <th>Имя пользователя</th>
                    <th>Отдел</th>
                    <th>Дата создания записи</th>
                    <th>Дата обновления записи</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    );

}

export default Table;


