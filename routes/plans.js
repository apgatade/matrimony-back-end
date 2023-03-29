let express = require("express");
let Plan = require("../models/Plan");
let router = express.Router();


router.post("/",(req,res)=>{
    let body = req.body;
    // console.log(body)

    let object = new Plan(body);
    object.save().then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));

    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err})); 
    })

});

router.put("/:id", (req,res)=>{
    let id = req.params.id;
    // console.log(id);
    let body = req.body;
    // console.log(body)

    Plan.findByIdAndUpdate(id,body).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
});

router.get("/", (req,res)=>{

    Plan.find().sort({name:1}).then(result=>{
        if(result.length > 0){
            res.end(JSON.stringify({status : "success", data : result}));
        }
        else{
        res.end(JSON.stringify({status : "failed", data : "Record not found"}));        
        }
        
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
 
});

router.get("/:id",(req,res)=>{
    let id = req.params.id;

    Plan.findById(id).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));

    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : "Record not found"}));        
    })
});

router.delete("/:id",(req,res)=>{
    let id = req.params.id;

    Plan.findByIdAndDelete(id).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));

    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
})


module.exports = router;