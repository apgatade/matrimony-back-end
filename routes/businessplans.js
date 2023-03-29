
let express = require("express");
let Businessplan = require("../models/Businessplan");

let router = express.Router();

router.post("/", (req,res)=>{
    let body = req.body;
    // console.log(body);
    let object = new Businessplan(body);

    object.save().then(result=>{
        res.end(JSON.stringify({status:"success",data:result}));
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed",data:err}))
    })
})

router.put("/:id",(req,res)=>{
    let id = req.params.id;
    let body = req.body;

    Businessplan.findByIdAndUpdate(id,body).then(result=>{
        res.end(JSON.stringify({status:"success",data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed",data:err}))
    })
})

router.get("/",(req,res)=>{
    Businessplan.find().sort({name:1}).then(result =>{
        if(result.length > 0){
            res.end(JSON.stringify({status:"success",data:result}));
        }
        else{
            res.end(JSON.stringify({status:"failed",dat:"Record not found"}));
        }
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    })
})

router.get("/:id",(req,res)=>{
    let id = req.params.id;
    
    Businessplan.findById(id).then(result=>{
        res.end(JSON.stringify({status:"success",data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    })
})

router.delete("/:id",(req,res)=>{
    let id = req.params.id;

    Businessplan.findByIdAndDelete(id).then(result=>{
        res.end(JSON.stringify({status:"success",data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    })
})

module.exports = router;
