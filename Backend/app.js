require('dotenv').config()
const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const { medicalHistories, patients } = require('./models/database');

app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true // Allow cookies to be sent with requests
}));

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }))

const authRoute = require('./routes/authRoute')
const patientRoute = require('./routes/patientRoute')

app.use('', authRoute)
app.use('', patientRoute)


 

app.listen(8080)
console.log("server started on :", PORT) 