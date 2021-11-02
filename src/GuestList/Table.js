import RowTable from './RowTable';

function Table(props) {
    const guests = props.guests;
    const rows = guests.sort((a, b) => b.isCome - a.isCome || (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)).map((guest, index) =>
        <RowTable guest={guest} guestCame={props.guestCame} index={index} key={index}/>
    );
    return (
        <table align="center" border="1">
            <thead>
            <tr>
                <th>Имя</th>
                <th>Пол</th>
                <th>Возраст</th>
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
