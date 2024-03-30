import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
import Home from './components/Home';
import TAF from './components/TAF';
import Header from './components/Header';
import Login from './components/Login';
import MediaCard from './components/MediaCard';
import AboutUs from './components/AboutUs';
import Contactus from './components/Contactus';
import Counsellors from './components/Counsellors'; 
import Appointment from './components/Appointment'; 
import AppointmentDetails from './components/AppointmentDetails'; 
import Footer from './components/Footer';
import Signin from './components/Signup';
import Git from './components/Git';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Visitors from './components/Visitors';
import StudentForm from './components/StudentForm';
import AddStudent from './components/AddStudent';
import DisplayStudents from './components/DisplayStudents';
import { Card, CardContent } from '@mui/material';

import Upload from './components/Upload';
import ViewStudents from './components/ViewStudents';
import DeleteStudent from './components/DeleteStudent';
import SendMail from './components/SendMail';
import StudentsQr from './components/StudentsQr';
function App() {
  const contactData = [
    { user: 'Student', phone: '123456789', email: 'student@example.com' },
    { user: 'Faculty', phone: '987654321', email: 'faculty@example.com' },
  ];

  const counsellors = [
    { empid: 7777, name: 'XYZ', des: 'asstp', phone: '789652152', email: 'sdsa@gmail.com', students: 10 },
    { empid: 8888, name: 'PQR', des: 'asstp', phone: '6521563225', email: 'pqr@gmail.com', students: 10 },
    { empid: 9999, name: 'STUV', des: 'asstp', phone: '46321963214', email: 'stuv@gmail.com', students: 10 },
    { empid: 6666, name: 'VW', des: 'asstp', phone: '7123457896', email: 'vw@gmail.com', students: 10 },
    { empid: 5555, name: 'DEF', des: 'app', phone: '789685124', email: 'def@gmail.com', students: 10 },
  ];

  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<MediaCard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/git" element={<Git />} />
        <Route path="/addstudents" element={<StudentForm/>}/>
        <Route path="/insertStudent" element={<AddStudent/>}/>
        <Route path="/viewstudents" element={<ViewStudents/>}/>
        <Route path="/deletestudent" element={<DeleteStudent/>}/>
        <Route path="/displaystudents" element={<DisplayStudents/>}/>
        <Route
          path="/contactus"
          element={
            <div>
              {contactData.map((contact, index) => (
                <Contactus key={index} {...contact} />
              ))}
            </div>
          }
        />
        <Route
          path="/counsellors"
          element={
            <div>
              {counsellors.map((contact, index) => (
                <Counsellors key={index} {...contact} />
              ))}
            </div>
          }
        />
       <Route path="/appointment" element={<Appointment />} />
       <Route path="/appointmentdetails" element={<AppointmentDetails />} />
       <Route path="/visitors" element={<TAF />} />
       <Route path="/uploadcsv" element={<Upload />} />
       <Route path="/sendmail" element={<SendMail />} />
       <Route path="/qr" element={<StudentsQr />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
