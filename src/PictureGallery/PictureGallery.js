import React, {useState, useCallback, useEffect} from 'react';
import Pictures from './Pictures';
import Search from './Search';
import {getPictures} from './ApiRequests';

function PictureGallery() {
    const [pictures, setPictures] = useState([]);
    const [search, setSearch] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPictures(search, page).then(pictures => {
            setPictures((prevPictures) => [...prevPictures, ...pictures]);
        });
    }, [search, page]);

    const increasePage = useCallback(() => {
        setPage(prevPage => prevPage + 1);
    }, []);

    const handleSearch = useCallback((value) => {
        setPictures([]);
        setPage(1);
        setSearch(value);
    }, []);

    return (
        <div>
            <Search handleSearch={handleSearch}/>
            {pictures.length !== 0 &&
                <Pictures
                    pictures={pictures}
                    increasePage={increasePage}
                />}
        </div>
    );
}

export default PictureGallery;