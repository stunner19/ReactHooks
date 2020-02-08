import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
import { TodosContext} from './context/todos.context';

const TodoList = () => {
    const { todos } = useContext(TodosContext);

    const listItems = todos.map((todo,index) => (
        <React.Fragment key = {index}>
            <Todo {...todo} key = {todo.id} />
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