import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const TodoList = (props) => {
    const todos = props.todos;
    const listItems = todos.map(todo => (
        <React.Fragment>
            <ListItem>
                <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
        </React.Fragment>
    ));

    return(
        <Paper>
            <List>
                {listItems}
            </List>
        </Paper>
    );
}

export default TodoList;