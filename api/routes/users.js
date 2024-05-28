const router = require(`express`).Router();
const bcrypt = require(`bcrypt`);
const User = require(`../models/User`);

router.get(`/`, (req, res) => {
  res.send(`Welcome to user page`);
});

//UPDATE USER
router.put(`/update/:id`, async (req, res) => {
  if (req.body.userId === req.params.id || req.user.isAdmin) {
    if (req.body.passord) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.passord = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(`User has been updated`);
    } catch (error) {
      return res.status(500).json(`Not updated`);
    }
  } else {
    return res.status(403).json(`You can only update you account`);
  }
});

//DELETE USER
router.delete(`/:id`, async (req, res) => {
  if (req.body.userId === req.params.id || req.user.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(`User has been deleted`);
    } catch (error) {
      return res.status(401).json(`user not found`);
    }
  } else {
    return res.status(500).json(`You can only delete your account`);
  }
});

//GET A USER

//FOLLOW A USER

//UNFOLLOW A USER

module.exports = router;
