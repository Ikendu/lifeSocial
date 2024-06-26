const router = require(`express`).Router();
const Post = require(`../models/Post`);
const User = require(`../models/User`);

// router.get(`/`, (req, res) => {
//   res.send(`Post Done`);
// });

//CREATE A POST
router.post(`/`, async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE A POST
router.put(`/:id`, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json(`Post updated successfully`);
    } else {
      res.status(403).json(`You can only update your post`);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE A POST
router.delete(`/:id`, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json(`Post deleted`);
    } else {
      res.status(403).json(`You can only delete your post`);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// LIKE AND UNLIKE A POST
router.put(`/:id/like`, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.likes.includes(req.body.userId)) {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json(`You have unlike the post`);
    } else {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json(`You like the post`);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USER TIMELINE POST
router.get(`/timeline/:userId`, async (req, res) => {
  const currentUser = await User.findById(req.params.userId);

  const userPosts = await Post.find({ userId: currentUser._id });
  console.log(userPosts);
  const friendsPosts = await Promise.all(
    currentUser.followings.map((friendId) => {
      return Post.find({ userId: friendId });
    })
  );
  let postList = userPosts.concat(...friendsPosts);
  res.status(200).json(postList);
});

module.exports = router;
