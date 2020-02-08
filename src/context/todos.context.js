import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    { id : 1, task : "Do some Coding", completed : false},
    { id : 2, task : "Watch WWE", completed : true},
    { id : 3, task : "Study for exams", completed : false}
];

export const TodosContext = createContext();

export const TodosProvider = (props) => {
    const todosStuff = useTodoState(defaultTodos);
    return(
        <TodosContext.Provider value = {todosStuff}>
            {props.children}
        </TodosContext.Provider>
    );
}
