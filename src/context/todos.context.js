import React, { createContext } from 'react';
import todoReducer from '../reducers/todo.reducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

const defaultTodos = [
    { id : 1, task : "Do some Coding", completed : false},
    { id : 2, task : "Watch WWE", completed : true},
    { id : 3, task : "Study for exams", completed : false}
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    return(
        // If more than one item is present, then we export an object using {{ }} braces;
        // Otherwise, for a single item like todos and dispatch, we can use single {} braces.
        <TodosContext.Provider value = {todos}>
            <DispatchContext.Provider value = {dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}
