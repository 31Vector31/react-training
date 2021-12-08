function CastCard({actor}) {
    const {character, profile_path, name} = actor;
    const baseUrl = "https://image.tmdb.org/t/p/w200";
    const url = profile_path ? baseUrl + profile_path : "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png";
    return (
        <div>
            <img width="200" height="300" src={url} alt=""/>
            <div>{character}</div>
            <div>{name}</div>
        </div>
    );
}

export default CastCard;