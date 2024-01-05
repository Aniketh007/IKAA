const mongoose = require('mongoose');

// Connect to the MongoDB server
mongoose.connect('mongodb://localhost:27017/mainDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to mainDatabase');
}).catch((error) => {
  console.error('Error connecting to mainDatabase:', error);
});

// Define schemas for different databases
const patientSchema = new mongoose.Schema({
  firstname: String,
  surname: String,
  username: String,
  gender: String,
  problemDiagnosed: String,
  mobileNumber: String,
  country: String,
  email: String,
  password: String,
  confirmPassword: String,
  // Patient schema fields
});

const doctorSchema = new mongoose.Schema({
  // Doctor schema fields
  firstname: String,
  surname: String,
  username: String,
  id: String,
  gender: String,
  expertise: String,
  mobileNumber: String,
  country: String,
  email: String,
  password: String,
  confirmPassword: String,
});

const adminSchema = new mongoose.Schema({
  // Admin schema fields
  firstname: String,
  surname: String,
  username: String,
  id: String,
  gender: String,
  email: String,
  password: String,
  confirmPassword: String,
});

const reportSchema = new mongoose.Schema({
  patient: String,
  doctor: String,
  age: String,
  gender: String,
  mobileNumber: String,
  files: {
    data: Buffer,
    contentType: String,
  },
})

// Use different connections for different databases
const Patient = mongoose.model('Patient', patientSchema, 'patientCollection');
const Doctor = mongoose.model('Doctor', doctorSchema, 'doctorCollection');
const AdminL = mongoose.model('AdminL', adminSchema, 'adminCollection');
const Report = mongoose.model('Report', reportSchema,'reportCollection');

module.exports = { Patient, Doctor, AdminL, Report };
