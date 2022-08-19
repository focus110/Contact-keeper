const express = require("express");
const router = express.Router();

// @route POST api/ussers
// @desc  Register a User
// @access Public
router.post("/", (req, res) => {
  res.send("register a user");
});

module.exports = router;
