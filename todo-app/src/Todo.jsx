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
        <div className="card my-3">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="rounded p-2 me-1" placeholder="Add an item on your list" />
                    <button type="submit" className="btn btn-danger">Add</button>
                </form>
                <Todos />
            </div>
        </div>
    )
}
