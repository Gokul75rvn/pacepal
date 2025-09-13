import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Lee' },
  { id: 4, name: 'Diana Patel' },
  { id: 5, name: 'Ethan Brown' },
  { id: 6, name: 'Fiona Green' },
  { id: 7, name: 'George White' },
  { id: 8, name: 'Hannah Black' },
  { id: 9, name: 'Ivan Garcia' },
  { id: 10, name: 'Julia Kim' },
  { id: 11, name: 'Kevin Lee' },
  { id: 12, name: 'Lily Chen' },
  { id: 13, name: 'Mason Clark' },
  { id: 14, name: 'Nina Lopez' },
  { id: 15, name: 'Oscar Turner' },
  { id: 16, name: 'Priya Singh' },
  { id: 17, name: 'Quinn Adams' },
  { id: 18, name: 'Ravi Kumar' },
  { id: 19, name: 'Sara Wilson' },
  { id: 20, name: 'Tommy Nguyen' },
];

const CommunityFriends = () => {
  const [users, setUsers] = useState(initialUsers);
  const [friends, setFriends] = useState([]);

  const handleAddFriend = (user) => {
    setFriends([...friends, user]);
    setUsers(users.filter(u => u.id !== user.id));
  };

  const handleRemoveFriend = (user) => {
    setUsers([...users, user]);
    setFriends(friends.filter(f => f.id !== user.id));
  };

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4 text-primary">Find Friends</h1>
      <p className="text-lg text-gray-700 mb-8">Connect with other users and grow together.</p>
      <div className="max-w-lg mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-4 text-dark">Suggested Friends</h2>
        <ul className="space-y-4">
          {users.length === 0 && <li className="text-gray-500">No more suggestions.</li>}
          {users.map(user => (
            <li key={user.id} className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-medium text-lg text-dark">{user.name}</div>
              </div>
              <button
                className="mt-2 sm:mt-0 bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => handleAddFriend(user)}
              >
                Add Friend
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-dark">Your Friends</h2>
        <ul className="space-y-4">
          {friends.length === 0 && <li className="text-gray-500">No friends yet.</li>}
          {friends.map(user => (
            <li key={user.id} className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-medium text-lg text-dark">{user.name}</div>
              </div>
              <button
                className="mt-2 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                onClick={() => handleRemoveFriend(user)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunityFriends;
