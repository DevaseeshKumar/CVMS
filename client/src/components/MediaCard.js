import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function MediaCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div>
        <Link to="/insertStudent" style={{ textDecoration: 'none' }}>
          <Button variant="contained" style={{ marginRight: '10px' }}>Add Student</Button>
        </Link>
        <Link to="/viewstudents" style={{ textDecoration: 'none' }}>
          <Button variant="contained">View Students</Button>
        </Link>
      </div>
    </div>
  );
}
