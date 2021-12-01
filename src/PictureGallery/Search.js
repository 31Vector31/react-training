import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Box,TextField} from '@material-ui/core';

function Search({setPictures,page,editPage}) {
    const [value, setValue] = useState(null);

    const changeValue = (event) => {
        setValue(event.target.value);
        let value = event.target.value.split(" ").join("+");
        axios.get(`https://pixabay.com/api/?key=24560899-7f54ccf9b913d8ded23167d7d&q=${value}&image_type=photo&page=${page||1}`)
            .then(res => {
                //console.log(res.data.hits);
                //let pictures = res.data.hits.map(el=>el.previewURL);
                setPictures(res.data.hits);
            });
        editPage(true);
    }

    useEffect(() => {
        if(page===null) return;
        axios.get(`https://pixabay.com/api/?key=24560899-7f54ccf9b913d8ded23167d7d&q=${value}&image_type=photo&page=${page||1}`)
            .then(res => {
                //console.log(res.data);
                //let pictures = res.data.hits.map(el=>el.previewURL);
                setPictures(prevPictures => [...prevPictures, ...res.data.hits]);
            });
    }, [page]);

    return (
        <Box textAlign='center'>
            <TextField variant="outlined" label="Поиск" onChange={changeValue} value={value || ""}/>
        </Box>
    );
}

export default Search;