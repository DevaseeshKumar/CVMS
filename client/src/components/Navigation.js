import React from 'react';
import Image from './Kl.jpeg';
const Navigation = () => {
  return (
    <div>
      <style>
        {`
          nav {
            background-color: #800000;
            padding: 10px;
            border-bottom: 2px solid #600000;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
          }

          li {
            margin-right: 20px;
          }

          a {
            text-decoration: none;
            color: #ffffff;
            font-weight: bold;
            position: relative;
            transition: color 0.3s ease;
          }

          a:hover {
            color: #a52a2a;
          }

          a::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #a52a2a;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
          }

          a:hover::before {
            transform: scaleX(1);
            transform-origin: left;
          }

          a:hover {
            background-color: #600000;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      
      <nav>
        <ul>
       
        <img src={Image} width="35" height="35"></img>

          <li><a href="/home">Home</a></li>
          <li><a href="login">Login</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contactus">Contactus</a></li>
          <li><a href="/student">Student Details</a></li>
          <li><a href="/counsellors">Counsellors  </a></li>
          <li><a href="/appointment">Appointment  </a></li>
          <li><a href="/visitors">Visitors </a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
