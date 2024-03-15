import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Counter from './Counter'
import './home.css'
import people from './v_people.png'
import Navbar from './Navbar'


export default function Home(){
    const [displayCounter , setDisplayCounter] = useState(false)
    if(displayCounter){
        return <Counter></Counter>
    }
    return (    
        <div>
            <Navbar/>
            <div className='body'>
                <div className='body1'>
                    <p className='head1'>Connect and Share with ConnectUs</p>
                    <p className='head2'>Your Trusted Companion in Digital World</p><br/><br/>
                    <Link className='part1' to="/login">Login</Link>
                    <Link className='part2' to="/register">Sign-Up</Link>
                </div>
                <div className='body2'>
                    <img className='img1' src={people} alt='Internal Error'/>
                </div>
            </div>
        </div>
    )
}


