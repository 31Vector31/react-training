import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {useMemo} from "react";

function Dropdown({value, onChange, error, validationText}) {

    const selectedValue = useMemo(() => value.find(el => {
        const {isSelected} = el;
        return isSelected;
    }), [value]);

    return (
        <FormControl
            error={error}
            fullWidth>
            <InputLabel>Выбор</InputLabel>
            <Select
                value={selectedValue ? selectedValue.value : ""}
                label="Выбор"
                onChange={onChange}
            >
                {value.map(el => {
                        const {value} = el;
                        return (
                            <MenuItem key={value} value={value}>{value}</MenuItem>
                        );
                    }
                )}
            </Select>
            <FormHelperText>{validationText.map((text, index) => <p key={index}>{text}</p>)}</FormHelperText>
        </FormControl>
    );
}

export default Dropdown;