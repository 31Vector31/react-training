import TextField from "@mui/material/TextField";

function Input({value, onChange, error, validationText, label, type}) {
    return (
        <TextField
            helperText={validationText.map((text, index) => <p key={index}>{text}</p>)}
            error={error}
            onChange={onChange}
            value={value}
            label={label}
            variant="outlined"
            type={type}
        />
    );
}

export default Input;