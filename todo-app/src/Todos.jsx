import { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import { REMOVE_TODO, RESET_TODO } from './todo/actionType';

export default function Todos() {
    const { state, dispatch } = useContext(TodoContext);
    return (
        <div className="container my-3">
            <strong>TODO List </strong>
            <button
                className="btn btn-primary"
                onClick={() => dispatch({ type: RESET_TODO, payload: [] })}
            >
                Clear List
            </button>
            <ul className="my-3">
                {state?.todos?.map((todo) =>
                    <li key={todo.id}
                        className="text-secondary"
                        onClick={() => dispatch({ type: REMOVE_TODO, payload: todo.id })}>
                        {todo.title}
                    </li>)
                }
            </ul>
        </div>
    )
}
