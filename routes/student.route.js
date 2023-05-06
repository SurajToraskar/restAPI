const express=require('express');
const router=express.Router();
const studentController=require('../Controllers/studentControler');


router.post('/',async(req,resp)=>{
    await studentController.studentProfile(req,resp);
})



module.exports=router;