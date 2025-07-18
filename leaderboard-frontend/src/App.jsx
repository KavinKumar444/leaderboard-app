import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSelector from './components/UserSelector';
import Leaderboard from './components/Leaderboard';
import ClaimHistory from './components/ClaimHistory';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [history, setHistory] = useState([]);

  const backend = 'http://localhost:5000';

  const fetchData = async () => {
    const [userRes, leaderboardRes, historyRes] = await Promise.all([
      axios.get(`${backend}/api/users`),
      axios.get(`${backend}/api/users/leaderboard`),
      axios.get(`${backend}/api/users/history`)
    ]);
    setUsers(userRes.data);
    setLeaderboard(leaderboardRes.data);
    setHistory(historyRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const claimPoints = async () => {
    if (!selectedUser) return alert("Select a user first");
    const res = await axios.post(`${backend}/api/claim/${selectedUser}`);
    alert(`${res.data.user.name} claimed ${res.data.pointsAwarded} points!`);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-yellow-100 text-center p-6">
      <h1 className="text-3xl font-bold text-yellow-700 mb-6">🏅 Monthly Wealth Ranking</h1>
      <UserSelector
        users={users}
        setSelectedUser={setSelectedUser}
        selectedUser={selectedUser}
        refresh={fetchData}
      />
      <button
        onClick={claimPoints}
        className="bg-yellow-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-yellow-600"
      >
        Claim Points
      </button>
      <Leaderboard leaderboard={leaderboard} />
      <ClaimHistory history={history} />
    </div>
  );
}

export default App;