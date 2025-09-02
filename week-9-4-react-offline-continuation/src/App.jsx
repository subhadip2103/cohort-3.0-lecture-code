import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const todos = [{ title: "Go to gym", done: false }, { title: "Eat food", done: true }]
  const todosComponent = todos.map(todo => <Todo title={todo.title} done={todo.done} />)

  return (
    <div>{todosComponent}</div>
  )
  function Todo({ title, done }) {
    return (
      <div>{title}-{done ? "Done!" : "Not done!"}</div>
    )

  }







  //Childrens in react
  //   const [count, setCount] = useState(0)

  //   return (
  //     <div style={{ display: 'flex', gap: 10 }}>
  //       <Card>
  //         <div>Hi there</div>
  //       </Card>
  //       <Card>
  //         <div style={{ color: 'blue' }}>
  //           What do you want to post<br />
  //           <input type={"text"} />
  //         </div>
  //       </Card>
  //     </div>

  //   )
  // }
  // function Card({ children }) {
  //   return <div style={{ backgroundColor: "black", borderRadius: 10, color: "white", padding: 10 }}>
  //     Upper topbar
  //     {children}
  //     Lower bottom footer
  //   </div>
}

export default App
