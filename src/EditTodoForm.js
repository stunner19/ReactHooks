import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';
import { TodosContext} from './context/todos.context';

const EditTodoForm = (props) => {
    const [value, handleChange, reset] = useInputState(props.task);
    const { id, toggleEditForm } = props;
    const { editTodo } = useContext(TodosContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        editTodo(id, value);
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