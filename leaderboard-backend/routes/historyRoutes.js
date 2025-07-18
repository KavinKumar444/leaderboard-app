// routes/historyRoutes.js
const express = require("express");
const router = express.Router();
const ClaimHistory = require("../models/historyModel");
const { getHistory } = require("../controllers/historyController");

// GET /history - fetch all claim history
router.get("/", getHistory);
router.get("/", async (req, res) => {
  try {
    const history = await ClaimHistory.find().populate("userId");
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
