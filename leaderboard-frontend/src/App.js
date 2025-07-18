import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [history, setHistory] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get(`${API}/api/users`);
    setUsers(res.data);
  };

  const fetchLeaderboard = async () => {
    const res = await axios.get(`${API}/api/leaderboard`);
    setLeaderboard(res.data);
  };

  const fetchHistory = async () => {
    const res = await axios.get(`${API}/api/claim-history`);
    setHistory(res.data);
  };

  const handleClaim = async () => {
    if (!selectedUserId) return alert("Please select a user");
    await axios.post(`${API}/api/claim`, { userId: selectedUserId });
    fetchLeaderboard();
    fetchHistory();
  };

  const handleAddUser = async () => {
    if (!newUser.trim()) return;
    await axios.post(`${API}/api/users`, { name: newUser });
    setNewUser("");
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
    fetchHistory();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Leaderboard App</h1>

      <div className="flex gap-4 items-center">
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Select User</option>
          {users.map((u) => (
            <option key={u._id} value={u._id}>
              {u.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleClaim}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Claim Points
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Add user"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={handleAddUser}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Rank</th>
              <th className="p-2 border">User</th>
              <th className="p-2 border">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((u, i) => (
              <tr key={u._id}>
                <td className="p-2 border">{i + 1}</td>
                <td className="p-2 border">{u.name}</td>
                <td className="p-2 border">{u.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Claim History</h2>
        <ul className="list-disc pl-5">
          {history.map((h, i) => (
            <li key={i}>
              {h.user?.name || "Unknown"} claimed {h.points} points
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
