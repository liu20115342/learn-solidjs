import {createContext, useContext, useReducer} from 'react';
import { createTodoItem } from '../../utils';

export const Context = createContext(null);
const initialState = {
    todos: [],
};
const fns = {
    addTodo: (state, value) => {
        return {
            ...state,
            todos: [...state.todos, createTodoItem(value)]
        }
    },
    delTodo: (state, id) => {
        return {
            ...state,
            todos: state.todos.filter((todo) => id !== todo.id)
        }
    },
    done: (state, id) => {
        return {
            ...state,
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
                return {...todo};
            })
        }
    }
}
const reduer = (state, action) => {
    if (fns[action.type]) {
        return fns[action.type](state, action.payload);
    }
    return state;
}
export const Provider = (props) => {
    const [state, dispatch] = useReducer(reduer, initialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {props.children}
        </Context.Provider>
    );
}
export const useStore = () => {
    return useContext(Context);
}
