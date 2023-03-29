let express = require("express");
let mongoose = require("mongoose")
let bodyparser = require("body-parser");
let Businesspay = require("../models/Businesspay");


let router = express.Router();

router.post("/", (req, res) => {
    let body = req.body;
      
    let object = new Businesspay(body);

    object.save().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }).catch(err => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    })


});

router.put("/:id", (req, res) => {
    let body =req.body;
    let id = req.params.id;
    Businesspay.findByIdAndUpdate(id,body).then(result => {
        res.end(JSON.stringify({ status: "success", data: result }))
         
     }).catch(err => {
         res.end(JSON.stringify({ status: "failed", data: err }))
     })
});

router.get("/", (req, res) => {
    Businesspay.find().populate({path: "businessid"}).populate({path: "planid"}).sort({name:1}).then(result => {
        res.end(JSON.stringify({status : "success", data : result}));
 
    }).catch(err => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    })

});

router.get("/:id", (req, res) => {
    let id = req.params.id;
        // console.log(id);

        Businesspay.findById(id).then((result)=>{
            res.end(JSON.stringify({status:"success",data:result}));
        },(err)=>{
            res.end(JSON.stringify({status:"failed",data:"Record Not Found"}));
        })
});



router.delete("/:id", (req, res) => {
   let id = req.params.id;
    //    console.log(id);
    Businesspay.findByIdAndDelete(id).then(result => {
       res.end(JSON.stringify({ status: "success", data: result }))
        
    }).catch(err => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    })
});


module.exports = router;