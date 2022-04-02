import { useStore } from '../store';
const TodoForm = () => {
    const store = useStore();
    const handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (!event.target.value.trim()) return;
            store.dispatch.addTodo(event.target.value);
            event.target.value = '';
        }
    }
    return (
        <header class="header">
            <h1>Todos</h1>
            <input class="new-todo" placeholder="请输入" onKeyPress={handleEnter} />
        </header>
    )
}

export default TodoForm;
