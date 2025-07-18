import React from 'react';

function ClaimHistory({ history }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-yellow-700 mb-2">📜 Claim History</h2>
      <ul className="bg-white shadow rounded-lg divide-y max-h-64 overflow-y-auto">
        {history.map(entry => (
          <li key={entry._id} className="p-2 text-left">
            <strong>{entry.userId.name}</strong> claimed <strong>{entry.pointsClaimed}</strong> points on {new Date(entry.claimedAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClaimHistory;