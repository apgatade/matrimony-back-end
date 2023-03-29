
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {        
        // businessid : { type : Schema.Types.ObjectId, ref : "business" },
        planname: {type:String , required:true},
        amount: {type:String , required:true},
        duration: {type:String , required:true},
        profileviews: {type:String , required:true},
    }
)

let Businessplan = mongoose.model("businessplans",schema);

module.exports = Businessplan;
