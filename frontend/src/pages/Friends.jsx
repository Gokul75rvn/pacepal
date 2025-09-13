import React from 'react';
import { friendsData } from '../mock/friendsData';

const Friends = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Friends</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
        {friendsData.map(friend => (
          <div key={friend.id} className="flex items-center bg-white rounded-lg shadow p-4">
            <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <div className="font-semibold text-lg">{friend.name}</div>
              <div className={`text-sm ${friend.status === 'Online' ? 'text-green-500' : friend.status === 'Away' ? 'text-yellow-500' : 'text-gray-400'}`}>{friend.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
