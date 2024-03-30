import React from 'react'

const Footer = () => {

  const currentDate = new Date();


  const options = {  year: 'numeric', month: 'numeric', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-IN', options);
  

  return (
    <div> 
      <h5 style={{color:"blue"}}>Copy Rights For KLEF ||{formattedDate}</h5>
        
     
    </div>
  );
};

export default Footer;