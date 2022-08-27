const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, minLength: 3, maxLength: 24, required: true},
  password: {type: String, minLength: 8, required: true},
  email: {type: String, required: true}
});

module.exports = mongoose.model("userModel", userSchema);
