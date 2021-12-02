import React, {useState, useCallback} from 'react';
import Pictures from './Pictures';
import Search from './Search';

function PictureGallery() {
    const [pictures, setPictures] = useState([]);
    const [page, setPage] = useState(null);

    const editPage = useCallback((update = false) => {
        setPage(prevPage => update ? null : (prevPage || 1) + 1);
    });

    return (
        <div>
            <Search
                setPictures={setPictures}
                page={page}
                editPage={editPage}
            />
            {pictures.length !== 0 &&
                <Pictures
                    pictures={pictures}
                    editPage={editPage}
                />}
        </div>
    );
}

export default PictureGallery;