import React, {useState, useCallback} from 'react';
import Pictures from './Pictures';
import Search from './Search';
import {Box, Button} from "@mui/material";

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
                <div>
                    <Pictures pictures={pictures}/>
                    <Box textAlign='center'>
                        <Button
                            variant="contained"
                            onClick={() => editPage()}>
                            Загрузить еще
                        </Button>
                    </Box>
                </div>}
        </div>
    );
}

export default PictureGallery;