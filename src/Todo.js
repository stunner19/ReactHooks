import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { DispatchContext} from './context/todos.context';

const Todo = (props) => {
    const dispatch = useContext(DispatchContext);
    const { completed, task, id} = props;

    const handleRemove = () => {
        dispatch({ type : "REMOVE", id : id});
    }
    
    const handleCheck = () => {
        dispatch({ type : "TOGGLE", id : id});
    }

    const [isEditing, toggle] = useToggleState(false);

    return(
        <ListItem style = {{ height : "64px"}}>
            {isEditing ? (<EditTodoForm {...props} toggleEditForm = {toggle}/>) : (
                <React.Fragment>
                    <Checkbox checked = {completed} tabIndex = {-1} onClick = {handleCheck} />
                    <ListItemText style = {{ textDecoration : completed && "line-through" }}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label = "Delete" onClick = {handleRemove}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label = "Edit" onClick = {toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>                
                </React.Fragment>
            )}
        </ListItem>
    );
};

export default Todo;