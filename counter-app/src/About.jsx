import { useReducer } from 'react';
import { DECREMENT, INCREMENT, RESET } from './reducer/actionType';
import { countReducer, initialCountState } from './reducer/count';

export default function About() {
    const [count, dispatch] = useReducer(countReducer, initialCountState);
    return (
        <div>
            <h2>About</h2>
            <h2>{count}</h2>
            <button onClick={() => dispatch(INCREMENT)}>Increment</button>
            <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
            <button onClick={() => dispatch(RESET)}>Reset</button>
        </div>
    )
}
