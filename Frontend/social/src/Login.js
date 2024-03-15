import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import loginpic from './login_pic.png'
import './login.css'

export default function Login() {
  const navigate = useNavigate()
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')


  const handleUsername = async (event) => {
    console.log(event);
    setUsername(event.target.value);
  }
  const handlePassword = (event) => {
    console.log(event);
    setPassword(event.target.value);
  }
  const handleForm = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:3000/login", {
      username: Username,
      password: Password
    });

    if (res.status === 200) {
      localStorage.setItem("jwtToken", res.data.token)
      window.alert("You are logged-in");
      navigate('/')
    }
  }
  return (
    <div>
      <Navbar />
      <div className='main1'>
        <div className='image_log'>
          <img className='loginimage' src={loginpic} alt="Internal Error" />
        </div>
        <div className='data1'>
          <form onSubmit={handleForm} className='form1'>
            <label className='labels1'>USERNAME</label>
            <input type='text' className='username' value={Username} onChange={handleUsername}></input>
            <br></br><br></br>
            <label className='labels1'>PASSWORD</label>
            <input type='password' className='userpass' value={Password} onChange={handlePassword}></input>
            <br></br><br></br>
            <button className='sub1'>LOG-IN</button>
          </form>
          {/* <h2>{loginError}</h2> */}

        </div>

      </div>
    </div>
  )
}