import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

const initialHabits = [
  { name: 'Drink the water', time: '07:00 AM', icon: '💧' },
  { name: 'Walk', time: '08:00 AM', icon: '🚶‍♂️' },
  { name: 'Water Plants', time: '09:00 AM', icon: '🪴' },
  { name: 'Sleeping', time: '10:00 PM', icon: '🛌' },
  { name: 'Running', time: '06:00 AM', icon: '🏃‍♂️' },
  { name: 'Eat healthy', time: '12:30 PM', icon: '🥗' },
];

const AllHabitsSchedule = () => {
  const [habits, setHabits] = useState(() => {
    const userSchedules = JSON.parse(localStorage.getItem('userSchedules') || '[]');
    return [...initialHabits, ...userSchedules];
  });
  const userSchedulesCount = JSON.parse(localStorage.getItem('userSchedules') || '[]').length;

  // Reload user schedules from localStorage when page is shown (e.g., after adding)
  useEffect(() => {
    const userSchedules = JSON.parse(localStorage.getItem('userSchedules') || '[]');
    setHabits([...initialHabits, ...userSchedules]);
  }, []);

  const handleDeleteUserSchedule = (idx) => {
    const initialCount = initialHabits.length;
    const userSchedules = JSON.parse(localStorage.getItem('userSchedules') || '[]');
    userSchedules.splice(idx - initialCount, 1);
    localStorage.setItem('userSchedules', JSON.stringify(userSchedules));
    setHabits([...initialHabits, ...userSchedules]);
  };
  const [editIdx, setEditIdx] = useState(null);
  const [editHabit, setEditHabit] = useState({ name: '', time: '' });
  const navigate = useNavigate();

  const handleEdit = (idx) => {
    setEditIdx(idx);
    setEditHabit({ name: habits[idx].name, time: habits[idx].time });
  };

  const handleSave = (idx) => {
    const updated = [...habits];
    updated[idx] = { ...updated[idx], name: editHabit.name, time: editHabit.time };
    setHabits(updated);
    setEditIdx(null);
  };

  const handleCancel = () => {
    setEditIdx(null);
  };

  const handleSubmit = () => {
    toast.success('Schedule updated!');
    navigate('/schedule-details', { state: { habits } });
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h1 className="text-3xl font-bold text-dark mb-8">All Habits Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {habits.map((habit, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex items-center justify-between transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
            <div className="flex items-center">
              <span className="text-3xl mr-4">{habit.icon}</span>
              <div>
                {editIdx === idx ? (
                  <>
                    <input
                      type="text"
                      className="font-semibold text-lg border-b border-gray-300 mb-2 focus:outline-none"
                      value={editHabit.name}
                      onChange={e => setEditHabit({ ...editHabit, name: e.target.value })}
                    />
                    <input
                      type="text"
                      className="text-sm text-gray-500 border-b border-gray-300 focus:outline-none"
                      value={editHabit.time}
                      onChange={e => setEditHabit({ ...editHabit, time: e.target.value })}
                    />
                  </>
                ) : (
                  <>
                    <div className="font-semibold text-lg">{habit.name}</div>
                    <div className="text-sm text-gray-500">Time: {habit.time}</div>
                  </>
                )}
              </div>
            </div>
            {editIdx === idx ? (
              <div className="flex space-x-2">
                <button className="bg-primary text-white px-4 py-2 rounded-md font-medium" onClick={() => handleSave(idx)}>Save</button>
                <button className="bg-gray-200 text-dark px-4 py-2 rounded-md font-medium" onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <button className="bg-primary text-white px-4 py-2 rounded-md font-medium">Continue</button>
                <button className="bg-gray-200 text-dark px-4 py-2 rounded-md font-medium" onClick={() => handleEdit(idx)}>Edit</button>
                {/* Show delete button only for user-added schedules */}
                {idx >= initialHabits.length && (
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md font-medium" onClick={() => handleDeleteUserSchedule(idx)}>Delete</button>
                )}
              </div>
            )}
          </div>
        ))}
        {/* Add New Schedule Card */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:bg-gray-50" onClick={() => navigate('/add-schedule')}>
          <div className="flex items-center">
            <AiOutlinePlus className="text-4xl mr-4 text-primary" />
            <span className="font-semibold text-lg text-primary">Add New Schedule</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end mb-6">
        <button
          className="bg-primary text-white px-6 py-2 rounded-md font-medium shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
  <div className="bg-gray-100 rounded-lg p-6 text-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
        <h2 className="text-xl font-bold mb-2">Continue with Email</h2>
        <p className="text-gray-600 mb-4">Get reminders and updates for your habit schedule via email.</p>
        <button
          className="bg-blue-500 text-white rounded px-6 py-2 transition-colors duration-200 hover:bg-blue-600"
          onClick={() => window.location.href = '/login'}
        >
          Continue with Email
        </button>
      </div>
      {/* Submit button above Continue with Email section */}
      <div className="flex justify-start mt-6 mb-6">
        
      </div>
    </div>
  );
};

export default AllHabitsSchedule;
