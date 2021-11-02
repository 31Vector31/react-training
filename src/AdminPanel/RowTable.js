function RowTable(props) {
    const {username, department, creationDate, updateDate} = props.user;
    return (
        <tr>
            <td>{username}</td>
            <td>{department}</td>
            <td>{creationDate}</td>
            <td>{updateDate}</td>
            <td>
                <button onClick={() => props.editUser(props.index)}>Редактировать</button>
            </td>
            <td>
                <button onClick={() => props.deleteUser(props.index)}>Удалить</button>
            </td>
        </tr>
    );
}

export default RowTable;
