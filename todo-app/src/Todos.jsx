import { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import { REMOVE_TODO, RESET_TODO } from './todo/actionType';

export default function Todos() {
    const { state, dispatch } = useContext(TodoContext);
    return (
        <>
            <br />
            <strong>TODO List </strong>
            <button onClick={() => dispatch({ type: RESET_TODO, payload: [] })}>
                Clear List
            </button>
            <ul>
                {state?.todos?.map((todo) =>
                    <li key={todo.id}
                        onClick={() => dispatch({ type: REMOVE_TODO, payload: todo.id })}>
                        {todo.title}
                    </li>)
                }
            </ul>
        </>
    )
}
