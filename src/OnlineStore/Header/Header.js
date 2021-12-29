import React, {useEffect, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Header.module.css";

const defaultValueSort = "";
const defaultValueSearch = null;
const allSort = ["title", "increase", "decrease"];

const initialValue = (obj) => {
    const {sort = defaultValueSort, search = defaultValueSearch} = obj;
    return {sort, search};
}

export const headerValidation = (searchParams) => {
    let validatedParams = {};
    const {sort} = initialValue(searchParams);
    if (allSort.find((el) => el === sort) !== undefined) validatedParams["sort"] = sort;
    return validatedParams;
}

function Header({addSearch, filters}) {
    const [sortState, setSortState] = useState(defaultValueSort);
    const [searchState, setSearchState] = useState(defaultValueSearch);

    useEffect(() => {
        const {sort, search} = initialValue(filters);
        setSortState(sort);
        setSearchState(search);
    }, [filters]);

    const handleChange = (state) => event => {
        const value = event.target.value;
        state(value);
        if (state === setSortState) addSearch({"sort": value});
    }

    const searchClick = () => {
        addSearch({"search": searchState});
    }

    return (
        <div className={styles.header}>
            <FormControl>
                <InputLabel>Сортировка</InputLabel>
                <Select
                    value={sortState}
                    onChange={handleChange(setSortState)}
                    label="Сортировка"
                    sx={{width: 250}}
                >
                    <MenuItem value={"title"}>По имени</MenuItem>
                    <MenuItem value={"increase"}>По возрастанию цены</MenuItem>
                    <MenuItem value={"decrease"}>По убыванию цены</MenuItem>
                </Select>
            </FormControl>

            <Paper
                component="form"
                sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 200}}
            >
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Поиск"
                    onChange={handleChange(setSearchState)}
                    value={searchState || ""}
                />
                <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                <IconButton onClick={searchClick} sx={{p: '10px'}}>
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </div>
    );
}

export default Header;