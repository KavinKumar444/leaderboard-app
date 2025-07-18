import React, { useState } from 'react';
import axios from 'axios';

function UserSelector({ users, selectedUser, setSelectedUser, refresh }) {
  const [newUser, setNewUser] = useState('');

  const addUser = async () => {
    if (!newUser.trim()) return;
    await axios.post('http://localhost:5000/api/users', { name: newUser });
    setNewUser('');
    refresh();
  };

  return (
    <div className="space-y-4">
      <select
        className="p-2 border rounded-md"
        value={selectedUser}
        onChange={e => setSelectedUser(e.target.value)}
      >
        <option value="">Select a User</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>

      <div>
        <input
          className="border p-2 mr-2"
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder="New user name"
        />
        <button onClick={addUser} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add User
        </button>
      </div>
    </div>
  );
}

export default UserSelector;