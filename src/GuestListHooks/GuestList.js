import React, {useState, useCallback} from 'react';
import Form from './Form';
import Table from './Table';

function GuestList() {
    const [guests, setGuests] = useState([]);

    const saveGuest = useCallback((guest) => {
            setGuests((guests) => [...guests, {...guest, isCome: false, id: guests.length}]);
        }
    );

    const guestCame = useCallback((id) => {
            setGuests((guests) => guests.map((guest) => {
                if (guest.id === id) return {...guest, isCome: true};
                return guest;
            }));
        }
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