import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Field from "./Field";
import MultiSelect from "./MultiSelect";
import Dropdown from "./Dropdown";
import styles from "./Container.module.css";

const options = ["Один", "Два", "Три"];

function Container() {

    const [textField, setTextField] = useState(null);
    const [numericField, setNumericField] = useState(null);
    const [select, setSelect] = useState(null);
    const [multiSelect, setMultiSelect] = useState(null);

    const onChange = (state) => event => {
        state(event.target.value);
    }

    const isEmpty = (value) => {
        if (!value || value.length === 0) return "Выберите значение";
    }

    const isShort = (value) => {
        if (value.length < 3) return "Короткий текст";
    }

    const isLong = (value) => {
        if (value.length > 10) return "Длинный текст";
    }

    return (
        <div className={styles.container}>
            <div>
                <Field
                    value={textField || ""}
                    onChange={onChange(setTextField)}
                    validators={[isShort, isLong]}
                    component={({value, onChange, validationText, invalid}) =>
                        <TextField
                            helperText={validationText.map((text, index) => <p key={index}>{text}</p>)}
                            error={invalid}
                            onChange={onChange}
                            value={value}
                            label="Поле ввода"
                            variant="outlined"
                        />}
                />
            </div>

            <div>
                <Field
                    value={numericField || ""}
                    onChange={onChange(setNumericField)}
                    validators={[isShort, isLong]}
                    component={({value, onChange, validationText, invalid}) =>
                        <TextField
                            error={invalid}
                            helperText={validationText.map((text, index) => <p key={index}>{text}</p>)}
                            onChange={onChange}
                            value={value}
                            type="number"
                            label="Числовое поле"
                        />}
                />
            </div>

            <div>
                <Field
                    value={select || ""}
                    options={options}
                    onChange={onChange(setSelect)}
                    validators={[isEmpty]}
                    component={({value, options, onChange, validationText, invalid}) =>
                        <Dropdown
                            value={value}
                            error={invalid}
                            options={options}
                            validationText={validationText}
                            onChange={onChange}
                        />}
                />
            </div>

            <div>
                <Field
                    value={multiSelect || []}
                    options={options}
                    onChange={onChange(setMultiSelect)}
                    validators={[isEmpty]}
                    component={({value, options, onChange, validationText, invalid}) =>
                        <MultiSelect
                            onChange={onChange}
                            value={value}
                            options={options}
                            error={invalid}
                            validationText={validationText}
                        />}
                />
            </div>
        </div>
    );
}

export default Container;