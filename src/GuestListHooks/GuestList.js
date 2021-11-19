import React, {useState, useCallback} from 'react';
import Form from './Form';
import Table from './Table';

function GuestList() {
    const [guests, setGuests] = useState([]);

    const saveGuest = useCallback((guest) => {
            setGuests(guests.concat({...guest, isCome: false, id: guests.length}));
        },
        [guests]
    );

    const guestCame = useCallback((id) => {
            const NewGuests = guests.map((guest) => {
                if (guest.id === id) return {...guest, isCome: true};
                return guest;
            });
            setGuests(NewGuests);
        },
        [guests]
    );

    return (
        <div>
            <Form saveGuest={saveGuest}/>
            <Table
                guests={guests}
                guestCame={guestCame}
            />
        </div>
    );
}

export default GuestList;