import React, { useEffect, useState } from 'react'
import '../index.css'

export default function Register() {
    const [register, setRegister] = useState()
useEffect(()=>{
    localStorage.setItem('info',register)
    
},[])
useEffect(()=>{
    const efrat = localStorage.getItem('info')
},[register])
  return (
    <div>
      <form className='register-box'>
        <input type="text"  placeholder='Name...'/>
        <input type="email" placeholder='Email...'/>
        <input type="password" placeholder='Password...' />
        <button onClick={()=> setRegister(register)}>Register</button>
      </form>
    </div>
  )
}
