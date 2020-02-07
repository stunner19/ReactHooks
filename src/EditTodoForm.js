import React from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';

const EditTodoForm = (props) => {
    const [value, handleChange, reset] = useInputState(props.task);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.editTodo(props.id, value);
        reset();
        props.toggleEditForm();
    }

    return(
        <form onSubmit = {handleSubmit}>
            <TextField value = {value} onChange = {handleChange} margin = "normal" fullWidth/>
        </form>
    );
}

export default EditTodoForm;