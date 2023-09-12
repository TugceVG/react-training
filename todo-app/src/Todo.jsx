import { useContext } from "react";

import { TodoContext } from "./context/TodoContext";
import { ADD_TODO } from "./todo/actionType";
import Todos from "./Todos";

export default function Todo() {
    const { state, dispatch } = useContext(TodoContext);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.name)
        const inputValue = event.target.elements[0].value;
        dispatch({ type: ADD_TODO, payload: inputValue });
        event.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add an item on your list" />
                <button type="submit" name="add">Add</button>
            </form>
            <Todos />
        </>
    )
}
