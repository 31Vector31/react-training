import TextField from "@mui/material/TextField";

function InputTextField({isError, value, label, onChange}) {
    return (
        <TextField
            error={isError}
            helperText={isError && "Неправильная запись"}
            onChange={onChange}
            value={value}
            label={label}
            variant="outlined"/>
    );
}

export default InputTextField;
