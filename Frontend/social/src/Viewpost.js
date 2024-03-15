import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './viewpost.css'

export default function ViewPosts() {
  const [apiData,setApiData]=useState([])
  const [loading, isLoading] = useState(true)
  const [apiError, setApiError] = useState(false)
  const navigate = useNavigate()
    useEffect( ()=>{
    if (localStorage.getItem("jwtToken")) {
      
      (async()=>{
         try {
             const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
           //  console.log(response);
           setApiData(response.data)
           isLoading(false)
          } catch (error) {
              setApiError(true)
          }
      })()
    } else {
      navigate('/login')
    }
    },[])
    
    const displayData=apiData.map((data)=><h4 className="view" key={data.title}>{data.title}</h4>)

    if(loading){
        return <h1>Loading.......</h1>
    }
    if(apiError){
        <h1>Something went wrong</h1>
    }
  return (
    <div>
      <Navbar/>
      {displayData}
    </div>
  )
}