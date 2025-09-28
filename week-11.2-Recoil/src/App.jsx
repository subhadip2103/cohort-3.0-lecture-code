import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom } from "./store/atoms/counter"


function App() {
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){
  return(
    <div>
      <Value/>
      <Increase/>
      <Decrease/>
    </div>
  ) 
}

function Value(){
  const count=useRecoilValue(counterAtom);
  return <div>{count}</div>
}
function Increase(){
  const setCount=useSetRecoilState(counterAtom)
  function increase(){
    setCount(c=>c+1)
  }
  return <button onClick={increase}>Increase</button>
}
function Decrease(){
  const setCount=useSetRecoilState(counterAtom)
  function decrease(){
    setCount(c=>c-1)
  }
  return <button onClick={decrease}>Decrease</button>
}
export default App


