const router = require(`express`).Router();
const User = require(`../models/User`);
//Register a user
router.get(`/register`, (req, res) => {
  const user = new User({
    username: `David`,
    email: `asd@gmail.com`,
    password: `asdasd`,
    city: `Nsukka`,
    state: `Enugu`,
  });
  res.send(user);
});

module.exports = router;
