import React, {useEffect, useState} from 'react';
import {Box, TextField} from '@mui/material';

function Search({handleSearch}) {
    const [value, setValue] = useState(null);

    const changeValue = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch(value);
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