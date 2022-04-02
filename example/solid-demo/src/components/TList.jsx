import { useStore } from "../store";
import TodoItem from "./TItem";
const TodoList = () => {
    const store = useStore();
    return (
        <section className="main">
            <ul class="todo-list">
                <For each={store.state.todos()}>
                    {
                        (todo) => <TodoItem todo={todo} />
                    }
                </For>
            </ul>
        </section>
    )
}

export default TodoList;
