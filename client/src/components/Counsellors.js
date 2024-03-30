import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Counsellors = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const cardStyle = {
    margin: '10px',
    display: 'inline-block',
    backgroundColor: isClicked ? 'lightgreen' : 'lightblue',
    borderRadius: isClicked ? '20px' : '10px',
    transition: 'background-color 0.3s, border-radius 0.3s',
    cursor: 'pointer',
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Card style={cardStyle} onClick={handleClick}>
      <CardContent>
        <h3>Details</h3>
        <p>EMP ID: {props.empid}</p>
        <p>name: {props.name}</p>
        <p>Designation: {props.des}</p>
        <p>Phone: {props.phone}</p>
        <p>email: {props.email}</p>
        <p>No of Students: {props.students}</p>
      </CardContent>
    </Card>
  );
};

export default Counsellors;
