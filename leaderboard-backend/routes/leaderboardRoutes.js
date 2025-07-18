const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// GET /leaderboard - sorted list of users by total points
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

module.exports = router;
