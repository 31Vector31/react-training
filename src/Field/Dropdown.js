import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Dropdown({value, options, onChange, invalid, validationText}) {
    return (
        <FormControl error={invalid}>
            <InputLabel>Выбор</InputLabel>
            <Select
                value={value}
                label="Выбор"
                onChange={onChange}
            >
                {options.map(el =>
                    <MenuItem key={el} value={el}>{el}</MenuItem>
                )}
            </Select>
            <FormHelperText>{validationText.map((text, index) => <p key={index}>{text}</p>)}</FormHelperText>
        </FormControl>
    );
}

export default Dropdown;