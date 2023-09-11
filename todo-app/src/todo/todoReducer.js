import { ADD_TODO, REMOVE_TODO, RESET_TODO } from "./actionType";

export const initial = {
    todos: [],
    todo: "",
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case REMOVE_TODO:
            return state;
        case RESET_TODO:
            return initial;
        default:
            return state;
    }
}