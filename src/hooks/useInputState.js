import { useState } from 'react';

const useInputState = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const reset = () => {
        setValue("");
    }

    return [value, handleChange, reset];
};

export default useInputState;