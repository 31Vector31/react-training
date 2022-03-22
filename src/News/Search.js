import React, {useState} from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";

export default function Search({value, handleChange}) {

    const [search, setSearch] = useState(value);

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 240}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                onChange={(e) => setSearch(e.target.value)}
                value={search || ""}
            />
            <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
            <IconButton onClick={() => handleChange(search)} sx={{p: '10px'}}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}