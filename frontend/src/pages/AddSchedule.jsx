import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddSchedule = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [icon, setIcon] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store new schedule in localStorage
    const newSchedule = { name, time, icon };
    const existing = JSON.parse(localStorage.getItem('userSchedules') || '[]');
    localStorage.setItem('userSchedules', JSON.stringify([...existing, newSchedule]));
    navigate('/habits-schedule');
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Schedule</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Icon (emoji)</label>
            <input type="text" value={icon} onChange={e => setIcon(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 💧" />
          </div>
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. Drink Water" />
          </div>
          <div>
            <label className="block font-medium mb-1">Time</label>
            <input type="text" value={time} onChange={e => setTime(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. 07:00 AM" />
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded font-medium w-full">Add Schedule</button>
        </form>
      </div>
    </div>
  );
};

export default AddSchedule;
