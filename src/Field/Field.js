import React, {useState, useEffect} from 'react';

function Field({value, onChange, validators, component}) {

    const [validationText, setValidationText] = useState([]);

    useEffect(() => {
        setValidationText([]);
        validators.forEach((validator) => {
            const text = validator(value);
            if (text) setValidationText((validationText) => [...validationText, text]);
        })
    }, [value, validators])

    return component({value, onChange, validationText, invalid: Boolean(validationText.length)});
}

export default Field;