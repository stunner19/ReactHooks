import uuid from 'uuid/v4';

const reducer = (state, action) => {
    switch(action.type){
        case "ADD" : 
            const newTodo = {
                id : uuid(),
                task : action.task,
                completed : false
            };
            return [...state, newTodo];
        case "REMOVE" : 
            return state.filter(todo => todo.id !== action.id);
        case "TOGGLE" : 
            return state.map(todo => (
                todo.id === action.id ? {...todo, completed : !todo.completed} : todo
            ));
        case "EDIT" : 
            return state.map(todo => (
                todo.id === action.id ? {...todo, task : action.task} : todo
            ));
        default : 
            return state;
    }
}

export default reducer;