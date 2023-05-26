const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  sname: { type: String, required: true }, // student name
  srollnum: { type: String, required: true }, // student roll number
  day1: { type: Boolean, default: false }, // attendance for day 1
  day2: { type: Boolean, default: false }, // attendance for day 2
  day3: { type: Boolean, default: false }, // attendance for day 3
  day4: { type: Boolean, default: false }, // attendance for day 4
  day5: { type: Boolean, default: false }, // attendance for day 5
});

// Export the attendance model
module.exports = mongoose.model('Attendance', attendanceSchema);
