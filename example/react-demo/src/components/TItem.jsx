import { useStore } from "../store";
const TodoItem = (props) => {
    const {todo} = props;
    const {dispatch} = useStore();
    const del = () => {
        dispatch({
            type: 'delTodo',
            payload: todo.id,
        })
    }
    const done = () => {
        dispatch({
            type: 'done',
            payload: todo.id,
        })
    }
    return (
        <li className={todo.done ? "completed" : ""}>
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={todo.done}
                    onChange={done}
                    autoFocus={true}
                />
                <label>
                    {todo.label}
                </label>
                <button className="destroy" onClick={del} />
            </div>
        </li>
    )
}

export default TodoItem;