const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const EmployeeModel = require("./models/Employees");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Employee")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Register route
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate required fields
  if (!username || !email || !password) {
    return res.status(400).json({ status: 'error', message: 'All fields are required.' });
  }

  try {
    // Check if user already exists
    const existingUser = await EmployeeModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: 'error', message: 'User already exists, please use a different email or username.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = new EmployeeModel({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      user: { username: newUser.username, email: newUser.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'Server error.' });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res.status(400).json({ status: 'error', message: 'Email and password are required.' });
  }

  try {
    const user = await EmployeeModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ status: 'error', message: 'No record found with that email.' });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ status: 'error', message: 'The password is incorrect.' });
    }

    res.status(200).json({ status: 'success', message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'Server error.' });
  }
});

// Start server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
