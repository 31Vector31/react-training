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
    const {character, profile_path, name} = actor;
    const baseUrl = "https://image.tmdb.org/t/p/w200";
    const url = profile_path ? baseUrl + profile_path : "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png";
    return (
        <div>
            <Image url={url}/>
            <div>{character}</div>
            <div>{name}</div>
        </div>
    );
}

export default CastCard;