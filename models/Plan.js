let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        name : { type : String , required : true },
        duration : { type : String , required : true},
        amount : { type : Number , required : true}

    }
)

let Plan = mongoose.model("plans",schema);

module.exports = Plan;