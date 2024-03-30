import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Button, TextField } from '@mui/material';

const App = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState('');
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [updateData, setUpdateData] = useState({
    ID: '',
    name: '',
    course: '',
    cgpa: '',
    mobilenumber: '',
    mail: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/student/getStudents');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      console.log('Updating student with ID:', id);
      console.log('Update data:', updateData); // Log updateData

      // Exclude _id field from updateData
      const { _id, ...updatedDataWithoutId } = updateData;

      await axios.put(`http://localhost:5000/student/${id}`, updatedDataWithoutId);

      setCards(prevCards =>
        prevCards.map(student =>
          student.ID === id ? { ...student, ...updateData } : student
        )
      );

      console.log(`Student with ID ${id} updated successfully`);
      setMessage('Student updated successfully');
    } catch (error) {
      console.error('Error updating student:', error);
      // Handle error, e.g., show error message to the user
    }
  };


  const handleDelete = async (id) => {
    console.log('Deleting student with ID:', id);
    try {
      await axios.delete(`http://localhost:5000/student/delete/${id}`);
      console.log('Student deleted successfully');
      setMessage('Student deleted successfully');
      fetchData();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/student/${searchId}`);
      setSearchResult(response.data);
      setMessage('Student found');
    } catch (error) {
      console.error('Error searching student:', error);
      setMessage('Student not found');
      setSearchResult(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter Student ID"
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
      </div>
      {searchResult ? (
        <Card style={{ margin: '20px', padding: '20px', backgroundColor: 'black', color: 'white' }}>
          <CardContent>
            <h2>Search Result</h2>
            <p>ID: {searchResult.ID}</p>
            <p>Name: {searchResult.name}</p>
            <p>Course: {searchResult.course}</p>
            <p>CGPA: {searchResult.cgpa}</p>
            <p>Mobile Number: {searchResult.mobilenumber}</p>
            <p>Email: {searchResult.mail}</p>
          </CardContent>
        </Card>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {cards.map((card, index) => (
            <Card key={index} style={{ minWidth: 275, backgroundColor: '#f0f0f0', color: '#333', margin: '10px', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 4px 2px rgba(0, 0, 0, 0.14), 0px 8px 3px rgba(0, 0, 0, 0.12)' }}>
              <CardContent>
                <h2>{card.ID}</h2>
                <p>{card.name}</p>
                <p>{card.course}</p>
                <p>{card.cgpa}</p>
                <p>{card.mobilenumber}</p>
                <p>{card.mail}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <Button variant="contained" color="primary" onClick={() => setUpdateData(card)}>Update</Button>
                  <div style={{ width: '10px' }}></div> {/* Add some gap between buttons */}
                  <Button variant="contained" color="primary" onClick={() => handleDelete(card.ID)}>Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {updateData.ID && (
        <div style={{ margin: '20px', backgroundColor: 'white', color: 'white', padding: '20px' }}>
          <h2>Update Student Data</h2>
          <form>
            <TextField name="name" label="Name" value={updateData.name} onChange={handleInputChange} fullWidth />
            <TextField name="course" label="Course" value={updateData.course} onChange={handleInputChange} fullWidth />
            <TextField name="cgpa" label="CGPA" value={updateData.cgpa} onChange={handleInputChange} fullWidth />
            <TextField name="mobilenumber" label="Mobile Number" value={updateData.mobilenumber} onChange={handleInputChange} fullWidth />
            <TextField name="mail" label="Email" value={updateData.mail} onChange={handleInputChange} fullWidth />
            <Button variant="contained" color="primary" onClick={() => handleUpdate(updateData.ID)}>Save Changes</Button>
          </form>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
