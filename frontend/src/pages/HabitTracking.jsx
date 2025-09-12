import React from 'react';

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const mockHabits = [
  { id: 1, name: 'Drink the water', progress: 80, streak: 5 },
  { id: 2, name: 'Walk', progress: 100, streak: 7 },
  { id: 3, name: 'Water Plants', progress: 60, streak: 2 },
  { id: 4, name: 'Mediate', progress: 100, streak: 10 },
  { id: 5, name: 'Sleeping', progress: 90, streak: 8 },
  { id: 6, name: 'Running', progress: 100, streak: 12 },
  { id: 7, name: 'Eat healthy', progress: 70, streak: 4 },
  { id: 8, name: 'Reading', progress: 100, streak: 15 },
];

const HabitTracking = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Habit Tracking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {mockHabits.map(habit => (
          <div key={habit.id} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center min-w-[300px] transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="font-bold text-2xl mb-4">{habit.name}</div>
            <div className="text-md text-gray-600 mb-2">Progress: {habit.progress}%</div>
            <div className="text-md text-green-600 font-semibold mb-2">Streak: {habit.streak} days</div>
            <div className="flex items-center mt-2">
              {habit.progress === 100 ? (
                <FaCheckCircle className="text-green-500 text-2xl mr-2" />
              ) : (
                <FaTimesCircle className="text-red-400 text-2xl mr-2" />
              )}
              <span className="font-semibold text-md">{habit.progress === 100 ? 'Completed' : 'Incomplete'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitTracking;
