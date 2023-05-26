const express=require('express');
const router=express.Router();
const studentController=require('../Controllers/studentControler');


router.post('/',async(req,resp)=>{
    await studentController.studentProfile(req,resp);
})
router.get('/:id',async(req,resp)=>{
    await studentController.studentList(req,resp);
})



module.exports=router;