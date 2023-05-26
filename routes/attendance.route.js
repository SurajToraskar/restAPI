const express=require('express');
const router=express.Router();
const attendanceController=require('../Controllers/attendanceController');


// router.post('/markattendance/:con',async(req,resp)=>{
//     await attendanceController.markattendance(req,resp);
// })

router.post('/addstudents/:name',async(req,resp)=>{
    await attendanceController.addstudents(req,resp);
})

router.get('/createCollection/:name',async(req,resp)=>{
    await attendanceController.createCollection(req,resp);
})



module.exports=router;