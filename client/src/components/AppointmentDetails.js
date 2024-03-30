import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const AppointmentDetails = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <Card sx={{ width: '100%', maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Appointment Details
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data).map(([field, value]) => (
              <TableRow key={field}>
                <TableCell>{field}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AppointmentDetails;
