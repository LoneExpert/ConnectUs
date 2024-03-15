import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
    const navigate = useNavigate();
    useEffect (() =>{
        if(!localStorage.getItem("jwtToken"))
        navigate('/login')
    },[])
    return (
        <div>
            <h1>Create Post : </h1>
        </div>
    )
}