import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import regispic from './regis_pic.png'
import './registration.css'

export default function Registation() {
  const Navigate = useNavigate();
  const [UserName, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const handleUserName = (event) => {
    setUsername(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)

  }

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3000/register", {
        username: UserName,
        password: Password
      })
      if (response.status === 201) {
        window.alert("Your data is saved succesfully")
        Navigate('/login');
      }
    }
    catch (error) {
      
    }
  }
  return (
    <div>
      <Navbar />
      <div className='main2'>
        <div className='image_reg'>
        <img className='loginimage' src={regispic} alt="Internal Error" />
        </div>
        <div className='data2'>
          <form onSubmit={handleForm} className='form2'>
            <label className='labels2'>USERNAME</label>
            <input type='text'className='newname'  value={UserName} onChange={handleUserName}></input><br></br><br></br>
            <label className='labels2'>PASSWORD</label>
            <input type='password' className='newpass' value={Password} onChange={handlePassword}></input><br></br><br></br>
            <button className='sub2'>SIGN-UP</button>
          </form>
        </div>
      </div>
    </div>
  )
}