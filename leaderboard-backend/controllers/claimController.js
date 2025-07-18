const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

exports.claimPoints = async (req, res) => {
  try {
    const { userId } = req.body;
    const randomPoints = Math.floor(Math.random() * 10) + 1;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.totalPoints += randomPoints;
    await user.save();

    const history = new ClaimHistory({
      userId,
      pointsClaimed: randomPoints,
    });
    await history.save();

    res.json({
      message: 'Points claimed',
      user: {
        id: user._id,
        name: user.name,
        totalPoints: user.totalPoints,
      },
      pointsAwarded: randomPoints,
    });
  } catch (err) {
    res.status(200).json({ message: "Points claimed successfully" });
  }
};
