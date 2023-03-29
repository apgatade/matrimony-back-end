let mongoose = require("mongoose");
let Schema = mongoose.Schema

let schema = new Schema({

    businessid: { type : Schema.Types.ObjectId, ref :"businesses"},
    planid: { type : Schema.Types.ObjectId, ref :"plans"},
    paymentdate: {type : Date, required : true},
    amount: {type : String, required : true},
    paymentmethod: {type : String, required : true},

})
let Businesspay = mongoose.model("businesspay" , schema);

module.exports = Businesspay;