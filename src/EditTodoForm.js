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
        <form onSubmit = {handleSubmit} style = {{ marginLeft : "1rem", width : "100%" }}>
            <TextField value = {value} onChange = {handleChange} margin = "normal" fullWidth autoFocus/>
        </form>
    );
}

export default EditTodoForm;