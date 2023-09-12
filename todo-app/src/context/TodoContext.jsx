import { createContext, useReducer } from "react";
import { initial, todoReducer } from "../todo/todoReducer";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initial);
    const context = { state: state, dispatch }
    return (
        <TodoContext.Provider value={context}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoContextProvider };