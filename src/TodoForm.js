import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todos.context';

const TodoForm = () => {
    const [value, handleChange, reset] = useInputState("");
    const dispatch = useContext(DispatchContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type : "ADD", task : value});
        reset();
    }

    return(
        <Paper style = {{ margin : "1rem 0", padding : "0 1rem"}}>
            <form onSubmit = {handleSubmit}>
                <TextField value = {value} onChange = {handleChange} margin = "normal" label = "Add New Todo" fullWidth/>
            </form>
        </Paper>
    );
};

export default TodoForm;