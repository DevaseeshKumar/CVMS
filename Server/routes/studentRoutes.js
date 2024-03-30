// Backend: routes/student.js

const express = require('express'); 
const router = express.Router(); 
const studentController = require('../controllers/studentController');

router.post('/createStudent', studentController.createStudent); 
router.get('/getStudents', studentController.getStudents); 
router.get('/:id', studentController.getStudentById); 
router.put('/:id', studentController.updateStudent);
router.delete('/delete/:id', studentController.deleteStudent); 

module.exports = router;