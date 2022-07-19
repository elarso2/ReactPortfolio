import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function contactForm () {
    const [inputName, setInputName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    }

    if (inputType === 'email') {
        setEmail(inputValue);
    } else if
}