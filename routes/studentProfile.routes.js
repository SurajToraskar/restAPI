const express = require('express');
const router = express.Router();
const adminController=require('../Controllers/adminController');


router.post('/',async(req,resp)=>{
    await adminController.studentProfile(req,resp);
})


router.get('/',async(req,resp)=>{
    await adminController.getStudentImages(req,resp);
})
router.get('/:id',async(req,resp)=>{
    await adminController.getStudentImage(req,resp);
})

router.delete('/:id',async(req,resp)=>{
    await adminController.deleteStudentImage(req,resp);
})
module.exports=router;