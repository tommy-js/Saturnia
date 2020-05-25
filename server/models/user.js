const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  username: String,
  password: String,
  salt: String,
  friends: [{ id: Number, name: String }],
  teammates: [{ id: Number, name: String }],
  tasks: [{ id: Number, content: String }],
  projects: [{ id: Number, content: String, title: String, timestamp: Number }],
  usersettings: [{ savedata: Boolean }]
});

module.exports = mongoose.model("User", userSchema);
