import React from "react";
import Form from './Form';
import Table from './Table';

class GuestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c: "",
            sex: "Мужчина",
            age: 0,
            guests: []
        };
    }

    saveGuest = (event) => {
        let guests = this.state.guests;
        guests.push({
            name: this.state.name,
            sex: this.state.sex,
            age: this.state.age,
            isCome: false
        });
        this.setState({guests: guests, name: "", sex: "Мужчина", age: 0});
    };

    guestCame = (index) => {
        let guests = this.state.guests;
        guests[index].isCome = true;
        this.setState({guests: guests});
    }

    changeName = (event) => {
        this.setState({name: event.target.value});
    }

    changeSex = (event) => {
        this.setState({sex: event.target.value});
    }

    changeAge = (event) => {
        this.setState({age: event.target.value});
    }

    render() {
        return (
            <div>
                <Form
                    saveGuest={this.saveGuest}
                    name={this.state.name}
                    sex={this.state.sex}
                    age={this.state.age}
                    changeName={this.changeName}
                    changeSex={this.changeSex}
                    changeAge={this.changeAge}
                />
                <Table
                    guests={this.state.guests}
                    guestCame={this.guestCame}
                />
            </div>
        );
    }
}

export default GuestList;