let express = require("express");
let Business = require("../models/Business");
let fs = require("fs");
let router = express.Router();

router.post("/", (req,res)=>{
    let body = req.body;
    let object = new Business();
    object.name = body.name;
    object.ownername = body.ownername;
    object.address = body.address;
    object.townid = body.townid;
    object.tagline = body.tagline;
    object.email = body.email;
    object.mobileno = body.mobileno;
    object.password = body.password;
    object.website = body.website;
    object.accountopeningdate = body.accountopeningdate;
    object.accountexpdate = body.accountexpdate;
    object.status = body.status;
    
    let logo = body.logopath;
    if(logo != ""){
        let filename = (Math.random() + 1).toString(36).substring(7);
        logo = logo.split(",").pop();
        fs.writeFileSync("assets/logo/"+ filename +".png", logo, 'base64')
        object.logopath = "logo/" + filename + ".png";
    }
    
    object.save().then(result=>{
        res.end(JSON.stringify({ status : "success", data : result}))
    }).catch(err=>{
        res.end(JSON.stringify({ status : "failed", data : err}))

    })
})

// router.put("/:id", (req,res)=>{
//     let id = req.params.id;
//     // console.log(id);
//     let body = req.body;

//     Business.findByIdAndUpdate(id,body).then(result=>{
//         res.end(JSON.stringify({status : "success", data : result}));
//     }).catch(err=>{
//         res.end(JSON.stringify({status : "failed", data : err}));        
//     })
// })

router.put("/:id", (req,res)=>{
    let id = req.params.id;
    // console.log(id);
    let body = req.body;

    let object = new Object();
    object.name = body.name;
    object.ownername = body.ownername;
    object.address = body.address;
    object.townid = body.townid;
    object.tagline = body.tagline;
    object.email = body.email;
    object.mobileno = body.mobileno;
    object.password = body.password;
    object.website = body.website;
    object.accountopeningdate = body.accountopeningdate;
    object.accountexpdate = body.accountexpdate;
    object.status = body.status;
    
     let logo = body.logopath;
    // console.log(logo.includes("png"));
    if(logo.includes("png") == true){
        object.logopath = body.logopath;
    }
    else if(logo != ""){
        let filename = (Math.random() + 1).toString(36).substring(7);
        logo = logo.split(",").pop();
        fs.writeFileSync("assets/logo/"+ filename +".png", logo, 'base64')
        object.logopath = "logo/" + filename + ".png";
    }

 
    // console.log(object);
    Business.findByIdAndUpdate(id,object).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{

        res.end(JSON.stringify({status : "failed", data : err}));        
    })
})

router.get("/", (req,res)=>{
    Business.find().sort({name:1}).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })

})

router.get("/:id", (req,res)=>{
    let id = req.params.id;
    Business.findById(id).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : "Record not found"}));        
    })
})

router.delete("/:id", (req,res)=>{
    let id = req.params.id;
    Business.findByIdAndDelete(id).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
})



module.exports = router;