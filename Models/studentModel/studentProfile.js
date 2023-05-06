const mongoose = require('mongoose');

// Define the student schema
const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  gender: String,
  dateOfBirth: Date,
  phoneno: String,
  email: String,
  address: String
});

// Create the student model
const Student = mongoose.model('Student', studentSchema);

// Export the student model
module.exports = Student;
