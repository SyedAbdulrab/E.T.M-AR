import React from "react"
import { NavBar } from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import './App.css'
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/SignIn"
function App() {
 return (
  <>  
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/signin" exact element={<SignIn/>}/>
    </Routes>
  </>
 )
}

export default App
