import React, {useState, useCallback} from 'react';
import TextField from '@mui/material/TextField';
import Field from "./Field";
import MultiSelect from "./MultiSelect";
import Dropdown from "./Dropdown";
import styles from "./Container.module.css";

const defaultSelect = [
    {
        value: "Один",
        isSelected: false
    },
    {
        value: "Два",
        isSelected: false
    },
    {
        value: "Три",
        isSelected: false
    }
];

function Container() {

    const [textField, setTextField] = useState(null);
    const [numericField, setNumericField] = useState(null);
    const [select, setSelect] = useState(defaultSelect);
    const [multiSelect, setMultiSelect] = useState(defaultSelect);

    const onChange = useCallback((state) => event => {
        state(event.target.value);
    }, []);

    const onChangeSelect = useCallback(event => {
        const newSelect = defaultSelect.map((el) => {
            const {value} = el;
            if (value === event.target.value) return {value, isSelected: true};
            return el;
        })
        setSelect(newSelect);
    }, []);

    const onChangeMultiSelect = useCallback(event => {
        const newSelect = defaultSelect.map((el) => {
            const {value} = el;
            let obj = el;
            event.target.value.forEach(el => {
                if (value === el) obj = {value, isSelected: true};
            });
            return obj;
        })
        setMultiSelect(newSelect);
    }, []);

    const isEmpty = useCallback((value) => {
        const selectedValue = value.filter(el => {
            const {isSelected} = el;
            return isSelected;
        });
        if (!selectedValue.length) return "Выберите значение";
    }, []);

    const isShort = useCallback((value) => {
        if (value.length < 3) return "Короткий текст";
    }, []);

    const isLong = useCallback((value) => {
        if (value.length > 10) return "Длинный текст";
    }, []);

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
                    value={select}
                    onChange={onChangeSelect}
                    validators={[isEmpty]}
                    component={({value, onChange, validationText, invalid}) =>
                        <Dropdown
                            value={value}
                            error={invalid}
                            validationText={validationText}
                            onChange={onChange}
                        />}
                />
            </div>

            <div>
                <Field
                    value={multiSelect}
                    onChange={onChangeMultiSelect}
                    validators={[isEmpty]}
                    component={({value, onChange, validationText, invalid}) =>
                        <MultiSelect
                            onChange={onChange}
                            values={value}
                            error={invalid}
                            validationText={validationText}
                        />}
                />
            </div>
        </div>
    );
}

export default Container;