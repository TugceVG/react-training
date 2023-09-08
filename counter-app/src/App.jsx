import { useContext } from 'react';
import About from './About';
import { SiteContext } from './context/SiteContext';
import ContextAbout from './ContextAbout';

import { DECREMENT, INCREMENT, RESET } from "./reducer/actionType";
// import { countReducer, initialCountState } from './reducer/count';

function App() {
  // const [count, dispatch] = useReducer(countReducer, initialCountState);
  const { counter: { state, dispatch } } = useContext(SiteContext);
  console.log(state, dispatch)
  return (
    <>
      <h2>Count :: {state}</h2>
      <button onClick={() => dispatch(INCREMENT)}>Increment</button>
      <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
      <button onClick={() => dispatch(RESET)}>Reset</button>
      <hr />
      <About />
      <hr />
      <ContextAbout />
    </>
  )
}

export default App;
