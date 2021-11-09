import React, {useState} from 'react';
import Form from './Form';
import Table from './Table';

function GuestList() {
    const [guests, setGuests] = useState([]);

    const saveGuest = (guest) => {
        setGuests(guests.concat({...guest, isCome: false, id: guests.length}));
    };

    const guestCame = (id) => {
        const NewGuests = guests.map((guest) => {
            if (guest.id === id) return {...guest, isCome: true};
            return guest;
        });
        setGuests(NewGuests);
    }

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