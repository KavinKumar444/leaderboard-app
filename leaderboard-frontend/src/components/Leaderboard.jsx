import React from 'react';

function Leaderboard({ leaderboard }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🏆 Leaderboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {leaderboard.map((user, index) => (
          <div key={user._id} className={\`rounded-lg p-4 shadow-lg \${index === 0 ? 'bg-yellow-300' : index === 1 ? 'bg-gray-300' : index === 2 ? 'bg-orange-300' : 'bg-white'}\`}>
            <h3 className="text-xl font-bold">{index + 1}. {user.name}</h3>
            <p className="text-lg text-gray-700">Points: {user.totalPoints}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;