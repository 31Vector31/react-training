function RowTable({user, editUser, deleteUser}) {
    const {username, department, creationDate, updateDate} = user;
    return (
        <tr>
            <td>{username}</td>
            <td>{department}</td>
            <td>{creationDate}</td>
            <td>{updateDate}</td>
            <td>
                <button onClick={editUser}>Редактировать</button>
            </td>
            <td>
                <button onClick={deleteUser}>Удалить</button>
            </td>
        </tr>
    );
}

export default RowTable;
