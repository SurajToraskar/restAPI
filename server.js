require('./Configuration/mongodbConfig/config.js');
const express=require('express');
const fileUpload = require('express-fileupload'); 
const assignmentRoute=require('./routes/assignment.routes.js');
//<<<<<<< main
const profileRoute=require('./routes/teacherProfile.routes.js');
const studentRoute = require('./routes/studentProfile.routes.js');
//=======
const qpaperRoute=require('./routes/qpaper.routes.js');
const notesRoute=require('./routes/notes.routes.js')
const profileRoute=require('./routes/teacherProfile.routes.js')
//>>>>>>> master
const port=8000;
const app=express();

app.use(fileUpload({
    useTempFiles: true
}));


app.use(express.json());

app.use('/assignment',assignmentRoute);
app.use('/teacherProfile',profileRoute);
//<<<<<<< main
app.use('/studentProfile',studentRoute);
app.get('/',(req,res)=>{
    res.send('Yooo im working!!!')
})
//=======
app.use('/qpaper',qpaperRoute);
app.use('/notes',notesRoute);

//>>>>>>> master

app.listen(port,()=>{console.log(`Listening to port ${port} `)})