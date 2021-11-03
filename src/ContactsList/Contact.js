import styled from "styled-components";

const Box = styled.div`
  border-radius: 10px;
  padding: 10px;
  display: flex;
  : hover {
    background-color: #F0F8FF;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; 
`;


const Online = styled.div`
  background-color: green;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  bottom: 5px; 
  right: 5px;
  border: 3px solid white; 
`;

const Avatar = styled.div`
  background-image: url(${({avatar}) => avatar});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 50px;
  height: 50px;
  position: relative;
`;

const AuthorLastMessage = styled.span`
  color: #00CED1;
`;

function Contact({user}) {
    const {name, lastMessage, avatar, isOnline, authorLastMessage} = user;

    return (
        <Box>
            <Avatar avatar={avatar}>
                {isOnline && <Online/>}
            </Avatar>
            <Info>
                <div>
                    <b>{name}</b>
                </div>
                <div>
                    <AuthorLastMessage>{authorLastMessage && authorLastMessage + ":"}</AuthorLastMessage> {lastMessage}
                </div>
            </Info>
        </Box>
    );
}

export default Contact;
