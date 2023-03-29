let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema({
  name: { type: String, required: true },
});

let Religion = mongoose.model("religions", schema);

module.exports = Religion;

