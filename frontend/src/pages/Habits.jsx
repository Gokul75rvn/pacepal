import React, { useState } from 'react'
import DatePicker from '../components/common/DatePicker'
import { useHabits } from '../hooks/useHabits'
import { FaPlus, FaSearch, FaFilter } from 'react-icons/fa'
import HabitCard from '../components/features/HabitCard'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import Modal from '../components/common/Modal'

const Habits = () => {
  const { habits, loading, addHabit } = useHabits()
  const [showAddModal, setShowAddModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  
  const [selectedDate, setSelectedDate] = useState('');
  const [newHabit, setNewHabit] = useState({
    name: '',
    description: '',
    frequency: 'daily',
    goal: 1
  })

  const filteredHabits = habits.filter(habit => {
    const matchesSearch = habit.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      habit.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Date filtering: assumes habit.createdAt is ISO string (e.g., '2025-09-12T08:00:00.000Z')
    const matchesDate = selectedDate
      ? habit.createdAt && habit.createdAt.slice(0, 10) === selectedDate
      : true;

    let matchesFilter = true;
    if (filter === 'completed') matchesFilter = habit.completedToday;
    if (filter === 'pending') matchesFilter = !habit.completedToday;

    return matchesSearch && matchesFilter && matchesDate;
  });

  const handleAddHabit = async () => {
    const result = await addHabit(newHabit)
    if (result.success) {
      setShowAddModal(false)
      setNewHabit({
        name: '',
        description: '',
        frequency: 'daily',
        goal: 1
      })
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold text-dark mb-4 md:mb-0">My Habits</h1>
      </div>
      
  <div className="flex flex-col md:flex-row gap-4 mb-2 items-center">
    <div className="relative flex-grow">
      <Input
        placeholder="Search habits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10"
      />
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
    </div>
    <div className="flex items-center">
      <FaFilter className="text-gray-500 mr-2" />
      <select 
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All Habits</option>
        <option value="completed">Completed Today</option>
        <option value="pending">Pending Today</option>
      </select>
      {/* Date Picker right next to filter */}
      <div className="ml-2 flex flex-col items-center">
        <DatePicker
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
        {selectedDate && (
          <div className="mt-3 text-sm font-medium text-gray-700 bg-gray-100 rounded px-3 py-1 shadow">
            {new Date(selectedDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            {"  |  "}
            {new Date(selectedDate).toLocaleDateString(undefined, { weekday: 'long' })}
          </div>
        )}
      </div>


    </div>
  </div>
      
      {filteredHabits.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-dark mb-2">No habits found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || filter !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'Get started by adding your first habit'}
          </p>
          {!searchTerm && filter === 'all' && (
            <Button variant="primary" onClick={() => setShowAddModal(true)}>
              <FaPlus className="mr-2" /> Add Your First Habit
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHabits.map(habit => (
            <HabitCard key={habit._id} habit={habit} />
          ))}
        </div>
      )}
      
      {/* Add Habit Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Habit"
        footer={
          <>
            <Button variant="ghost" onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddHabit}>
              Add Habit
            </Button>
          </>
        }
      >
        <div>
          <Input
            label="Habit Name"
            placeholder="e.g. Morning Meditation"
            value={newHabit.name}
            onChange={(e) => setNewHabit({...newHabit, name: e.target.value})}
          />
          
          <Input
            label="Description"
            placeholder="Why is this habit important to you?"
            value={newHabit.description}
            onChange={(e) => setNewHabit({...newHabit, description: e.target.value})}
          />
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Frequency
            </label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={newHabit.frequency}
              onChange={(e) => setNewHabit({...newHabit, frequency: e.target.value})}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          
          <Input
            label="Daily Goal"
            type="number"
            placeholder="How many times per day?"
            value={newHabit.goal}
            onChange={(e) => setNewHabit({...newHabit, goal: parseInt(e.target.value) || 1})}
          />
        </div>
      </Modal>
    </div>
  )
}

export default Habits