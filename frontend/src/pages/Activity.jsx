import React from 'react';
import { activityData } from '../mock/activityData';

const Activity = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Activity</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
        {activityData.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
            <div>
              <div className="font-semibold text-lg">{item.description}</div>
              <div className="text-sm text-gray-500">{item.date}</div>
            </div>
            <span className="text-2xl ml-4">
              {item.type === 'positive' && '⬆️'}
              {item.type === 'negative' && '⬇️'}
              {item.type === 'achievement' && '🏆'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
