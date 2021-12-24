import React, {useState, useEffect} from 'react';

function Field({value, options, onChange, validators, component}) {

    const [validationText, setValidationText] = useState([]);

    useEffect(() => {
        let validation = [];
        validators.forEach((validator) => {
            const text = validator(value);
            if (text) validation.push(text);
        })
        setValidationText(validation);
    }, [value, validators])

    return component({value, options, onChange, validationText, invalid: Boolean(validationText.length)});
}

export default Field;