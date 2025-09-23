import React, { useState } from 'react'

function UseCounter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(c => c + 1)
  }
  return (
    {
      count,
      increaseCount
    }
  )

}



function App() {
  const { count, increaseCount } = UseCounter();
  return (
    <button onClick={increaseCount}>Increase {count}</button>
  )
}

export default App
