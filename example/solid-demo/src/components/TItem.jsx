import { useStore } from "../store";
const TodoItem = (props) => {
    const {todo} = props;
    const {dispatch} = useStore();
    console.log(todo, props);
    return (
        <li class={todo.done ? "completed" : ""}>
            <div class="view">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={todo.done}
                    onChange={[dispatch.done, todo.id]}
                    autoFocus={true}
                />
                <label>
                    {todo.label}
                </label>
                <button className="destroy" onClick={[dispatch.delTodo, todo.id]} />
            </div>
        </li>
    )
}

export default TodoItem;