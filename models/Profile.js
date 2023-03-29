let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema({
    name : {type:String, required:true ,  unique:true},
    gender : {type:String, required:true},
    birthdate : {type:String , required:true},
    // religionid :{type:String , required:true},
    // subreligionid : {type:String , required:true},
    religionid : { type : Schema.Types.ObjectId, ref : "religions" },
    subreligionid : { type : Schema.Types.ObjectId, ref :"subreligions" },
    crossmarriage : {type:String , required:true},
    marriagestatus : {type:String , required:true}

})
let Profile = mongoose.model("profiles",schema);

module.exports = Profile;