import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = (props) => {
    const initialTodos = [
        {id : 1, task : "Do some Coding", completed : false},
        {id : 2, task : "Watch WWE", completed : true},
        {id : 3, task : "Study for exams", completed : false}
    ];

    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (newTodoText) => {
        const newTodo = {
            id : todos.length,
            task : newTodoText,
            completed : false
        };
        setTodos([...todos, newTodo]);
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
                    <TodoList todos = {todos}/>        
                </Grid>
            </Grid>
        </Paper>
    );    
}

export default TodoApp;