import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import HomePage from './components/HomePage'
import LogOut from './components/LogOut'
import './App.css'

function App() {

  return (
    <>
     <Login/>
     <Register/>
     <HomePage/>
     <LogOut/>
    </>
  )
}

export default App
