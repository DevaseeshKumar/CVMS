import React from 'react'
import Image from './Kl.jpeg';
const Header = () => {
  return (
    <div>
      <img src={Image} width="150" height="150"></img>
      <h1 style={{color:'maroon'}}>CVMS</h1>
    </div>
  )
}

export default Header
