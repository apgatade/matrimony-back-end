let express = require('express');
let mongoose = require('mongoose');
let Profilebusinessplan = require("../models/Profilebusinessplan");



let router = express.Router();

router.post("/",(req,res)=>{
    let body = req.body;
    let profilebusinessplan= new Profilebusinessplan(body)
     profilebusinessplan.save().then((result)=>{
     res.end(JSON.stringify({status:"success", data:result}))
   },(err)=>{
    res.end(JSON.stringify({status:"failed", data:err}))
   })
})

router.put("/:id",(req,res)=>{
    let body = req.body;
    Profilebusinessplan.findByIdAndUpdate(req.params.id, body).then((result)=>{
     res.end(JSON.stringify({status:"success", data:result}))
   },(err)=>{
    res.end(JSON.stringify({status:"failed", data:err}))
   })
  })
    

router.get("/",(req,res)=>{
  Profilebusinessplan.find().then((result)=>{
    res.end(JSON.stringify({status:"success", data:result}))
  },(err)=>{
   res.end(JSON.stringify({status:"failed", data:err}))
  })
})


router.get("/:id",(req,res)=>{
    let id = req.params.id;
    // console.log(id);
   Profilebusinessplan.findById(id).then((result)=>{
      res.end(JSON.stringify({status:"success", data:result}))
    },(err)=>{
   res.end(JSON.stringify({status:"failed", data:"record not found"}))
   })
 })


router.delete("/:id",(req,res)=>{
    let id = req.params.id;
   Profilebusinessplan.findByIdAndDelete(id).then((result)=>{
    res.end(JSON.stringify({status:"success", data:result}))
  },(err)=>{
   res.end(JSON.stringify({status:"failed", data:err}))
  })  
})




module.exports = router;