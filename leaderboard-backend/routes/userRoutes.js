const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { addUser } = require('../controllers/userController');

router.post('/', addUser);
// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// POST - add new user
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newUser = new User({ name, points: 0 });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

module.exports = router;
