import { inject, reactive } from "vue";
import { createTodoItem } from "../../utils";
const todoSymbol = Symbol('todo');

const todoStore = () => {
    const state = reactive({
        todos: []
    });
    const addTodo = (value) => {
        state.todos = [...state.todos, createTodoItem(value)];
    }
    const delTodo = (id) => {
        state.todos = state.todos.filter(todo => todo.id !== id);
    }
    const done = (id) => {
        state.todos.forEach(todo => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }
        })
    }
    return {
        state,
        addTodo,
        delTodo,
        done,
    }
}

export const useTodos = () => {
    return inject(todoSymbol);
}

export const store = {
    install: (app) => {
        app.provide(todoSymbol, todoStore());
    }
}