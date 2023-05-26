const student=require('../Models/studentModel/studentProfile');
exports.studentProfile = async (req, resp) => {
    // Create a new student object with the request data
    const data = new student({
      name: req.body.name,
      phoneno: req.body.phoneno,
      gender: req.body.gender,
      birthdate: req.body.birthdate,
      department_id: req.body.department_id,
      email: req.body.email,
      address: req.body.address,
    });
  
    // Save the student object to the database
    try {
      const datasave = await data.save();
      // Send a success response with the saved data
      resp.status(200).json(datasave);
    } catch (error) {
      // Send an error response with the error message
      resp.status(500).send(error.message);
    }
  };
  exports.studentList = async (req, resp) => {
    try {
      // Use the exec() method to return a promise and await it
      const data = await student.findById(req.params.id);
      // Send a JSON response with the data
      resp.json(data);
    } catch (err) {
      // Handle errors
      console.error(err);
      // Send an error response with a status code and a message
      resp.status(500).json({message: 'Something went wrong'});
    }
  };