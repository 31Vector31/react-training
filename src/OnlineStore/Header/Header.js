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

const defaultValueSort = "title";
const defaultValueSearch = null;
const allSort = ["title", "increase", "decrease"];

function Header({setSearchParams, addSearch, params}) {
    const [sortState, setSortState] = useState(defaultValueSort);
    const [searchState, setSearchState] = useState(defaultValueSearch);

    useEffect(() => {
        const {sort = defaultValueSort, search = defaultValueSearch} = params || {};
        let validatedParams = {};

        if (!allSort.find((el) => el === sort)) validatedParams["sort"] = [];
        setSearchParams({...params, ...validatedParams});

        if (JSON.stringify(validatedParams) === "{}") {
            setSortState(sort);
        }
        setSearchState(search);
    }, [params])

    const handleChange = (state) => event => {
        state(event.target.value);
    }

    useEffect(() => {
        addSearch({"sort": sortState})
    }, [sortState])

    const searchClick = () => {
        addSearch({"search": searchState});
    }

    return (
        <div className={styles.header}>
            <FormControl variant="filled">
                <InputLabel>Сортировка</InputLabel>
                <Select
                    value={sortState}
                    onChange={handleChange(setSortState)}
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