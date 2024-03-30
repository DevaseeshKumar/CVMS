import React from 'react'
import Image from './Devaseesh.jpeg';
const Student = () => {
  return (
    <div>
      <h2 style={{color:'red'}}>Student Information</h2>
       <img src={Image} width="30" height="30"></img>
      <h3 style={{color:'black'}}>Name: Devaseesh</h3>
      <h3 style={{color:'gray'}}>ID: 2200031963</h3>
    </div>
  )
}

export default Student
