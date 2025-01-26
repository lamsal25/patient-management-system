const { users} = require('../models/database');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Define routes
exports.register =  async (req, res) => {
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
};




/// Login ////
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(req.body)
    const user = await users.findOne({ where: { email } });

    if (!user) {
      return res.json({
        message: "No email registerd"
      })
    }

    const isMathched = bcrypt.compareSync(password, user.password)

    if (isMathched) {
      const token = jwt.sign({ id: user.id, username: user.username, }, process.env.PRIVATEKEY, {
        expiresIn: '10'

      })
      console.log("generated token: ", token)
      res.cookie('sessionid', token, {
        httpOnly: true,
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 60 * 60 * 1000
      })
      res.json({
        message: 'login success'
      })
    } else {
      res.json({
        message: "Incorrect password"
      })
    }

  } catch (error) {
    console.error("Error during Login")
    res.status(500).json({ message: "Error occured during Login" })
  }
}


//handle logout 
exports.logout = async (req,res)=>{
  console.log(req.body)
  res.clearCookie('sessionid' )
  return res.status(200).json({ message: 'Logout successful' });
}
