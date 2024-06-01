const router = require(`express`).Router();
const bcrypt = require(`bcrypt`);
const User = require(`../models/User`);

router.get(`/`, (req, res) => {
  res.send(`Welcome to user page`);
});

//UPDATE USER
router.put(`/:id`, async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
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
  if (req.body.userId === req.params.id || req.body.isAdmin) {
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
router.get(`/:id`, async (req, res) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.body.userId);
    const { password, updatedAt, createdAt, ...others } = user._doc;
    res.status(200).json(others);
  } else {
    return res.status(500).json(`User not found`);
  }
});

//FOLLOW A USER
router.put(`/:id/follow`, async (req, res) => {
  if (req.body.userId === req.params.id) {
    return res.status(403).json(`You cannot follow yourself`);
  } else {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        return res.status(403).json(`You are already following this user`);
      } else {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        return res.status(403).json(`user has been followed`);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  }
});

//UNFOLLOW A USER
router.put(`/:id/unfollow`, async (req, res) => {
  if (req.body.userId === req.params.id) {
    return res.status(403).json(`You cannot unfollow yourself`);
  } else {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        return res.status(200).json(`user has been unfollowed`);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
});

module.exports = router;
