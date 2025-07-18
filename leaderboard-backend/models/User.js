// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  points: { type: Number, default: 0 },
});

// ✅ This prevents OverwriteModelError
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
