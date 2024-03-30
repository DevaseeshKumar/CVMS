import React, { useState } from 'react';
import { Paper, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {
  const navigate  = useNavigate()
  const handleStudentClick = () => {
    navigate("/displaystudents")
  };
  const [formData, setFormData] = useState({
    ID: '',
    name: '',
    course: '',
    cgpa: '',
    mobilenumber: '',
    mail: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/student/createStudent', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      if (response.ok) { 
        setSubmitted(true);
        setFormData({
          ID: '',
          name: '',
          course: '',
          cgpa: '',
          mobilenumber: '',
          mail: '',
        });
        console.log("Student Added Succesfully")
        // window.location.href = '/studentDisplay'
      } else {
        console.error('Failed to add student');
      }
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <>
        <Paper elevation={3} style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', borderRadius: '8px' }}>
          <center>
            <h3 style={{ marginBottom: '10px', color: 'Red', fontFamily: 'cursive' }}>
              Student Form
            </h3>
          </center>
          <form onSubmit={handleSubmit}>
            <TextField
              label="ID"
              name="ID"
              value={formData.ID}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
              type="number"
            />
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="CGPA"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
              
            />
            <TextField
              label="Mobile Number"
              name="mobilenumber"
              value={formData.mobilenumber}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
              
            />
            <TextField
              label="Email"
              name="mail"
              value={formData.mail}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
              type="email"
            />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}> {/* Adjust the value of gap as needed */}
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              
              <Button type="submit" variant="contained" color="primary" onClick={handleStudentClick}>
                View Students
              </Button>
            </div>
          </form>
        </Paper>
      <br/><br/><br/><br/>
    </>
  );
};

export default StudentForm;