import styled from "styled-components";

const Image = styled.div`
  width: 200px;
  height: 300px;
  background-image: url(${({url}) => url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

function CastCard({actor}) {
    const {character, name, urlPicture} = actor;
    return (
        <div>
            <Image url={urlPicture}/>
            <div>{character}</div>
            <div>{name}</div>
        </div>
    );
}

export default CastCard;