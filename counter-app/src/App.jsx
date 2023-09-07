import { useReducer } from 'react';

import { DECREMENT, INCREMENT, RESET } from "./reducer/actionType";
import { countReducer, initialCountState } from './reducer/count';

function App() {
  const [count, dispatch] = useReducer(countReducer, initialCountState);

  return (
    <>
      <h2>Count :: {count}</h2>
      <button onClick={() => dispatch(INCREMENT)}>Increment</button>
      <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
      <button onClick={() => dispatch(RESET)}>Reset</button>
    </>
  )
}

export default App;
