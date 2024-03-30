import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: (theme) => theme.spacing(2),
});

const Form = styled('form')({
  width: '100%',
  maxWidth: '400px',
  '& > *': {
    marginBottom: (theme) => theme.spacing(2),
  },
});

const TextFieldStyled = styled(TextField)({
  width: '100%',
});

const SubmitButton = styled(Button)({
  marginTop: (theme) => theme.spacing(2),
  width: '100%',
});

const AgeTextField = styled(TextField)({
  width: '100%',
  maxWidth: '200px',
});

const GenderSelect = styled(TextField)({
  width: '100%',
});

const DeptSelect = styled(TextField)({
  width: '100%',
});

const ProofAttachmentTextField = styled(TextField)({
  width: '100%',
});

const AppointmentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parentName: '',
    gender: '',
    age: '',
    mobile: '',
    email: '',
    studentId: '',
    studentName: '',
    studentDept: '',
    purposeOfVisit: '',
    dateAndTime: '',
    proofAttachment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/appointmentdetails', { state: formData });
  };

  return (
    <Container>
      <h1 style={{ color: 'maroon' }}>Book Appointment</h1>
      <Form onSubmit={handleSubmit}>
        <TextFieldStyled
          label="Name of the Parent"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          fullWidth
          required
        />
        <GenderSelect
          label="Gender"
          name="gender"
          select
          value={formData.gender}
          onChange={handleChange}
          fullWidth
          required
        >
          <MenuItem value="">Select Gender</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </GenderSelect>
        <AgeTextField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          required
          inputProps={{ min: 35, max: 75 }}
        />
        <TextFieldStyled
          label="Mobile"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextFieldStyled
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <TextFieldStyled
          label="Student ID"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextFieldStyled
          label="Student Name"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          fullWidth
          required
        />
        <DeptSelect
          label="Student Department"
          name="studentDept"
          select
          value={formData.studentDept}
          onChange={handleChange}
          fullWidth
          required
        >
          <MenuItem value="">Select Department</MenuItem>
          <MenuItem value="CSE">CSE</MenuItem>
          <MenuItem value="CSE-H">CSE-H</MenuItem>
          <MenuItem value="M.Tech">M.Tech</MenuItem>
          <MenuItem value="Mechanical">Mechanical</MenuItem>
          <MenuItem value="Electrical">Electrical</MenuItem>
        </DeptSelect>
        <TextFieldStyled
          label="Purpose of Visit"
          name="purposeOfVisit"
          value={formData.purposeOfVisit}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextFieldStyled
          label="Date and Time of Visit"
          name="dateAndTime"
          type="datetime-local"
          value={formData.dateAndTime}
          onChange={handleChange}
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
        />
        <ProofAttachmentTextField
          label="Proof of Attachment"
          name="proofAttachment"
          value={formData.proofAttachment}
          onChange={handleChange}
          fullWidth
        />
        <SubmitButton
          type="submit"
          variant="contained"
          style={{ backgroundColor: 'maroon', color: 'white' }}
        >
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default AppointmentForm;