import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Navbar = () => {

    const windowalert=()=>{
        window.alert("This is upcoming");
    }
    return (    
        <div>
            <nav className='navbar'>
                <p className='ele1'>ConnectUs</p>
                <Link className='ele2' to="/">Home</Link>
                <Link className='ele3' to="/about">Know Us</Link>
                <Link className='ele4_1' to="/" onClick={windowalert}>Upcoming Features</Link>
                <Link className='ele4_2' to="/" onClick={windowalert}>Upcoming Features</Link>
                <Link className='ele5' to="/contacts">Contact Page</Link>
            </nav>
        </div>
    )
}

export default Navbar
