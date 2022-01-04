import TextField from "@mui/material/TextField";

function Input({value, onChange, invalid, validationText, label, type}) {
    return (
        <TextField
            helperText={validationText.map((text, index) => <p key={index}>{text}</p>)}
            error={invalid}
            onChange={onChange}
            value={value}
            label={label}
            variant="outlined"
            type={type}
        />
    );
}

export default Input;