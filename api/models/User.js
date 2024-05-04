const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  profilePicture: {
    type: String,
    default: ``,
  },
  coverPicture: {
    type: String,
    default: ``,
  },
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
});

const UserModel = model(`User`, UserSchema);

module.exports = UserModel;
