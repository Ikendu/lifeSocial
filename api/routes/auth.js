const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.send(`Helo authentic`);
});

module.exports = router;
