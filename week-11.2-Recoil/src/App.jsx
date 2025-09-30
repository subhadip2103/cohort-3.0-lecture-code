import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom, evenSelector } from "./store/atoms/counter"
import { useState, memo, useEffect } from "react"


function App() {
  return <RecoilRoot>
    <Buttons />
    <Counter />
    <IsEven />
  </RecoilRoot>

}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount(c => c + 2);
  }
  function decrease() {
    setCount(c => c - 1)
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}
function Counter() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>
}
function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "Even":"Odd"}</div>
}



// function App() {
//   return (
//     <RecoilRoot>
//       <Counter/>
//     </RecoilRoot>
//   )
// }

// function Counter(){
//   return(
//     <div>
//       <Value/>
//       <Increase/>
//       <Decrease/>
//     </div>
//   ) 
// }

// function Value(){
//   const count=useRecoilValue(counterAtom);
//   return <div>{count}</div>
// }
// function Increase(){
//   const setCount=useSetRecoilState(counterAtom)
//   function increase(){
//     setCount(c=>c+1)
//   }
//   return <button onClick={increase}>Increase</button>
// }
// function Decrease(){
//   const setCount=useSetRecoilState(counterAtom)
//   function decrease(){
//     setCount(c=>c-1)
//   }
//   return <button onClick={decrease}>Decrease</button>
// }
export default App


// Memo based approach

/*React says everytime a component Re-renders all its  childrens will also re-render.
But if u wrap a component inside a memo only if the props/state in that child has changed only then it will re-render */

// function App() {
//   return <Counter />

// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCount(c => c + 1)
//     }, 3000);
//   }, [])
//   return <div>
//     <Value />
//     <Increase />
//     <Decrease />
//   </div>

// }
// const Value = memo(function () {
//   return <div>1</div>
// })
// const Increase = memo(function () {
//   return <button>Increase</button>
// })
// const Decrease = memo(function () {
//   return <button>Decrease</button>
// })

// export default App