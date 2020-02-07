import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

const TodoList = (props) => {
    const todos = props.todos;
    const listItems = todos.map((todo,index) => (
        <React.Fragment key = {todo.id}>
            <Todo {...todo} removeTodo = {props.removeTodo} toggleTodo = {props.toggleTodo} editTodo = {props.editTodo}/>
            {todos.length - 1 !== index && <Divider />} 
        </React.Fragment>
    ));

    if(todos.length){
        return(
            <Paper>
                <List>
                    {listItems}
                </List>
            </Paper>
        );
    }
    else return null;
}

export default TodoList;