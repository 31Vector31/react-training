import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Box, TextField} from '@mui/material';

function Search({setPictures, page, editPage}) {
    const [value, setValue] = useState(null);
    const [search, setSearch] = useState(null);

    const CancelToken = axios.CancelToken;
    let cancel;

    const changeValue = (event) => {
        setValue(event.target.value);
        setPictures([]);
        editPage(true);
    }

    useEffect(() => {
        if ((search || "").trim() === "") return;
        if (cancel !== undefined) cancel();
        axios.get("https://pixabay.com/api/", {
            cancelToken: new CancelToken((c) => (cancel = c)),
            params: {
                q: search,
                page,
                key: "24560899-7f54ccf9b913d8ded23167d7d",
            },
        })
            .then(res => {
                setPictures(prevPictures => [...prevPictures, ...res.data.hits]);
            });
    }, [page, search]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(value);
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return (
        <Box textAlign='center'>
            <TextField variant="outlined" label="Поиск" onChange={changeValue} value={value || ""}/>
        </Box>
    );
}

export default Search;