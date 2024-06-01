const router = require(`express`).Router();
const Post = require(`../models/Post`);

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

module.exports = router;
