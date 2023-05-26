const mongoose = require('mongoose');
const Attendance = require('../Models/attendance/attendance');

const studentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true },
  name: { type: String, required: true },
  attendance: [{
    date: { type: String, required: true },
    present: { type: Boolean, required: true }
  }]
});

// Define a Mongoose model for student
const Student = mongoose.model('Students', studentSchema);
const course1 = mongoose.model('course1', studentSchema);


exports.createCollection = async (req, resp) => {
    try {
        // Get the name parameter from the URL
        const name = req.params.name;
    
        // Create a new collection with the name parameter
        const result = await mongoose.connection.db.createCollection(name);
    
        // Send a response with the result of the command
        resp.status(200).json(result);
      } catch (err) {
        // Send an error message if something goes wrong
        resp.status(500).json({message: err.message});
      }
  };

  // Add a list of students to the collection
  exports.addstudents = async (req, res) => {
    const collectionName = req.params.name;
    const students = req.body.students;

    try {
      // Find the Mongoose model for the specified collection
      const Collection = mongoose.model(collectionName, studentSchema,collectionName);
  
      // Add the students to the existing collection
      Collection.insertMany(students)
      .then((docs) => {
        console.log('Inserted:', docs);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
    
  
      return res.status(200).json({ message: 'Students added successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred' });
    }

    
   };


  exports.markattendance = async (req, resp) => {
    // Get the collection name from the request params
  const { con } = req.params;

  // Get the student roll number and date from the request body
  const { srollnum, date } = req.body;

  // Validate the input
  if (!srollnum || !date) {
    return resp.status(400).send('Missing roll number or date');
  }
  // const db = mongoose.connection.db;
  // Access the collection using the db object and the bracket notation
  // const Attendance = mongoose.connection.db.getcollection(con);

  // Find the attendance document by roll number
  const attendance = await Attendance.findOne({ srollnum });

  // Check if the document exists
  if (!attendance) {
    return resp.status(404).send('No attendance record found for this roll number');
  }

  // Update the day field to the date and set it to true
  attendance[date] = true; 

  // Save the document
  await attendance.save();

  // Send a success response
  resp.status(200).send('Attendance updated successfully');

  };
