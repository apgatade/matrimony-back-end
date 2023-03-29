let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema({
  srno: { type: Number, required: true },
  name: { type: String, required: true }

});


let Relation = mongoose.model("relations", schema);

module.exports = Relation;
