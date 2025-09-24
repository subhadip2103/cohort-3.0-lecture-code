import React, { useEffect, useState } from 'react'
import { UseFetch } from './hooks/useFetch';

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
  const [currentPost, setCurrentPost] = useState(1)
  const { finalData, loading } = UseFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`,10);

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {loading ? <div>Loading...</div> : <div>{JSON.stringify(finalData)}</div>}
    </div>

  )
}

export default App
