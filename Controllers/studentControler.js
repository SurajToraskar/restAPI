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