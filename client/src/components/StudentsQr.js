import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

const StudentQr = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/student/getStudents');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="students-container">
            {students.map((student) => (
                <div key={student._id} className="student-card">
                    <h3>{student.name}</h3>
                    <QRCode value={JSON.stringify(student)} />
                    <h6>Course: {student.course}</h6>
                    <h6>CGPA: {student.cgpa}</h6>
                    <h6>Email: {student.mail}</h6>
                </div>
            ))}
        </div>
    );
};

export default StudentQr;
