import { useLocalStorageState } from './useLocalStorageState';
import uuid from 'uuid/v4';

const useTodoState = (initialTodos) => {
    const [todos, setTodos] = useLocalStorageState("todos",initialTodos);
    return {
        todos,
        addTodo : (newTodoText) => {
            const newTodo = {
                id : uuid(),
                task : newTodoText,
                completed : false
            };
            setTodos([...todos, newTodo]);
        },
        removeTodo : (todoId) => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleTodo : (todoId) => {
            const updatedTodos = todos.map(todo => (
                todo.id === todoId ? {...todo, completed : !todo.completed} : todo
            ));
            setTodos(updatedTodos);
        },
        editTodo : (todoId, newTask) => {
            const updatedTodos = todos.map(todo => (
                todo.id === todoId ? {...todo, task : newTask} : todo
            ));
            setTodos(updatedTodos);
        }
    }    
}

export default useTodoState;