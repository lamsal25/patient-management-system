require('dotenv').config()
const express = require("express");
const app = express();
const PORT = 8080;
const bcrypt = require('bcrypt')
//const jwt = require('jsonwebtoken')

const cors = require("cors");
const { users } = require('./models/database');
app.use(cors())

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }))

// Define routes
app.post("/api/register", async (req, res) => {
    console.log(req.body); // Log the request body to debug

    const { first_name, last_name, email, username, password } = req.body;


    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    try {
        const existingUser = await users.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        await users.create({
            firstName: first_name,
            lastName: last_name,
            username,
            email,
            password: bcrypt.hashSync(password, 10),
        });

        res.json({ message: "Registered successfully" });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ message: "An error occurred during registration" });
    }
});


app.listen(8080)

console.log("server started on :", PORT) 