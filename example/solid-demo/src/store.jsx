import {createContext, useContext, createSignal} from 'solid-js';
import { createTodoItem } from '../../utils';
const Context = createContext();

export const Provider = (props) => {
    const [todos, setTodos] = createSignal([])
    const store = {
        state: {
            todos,
        },
        dispatch: {
            addTodo(value) {
                setTodos(list => {
                    return [...list, createTodoItem(value)];
                })
            },
            delTodo(id) {
                setTodos(list => {
                    return list.filter((todo) => id !== todo.id)
                })
            },
            done(id) {
                setTodos(list => {
                    return list.map(todo => {
                        if (todo.id === id) {
                            todo.done = !todo.done;
                        }
                        return {...todo};
                    })
                })
            }
        }
    }
    return (
        <Context.Provider value={store}>
            {props.children}
        </Context.Provider>
    )
}

export const useStore = () => {
    return useContext(Context);
}