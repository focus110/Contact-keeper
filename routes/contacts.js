const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../model/User");
const Contact = require("../model/Contact");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// @route GET api/contacts
// @desc  Get all users contacts
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route POST api/contacts
// @desc  Add new contact
// @access Private
router.post("/", (req, res) => {
  res.send("Add conatct");
});

// @route PUT api/contacts/:
// @desc  Update contact
// @access Private
router.put("/id:", (req, res) => {
  res.send("Update contact");
});

// @route Delete api/contacts/:
// @desc  Delete contact
// @access Private
router.delete("/id:", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
