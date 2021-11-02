function RowTable(props) {
    const {name, sex, age, isCome} = props.guest;
    return (
        <tr>
            <td>{name}</td>
            <td>{sex}</td>
            <td>{age}</td>
            <td><input checked={isCome} disabled={isCome} onChange={() => props.guestCame(props.index)}
                       type="checkbox"/></td>
        </tr>
    );
}

export default RowTable;
