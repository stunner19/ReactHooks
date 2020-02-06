import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

const TodoList = (props) => {
    const todos = props.todos;
    const listItems = todos.map(todo => (
        <React.Fragment>
            <Todo {...todo} key = {todo.id}/>
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