import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextWrapper from "./TextWrapper";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelect({options, value, handleChange}) {
    const theme = useTheme();

    return (
        <div>
            <FormControl variant="filled" sx={{m: 1, width: 300}}>
                <InputLabel><TextWrapper languageKey="category"/></InputLabel>
                <Select
                    multiple
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    input={<OutlinedInput/>}
                    MenuProps={MenuProps}
                >
                    {options.map((el) => (
                        <MenuItem
                            key={el}
                            value={el}
                            style={getStyles(el, value, theme)}
                        >
                            <TextWrapper languageKey={el}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}