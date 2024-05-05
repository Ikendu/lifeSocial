const User = require("../models/User");

const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.send(`Helo authentic`);
});

router.post(`/register`, async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const user = await newUser.save();
    res.status(200).json(user);
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
