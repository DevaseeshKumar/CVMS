const Student = require('../models/student');
const mongoose = require('mongoose');

exports.createStudent = async (req, res) => { 
  try { 
    const studentData = req.body; 
    const newStudent = new Student(studentData); 
    await newStudent.save(); 
    res.status(201).json({ msg: newStudent }); 
  } catch (error) { 
    res.status(500).json({ message: 'Error creating student', error: error.toString() }); 
  } 
}; 
 
exports.getStudents = async (req, res) => { 
  try { 
    const students = await Student.find({}, { _id: 0 }); // Exclude _id field
    res.json(students); 
  } catch (error) { 
    res.status(500).json({ message: 'Error fetching students', error: error.toString() }); 
  } 
}; 

 
exports.getStudentById = async (req, res) => { 
  try { 
    const studentId = req.params.id;
    const student = await Student.findOne({ ID: studentId }); 
    if (!student) { 
      res.status(404).json({ message: 'Student not found' }); 
    } else { 
      res.json(student); 
    } 
  } catch (error) { 
    res.status(500).json({ message: 'Error fetching student by ID', error: error.toString() }); 
  } 
}; 

exports.updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedData = req.body;
    console.log(typeof studentId)
    console.log(studentId)
    console.log(updatedData)

    // Validate if the provided ID is a valid ObjectId
    stu = await Student.findOne({ID:studentId})
    console.log(stu)
    if (!stu) {
      return res.status(400).json({ message: 'Invalid student ID' });
    }

    const student = await Student.findOneAndUpdate({ ID: studentId }, updatedData, { new: true });
    console.log(student);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

res.json(student);

  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ message: 'Error updating student', error: error.toString() });
  }
};


exports.deleteStudent = async (req, res) => { 
  try { 
    const studentId = req.params.id; 
    const temp = await Student.findOne({ID:studentId})
    // console.log(temp)
    if (!temp) {
      return res.status(400).json({ message: 'Invalid student ID' });
    }

    const deletedStudent = await Student.findOneAndDelete({ ID: studentId });
    // console.log(deletedStudent);
    if (!deletedStudent) { 
      res.status(404).json({ message: 'Student not found' }); 
    } else { 
      res.json({ message: 'Student deleted successfully' }); 
    } 
  } catch (error) { 
    res.status(500).json({ message: 'Error deleting student', error: error.toString() }); 
  } 
};