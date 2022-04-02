export function uuid() {
    return `todo-uuid-${Date.now()}`
}

export function createTodoItem(value) {
    return {
        label: value,
        id: uuid(),
        done: false,
    }
}