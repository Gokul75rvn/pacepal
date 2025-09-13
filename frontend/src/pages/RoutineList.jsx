import React from 'react';

const RoutineList = () => {
  const routines = JSON.parse(localStorage.getItem('routines') || '[]');

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-dark mb-8">Saved Routines</h1>
      {routines.length === 0 ? (
        <div className="text-gray-500">No routines saved yet.</div>
      ) : (
        <div className="space-y-6 max-w-xl mx-auto">
          {routines.map((routine, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2">{routine.name}</h2>
              <ul className="mb-2">
                {routine.habits.map((habit, hidx) => (
                  <li key={hidx} className="flex items-center justify-between py-1">
                    <span>{habit.name}</span>
                    <span className="text-sm text-gray-500">{habit.duration} min</span>
                  </li>
                ))}
              </ul>
              <div className="text-right text-primary font-medium">
                Total: {routine.habits.reduce((sum, h) => sum + h.duration, 0)} min
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoutineList;
