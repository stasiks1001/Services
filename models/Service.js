const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      maxlength: 50,
    },
    information: {
      type: String,
      maxlength: 1000,
    },
    skill: {
      type: String,
      maxlength: 100,
    },
    serviceProvider: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
);

module.exports = mongoose.model("Service", ServiceSchema);
