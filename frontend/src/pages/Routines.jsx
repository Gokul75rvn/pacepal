import React, { useState } from 'react'
import { FaPlus, FaPlay } from 'react-icons/fa'
import RoutineBuilder from '../components/features/RoutineBuilder'
import Button from '../components/common/Button'
import Modal from '../components/common/Modal'

const Routines = () => {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [routines, setRoutines] = useState([
    {
      id: '1',
      name: 'Morning Routine',
      habits: [
        { name: 'Drink Water', duration: 5 },
        { name: 'Meditation', duration: 10 },
        { name: 'Exercise', duration: 20 },
      ],
      totalDuration: 35
    },
    {
      id: '2',
      name: 'Evening Routine',
      habits: [
        { name: 'Read', duration: 30 },
        { name: 'Journal', duration: 15 },
      ],
      totalDuration: 45
    }
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-dark">My Routines</h1>
        <Button variant="primary" onClick={() => setShowCreateModal(true)}>
          <FaPlus className="mr-2" /> Create Routine
        </Button>
      </div>
      
      {routines.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-dark mb-2">No routines yet</h3>
          <p className="text-gray-600 mb-6">
            Create your first routine to streamline your daily activities
          </p>
          <Button variant="primary" onClick={() => setShowCreateModal(true)}>
            <FaPlus className="mr-2" /> Create Your First Routine
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routines.map(routine => (
            <div key={routine.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-dark">{routine.name}</h3>
                <Button variant="primary" size="sm">
                  <FaPlay className="mr-1" /> Start
                </Button>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Habits: {routine.habits.length}</span>
                  <span>Total: {routine.totalDuration} min</span>
                </div>
                
                <div className="space-y-2">
                  {routine.habits.map((habit, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-2">
                        <span className="text-primary text-xs">{index + 1}</span>
                      </div>
                      <span>{habit.name}</span>
                      <span className="ml-auto text-gray-500">{habit.duration} min</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">
                  <span className="text-red-500">Delete</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Create Routine Modal */}
      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create New Routine"
        size="lg"
        footer={
          <>
            <Button variant="ghost" onClick={() => setShowCreateModal(false)}>
              Cancel
            </Button>
            <Button variant="primary">
              Save Routine
            </Button>
          </>
        }
      >
        <RoutineBuilder />
      </Modal>
    </div>
  )
}

export default Routines