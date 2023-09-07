import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prev => prev + 1)
  }

  function decriment() {
    setCount(prev => prev - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <>
      <h2>Count :: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decriment}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App;
