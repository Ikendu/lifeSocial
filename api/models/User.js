const mongoose = require(`mongoose`);

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, min: 3, max: 20, unique: true, require: true },
    password: { type: String, min: 6, require: true },
    email: { type: String, max: 50, require: true },
    age: { type: Number },
    isAdmin: { type: Boolean, default: false },
    profilePicture: { type: String, default: `` },
    coverPicture: { type: String, default: `` },
    description: { type: String, max: 100 },
    city: { type: String, default: `` },
    from: { type: String, default: `` },
    followers: { type: Array, default: [] },
    followings: { type: Array, default: [] },
    relationship: { type: Number, enum: [1, 2, 3] },
  },
  { timestamps: true }
);

const UserModel = mongoose.model(`User`, UserSchema);

module.exports = UserModel;
