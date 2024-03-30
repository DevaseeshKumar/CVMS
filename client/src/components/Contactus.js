import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Contactus = (props) => {
  const { user, phone, email } = props;

  return (
    <Card style={{ margin: '10px', display: 'inline-block' }}>
      <CardContent>
        <h3>Contact us</h3>
        <p>User: {user}</p>
        <p>Phone Number: {phone}</p>
        <p>Email: {email}</p>
      </CardContent>
    </Card>
  );
};

export default Contactus;
