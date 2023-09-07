import { DECREMENT, INCREMENT, RESET } from "./actionType";

export const initialCountState = 0;

export const countReducer = (state, action) => {
    switch (action) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return initialCountState;
        default:
            return state;
    }
}