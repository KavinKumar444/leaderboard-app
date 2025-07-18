require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const claimRoutes = require('./routes/claimRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const historyRoutes = require('./routes/historyRoutes');

dotenv.config();

const app = express();
app.use(cors()); // ✅ Enables cross-origin requests
app.use(express.json());

// ✅ REST API Routes
app.use('/api/users', userRoutes);           // GET /users, POST /users
app.use('/api/claim', claimRoutes);          // POST /claim
app.use('/api/leaderboard', leaderboardRoutes); // GET /leaderboard
app.use('/history', historyRoutes);      // GET /history

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
console.log("Mongo URI:", process.env.MONGODB_URI);
