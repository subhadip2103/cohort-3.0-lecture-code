import React, { useEffect, useState } from 'react'
import { UseFetch } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';
import { useDebounce } from './hooks/useDebounce';

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
  function sendDataToBackend() {
    fetch("api.amazon.com/search/")
    console.log("called api")
  }

  const debouncedFn=useDebounce(sendDataToBackend)
  return (
    <>
      <input type="text" onChange={debouncedFn}/>
    </>
  )
  

}







// function App(){
//   const [state,setState]=useState(0);
//   const previousValue=usePrev(state)
//   return(
//     <div>
//       <p>{state}</p>
//       <button onClick={()=>setState(state+1)}>Click me</button>
//       <p>Previous count value is {previousValue} </p>
//     </div>
//   )

// }










// function App() {
//   // const [currentPost, setCurrentPost] = useState(1)
//   // const { finalData, loading } = UseFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`,10);

//   // return (
//   //   <div>
//   //     <button onClick={() => setCurrentPost(1)}>1</button>
//   //     <button onClick={() => setCurrentPost(2)}>2</button>
//   //     <button onClick={() => setCurrentPost(3)}>3</button>
//   //     {loading ? <div>Loading...</div> : <div>{JSON.stringify(finalData)}</div>}
//   //   </div>

//   // )
// }

export default App
