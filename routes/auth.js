const express = require("express");
const router = express.Router();

// @route GET api/ussers
// @desc  Get logged in User
// @access Private
router.get("/", (req, res) => {
  res.send("Get logged in User");
});

// @route POST api/ussers
// @desc  Auth user & get token
// @access Public
router.post("/", (req, res) => {
  res.send("Login user");
});

module.exports = router;
