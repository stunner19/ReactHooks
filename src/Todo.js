import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const Todo = (props) => {
    return(
        <ListItem>
            <Checkbox checked = {props.completed} tabIndex = {-1}/>
            <ListItemText style = {{ textDecoration : props.completed && "line-through" }}>{props.task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label = "Delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label = "Edit">
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;