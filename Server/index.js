const express = require("express");
const cors = require('cors');
const db = require("./config/db");
const studentRoutes = require('./routes/studentRoutes');
// const authRoutes = require('./routes/authRoutes');
const sendMail = require('./utils/sendMail');
const Student = require('./models/student'); // Import Student model
const multer = require('multer');
const csv = require('csvtojson');
// const sendotp = require('./utils/sendotp');
// const userotp = require('./models/userotp');
// const genotp = require('./utils/generateotp');
// const User = require('./models/User'); // Import User model

const app = express();
const port = 5000;

// Connect to MongoDB
db.once('open', () => {
  console.log('Database connection is open.');
});

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Change this to your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add DELETE method to allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Add other headers as needed
}));

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({
  storage,
});

// Route for uploading CSV files
app.post('/uploadcsv', upload.single("csvFile"), async (req, res) => {
  try {
    const up = await csv().fromFile(req.file.path);
    await Student.insertMany(up);
    console.log("Added to Database");
    return res.send("Added to Database Successfully");
  } catch (error) {
    console.error("Error adding data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Routes
app.use('/student', studentRoutes);
// app.use('/auth', authRoutes);

// Route for fetching student data
app.get('/api/students', (req, res) => {
  Student.find()
    .lean()
    .then(students => res.json(students))
    .catch(error => res.json(error));
});

// Route for sending mail
app.post('/api/sendMail', async (req, res) => {
  const { email, message, subject } = req.body;

  try {
    const sent_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    const mailsubject = subject;
    const textMessage = message;
    await sendMail(mailsubject, textMessage, sent_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Route for sending OTP
app.post('/api/sendotp', async (req, res) => {
  const { semail } = req.body;
  const aotp = genotp();
  try {
    await userotp.create({ email: semail, otp: aotp, createdAt: Date.now() });
    const sent_to = semail;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = semail;
    const rotp = aotp;
    await sendotp(rotp, sent_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "OTP Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Route for verifying OTP
app.post('/api/verifyotp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await userotp.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const storedOtp = user.otp;

    if (otp === storedOtp) {
      // OTP is correct
      await userotp.deleteOne({ email });
      return res.status(200).json({ success: true, message: "OTP verification successful" });
    } else {
      // Incorrect OTP
      return res.status(400).json({ error: "Incorrect OTP" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
