const express = require('express');
const { Doctor, Patient } = require('../models/model'); // Import the models

const router = express.Router();

// Create a new doctor
router.post('/doctors/create', async (req, res) => {
  try {
    const { name, qualification, tokensPerDay } = req.body;
    const newDoctor = new Doctor({ name, qualification, tokensPerDay });
    const savedDoctor = await newDoctor.save();
    res.status(200).json(savedDoctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all doctors
router.get('/doctors/getAll', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Registration Route
router.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const patient = new Patient({ username, password });
      await patient.save();
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      res.status(400).json({ message: 'Registration failed', error: error.message });
    }
  });
  
  // Login Route
  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const patient = await Patient.findOne({ username, password });
      if (patient) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Login failed' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Login failed', error: error.message });
    }
  });

// Get all patients
router.get('/patients/getAll', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Implement similar routes for updating and deleting doctors and patients
// ...

module.exports = router;
