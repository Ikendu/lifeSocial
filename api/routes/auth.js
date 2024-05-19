const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.send(`Welcome to authentication page`);
});

module.exports = router;
