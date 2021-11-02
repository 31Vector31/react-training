import styled from "styled-components";

const Box = styled.div`
  border-radius: 10px;
  padding: 10px;
  : hover {
    background-color: #F0F8FF;
  }
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

function Contact({user}) {
    const {name, lastMessage, avatar, isOnline} = user;

    const Avatar = styled.div`
        background-image: url(${avatar});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 50px;
        height: 50px;
        position: relative;
        float: left;
    `;

    return (
        <Box>
            <Avatar>
                {isOnline && <Online/>}
            </Avatar>
            <div>
                <div>
                    <b>{name}</b>
                </div>
                <div>
                    {lastMessage}
                </div>
            </div>
        </Box>
    );
}

export default Contact;
