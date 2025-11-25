const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes whitespace from both ends of a string
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email addresses are unique
    lowercase: true, // Converts email to lowercase before saving
  },
  age: {
    type: Number,
    min: 0, // Age cannot be negative
  },
  createdAt: {
    type: Date,
    default: Date.now, // Sets default to current date/time
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
