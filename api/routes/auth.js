const router = require(`express`).Router();
const User = require(`../models/User`);
const bcrypt = require(`bcrypt`);

//REGISTER NEW USER
router.post(`/register`, async (req, res) => {
  try {
    //generate salt and create new password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    //save user details to database
    const getter = await newUser.save();
    res.status(200).json(getter);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN USER
router.post(`/login`, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json(`Not found`);

    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    // console.log(req.body.password, user.password);
    // console.log(validPassword);
    !validPassword && res.status(400).json(`Wrong Password`);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//Register a user
// router.get(`/register`, async (req, res) => {
//   const user = new User({
//     username: `David`,
//     email: `asd@gmail.com`,
//     password: `asdasd`,
//     city: `Nsukka`,
//     state: `Enugu`,
//   });
//   await user.save();
//   res.send(user);
// });

module.exports = router;
