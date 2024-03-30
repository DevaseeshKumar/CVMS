import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Snackbar, Alert } from '@mui/material';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/viewstudents');
        setStudents(response.data);
      } catch (err) {
        console.error("Error fetching students: ", err.message);
        setError("Failed to fetch students. Please try again.");
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (studentId) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${studentId}`);
      setStudents(prevStudents => prevStudents.filter(student => student.ID !== studentId));
      setSnackbarOpen(true);
    } catch (err) {
      console.error("Error deleting student: ", err.message);
      setError("Failed to delete student. Please try again.");
    }
  };
  

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Students
      </Typography>
      {error && (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      )}
      {students.map(student => (
        <Card key={student.ID} style={{ marginTop: 16 }}>
          <CardContent>
            <Typography variant="h6">
              ID: {student.ID}
            </Typography>
            <Typography variant="body1">
              Name: {student.name}
            </Typography>
            <Typography variant="body1">
              Course: {student.course}
            </Typography>
            <Typography variant="body1">
              CGPA: {student.cgpa}
            </Typography>
            <Typography variant="body1">
              Mobile Number: {student.mobilenumber}
            </Typography>
            <Typography variant="body1">
              Mail: {student.mail}
            </Typography>

          </CardContent>
        </Card>
      ))}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Student deleted successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default ViewStudents;
