const bcrypt = require(`bcrypt`);
const User = require("../models/User");

const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.send(`Helo authentic`);
});

router.post(`/register`, async (req, res) => {
  try {
    //generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and return response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.post(`/login`, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json(`user not found `);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

//Not usable in real life, creating from backend
//   const user = await new User({
//     username: `lifeness`,
//     email: `life@gmail.com`,
//     password: `11111234Aa`,
//   });
//   await user.save();
//   res.send(`User created`);
