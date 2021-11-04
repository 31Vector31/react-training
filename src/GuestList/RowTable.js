function RowTable({guest, guestCame}) {
    const {name, sex, age, isCome} = guest;
    return (
        <tr>
            <td>{name}</td>
            <td>{sex}</td>
            <td>{age}</td>
            <td><input checked={isCome} disabled={isCome} onChange={guestCame}
                       type="checkbox"/></td>
        </tr>
    );
}

export default RowTable;
