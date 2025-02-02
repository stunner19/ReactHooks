import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';
import { TodosProvider } from './context/todos.context';

const TodoApp = (props) => {
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
                    <TodosProvider>
                        <TodoForm/>
                        <TodoList />        
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    );    
}

export default TodoApp;