import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{ count: count, setCount: setCount }}>
    {children}
  </CountContext.Provider>
}


function Parent() {
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>

  )


}
function Increase() {
  const { count, setCount } = useContext(CountContext)
  return <button onClick={() => { setCount(count + 1) }}>Increase</button>
}
function Decrease() {
  const { count, setCount } = useContext(CountContext)
  return <button onClick={() => { setCount(count - 1) }}>Decrease</button>
}
function Value() {
  const { count } = useContext(CountContext)
  return <p>Count:{count}</p>
}
function App() {
  return (
    <div>
      <Parent />
    </div>
  )
}































// const BulbContext = createContext()

// function BulbProvider({ children }) {
//   const [bulbOn, setBulbOn] = useState(true);
//   return <BulbContext.Provider value={{ bulbOn: bulbOn, setBulbOn: setBulbOn }}>
//     {children}
//   </BulbContext.Provider>
// }
// function App() {
//   const [bulbOn, setBulbOn] = useState(true)
//   return (
//     <div>
//       <BulbProvider>
//         <LightBulb />
//       </BulbProvider>
//     </div>
//   )
//   function LightBulb() {

//     return (
//       <div>
//         <BulbState />
//         <ToggleBulbState />
//       </div>
//     )

//   }
//   function BulbState() {
//     const { bulbOn } = useContext(BulbContext)
//     return <div>{bulbOn ? "Bulb is ON" : "Bulb is OFF"}</div>
//   }
//   function ToggleBulbState() {
//     const { bulbOn, setBulbOn } = useContext(BulbContext)
//     function toggle() {
//       setBulbOn(!bulbOn)
//     }
//     return <div><button onClick={toggle}>Toggle Button</button></div>
//   }

// }

export default App
