const router = require(`express`).Router();
const bcrypt = require(`bcrypt`);
const User = require("../models/User");

router.get(`/`, (req, res) => {
  res.send(`Welcome User`);
});

//update a user
router.put(`/:id`, async (req, res) => {
  if (req.body.userId == req.params.id || req.user.isAdmin) {
    try {
      const salt = await bcrypt.genSalt(10);
      req.body.pin = await bcrypt.hash(req.body.pin, salt);
    } catch (error) {
      res.status(500).json(error);
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(`Account Update successful`);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(403).json(`You can only update your account`);
  }
});

//delete a user

module.exports = router;
