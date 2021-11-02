import Contact from './Contact';
import styled from "styled-components";

const Contacts = styled.div`
    width:300px;
    overflow-y: hidden;
    max-height: 100vh;

    : hover {
        overflow-y: auto;
	    overflow-x: hidden;
	    overflow-scrolling: touch;
    } 

    :: -webkit-scrollbar {
        appearance: none;
	    width: 7px;
    } 

    :: -webkit-scrollbar-thumb {
        border-radius: 2px;
	    background-color: rgba(0,0,0,0.5);
	    box-shadow: 0 0 1px rgba(255,255,255,0.5);
    } 
`;

function ContactsList() {
    const users = [{
        name: "Алиса",
        lastMessage: "Привет",
        avatar: "https://cdn.icon-icons.com/icons2/1161/PNG/512/1487716857-user_81635.png",
        isOnline: true
    },
        {
            name: "Витя",
            lastMessage: "kak dela",
            avatar: "https://cdn.icon-icons.com/icons2/1161/PNG/512/1487716857-user_81635.png",
            isOnline: false
        }];
    const contacts = users.map((user, index) =>
        <Contact user={user} key={index}/>
    );
    return (
        <Contacts>
            {contacts}
        </Contacts>
    );
}

export default ContactsList;
