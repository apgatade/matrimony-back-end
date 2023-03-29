let mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        businessid:{type:String} ,
        profileid:{type:String} ,
        amount:{type:Number},
        activatedate:{type:Date},
        expirydate:{type:Date},
        status:{type:Boolean}
    }
)

let Profilebusinessplan = mongoose.model("profilebusinessplan", schema);

module.exports = Profilebusinessplan;