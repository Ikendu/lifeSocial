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
    req.status(500).json(error);
  }
});

// UPDATE A POST

// DELETE A POST

// LIKE A POST

// GET USER TIMELINE POST

module.exports = router;
