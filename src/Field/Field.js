import React, {useState, useEffect} from 'react';

function Field({value, options, onChange, validators, component}) {

    const [validationText, setValidationText] = useState([]);

    useEffect(() => {
        const validation = validators.reduce((accumulator, validator) => {
            const text = validator(value);
            return text ? [...accumulator, text] : accumulator;
        }, []);
        setValidationText(validation);
    }, [value, validators])

    return component({value, options, onChange, validationText, invalid: Boolean(validationText.length)});
}

export default Field;