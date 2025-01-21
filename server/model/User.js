const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  uploadedAt: {
    type: Date,
    default: Date.now, // Timestamp for when the image is uploaded
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;