import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  )
  function LightBulb() {
    const [bulbOn, setBulbOn] = useState(true)
    return (
      <div>
        <BulbState bulbOn={bulbOn} />
        <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
      </div>
    )

  }
  function BulbState({ bulbOn }) {
    return <div>{bulbOn ? "Bulb is ON" : "Bulb is OFF"}</div>
  }
  function ToggleBulbState({ bulbOn, setBulbOn }) {
    function toggle() {
      setBulbOn(!bulbOn)
    }
    return <div><button onClick={toggle}>Toggle Button</button></div>
  }

}

export default App
