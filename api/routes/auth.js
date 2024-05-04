const User = require("../models/User");

const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.send(`Helo authentic`);
});

router.get(`/register`, async (req, res) => {
  const user = await new User({
    username: `lifeness`,
    email: `life@gmail.com`,
    password: `11111234Aa`,
  });
  await user.save();
  res.send(`User created`);
});

module.exports = router;
