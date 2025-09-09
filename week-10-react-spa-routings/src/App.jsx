import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, redirect, Outlet } from 'react-router-dom';
import './App.css'

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
    Welcome to Allen, Where talent meets Experience
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
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ height: "90vh" }}>
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
