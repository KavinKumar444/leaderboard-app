exports.getHistory = async (req, res) => {
  // Fetch from DB or send sample data
  const history = [
    { user: "John", points: 10, claimedAt: "2025-07-17T12:34:56Z" },
    { user: "Jane", points: 7, claimedAt: "2025-07-17T13:00:00Z" },
  ];
  res.status(200).json(history);
};
