import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, redirect, Outlet } from 'react-router-dom';
import './App.css'

function App() {
  //A clock with start and stop button
  const [count, setCount] = useState(0);
  const timer=useRef()
  return (
    <div>
      <div style={{ height: 100, width: 100, borderRadius: 60, backgroundColor: "whitesmoke", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{count}</div>
      <div style={{ width: 200 }}>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>

    </div>
  )
  function stopTimer() {
    clearInterval(timer.current)  
  }
  function startTimer() {
    const value= setInterval(() => {
      setCount(prevValue => prevValue + 1)
    }, 1000)
    timer.current=value

  }










  // const inputRef = useRef()


  // return (
  //   <div>
  //     <input ref={inputRef} type="text" />
  //     <input type="text" />
  //     <button onClick={focusOnClick}>Submit</button>
  //   </div>
  // )
  // function focusOnClick() {
  //   inputRef.current.focus()

  // }
}












function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />}></Route>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

function HomePage() {
  return <div>
    Welcome to Allen
  </div>
}
function Class11Program() {
  const navigate = useNavigate()
  function redirectUser() {
    navigate("/")
  }
  return (
    <div>
      Neet programs for class 11th
      <button onClick={redirectUser}>Go back to HomePage</button>
    </div>
  )
}
function Class12Program() {
  const navigate = useNavigate()
  function redirectUser() {
    navigate("/")
  }
  return (
    <div>
      Neet programs for class 12th
      <button onClick={redirectUser}>Go back to landing page</button>
    </div>
  )
}
function ErrorPage() {
  return (
    <div>
      Sorry page not found
    </div>
  )
}
function Layout() {
  return (
    <div style={{ height: "100vh" , backgroundColor:"darkblue"}}>
      <Header />
      <div style={{ height: "90vh",backgroundColor:"blue", color:"white" }}>
        <Outlet/>
      </div>
      Footer| Contact us
    </div>
  )
}
function Header() {
  return <div>
    <Link to={"/"}>Home</Link> |
    <Link to={"/neet/online-coaching-class-11"}>Class 11</Link> |
    <Link to={"/neet/online-coaching-class-12"}>Class 12</Link> |
  </div>

}

export default App
