import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FaCheck, FaTimes, FaEdit, FaTrash, FaCalendarAlt, FaFire } from 'react-icons/fa'
import { format } from 'date-fns'
import * as habitService from '../../services/habitService'
import Button from '../common/Button'
import Modal from '../common/Modal'

const HabitCard = ({ habit, onHabitUpdate }) => {
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleComplete = async () => {
    setIsLoading(true)
    try {
      await habitService.completeHabit(habit._id, '')
      toast.success('Habit marked as completed!')
      onHabitUpdate()
    } catch (error) {
      toast.error('Failed to complete habit')
    } finally {
      setIsLoading(false)
    }
  }

  const handleUncomplete = async () => {
    setIsLoading(true)
    try {
      await habitService.uncompleteHabit(habit._id)
      toast.success('Habit marked as incomplete')
      onHabitUpdate()
    } catch (error) {
      toast.error('Failed to update habit')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      await habitService.deleteHabit(habit._id)
      toast.success('Habit deleted successfully')
      setShowDeleteModal(false)
      onHabitUpdate()
    } catch (error) {
      toast.error('Failed to delete habit')
    } finally {
      setIsLoading(false)
    }
  }

  const getStreakColor = (streak) => {
    if (streak >= 21) return 'text-green-500'
    if (streak >= 7) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-dark">{habit.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{habit.description}</p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setShowEditModal(true)}
            >
              <FaEdit />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setShowDeleteModal(true)}
            >
              <FaTrash className="text-red-500" />
            </Button>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">
              {habit.frequency.charAt(0).toUpperCase() + habit.frequency.slice(1)}
            </span>
          </div>
          
          <div className="flex items-center">
            <FaFire className={`${getStreakColor(habit.streak)} mr-1`} />
            <span className="font-medium">{habit.streak} days</span>
          </div>
        </div>
        
        <div className="mt-4">
          {habit.completedToday ? (
            <Button 
              variant="outline" 
              size="sm"
              className="w-full"
              onClick={handleUncomplete}
              disabled={isLoading}
            >
              <FaTimes className="mr-2" /> Mark Incomplete
            </Button>
          ) : (
            <Button 
              variant="primary" 
              size="sm"
              className="w-full"
              onClick={handleComplete}
              disabled={isLoading}
            >
              <FaCheck className="mr-2" /> Mark Complete
            </Button>
          )}
        </div>
      </div>
      
      {/* Edit Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Habit"
        footer={
          <>
            <Button variant="ghost" onClick={() => setShowEditModal(false)}>
              Cancel
            </Button>
            <Button variant="primary">
              Save Changes
            </Button>
          </>
        }
      >
        <div>
          <p>Edit functionality would go here</p>
        </div>
      </Modal>
      
      {/* Delete Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Habit"
        footer={
          <>
            <Button variant="ghost" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>
            <Button 
              variant="danger" 
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? 'Deleting...' : 'Delete'}
            </Button>
          </>
        }
      >
        <div>
          <p>Are you sure you want to delete "{habit.name}"? This action cannot be undone.</p>
        </div>
      </Modal>
    </div>
  )
}

export default HabitCard