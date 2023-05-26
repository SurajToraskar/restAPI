require('./Configuration/mongodbConfig/config.js');
const express=require('express');
const fileUpload = require('express-fileupload'); 
const assignmentRoute=require('./routes/assignment.routes.js');
const qpaperRoute=require('./routes/qpaper.routes.js');
const notesRoute=require('./routes/notes.routes.js')
const profileRoute=require('./routes/teacherProfile.routes.js')
const studentRoute=require('./routes/student.route.js')
const attendanceRoute=require('./routes/attendance.route.js')
const port=8000;
const app=express();

app.use(fileUpload({
    useTempFiles: true
}));


app.use(express.json());

app.use('/assignment',assignmentRoute);
app.use('/teacherProfile',profileRoute);
app.use('/qpaper',qpaperRoute);
app.use('/notes',notesRoute);
app.use('/studrntProfile',studentRoute);
app.use('/attendance',attendanceRoute);




app.listen(port,()=>{console.log(`Listening to port ${port} `)})