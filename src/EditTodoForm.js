import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import { DispatchContext} from './context/todos.context';

const EditTodoForm = (props) => {
    const [value, handleChange, reset] = useInputState(props.task);
    const { id, toggleEditForm } = props;
    const dispatch = useContext(DispatchContext);     // We are directly getting dispatch and not the object, so destructuring is not needed.

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type : "EDIT", id : id, task : value});
        reset();
        toggleEditForm();
    }

    return(
        <form onSubmit = {handleSubmit} style = {{ marginLeft : "1rem", width : "100%" }}>
            <TextField value = {value} onChange = {handleChange} margin = "normal" fullWidth autoFocus/>
        </form>
    );
}

export default EditTodoForm;