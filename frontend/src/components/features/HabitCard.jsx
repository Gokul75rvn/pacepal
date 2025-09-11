import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-hot-toast'
import { FaCheck, FaTimes, FaEdit, FaTrash, FaCalendarAlt, FaFire } from 'react-icons/fa'
import { format } from 'date-fns'
import habitService from '../../services/habitService'
import Button from '../common/Button'
import Modal from '../common/Modal'

const HabitCard = ({ habit }) => {
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const queryClient = useQueryClient()

  const completeHabitMutation = useMutation(
    (habitId) => habitService.completeHabit(habitId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('habits')
        toast.success('Habit marked as completed!')
      },
      onError: (error) => {
        toast.error('Failed to complete habit')
      }
    }
  )

  const uncompleteHabitMutation = useMutation(
    (habitId) => habitService.uncompleteHabit(habitId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('habits')
        toast.success('Habit marked as incomplete')
      },
      onError: (error) => {
        toast.error('Failed to update habit')
      }
    }
  )

  const deleteHabitMutation = useMutation(
    (habitId) => habitService.deleteHabit(habitId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('habits')
        toast.success('Habit deleted successfully')
        setShowDeleteModal(false)
      },
      onError: (error) => {
        toast.error('Failed to delete habit')
      }
    }
  )

  const handleComplete = () => {
    completeHabitMutation.mutate(habit._id)
  }

  const handleUncomplete = () => {
    uncompleteHabitMutation.mutate(habit._id)
  }

  const handleDelete = () => {
    deleteHabitMutation.mutate(habit._id)
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
              disabled={uncompleteHabitMutation.isLoading}
            >
              <FaTimes className="mr-2" /> Mark Incomplete
            </Button>
          ) : (
            <Button 
              variant="primary" 
              size="sm"
              className="w-full"
              onClick={handleComplete}
              disabled={completeHabitMutation.isLoading}
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
              disabled={deleteHabitMutation.isLoading}
            >
              {deleteHabitMutation.isLoading ? 'Deleting...' : 'Delete'}
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