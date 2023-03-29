let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema({
  name: { type: String, required: true },
  religionid: { type: Schema.Types.ObjectId, ref: "religions" },
});

let Subreligion = mongoose.model("subreligions", schema);

module.exports = Subreligion;
