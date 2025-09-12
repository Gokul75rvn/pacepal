
import React from 'react';

const scheduleData = [
  {
    icon: '💧',
    name: 'Drink the water',
    time: '07:00 AM',
  },
  {
    icon: '�‍♂️',
    name: 'Walk',
    time: '08:00 AM',
  },
  {
    icon: '🪴',
    name: 'Water Plants',
    time: '09:00 AM',
  },
  {
    icon: '🛌',
    name: 'Sleeping',
    time: '10:00 PM',
  },
  {
    icon: '🏃‍♂️',
    name: 'Running',
    time: '06:00 AM',
  },
  {
    icon: '🥗',
    name: 'Eat healthy',
    time: '12:30 PM',
  },
];

const ScheduleDetails = () => {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-dark mb-2">SCHEDULE</h1>
        <h2 className="text-xl text-dark mb-6">Thursday, April 18</h2>
        <div className="space-y-6 mb-8">
          {scheduleData.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md flex items-center justify-between px-6 py-5 transition hover:shadow-lg">
              <div className="flex items-center">
                <span className="text-3xl mr-4">{item.icon}</span>
                <span className="font-semibold text-lg text-dark">{item.name}</span>
              </div>
              <span className="text-md text-dark font-semibold tracking-wide">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetails;
