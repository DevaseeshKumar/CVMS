import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Input, FormHelperText, Button, Card, CardContent } from '@mui/material';

const AddStudent = () => {
  const [ID, setId] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [mail, setMail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Check if any required field is empty
      if (!ID || !name || !course || !cgpa || !mobilenumber || !mail) {
        throw new Error("All fields are required");
      }
  
      const data = {
        ID,
        name,
        course,
        cgpa,
        mobilenumber,
        mail
      };
  
      // Send POST request to the server
      const response = await axios.post('http://localhost:5000/insertstudent', data);
      console.log("Server Response:", response.data);
      
      // Clear form fields upon successful submission
      setId('');
      setName('');
      setCourse('');
      setCgpa('');
      setMobileNumber('');
      setMail('');
      setError('');
    } catch (err) {
      console.error("Error in posting data: ", err.message);
      if (err.response) {
        // Server responded with an error status code (4xx or 5xx)
        setError(err.response.data.error || "Failed to add student. Please try again.");
      } else if (err.request) {
        // The request was made but no response was received
        setError("Network Error. Please check your internet connection or try again later.");
      } else {
        // Something else happened in setting up the request
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };
  

  return (
    <Card style={{ minWidth: 275, backgroundColor: '#e0f2f1', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 4px 2px rgba(0, 0, 0, 0.14), 0px 8px 3px rgba(0, 0, 0, 0.12)' }}>
      <CardContent style={{ padding: 24 }}>
        <form onSubmit={handleSubmit}>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="id">ID</InputLabel>
            <Input
              id="id"
              value={ID}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="course">Course</InputLabel>
            <Input
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="cgpa">CGPA</InputLabel>
            <Input
              id="cgpa"
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="mobileNumber">Mobile Number</InputLabel>
            <Input
              id="mobileNumber"
              value={mobilenumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="mail">Mail</InputLabel>
            <Input
              id="mail"
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: 2 }}>
            Add Student
          </Button>
          {error && (
            <FormHelperText error style={{ marginTop: 2 }}>
              {error}
            </FormHelperText>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default AddStudent;
