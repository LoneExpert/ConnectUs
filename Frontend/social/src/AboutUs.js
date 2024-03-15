import React from 'react'
import Navbar from './Navbar'
import us from './about.mp4'

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <video src={us} width="100%" height="550px" controls/>
    </div>
  )
}

export default AboutUs
