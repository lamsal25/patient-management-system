require('dotenv').config()
const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const { medicalHistories, patients, payments } = require('./models/database');

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


app.post("/api/payment", async (req, res) => {
  console.log("data", req.body);
  const { name, age, gender, address, email, phone, amount } = req.body
  try {
    const data = await payments.create({
      name,
      age,
      gender,
      address,
      email,
      phone,
      amount
    }) 
    console.log("Appointment added successfully")
    console.log(data)
    const id = data.id
    console.log("pid:", id)
    return res.status(200).json({ message: "Appointment success", id: data.id });

  }
  catch (error) {
    console.log("error adding appointment info", error)
  }

})

app.put("/api/paymentStatus", async (req, res) => {
  console.log(req.body)
  const { status, transaction_id, id } = req.body;
  try {
    // Find the payment record using email (or phone if preferred)
    const payment = await payments.findOne({ where: { id } });

    if (!payment) {
      return res.status(404).json({ error: "Pending payment not found" });
    }

    // Update the payment record with transaction ID and status
    await payment.update({ transaction_id, status });

    console.log("Payment status updated successfully");
    res.status(200).json({ message: "Payment status updated successfully" });
  } catch (error) {
    console.error("Error updating payment status:", error);
    res.status(500).json({ error: "Internal server error" });
  }

})

app.listen(8080)
console.log("server started on :", PORT) 