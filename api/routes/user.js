const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.send(`Welcome User`);
});

module.exports = router;
