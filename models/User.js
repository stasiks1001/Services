const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please email name"],
    maxlength: 20,
    minlength: 5,
  },
  email: {
    type: String,
    required: [true, "Please give email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please give a valid email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please give password"],
    minlength: 5,
  },
});


module.exports = mongoose.model("User", UserSchema);
