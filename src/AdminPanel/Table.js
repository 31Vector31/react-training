import React from 'react';
import RowTable from './RowTable';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }

    changeSearch = event => {
        this.setState({search: event.target.value});
    }

    render() {
        const {search} = this.state;
        const searchLowerCase = search.toLowerCase();
        const {users, editUser, deleteUser} = this.props;
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
                    <input value={search} onChange={this.changeSearch}/>
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
}

export default Table;


