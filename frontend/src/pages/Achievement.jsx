import React from 'react';
import { achievementsData } from '../mock/achievementsData';

const Achievement = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
        {achievementsData.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
            <div>
              <div className="font-semibold text-lg">{item.title}</div>
              <div className="text-sm text-gray-500">{item.date}</div>
            </div>
            <span className="text-2xl ml-4">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
