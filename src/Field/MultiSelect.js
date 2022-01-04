import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import FormHelperText from "@mui/material/FormHelperText";

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

function getStyles(value, selected, theme) {
    return {
        fontWeight:
            selected.indexOf(value) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function MultiSelect({value, options, onChange, invalid, validationText}) {
    const theme = useTheme();

    return (
        <FormControl error={invalid} sx={{width: 300}}>
            <InputLabel>MultiSelect</InputLabel>
            <Select
                multiple
                value={value}
                onChange={onChange}
                input={<OutlinedInput label="MultiSelect"/>}
                renderValue={(selected) => (
                    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                        {selected.map((value) => (
                            <Chip key={value} label={value}/>
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                {options.map(el =>
                    <MenuItem
                        key={el}
                        value={el}
                        style={getStyles(el, value, theme)}
                    >{el}</MenuItem>
                )}
            </Select>
            <FormHelperText>{validationText.map((text, index) => <p key={index}>{text}</p>)}</FormHelperText>
        </FormControl>
    );
}

export default MultiSelect;