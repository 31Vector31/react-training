import React, {useContext} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./Header.module.css";
import {LangContext} from "../Main/Main";
import TextWrapper from "../TextWrapper";

function Header({languages}) {
    const {language, changeLanguage} = useContext(LangContext);

    const handleChange = (event) => {
        changeLanguage(event.target.value);
    };

    return (
        <div className={styles.header}>
            <h1 className={styles.title}><TextWrapper languageKey="title"/></h1>
            <div>
                <FormControl fullWidth>
                    <InputLabel><TextWrapper languageKey="language"/></InputLabel>
                    <Select
                        value={language}
                        label="Language"
                        onChange={handleChange}
                        sx={{width: 250}}
                    >
                        {Object.entries(languages).map((el, i) => {
                            const [abbreviation, full] = el;
                            return (
                                <MenuItem value={abbreviation} key={i}>
                                    {full}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default Header;

