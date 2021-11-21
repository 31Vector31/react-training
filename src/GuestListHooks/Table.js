import RowTable from './RowTable';

function Table({guests, guestCame}) {
    const copyGuests = guests.slice();
    const rows = copyGuests.sort((a, b) => a.isCome - b.isCome || (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)).map((guest) =>
        <RowTable guest={guest} guestCame={() => guestCame(guest.id)} key={guest.id}/>
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
