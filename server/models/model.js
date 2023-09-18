const mongoose = require('mongoose');

// Schema for doctors
const doctorSchema = new mongoose.Schema({
  name: String,
  qualification: String,
  tokensPerDay: Number,
});

// Schema for patients
const patientSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Doctor = mongoose.model('Doctor', doctorSchema);
const Patient = mongoose.model('Patient', patientSchema);

module.exports = {
  Doctor,
  Patient,
};
