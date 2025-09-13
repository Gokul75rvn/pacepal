import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinGroup = () => {
  const [groupCode, setGroupCode] = useState('');
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!groupCode.trim()) {
      setError('Please enter a group code.');
      return;
    }
    // Simulate join success
    setJoined(true);
    setError('');
    setTimeout(() => navigate('/community'), 1200);
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">Join a Group</h2>
      {!joined ? (
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold text-gray-700">Group Code</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            value={groupCode}
            onChange={e => setGroupCode(e.target.value)}
            placeholder="Enter group code"
          />
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Join Group
          </button>
        </form>
      ) : (
        <div className="text-green-600 text-center text-lg font-semibold">Successfully joined the group!</div>
      )}
    </div>
  );
};

export default JoinGroup;
