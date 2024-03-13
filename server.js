const express = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all origins
app.use(cors());

// Create database connection
const connection = mysql.createConnection({
  host: '119.18.49.27',
  user: 'vivekan1_dgpuser',
  password: 'JSp=WCdg)2MB',
  database: 'vivekan1_dgp',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to DB:', err);
    return;
  }
  console.log('Connected to DB');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Define API endpoints
app.post('/api/submitForm', (req, res) => {
    const { name, email, phoneNumber, instituteName } = req.body;
  
    // Insert form data into DB
    const sql = 'INSERT INTO contact_form (name, email, phone_number, institute_name) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, email, phoneNumber, instituteName], (err, result) => {
      if (err) {
        console.error('Error inserting data into DB:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      console.log('Data inserted into DB:', result);
      res.status(200).json({ message: 'Data inserted successfully' });
  
      // Send email notification
      sendEmailNotification(name, email, phoneNumber, instituteName);
    });
  });
  

// Function to send email notification
function sendEmailNotification(name, email, phoneNumber, instituteName) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'demysoftwaresolutions@gmail.com',
      pass: 'Demy@1234',
    },
  });
  const mailOptions = {
    from: 'demysoftwaresolutions@gmail.com',
    to: 'vivek.nrt@gmail.com',
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nInstitute Name: ${instituteName}`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
      return;
    }
    console.log('Email sent:', info.response);
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});