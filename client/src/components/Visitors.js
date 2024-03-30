import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Visitors = (props) => {
  return (
    <Card style={{ margin: '10px', display: 'inline-block' }}>
      <CardContent>
        <h3>Visitors</h3>
        <p>Name: {props.name}</p>
        <p>Phone Number: {props.phone}</p>
        <p>Relation: {props.relation}</p>
        <p>Time: {props.time}</p>
        <p>Purpose: {props.purpose}</p>
        <p>Student ID: {props.id}</p>
      </CardContent>
    </Card>
  );
};

export default Visitors;
