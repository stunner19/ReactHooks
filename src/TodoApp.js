import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';

const TodoApp = (props) => {
    const initialTodos = [
        {id : uuid(), task : "Do some Coding", completed : false},
        {id : uuid(), task : "Watch WWE", completed : true},
        {id : uuid(), task : "Study for exams", completed : false}
    ];

    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (newTodoText) => {
        const newTodo = {
            id : uuid(),
            task : newTodoText,
            completed : false
        };
        setTodos([...todos, newTodo]);
    }

    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    const toggleTodo = (todoId) => {
        const updatedTodos = todos.map(todo => (
            todo.id === todoId ? {...todo, completed : !todo.completed} : todo
        ));
        setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => (
            todo.id === todoId ? {...todo, task : newTask} : todo
        ));
        setTodos(updatedTodos);
    }

    return(
        // Paper Tag is used for the body. 
        <Paper 
            style = {{
                padding : 0,
                margin : 0,
                height : "100vh",
                backgroundColor : "#fafafa"
            }}
            elevation = {0}
        >
            <AppBar color = "primary" position = "static" style = {{ height : "64px"}}>
                <Toolbar>
                    <Typography color = "inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify = "center" style = {{ marginTop : "1rem" }}>
                <Grid item xs = {11} md = {8} lg = {4}>
                    <TodoForm addTodo = {addTodo}/>
                    <TodoList todos = {todos} removeTodo = {removeTodo} toggleTodo = {toggleTodo} editTodo = {editTodo}/>        
                </Grid>
            </Grid>
        </Paper>
    );    
}

export default TodoApp;