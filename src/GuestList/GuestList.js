import React from "react";
import Form from './Form';
import Table from './Table';

class GuestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: []
        };
    }

    saveGuest = (guest) => {
        let guests = this.state.guests.concat({...guest, isCome: false, id: this.state.guests.length});
        this.setState({guests});
    };

    guestCame = (id) => {
        let guests = this.state.guests.map((guest) => {
            if (guest.id === id) return {...guest, isCome: true};
            return guest;
        });
        this.setState({guests});
    }

    render() {
        return (
            <div>
                <Form saveGuest={this.saveGuest}/>
                <Table
                    guests={this.state.guests}
                    guestCame={this.guestCame}
                />
            </div>
        );
    }
}

export default GuestList;