const mongoose = require(`mongoose`);

const UserSchema = new mongoose.Schema({
  username: { type: String, min: 3, max: 20, unique: true, require: true },
  password: { type: String, min: 6, require: true },
  email: { type: String, max: 50, require: true },
  age: { type: Number },
  isAdmin: { type: Boolean, default: false },
  profilePicture: { type: String, default: `` },
  coverPicture: { type: String, default: `` },
  city: { type: String },
  state: { type: String },
  followers: { type: Array, default: [] },
  followins: { type: Array, default: [] },
});

const UserModel = mongoose.model(`User`, UserSchema);

module.exports = UserModel;