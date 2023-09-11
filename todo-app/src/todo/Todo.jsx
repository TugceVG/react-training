import { useReducer } from "react";
import { ADD_TODO, REMOVE_TODO, RESET_TODO } from "./actionType";
import { initial, todoReducer } from "./todoReducer";

export default function Todo() {
    const [state, dispatch] = useReducer(todoReducer, initial)

    function handleSubmit(event) {
        event.preventDefault();
        const inputValue = event.target.elements[0].value;
        dispatch({ type: ADD_TODO, payload: inputValue });
        event.target.reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add an item on your list" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {state?.todos?.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
            {/* {JSON.stringify(state)} */}
        </>
    )
}
