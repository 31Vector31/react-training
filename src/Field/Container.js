import React, {useState} from 'react';
import Field from "./Field";
import MultiSelect from "./MultiSelect";
import Dropdown from "./Dropdown";
import styles from "./Container.module.css";
import Input from "./Input";

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
            <Field
                value={textField || ""}
                onChange={onChange(setTextField)}
                validators={[isShort, isLong]}
                component={(props) => <Input {...props} type="text" label="Текстовое поле"/>}
            />
            <Field
                value={numericField || ""}
                onChange={onChange(setNumericField)}
                validators={[isShort, isLong]}
                component={(props) => <Input {...props} type="number" label="Числовое поле"/>}
            />
            <Field
                value={select || ""}
                options={options}
                onChange={onChange(setSelect)}
                validators={[isEmpty]}
                component={Dropdown}
            />
            <Field
                value={multiSelect || []}
                options={options}
                onChange={onChange(setMultiSelect)}
                validators={[isEmpty]}
                component={MultiSelect}
            />
        </div>
    );
}

export default Container;