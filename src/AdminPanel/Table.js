import RowTable from './RowTable';

function Table(props) {
    const rows = props.users.map((user, index) =>
        <RowTable editUser={props.editUser} deleteUser={props.deleteUser} index={index} user={user} key={index}/>
    );
    return (
        <table align="center" border="1">
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
    );
}

export default Table;
