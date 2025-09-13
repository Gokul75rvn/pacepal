import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaListAlt, FaClock, FaTrash } from 'react-icons/fa';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const RoutineBuilderPage = () => {
  const [routineName, setRoutineName] = useState('');
  const navigate = useNavigate();
  const [habits, setHabits] = useState([
    { id: 1, name: 'Wake Up', duration: 5 },
    { id: 2, name: 'Stretch', duration: 10 },
    { id: 3, name: 'Read', duration: 15 },
  ]);
  const [newHabit, setNewHabit] = useState({ name: '', duration: 10 });

  const addHabit = () => {
    if (!newHabit.name.trim()) return;
    setHabits([...habits, { ...newHabit, id: Date.now() }]);
    setNewHabit({ name: '', duration: 10 });
  };

  const removeHabit = (id) => {
    setHabits(habits.filter(h => h.id !== id));
  };


  const totalDuration = habits.reduce((sum, h) => sum + h.duration, 0);

  const handleSaveRoutine = () => {
    if (!routineName.trim() || habits.length === 0) return;
    const routines = JSON.parse(localStorage.getItem('routines') || '[]');
    routines.push({ name: routineName, habits });
    localStorage.setItem('routines', JSON.stringify(routines));
    navigate('/routine-list');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-dark mb-8 flex items-center"><FaListAlt className="mr-3" />Routine Builder</h1>
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto">
        <Input
          label="Routine Name"
          placeholder="e.g. Morning Routine"
          value={routineName}
          onChange={e => setRoutineName(e.target.value)}
          className="mb-6"
        />
        <div className="mb-6">
          <h4 className="text-md font-medium text-dark mb-3">Add Habit</h4>
          <div className="flex space-x-2">
            <Input
              placeholder="Habit name"
              value={newHabit.name}
              onChange={e => setNewHabit({ ...newHabit, name: e.target.value })}
              className="flex-grow"
            />
            <Input
              type="number"
              placeholder="Duration (min)"
              value={newHabit.duration}
              onChange={e => setNewHabit({ ...newHabit, duration: parseInt(e.target.value) || 0 })}
              className="w-24"
            />
            <Button variant="primary" onClick={addHabit}>Add</Button>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-md font-medium text-dark mb-3">Routine Habits</h4>
          {habits.length === 0 ? (
            <div className="text-gray-500">No habits added yet.</div>
          ) : (
            <ul>
              {habits.map(habit => (
                <li key={habit.id} className="flex items-center justify-between p-3 mb-2 bg-gray-50 rounded-md border border-gray-200">
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-gray-400" />
                    <span className="font-medium">{habit.name}</span>
                    <span className="ml-4 text-sm text-gray-500">{habit.duration} min</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => removeHabit(habit.id)}>
                    <FaTrash className="text-red-500" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium">
            Total Duration: <span className="text-primary">{totalDuration} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutineBuilderPage;
