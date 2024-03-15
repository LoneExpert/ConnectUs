import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewPosts() {
    useEffect( ()=>(
        (async () =>{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(response)
        })()
    ))
    const params = useParams()
    return (
        <div>
            <h1>Posts :</h1>
        </div>
    )
}