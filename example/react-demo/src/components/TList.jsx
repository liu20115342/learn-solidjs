import { useStore } from "../store";
import TodoItem from "./TItem";

const TodoList = () => {
    const {state} = useStore();
    return (
        <section className="main">
            <ul className="todo-list">
                {
                    state.todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))
                }
            </ul>
        </section>
    )
}

export default TodoList;
